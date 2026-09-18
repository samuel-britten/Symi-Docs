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

<a id="placement-placement.kotlin.kotlin_object.unifficircle2d_isstale.89a59ebaf786"></a>
`UniffiCircle2d.isStale(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isstale.6cebde6e82d9"></a>
`UniffiExpression.isStale(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isstale.4e3766b91543"></a>
`UniffiMatrix.isStale(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffipoint2d_isstale.33041b7d87c5"></a>
`UniffiPoint2d.isStale(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffipolygon2d_isstale.f068d2a02790"></a>
`UniffiPolygon2d.isStale(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffisegment2d_isstale.74cd984edbd9"></a>
`UniffiSegment2d.isStale(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffitriangle2d_isstale.1975032c3e21"></a>
`UniffiTriangle2d.isStale(): kotlin.Boolean`



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

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_divide.9d394b27da08"></a>
`UniffiExpression.divide(other: UniffiExpression): UniffiExpression`


### power

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_power.8d80024f736b"></a>
`UniffiExpression.power(exponent: UniffiExpression): UniffiExpression`


### negate

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_negate.7d6ed61d0569"></a>
`UniffiExpression.negate(): UniffiExpression`


## Substitution and structure

### substitute

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_substitute.78b871fe3f18"></a>
`UniffiExpression.substitute(variable: UniffiExpression, value: UniffiExpression): UniffiExpression`


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_rewriteintermsof.96e5813695ea"></a>
`UniffiExpression.rewriteInTermsOf(source: UniffiExpression, replacement: UniffiExpression): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_rewriteintermsof.2a99689c75a1"></a>
`UniffiSession.rewriteInTermsOf(target: UniffiExpression, source: UniffiExpression, replacement: UniffiExpression): UniffiExpression`


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

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_freevariables.2133c09a26c3"></a>
`UniffiExpression.freeVariables(): List<kotlin.String>`


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_expressiontype.d9b93866b008"></a>
`UniffiExpression.expressionType(): kotlin.String`


Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`,
`sum`, `product`, `power`, `factorial`, `function_call`, `derivative`,
`integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`,
`fourier_transform`, `inverse_fourier_transform`, `piecewise`,
`ordinary_differential_equation`, `recurrence_equation`, `interval`,
`finite_set`, `set_union`, `set_intersection`, `set_complement`,
`image_set`, `condition_set`.

### node_count

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_nodecount.2e31edade300"></a>
`UniffiExpression.nodeCount(): kotlin.ULong`

<a id="placement-placement.kotlin.kotlin_object.uniffinumericdefiniteintegrationresult_nodecount.d2df67c2eda2"></a>
`UniffiNumericDefiniteIntegrationResult.nodeCount(): kotlin.ULong?`


Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_duplicate.6c9fe641fbb4"></a>
`UniffiExpression.duplicate(): UniffiExpression`


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatetofloat.fac90f5afa84"></a>
`UniffiExpression.evaluateToFloat(): kotlin.Double`


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatetocomplexinexact.3b9a5a543b9e"></a>
`UniffiExpression.evaluateToComplexInexact(): UniffiFloatingPointFloatingPointTuple`


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_evaluatetocomplexinexactatprecision.d680d8c06754"></a>
`UniffiExpression.evaluateToComplexInexactAtPrecision(precisionBits: kotlin.ULong): UniffiFloatingPointFloatingPointTuple`


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

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_equals.293ebff8342f"></a>
`UniffiExpression.equals(other: UniffiExpression): kotlin.Boolean`


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_ismatrix.f35d119691fc"></a>
`UniffiExpression.isMatrix(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ismatrix.59c32a9ac155"></a>
`UniffiMatrix.isMatrix(): kotlin.Boolean`


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isequality.6469d768e6d8"></a>
`UniffiExpression.isEquality(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isequality.7dbc7e6ef13b"></a>
`UniffiMatrix.isEquality(): kotlin.Boolean`


True for `equal(a, b)` relation nodes.

### is_integral

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isintegral.f29173423b1f"></a>
`UniffiExpression.isIntegral(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isintegral.4f42cc54640f"></a>
`UniffiMatrix.isIntegral(): kotlin.Boolean`


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isunion.3513f7d92619"></a>
`UniffiExpression.isUnion(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isunion.9cad436fed6a"></a>
`UniffiMatrix.isUnion(): kotlin.Boolean`


### is_image_set

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isimageset.74191a79b36d"></a>
`UniffiExpression.isImageSet(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isimageset.25932c5800c3"></a>
`UniffiMatrix.isImageSet(): kotlin.Boolean`


### is_finite_set

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isfiniteset.9e5c46e09283"></a>
`UniffiExpression.isFiniteSet(): kotlin.Boolean`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isfiniteset.4438f54056d3"></a>
`UniffiMatrix.isFiniteSet(): kotlin.Boolean`


### is_interval

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isinterval.0948551178ee"></a>
`UniffiExpression.isInterval(): kotlin.Boolean`


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isreal.68afbcf81823"></a>
`UniffiExpression.isReal(): UniffiTruthValue`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_isreal.61437e2036eb"></a>
`UniffiMatrix.isReal(): kotlin.Boolean?`


### is_positive

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_ispositive.1eca47da4578"></a>
`UniffiExpression.isPositive(): UniffiTruthValue`

<a id="placement-placement.kotlin.kotlin_object.uniffimatrix_ispositive.8f0109bcd91e"></a>
`UniffiMatrix.isPositive(): kotlin.Boolean?`


### is_negative

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnegative.3d423b1211de"></a>
`UniffiExpression.isNegative(): UniffiTruthValue`


### is_integer

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isinteger.b4862a3cbdcb"></a>
`UniffiExpression.isInteger(): UniffiTruthValue`


### is_rational

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isrational.b3629ac40e82"></a>
`UniffiExpression.isRational(): UniffiTruthValue`


### is_nonzero

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnonzero.1648e8638497"></a>
`UniffiExpression.isNonzero(): UniffiTruthValue`


### is_nonnegative

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isnonnegative.321a24b63f8b"></a>
`UniffiExpression.isNonnegative(): UniffiTruthValue`


Answers `True` only on proof that the expression is greater than or equal to
zero — an even power of a provably real base, a sum or product of such, or
anything already provably positive. It never answers `False`: a failure to
prove non-negativity is not a proof of negativity, so the undecided verdict is
`None`.

### is_finite

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isfinite.ff5da129970d"></a>
`UniffiExpression.isFinite(): UniffiTruthValue`


### is_defined

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_isdefined.e976ae6f5377"></a>
`UniffiExpression.isDefined(): UniffiTruthValue`


Answers `True` only on proof that the expression denotes one scalar value at the
active point, and `False` only on proof that it denotes none — a zero
denominator, a zero logarithm argument, or a proved indeterminate extended-value
combination. Definedness is pointwise: it says nothing about continuity or
analyticity near the point, and a point on a chosen principal branch cut such as
`log(-1)` is defined even though the principal logarithm is discontinuous there.
The signed infinities are defined extended-real values but are not finite.

## Structural accessors

### interval_lower

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_intervallower.6bfca73cdded"></a>
`UniffiExpression.intervalLower(): UniffiExpression`


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_intervalupper.4fb1e087bb45"></a>
`UniffiExpression.intervalUpper(): UniffiExpression`


### integral_integrand

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integralintegrand.b8db9eebf05f"></a>
`UniffiExpression.integralIntegrand(): UniffiExpression`


### integral_variable

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integralvariable.99bf7e170954"></a>
`UniffiExpression.integralVariable(): kotlin.String`


### integral_lower_bound

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integrallowerbound.ab74805544d1"></a>
`UniffiExpression.integralLowerBound(): UniffiExpression?`


`None` for indefinite integrals.

### integral_upper_bound

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_integralupperbound.62c2862a999f"></a>
`UniffiExpression.integralUpperBound(): UniffiExpression?`


### union_components

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_unioncomponents.8a355bc7b772"></a>
`UniffiExpression.unionComponents(): List<UniffiExpression>`


### image_set_lambda_expression

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_imagesetlambdaexpression.5a80a7d713dc"></a>
`UniffiExpression.imageSetLambdaExpression(): UniffiExpression`


### image_set_variable

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_imagesetvariable.88e2a6dcda1a"></a>
`UniffiExpression.imageSetVariable(): kotlin.String`


### image_set_domain

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_imagesetdomain.e70a80c50d20"></a>
`UniffiExpression.imageSetDomain(): UniffiExpression`


### to_list

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_tolist.0fd346ec8b5d"></a>
`UniffiExpression.toList(): List<UniffiExpression>`


Elements of a finite set; raises on other shapes. Python finite sets also
support `len()` and iteration.

### length

Element count of a finite set (Python: `len(expression)`).

## String conversion

### to_string

*Not exposed by the Kotlin bindings. Available as [`api::partial_differential_equations::PartialDifferentialEquationProblem::to_string`](/symi/rust/expressions#to_string) in Rust.*


Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_symbolname.6b624ae2c351"></a>
`UniffiExpression.symbolName(): kotlin.String`


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_numeratordenominator.d1a3f74a0ed9"></a>
`UniffiExpression.numeratorDenominator(): UniffiExpressionExpressionTuple`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_numeratordenominator.f01338fe2e4a"></a>
`UniffiSession.numeratorDenominator(target: UniffiExpression): UniffiExpressionExpressionTuple`


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_numerator.ff8d1f77b246"></a>
`UniffiExpression.numerator(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_numerator.4277a86a172c"></a>
`UniffiSession.numerator(target: UniffiExpression): UniffiExpression`


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_denominator.a13e3208adc1"></a>
`UniffiExpression.denominator(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_denominator.aa24023e728a"></a>
`UniffiSession.denominator(target: UniffiExpression): UniffiExpression`


Returns the structural denominator from `numerator_denominator`.

## Example

