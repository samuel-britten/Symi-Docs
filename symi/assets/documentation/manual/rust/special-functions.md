# Special functions

Special functions retain their symbolic form when a closed expression is not available.

## Gamma family

The first-tier gamma special functions. Symbolic special values, the
non-positive-integer poles, the recurrence/reflection identities, and
arbitrary-precision numeric evaluation (real and complex) all apply.

### gamma

<a id="placement-placement.rust.native_rust.api_expression_gamma.29eb55104888"></a>
`symi::api::Expression — pub fn gamma(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_gamma.59dc77ac52f1"></a>
`symi::api::Session — pub fn gamma(&self, argument: &Expression) -> Result<Expression, ApiError>`


The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

### log_gamma

<a id="placement-placement.rust.native_rust.api_expression_log_gamma.ab07da665db2"></a>
`symi::api::Expression — pub fn log_gamma(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_log_gamma.574ab2a1c976"></a>
`symi::api::Session — pub fn log_gamma(&self, argument: &Expression) -> Result<Expression, ApiError>`


The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

### digamma

<a id="placement-placement.rust.native_rust.api_expression_digamma.a874b51f95cc"></a>
`symi::api::Expression — pub fn digamma(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_digamma.931bf2b66a09"></a>
`symi::api::Session — pub fn digamma(&self, argument: &Expression) -> Result<Expression, ApiError>`


The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

### polygamma

<a id="placement-placement.rust.native_rust.api_session_polygamma.4c2bdd651ecb"></a>
`symi::api::Session — pub fn polygamma(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma;
`polygamma(0, x)` reduces to `digamma(x)`.

### beta

<a id="placement-placement.rust.native_rust.api_session_beta.b5bd59498226"></a>
`symi::api::Session — pub fn beta(&self, left: &Expression, right: &Expression) -> Result<Expression, ApiError>`


The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

### zeta

<a id="placement-placement.rust.native_rust.api_session_zeta.5933429e5c9b"></a>
`symi::api::Session — pub fn zeta(&self, argument: &Expression) -> Result<Expression, ApiError>`


The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\). Even positive integers fold to
the \(\pi\) closed forms (`zeta(2) = pi^2/6`, `zeta(4) = pi^4/90`, …), `zeta(0) = -1/2`,
negative integers to their rational functional values (`zeta(-1) = -1/12`,
`zeta(-2n) = 0`); `zeta(1)` is the simple pole (`undefined`). Odd positive
integers (`zeta(3)`, …) stay the symbolic head; every value evaluates to
arbitrary precision over \(\mathbb{R}\) and \(\mathbb{C}\).

### hurwitz_zeta

<a id="placement-placement.rust.native_rust.api_session_hurwitz_zeta.ea751077131a"></a>
`symi::api::Session — pub fn hurwitz_zeta(&self, s: &Expression, a: &Expression) -> Result<Expression, ApiError>`


The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of
the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to
\((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus
the finite head; a non-positive integer first argument gives a Bernoulli
polynomial in `a`.

### polylogarithm

<a id="placement-placement.rust.native_rust.api_session_polylogarithm.99795f2d020b"></a>
`symi::api::Session — pub fn polylogarithm(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


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

<a id="placement-placement.rust.native_rust.api_session_lerch_phi.9d9db6667641"></a>
`symi::api::Session — pub fn lerch_phi(&self, argument: &Expression, order: &Expression, shift: &Expression) -> Result<Expression, ApiError>`


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

<a id="placement-placement.rust.native_rust.api_session_hypergeometric_pfq.9c858dc3a117"></a>
`symi::api::Session — pub fn hypergeometric_pfq<UpperType, LowerType>(&self, upper_parameters: UpperType, lower_parameters: LowerType, argument: &Expression) -> Result<Expression, ApiError> where UpperType: IntoIterator<Item = Expression>, LowerType: IntoIterator<Item = Expression>`


The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter
groups are ordered sequences: order and repetition are significant, so a set or frozenset is
rejected.

### hypergeometric_0f1

<a id="placement-placement.rust.native_rust.api_session_hypergeometric_0f1.5bd6276d462c"></a>
`symi::api::Session — pub fn hypergeometric_0f1(&self, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

### hypergeometric_1f1

<a id="placement-placement.rust.native_rust.api_session_hypergeometric_1f1.8cfe5c4e24b4"></a>
`symi::api::Session — pub fn hypergeometric_1f1(&self, upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

### hypergeometric_2f1

<a id="placement-placement.rust.native_rust.api_session_hypergeometric_2f1.d16bd353849e"></a>
`symi::api::Session — pub fn hypergeometric_2f1(&self, first_upper_parameter: &Expression, second_upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

## Meijer G-function

### meijer_g

<a id="placement-placement.rust.native_rust.api_session_meijer_g.ce43935b3f3c"></a>
`symi::api::Session — pub fn meijer_g<FirstType, SecondType, ThirdType, FourthType>(&self, upper_numerator_parameters: FirstType, upper_denominator_parameters: SecondType, lower_numerator_parameters: ThirdType, lower_denominator_parameters: FourthType, argument: &Expression) -> Result<Expression, ApiError> where FirstType: IntoIterator<Item = Expression>, SecondType: IntoIterator<Item = Expression>, ThirdType: IntoIterator<Item = Expression>, FourthType: IntoIterator<Item = Expression>`


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

<a id="placement-placement.rust.native_rust.api_session_bessel_j.47f75d1984f8"></a>
`symi::api::Session — pub fn bessel_j(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The principal Bessel function \(J_\nu(z)\).

### bessel_y

<a id="placement-placement.rust.native_rust.api_session_bessel_y.968465448244"></a>
`symi::api::Session — pub fn bessel_y(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The principal Bessel function \(Y_\nu(z)\).

### bessel_i

<a id="placement-placement.rust.native_rust.api_session_bessel_i.ddbee38041f7"></a>
`symi::api::Session — pub fn bessel_i(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The principal modified Bessel function \(I_\nu(z)\).

### bessel_k

<a id="placement-placement.rust.native_rust.api_session_bessel_k.f2b6aa38cdf4"></a>
`symi::api::Session — pub fn bessel_k(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The principal modified Bessel function \(K_\nu(z)\).

### hankel_first_kind

<a id="placement-placement.rust.native_rust.api_session_hankel_first_kind.06660d0840d2"></a>
`symi::api::Session — pub fn hankel_first_kind(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The principal Hankel function \(H_\nu^{(1)}(z)\).

### hankel_second_kind

<a id="placement-placement.rust.native_rust.api_session_hankel_second_kind.5fbd0ff066f5"></a>
`symi::api::Session — pub fn hankel_second_kind(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The principal Hankel function \(H_\nu^{(2)}(z)\).

### spherical_bessel_j

<a id="placement-placement.rust.native_rust.api_session_spherical_bessel_j.d6675f419838"></a>
`symi::api::Session — pub fn spherical_bessel_j(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The spherical Bessel function \(\mathsf j_n(z)\), for \(n\in\mathbb N_0\).

### spherical_bessel_y

<a id="placement-placement.rust.native_rust.api_session_spherical_bessel_y.5bf1ea40bd24"></a>
`symi::api::Session — pub fn spherical_bessel_y(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The spherical Bessel function \(\mathsf y_n(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_first_kind

<a id="placement-placement.rust.native_rust.api_session_spherical_hankel_first_kind.e0a1b4b5e616"></a>
`symi::api::Session — pub fn spherical_hankel_first_kind(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The spherical Hankel function \(\mathsf h_n^{(1)}(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_second_kind

<a id="placement-placement.rust.native_rust.api_session_spherical_hankel_second_kind.c5bffb2aa370"></a>
`symi::api::Session — pub fn spherical_hankel_second_kind(&self, order: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The spherical Hankel function \(\mathsf h_n^{(2)}(z)\), for \(n\in\mathbb N_0\).

### airy_ai

<a id="placement-placement.rust.native_rust.api_session_airy_ai.a75fdb366456"></a>
`symi::api::Session — pub fn airy_ai(&self, argument: &Expression) -> Result<Expression, ApiError>`


The Airy function \(\operatorname{Ai}(z)\).

### airy_bi

<a id="placement-placement.rust.native_rust.api_session_airy_bi.f34f9c8539f1"></a>
`symi::api::Session — pub fn airy_bi(&self, argument: &Expression) -> Result<Expression, ApiError>`


The Airy function \(\operatorname{Bi}(z)\).

### airy_ai_prime

<a id="placement-placement.rust.native_rust.api_session_airy_ai_prime.d3eb69c71709"></a>
`symi::api::Session — pub fn airy_ai_prime(&self, argument: &Expression) -> Result<Expression, ApiError>`


The derivative \(\operatorname{Ai}'(z)\).

### airy_bi_prime

<a id="placement-placement.rust.native_rust.api_session_airy_bi_prime.a6ae3e4a474e"></a>
`symi::api::Session — pub fn airy_bi_prime(&self, argument: &Expression) -> Result<Expression, ApiError>`


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

<a id="placement-placement.rust.native_rust.api_session_jacobi_polynomial.00d0c408d6fc"></a>
`symi::api::Session — pub fn jacobi_polynomial(&self, degree: &Expression, first_parameter: &Expression, second_parameter: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

### gegenbauer_polynomial

<a id="placement-placement.rust.native_rust.api_session_gegenbauer_polynomial.1c7fa9a2584c"></a>
`symi::api::Session — pub fn gegenbauer_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

### chebyshev_polynomial_first_kind

<a id="placement-placement.rust.native_rust.api_session_chebyshev_polynomial_first_kind.83f338bfe9af"></a>
`symi::api::Session — pub fn chebyshev_polynomial_first_kind(&self, degree: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The Chebyshev polynomial of the first kind \(T_n(x)\).

### chebyshev_polynomial_second_kind

<a id="placement-placement.rust.native_rust.api_session_chebyshev_polynomial_second_kind.b240a9102eeb"></a>
`symi::api::Session — pub fn chebyshev_polynomial_second_kind(&self, degree: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The Chebyshev polynomial of the second kind \(U_n(x)\).

### legendre_polynomial

<a id="placement-placement.rust.native_rust.api_session_legendre_polynomial.e2028898db05"></a>
`symi::api::Session — pub fn legendre_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The Legendre polynomial \(P_n(x)\).

### generalized_laguerre_polynomial

<a id="placement-placement.rust.native_rust.api_session_generalized_laguerre_polynomial.234d3baaf3fe"></a>
`symi::api::Session — pub fn generalized_laguerre_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

### hermite_polynomial

<a id="placement-placement.rust.native_rust.api_session_hermite_polynomial.11463cebdf3a"></a>
`symi::api::Session — pub fn hermite_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The physicists' Hermite polynomial \(H_n(x)\).

### ultraspherical_polynomial

<a id="placement-placement.rust.native_rust.api_session_ultraspherical_polynomial.fa3dd3fd84eb"></a>
`symi::api::Session — pub fn ultraspherical_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


The ultraspherical polynomial, lowered to its canonical Gegenbauer head.

### laguerre_polynomial

<a id="placement-placement.rust.native_rust.api_session_laguerre_polynomial.fd40d0978c75"></a>
`symi::api::Session — pub fn laguerre_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, ApiError>`


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


## Additional API

<a id="placement-placement.rust.native_rust.api_session_elliptic_e.96e8718126a7"></a>
### api::Session::elliptic_e

`symi::api::Session — pub fn elliptic_e(&self, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_elliptic_k.f8860285c852"></a>
### api::Session::elliptic_k

`symi::api::Session — pub fn elliptic_k(&self, parameter: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_session_lambert_w.39c757c31857"></a>
### api::Session::lambert_w

`symi::api::Session — pub fn lambert_w(&self, argument: &Expression) -> Result<Expression, ApiError>`

Returns `Result<Expression, ApiError>`.

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_gamma.6ba024890f5d"></a>
### api::options::SpecialFunctionBasis::Gamma

`symi::api::options::SpecialFunctionBasis — Gamma`

Returns `variant`.

