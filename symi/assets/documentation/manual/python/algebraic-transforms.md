# Algebraic transforms

Directed algebraic rewrites change the form of an expression while preserving
its value on the documented domain. Each operation applies one named
transformation rather than searching, so the result shape is predictable. For
the search-based ladder see
[general simplification](simplification-general.md).

### expand

<a id="entry-presentation_python_api_session_expand"></a>
<a id="placement-placement.python.python_module.module_expand.bf48fd44714c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand.585710e373a6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand</code></p>

```python signature
expand(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_expand.208ce69fd96e"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.expand</code></p>

```python signature
expand() -> Expression
```

</details>



Expand products, integer powers, and supported algebraic forms.

### partial_fractions

<a id="entry-presentation_python_api_session_partial_fractions"></a>
<a id="placement-placement.python.python_module.module_partial_fractions.77aeeee3940d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partial_fractions(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partial_fractions.1771414a71ed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partial_fractions</code></p>

```python signature
partial_fractions(
    input_expression: ExpressionLike,
    variable: VariableLike,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_partial_fractions.1ab445c3df44"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.partial_fractions</code></p>

```python signature
partial_fractions(variable: VariableLike) -> Expression
```

</details>



Decompose a rational expression into polynomial and proper-fraction terms over
the named variable.

For factorization, cancellation, collection, and radical operations, use
[general simplification](simplification-general.md).

## Algebraic form changes

### factor

<a id="entry-presentation_python_api_session_factor"></a>
<a id="placement-placement.python.python_module.module_factor.8c065906aae5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
factor(
    input_expression: ExpressionLike,
    gaussian: bool = False,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_factor.46063153da4a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor</code></p>

```python signature
factor(
    input_expression: ExpressionLike,
    gaussian: bool = False,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_factor.a7b06dfc4e7c"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.factor</code></p>

```python signature
factor(gaussian: bool = False) -> Expression
```

</details>



Polynomial factorization over the rationals (full multivariate). With
`gaussian=True`, factor a univariate polynomial over the Gaussian integers
\(\mathbb{Z}[i]\); this form requires exactly one free variable and raises otherwise.

### collect

<a id="entry-presentation_python_api_session_collect"></a>
<a id="placement-placement.python.python_module.module_collect.e27d1ac4f0a7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
collect(
    input_expression: ExpressionLike,
    generator: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_collect.11eea93b82f8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collect</code></p>

```python signature
collect(
    input_expression: ExpressionLike,
    generator: ExpressionLike,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_collect.fc2b21333cc6"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.collect</code></p>

```python signature
collect(generator: ExpressionLike) -> Expression
```

</details>



Regroup the additive terms of `expression` by the numeric (integer or rational)
powers of a single `generator`, which may be a variable or an arbitrary
subexpression, writing the result as a sum of `generator^k * coefficient(k)`
terms without expanding the coefficients. For example, collecting
`a*x^2 + b*x^2 + a*x - b*x + c` by `x` yields `x^2*(a + b) + x*(a - b) + c`. The
rewrite is exact and equality-preserving; a numeric-literal generator, or a
generator that appears with only a single power, returns the input unchanged.

### complete_the_square

<a id="entry-presentation_python_api_session_complete_the_square"></a>
<a id="placement-placement.python.python_module.module_complete_the_square.0af89b745f9f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complete_the_square(
    input_expression: ExpressionLike,
    variable: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complete_the_square.0b69c1ad269a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complete_the_square</code></p>

```python signature
complete_the_square(
    input_expression: ExpressionLike,
    variable: ExpressionLike,
) -> Expression
```

<a id="placement-placement.python.python_class.expression_complete_the_square.db1de38470f1"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.complete_the_square</code></p>

```python signature
complete_the_square(variable: ExpressionLike) -> Expression
```

</details>



Rewrite an expression that is quadratic in `variable` into the exact vertex form
`a*(variable - h)^2 + k`, with `h = -b/(2*a)` and `k = c - b^2/(4*a)` built from
the degree-2, degree-1 and degree-0 coefficients `a`, `b`, `c` of the expression
collected in `variable`. For example, `2*x^2 - 4*x + 7` becomes `2*(x - 1)^2 + 5`.
The coefficients may contain other symbols freely, so the multivariate case is
the per-variable quadratic slice: `x^2 + 2*x*y + 3` becomes `(x + y)^2 - y^2 + 3`
in `x`. The rewrite is exact and equality-preserving, and the square is never
expanded.

The input is returned unchanged whenever the rewrite does not apply: when
`variable` is not a symbol (a kernel generator such as `sin(x)` is not supported
in this release); when the expression is not a quadratic polynomial slice in
`variable` — its collected powers of `variable` must be exactly `{2}`, `{2, 0}`,
`{2, 1}` or `{2, 1, 0}` and every coefficient must be free of `variable`, so
`x^3 + x`, `x^(1/2) + x`, `x + 1` and `sin(x)*x^2 + x` all decline; when `b = 0`
and the expression is therefore already in vertex form (`3*x^2 + 5`); and when
the leading coefficient `a` is not provably nonzero. A numeric `a` always
qualifies, while a symbolic `a` qualifies only when the assumption context proves
it nonzero — dividing by a possibly-zero leading coefficient would make the
emitted form invalid on the `a = 0` locus, so `a*x^2 + x` declines for an
unrestricted `a` and completes when `a` is assumed positive.

### factor_common_terms

<a id="entry-presentation_python_api_session_factor_common_terms"></a>
<a id="placement-placement.python.python_module.module_factor_common_terms.7a3852d245ce"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
factor_common_terms(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_factor_common_terms.0ebab65aba2b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factor_common_terms</code></p>

```python signature
factor_common_terms(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_factor_common_terms.4d5c920b9d2c"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.factor_common_terms</code></p>

```python signature
factor_common_terms() -> Expression
```

</details>



Pull the greatest common monomial and exact rational content out of the terms
of a general — not necessarily polynomial — sum, producing a single product of
a common factor and a reduced sum, without invoking full polynomial
factorization. For example, `6*x*y + 9*x^2*sin(z)` becomes
`3*x*(2*y + 3*x*sin(z))`. The numeric content is negative exactly when every
term is negative (`-2*x - 4*y` pulls `-2`, while `2*x - 4*y` and `x^3 - 3*x`
pull positive content), a kernel with numeric exponents is extracted at
its minimum exponent only when that minimum is positive (`x + 1/x` is left for
`cancel`/`together`), and a kernel with a symbolic exponent is extracted whole
only when the exponent is structurally identical in every term
(`a*x^n + b*x^n` becomes `x^n*(a + b)`). The rewrite is exact and
equality-preserving; when no nontrivial common factor exists, or the input is
not a sum, the input is returned unchanged. The reduced sum is never factored
further — that is `factor`'s job.

### rationalize_denominator

<a id="entry-presentation_python_api_session_rationalize_denominator"></a>
<a id="placement-placement.python.python_module.module_rationalize_denominator.0d2e5bcc5c21"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rationalize_denominator(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rationalize_denominator.0bb0cd8bf012"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalize_denominator</code></p>

```python signature
rationalize_denominator(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_rationalize_denominator.5a59210169df"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.rationalize_denominator</code></p>

```python signature
rationalize_denominator() -> Expression
```

</details>



Rationalize a radical denominator through exact multiquadratic conjugation or
extended-Euclidean inversion in one rational n-th-root extension. For example,
`1 / (sqrt(3) - sqrt(2))` becomes `sqrt(3) + sqrt(2)`, and
`1 / (1 + 2^(1/3))` becomes `(1 - 2^(1/3) + 2^(2/3))/3`. The operation is
directed and returns its input unchanged when the denominator is outside its
bounded supported radical class or the exact remultiplication check fails.

### collect_radicals

<a id="entry-presentation_python_api_session_collect_radicals"></a>
<a id="placement-placement.python.python_module.module_collect_radicals.2166b63cfde2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
collect_radicals(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_collect_radicals.b801115ab1d4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.collect_radicals</code></p>

```python signature
collect_radicals(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_collect_radicals.a98951be6352"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.collect_radicals</code></p>

```python signature
collect_radicals() -> Expression
```

</details>



Collect like numeric radical kernels in a top-level sum. For example,
`a*sqrt(2) + b*sqrt(2) + 3` becomes `(a + b)*sqrt(2) + 3`. At most eight
distinct kernels are considered; inputs beyond that bound return unchanged.

### denest_radicals

<a id="entry-presentation_python_api_session_denest_radicals"></a>
<a id="placement-placement.python.python_module.module_denest_radicals.44c973e4db68"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
denest_radicals(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_denest_radicals.dae89df7c52f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denest_radicals</code></p>

```python signature
denest_radicals(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_denest_radicals.c120755a651c"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.denest_radicals</code></p>

```python signature
denest_radicals() -> Expression
```

</details>



Denest the bounded depth-two real-radical subset bottom-up: rational quadratic
surds, up to three inner quadratic surds, and `cbrt(a + b*sqrt(c))` when its
exact resolvent has a rational root. For example, `sqrt(3 + 2*sqrt(2))` becomes
`1 + sqrt(2)` and `cbrt(2 + sqrt(5))` becomes `(1 + sqrt(5))/2`. A form outside
this decidable subset, such as `sqrt(1 + sqrt(2))`, is returned unchanged. Every
candidate is verified by exact repowering and principal-real-sign selection.

## Example

Rewrite one rational expression through several directed forms.

```python
import symi

x = symi.symbol("x")
rational_function = (x**2 - 1) / (x**2 + 2 * x + 1)

print(symi.cancel(rational_function))
print(symi.expand((x + 1) ** 3))
print(symi.partial_fractions(1 / (x**2 - 1), "x"))
print(symi.collect(x * symi.symbol("y") + x, x))
```

