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

<a id="placement-placement.swift.swift_object.unifficircle2d_isstale.197cf4ee1773"></a>
`UniffiCircle2d.isStale() -> Bool`

<a id="placement-placement.swift.swift_object.uniffiexpression_isstale.c7de0edcfa53"></a>
`UniffiExpression.isStale() -> Bool`

<a id="placement-placement.swift.swift_object.uniffimatrix_isstale.53cba65746d3"></a>
`UniffiMatrix.isStale() -> Bool`

<a id="placement-placement.swift.swift_object.uniffipoint2d_isstale.6204e470b4d1"></a>
`UniffiPoint2d.isStale() -> Bool`

<a id="placement-placement.swift.swift_object.uniffipolygon2d_isstale.3e170f2b6a4b"></a>
`UniffiPolygon2d.isStale() -> Bool`

<a id="placement-placement.swift.swift_object.uniffisegment2d_isstale.aa90766378bc"></a>
`UniffiSegment2d.isStale() -> Bool`

<a id="placement-placement.swift.swift_object.uniffitriangle2d_isstale.c0b0c4615df5"></a>
`UniffiTriangle2d.isStale() -> Bool`



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

<a id="placement-placement.swift.swift_object.uniffiexpression_divide.348880b74d1e"></a>
`UniffiExpression.divide(other: UniffiExpression) -> UniffiExpression`


### power

<a id="placement-placement.swift.swift_object.uniffiexpression_power.a5bba90b9b09"></a>
`UniffiExpression.power(exponent: UniffiExpression) -> UniffiExpression`


### negate

<a id="placement-placement.swift.swift_object.uniffiexpression_negate.0f69aa0ddb6c"></a>
`UniffiExpression.negate() -> UniffiExpression`


## Substitution and structure

### substitute

<a id="placement-placement.swift.swift_object.uniffiexpression_substitute.512aa017763a"></a>
`UniffiExpression.substitute(variable: UniffiExpression, value: UniffiExpression) -> UniffiExpression`


Replace every free occurrence of the named symbol with `value`, re-running
auto-simplification.

### rewrite_in_terms_of

<a id="placement-placement.swift.swift_object.uniffiexpression_rewriteintermsof.142547bbdf71"></a>
`UniffiExpression.rewriteInTermsOf(source: UniffiExpression, replacement: UniffiExpression) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_rewriteintermsof.9748be3ce393"></a>
`UniffiSession.rewriteInTermsOf(target: UniffiExpression, source: UniffiExpression, replacement: UniffiExpression) -> UniffiExpression`


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

<a id="placement-placement.swift.swift_object.uniffiexpression_freevariables.c72f19c47c45"></a>
`UniffiExpression.freeVariables() -> [String]`


Sorted names of the free symbols. Bound binders (integration variables,
image-set parameters) are excluded; the constants pi/e are not symbols.

### expression_type

<a id="placement-placement.swift.swift_object.uniffiexpression_expressiontype.6d4e11222f3c"></a>
`UniffiExpression.expressionType() -> String`


Top-level node kind: one of `integer`, `rational`, `symbol`, `constant`,
`sum`, `product`, `power`, `factorial`, `function_call`, `derivative`,
`integral`, `summation`, `laplace_transform`, `inverse_laplace_transform`,
`fourier_transform`, `inverse_fourier_transform`, `piecewise`,
`ordinary_differential_equation`, `recurrence_equation`, `interval`,
`finite_set`, `set_union`, `set_intersection`, `set_complement`,
`image_set`, `condition_set`.

### node_count

<a id="placement-placement.swift.swift_object.uniffiexpression_nodecount.fad53b5cf4a4"></a>
`UniffiExpression.nodeCount() -> UInt64`

<a id="placement-placement.swift.swift_object.uniffinumericdefiniteintegrationresult_nodecount.7cfe01382f21"></a>
`UniffiNumericDefiniteIntegrationResult.nodeCount() -> UInt64?`


Number of nodes in the expression tree — the size measure used by the
simplifier; useful for comparing alternative forms.

### duplicate

<a id="placement-placement.swift.swift_object.uniffiexpression_duplicate.5da15dafb7a9"></a>
`UniffiExpression.duplicate() -> UniffiExpression`


An independent handle to the same underlying expression. The recommended
JavaScript facade duplicates values before passing them through
ownership-transferring raw WASM arrays, so ordinary facade calls are
non-destructive. Callers using `facade.raw` directly must still duplicate a
handle they intend to retain. Python arguments are borrowed.

## Numeric evaluation

### evaluate_to_float

<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetofloat.9518d5ce1912"></a>
`UniffiExpression.evaluateToFloat() -> Double`


Real double-precision value; raises when the expression has no real numeric
value (free symbols, complex value, pole).

### evaluate_to_complex_inexact

<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetocomplexinexact.197078c91a42"></a>
`UniffiExpression.evaluateToComplexInexact() -> UniffiFloatingPointFloatingPointTuple`


Complex evaluation at the default working precision under the documented
principal-value branch cuts, as (real, imaginary). **Notes:** WASM returns a
two-element array; the deterministic software backend makes both bindings
bit-identical.

### evaluate_to_complex_inexact_at_precision

<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetocomplexinexactatprecision.bfb52393fcc1"></a>
`UniffiExpression.evaluateToComplexInexactAtPrecision(precisionBits: UInt64) -> UniffiFloatingPointFloatingPointTuple`


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

<a id="placement-placement.swift.swift_object.uniffiexpression_equals.b8c03f8e5282"></a>
`UniffiExpression.equals(other: UniffiExpression) -> Bool`


Mathematical equality test: \(\operatorname{simplify}(\operatorname{self} - \operatorname{other}) = 0\). A `False` result
means "could not prove equal", not a disproof.

## Shape queries

### is_matrix

<a id="placement-placement.swift.swift_object.uniffiexpression_ismatrix.cd8eb878fdd4"></a>
`UniffiExpression.isMatrix() -> Bool`

<a id="placement-placement.swift.swift_object.uniffimatrix_ismatrix.d12275ab42be"></a>
`UniffiMatrix.isMatrix() -> Bool`


Always `False` on expressions and `True` on `Matrix` objects, so mixed
result streams can be discriminated.

### is_equality

<a id="placement-placement.swift.swift_object.uniffiexpression_isequality.e075530f04db"></a>
`UniffiExpression.isEquality() -> Bool`

<a id="placement-placement.swift.swift_object.uniffimatrix_isequality.85c001b53f7d"></a>
`UniffiMatrix.isEquality() -> Bool`


True for `equal(a, b)` relation nodes.

### is_integral

<a id="placement-placement.swift.swift_object.uniffiexpression_isintegral.671569e9a192"></a>
`UniffiExpression.isIntegral() -> Bool`

<a id="placement-placement.swift.swift_object.uniffimatrix_isintegral.67259d6cc3c3"></a>
`UniffiMatrix.isIntegral() -> Bool`


True for unevaluated integral nodes. (Distinct from the assumption query
`is_integer`.)

### is_union

<a id="placement-placement.swift.swift_object.uniffiexpression_isunion.89223c30349c"></a>
`UniffiExpression.isUnion() -> Bool`

<a id="placement-placement.swift.swift_object.uniffimatrix_isunion.4e9a812714cc"></a>
`UniffiMatrix.isUnion() -> Bool`


### is_image_set

<a id="placement-placement.swift.swift_object.uniffiexpression_isimageset.fc4113f8479d"></a>
`UniffiExpression.isImageSet() -> Bool`

<a id="placement-placement.swift.swift_object.uniffimatrix_isimageset.4b16afb2638e"></a>
`UniffiMatrix.isImageSet() -> Bool`


### is_finite_set

<a id="placement-placement.swift.swift_object.uniffiexpression_isfiniteset.ca548443b525"></a>
`UniffiExpression.isFiniteSet() -> Bool`

<a id="placement-placement.swift.swift_object.uniffimatrix_isfiniteset.0807f84c62b6"></a>
`UniffiMatrix.isFiniteSet() -> Bool`


### is_interval

<a id="placement-placement.swift.swift_object.uniffiexpression_isinterval.bca93c4bc4fc"></a>
`UniffiExpression.isInterval() -> Bool`


## Assumption queries (three-valued)

All return `True`/`False`/`None` (`undefined` in JS): a definite verdict
only on proof from the structure and the symbol assumptions.

### is_real

<a id="placement-placement.swift.swift_object.uniffiexpression_isreal.f42ff634684d"></a>
`UniffiExpression.isReal() -> UniffiTruthValue`

<a id="placement-placement.swift.swift_object.uniffimatrix_isreal.228c4dfae781"></a>
`UniffiMatrix.isReal() -> Bool?`


### is_positive

<a id="placement-placement.swift.swift_object.uniffiexpression_ispositive.18e0b918f081"></a>
`UniffiExpression.isPositive() -> UniffiTruthValue`

<a id="placement-placement.swift.swift_object.uniffimatrix_ispositive.c44c5cbbbbbf"></a>
`UniffiMatrix.isPositive() -> Bool?`


### is_negative

<a id="placement-placement.swift.swift_object.uniffiexpression_isnegative.de1946398389"></a>
`UniffiExpression.isNegative() -> UniffiTruthValue`


### is_integer

<a id="placement-placement.swift.swift_object.uniffiexpression_isinteger.c43f8f6a0595"></a>
`UniffiExpression.isInteger() -> UniffiTruthValue`


### is_rational

<a id="placement-placement.swift.swift_object.uniffiexpression_isrational.9fda842a2a4f"></a>
`UniffiExpression.isRational() -> UniffiTruthValue`


### is_nonzero

<a id="placement-placement.swift.swift_object.uniffiexpression_isnonzero.55e004c06139"></a>
`UniffiExpression.isNonzero() -> UniffiTruthValue`


### is_nonnegative

<a id="placement-placement.swift.swift_object.uniffiexpression_isnonnegative.a617e48ca745"></a>
`UniffiExpression.isNonnegative() -> UniffiTruthValue`


Answers `True` only on proof that the expression is greater than or equal to
zero — an even power of a provably real base, a sum or product of such, or
anything already provably positive. It never answers `False`: a failure to
prove non-negativity is not a proof of negativity, so the undecided verdict is
`None`.

### is_finite

<a id="placement-placement.swift.swift_object.uniffiexpression_isfinite.9d786e1474e3"></a>
`UniffiExpression.isFinite() -> UniffiTruthValue`


### is_defined

<a id="placement-placement.swift.swift_object.uniffiexpression_isdefined.4ea4bf253e9c"></a>
`UniffiExpression.isDefined() -> UniffiTruthValue`


Answers `True` only on proof that the expression denotes one scalar value at the
active point, and `False` only on proof that it denotes none — a zero
denominator, a zero logarithm argument, or a proved indeterminate extended-value
combination. Definedness is pointwise: it says nothing about continuity or
analyticity near the point, and a point on a chosen principal branch cut such as
`log(-1)` is defined even though the principal logarithm is discontinuous there.
The signed infinities are defined extended-real values but are not finite.

## Structural accessors

### interval_lower

<a id="placement-placement.swift.swift_object.uniffiexpression_intervallower.bf74a308696a"></a>
`UniffiExpression.intervalLower() -> UniffiExpression`


Lower endpoint of an interval node; raises on other shapes.

### interval_upper

<a id="placement-placement.swift.swift_object.uniffiexpression_intervalupper.b86ea95a628c"></a>
`UniffiExpression.intervalUpper() -> UniffiExpression`


### integral_integrand

<a id="placement-placement.swift.swift_object.uniffiexpression_integralintegrand.e3eb51b1f253"></a>
`UniffiExpression.integralIntegrand() -> UniffiExpression`


### integral_variable

<a id="placement-placement.swift.swift_object.uniffiexpression_integralvariable.92a69411221a"></a>
`UniffiExpression.integralVariable() -> String`


### integral_lower_bound

<a id="placement-placement.swift.swift_object.uniffiexpression_integrallowerbound.4a02d4563d08"></a>
`UniffiExpression.integralLowerBound() -> UniffiExpression?`


`None` for indefinite integrals.

### integral_upper_bound

<a id="placement-placement.swift.swift_object.uniffiexpression_integralupperbound.93f83b199f94"></a>
`UniffiExpression.integralUpperBound() -> UniffiExpression?`


### union_components

<a id="placement-placement.swift.swift_object.uniffiexpression_unioncomponents.13d127c4cffa"></a>
`UniffiExpression.unionComponents() -> [UniffiExpression]`


### image_set_lambda_expression

<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetlambdaexpression.e27bb6c7245f"></a>
`UniffiExpression.imageSetLambdaExpression() -> UniffiExpression`


### image_set_variable

<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetvariable.a66e6728ce93"></a>
`UniffiExpression.imageSetVariable() -> String`


### image_set_domain

<a id="placement-placement.swift.swift_object.uniffiexpression_imagesetdomain.8374f5c6ce04"></a>
`UniffiExpression.imageSetDomain() -> UniffiExpression`


### to_list

<a id="placement-placement.swift.swift_object.uniffiexpression_tolist.fb9651785a68"></a>
`UniffiExpression.toList() -> [UniffiExpression]`


Elements of a finite set; raises on other shapes. Python finite sets also
support `len()` and iteration.

### length

Element count of a finite set (Python: `len(expression)`).

## String conversion

### to_string

*Not exposed by the Swift bindings. Available as [`api::partial_differential_equations::PartialDifferentialEquationProblem::to_string`](/symi/rust/expressions#to_string) in Rust.*


Human-readable form; Python uses `str(expression)` / `repr(expression)`.
### symbol_name

<a id="placement-placement.swift.swift_object.uniffiexpression_symbolname.93adace4b937"></a>
`UniffiExpression.symbolName() -> String`


Returns the name of a symbol expression and rejects every other expression kind.

### numerator_denominator

<a id="placement-placement.swift.swift_object.uniffiexpression_numeratordenominator.196fddc48c58"></a>
`UniffiExpression.numeratorDenominator() -> UniffiExpressionExpressionTuple`

<a id="placement-placement.swift.swift_object.uniffisession_numeratordenominator.be999967dfa0"></a>
`UniffiSession.numeratorDenominator(target: UniffiExpression) -> UniffiExpressionExpressionTuple`


Returns the exact structural numerator and denominator without combining sums or cancelling
factors. Python returns a two-tuple and the JavaScript facade returns a record.

### numerator

<a id="placement-placement.swift.swift_object.uniffiexpression_numerator.e77eb927a498"></a>
`UniffiExpression.numerator() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_numerator.9f5a074b3246"></a>
`UniffiSession.numerator(target: UniffiExpression) -> UniffiExpression`


Returns the structural numerator from `numerator_denominator`.

### denominator

<a id="placement-placement.swift.swift_object.uniffiexpression_denominator.4254a3f8a578"></a>
`UniffiExpression.denominator() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_denominator.f8b517d89880"></a>
`UniffiSession.denominator(target: UniffiExpression) -> UniffiExpression`


Returns the structural denominator from `numerator_denominator`.

## Example

