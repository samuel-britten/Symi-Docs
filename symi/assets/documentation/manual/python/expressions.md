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

<a id="entry-presentation_python_api_expression_is_stale"></a>
<a id="placement-placement.python.python_class.expression_is_stale.6ece7ad947d1"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_stale: bool
```



Reports whether resetting the owning context invalidated the expression. All other operations
reject a stale receiver with an actionable error.

## Arithmetic

Python uses the native operators `+ - * / ** -`; operands may be expressions,
integers, or exact fractions. JavaScript uses the equivalent named methods and
accepts facade expressions, `bigint`, and safe integral `number` values. All
route through the auto-simplifying builders.

### add

*Not exposed by the Python bindings. Available as [`Expression.add`](/symi/wasm/expressions#add) in WASM / JavaScript, [`UniffiExpression.add`](/symi/kotlin/expressions#add) in Kotlin, [`UniffiExpression.add`](/symi/swift/expressions#add) in Swift, [`api::Expression::add`](/symi/rust/expressions#add) in Rust.*


### subtract

*Not exposed by the Python bindings. Available as [`Expression.subtract`](/symi/wasm/expressions#subtract) in WASM / JavaScript, [`UniffiExpression.subtract`](/symi/kotlin/expressions#subtract) in Kotlin, [`UniffiExpression.subtract`](/symi/swift/expressions#subtract) in Swift, [`api::Expression::subtract`](/symi/rust/expressions#subtract) in Rust.*


### multiply

*Not exposed by the Python bindings. Available as [`Expression.multiply`](/symi/wasm/expressions#multiply) in WASM / JavaScript, [`UniffiExpression.multiply`](/symi/kotlin/expressions#multiply) in Kotlin, [`UniffiExpression.multiply`](/symi/swift/expressions#multiply) in Swift, [`api::Expression::multiply`](/symi/rust/expressions#multiply) in Rust.*


### divide

*Not exposed by the Python bindings. Available as [`Expression.divide`](/symi/wasm/expressions#divide) in WASM / JavaScript, [`UniffiExpression.divide`](/symi/kotlin/expressions#divide) in Kotlin, [`UniffiExpression.divide`](/symi/swift/expressions#divide) in Swift, [`api::Expression::divide`](/symi/rust/expressions#divide) in Rust.*


### power

*Not exposed by the Python bindings. Available as [`Expression.power`](/symi/wasm/expressions#power) in WASM / JavaScript, [`UniffiExpression.power`](/symi/kotlin/expressions#power) in Kotlin, [`UniffiExpression.power`](/symi/swift/expressions#power) in Swift, [`api::Expression::power`](/symi/rust/expressions#power) in Rust.*


### negate

*Not exposed by the Python bindings. Available as [`Expression.negate`](/symi/wasm/expressions#negate) in WASM / JavaScript, [`UniffiExpression.negate`](/symi/kotlin/expressions#negate) in Kotlin, [`UniffiExpression.negate`](/symi/swift/expressions#negate) in Swift, [`api::Expression::negate`](/symi/rust/expressions#negate) in Rust.*


## Substitution and structure

### substitute

<a id="entry-presentation_python_api_session_substitute"></a>
<a id="placement-placement.python.python_class.expression_substitute.bb8b8e243847"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
substitute(variable: VariableLike, value: ExpressionLike) -> Expression
```


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="entry-presentation_python_api_session_rewrite_in_terms_of"></a>
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

<a id="placement-placement.python.python_class.expression_rewrite_in_terms_of.e75adcb7ae07"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.rewrite_in_terms_of</code></p>

```python signature
rewrite_in_terms_of(
    source: ExpressionLike,
    replacement: ExpressionLike,
) -> Expression
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

<a id="entry-presentation_python_api_expression_free_variables"></a>
<a id="placement-placement.python.python_class.expression_free_variables.3120c4c59801"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
free_variables() -> list[str]
```


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

<a id="entry-presentation_python_api_expression_expression_type"></a>
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

<a id="entry-presentation_python_api_expression_node_count"></a>
<a id="placement-placement.python.python_class.expression_node_count.f64ab1a8a1d5"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
node_count() -> int
```


Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="entry-presentation_python_api_expression_duplicate"></a>
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

<a id="entry-presentation_python_api_session_evaluate_to_float"></a>
<a id="placement-placement.python.python_class.expression_evaluate_to_float.418b3101a583"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
evaluate_to_float() -> float
```


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="entry-presentation_python_api_session_evaluate_to_complex_inexact"></a>
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

<a id="entry-presentation_python_api_session_evaluate_to_complex_inexact_at_precision"></a>
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

<a id="entry-presentation_python_api_expression_equals"></a>
<a id="placement-placement.python.python_class.expression_equals.533a8641b35b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
equals(other: ExpressionLike) -> bool
```


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

<a id="entry-presentation_python_api_expression_is_matrix"></a>
<a id="placement-placement.python.python_class.expression_is_matrix.e2b72bb17444"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_matrix: bool
```


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

<a id="entry-presentation_python_api_expression_is_equality"></a>
<a id="placement-placement.python.python_class.expression_is_equality.e989bcf4fd97"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_equality() -> bool
```


True for `equal(a, b)` relation nodes.

### is_integral

<a id="entry-presentation_python_api_expression_is_integral"></a>
<a id="placement-placement.python.python_class.expression_is_integral.d403fe18e20d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_integral() -> bool
```


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

<a id="entry-presentation_python_api_expression_is_union"></a>
<a id="placement-placement.python.python_class.expression_is_union.d192a68a8238"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_union() -> bool
```


### is_image_set

<a id="entry-presentation_python_api_expression_is_image_set"></a>
<a id="placement-placement.python.python_class.expression_is_image_set.628821d951a2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_image_set() -> bool
```


### is_finite_set

<a id="entry-presentation_python_api_expression_is_finite_set"></a>
<a id="placement-placement.python.python_class.expression_is_finite_set.f011174eecec"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_finite_set() -> bool
```


### is_interval

<a id="entry-presentation_python_api_expression_is_interval"></a>
<a id="placement-placement.python.python_class.expression_is_interval.16264a9ea34f"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_interval() -> bool
```


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

<a id="entry-presentation_python_api_expression_is_real"></a>
<a id="placement-placement.python.python_class.expression_is_real.223807c3891d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_real() -> Optional[bool]
```


### is_positive

<a id="entry-presentation_python_api_expression_is_positive"></a>
<a id="placement-placement.python.python_class.expression_is_positive.fd253073651b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_positive() -> Optional[bool]
```


### is_negative

<a id="entry-presentation_python_api_expression_is_negative"></a>
<a id="placement-placement.python.python_class.expression_is_negative.66463cf8c5bf"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_negative() -> Optional[bool]
```


### is_integer

<a id="entry-presentation_python_api_expression_is_integer"></a>
<a id="placement-placement.python.python_class.expression_is_integer.265875f28f3d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_integer() -> Optional[bool]
```


### is_rational

<a id="entry-presentation_python_api_expression_is_rational"></a>
<a id="placement-placement.python.python_class.expression_is_rational.ebebd5f8b150"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_rational() -> Optional[bool]
```


### is_nonzero

<a id="entry-presentation_python_api_expression_is_nonzero"></a>
<a id="placement-placement.python.python_class.expression_is_nonzero.5023122e6b9d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonzero() -> Optional[bool]
```


### is_nonnegative

<a id="entry-presentation_python_api_session_is_nonnegative"></a>
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

<a id="entry-presentation_python_api_expression_is_finite"></a>
<a id="placement-placement.python.python_class.expression_is_finite.afd2d2c8868f"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_finite() -> Optional[bool]
```


### is_defined

<a id="entry-presentation_python_api_expression_is_defined"></a>
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

<a id="entry-presentation_python_api_expression_interval_lower"></a>
<a id="placement-placement.python.python_class.expression_interval_lower.2a8531122802"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
interval_lower() -> Expression
```


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

<a id="entry-presentation_python_api_expression_interval_upper"></a>
<a id="placement-placement.python.python_class.expression_interval_upper.f9ce0cc9c300"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
interval_upper() -> Expression
```


### integral_integrand

<a id="entry-presentation_python_api_expression_integral_integrand"></a>
<a id="placement-placement.python.python_class.expression_integral_integrand.6f4db735f08b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_integrand() -> Expression
```


### integral_variable

<a id="entry-presentation_python_api_expression_integral_variable"></a>
<a id="placement-placement.python.python_class.expression_integral_variable.4900f1a20525"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_variable() -> str
```


### integral_lower_bound

<a id="entry-presentation_python_api_expression_integral_lower_bound"></a>
<a id="placement-placement.python.python_class.expression_integral_lower_bound.e12ad46f3453"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_lower_bound() -> Optional[Expression]
```


`None` for indefinite integrals.

### integral_upper_bound

<a id="entry-presentation_python_api_expression_integral_upper_bound"></a>
<a id="placement-placement.python.python_class.expression_integral_upper_bound.f2d897362ebe"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integral_upper_bound() -> Optional[Expression]
```


### union_components

<a id="entry-presentation_python_api_expression_union_components"></a>
<a id="placement-placement.python.python_class.expression_union_components.d7ba76739d4b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
union_components() -> list[Any]
```


### image_set_lambda_expression

<a id="entry-presentation_python_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.python.python_class.expression_image_set_lambda_expression.210d2d46c870"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_lambda_expression() -> Expression
```


### image_set_variable

<a id="entry-presentation_python_api_expression_image_set_variable"></a>
<a id="placement-placement.python.python_class.expression_image_set_variable.a2bc136da797"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_variable() -> str
```


### image_set_domain

<a id="entry-presentation_python_api_expression_image_set_domain"></a>
<a id="placement-placement.python.python_class.expression_image_set_domain.f5bf94922f92"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
image_set_domain() -> Expression
```


### to_list

<a id="entry-presentation_python_api_expression_to_list"></a>
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

Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

<a id="entry-presentation_python_api_expression_symbol_name"></a>
<a id="placement-placement.python.python_class.expression_symbol_name.984257e5d5ea"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
symbol_name() -> str
```


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="entry-presentation_python_api_session_numerator_denominator"></a>
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

<a id="placement-placement.python.python_class.expression_numerator_denominator.46a81fe90444"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.numerator_denominator</code></p>

```python signature
numerator_denominator() -> tuple[Expression, Expression]
```

</details>


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="entry-presentation_python_api_session_numerator"></a>
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

<a id="placement-placement.python.python_class.expression_numerator.814cd8437587"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.numerator</code></p>

```python signature
numerator() -> Expression
```

</details>


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="entry-presentation_python_api_session_denominator"></a>
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

<a id="placement-placement.python.python_class.expression_denominator.a0ef83627ae0"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.denominator</code></p>

```python signature
denominator() -> Expression
```

</details>


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


### is_nonpositive

<a id="entry-presentation_python_api_session_is_nonpositive"></a>
<a id="placement-placement.python.python_class.expression_is_nonpositive.69a4edec7757"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonpositive() -> Optional[bool]
```


Whether the expression is known to be nonpositive. Three-valued, like the other
sign predicates on this page: `None` means the sign was not decided from the
assumptions in force, not that the expression is positive. Compare
[`is_nonnegative`](#is_nonnegative).

## Additional API

### Expression

<a id="entry-presentation_python_api_expression"></a>
<a id="placement-placement.python.python_class.expression.f1defafa2138"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class Expression
```

A symbolic expression owned by the context that built it.

### __add__

<a id="entry-presentation_python_host_python_expression_add"></a>
<a id="placement-placement.python.python_class.expression_add.58a4bd4dd71b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__add__(other: Any) -> Expression
```

Sum `self + other`, returning a new expression.

### __bool__

<a id="entry-presentation_python_host_python_expression_bool"></a>
<a id="placement-placement.python.python_class.expression_bool.69418ace2aed"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__bool__() -> bool
```

Always raises: symbolic truth is three-valued, so use `evaluate_truth` instead.

### __eq__

<a id="entry-presentation_python_host_python_expression_eq"></a>
<a id="placement-placement.python.python_class.expression_eq.5a2d56342b69"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__eq__(other: Any) -> bool
```

Structural equality of two expressions from the same live context; use `equal` to build a relation.

### __getattribute__

<a id="entry-presentation_python_host_python_expression_getattribute"></a>
<a id="placement-placement.python.python_class.expression_getattribute.76962b06f74d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

### __hash__

<a id="entry-presentation_python_host_python_expression_hash"></a>
<a id="placement-placement.python.python_class.expression_hash.fcf6ce555e16"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__hash__() -> int
```

Hash consistent with structural equality, so expressions can key a dict or set.

### __mul__

<a id="entry-presentation_python_host_python_expression_mul"></a>
<a id="placement-placement.python.python_class.expression_mul.605ba0478e43"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__mul__(other: Any) -> Expression
```

Product `self * other`, returning a new expression.

### __ne__

<a id="entry-presentation_python_host_python_expression_ne"></a>
<a id="placement-placement.python.python_class.expression_ne.8cbf473dc2ff"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__ne__(other: Any) -> bool
```

Structural inequality, the negation of `__eq__`.

### __neg__

<a id="entry-presentation_python_host_python_expression_neg"></a>
<a id="placement-placement.python.python_class.expression_neg.ef8096e95741"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__neg__() -> Expression
```

Negation `-self`, returning a new expression.

### __pow__

<a id="entry-presentation_python_host_python_expression_pow"></a>
<a id="placement-placement.python.python_class.expression_pow.ac2cb53ba3dc"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__pow__(exponent: Any, modulo: Optional[Any] = ...) -> Expression
```

Power `self ** exponent`; the three-argument form is rejected.

### __radd__

<a id="entry-presentation_python_host_python_expression_radd"></a>
<a id="placement-placement.python.python_class.expression_radd.b3f9590b78f9"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__radd__(other: Any) -> Expression
```

Sum `other + self`, returning a new expression.

### __repr__

<a id="entry-presentation_python_host_python_expression_repr"></a>
<a id="placement-placement.python.python_class.expression_repr.51e3a215dd82"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

### __rmul__

<a id="entry-presentation_python_host_python_expression_rmul"></a>
<a id="placement-placement.python.python_class.expression_rmul.fd487c5f63ce"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rmul__(other: Any) -> Expression
```

Product `other * self`, returning a new expression.

### __rpow__

<a id="entry-presentation_python_host_python_expression_rpow"></a>
<a id="placement-placement.python.python_class.expression_rpow.ea98d5ba5b89"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rpow__(base: Any, modulo: Optional[Any] = ...) -> Expression
```

Power `base ** self`; the three-argument form is rejected.

### __rsub__

<a id="entry-presentation_python_host_python_expression_rsub"></a>
<a id="placement-placement.python.python_class.expression_rsub.2815deb80733"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rsub__(other: Any) -> Expression
```

Difference `other - self`, returning a new expression.

### __rtruediv__

<a id="entry-presentation_python_host_python_expression_rtruediv"></a>
<a id="placement-placement.python.python_class.expression_rtruediv.f1cdc35ec1fa"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rtruediv__(other: Any) -> Expression
```

Quotient `other / self`, returning a new expression.

### __str__

<a id="entry-presentation_python_host_python_expression_str"></a>
<a id="placement-placement.python.python_class.expression_str.329819f4a97c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__str__() -> str
```

The mathematical text of the expression.

### __sub__

<a id="entry-presentation_python_host_python_expression_sub"></a>
<a id="placement-placement.python.python_class.expression_sub.f0d35560c2a2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__sub__(other: Any) -> Expression
```

Difference `self - other`, returning a new expression.

### __truediv__

<a id="entry-presentation_python_host_python_expression_truediv"></a>
<a id="placement-placement.python.python_class.expression_truediv.14a00eccae14"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__truediv__(other: Any) -> Expression
```

Quotient `self / other`, returning a new expression.

### is_algebraic

<a id="entry-presentation_python_api_expression_is_algebraic"></a>
<a id="placement-placement.python.python_class.expression_is_algebraic.68ea1091eca2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_algebraic() -> Optional[bool]
```

Whether the expression is known to be algebraic.

### is_complex

<a id="entry-presentation_python_api_expression_is_complex"></a>
<a id="placement-placement.python.python_class.expression_is_complex.c64638be3cc5"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_complex() -> Optional[bool]
```

Whether the expression is known to be finite complex.

### is_composite

<a id="entry-presentation_python_api_expression_is_composite"></a>
<a id="placement-placement.python.python_class.expression_is_composite.5048052ad74b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_composite() -> Optional[bool]
```

Whether the expression is known to be composite.

### is_even

<a id="entry-presentation_python_api_expression_is_even"></a>
<a id="placement-placement.python.python_class.expression_is_even.b24e23216d5b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_even() -> Optional[bool]
```

Whether the expression is known to be even.

### is_extended_real

<a id="entry-presentation_python_api_expression_is_extended_real"></a>
<a id="placement-placement.python.python_class.expression_is_extended_real.80f714a04d07"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_extended_real() -> Optional[bool]
```

Whether the expression is known to be extended-real.

### is_infinite

<a id="entry-presentation_python_api_expression_is_infinite"></a>
<a id="placement-placement.python.python_class.expression_is_infinite.db44c70207f2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_infinite() -> Optional[bool]
```

Whether the expression is known to be infinite.

### is_irrational

<a id="entry-presentation_python_api_expression_is_irrational"></a>
<a id="placement-placement.python.python_class.expression_is_irrational.97edaad6ba30"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_irrational() -> Optional[bool]
```

Whether the expression is known to be irrational.

### is_natural

<a id="entry-presentation_python_api_expression_is_natural"></a>
<a id="placement-placement.python.python_class.expression_is_natural.8c704553368c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_natural() -> Optional[bool]
```

Whether the expression is known to be natural.

### is_odd

<a id="entry-presentation_python_api_expression_is_odd"></a>
<a id="placement-placement.python.python_class.expression_is_odd.279898eb431e"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_odd() -> Optional[bool]
```

Whether the expression is known to be odd.

### is_positive_integer

<a id="entry-presentation_python_api_expression_is_positive_integer"></a>
<a id="placement-placement.python.python_class.expression_is_positive_integer.d43ced293292"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_positive_integer() -> Optional[bool]
```

Whether the expression is known to be a positive integer.

### is_transcendental

<a id="entry-presentation_python_api_expression_is_transcendental"></a>
<a id="placement-placement.python.python_class.expression_is_transcendental.51397fc05a1d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_transcendental() -> Optional[bool]
```

Whether the expression is known to be transcendental.

### is_zero

<a id="entry-presentation_python_api_expression_is_zero"></a>
<a id="placement-placement.python.python_class.expression_is_zero.e8cc82d31054"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_zero() -> Optional[bool]
```

Whether the expression is known to be zero.

