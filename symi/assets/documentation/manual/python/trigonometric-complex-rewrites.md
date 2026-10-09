# Trigonometric and complex rewrites

Trigonometric, logarithmic, exponential, and complex rewrites are separated from general simplification because their identities depend on domains and branch behavior.

### expand_complex

<a id="placement-placement.python.python_class.context_expand_complex.5cce2f91f5a4"></a>
`Context.expand_complex(input_expression)`

<a id="placement-placement.python.python_class.expression_expand_complex.9dc96a72c703"></a>
`Expression.expand_complex()`

<a id="placement-placement.python.python_module.module_expand_complex.48934d5e4596"></a>
`symi.expand_complex(input_expression)`



Decompose an expression exactly as `real_part(expression) + i*imaginary_part(expression)`.
Products, integer powers, and `exp`, `sin`, `cos`, `sinh`, and `cosh` are expanded through
their Cartesian identities. Symbol assumptions determine which atoms are real. Unknown atoms
and branch-sensitive operations such as logarithms and non-integer powers remain represented by
symbolic real- and imaginary-part calls. The directed operation also expands a supported modulus
under real assumptions: `abs(x + i*y)` becomes `sqrt(x^2 + y^2)`, and exact integer powers under
the modulus preserve their original poles while expanding the Cartesian norm. Oversized or
unsupported modulus arguments remain unchanged or wrapper-bearing.

### real_part

<a id="placement-placement.python.python_class.context_real_part.85087b3f0063"></a>
`Context.real_part(input_expression)`

<a id="placement-placement.python.python_class.expression_real_part.640391445fee"></a>
`Expression.real_part()`

<a id="placement-placement.python.python_module.module_real_part.fdfe4738148e"></a>
`symi.real_part(input_expression)`



Return the exact real component of an expression. For example, if `y` is declared real,
`real_part(exp(i*y))` is `cos(y)`. An atom whose reality is unknown returns a symbolic
`real_part(atom)` call. The returned expression is always known to be real.

### imaginary_part

<a id="placement-placement.python.python_class.context_imaginary_part.3e12080db6bd"></a>
`Context.imaginary_part(input_expression)`

<a id="placement-placement.python.python_class.expression_imaginary_part.3bfb3098c9bd"></a>
`Expression.imaginary_part()`

<a id="placement-placement.python.python_module.module_imaginary_part.87cf9d85d535"></a>
`symi.imaginary_part(input_expression)`



Return the exact imaginary component of an expression. For example, if `y` is declared real,
`imaginary_part(exp(i*y))` is `sin(y)`. An atom whose reality is unknown returns a symbolic
`imaginary_part(atom)` call. The returned expression is always known to be real.

### combine_powers

<a id="placement-placement.python.python_class.context_combine_powers.3d08b0eb70f3"></a>
`Context.combine_powers(input_expression)`

<a id="placement-placement.python.python_class.expression_combine_powers.6a279c49f326"></a>
`Expression.combine_powers()`

<a id="placement-placement.python.python_module.module_combine_powers.83da2ec24bad"></a>
`symi.combine_powers(input_expression)`



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

<a id="placement-placement.python.python_class.context_expand_power_base.10c08191ec05"></a>
`Context.expand_power_base(input_expression)`

<a id="placement-placement.python.python_class.expression_expand_power_base.897bf3a2aa16"></a>
`Expression.expand_power_base()`

<a id="placement-placement.python.python_module.module_expand_power_base.5ba9f9674a72"></a>
`symi.expand_power_base(input_expression)`



Split a power whose base is structurally a product into a product of powers
(`(x*y)^a -> x^a * y^a`) at every power node whose exponent is provably an
integer — the only unconditionally valid gate for this direction, since the split
introduces `x^a` and `y^a` individually and each needs its own base off the cut.
With `n` declared an integer, `(x*y)^n` becomes `x^n * y^n`. Kahan's example
`(x*y)^(1/2)` over unconstrained `x, y` is left unchanged, as is any other
unprovable site; there is no force mode. A base that is not structurally a
product is never decomposed, so `6^x` is not split into `2^x * 3^x`.

### denest_powers

<a id="placement-placement.python.python_class.context_denest_powers.ea466f1a68ac"></a>
`Context.denest_powers(input_expression)`

<a id="placement-placement.python.python_class.expression_denest_powers.74ee941efff8"></a>
`Expression.denest_powers()`

<a id="placement-placement.python.python_module.module_denest_powers.0cb7e0cca77f"></a>
`symi.denest_powers(input_expression)`



Flatten a power of a power into a single power (`(x^a)^b -> x^(a*b)`) at every
power node whose outer exponent is provably an integer, which is valid on the
principal branch because an integer power never routes through `log`. With `n`
declared an integer, `(x^a)^n` becomes `x^(a*n)`. A fractional outer exponent is
left unchanged — `((-1)^2)^(1/2)` is `1` while `(-1)^(2*(1/2))` is `-1` — and
there is no force mode. A base that is not structurally a power is untouched.

### simplify_trigonometric

<a id="placement-placement.python.python_class.context_simplify_trigonometric.4b10b216b085"></a>
`Context.simplify_trigonometric(input_expression)`

<a id="placement-placement.python.python_class.expression_simplify_trigonometric.452d1a9aa6e7"></a>
`Expression.simplify_trigonometric()`

<a id="placement-placement.python.python_module.module_simplify_trigonometric.9708f5a823b7"></a>
`symi.simplify_trigonometric(input_expression)`



Fu-style trigonometric simplification toward fewer/cheaper trig calls.

### expand_trigonometric

<a id="placement-placement.python.python_class.context_expand_trigonometric.5e3ea8b7e8c2"></a>
`Context.expand_trigonometric(input_expression)`

<a id="placement-placement.python.python_class.expression_expand_trigonometric.7f2d954796d3"></a>
`Expression.expand_trigonometric()`

<a id="placement-placement.python.python_module.module_expand_trigonometric.78c99da95053"></a>
`symi.expand_trigonometric(input_expression)`



Expand trig/hyperbolic functions of sums and positive integer literal multiple angles. The directed
operation may increase expression size; unsupported, symbolic, noninteger, or over-budget
multipliers remain unchanged. A successful expansion is structurally idempotent, and recursively
admitted sums are expanded in the same pass.

### combine_trigonometric

<a id="placement-placement.python.python_class.context_combine_trigonometric.528c0bb60743"></a>
`Context.combine_trigonometric(input_expression)`

<a id="placement-placement.python.python_class.expression_combine_trigonometric.009ca5b2de75"></a>
`Expression.combine_trigonometric()`

<a id="placement-placement.python.python_module.module_combine_trigonometric.ba50be65caaa"></a>
`symi.combine_trigonometric(input_expression)`



Inverse direction of `expand_trigonometric`: product-to-sum and
angle-recombination rules.

### combine_logarithm

<a id="placement-placement.python.python_class.context_combine_logarithm.fce01721c35a"></a>
`Context.combine_logarithm(input_expression)`

<a id="placement-placement.python.python_class.expression_combine_logarithm.0d0e22017360"></a>
`Expression.combine_logarithm()`

<a id="placement-placement.python.python_module.module_combine_logarithm.3159ff3b58d2"></a>
`symi.combine_logarithm(input_expression)`



\(\log a + \log b \rightarrow \log(a b)\) and \(n\log a \rightarrow \log(a^n)\) when the transformation
preserves the expression's domain.

### expand_logarithm

<a id="placement-placement.python.python_class.context_expand_logarithm.1266a07c68f1"></a>
`Context.expand_logarithm(input_expression)`

<a id="placement-placement.python.python_class.expression_expand_logarithm.5d63a3ff43d6"></a>
`Expression.expand_logarithm()`

<a id="placement-placement.python.python_module.module_expand_logarithm.bb1c9442f963"></a>
`symi.expand_logarithm(input_expression)`



\(\log(a b) \rightarrow \log a + \log b\) and \(\log(a^n) \rightarrow n\log a\), applied only where the
operands are provably positive. Operands of unknown sign pass through
unchanged.

### rewrite_as_exponential

<a id="placement-placement.python.python_class.context_rewrite_as_exponential.ab4bcf0ccd8a"></a>
`Context.rewrite_as_exponential(input_expression)`

<a id="placement-placement.python.python_class.expression_rewrite_as_exponential.9a80406d27c9"></a>
`Expression.rewrite_as_exponential()`

<a id="placement-placement.python.python_module.module_rewrite_as_exponential.8570bd3a9aaf"></a>
`symi.rewrite_as_exponential(input_expression)`



Euler-form rewriter: replace every trigonometric/hyperbolic call with the
equivalent complex-exponential expression (bottom-up).

### rewrite_as_trigonometric

<a id="placement-placement.python.python_class.context_rewrite_as_trigonometric.eabe12481c11"></a>
`Context.rewrite_as_trigonometric(input_expression)`

<a id="placement-placement.python.python_class.expression_rewrite_as_trigonometric.686d620052f0"></a>
`Expression.rewrite_as_trigonometric()`

<a id="placement-placement.python.python_module.module_rewrite_as_trigonometric.44edbc7644c2"></a>
`symi.rewrite_as_trigonometric(input_expression)`



Inverse of `rewrite_as_exponential`. Recognition is shape-strict: canonical
Euler forms collapse back to trig/hyperbolic calls, anything else passes
through unchanged, so the round trip is the identity.

### rewrite_trigonometric_basis

<a id="placement-placement.python.python_class.context_rewrite_trigonometric_basis.bf0965118280"></a>
`Context.rewrite_trigonometric_basis(input_expression, basis)`

<a id="placement-placement.python.python_class.expression_rewrite_trigonometric_basis.343f21c131d1"></a>
`Expression.rewrite_trigonometric_basis(basis)`

<a id="placement-placement.python.python_module.module_rewrite_trigonometric_basis.db34b852b91c"></a>
`symi.rewrite_trigonometric_basis(input_expression, basis)`



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

```python
import symi

x = symi.symbol("x", real=True)

print(symi.rewrite_as_exponential(symi.sin(x)))
print(symi.expand_trigonometric(symi.sin(2 * x)))
print(symi.real_part(symi.exp(symi.imaginary_unit * x)))
print(symi.imaginary_part(symi.exp(symi.imaginary_unit * x)))
```

