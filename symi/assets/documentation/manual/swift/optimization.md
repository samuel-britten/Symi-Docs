# Optimization

Local symbolic optimization finds critical points of an objective and classifies
them by second-order conditions. The layer is **local and exact** — it
finds and classifies critical / Lagrange / KKT points, deciding every
classification from exact minor signs (never numerically) and declining whenever
a sign is undecidable or the underlying system solver cannot close the
stationarity equations. It does not claim a *global* optimum; global optimization
over a constrained region is left to a future CAD-backed layer.

Each function returns a structured **outcome**: a `verdict` of `"points"` or
`"declined"`, a `complete` flag (true only when the critical-point enumeration was
certified exhaustive — typically a quadratic objective whose gradient system is
linear), and a list of `points`. Each point carries its coordinate assignment, the
introduced Lagrange / KKT multipliers (empty for the unconstrained case), and a
`classification` string: `"local_minimum"`, `"local_maximum"`, `"saddle_point"`,
or `"inconclusive"`.

**Notes on the result shape:** Python returns a dict with keys `verdict` (str),
`complete` (bool), and `points` (a list of dicts, each with `assignment`,
`multipliers`, and `classification`); WASM returns an `OptimizationOutcome`
object whose getters expose the same data.

### unconstrained_critical_points

<a id="placement-placement.swift.swift_object.uniffisession_unconstrainedcriticalpoints.b6a6ab295c94"></a>
`UniffiSession.unconstrainedCriticalPoints(objective: UniffiExpression, variables: [String]) -> UniffiOptimizationOutcome`


The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified
by the definiteness of the Hessian (Sylvester's criterion on the leading principal
minors). A quadratic objective yields a complete outcome; a degenerate Hessian
(`det H = 0`) classifies as `inconclusive`.

### classify_unconstrained

<a id="placement-placement.swift.swift_object.uniffisession_classifyunconstrained.f03aa36b26c0"></a>
`UniffiSession.classifyUnconstrained(objective: UniffiExpression, variables: [String], pointVariables: [String], pointValues: [UniffiExpression]) -> UniffiExtremumClassification`


Classify one given interior point — supplied as the parallel `point_variables` /
`point_values` lists — by Hessian definiteness, returning the verdict string.

### lagrange_critical_points

<a id="placement-placement.swift.swift_object.uniffisession_lagrangecriticalpoints.6c80f289d173"></a>
`UniffiSession.lagrangeCriticalPoints(objective: UniffiExpression, constraints: [UniffiExpression], variables: [String]) -> UniffiOptimizationOutcome`


The equality-constrained critical points via Lagrange multipliers: stationarity of
\(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered
Hessian. The solved multiplier values appear in each point's multipliers.

### karush_kuhn_tucker_points

<a id="placement-placement.swift.swift_object.uniffisession_karushkuhntuckerpoints.c955fb78bdce"></a>
`UniffiSession.karushKuhnTuckerPoints(objective: UniffiExpression, inequalityConstraints: [UniffiExpression], equalityConstraints: [UniffiExpression], variables: [String]) -> UniffiOptimizationOutcome`


The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is
read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`. Only primal- and
dual-feasible candidates are kept; a candidate whose feasibility a sign cannot
settle is retained but classified `inconclusive`. The enumeration is bounded by a
documented cap on the number of inequalities, above which the layer declines.

## Result accessors (WASM)

On WASM the outcome and its points are objects with the following getters; on
Python the same data is returned as plain dicts.

### points

<a id="placement-placement.swift.swift_object.uniffioptimizationoutcome_points.82c3e6eb8433"></a>
`UniffiOptimizationOutcome.points() -> [UniffiCriticalPoint]`

The list of `CriticalPoint` objects in an `OptimizationOutcome` (WASM).

### classification

<a id="placement-placement.swift.swift_object.unifficriticalpoint_classification.c2bf55f4b1fd"></a>
`UniffiCriticalPoint.classification() -> UniffiExtremumClassification`

<a id="placement-placement.swift.swift_object.uniffipartialdifferentialequationsolveresult_classification.4b964331ecbf"></a>
`UniffiPartialDifferentialEquationSolveResult.classification() -> UniffiPartialDifferentialEquationClassification?`

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`,
`"saddle_point"`, or `"inconclusive"`.

### multiplier_variables

<a id="placement-placement.swift.swift_object.unifficriticalpoint_multipliervariables.a46f5fe2919e"></a>
`UniffiCriticalPoint.multiplierVariables() -> [String]`

The names of the introduced Lagrange / KKT multipliers at a constrained critical
point (empty for the unconstrained case).

### multiplier_values

<a id="placement-placement.swift.swift_object.unifficriticalpoint_multipliervalues.0bc87f3dcf31"></a>
`UniffiCriticalPoint.multiplierValues() -> [UniffiExpression]`

The solved values of those multipliers, in the same order as `multiplier_variables`.

## Global optimization on semialgebraic sets

### global_optimum_on_semialgebraic

<a id="placement-placement.swift.swift_object.uniffisession_globaloptimumonsemialgebraic.771c66e25891"></a>
`UniffiSession.globalOptimumOnSemialgebraic(objective: UniffiExpression, constraints: UniffiExpression, variables: [String], direction: UniffiOptimizationDirection) -> UniffiOptimizationOutcome`

`context.global_optimum_on_semialgebraic(objective, constraints, variables: list[VariableLike], direction: str)`

Global optimum of a polynomial `objective` over the semialgebraic feasible set
described by `constraints` (a Boolean combination of polynomial relations), with
`direction` either `"minimize"` or `"maximize"`. Builds the objective-gradient-adapted
cylindrical algebraic decomposition, ranks the objective exactly over the feasible cell
sample points, and **certifies** the candidate by quantifier elimination
(\(\forall x.\ \operatorname{feasible}(x) \rightarrow \operatorname{objective}(x) \gtreqless \operatorname{value}\)). Returns the same
`OptimizationOutcome` shape (on Python a dict, on WASM an object): a `"points"` verdict
with one point and `complete = true` carries the attained global optimum; a `"declined"`
verdict reports an unbounded objective or an extremum that is approached but not attained.
This closes the global-optimum-on-semialgebraic-set problem; the returned point and value are
exact rationals (an irrational-algebraic optimum declines).

## Example

