# Special functions

Special functions retain their symbolic form when a closed expression is not available.

## Gamma family

The first-tier gamma special functions. Symbolic special values, the
non-positive-integer poles, the recurrence/reflection identities, and
arbitrary-precision numeric evaluation (real and complex) all apply.

### gamma

<a id="placement-placement.python.python_class.context_gamma.aad9a3424c1f"></a>
`Context.gamma(x)`

<a id="placement-placement.python.python_module.module_gamma.3519c91de883"></a>
`symi.gamma(x)`


The gamma function \(\Gamma(x)\), the analytic continuation of `(x-1)!`.

### log_gamma

<a id="placement-placement.python.python_class.context_log_gamma.8d10f8895f42"></a>
`Context.log_gamma(x)`

<a id="placement-placement.python.python_module.module_log_gamma.72b9b1adff8c"></a>
`symi.log_gamma(x)`


The principal-branch log-gamma function (not `log(gamma(x))` off the real axis).

### digamma

<a id="placement-placement.python.python_class.context_digamma.9d7c3431a68a"></a>
`Context.digamma(x)`

<a id="placement-placement.python.python_module.module_digamma.483bce136a30"></a>
`symi.digamma(x)`


The digamma function \(\psi(x) = \Gamma'(x)/\Gamma(x)\).

### polygamma

<a id="placement-placement.python.python_class.context_polygamma.e82a3d78a52c"></a>
`Context.polygamma(order, x)`

<a id="placement-placement.python.python_module.module_polygamma.c31121e20084"></a>
`symi.polygamma(order, x)`


The polygamma function \(\psi^{(n)}(x)\), the order-th derivative of digamma;
`polygamma(0, x)` reduces to `digamma(x)`.

### beta

<a id="placement-placement.python.python_class.context_beta.cb0ca7293444"></a>
`Context.beta(x, y)`

<a id="placement-placement.python.python_module.module_beta.d5028cced6a3"></a>
`symi.beta(x, y)`


The beta function \(\operatorname{B}(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)\).

### zeta

<a id="placement-placement.python.python_class.context_zeta.ac939043bdfd"></a>
`Context.zeta(s)`

<a id="placement-placement.python.python_module.module_zeta.0c28cf4de55a"></a>
`symi.zeta(s)`


The Riemann zeta function \(\zeta(s) = \sum_{k\geq 1} k^{-s}\). Even positive integers fold to
the \(\pi\) closed forms (`zeta(2) = pi^2/6`, `zeta(4) = pi^4/90`, …), `zeta(0) = -1/2`,
negative integers to their rational functional values (`zeta(-1) = -1/12`,
`zeta(-2n) = 0`); `zeta(1)` is the simple pole (`undefined`). Odd positive
integers (`zeta(3)`, …) stay the symbolic head; every value evaluates to
arbitrary precision over \(\mathbb{R}\) and \(\mathbb{C}\).

### hurwitz_zeta

<a id="placement-placement.python.python_class.context_hurwitz_zeta.38cdd5341786"></a>
`Context.hurwitz_zeta(s, a)`

<a id="placement-placement.python.python_module.module_hurwitz_zeta.21812eff4922"></a>
`symi.hurwitz_zeta(s, a)`


The Hurwitz zeta function \(\zeta(s, a) = \sum_{k\geq 0} (k+a)^{-s}\), the numeric primitive of
the family. `hurwitz_zeta(s, 1)` folds to `zeta(s)`; `hurwitz_zeta(s, 1/2)` to
\((2^s - 1)\zeta(s)\); a positive integer second argument reduces to `zeta(s)` minus
the finite head; a non-positive integer first argument gives a Bernoulli
polynomial in `a`.

### polylogarithm

<a id="placement-placement.python.python_class.context_polylogarithm.6e31a0b33842"></a>
`Context.polylogarithm(order, argument)`

<a id="placement-placement.python.python_module.module_polylogarithm.9a8d6c19e530"></a>
`symi.polylogarithm(order, argument)`


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

<a id="placement-placement.python.python_class.context_lerch_phi.46a90ad2c2da"></a>
`Context.lerch_phi(argument, order, shift)`

<a id="placement-placement.python.python_module.module_lerch_phi.1dc5c9bba868"></a>
`symi.lerch_phi(argument, order, shift)`


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

<a id="placement-placement.python.python_class.context_hypergeometric_pfq.547a7193c550"></a>
`Context.hypergeometric_pfq(upper_parameters, lower_parameters, argument)`

<a id="placement-placement.python.python_module.module_hypergeometric_pfq.02a265af88b6"></a>
`symi.hypergeometric_pfq(upper_parameters, lower_parameters, argument)`


The generalized hypergeometric function \({}_pF_q(\mathbf a; \mathbf b; z)\). The two parameter
groups are ordered sequences: order and repetition are significant, so a set or frozenset is
rejected.

### hypergeometric_0f1

<a id="placement-placement.python.python_class.context_hypergeometric_0f1.ee153e00052e"></a>
`Context.hypergeometric_0f1(lower_parameter, argument)`

<a id="placement-placement.python.python_module.module_hypergeometric_0f1.e8b6f213dd26"></a>
`symi.hypergeometric_0f1(lower_parameter, argument)`


The confluent limit \({}_0F_1(; b; z)\), lowered to `hypergeometric_pfq`.

### hypergeometric_1f1

<a id="placement-placement.python.python_class.context_hypergeometric_1f1.b74f5b16e6ae"></a>
`Context.hypergeometric_1f1(upper_parameter, lower_parameter, argument)`

<a id="placement-placement.python.python_module.module_hypergeometric_1f1.69ebe7116c8a"></a>
`symi.hypergeometric_1f1(upper_parameter, lower_parameter, argument)`


Kummer's confluent hypergeometric function \({}_1F_1(a; b; z)\).

### hypergeometric_2f1

<a id="placement-placement.python.python_class.context_hypergeometric_2f1.bc54ac19e954"></a>
`Context.hypergeometric_2f1(first_upper_parameter, second_upper_parameter, lower_parameter, argument)`

<a id="placement-placement.python.python_module.module_hypergeometric_2f1.5e19c8c8c3b3"></a>
`symi.hypergeometric_2f1(first_upper_parameter, second_upper_parameter, lower_parameter, argument)`


The Gauss hypergeometric function \({}_2F_1(a, b; c; z)\).

## Meijer G-function

### meijer_g

<a id="placement-placement.python.python_class.context_meijer_g.7e3dafcc8ee5"></a>
`Context.meijer_g(upper_numerator_parameters, upper_denominator_parameters, lower_numerator_parameters, lower_denominator_parameters, argument)`

<a id="placement-placement.python.python_module.module_meijer_g.e1235747d7bb"></a>
`symi.meijer_g(upper_numerator_parameters, upper_denominator_parameters, lower_numerator_parameters, lower_denominator_parameters, argument)`


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

*Not exposed by the Python bindings. Available as [`api::Session::bessel_j`](/symi/rust/special-functions#bessel_j) in Rust.*


The principal Bessel function \(J_\nu(z)\).

### bessel_y

*Not exposed by the Python bindings. Available as [`api::Session::bessel_y`](/symi/rust/special-functions#bessel_y) in Rust.*


The principal Bessel function \(Y_\nu(z)\).

### bessel_i

*Not exposed by the Python bindings. Available as [`api::Session::bessel_i`](/symi/rust/special-functions#bessel_i) in Rust.*


The principal modified Bessel function \(I_\nu(z)\).

### bessel_k

*Not exposed by the Python bindings. Available as [`api::Session::bessel_k`](/symi/rust/special-functions#bessel_k) in Rust.*


The principal modified Bessel function \(K_\nu(z)\).

### hankel_first_kind

*Not exposed by the Python bindings. Available as [`api::Session::hankel_first_kind`](/symi/rust/special-functions#hankel_first_kind) in Rust.*


The principal Hankel function \(H_\nu^{(1)}(z)\).

### hankel_second_kind

*Not exposed by the Python bindings. Available as [`api::Session::hankel_second_kind`](/symi/rust/special-functions#hankel_second_kind) in Rust.*


The principal Hankel function \(H_\nu^{(2)}(z)\).

### spherical_bessel_j

*Not exposed by the Python bindings. Available as [`api::Session::spherical_bessel_j`](/symi/rust/special-functions#spherical_bessel_j) in Rust.*


The spherical Bessel function \(\mathsf j_n(z)\), for \(n\in\mathbb N_0\).

### spherical_bessel_y

*Not exposed by the Python bindings. Available as [`api::Session::spherical_bessel_y`](/symi/rust/special-functions#spherical_bessel_y) in Rust.*


The spherical Bessel function \(\mathsf y_n(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_first_kind

*Not exposed by the Python bindings. Available as [`api::Session::spherical_hankel_first_kind`](/symi/rust/special-functions#spherical_hankel_first_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(1)}(z)\), for \(n\in\mathbb N_0\).

### spherical_hankel_second_kind

*Not exposed by the Python bindings. Available as [`api::Session::spherical_hankel_second_kind`](/symi/rust/special-functions#spherical_hankel_second_kind) in Rust.*


The spherical Hankel function \(\mathsf h_n^{(2)}(z)\), for \(n\in\mathbb N_0\).

### airy_ai

*Not exposed by the Python bindings. Available as [`api::Session::airy_ai`](/symi/rust/special-functions#airy_ai) in Rust.*


The Airy function \(\operatorname{Ai}(z)\).

### airy_bi

*Not exposed by the Python bindings. Available as [`api::Session::airy_bi`](/symi/rust/special-functions#airy_bi) in Rust.*


The Airy function \(\operatorname{Bi}(z)\).

### airy_ai_prime

*Not exposed by the Python bindings. Available as [`api::Session::airy_ai_prime`](/symi/rust/special-functions#airy_ai_prime) in Rust.*


The derivative \(\operatorname{Ai}'(z)\).

### airy_bi_prime

*Not exposed by the Python bindings. Available as [`api::Session::airy_bi_prime`](/symi/rust/special-functions#airy_bi_prime) in Rust.*


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

<a id="placement-placement.python.python_class.context_jacobi_polynomial.64fc0d037154"></a>
`Context.jacobi_polynomial(degree, first_parameter, second_parameter, argument)`

<a id="placement-placement.python.python_module.module_jacobi_polynomial.5d9827799e23"></a>
`symi.jacobi_polynomial(degree, first_parameter, second_parameter, argument)`


The Jacobi polynomial \(P_n^{(\alpha,\beta)}(x)\).

### gegenbauer_polynomial

<a id="placement-placement.python.python_class.context_gegenbauer_polynomial.f06cf4026ee5"></a>
`Context.gegenbauer_polynomial(degree, parameter, argument)`

<a id="placement-placement.python.python_module.module_gegenbauer_polynomial.7c074bcbda06"></a>
`symi.gegenbauer_polynomial(degree, parameter, argument)`


The Gegenbauer polynomial \(C_n^{(\lambda)}(x)\).

### chebyshev_polynomial_first_kind

<a id="placement-placement.python.python_class.context_chebyshev_polynomial_first_kind.ce659e770f44"></a>
`Context.chebyshev_polynomial_first_kind(degree, argument)`

<a id="placement-placement.python.python_module.module_chebyshev_polynomial_first_kind.14d02036658d"></a>
`symi.chebyshev_polynomial_first_kind(degree, argument)`


The Chebyshev polynomial of the first kind \(T_n(x)\).

### chebyshev_polynomial_second_kind

<a id="placement-placement.python.python_class.context_chebyshev_polynomial_second_kind.7d9175943d75"></a>
`Context.chebyshev_polynomial_second_kind(degree, argument)`

<a id="placement-placement.python.python_module.module_chebyshev_polynomial_second_kind.72deb4c741ac"></a>
`symi.chebyshev_polynomial_second_kind(degree, argument)`


The Chebyshev polynomial of the second kind \(U_n(x)\).

### legendre_polynomial

<a id="placement-placement.python.python_class.context_legendre_polynomial.d36238a04be6"></a>
`Context.legendre_polynomial(degree, argument)`

<a id="placement-placement.python.python_module.module_legendre_polynomial.e888215e86b2"></a>
`symi.legendre_polynomial(degree, argument)`


The Legendre polynomial \(P_n(x)\).

### generalized_laguerre_polynomial

<a id="placement-placement.python.python_class.context_generalized_laguerre_polynomial.d6199cb6c12a"></a>
`Context.generalized_laguerre_polynomial(degree, parameter, argument)`

<a id="placement-placement.python.python_module.module_generalized_laguerre_polynomial.474a0697b788"></a>
`symi.generalized_laguerre_polynomial(degree, parameter, argument)`


The generalized Laguerre polynomial \(L_n^{(\alpha)}(x)\).

### hermite_polynomial

<a id="placement-placement.python.python_class.context_hermite_polynomial.2a58c9ae6e11"></a>
`Context.hermite_polynomial(degree, argument)`

<a id="placement-placement.python.python_module.module_hermite_polynomial.69f56e849918"></a>
`symi.hermite_polynomial(degree, argument)`


The physicists' Hermite polynomial \(H_n(x)\).

### ultraspherical_polynomial

<a id="placement-placement.python.python_class.context_ultraspherical_polynomial.8d171095fa05"></a>
`Context.ultraspherical_polynomial(degree, parameter, argument)`

<a id="placement-placement.python.python_module.module_ultraspherical_polynomial.8990d481e4a3"></a>
`symi.ultraspherical_polynomial(degree, parameter, argument)`


The ultraspherical polynomial, lowered to its canonical Gegenbauer head.

### laguerre_polynomial

<a id="placement-placement.python.python_class.context_laguerre_polynomial.26db128f463a"></a>
`Context.laguerre_polynomial(degree, argument)`

<a id="placement-placement.python.python_module.module_laguerre_polynomial.fa6a108a7e43"></a>
`symi.laguerre_polynomial(degree, argument)`


The Laguerre polynomial, lowered to its canonical generalized Laguerre head.

## Example

Special functions reduce at recognised arguments.

```python
import symi

print(symi.gamma(symi.rational(1, 2)))
print(symi.zeta(2))
print(symi.beta(2, 3))
print(symi.digamma(1))
```


## Additional API

<a id="placement-placement.python.python_class.context_carlson_rc.1f21e8d8e888"></a>
### Context.carlson_rc

`Context.carlson_rc(first_argument, second_argument)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_carlson_rd.bf2f40edb4fe"></a>
### Context.carlson_rd

`Context.carlson_rd(first_argument, second_argument, third_argument)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_carlson_rf.4916bc8c8484"></a>
### Context.carlson_rf

`Context.carlson_rf(first_argument, second_argument, third_argument)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_carlson_rj.23f9fee36cbe"></a>
### Context.carlson_rj

`Context.carlson_rj(first_argument, second_argument, third_argument, fourth_argument)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_elliptic_e.9dfd1152c911"></a>
### Context.elliptic_e

`Context.elliptic_e(parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_elliptic_e_incomplete.7586b09c4274"></a>
### Context.elliptic_e_incomplete

`Context.elliptic_e_incomplete(amplitude, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_elliptic_f.4c30eecd1dd7"></a>
### Context.elliptic_f

`Context.elliptic_f(amplitude, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_elliptic_k.8ad4e51cb50b"></a>
### Context.elliptic_k

`Context.elliptic_k(parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_elliptic_pi.9a25def03094"></a>
### Context.elliptic_pi

`Context.elliptic_pi(characteristic, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_elliptic_pi_incomplete.07e6d87d5004"></a>
### Context.elliptic_pi_incomplete

`Context.elliptic_pi_incomplete(characteristic, amplitude, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_amplitude.033cc0b6ade5"></a>
### Context.jacobi_amplitude

`Context.jacobi_amplitude(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_cn.838844e73195"></a>
### Context.jacobi_cn

`Context.jacobi_cn(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_dn.d9719f1481c2"></a>
### Context.jacobi_dn

`Context.jacobi_dn(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_sn.42e4320c635b"></a>
### Context.jacobi_sn

`Context.jacobi_sn(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_theta_1.433614f2018d"></a>
### Context.jacobi_theta_1

`Context.jacobi_theta_1(argument, tau)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_theta_2.7f97046acb10"></a>
### Context.jacobi_theta_2

`Context.jacobi_theta_2(argument, tau)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_theta_3.ceee5bc43fc4"></a>
### Context.jacobi_theta_3

`Context.jacobi_theta_3(argument, tau)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_jacobi_theta_4.d4c146604932"></a>
### Context.jacobi_theta_4

`Context.jacobi_theta_4(argument, tau)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_carlson_rc.7a62fd509b45"></a>
### module.carlson_rc

`symi.carlson_rc(first_argument, second_argument)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_carlson_rd.b8aad0a4cb2d"></a>
### module.carlson_rd

`symi.carlson_rd(first_argument, second_argument, third_argument)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_carlson_rf.e1b92d7a3eb3"></a>
### module.carlson_rf

`symi.carlson_rf(first_argument, second_argument, third_argument)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_carlson_rj.92717308a5ed"></a>
### module.carlson_rj

`symi.carlson_rj(first_argument, second_argument, third_argument, fourth_argument)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_elliptic_e.d2350530f40b"></a>
### module.elliptic_e

`symi.elliptic_e(parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_elliptic_e_incomplete.9daed527f7c1"></a>
### module.elliptic_e_incomplete

`symi.elliptic_e_incomplete(amplitude, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_elliptic_f.9ae910ef2fdf"></a>
### module.elliptic_f

`symi.elliptic_f(amplitude, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_elliptic_k.f59acccd7929"></a>
### module.elliptic_k

`symi.elliptic_k(parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_elliptic_pi.b2caf9b2f483"></a>
### module.elliptic_pi

`symi.elliptic_pi(characteristic, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_elliptic_pi_incomplete.6998450e30c4"></a>
### module.elliptic_pi_incomplete

`symi.elliptic_pi_incomplete(characteristic, amplitude, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_amplitude.bcc9ba96ede7"></a>
### module.jacobi_amplitude

`symi.jacobi_amplitude(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_cn.ef9f43c6c15b"></a>
### module.jacobi_cn

`symi.jacobi_cn(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_dn.0d987137c1d8"></a>
### module.jacobi_dn

`symi.jacobi_dn(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_sn.acd020b3768d"></a>
### module.jacobi_sn

`symi.jacobi_sn(argument, parameter)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_theta_1.2824d6af6ed1"></a>
### module.jacobi_theta_1

`symi.jacobi_theta_1(argument, tau)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_theta_2.47ed91301e1f"></a>
### module.jacobi_theta_2

`symi.jacobi_theta_2(argument, tau)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_theta_3.40b6b95af764"></a>
### module.jacobi_theta_3

`symi.jacobi_theta_3(argument, tau)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_jacobi_theta_4.63583e3ae5cc"></a>
### module.jacobi_theta_4

`symi.jacobi_theta_4(argument, tau)`

Returns `expression`.

