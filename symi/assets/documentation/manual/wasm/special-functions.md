# Special functions

Special functions retain their symbolic form when a closed expression is not available.

## Gamma family

The first-tier gamma special functions. Symbolic special values, the
non-positive-integer poles, the recurrence/reflection identities, and
arbitrary-precision numeric evaluation (real and complex) all apply.

### gamma

<a id="placement-placement.wasm.wasm_class.context_gamma.15bd4b87da3c"></a>
Raw WebAssembly: `pub fn gamma(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_gamma.c6aee0f501e6"></a>
Raw WebAssembly: `fn gamma(x: &Expression) -> Result<Expression, JsError>`


The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

### log_gamma

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.log_gamma`](/symi/python/special-functions#log_gamma) in Python, [`UniffiSession.logGamma`](/symi/kotlin/special-functions#log_gamma) in Kotlin, [`UniffiSession.logGamma`](/symi/swift/special-functions#log_gamma) in Swift, [`api::Expression::log_gamma`](/symi/rust/special-functions#log_gamma) in Rust.*


The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

### digamma

<a id="placement-placement.wasm.wasm_class.context_digamma.8058ef2c8766"></a>
Raw WebAssembly: `pub fn digamma(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_digamma.0d3732417250"></a>
Raw WebAssembly: `fn digamma(x: &Expression) -> Result<Expression, JsError>`


The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

### polygamma

<a id="placement-placement.wasm.wasm_class.context_polygamma.21297ea61e06"></a>
Raw WebAssembly: `pub fn polygamma(&self, order: &Expression, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_polygamma.79d3cb4f4460"></a>
Raw WebAssembly: `fn polygamma(order: &Expression, x: &Expression) -> Result<Expression, JsError>`


The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma;
`polygamma(0, x)` reduces to `digamma(x)`.

### beta

<a id="placement-placement.wasm.wasm_class.context_beta.10022cde03c3"></a>
Raw WebAssembly: `pub fn beta(&self, x: &Expression, y: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_beta.f91b83241a08"></a>
Raw WebAssembly: `fn beta(x: &Expression, y: &Expression) -> Result<Expression, JsError>`


The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

### zeta

<a id="placement-placement.wasm.wasm_class.context_zeta.e838a7754a4e"></a>
Raw WebAssembly: `pub fn zeta(&self, s: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_zeta.25f1de1c8802"></a>
Raw WebAssembly: `fn zeta(s: &Expression) -> Result<Expression, JsError>`


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

<a id="placement-placement.wasm.wasm_class.context_polylogarithm.dc47bff1e1fe"></a>
Raw WebAssembly: `pub fn polylogarithm(&self, order: &Expression, argument: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_polylogarithm.8ff9e7750a6e"></a>
Raw WebAssembly: `fn polylogarithm(order: &Expression, argument: &Expression) -> Result<Expression, JsError>`


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


## Additional API

<a id="placement-placement.wasm.wasm_class.context_carlsonrc.903b0b7b6b2b"></a>
### Context.carlsonRc

`pub fn carlson_rc(&self, first_argument: &Expression, second_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_carlsonrd.11aac1f3979a"></a>
### Context.carlsonRd

`pub fn carlson_rd(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_carlsonrf.6d094605d199"></a>
### Context.carlsonRf

`pub fn carlson_rf(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_carlsonrj.a4fb7ba28bd8"></a>
### Context.carlsonRj

`pub fn carlson_rj(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression, fourth_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialfirstkind.0a328846aedc"></a>
### Context.chebyshevPolynomialFirstKind

`pub fn chebyshev_polynomial_first_kind(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialsecondkind.e583655d7674"></a>
### Context.chebyshevPolynomialSecondKind

`pub fn chebyshev_polynomial_second_kind(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_elliptice.5532b3804b95"></a>
### Context.ellipticE

`pub fn elliptic_e(&self, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticeincomplete.25cb5b0479c7"></a>
### Context.ellipticEIncomplete

`pub fn elliptic_e_incomplete(&self, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticf.33bd7036e7c9"></a>
### Context.ellipticF

`pub fn elliptic_f(&self, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_elliptick.629bbeb8e11c"></a>
### Context.ellipticK

`pub fn elliptic_k(&self, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticpi.c988463102bc"></a>
### Context.ellipticPi

`pub fn elliptic_pi(&self, characteristic: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticpiincomplete.719e94d7de55"></a>
### Context.ellipticPiIncomplete

`pub fn elliptic_pi_incomplete(&self, characteristic: &Expression, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_gegenbauerpolynomial.9c0b54be20d8"></a>
### Context.gegenbauerPolynomial

`pub fn gegenbauer_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_generalizedlaguerrepolynomial.2aafcd528a5f"></a>
### Context.generalizedLaguerrePolynomial

`pub fn generalized_laguerre_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hermitepolynomial.68f367f719e9"></a>
### Context.hermitePolynomial

`pub fn hermite_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hurwitzzeta.faec90c9388d"></a>
### Context.hurwitzZeta

`pub fn hurwitz_zeta(&self, s: &Expression, a: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometric0f1.eb8ad3cf9c53"></a>
### Context.hypergeometric0f1

`pub fn hypergeometric_0f1(&self, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometric1f1.658e3f7743d5"></a>
### Context.hypergeometric1f1

`pub fn hypergeometric_1f1(&self, upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometric2f1.941040609faf"></a>
### Context.hypergeometric2f1

`pub fn hypergeometric_2f1(&self, first_upper_parameter: &Expression, second_upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometricpfq.2b937c3c8db4"></a>
### Context.hypergeometricPfq

`pub fn hypergeometric_pfq(&self, upper_parameters: Vec<Expression>, lower_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobiamplitude.a587330f092b"></a>
### Context.jacobiAmplitude

`pub fn jacobi_amplitude(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobicn.f58ebda31a50"></a>
### Context.jacobiCn

`pub fn jacobi_cn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobidn.00819f251239"></a>
### Context.jacobiDn

`pub fn jacobi_dn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobipolynomial.efcf62ec673a"></a>
### Context.jacobiPolynomial

`pub fn jacobi_polynomial(&self, degree: &Expression, first_parameter: &Expression, second_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobisn.74cfc885f96f"></a>
### Context.jacobiSn

`pub fn jacobi_sn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta1.c4d23116584e"></a>
### Context.jacobiTheta1

`pub fn jacobi_theta_1(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta2.189cc40aeeea"></a>
### Context.jacobiTheta2

`pub fn jacobi_theta_2(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta3.0a910e4dfec6"></a>
### Context.jacobiTheta3

`pub fn jacobi_theta_3(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta4.4a26c72700a2"></a>
### Context.jacobiTheta4

`pub fn jacobi_theta_4(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_laguerrepolynomial.62995c0f2327"></a>
### Context.laguerrePolynomial

`pub fn laguerre_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_legendrepolynomial.28ff6dbacc69"></a>
### Context.legendrePolynomial

`pub fn legendre_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lerchphi.1a43d0de986c"></a>
### Context.lerchPhi

`pub fn lerch_phi(&self, argument: &Expression, order: &Expression, shift: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_loggamma.5ec5f03b6584"></a>
### Context.logGamma

`pub fn log_gamma(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_meijerg.ab8f46bb2c1a"></a>
### Context.meijerG

`pub fn meijer_g(&self, upper_numerator_parameters: Vec<Expression>, upper_denominator_parameters: Vec<Expression>, lower_numerator_parameters: Vec<Expression>, lower_denominator_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ultrasphericalpolynomial.0086e7e17f60"></a>
### Context.ultrasphericalPolynomial

`pub fn ultraspherical_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrc.dd3341aeb043"></a>
### module.carlsonRc

`fn carlson_rc(first_argument: &Expression, second_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrd.26b89bd7eade"></a>
### module.carlsonRd

`fn carlson_rd(first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrf.8415cba14475"></a>
### module.carlsonRf

`fn carlson_rf(first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrj.6686de7356a8"></a>
### module.carlsonRj

`fn carlson_rj(first_argument: &Expression, second_argument: &Expression, third_argument: &Expression, fourth_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialfirstkind.ebde5c207b56"></a>
### module.chebyshevPolynomialFirstKind

`fn chebyshev_polynomial_first_kind(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialsecondkind.c943050fbb05"></a>
### module.chebyshevPolynomialSecondKind

`fn chebyshev_polynomial_second_kind(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_elliptice.77784ec06567"></a>
### module.ellipticE

`fn elliptic_e(parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticeincomplete.07191f89a2c0"></a>
### module.ellipticEIncomplete

`fn elliptic_e_incomplete(amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticf.7cc3c6a31f32"></a>
### module.ellipticF

`fn elliptic_f(amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_elliptick.89c8ca5ccda5"></a>
### module.ellipticK

`fn elliptic_k(parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticpi.eb8d10ebaaa5"></a>
### module.ellipticPi

`fn elliptic_pi(characteristic: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticpiincomplete.9b0df8832d4d"></a>
### module.ellipticPiIncomplete

`fn elliptic_pi_incomplete(characteristic: &Expression, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_gegenbauerpolynomial.2785173f26a1"></a>
### module.gegenbauerPolynomial

`fn gegenbauer_polynomial(degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_generalizedlaguerrepolynomial.4f16cbeb161f"></a>
### module.generalizedLaguerrePolynomial

`fn generalized_laguerre_polynomial(degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hermitepolynomial.748805216715"></a>
### module.hermitePolynomial

`fn hermite_polynomial(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hurwitzzeta.729040f89142"></a>
### module.hurwitzZeta

`fn hurwitz_zeta(s: &Expression, a: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometric0f1.cef7a55e5327"></a>
### module.hypergeometric0f1

`fn hypergeometric_0f1(lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometric1f1.f872b9c5d868"></a>
### module.hypergeometric1f1

`fn hypergeometric_1f1(upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometric2f1.b66e8a62c1b1"></a>
### module.hypergeometric2f1

`fn hypergeometric_2f1(first_upper_parameter: &Expression, second_upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometricpfq.10c7ad6981f0"></a>
### module.hypergeometricPfq

`fn hypergeometric_pfq(upper_parameters: Vec<Expression>, lower_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobiamplitude.d177051aba22"></a>
### module.jacobiAmplitude

`fn jacobi_amplitude(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobicn.17eb37a567b9"></a>
### module.jacobiCn

`fn jacobi_cn(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobidn.e6c3ec6d7a4e"></a>
### module.jacobiDn

`fn jacobi_dn(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobipolynomial.74ad8252890c"></a>
### module.jacobiPolynomial

`fn jacobi_polynomial(degree: &Expression, first_parameter: &Expression, second_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobisn.a5c00c764a10"></a>
### module.jacobiSn

`fn jacobi_sn(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta1.7a2497134f65"></a>
### module.jacobiTheta1

`fn jacobi_theta_1(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta2.be1168718010"></a>
### module.jacobiTheta2

`fn jacobi_theta_2(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta3.00271ffa7a15"></a>
### module.jacobiTheta3

`fn jacobi_theta_3(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta4.1dd493afad49"></a>
### module.jacobiTheta4

`fn jacobi_theta_4(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_laguerrepolynomial.52100b9b20ee"></a>
### module.laguerrePolynomial

`fn laguerre_polynomial(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_legendrepolynomial.50ac16a05e94"></a>
### module.legendrePolynomial

`fn legendre_polynomial(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lerchphi.81f4f0c65935"></a>
### module.lerchPhi

`fn lerch_phi(argument: &Expression, order: &Expression, shift: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_loggamma.9e2c3da58bd0"></a>
### module.logGamma

`fn log_gamma(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_meijerg.c09fa2551e5f"></a>
### module.meijerG

`fn meijer_g(upper_numerator_parameters: Vec<Expression>, upper_denominator_parameters: Vec<Expression>, lower_numerator_parameters: Vec<Expression>, lower_denominator_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ultrasphericalpolynomial.bb8eb9784e52"></a>
### module.ultrasphericalPolynomial

`fn ultraspherical_polynomial(degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

