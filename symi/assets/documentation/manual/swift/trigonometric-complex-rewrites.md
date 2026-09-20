# Trigonometric and complex rewrites

Trigonometric, logarithmic, exponential, and complex rewrites are separated from general simplification because their identities depend on domains and branch behavior.

### expand_complex

<a id="entry-presentation_swift_api_session_expand_complex"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandcomplex.10e7c2d7d775"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandComplex(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_expandcomplex.a6ec49c593ff"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.expandComplex</code></p>

```swift signature
func expandComplex() -> UniffiExpression
```

</details>



Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.
Products, integer powers, and `exp`, `sin`, `cos`, `sinh`, and `cosh` are expanded through
their Cartesian identities. Symbol assumptions determine which atoms are real. Unknown atoms
and branch-sensitive operations such as logarithms and non-integer powers remain represented by
symbolic real- and imaginary-part calls. The directed operation also expands a supported modulus
under real assumptions: `abs(x + i*y)` becomes `sqrt(x^2 + y^2)`, and exact integer powers under
the modulus preserve their original poles while expanding the Cartesian norm. Oversized or
unsupported modulus arguments remain unchanged or wrapper-bearing.

### real_part

<a id="entry-presentation_swift_api_session_real_part"></a>
<a id="placement-placement.swift.swift_object.uniffisession_realpart.5f1a5e54e6b6"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func realPart(target: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_realpart.ba36a259050e"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.realPart</code></p>

```swift signature
func realPart() -> UniffiExpression
```

</details>



Return the exact real component of an expression. For example, if `y` is declared real,
`real_part(exp(i*y))` is `cos(y)`. An atom whose reality is unknown returns a symbolic
`real_part(atom)` call. The returned expression is always known to be real.

### imaginary_part

<a id="entry-presentation_swift_api_session_imaginary_part"></a>
<a id="placement-placement.swift.swift_object.uniffisession_imaginarypart.cb7731527162"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func imaginaryPart(target: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_imaginarypart.53a60ee88b34"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.imaginaryPart</code></p>

```swift signature
func imaginaryPart() -> UniffiExpression
```

</details>



Return the exact imaginary component of an expression. For example, if `y` is declared real,
`imaginary_part(exp(i*y))` is `sin(y)`. An atom whose reality is unknown returns a symbolic
`imaginary_part(atom)` call. The returned expression is always known to be real.

### combine_powers

<a id="entry-presentation_swift_api_session_combine_powers"></a>
<a id="placement-placement.swift.swift_object.uniffisession_combinepowers.d59fd8e67728"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func combinePowers(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_combinepowers.0c443e507fad"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.combinePowers</code></p>

```swift signature
func combinePowers() -> UniffiExpression
```

</details>



Combine same-exponent powers into a single power of the merged base
(`x^a * y^a -> (x*y)^a`) at every product node where the rewrite is provably
valid. This identity is false across the branch cut of the complex logarithm —
at `x = y = -1` and `a = 1/2` the left side is `i*i = -1` while the right side
is `sqrt(1) = 1` — so it fires only when the exponent is provably an integer or
when **every** combined base is provably positive. Positivity of the merged base
is not enough: `(-2)^x * (-3)^x` is left alone, because at `x = 1/2` combining it
to `6^x` would flip the sign of the result. Positive numeric-literal bases need
no assumptions at all, so `2^x * 3^x` becomes `6^x` and `(1/2)^x * 3^x` becomes
`(3/2)^x`. With `n` declared an integer, `x^n * y^n` becomes `(x*y)^n`; the
exponent gate recurses structurally, so a compound exponent like `2*n` gates the
same way. There is no force mode: a site whose gate is not provable is left
unchanged, and an expression with no provable site is returned as-is.

### expand_power_base

<a id="entry-presentation_swift_api_session_expand_power_base"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandpowerbase.9795002c6ea7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandPowerBase(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_expandpowerbase.18638e0afc1d"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.expandPowerBase</code></p>

```swift signature
func expandPowerBase() -> UniffiExpression
```

</details>



Split a power whose base is structurally a product into a product of powers
(`(x*y)^a -> x^a * y^a`) at every power node whose exponent is provably an
integer — the only unconditionally valid gate for this direction, since the split
introduces `x^a` and `y^a` individually and each needs its own base off the cut.
With `n` declared an integer, `(x*y)^n` becomes `x^n * y^n`. Kahan's example
`(x*y)^(1/2)` over unconstrained `x, y` is left unchanged, as is any other
unprovable site; there is no force mode. A base that is not structurally a
product is never decomposed, so `6^x` is not split into `2^x * 3^x`.

### denest_powers

<a id="entry-presentation_swift_api_session_denest_powers"></a>
<a id="placement-placement.swift.swift_object.uniffisession_denestpowers.bc71d1e41188"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func denestPowers(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_denestpowers.98e0069e9002"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.denestPowers</code></p>

```swift signature
func denestPowers() -> UniffiExpression
```

</details>



Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every
power node whose outer exponent is provably an integer, which is valid on the
principal branch because an integer power never routes through `log`. With `n`
declared an integer, `(x^a)^n` becomes `x^(a*n)`. A fractional outer exponent is
left unchanged — `((-1)^2)^(1/2)` is `1` while `(-1)^(2*(1/2))` is `-1` — and
there is no force mode. A base that is not structurally a power is untouched.

### simplify_trigonometric

<a id="entry-presentation_swift_api_session_simplify_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_simplifytrigonometric.7e8037005fde"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func simplifyTrigonometric(target: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_simplifytrigonometric.9aaf2cdb41e2"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.simplifyTrigonometric</code></p>

```swift signature
func simplifyTrigonometric() -> UniffiExpression
```

</details>



Fu-style trigonometric simplification toward fewer/cheaper trig calls.

### expand_trigonometric

<a id="entry-presentation_swift_api_session_expand_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandtrigonometric.ddeaea8cce53"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandTrigonometric(target: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_expandtrigonometric.49913e755db6"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.expandTrigonometric</code></p>

```swift signature
func expandTrigonometric() -> UniffiExpression
```

</details>



Expand trig/hyperbolic functions of sums and positive integer literal multiple angles. The directed
operation may increase expression size; unsupported, symbolic, noninteger, or over-budget
multipliers remain unchanged. A successful expansion is structurally idempotent, and recursively
admitted sums are expanded in the same pass.

### combine_trigonometric

<a id="entry-presentation_swift_api_session_combine_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_combinetrigonometric.d451139c9e39"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func combineTrigonometric(target: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_combinetrigonometric.fc6b740ce454"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.combineTrigonometric</code></p>

```swift signature
func combineTrigonometric() -> UniffiExpression
```

</details>



Inverse direction of `expand_trigonometric`: product-to-sum and
angle-recombination rules.

### combine_logarithm

<a id="entry-presentation_swift_api_session_combine_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffisession_combinelogarithm.76ac0d3a69ea"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func combineLogarithm(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_combinelogarithm.0bdc7eb3a1f8"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.combineLogarithm</code></p>

```swift signature
func combineLogarithm() -> UniffiExpression
```

</details>



\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation
preserves the expression's domain.

### expand_logarithm

<a id="entry-presentation_swift_api_session_expand_logarithm"></a>
<a id="placement-placement.swift.swift_object.uniffisession_expandlogarithm.962f51c8cd33"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func expandLogarithm(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_expandlogarithm.3539d6fcf19f"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.expandLogarithm</code></p>

```swift signature
func expandLogarithm() -> UniffiExpression
```

</details>



\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the
operands are provably positive. Operands of unknown sign pass through
unchanged.

### rewrite_as_exponential

<a id="entry-presentation_swift_api_session_rewrite_as_exponential"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewriteasexponential.7f6c80832b9d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteAsExponential(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_rewriteasexponential.63699520e6e6"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.rewriteAsExponential</code></p>

```swift signature
func rewriteAsExponential() -> UniffiExpression
```

</details>



Euler-form rewriter: replace every trigonometric/hyperbolic call with the
equivalent complex-exponential expression (bottom-up).

### rewrite_as_trigonometric

<a id="entry-presentation_swift_api_session_rewrite_as_trigonometric"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewriteastrigonometric.a7e77f830197"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteAsTrigonometric(inputExpression: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_rewriteastrigonometric.8c5e139dc49d"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.rewriteAsTrigonometric</code></p>

```swift signature
func rewriteAsTrigonometric() -> UniffiExpression
```

</details>



Inverse of `rewrite_as_exponential`. Recognition is shape-strict: canonical
Euler forms collapse back to trig/hyperbolic calls, anything else passes
through unchanged, so the round trip is the identity.

### rewrite_trigonometric_basis

<a id="entry-presentation_swift_api_session_rewrite_trigonometric_basis"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewritetrigonometricbasis.a113505204d1"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteTrigonometricBasis(
    target: UniffiExpression,
    basis: UniffiTrigonometricBasis,
) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_rewritetrigonometricbasis.1e0cbfd99f8f"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.rewriteTrigonometricBasis</code></p>

```swift signature
func rewriteTrigonometricBasis(basis: UniffiTrigonometricBasis) -> UniffiExpression
```

</details>



Rewrite trigonometric and hyperbolic calls toward one of five named bases:
`sine_cosine`, `tangent`, `exponential`, `trigonometric`, or `hyperbolic`.
The sine/cosine basis maps `tan(x)` to `sin(x)/cos(x)` and reciprocal calls to
reciprocal powers; the tangent basis recognizes existing exact quotients such
as `sin(x)/cos(x)` but leaves a bare `sin(x)` unchanged; the exponential basis
maps `sin(x)` to its Euler form; the trigonometric basis recognizes those
canonical Euler forms; and the hyperbolic basis maps explicit imaginary
arguments such as `sin(i*x)` to `i*sinh(x)`. Only identities with the same
singularities on the whole complex domain are offered. In particular, the
half-angle rewrite of a bare sine into tangent is excluded because it introduces
undefined points. An unknown basis name is an error, and nodes without a valid
rewrite are returned unchanged.

## Example

