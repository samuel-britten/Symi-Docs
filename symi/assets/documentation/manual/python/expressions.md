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


Reports whether resetting the owning context invalidated the expression. All other operations
reject a stale receiver with an actionable error.

## Arithmetic

Python uses the native operators `+ - * / ** -`; operands may be expressions,
integers, or exact fractions. JavaScript uses the equivalent named methods and
accepts facade expressions, `bigint`, and safe integral `number` values. All
route through the auto-simplifying builders.

### add

### subtract

### multiply

### divide

*Not exposed by the Python bindings. Available as [`Expression.divide`](/symi/wasm/expressions#divide) in WASM / JavaScript, [`UniffiExpression.divide`](/symi/kotlin/expressions#divide) in Kotlin, [`UniffiExpression.divide`](/symi/swift/expressions#divide) in Swift, [`api::Expression::divide`](/symi/rust/expressions#divide) in Rust.*


### power

*Not exposed by the Python bindings. Available as [`Expression.power`](/symi/wasm/expressions#power) in WASM / JavaScript, [`UniffiExpression.power`](/symi/kotlin/expressions#power) in Kotlin, [`UniffiExpression.power`](/symi/swift/expressions#power) in Swift, [`api::Expression::power`](/symi/rust/expressions#power) in Rust.*


### negate

*Not exposed by the Python bindings. Available as [`Expression.negate`](/symi/wasm/expressions#negate) in WASM / JavaScript, [`UniffiExpression.negate`](/symi/kotlin/expressions#negate) in Kotlin, [`UniffiExpression.negate`](/symi/swift/expressions#negate) in Swift, [`api::Expression::negate`](/symi/rust/expressions#negate) in Rust.*


## Substitution and structure

### substitute

<a id="entry-presentation_python_expressions_capability_expression_transformations_substitute_api_expression_substitute"></a>
<a id="placement-placement.python.python_class.expression_substitute.bb8b8e243847"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
substitute(variable: VariableLike, value: ExpressionLike) -> Expression
```


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="entry-presentation_python_expressions_capability_expression_transformations_rewrite_in_terms_of_api_algebra_session_rewrite_in_terms_of"></a>
<a id="placement-placement.python.python_module.module_rewrite_in_terms_of.00ba7f5f5ee7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rewrite_in_terms_of(
    target: ExpressionLike,
    source: ExpressionLike,
    replacement: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rewrite_in_terms_of.f16a697494a8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rewrite_in_terms_of</code></p>

```python signature
rewrite_in_terms_of(
    target: ExpressionLike,
    source: ExpressionLike,
    replacement: ExpressionLike,
) -> Expression
```

</details>

<a id="entry-presentation_python_expressions_capability_expression_transformations_rewrite_in_terms_of_api_expression_operations_expression_rewrite_in_terms_of"></a>
<a id="placement-placement.python.python_class.expression_rewrite_in_terms_of.e75adcb7ae07"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
rewrite_in_terms_of(
    source: ExpressionLike,
    replacement: ExpressionLike,
) -> Expression
```


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

<a id="entry-presentation_python_expressions_capability_expression_transformations_free_variables_api_expression_free_variables"></a>
<a id="placement-placement.python.python_class.expression_free_variables.3120c4c59801"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
free_variables() -> list[str]
```


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

<a id="entry-presentation_python_expressions_capability_expression_transformations_expression_type_api_expression_operations_expression_expression_type"></a>
<a id="placement-placement.python.python_class.expression_expression_type.4b37960ff6b7"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
expression_type() -> str
```


Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`,
`sum`, `product`, `power`, `factorial`, `function_call`, `derivative`,
`integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`,
`fourier_transform`, `inverse_fourier_transform`, `piecewise`,
`ordinary_differential_equation`, `recurrence_equation`, `interval`,
`finite_set`, `set_union`, `set_intersection`, `set_complement`,
`image_set`, `condition_set`.

### node_count

Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="entry-presentation_python_expressions_capability_expression_transformations_duplicate_api_expression_duplicate"></a>
<a id="placement-placement.python.python_class.expression_duplicate.cce507a6c8ba"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
duplicate() -> Expression
```


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

<a id="entry-presentation_python_expressions_capability_expression_transformations_evaluate_to_float_api_expression_operations_expression_evaluate_to_float"></a>
<a id="placement-placement.python.python_class.expression_evaluate_to_float.418b3101a583"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_to_float() -> float
```


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="entry-presentation_python_expressions_capability_expression_transformations_evaluate_to_complex_inexact_api_expression_operations_expression_evaluate_to_complex_inexact"></a>
<a id="placement-placement.python.python_class.expression_evaluate_to_complex_inexact.b1200e883600"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_to_complex_inexact() -> tuple[float, float]
```


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

<a id="entry-presentation_python_expressions_capability_expression_transformations_evaluate_to_complex_inexact_at_precision_api_expression_operations_expression_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.python.python_class.expression_evaluate_to_complex_inexact_at_precision.8080ec68eb86"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_to_complex_inexact_at_precision(precision_bits: int) -> tuple[float, float]
```


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

<a id="entry-presentation_python_expressions_capability_expression_transformations_equals_api_expression_operations_expression_equals"></a>
<a id="placement-placement.python.python_class.expression_equals.533a8641b35b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
equals(other: ExpressionLike) -> bool
```


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_matrix_api_expression_is_matrix"></a>
<a id="placement-placement.python.python_class.expression_is_matrix.e2b72bb17444"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_matrix: bool
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_matrix_api_matrix_operations_matrix_is_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_matrix.0636baf5cb88"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
is_matrix: bool
```


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_equality_api_expression_is_equality"></a>
<a id="placement-placement.python.python_class.expression_is_equality.e989bcf4fd97"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_equality() -> bool
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_equality_api_matrix_operations_matrix_is_equality"></a>
<a id="placement-placement.python.python_class.matrix_is_equality.fef51ea43875"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_equality() -> bool
```


True for `equal(a, b)` relation nodes.

### is_integral

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_integral_api_expression_is_integral"></a>
<a id="placement-placement.python.python_class.expression_is_integral.d403fe18e20d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_integral() -> bool
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_integral_api_matrix_operations_matrix_is_integral"></a>
<a id="placement-placement.python.python_class.matrix_is_integral.2aa435a6ae20"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_integral() -> bool
```


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_union_api_expression_is_union"></a>
<a id="placement-placement.python.python_class.expression_is_union.d192a68a8238"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_union() -> bool
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_union_api_matrix_operations_matrix_is_union"></a>
<a id="placement-placement.python.python_class.matrix_is_union.1e6b493d466b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_union() -> bool
```


### is_image_set

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_image_set_api_expression_is_image_set"></a>
<a id="placement-placement.python.python_class.expression_is_image_set.628821d951a2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_image_set() -> bool
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_image_set_api_matrix_operations_matrix_is_image_set"></a>
<a id="placement-placement.python.python_class.matrix_is_image_set.32d92ebd96fa"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_image_set() -> bool
```


### is_finite_set

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_finite_set_api_expression_is_finite_set"></a>
<a id="placement-placement.python.python_class.expression_is_finite_set.f011174eecec"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_finite_set() -> bool
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_finite_set_api_matrix_operations_matrix_is_finite_set"></a>
<a id="placement-placement.python.python_class.matrix_is_finite_set.7dc9734ea9f1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_finite_set() -> bool
```


### is_interval

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_interval_api_expression_is_interval"></a>
<a id="placement-placement.python.python_class.expression_is_interval.16264a9ea34f"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_interval() -> bool
```


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_real_api_expression_is_real"></a>
<a id="placement-placement.python.python_class.expression_is_real.223807c3891d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_real() -> Optional[bool]
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_real_api_matrix_operations_matrix_is_real"></a>
<a id="placement-placement.python.python_class.matrix_is_real.dc7c5bc1210e"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_real() -> Optional[bool]
```


### is_positive

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_positive_api_expression_is_positive"></a>
<a id="placement-placement.python.python_class.expression_is_positive.fd253073651b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_positive() -> Optional[bool]
```

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_positive_api_matrix_operations_matrix_is_positive"></a>
<a id="placement-placement.python.python_class.matrix_is_positive.cb6bef131b19"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive() -> Optional[bool]
```


### is_negative

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_negative_api_expression_is_negative"></a>
<a id="placement-placement.python.python_class.expression_is_negative.66463cf8c5bf"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_negative() -> Optional[bool]
```


### is_integer

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_integer_api_expression_is_integer"></a>
<a id="placement-placement.python.python_class.expression_is_integer.265875f28f3d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_integer() -> Optional[bool]
```


### is_rational

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_rational_api_expression_is_rational"></a>
<a id="placement-placement.python.python_class.expression_is_rational.ebebd5f8b150"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_rational() -> Optional[bool]
```


### is_nonzero

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_nonzero_api_expression_is_nonzero"></a>
<a id="placement-placement.python.python_class.expression_is_nonzero.5023122e6b9d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonzero() -> Optional[bool]
```


### is_nonnegative

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_nonnegative_api_expression_is_nonnegative"></a>
<a id="placement-placement.python.python_class.expression_is_nonnegative.b1caa420f328"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonnegative() -> Optional[bool]
```


Answers `True` only on proof that the expression is greater than or equal to
zero — an even power of a provably real base, a sum or product of such, or
anything already provably positive. It never answers `False`: a failure to
prove non-negativity is not a proof of negativity, so the undecided verdict is
`None`.

### is_finite

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_finite_api_expression_is_finite"></a>
<a id="placement-placement.python.python_class.expression_is_finite.afd2d2c8868f"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_finite() -> Optional[bool]
```


### is_defined

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_defined_api_expression_is_defined"></a>
<a id="placement-placement.python.python_class.expression_is_defined.7f503b8898c6"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_defined() -> Optional[bool]
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

<a id="entry-presentation_python_expressions_capability_expression_transformations_interval_lower_api_expression_interval_lower"></a>
<a id="placement-placement.python.python_class.expression_interval_lower.2a8531122802"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
interval_lower() -> Expression
```


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

<a id="entry-presentation_python_expressions_capability_expression_transformations_interval_upper_api_expression_interval_upper"></a>
<a id="placement-placement.python.python_class.expression_interval_upper.f9ce0cc9c300"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
interval_upper() -> Expression
```


### integral_integrand

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_integrand_api_expression_integral_integrand"></a>
<a id="placement-placement.python.python_class.expression_integral_integrand.6f4db735f08b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_integrand() -> Expression
```


### integral_variable

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_variable_api_expression_integral_variable"></a>
<a id="placement-placement.python.python_class.expression_integral_variable.4900f1a20525"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_variable() -> str
```


### integral_lower_bound

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_lower_bound_api_expression_integral_lower_bound"></a>
<a id="placement-placement.python.python_class.expression_integral_lower_bound.e12ad46f3453"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_lower_bound() -> Optional[Expression]
```


`None` for indefinite integrals.

### integral_upper_bound

<a id="entry-presentation_python_expressions_capability_expression_transformations_integral_upper_bound_api_expression_integral_upper_bound"></a>
<a id="placement-placement.python.python_class.expression_integral_upper_bound.f2d897362ebe"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_upper_bound() -> Optional[Expression]
```


### union_components

<a id="entry-presentation_python_expressions_capability_expression_transformations_union_components_api_expression_union_components"></a>
<a id="placement-placement.python.python_class.expression_union_components.d7ba76739d4b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
union_components() -> list[Any]
```


### image_set_lambda_expression

<a id="entry-presentation_python_expressions_capability_expression_transformations_image_set_lambda_expression_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.python.python_class.expression_image_set_lambda_expression.210d2d46c870"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_lambda_expression() -> Expression
```


### image_set_variable

<a id="entry-presentation_python_expressions_capability_expression_transformations_image_set_variable_api_expression_image_set_variable"></a>
<a id="placement-placement.python.python_class.expression_image_set_variable.a2bc136da797"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_variable() -> str
```


### image_set_domain

<a id="entry-presentation_python_expressions_capability_expression_transformations_image_set_domain_api_expression_image_set_domain"></a>
<a id="placement-placement.python.python_class.expression_image_set_domain.f5bf94922f92"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_domain() -> Expression
```


### to_list

<a id="entry-presentation_python_expressions_capability_expression_transformations_to_list_api_expression_to_list"></a>
<a id="placement-placement.python.python_class.expression_to_list.f4ac813ef225"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
to_list() -> list[Any]
```


Elements of a finite set; raises on other shapes. Python finite sets also
support `len()` and iteration.

### length

Element count of a finite set (Python: `len(expression)`).

## String conversion

### to_string

*Not exposed by the Python bindings. Available as [`api::partial_differential_equations::PartialDifferentialEquationProblem::to_string`](/symi/rust/expressions#to_string) in Rust.*


Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

<a id="entry-presentation_python_expressions_capability_expression_transformations_symbol_name_api_expression_symbol_name"></a>
<a id="placement-placement.python.python_class.expression_symbol_name.984257e5d5ea"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
symbol_name() -> str
```


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_denominator_api_session_numerator_denominator"></a>
<a id="placement-placement.python.python_module.module_numerator_denominator.b5d4f5877417"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
numerator_denominator(input_expression: ExpressionLike) -> tuple[Expression, Expression]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_numerator_denominator.68bd70aacf35"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numerator_denominator</code></p>

```python signature
numerator_denominator(input_expression: ExpressionLike) -> tuple[Expression, Expression]
```

</details>

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_denominator_api_expression_numerator_denominator"></a>
<a id="placement-placement.python.python_class.expression_numerator_denominator.46a81fe90444"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
numerator_denominator() -> tuple[Expression, Expression]
```


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_api_session_numerator"></a>
<a id="placement-placement.python.python_module.module_numerator.7b439c7018e9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
numerator(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_numerator.e4e7432a577f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.numerator</code></p>

```python signature
numerator(input_expression: ExpressionLike) -> Expression
```

</details>

<a id="entry-presentation_python_expressions_capability_expression_transformations_numerator_api_expression_numerator"></a>
<a id="placement-placement.python.python_class.expression_numerator.814cd8437587"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
numerator() -> Expression
```


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="entry-presentation_python_expressions_capability_expression_transformations_denominator_api_session_denominator"></a>
<a id="placement-placement.python.python_module.module_denominator.71e7ade8eb22"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
denominator(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_denominator.22b00f2edc7d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.denominator</code></p>

```python signature
denominator(input_expression: ExpressionLike) -> Expression
```

</details>

<a id="entry-presentation_python_expressions_capability_expression_transformations_denominator_api_expression_denominator"></a>
<a id="placement-placement.python.python_class.expression_denominator.a0ef83627ae0"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
denominator() -> Expression
```


Returns the structural denominator from `numerator_denominator`.

## Example

Inspect and rewrite an expression through its own methods.

```python
import symi

x = symi.symbol("x")
target = (x**2 - 1) / (x + 1)

print(target.cancel())
print(target.numerator_denominator())
print(target.substitute(x, 3).execute())
print((x**2 - 1).factor())
```


## Additional API

### is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_circle2d_is_stale"></a>
<a id="placement-placement.python.python_class.circle2d_is_stale.514afb52527f"></a>
<p class="symi-entry-owner">Circle2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_expression_is_stale"></a>
<a id="placement-placement.python.python_class.expression_is_stale.6ece7ad947d1"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_matrix_is_stale"></a>
<a id="placement-placement.python.python_class.matrix_is_stale.35f51b1ba5a7"></a>
<p class="symi-entry-owner">Matrix property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_point2d_is_stale"></a>
<a id="placement-placement.python.python_class.point2d_is_stale.f4483d6e8c73"></a>
<p class="symi-entry-owner">Point2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_polygon2d_is_stale"></a>
<a id="placement-placement.python.python_class.polygon2d_is_stale.8876b4907ddb"></a>
<p class="symi-entry-owner">Polygon2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_segment2d_is_stale"></a>
<a id="placement-placement.python.python_class.segment2d_is_stale.5e1e8d6f44eb"></a>
<p class="symi-entry-owner">Segment2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_python_expressions_capability_expression_transformations_is_stale_api_geometry_operations_triangle2d_is_stale"></a>
<a id="placement-placement.python.python_class.triangle2d_is_stale.7e5281830311"></a>
<p class="symi-entry-owner">Triangle2d property</p>

```python signature
is_stale: bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### node_count

<a id="entry-presentation_python_expressions_capability_expression_transformations_node_count_api_expression_node_count"></a>
<a id="placement-placement.python.python_class.expression_node_count.f64ab1a8a1d5"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
node_count() -> int
```

Number of nodes in the expression tree — the size measure used by the simplifier; useful for comparing alternative forms.

### node_count

<a id="entry-presentation_python_expressions_capability_numeric_definite_integration_node_count_api_results_numericdefiniteintegrationresult_node_count"></a>
<a id="placement-placement.python.python_class.numericdefiniteintegrationresult_node_count.50ccc5af81cc"></a>
<p class="symi-entry-owner">NumericDefiniteIntegrationResult property</p>

```python signature
node_count: Optional[int]
```

The node count of the accepted Gauss--Legendre rule.

