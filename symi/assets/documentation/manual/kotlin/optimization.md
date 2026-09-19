# Optimization

Local symbolic optimization finds critical points of an objective and classifies
them by second-order conditions. The layer is **local and exact** — it
finds and classifies critical / Lagrange / KKT points, deciding every
classification from exact minor signs (never numerically) and declining whenever
a sign is undecidable or the underlying system solver cannot close the
stationarity equations. These local operations do not claim a *global* optimum.
The separate `global_optimum_on_semialgebraic` operation handles its documented
CAD-backed polynomial semialgebraic domain.

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

<a id="entry-presentation_kotlin_optimization_capability_equations_unconstrained_critical_points_api_solving_session_unconstrained_critical_points"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_unconstrainedcriticalpoints.b49b043c33ef"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun unconstrainedCriticalPoints(
    objective: UniffiExpression,
    variables: List<kotlin.String>,
): UniffiOptimizationOutcome
```


The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified
by the definiteness of the Hessian (Sylvester's criterion on the leading principal
minors). A quadratic objective yields a complete outcome; a degenerate Hessian
(`det H = 0`) classifies as `inconclusive`.

### classify_unconstrained

<a id="entry-presentation_kotlin_optimization_capability_equations_classify_unconstrained_api_solving_session_classify_unconstrained"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_classifyunconstrained.a01fdcd7019c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun classifyUnconstrained(
    objective: UniffiExpression,
    variables: List<kotlin.String>,
    pointVariables: List<kotlin.String>,
    pointValues: List<UniffiExpression>,
): UniffiExtremumClassification
```


Classify one given interior point — supplied as the parallel `point_variables` /
`point_values` lists — by Hessian definiteness, returning the verdict string.

### lagrange_critical_points

<a id="entry-presentation_kotlin_optimization_capability_equations_lagrange_critical_points_api_solving_session_lagrange_critical_points"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lagrangecriticalpoints.7c544d7aa511"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lagrangeCriticalPoints(
    objective: UniffiExpression,
    constraints: List<UniffiExpression>,
    variables: List<kotlin.String>,
): UniffiOptimizationOutcome
```


The equality-constrained critical points via Lagrange multipliers: stationarity of
\(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered
Hessian. The solved multiplier values appear in each point's multipliers.

### karush_kuhn_tucker_points

<a id="entry-presentation_kotlin_optimization_capability_equations_karush_kuhn_tucker_points_api_solving_session_karush_kuhn_tucker_points"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_karushkuhntuckerpoints.641c92417d65"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun karushKuhnTuckerPoints(
    objective: UniffiExpression,
    inequalityConstraints: List<UniffiExpression>,
    equalityConstraints: List<UniffiExpression>,
    variables: List<kotlin.String>,
): UniffiOptimizationOutcome
```


The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is
read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`. Only primal- and
dual-feasible candidates are kept; a candidate whose feasibility a sign cannot
settle is retained but classified `inconclusive`. The enumeration is bounded by a
documented cap on the number of inequalities, above which the layer declines.

## Result accessors (WASM)

On WASM the outcome and its points are objects with the following getters; on
Python the same data is returned as plain dicts.

### points

<a id="entry-presentation_kotlin_optimization_capability_equations_points_api_results_optimizationoutcome_points"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffioptimizationoutcome_points.57dc8bc59d44"></a>
<p class="symi-entry-owner">UniffiOptimizationOutcome method</p>

```kotlin signature
fun points(): List<UniffiCriticalPoint>
```

The list of `CriticalPoint` objects in an `OptimizationOutcome` (WASM).

### classification
The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`,
`"saddle_point"`, or `"inconclusive"`.

### multiplier_variables

<a id="entry-presentation_kotlin_optimization_capability_equations_multiplier_variables_api_results_criticalpoint_multiplier_variables"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficriticalpoint_multipliervariables.c934a89ea779"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```kotlin signature
fun multiplierVariables(): List<kotlin.String>
```

The names of the introduced Lagrange / KKT multipliers at a constrained critical
point (empty for the unconstrained case).

### multiplier_values

<a id="entry-presentation_kotlin_optimization_capability_equations_multiplier_values_api_results_criticalpoint_multiplier_values"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficriticalpoint_multipliervalues.d144bd76db7c"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```kotlin signature
fun multiplierValues(): List<UniffiExpression>
```

The solved values of those multipliers, in the same order as `multiplier_variables`.

## Global optimization on semialgebraic sets

### global_optimum_on_semialgebraic

<a id="entry-presentation_kotlin_optimization_capability_equations_global_optimum_on_semialgebraic_api_solving_session_global_optimum_on_semialgebraic"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_globaloptimumonsemialgebraic.23df1d9e9cbc"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun globalOptimumOnSemialgebraic(
    objective: UniffiExpression,
    constraints: UniffiExpression,
    variables: List<kotlin.String>,
    direction: UniffiOptimizationDirection,
): UniffiOptimizationOutcome
```

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


## Additional API

### classification

<a id="entry-presentation_kotlin_optimization_capability_equations_classification_api_results_criticalpoint_classification"></a>
<a id="placement-placement.kotlin.kotlin_object.unifficriticalpoint_classification.7bb1f98d3fd5"></a>
<p class="symi-entry-owner">UniffiCriticalPoint method</p>

```kotlin signature
fun classification(): UniffiExtremumClassification
```

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`, `"saddle_point"`, or `"inconclusive"`.

### classification

<a id="entry-presentation_kotlin_optimization_capability_equations_classification_api_partial_differential_equations_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffipartialdifferentialequationsolveresult_classification.f5f0975af84a"></a>
<p class="symi-entry-owner">UniffiPartialDifferentialEquationSolveResult method</p>

```kotlin signature
fun classification(): UniffiPartialDifferentialEquationClassification?
```

The exact classification the dispatcher established, when it reached one.

