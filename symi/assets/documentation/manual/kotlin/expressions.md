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

<a id="entry-presentation_kotlin_api_expression_is_stale"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isstale.6cebde6e82d9"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isStale(): kotlin.Boolean
```



Reports whether resetting the owning context invalidated the expression. All other operations
reject a stale receiver with an actionable error.

## Arithmetic

Python uses the native operators `+ - * / ** -`; operands may be expressions,
integers, or exact fractions. JavaScript uses the equivalent named methods and
accepts facade expressions, `bigint`, and safe integral `number` values. All
route through the auto-simplifying builders.

### add

<a id="entry-presentation_kotlin_api_session_add"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_add.f11dd11a2684"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun add(other: UniffiExpression): UniffiExpression
```


### subtract

<a id="entry-presentation_kotlin_api_session_subtract"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_subtract.628c23aea491"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun subtract(other: UniffiExpression): UniffiExpression
```


### multiply

<a id="entry-presentation_kotlin_api_session_multiply"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_multiply.33f708624746"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun multiply(other: UniffiExpression): UniffiExpression
```


### divide

<a id="entry-presentation_kotlin_api_session_divide"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_divide.9d394b27da08"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun divide(other: UniffiExpression): UniffiExpression
```


### power

<a id="entry-presentation_kotlin_api_session_power"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_power.8d80024f736b"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun power(exponent: UniffiExpression): UniffiExpression
```


### negate

<a id="entry-presentation_kotlin_api_expression_negate"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_negate.7d6ed61d0569"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun negate(): UniffiExpression
```


## Substitution and structure

### substitute

<a id="entry-presentation_kotlin_api_session_substitute"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_substitute.78b871fe3f18"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun substitute(
    variable: UniffiExpression,
    value: UniffiExpression,
): UniffiExpression
```


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="entry-presentation_kotlin_api_session_rewrite_in_terms_of"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_rewriteintermsof.2a99689c75a1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun rewriteInTermsOf(
    target: UniffiExpression,
    source: UniffiExpression,
    replacement: UniffiExpression,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_rewriteintermsof.96e5813695ea"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.rewriteInTermsOf</code></p>

```kotlin signature
fun rewriteInTermsOf(
    source: UniffiExpression,
    replacement: UniffiExpression,
): UniffiExpression
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

<a id="entry-presentation_kotlin_api_expression_free_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_freevariables.2133c09a26c3"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun freeVariables(): List<kotlin.String>
```


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

<a id="entry-presentation_kotlin_api_expression_expression_type"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_expressiontype.d9b93866b008"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun expressionType(): kotlin.String
```


Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`,
`sum`, `product`, `power`, `factorial`, `function_call`, `derivative`,
`integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`,
`fourier_transform`, `inverse_fourier_transform`, `piecewise`,
`ordinary_differential_equation`, `recurrence_equation`, `interval`,
`finite_set`, `set_union`, `set_intersection`, `set_complement`,
`image_set`, `condition_set`.

### node_count

<a id="entry-presentation_kotlin_api_expression_node_count"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_nodecount.2e31edade300"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun nodeCount(): kotlin.ULong
```


Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="entry-presentation_kotlin_api_expression_duplicate"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_duplicate.6c9fe641fbb4"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun duplicate(): UniffiExpression
```


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

<a id="entry-presentation_kotlin_api_session_evaluate_to_float"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatetofloat.fac90f5afa84"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun evaluateToFloat(): kotlin.Double
```


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="entry-presentation_kotlin_api_session_evaluate_to_complex_inexact"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatetocomplexinexact.3b9a5a543b9e"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun evaluateToComplexInexact(): UniffiFloatingPointFloatingPointTuple
```


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

<a id="entry-presentation_kotlin_api_session_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatetocomplexinexactatprecision.d680d8c06754"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun evaluateToComplexInexactAtPrecision(precisionBits: kotlin.ULong): UniffiFloatingPointFloatingPointTuple
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

<a id="entry-presentation_kotlin_api_expression_equals"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_equals.293ebff8342f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun equals(other: UniffiExpression): kotlin.Boolean
```


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

<a id="entry-presentation_kotlin_api_expression_is_matrix"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_ismatrix.f35d119691fc"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isMatrix(): kotlin.Boolean
```


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

<a id="entry-presentation_kotlin_api_expression_is_equality"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isequality.6469d768e6d8"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isEquality(): kotlin.Boolean
```


True for `equal(a, b)` relation nodes.

### is_integral

<a id="entry-presentation_kotlin_api_expression_is_integral"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isintegral.f29173423b1f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isIntegral(): kotlin.Boolean
```


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

<a id="entry-presentation_kotlin_api_expression_is_union"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isunion.3513f7d92619"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isUnion(): kotlin.Boolean
```


### is_image_set

<a id="entry-presentation_kotlin_api_expression_is_image_set"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isimageset.74191a79b36d"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isImageSet(): kotlin.Boolean
```


### is_finite_set

<a id="entry-presentation_kotlin_api_expression_is_finite_set"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isfiniteset.9e5c46e09283"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isFiniteSet(): kotlin.Boolean
```


### is_interval

<a id="entry-presentation_kotlin_api_expression_is_interval"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isinterval.0948551178ee"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isInterval(): kotlin.Boolean
```


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

<a id="entry-presentation_kotlin_api_expression_is_real"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isreal.68afbcf81823"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isReal(): UniffiTruthValue
```


### is_positive

<a id="entry-presentation_kotlin_api_expression_is_positive"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_ispositive.1eca47da4578"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isPositive(): UniffiTruthValue
```


### is_negative

<a id="entry-presentation_kotlin_api_expression_is_negative"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnegative.3d423b1211de"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isNegative(): UniffiTruthValue
```


### is_integer

<a id="entry-presentation_kotlin_api_expression_is_integer"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isinteger.b4862a3cbdcb"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isInteger(): UniffiTruthValue
```


### is_rational

<a id="entry-presentation_kotlin_api_expression_is_rational"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isrational.b3629ac40e82"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isRational(): UniffiTruthValue
```


### is_nonzero

<a id="entry-presentation_kotlin_api_expression_is_nonzero"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnonzero.1648e8638497"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isNonzero(): UniffiTruthValue
```


### is_nonnegative

<a id="entry-presentation_kotlin_api_session_is_nonnegative"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnonnegative.321a24b63f8b"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isNonnegative(): UniffiTruthValue
```


Answers `True` only on proof that the expression is greater than or equal to
zero — an even power of a provably real base, a sum or product of such, or
anything already provably positive. It never answers `False`: a failure to
prove non-negativity is not a proof of negativity, so the undecided verdict is
`None`.

### is_finite

<a id="entry-presentation_kotlin_api_expression_is_finite"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isfinite.ff5da129970d"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isFinite(): UniffiTruthValue
```


### is_defined

<a id="entry-presentation_kotlin_api_expression_is_defined"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isdefined.e976ae6f5377"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isDefined(): UniffiTruthValue
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

<a id="entry-presentation_kotlin_api_expression_interval_lower"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_intervallower.6bfca73cdded"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun intervalLower(): UniffiExpression
```


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

<a id="entry-presentation_kotlin_api_expression_interval_upper"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_intervalupper.4fb1e087bb45"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun intervalUpper(): UniffiExpression
```


### integral_integrand

<a id="entry-presentation_kotlin_api_expression_integral_integrand"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integralintegrand.b8db9eebf05f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun integralIntegrand(): UniffiExpression
```


### integral_variable

<a id="entry-presentation_kotlin_api_expression_integral_variable"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integralvariable.99bf7e170954"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun integralVariable(): kotlin.String
```


### integral_lower_bound

<a id="entry-presentation_kotlin_api_expression_integral_lower_bound"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integrallowerbound.ab74805544d1"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun integralLowerBound(): UniffiExpression?
```


`None` for indefinite integrals.

### integral_upper_bound

<a id="entry-presentation_kotlin_api_expression_integral_upper_bound"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integralupperbound.62c2862a999f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun integralUpperBound(): UniffiExpression?
```


### union_components

<a id="entry-presentation_kotlin_api_expression_union_components"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_unioncomponents.8a355bc7b772"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun unionComponents(): List<UniffiExpression>
```


### image_set_lambda_expression

<a id="entry-presentation_kotlin_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_imagesetlambdaexpression.5a80a7d713dc"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun imageSetLambdaExpression(): UniffiExpression
```


### image_set_variable

<a id="entry-presentation_kotlin_api_expression_image_set_variable"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_imagesetvariable.88e2a6dcda1a"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun imageSetVariable(): kotlin.String
```


### image_set_domain

<a id="entry-presentation_kotlin_api_expression_image_set_domain"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_imagesetdomain.e70a80c50d20"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun imageSetDomain(): UniffiExpression
```


### to_list

<a id="entry-presentation_kotlin_api_expression_to_list"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolist.0fd346ec8b5d"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun toList(): List<UniffiExpression>
```


Elements of a finite set; raises on other shapes. Python finite sets also
support `len()` and iteration.

### length

Element count of a finite set (Python: `len(expression)`).

## String conversion

### to_string

Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

<a id="entry-presentation_kotlin_api_expression_symbol_name"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_symbolname.6b624ae2c351"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun symbolName(): kotlin.String
```


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="entry-presentation_kotlin_api_session_numerator_denominator"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_numeratordenominator.f01338fe2e4a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun numeratorDenominator(target: UniffiExpression): UniffiExpressionExpressionTuple
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_numeratordenominator.d1a3f74a0ed9"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.numeratorDenominator</code></p>

```kotlin signature
fun numeratorDenominator(): UniffiExpressionExpressionTuple
```

</details>


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="entry-presentation_kotlin_api_session_numerator"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_numerator.4277a86a172c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun numerator(target: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_numerator.ff8d1f77b246"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.numerator</code></p>

```kotlin signature
fun numerator(): UniffiExpression
```

</details>


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="entry-presentation_kotlin_api_session_denominator"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_denominator.aa24023e728a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun denominator(target: UniffiExpression): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_denominator.a13e3208adc1"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.denominator</code></p>

```kotlin signature
fun denominator(): UniffiExpression
```

</details>


Returns the structural denominator from `numerator_denominator`.

## Example


### is_nonpositive

<a id="entry-presentation_kotlin_api_session_is_nonpositive"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnonpositive.d4bf0d2584d9"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isNonpositive(): UniffiTruthValue
```


Whether the expression is known to be nonpositive. Three-valued, like the other
sign predicates on this page: `None` means the sign was not decided from the
assumptions in force, not that the expression is positive. Compare
[`is_nonnegative`](#is_nonnegative).

## Additional API

### is_algebraic

<a id="entry-presentation_kotlin_api_expression_is_algebraic"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isalgebraic.0d1e8911a82a"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isAlgebraic(): UniffiTruthValue
```

Provides the `is_algebraic` operation on this mobile object.

### is_complex

<a id="entry-presentation_kotlin_api_expression_is_complex"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iscomplex.5be00393deb6"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isComplex(): UniffiTruthValue
```

Provides the `is_complex` operation on this mobile object.

### is_composite

<a id="entry-presentation_kotlin_api_expression_is_composite"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iscomposite.d2a612ec2fdb"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isComposite(): UniffiTruthValue
```

Provides the `is_composite` operation on this mobile object.

### is_even

<a id="entry-presentation_kotlin_api_expression_is_even"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iseven.305212864d97"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isEven(): UniffiTruthValue
```

Provides the `is_even` operation on this mobile object.

### is_extended_real

<a id="entry-presentation_kotlin_api_expression_is_extended_real"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isextendedreal.c940074fb614"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isExtendedReal(): UniffiTruthValue
```

Provides the `is_extended_real` operation on this mobile object.

### is_infinite

<a id="entry-presentation_kotlin_api_expression_is_infinite"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isinfinite.84eeca60a66f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isInfinite(): UniffiTruthValue
```

Provides the `is_infinite` operation on this mobile object.

### is_irrational

<a id="entry-presentation_kotlin_api_expression_is_irrational"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isirrational.b2a65654a1e2"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isIrrational(): UniffiTruthValue
```

Provides the `is_irrational` operation on this mobile object.

### is_natural

<a id="entry-presentation_kotlin_api_expression_is_natural"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnatural.8bb527677cb6"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isNatural(): UniffiTruthValue
```

Provides the `is_natural` operation on this mobile object.

### is_odd

<a id="entry-presentation_kotlin_api_expression_is_odd"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isodd.ebefaade489f"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isOdd(): UniffiTruthValue
```

Provides the `is_odd` operation on this mobile object.

### is_positive_integer

<a id="entry-presentation_kotlin_api_expression_is_positive_integer"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_ispositiveinteger.6dc5ac646d1b"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isPositiveInteger(): UniffiTruthValue
```

Provides the `is_positive_integer` operation on this mobile object.

### is_transcendental

<a id="entry-presentation_kotlin_api_expression_is_transcendental"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_istranscendental.97faaec1993d"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isTranscendental(): UniffiTruthValue
```

Provides the `is_transcendental` operation on this mobile object.

### is_zero

<a id="entry-presentation_kotlin_api_expression_is_zero"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_iszero.4bb774ded5e1"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun isZero(): UniffiTruthValue
```

Provides the `is_zero` operation on this mobile object.

