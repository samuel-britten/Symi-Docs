# Trigonometric and complex rewrites

Trigonometric, logarithmic, exponential, and complex rewrites are separated from general simplification because their identities depend on domains and branch behavior.

### expand_complex

<a id="entry-presentation_wasm_api_session_expand_complex"></a>
<a id="placement-placement.wasm.wasm_module.module_expandcomplex.882987d16cbf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
expandComplex(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandcomplex.ec1c84d2cb66"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.expandComplex</code></p>

```typescript signature
expandComplex(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_expandcomplex.7c66ec5fb625"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.expandComplex</code></p>

```typescript signature
expandComplex(): Expression
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

<a id="entry-presentation_wasm_api_session_real_part"></a>
<a id="placement-placement.wasm.wasm_module.module_realpart.030dff7e14eb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
realPart(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realpart.dde44e15175b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realPart</code></p>

```typescript signature
realPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_realpart.ef73b6cb1c14"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.realPart</code></p>

```typescript signature
realPart(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realpart.24ce21e1ba1d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.realPart</code></p>

```typescript signature
realPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.javascript_facade.expression_realpart.96ac58cb8855"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.realPart</code></p>

```typescript signature
realPart(): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_realpart.0ae125d73af1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.realPart</code></p>

```typescript signature
realPart(): Expression
```

</details>



Return the exact real component of an expression. For example, if `y` is declared real,
`real_part(exp(i*y))` is `cos(y)`. An atom whose reality is unknown returns a symbolic
`real_part(atom)` call. The returned expression is always known to be real.

### imaginary_part

<a id="entry-presentation_wasm_api_session_imaginary_part"></a>
<a id="placement-placement.wasm.wasm_module.module_imaginarypart.8a82c066b15a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
imaginaryPart(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_imaginarypart.617f7b6602bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.imaginaryPart</code></p>

```typescript signature
imaginaryPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_imaginarypart.776c5cf4f0e7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.imaginaryPart</code></p>

```typescript signature
imaginaryPart(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_imaginarypart.5d66750ea9bf"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.imaginaryPart</code></p>

```typescript signature
imaginaryPart(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.javascript_facade.expression_imaginarypart.869495f47a9a"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.imaginaryPart</code></p>

```typescript signature
imaginaryPart(): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_imaginarypart.8aff7315b620"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.imaginaryPart</code></p>

```typescript signature
imaginaryPart(): Expression
```

</details>



Return the exact imaginary component of an expression. For example, if `y` is declared real,
`imaginary_part(exp(i*y))` is `sin(y)`. An atom whose reality is unknown returns a symbolic
`imaginary_part(atom)` call. The returned expression is always known to be real.

### combine_powers

<a id="entry-presentation_wasm_api_session_combine_powers"></a>
<a id="placement-placement.wasm.wasm_module.module_combinepowers.0e25bed4eaab"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
combinePowers(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_combinepowers.7c10205ea9cd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.combinePowers</code></p>

```typescript signature
combinePowers(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_combinepowers.fbbb9d6d14ef"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.combinePowers</code></p>

```typescript signature
combinePowers(): Expression
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

<a id="entry-presentation_wasm_api_session_expand_power_base"></a>
<a id="placement-placement.wasm.wasm_module.module_expandpowerbase.b3c245130f9d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
expandPowerBase(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandpowerbase.d498d0612d9b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.expandPowerBase</code></p>

```typescript signature
expandPowerBase(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_expandpowerbase.6ea9637348b8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.expandPowerBase</code></p>

```typescript signature
expandPowerBase(): Expression
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

<a id="entry-presentation_wasm_api_session_denest_powers"></a>
<a id="placement-placement.wasm.wasm_module.module_denestpowers.73ac4ed785a7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
denestPowers(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_denestpowers.4c2e62cdb07a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.denestPowers</code></p>

```typescript signature
denestPowers(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_denestpowers.9316950a8123"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.denestPowers</code></p>

```typescript signature
denestPowers(): Expression
```

</details>



Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every
power node whose outer exponent is provably an integer, which is valid on the
principal branch because an integer power never routes through `log`. With `n`
declared an integer, `(x^a)^n` becomes `x^(a*n)`. A fractional outer exponent is
left unchanged — `((-1)^2)^(1/2)` is `1` while `(-1)^(2*(1/2))` is `-1` — and
there is no force mode. A base that is not structurally a power is untouched.

### simplify_trigonometric

<a id="entry-presentation_wasm_api_session_simplify_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_simplifytrigonometric.ad2187f785f4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
simplifyTrigonometric(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_simplifytrigonometric.7691da56d683"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.simplifyTrigonometric</code></p>

```typescript signature
simplifyTrigonometric(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_simplifytrigonometric.f20902a32327"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.simplifyTrigonometric</code></p>

```typescript signature
simplifyTrigonometric(): Expression
```

</details>



Fu-style trigonometric simplification toward fewer/cheaper trig calls.

### expand_trigonometric

<a id="entry-presentation_wasm_api_session_expand_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_expandtrigonometric.af837d1e113e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
expandTrigonometric(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandtrigonometric.a896374747a3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.expandTrigonometric</code></p>

```typescript signature
expandTrigonometric(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_expandtrigonometric.1154bf16d311"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.expandTrigonometric</code></p>

```typescript signature
expandTrigonometric(): Expression
```

</details>



Expand trig/hyperbolic functions of sums and positive integer literal multiple angles. The directed
operation may increase expression size; unsupported, symbolic, noninteger, or over-budget
multipliers remain unchanged. A successful expansion is structurally idempotent, and recursively
admitted sums are expanded in the same pass.

### combine_trigonometric

<a id="entry-presentation_wasm_api_session_combine_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_combinetrigonometric.82565a45a596"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
combineTrigonometric(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_combinetrigonometric.741f4fcc74d0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.combineTrigonometric</code></p>

```typescript signature
combineTrigonometric(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_combinetrigonometric.379f033759d1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.combineTrigonometric</code></p>

```typescript signature
combineTrigonometric(): Expression
```

</details>



Inverse direction of `expand_trigonometric`: product-to-sum and
angle-recombination rules.

### combine_logarithm

<a id="entry-presentation_wasm_api_session_combine_logarithm"></a>
<a id="placement-placement.wasm.wasm_module.module_combinelogarithm.660beda16ea9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
combineLogarithm(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_combinelogarithm.d75c6b7bb203"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.combineLogarithm</code></p>

```typescript signature
combineLogarithm(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_combinelogarithm.a13ee73e1e1d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.combineLogarithm</code></p>

```typescript signature
combineLogarithm(): Expression
```

</details>



\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation
preserves the expression's domain.

### expand_logarithm

<a id="entry-presentation_wasm_api_session_expand_logarithm"></a>
<a id="placement-placement.wasm.wasm_module.module_expandlogarithm.c138343492e9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
expandLogarithm(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expandlogarithm.edb9385b56d9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.expandLogarithm</code></p>

```typescript signature
expandLogarithm(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_expandlogarithm.abcb3401c393"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.expandLogarithm</code></p>

```typescript signature
expandLogarithm(): Expression
```

</details>



\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the
operands are provably positive. Operands of unknown sign pass through
unchanged.

### rewrite_as_exponential

<a id="entry-presentation_wasm_api_session_rewrite_as_exponential"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteasexponential.2432173e98c8"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
rewriteAsExponential(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteasexponential.ead7eee76381"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.rewriteAsExponential</code></p>

```typescript signature
rewriteAsExponential(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_rewriteasexponential.4b402839fe68"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.rewriteAsExponential</code></p>

```typescript signature
rewriteAsExponential(): Expression
```

</details>



Euler-form rewriter: replace every trigonometric/hyperbolic call with the
equivalent complex-exponential expression (bottom-up).

### rewrite_as_trigonometric

<a id="entry-presentation_wasm_api_session_rewrite_as_trigonometric"></a>
<a id="placement-placement.wasm.wasm_module.module_rewriteastrigonometric.144585f41e3f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
rewriteAsTrigonometric(input_expression: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewriteastrigonometric.90428578b902"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.rewriteAsTrigonometric</code></p>

```typescript signature
rewriteAsTrigonometric(input_expression: Expression): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_rewriteastrigonometric.825595943505"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.rewriteAsTrigonometric</code></p>

```typescript signature
rewriteAsTrigonometric(): Expression
```

</details>



Inverse of `rewrite_as_exponential`. Recognition is shape-strict: canonical
Euler forms collapse back to trig/hyperbolic calls, anything else passes
through unchanged, so the round trip is the identity.

### rewrite_trigonometric_basis

<a id="entry-presentation_wasm_api_session_rewrite_trigonometric_basis"></a>
<a id="placement-placement.wasm.wasm_module.module_rewritetrigonometricbasis.5eb3b463d234"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
rewriteTrigonometricBasis(
    input_expression: Expression,
    basis: string,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_rewritetrigonometricbasis.9ea791c98c65"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.rewriteTrigonometricBasis</code></p>

```typescript signature
rewriteTrigonometricBasis(
    input_expression: Expression,
    basis: string,
): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_rewritetrigonometricbasis.874f98eb58f4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.rewriteTrigonometricBasis</code></p>

```typescript signature
rewriteTrigonometricBasis(basis: string): Expression
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

Directed rewrites between trigonometric, exponential, and complex forms.

```javascript
const x = symi.symbol("x", { real: true });
const value = symi.exp(symi.imaginaryUnit.multiply(x));

console.log(symi.realPart(value).toString());
console.log(symi.imaginaryPart(value).toString());
```

