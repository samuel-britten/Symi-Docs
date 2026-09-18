# Integer number theory

All functions take and return `Expression` objects holding integer leaves,
so arbitrary precision flows through the existing machinery; passing a
non-integer expression raises. (Exception: `continued_fraction_rational`
also accepts rational leaves; the three symbol functions return plain
machine integers.)

### is_prime

<a id="placement-placement.swift.swift_object.uniffiexpression_isprime.c6375de91a36"></a>
`UniffiExpression.isPrime() -> UniffiTruthValue`

<a id="placement-placement.swift.swift_object.uniffisession_isprime.c4146f51c4d3"></a>
`UniffiSession.isPrime(argument: UniffiExpression) -> Bool?`


Deterministic primality verdict; `None` when the input is outside the
classifier's domain (e.g. not a natural number \(\geq 0\) representation it
handles).

### factor_integer

<a id="placement-placement.swift.swift_object.uniffisession_factorinteger.350bd0565b6d"></a>
`UniffiSession.factorInteger(argument: UniffiExpression) -> [UniffiExpressionUnsignedIntegerTuple]`


Prime factorization as `(prime, multiplicity)` pairs, ascending. Errors on
zero. **Notes:** WASM returns `PrimeFactor` objects with
`prime`/`multiplicity` getters; the sign \(-1\) of a negative input is carried
as a leading `(-1, 1)` factor exactly as the core reports it.

### prime_factor (WASM result class)

### prime

*Not exposed by the Swift bindings. Available as [`api::Session::prime`](/symi/rust/number-theory#prime) in Rust.*


### multiplicity

<a id="placement-placement.swift.swift_object.uniffirootmultiplicity_multiplicity.fe1b2d03c27f"></a>
`UniffiRootMultiplicity.multiplicity() -> UInt64`


### integer_gcd

<a id="placement-placement.swift.swift_object.uniffisession_integergcd.61aee7337f17"></a>
`UniffiSession.integerGcd(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


Greatest common divisor (non-negative).

### integer_lcm

<a id="placement-placement.swift.swift_object.uniffisession_integerlcm.51d36249f078"></a>
`UniffiSession.integerLcm(left: UniffiExpression, right: UniffiExpression) -> UniffiExpression`


Least common multiple.

### extended_euclidean

<a id="placement-placement.swift.swift_object.uniffisession_extendedeuclidean.b6bf9a4d4512"></a>
`UniffiSession.extendedEuclidean(left: UniffiExpression, right: UniffiExpression) -> UniffiExpressionExpressionExpressionTuple`


`(gcd, x, y)` with \(a x + b y = \operatorname{gcd}\). **Notes:** WASM returns a 3-element
array `[gcd, x, y]`.

### modular_power

<a id="placement-placement.swift.swift_object.uniffisession_modularpower.08ac4da6105b"></a>
`UniffiSession.modularPower(base: UniffiExpression, exponent: UniffiExpression, modulus: UniffiExpression) -> UniffiExpression`


`base^exponent mod modulus` by square-and-multiply; requires positive
modulus and non-negative exponent.

### modular_inverse

<a id="placement-placement.swift.swift_object.uniffisession_modularinverse.e7b51d17375e"></a>
`UniffiSession.modularInverse(value: UniffiExpression, modulus: UniffiExpression) -> UniffiExpression`


Multiplicative inverse of `value` modulo `modulus`; errors when
\(\operatorname{gcd}(\operatorname{value}, \operatorname{modulus}) \ne 1\).

### chinese_remainder

<a id="placement-placement.swift.swift_object.uniffisession_chineseremainder.a648470927fe"></a>
`UniffiSession.chineseRemainder(residuesAndModuli: [UniffiExpressionExpressionTuple]) -> UniffiExpression`


The smallest non-negative solution of the simultaneous congruences
\(x \equiv r_i \pmod{m_i}\). Moduli need not be pairwise coprime; inconsistent systems
raise. **Notes:** WASM passes a flat interleaved array
`[residue_0, modulus_0, ...]`.

### euler_totient

<a id="placement-placement.swift.swift_object.uniffisession_eulertotient.df6ed38a0dc1"></a>
`UniffiSession.eulerTotient(value: UniffiExpression) -> UniffiExpression`


Euler's \(\varphi(n)\); requires a positive integer.

### mobius

<a id="placement-placement.swift.swift_object.uniffisession_mobius.519a8065b3b0"></a>
`UniffiSession.mobius(argument: UniffiExpression) -> UniffiExpression`


Möbius \(\mu(n) \in \{-1, 0, 1\}\); requires a positive integer.

### divisor_count

<a id="placement-placement.swift.swift_object.uniffisession_divisorcount.d6068cea368d"></a>
`UniffiSession.divisorCount(argument: UniffiExpression) -> UniffiExpression`


Number of positive divisors \(\tau(n)\).

### divisor_sigma

<a id="placement-placement.swift.swift_object.uniffisession_divisorsigma.087ab5d723f0"></a>
`UniffiSession.divisorSigma(argument: UniffiExpression, power: UInt64) -> UniffiExpression`


Sum of the `power`-th powers of the positive divisors \(\sigma_{\mathit{power}}(n)\);
`power = 0` gives `divisor_count`, `power = 1` the divisor sum.

### jacobi_symbol

<a id="placement-placement.swift.swift_object.uniffisession_jacobisymbol.9ded1d210a74"></a>
`UniffiSession.jacobiSymbol(numerator: UniffiExpression, denominator: UniffiExpression) -> Int64`


The Jacobi symbol \((n/d) \in \{-1, 0, 1\}\); the denominator must be a positive odd
integer.

### legendre_symbol

<a id="placement-placement.swift.swift_object.uniffisession_legendresymbol.f04c28794125"></a>
`UniffiSession.legendreSymbol(numerator: UniffiExpression, prime: UniffiExpression) -> Int64`


The Legendre symbol; the second argument must be an odd prime.

### kronecker_symbol

<a id="placement-placement.swift.swift_object.uniffisession_kroneckersymbol.6f559281ec6b"></a>
`UniffiSession.kroneckerSymbol(numerator: UniffiExpression, denominator: UniffiExpression) -> Int64`


The Kronecker extension of the Jacobi symbol to all integer denominators.

### integer_square_root

<a id="placement-placement.swift.swift_object.uniffisession_integersquareroot.abe6004ca75a"></a>
`UniffiSession.integerSquareRoot(argument: UniffiExpression) -> UniffiExpression`


\(\lfloor\sqrt{n}\rfloor\) for non-negative n.

### integer_nth_root

<a id="placement-placement.swift.swift_object.uniffisession_integernthroot.3a7e6e833dee"></a>
`UniffiSession.integerNthRoot(argument: UniffiExpression, rootIndex: UInt64) -> UniffiExpression`


\(\lfloor n^{1/\mathit{root\_index}}\rfloor\); odd indices accept negative n. Errors when no real root
exists (even index, negative n).

### continued_fraction_rational

<a id="placement-placement.swift.swift_object.uniffisession_continuedfractionrational.9db7bb0f1f4a"></a>
`UniffiSession.continuedFractionRational(value: UniffiExpression) -> [UniffiExpression]`


Terminating continued-fraction expansion `[a0; a1, a2, ...]` of an integer
or rational expression leaf.

### continued_fraction_quadratic_irrational

<a id="placement-placement.swift.swift_object.uniffisession_continuedfractionquadraticirrational.f6d018a4694a"></a>
`UniffiSession.continuedFractionQuadraticIrrational(value: UniffiExpression) -> UniffiQuadraticContinuedFractionExpansion`


Eventually-periodic expansion of \(\sqrt{d}\) for a non-negative integer d, returned
as `(initial_terms, periodic_part)`. Perfect squares give a one-element
initial part and an empty period. **Notes:** WASM returns a
`QuadraticContinuedFractionExpansion` object with
`initial_terms`/`periodic_terms` getters.

### quadratic_continued_fraction_expansion (WASM result class)

### initial_terms

<a id="placement-placement.swift.swift_object.uniffiquadraticcontinuedfractionexpansion_initialterms.43bd40428d8f"></a>
`UniffiQuadraticContinuedFractionExpansion.initialTerms() -> [UniffiExpression]`


### periodic_terms

<a id="placement-placement.swift.swift_object.uniffiquadraticcontinuedfractionexpansion_periodicterms.c2a273f9ba2e"></a>
`UniffiQuadraticContinuedFractionExpansion.periodicTerms() -> [UniffiExpression]`


## Diophantine equations

The two supported Diophantine subclasses are linear
equations via the extended Euclidean algorithm and Pell's equation via the
continued fraction of \(\sqrt{D}\). General Diophantine solving is undecidable
(Matiyasevich–Robinson–Davis–Putnam) and is out of scope; the solvers return
exact integers and never guess.

### solve_linear_diophantine

<a id="placement-placement.swift.swift_object.uniffisession_solvelineardiophantine.4b7729095ddf"></a>
`UniffiSession.solveLinearDiophantine(coefficients: [UniffiExpression], constant: UniffiExpression) -> [UniffiExpression]`


General integer solution of \(a_1 x_1 + \ldots + a_n x_n = c\), returned as the parametric
coordinates — one expression per unknown, affine in fresh integer parameter
symbols (`diophantine_parameter_k`) shared across the coordinates so that
choosing any integers for the parameters yields a solution tuple. The list is
**empty** when the equation has no integer solution (\(\gcd(a_i) \nmid c\)). All
coefficients and the constant must be integer expression leaves.

### solve_linear_diophantine_system

<a id="placement-placement.swift.swift_object.uniffisession_solvelineardiophantinesystem.7d6df1747441"></a>
`UniffiSession.solveLinearDiophantineSystem(coefficientMatrix: UniffiMatrix, constants: [UniffiExpression]) -> [UniffiExpression]`


General integer solution of the rectangular system \(A x = b\), returned as one
parametric coordinate expression per column of `A`. The coordinates share fresh
integer parameter symbols and describe the complete affine integer lattice of
solutions. The list is empty when the system has no integer solution, an entry is
not an integer expression leaf, or the dimensions do not agree.

### solve_pell

<a id="placement-placement.swift.swift_object.uniffisession_solvepell.57d589d1c5fd"></a>
`UniffiSession.solvePell(radicand: UniffiExpression) -> [UniffiExpression]`


Fundamental solution `[x, y]` of \(x^2 - D y^2 = 1\) for a positive non-square
integer `D`, the smallest positive solution from which all others are generated
by the recurrence \(x_{k+1} = x_1 x_k + D y_1 y_k\), \(y_{k+1} = x_1 y_k + y_1 x_k\). The list is
empty when `D` is a perfect square or non-positive (no nontrivial fundamental
solution).

### solve_negative_pell

<a id="placement-placement.swift.swift_object.uniffisession_solvenegativepell.4ecb2cae5323"></a>
`UniffiSession.solveNegativePell(radicand: UniffiExpression) -> [UniffiExpression]`


Fundamental solution `[x, y]` of the negative-Pell equation \(x^2 - D y^2 = -1\)
when it is solvable (exactly when the continued fraction of \(\sqrt{D}\) has odd period),
and an empty list otherwise.

### pell_solutions

<a id="placement-placement.swift.swift_object.uniffisession_pellsolutions.934a2bc20441"></a>
`UniffiSession.pellSolutions(radicand: UniffiExpression, count: UInt64) -> [UniffiExpression]`


The first `count` positive solutions of \(x^2 - D y^2 = 1\), materialised from the
fundamental solution by the Pell recurrence and returned as a flat list
\([x_1, y_1, x_2, y_2, \ldots]\). Empty when `D` has no fundamental solution.

## Example

