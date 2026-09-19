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

<a id="entry-presentation_swift_expressions_capability_expression_transformations_divide_api_expression_divide"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_divide.348880b74d1e"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func divide(other: UniffiExpression) -> UniffiExpression
```


### power

<a id="entry-presentation_swift_expressions_capability_expression_transformations_power_api_expression_power"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_power.a5bba90b9b09"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func power(exponent: UniffiExpression) -> UniffiExpression
```


### negate

<a id="entry-presentation_swift_expressions_capability_expression_transformations_negate_api_expression_negate"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_negate.0f69aa0ddb6c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func negate() -> UniffiExpression
```


## Substitution and structure

### substitute

<a id="entry-presentation_swift_expressions_capability_expression_transformations_substitute_api_expression_substitute"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_substitute.512aa017763a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func substitute(
    variable: UniffiExpression,
    value: UniffiExpression,
) -> UniffiExpression
```


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="entry-presentation_swift_expressions_capability_expression_transformations_rewrite_in_terms_of_api_algebra_session_rewrite_in_terms_of"></a>
<a id="placement-placement.swift.swift_object.uniffisession_rewriteintermsof.9748be3ce393"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func rewriteInTermsOf(
    target: UniffiExpression,
    source: UniffiExpression,
    replacement: UniffiExpression,
) -> UniffiExpression
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_rewrite_in_terms_of_api_expression_operations_expression_rewrite_in_terms_of"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_rewriteintermsof.142547bbdf71"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func rewriteInTermsOf(
    source: UniffiExpression,
    replacement: UniffiExpression,
) -> UniffiExpression
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

<a id="entry-presentation_swift_expressions_capability_expression_transformations_free_variables_api_expression_free_variables"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_freevariables.c72f19c47c45"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func freeVariables() -> [String]
```


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

<a id="entry-presentation_swift_expressions_capability_expression_transformations_expression_type_api_expression_operations_expression_expression_type"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_expressiontype.6d4e11222f3c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func expressionType() -> String
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

<a id="entry-presentation_swift_expressions_capability_expression_transformations_duplicate_api_expression_duplicate"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_duplicate.5da15dafb7a9"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func duplicate() -> UniffiExpression
```


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

<a id="entry-presentation_swift_expressions_capability_expression_transformations_evaluate_to_float_api_expression_operations_expression_evaluate_to_float"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetofloat.9518d5ce1912"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateToFloat() -> Double
```


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="entry-presentation_swift_expressions_capability_expression_transformations_evaluate_to_complex_inexact_api_expression_operations_expression_evaluate_to_complex_inexact"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetocomplexinexact.197078c91a42"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateToComplexInexact() -> UniffiFloatingPointFloatingPointTuple
```


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

<a id="entry-presentation_swift_expressions_capability_expression_transformations_evaluate_to_complex_inexact_at_precision_api_expression_operations_expression_evaluate_to_complex_inexact_at_precision"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetocomplexinexactatprecision.bfb52393fcc1"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func evaluateToComplexInexactAtPrecision(precisionBits: UInt64) -> UniffiFloatingPointFloatingPointTuple
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

<a id="entry-presentation_swift_expressions_capability_expression_transformations_equals_api_expression_operations_expression_equals"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_equals.b8c03f8e5282"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func equals(other: UniffiExpression) -> Bool
```


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_matrix_api_expression_is_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_ismatrix.cd8eb878fdd4"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isMatrix() -> Bool
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_matrix_api_matrix_operations_matrix_is_matrix"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ismatrix.d12275ab42be"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isMatrix() -> Bool
```


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_equality_api_expression_is_equality"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isequality.e075530f04db"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isEquality() -> Bool
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_equality_api_matrix_operations_matrix_is_equality"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isequality.85c001b53f7d"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isEquality() -> Bool
```


True for `equal(a, b)` relation nodes.

### is_integral

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_integral_api_expression_is_integral"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isintegral.671569e9a192"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isIntegral() -> Bool
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_integral_api_matrix_operations_matrix_is_integral"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isintegral.67259d6cc3c3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isIntegral() -> Bool
```


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_union_api_expression_is_union"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isunion.89223c30349c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isUnion() -> Bool
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_union_api_matrix_operations_matrix_is_union"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isunion.4e9a812714cc"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isUnion() -> Bool
```


### is_image_set

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_image_set_api_expression_is_image_set"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isimageset.fc4113f8479d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isImageSet() -> Bool
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_image_set_api_matrix_operations_matrix_is_image_set"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isimageset.4b16afb2638e"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isImageSet() -> Bool
```


### is_finite_set

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_finite_set_api_expression_is_finite_set"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isfiniteset.ca548443b525"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isFiniteSet() -> Bool
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_finite_set_api_matrix_operations_matrix_is_finite_set"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isfiniteset.0807f84c62b6"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isFiniteSet() -> Bool
```


### is_interval

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_interval_api_expression_is_interval"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isinterval.bca93c4bc4fc"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isInterval() -> Bool
```


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_real_api_expression_is_real"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isreal.f42ff634684d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isReal() -> UniffiTruthValue
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_real_api_matrix_operations_matrix_is_real"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isreal.228c4dfae781"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isReal() -> Bool?
```


### is_positive

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_positive_api_expression_is_positive"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_ispositive.18e0b918f081"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isPositive() -> UniffiTruthValue
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_positive_api_matrix_operations_matrix_is_positive"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_ispositive.c44c5cbbbbbf"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isPositive() -> Bool?
```


### is_negative

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_negative_api_expression_is_negative"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnegative.de1946398389"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNegative() -> UniffiTruthValue
```


### is_integer

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_integer_api_expression_is_integer"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isinteger.c43f8f6a0595"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isInteger() -> UniffiTruthValue
```


### is_rational

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_rational_api_expression_is_rational"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isrational.9fda842a2a4f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isRational() -> UniffiTruthValue
```


### is_nonzero

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_nonzero_api_expression_is_nonzero"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnonzero.55e004c06139"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNonzero() -> UniffiTruthValue
```


### is_nonnegative

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_nonnegative_api_expression_is_nonnegative"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isnonnegative.a617e48ca745"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isNonnegative() -> UniffiTruthValue
```


Answers `True` only on proof that the expression is greater than or equal to
zero — an even power of a provably real base, a sum or product of such, or
anything already provably positive. It never answers `False`: a failure to
prove non-negativity is not a proof of negativity, so the undecided verdict is
`None`.

### is_finite

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_finite_api_expression_is_finite"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isfinite.9d786e1474e3"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isFinite() -> UniffiTruthValue
```


### is_defined

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_defined_api_expression_is_defined"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isdefined.4ea4bf253e9c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isDefined() -> UniffiTruthValue
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

<a id="entry-presentation_swift_expressions_capability_expression_transformations_interval_lower_api_expression_interval_lower"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_intervallower.bf74a308696a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func intervalLower() -> UniffiExpression
```


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

<a id="entry-presentation_swift_expressions_capability_expression_transformations_interval_upper_api_expression_interval_upper"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_intervalupper.b86ea95a628c"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func intervalUpper() -> UniffiExpression
```


### integral_integrand

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_integrand_api_expression_integral_integrand"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integralintegrand.e3eb51b1f253"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralIntegrand() -> UniffiExpression
```


### integral_variable

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_variable_api_expression_integral_variable"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integralvariable.92a69411221a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralVariable() -> String
```


### integral_lower_bound

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_lower_bound_api_expression_integral_lower_bound"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integrallowerbound.4a02d4563d08"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralLowerBound() -> UniffiExpression?
```


`None` for indefinite integrals.

### integral_upper_bound

<a id="entry-presentation_swift_expressions_capability_expression_transformations_integral_upper_bound_api_expression_integral_upper_bound"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_integralupperbound.93f83b199f94"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func integralUpperBound() -> UniffiExpression?
```


### union_components

<a id="entry-presentation_swift_expressions_capability_expression_transformations_union_components_api_expression_union_components"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_unioncomponents.13d127c4cffa"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func unionComponents() -> [UniffiExpression]
```


### image_set_lambda_expression

<a id="entry-presentation_swift_expressions_capability_expression_transformations_image_set_lambda_expression_api_expression_image_set_lambda_expression"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetlambdaexpression.e27bb6c7245f"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func imageSetLambdaExpression() -> UniffiExpression
```


### image_set_variable

<a id="entry-presentation_swift_expressions_capability_expression_transformations_image_set_variable_api_expression_image_set_variable"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetvariable.a66e6728ce93"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func imageSetVariable() -> String
```


### image_set_domain

<a id="entry-presentation_swift_expressions_capability_expression_transformations_image_set_domain_api_expression_image_set_domain"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetdomain.8374f5c6ce04"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func imageSetDomain() -> UniffiExpression
```


### to_list

<a id="entry-presentation_swift_expressions_capability_expression_transformations_to_list_api_expression_to_list"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_tolist.fb9651785a68"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func toList() -> [UniffiExpression]
```


Elements of a finite set; raises on other shapes. Python finite sets also
support `len()` and iteration.

### length

Element count of a finite set (Python: `len(expression)`).

## String conversion

### to_string

*Not exposed by the Swift bindings. Available as [`api::partial_differential_equations::PartialDifferentialEquationProblem::to_string`](/symi/rust/expressions#to_string) in Rust.*


Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

<a id="entry-presentation_swift_expressions_capability_expression_transformations_symbol_name_api_expression_symbol_name"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_symbolname.93adace4b937"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func symbolName() -> String
```


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_denominator_api_session_numerator_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_numeratordenominator.be999967dfa0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func numeratorDenominator(target: UniffiExpression) -> UniffiExpressionExpressionTuple
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_denominator_api_expression_numerator_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_numeratordenominator.196fddc48c58"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func numeratorDenominator() -> UniffiExpressionExpressionTuple
```


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_api_session_numerator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_numerator.9f5a074b3246"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func numerator(target: UniffiExpression) -> UniffiExpression
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_numerator_api_expression_numerator"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_numerator.e77eb927a498"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func numerator() -> UniffiExpression
```


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="entry-presentation_swift_expressions_capability_expression_transformations_denominator_api_session_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffisession_denominator.f8b517d89880"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func denominator(target: UniffiExpression) -> UniffiExpression
```

<a id="entry-presentation_swift_expressions_capability_expression_transformations_denominator_api_expression_denominator"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_denominator.4254a3f8a578"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func denominator() -> UniffiExpression
```


Returns the structural denominator from `numerator_denominator`.

## Example


## Additional API

### is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_expression_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_isstale.c7de0edcfa53"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_circle2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.unifficircle2d_isstale.197cf4ee1773"></a>
<p class="symi-entry-owner">UniffiCircle2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_matrix_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffimatrix_isstale.53cba65746d3"></a>
<p class="symi-entry-owner">UniffiMatrix method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_point2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffipoint2d_isstale.6204e470b4d1"></a>
<p class="symi-entry-owner">UniffiPoint2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_polygon2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffipolygon2d_isstale.3e170f2b6a4b"></a>
<p class="symi-entry-owner">UniffiPolygon2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_segment2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffisegment2d_isstale.aa90766378bc"></a>
<p class="symi-entry-owner">UniffiSegment2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### is_stale

<a id="entry-presentation_swift_expressions_capability_expression_transformations_is_stale_api_geometry_operations_triangle2d_is_stale"></a>
<a id="placement-placement.swift.swift_object.uniffitriangle2d_isstale.c0b0c4615df5"></a>
<p class="symi-entry-owner">UniffiTriangle2d method</p>

```swift signature
func isStale() -> Bool
```

Reports whether resetting the owning context invalidated the expression. All other operations reject a stale receiver with an actionable error.

### node_count

<a id="entry-presentation_swift_expressions_capability_expression_transformations_node_count_api_expression_node_count"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_nodecount.fad53b5cf4a4"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func nodeCount() -> UInt64
```

Number of nodes in the expression tree — the size measure used by the simplifier; useful for comparing alternative forms.

### node_count

<a id="entry-presentation_swift_expressions_capability_numeric_definite_integration_node_count_api_results_numericdefiniteintegrationresult_node_count"></a>
<a id="placement-placement.swift.swift_object.uniffinumericdefiniteintegrationresult_nodecount.7cfe01382f21"></a>
<p class="symi-entry-owner">UniffiNumericDefiniteIntegrationResult method</p>

```swift signature
func nodeCount() -> UInt64?
```

The node count of the accepted Gauss--Legendre rule.

