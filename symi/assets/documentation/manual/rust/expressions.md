# Expression methods

Single-subject operations (transforms, calculus, solving, output) are also
available directly as methods on `Expression` — `e.simplify()`,
`e.integrate("x")`, `e.solve("x")`, `e.to_latex()`, … — delegating to the
context the expression belongs to. The entries in the operation chapters
document parameters and semantics; the method form drops the leading
expression argument. Exact input conversion and context ownership are
specified in [Conversions and collections](conversion-rules.md) and
[Context safety](context-safety.md).

### is_stale

<a id="entry-presentation_rust_api_expression_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_stale.c55bdad4abfb"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_assumptionscope_is_stale.c0891f4f3abe"></a>
<p class="symi-entry-owner">Variant using local assumptions — api::AssumptionScope method: <code>api::AssumptionScope::is_stale</code></p>

```rust signature
pub fn is_stale(&self) -> bool
```

</details>



Reports whether resetting the owning context invalidated the expression. All other operations
reject a stale receiver with an actionable error.

## Arithmetic

Python uses the native operators `+ - * / ** -`; operands may be expressions,
integers, or exact fractions. JavaScript uses the equivalent named methods and
accepts facade expressions, `bigint`, and safe integral `number` values. All
route through the auto-simplifying builders.

### add

<a id="entry-presentation_rust_api_session_add"></a>
<a id="placement-placement.rust.native_rust.api_session_add.75e803892978"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn add(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_add.7edac7e49135"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::add</code></p>

```rust signature
pub fn add(&self, other: &Expression) -> Result<Expression, ApiError>
```

</details>


### subtract

<a id="entry-presentation_rust_api_session_subtract"></a>
<a id="placement-placement.rust.native_rust.api_session_subtract.f3fc4dd82d5e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn subtract(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_subtract.a1ad15afb2f1"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::subtract</code></p>

```rust signature
pub fn subtract(
    &self,
    other: &Expression,
) -> Result<Expression, ApiError>
```

</details>


### multiply

<a id="entry-presentation_rust_api_session_multiply"></a>
<a id="placement-placement.rust.native_rust.api_session_multiply.1d925595bd82"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn multiply(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_multiply.b02aebaf76c1"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::multiply</code></p>

```rust signature
pub fn multiply(
    &self,
    other: &Expression,
) -> Result<Expression, ApiError>
```

</details>


### divide

<a id="entry-presentation_rust_api_session_divide"></a>
<a id="placement-placement.rust.native_rust.api_session_divide.3be2ac0518ec"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn divide(
    &self,
    numerator: &Expression,
    denominator: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_divide.73d77992fd62"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::divide</code></p>

```rust signature
pub fn divide(&self, other: &Expression) -> Result<Expression, ApiError>
```

</details>


### power

<a id="entry-presentation_rust_api_session_power"></a>
<a id="placement-placement.rust.native_rust.api_session_power.26bddf083c5b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn power(
    &self,
    base: &Expression,
    exponent: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_power.3c943db56bb2"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::power</code></p>

```rust signature
pub fn power(
    &self,
    exponent: &Expression,
) -> Result<Expression, ApiError>
```

</details>


### negate

<a id="entry-presentation_rust_api_expression_negate"></a>
<a id="placement-placement.rust.native_rust.api_expression_negate.485b3e26d6cc"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn negate(&self) -> Result<Expression, ApiError>
```


## Substitution and structure

### substitute

<a id="entry-presentation_rust_api_session_substitute"></a>
<a id="placement-placement.rust.native_rust.api_session_substitute.a2c4f6ed920e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn substitute(
    &self,
    target: &Expression,
    variable: &Expression,
    value: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_substitute.fb0c894d5bcc"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::substitute</code></p>

```rust signature
pub fn substitute(
    &self,
    variable: &Expression,
    value: &Expression,
) -> Result<Expression, ApiError>
```

</details>


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="entry-presentation_rust_api_session_rewrite_in_terms_of"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_rewrite_in_terms_of.944d094e8e08"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn rewrite_in_terms_of(
    &self,
    target: &Expression,
    source: &Expression,
    replacement: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_rewrite_in_terms_of.ddbe4b570e01"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::rewrite_in_terms_of</code></p>

```rust signature
pub fn rewrite_in_terms_of(
    &self,
    source: &Expression,
    replacement: &Expression,
) -> Result<Expression, ApiError>
```

</details>


Rewrite the target in terms of `replacement` under the caller-supplied formal
relation `replacement = source`. Exact subtrees, canonical additive and
multiplicative extractions, integer exponential families, and positive
same-base power families are supported. Every inferred match is accepted only
when substituting `source` back exactly reconstructs the matched target.
Fractional exponential relations and branch-sensitive power identities
conservatively remain unchanged. To introduce a displayed name such as `z`,
pass `symbol("z")` as `replacement`; assigning the source expression to a
host-language variable named `z` does not create a symbolic name.

### free_variables

<a id="entry-presentation_rust_api_expression_free_variables"></a>
<a id="placement-placement.rust.native_rust.api_expression_free_variables.62b193e915c7"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn free_variables(&self) -> Result<Vec<String>, ApiError>
```


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

<a id="entry-presentation_rust_api_expression_expression_type"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_expression_type.17e24a5e1d76"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn expression_type(&self) -> Result<ExpressionTypeName, ApiError>
```


Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`,
`sum`, `product`, `power`, `factorial`, `function_call`, `derivative`,
`integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`,
`fourier_transform`, `inverse_fourier_transform`, `piecewise`,
`ordinary_differential_equation`, `recurrence_equation`, `interval`,
`finite_set`, `set_union`, `set_intersection`, `set_complement`,
`image_set`, `condition_set`.

### node_count

<a id="entry-presentation_rust_api_expression_node_count"></a>
<a id="placement-placement.rust.native_rust.api_expression_node_count.b6465a7bd804"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn node_count(&self) -> Result<usize, ApiError>
```


Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="entry-presentation_rust_api_expression_duplicate"></a>
<a id="placement-placement.rust.native_rust.api_expression_duplicate.9c1e443bfe26"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn duplicate(&self) -> Result<Expression, ApiError>
```


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

<a id="entry-presentation_rust_api_session_evaluate_to_float"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_evaluate_to_float.f27ff04d5a62"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn evaluate_to_float(
    &self,
    input_expression: &Expression,
) -> Result<f64, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_evaluate_to_float.2d8aecc11d03"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::evaluate_to_float</code></p>

```rust signature
pub fn evaluate_to_float(&self) -> Result<f64, ApiError>
```

</details>


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="entry-presentation_rust_api_session_evaluate_to_complex_inexact"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_evaluate_to_complex_inexact.fd57024e2891"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn evaluate_to_complex_inexact(
    &self,
    input_expression: &Expression,
) -> Result<(f64, f64), ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_evaluate_to_complex_inexact.949c01b896dd"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::evaluate_to_complex_inexact</code></p>

```rust signature
pub fn evaluate_to_complex_inexact(
    &self,
) -> Result<(f64, f64), ApiError>
```

</details>


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

<a id="entry-presentation_rust_api_session_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.rust.native_rust.api_analysis_session_evaluate_to_complex_inexact_at_precision.ce065940bb15"></a>
<p class="symi-entry-owner">api::analysis::Session method</p>

```rust signature
pub fn evaluate_to_complex_inexact_at_precision(
    &self,
    input_expression: &Expression,
    precision_bits: u32,
) -> Result<(f64, f64), ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_evaluate_to_complex_inexact_at_precision.b57b10fb380e"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::evaluate_to_complex_inexact_at_precision</code></p>

```rust signature
pub fn evaluate_to_complex_inexact_at_precision(
    &self,
    precision_bits: u32,
) -> Result<(f64, f64), ApiError>
```

</details>


Same with an explicit working precision in bits.

#### Lambert W branches

`lambert_w(z)` is the principal branch `W_0(z)`, and `lambert_w(k, z)` with an
exact integer `k` is the branch `W_k(z)`; `lambert_w(0, z)` canonicalises to the
unary form. Every integer branch evaluates over the whole complex plane at
arbitrary precision, so `lambert_w(-1).evaluate_to_complex_inexact()` gives
`W_0(-1) = -0.3181… + 1.3372…i` rather than declining.

The two branches that take real values do so on exactly these intervals:
\(W_0\) on \([-1/e, \infty)\) with \(W_0 \ge -1\), and \(W_{-1}\) on \([-1/e, 0)\) with
\(W_{-1} \le -1\). An exactly real argument on one of those branches is evaluated in
real arithmetic throughout, so `evaluate_to_float` succeeds and the imaginary
part is exactly zero — `lambert_w(-1, -0.1)` gives `-3.5771…`. Every other
branch or argument routes through the complex kernel, so `lambert_w(-1, 1)`
has a complex value but no real one.

\(W_k(0)\) for \(k \ne 0\) is a logarithmic singularity and declines; so does a
non-integer or symbolic branch index, which is never silently read as the
principal branch. `W_0(0) = 0`, `W_0(e) = 1`, and `W_0(-1/e) = W_-1(-1/e) = -1`
fold exactly at construction. The branch structure, cuts, and the safe defining
identity `W_k(z)*exp(W_k(z)) = z` are preserved by the branch-aware result.

## Equality

### equals

<a id="entry-presentation_rust_api_expression_equals"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expression_equals.5b45990fc61a"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method</p>

```rust signature
pub fn equals(&self, other: &Expression) -> Result<bool, ApiError>
```


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

<a id="entry-presentation_rust_api_expression_is_matrix"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_matrix.72fe500d6a60"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_matrix(&self) -> Result<bool, ApiError>
```


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

<a id="entry-presentation_rust_api_expression_is_equality"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_equality.29015b71c813"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_equality(&self) -> Result<bool, ApiError>
```


True for `equal(a, b)` relation nodes.

### is_integral

<a id="entry-presentation_rust_api_expression_is_integral"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_integral.061d96f4a1b7"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_integral(&self) -> Result<bool, ApiError>
```


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

<a id="entry-presentation_rust_api_expression_is_union"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_union.ef600302ed3d"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_union(&self) -> Result<bool, ApiError>
```


### is_image_set

<a id="entry-presentation_rust_api_expression_is_image_set"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_image_set.e8a584a53a38"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_image_set(&self) -> Result<bool, ApiError>
```


### is_finite_set

<a id="entry-presentation_rust_api_expression_is_finite_set"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_finite_set.877448714aa4"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_finite_set(&self) -> Result<bool, ApiError>
```


### is_interval

<a id="entry-presentation_rust_api_expression_is_interval"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_interval.41c3018fc2f6"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_interval(&self) -> Result<bool, ApiError>
```


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

<a id="entry-presentation_rust_api_expression_is_real"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_real.1e362f9b8894"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_real(&self) -> Result<TruthValue, ApiError>
```


### is_positive

<a id="entry-presentation_rust_api_expression_is_positive"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_positive.9ba97b24aa78"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_positive(&self) -> Result<TruthValue, ApiError>
```


### is_negative

<a id="entry-presentation_rust_api_expression_is_negative"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_negative.618f896d793d"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_negative(&self) -> Result<TruthValue, ApiError>
```


### is_integer

<a id="entry-presentation_rust_api_expression_is_integer"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_integer.fa046faad821"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_integer(&self) -> Result<TruthValue, ApiError>
```


### is_rational

<a id="entry-presentation_rust_api_expression_is_rational"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_rational.9d9df6c0fca8"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_rational(&self) -> Result<TruthValue, ApiError>
```


### is_nonzero

<a id="entry-presentation_rust_api_expression_is_nonzero"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_nonzero.876aa413daaa"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_nonzero(&self) -> Result<TruthValue, ApiError>
```


### is_nonnegative

<a id="entry-presentation_rust_api_session_is_nonnegative"></a>
<a id="placement-placement.rust.native_rust.api_session_is_nonnegative.3bbc8ad07046"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn is_nonnegative(
    &self,
    target: &Expression,
) -> Result<TruthValue, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_is_nonnegative.7dbb8731040c"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::is_nonnegative</code></p>

```rust signature
pub fn is_nonnegative(&self) -> Result<TruthValue, ApiError>
```

</details>


Answers `True` only on proof that the expression is greater than or equal to
zero — an even power of a provably real base, a sum or product of such, or
anything already provably positive. It never answers `False`: a failure to
prove non-negativity is not a proof of negativity, so the undecided verdict is
`None`.

### is_finite

<a id="entry-presentation_rust_api_expression_is_finite"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_finite.13b1bf618242"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_finite(&self) -> Result<TruthValue, ApiError>
```


### is_defined

<a id="entry-presentation_rust_api_expression_is_defined"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_defined.ae5a55e78924"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_defined(&self) -> Result<TruthValue, ApiError>
```


Answers `True` only on proof that the expression denotes one scalar value at the
active point, and `False` only on proof that it denotes none — a zero
denominator, a zero logarithm argument, or a proved indeterminate extended-value
combination. Definedness is pointwise: it says nothing about continuity or
analyticity near the point, and a point on a chosen principal branch cut such as
`log(-1)` is defined even though the principal logarithm is discontinuous there.
The signed infinities are defined extended-real values but are not finite.

## Structural accessors

### interval_lower

<a id="entry-presentation_rust_api_expression_interval_lower"></a>
<a id="placement-placement.rust.native_rust.api_expression_interval_lower.f3c2ed9e74aa"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn interval_lower(&self) -> Result<Expression, ApiError>
```


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

<a id="entry-presentation_rust_api_expression_interval_upper"></a>
<a id="placement-placement.rust.native_rust.api_expression_interval_upper.4ce908393671"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn interval_upper(&self) -> Result<Expression, ApiError>
```


### integral_integrand

<a id="entry-presentation_rust_api_expression_integral_integrand"></a>
<a id="placement-placement.rust.native_rust.api_expression_integral_integrand.f1dc499313e4"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn integral_integrand(&self) -> Result<Expression, ApiError>
```


### integral_variable

<a id="entry-presentation_rust_api_expression_integral_variable"></a>
<a id="placement-placement.rust.native_rust.api_expression_integral_variable.d67edcfa3712"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn integral_variable(&self) -> Result<String, ApiError>
```


### integral_lower_bound

<a id="entry-presentation_rust_api_expression_integral_lower_bound"></a>
<a id="placement-placement.rust.native_rust.api_expression_integral_lower_bound.4607e3ddce95"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn integral_lower_bound(
    &self,
) -> Result<Option<Expression>, ApiError>
```


`None` for indefinite integrals.

### integral_upper_bound

<a id="entry-presentation_rust_api_expression_integral_upper_bound"></a>
<a id="placement-placement.rust.native_rust.api_expression_integral_upper_bound.fdac2fd764e8"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn integral_upper_bound(
    &self,
) -> Result<Option<Expression>, ApiError>
```


### union_components

<a id="entry-presentation_rust_api_expression_union_components"></a>
<a id="placement-placement.rust.native_rust.api_expression_union_components.c73de67ec53f"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn union_components(&self) -> Result<Vec<Expression>, ApiError>
```


### image_set_lambda_expression

<a id="entry-presentation_rust_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.rust.native_rust.api_expression_image_set_lambda_expression.2a7f5b62c78d"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn image_set_lambda_expression(
    &self,
) -> Result<Expression, ApiError>
```


### image_set_variable

<a id="entry-presentation_rust_api_expression_image_set_variable"></a>
<a id="placement-placement.rust.native_rust.api_expression_image_set_variable.e0a0b6c8694d"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn image_set_variable(&self) -> Result<String, ApiError>
```


### image_set_domain

<a id="entry-presentation_rust_api_expression_image_set_domain"></a>
<a id="placement-placement.rust.native_rust.api_expression_image_set_domain.02b2e75224d3"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn image_set_domain(&self) -> Result<Expression, ApiError>
```


### to_list

<a id="entry-presentation_rust_api_expression_to_list"></a>
<a id="placement-placement.rust.native_rust.api_expression_to_list.6f9a303ec887"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn to_list(&self) -> Result<Vec<Expression>, ApiError>
```


Elements of a finite set; raises on other shapes. Python finite sets also
support `len()` and iteration.

### length

Element count of a finite set (Python: `len(expression)`).

## String conversion

### to_string

Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

<a id="entry-presentation_rust_api_expression_symbol_name"></a>
<a id="placement-placement.rust.native_rust.api_expression_symbol_name.10e130e5343b"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn symbol_name(&self) -> Result<String, ApiError>
```


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="entry-presentation_rust_api_session_numerator_denominator"></a>
<a id="placement-placement.rust.native_rust.api_session_numerator_denominator.de1f536ce5b1"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn numerator_denominator(
    &self,
    target: &Expression,
) -> Result<(Expression, Expression), ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_numerator_denominator.7e652d456bb9"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::numerator_denominator</code></p>

```rust signature
pub fn numerator_denominator(
    &self,
) -> Result<(Expression, Expression), ApiError>
```

</details>


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="entry-presentation_rust_api_session_numerator"></a>
<a id="placement-placement.rust.native_rust.api_session_numerator.7305c9047cbc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn numerator(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_numerator.fd62eccb92a9"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::numerator</code></p>

```rust signature
pub fn numerator(&self) -> Result<Expression, ApiError>
```

</details>


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="entry-presentation_rust_api_session_denominator"></a>
<a id="placement-placement.rust.native_rust.api_session_denominator.e65eed2eb5b5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn denominator(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_denominator.f25d92fd1ced"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::denominator</code></p>

```rust signature
pub fn denominator(&self) -> Result<Expression, ApiError>
```

</details>


Returns the structural denominator from `numerator_denominator`.

## Example

Inspect and rewrite an expression through its own methods.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let x = session.symbol("x");
    let target = session.parse("(x^2 - 1)/(x + 1)")?;

    println!("{}", target.cancel()?);
    println!("{}", target.numerator()?);
    println!("{}", target.substitute(&x, &session.integer(3))?.execute()?);
    Ok(())
}
```


### is_nonpositive

<a id="entry-presentation_rust_api_session_is_nonpositive"></a>
<a id="placement-placement.rust.native_rust.api_session_is_nonpositive.2520e35c1258"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn is_nonpositive(
    &self,
    target: &Expression,
) -> Result<TruthValue, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_is_nonpositive.7b78e42e1dfc"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::is_nonpositive</code></p>

```rust signature
pub fn is_nonpositive(&self) -> Result<TruthValue, ApiError>
```

</details>


Whether the expression is known to be nonpositive. Three-valued, like the other
sign predicates on this page: `None` means the sign was not decided from the
assumptions in force, not that the expression is positive. Compare
[`is_nonnegative`](#is_nonnegative).

## Additional API

### Expression

<a id="entry-presentation_rust_api_expression"></a>
<a id="placement-placement.rust.native_rust.api_expression.39c36267f70d"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct Expression
```

Public native data structure named `expression`.

### api::expression_operations

<a id="entry-presentation_rust_native_module_api_expression_operations"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations.ff692b0d6e6d"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod expression_operations;
```

Receiver-shaped expression operations of the native API.

### is_algebraic

<a id="entry-presentation_rust_api_expression_is_algebraic"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_algebraic.cf2df473a55a"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_algebraic(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is algebraic.

### is_complex

<a id="entry-presentation_rust_api_expression_is_complex"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_complex.65ffe4c8455a"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_complex(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is finite complex.

### is_composite

<a id="entry-presentation_rust_api_expression_is_composite"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_composite.57a713729970"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_composite(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is composite.

### is_even

<a id="entry-presentation_rust_api_expression_is_even"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_even.125e8a552628"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_even(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is even.

### is_extended_real

<a id="entry-presentation_rust_api_expression_is_extended_real"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_extended_real.0ba04d7edfe5"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_extended_real(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is extended-real.

### is_infinite

<a id="entry-presentation_rust_api_expression_is_infinite"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_infinite.63e607e18a0b"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_infinite(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is infinite.

### is_irrational

<a id="entry-presentation_rust_api_expression_is_irrational"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_irrational.d1ecff92e3d3"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_irrational(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is irrational.

### is_natural

<a id="entry-presentation_rust_api_expression_is_natural"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_natural.982e0afed79e"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_natural(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is natural.

### is_odd

<a id="entry-presentation_rust_api_expression_is_odd"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_odd.6c44f2c36801"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_odd(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is odd.

### is_positive_integer

<a id="entry-presentation_rust_api_expression_is_positive_integer"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_positive_integer.5ec97def8c30"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_positive_integer(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is a positive integer.

### is_transcendental

<a id="entry-presentation_rust_api_expression_is_transcendental"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_transcendental.30daff0e5849"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_transcendental(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is transcendental.

### is_zero

<a id="entry-presentation_rust_api_expression_is_zero"></a>
<a id="placement-placement.rust.native_rust.api_expression_is_zero.d4f78047d4a1"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn is_zero(&self) -> Result<TruthValue, ApiError>
```

Query whether this expression is zero.

### structural_hash

<a id="entry-presentation_rust_api_expression_structural_hash"></a>
<a id="placement-placement.rust.native_rust.api_expression_structural_hash.e344a3bb6e06"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn structural_hash(&self) -> u64
```

Provides the `structural_hash` operation on this native type.

### ExpressionGraphMeasurements

<a id="entry-presentation_rust_api_expressiongraphmeasurements"></a>
<a id="placement-placement.rust.native_rust.api_expressiongraphmeasurements.7744b4a28308"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::operation::ExpressionGraphMeasurements;
```

The shape of one expression graph an operation was handed.

### ExpressionTypeName

<a id="entry-presentation_rust_api_expressiontypename"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expressiontypename.1db3b711114e"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct ExpressionTypeName(&'static str);
```

The structural kind of an expression node.

#### ExpressionTypeName.name

<a id="entry-presentation_rust_api_expressiontypename_name"></a>
<a id="placement-placement.rust.native_rust.api_expression_operations_expressiontypename_name.b3c454252ef3"></a>
<p class="symi-entry-owner">api::expression_operations::ExpressionTypeName method</p>

```rust signature
pub fn name(&self) -> &'static str
```

The stable lowercase spelling shared by every binding.

### NumeratorDenominator

<a id="entry-presentation_rust_api_numeratordenominator"></a>
<a id="placement-placement.rust.native_rust.api_numeratordenominator.b86f97da0e84"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::NumeratorDenominator;
```

The numerator and denominator of a structural quotient split.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_numeratordenominator.96a9f701a304"></a>
<p class="symi-entry-owner">Type: <code>api::results::NumeratorDenominator</code></p>

```rust signature
pub struct NumeratorDenominator
```

</details>

#### NumeratorDenominator.denominator

<a id="entry-presentation_rust_api_numeratordenominator_denominator"></a>
<a id="placement-placement.rust.native_rust.api_results_numeratordenominator_denominator.761a00c4f4ce"></a>
<p class="symi-entry-owner">api::results::NumeratorDenominator method</p>

```rust signature
pub fn denominator(&self) -> Expression
```

The denominator factor.

#### NumeratorDenominator.numerator

<a id="entry-presentation_rust_api_numeratordenominator_numerator"></a>
<a id="placement-placement.rust.native_rust.api_results_numeratordenominator_numerator.017b447f3c19"></a>
<p class="symi-entry-owner">api::results::NumeratorDenominator method</p>

```rust signature
pub fn numerator(&self) -> Expression
```

The numerator factor.

