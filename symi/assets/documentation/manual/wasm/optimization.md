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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.unconstrained_critical_points`](/symi/python/optimization#unconstrained_critical_points) in Python, [`UniffiSession.unconstrainedCriticalPoints`](/symi/kotlin/optimization#unconstrained_critical_points) in Kotlin, [`UniffiSession.unconstrainedCriticalPoints`](/symi/swift/optimization#unconstrained_critical_points) in Swift, [`api::solving::Session::unconstrained_critical_points`](/symi/rust/optimization#unconstrained_critical_points) in Rust.*


The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified
by the definiteness of the Hessian (Sylvester's criterion on the leading principal
minors). A quadratic objective yields a complete outcome; a degenerate Hessian
(`det H = 0`) classifies as `inconclusive`.

### classify_unconstrained

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.classify_unconstrained`](/symi/python/optimization#classify_unconstrained) in Python, [`UniffiSession.classifyUnconstrained`](/symi/kotlin/optimization#classify_unconstrained) in Kotlin, [`UniffiSession.classifyUnconstrained`](/symi/swift/optimization#classify_unconstrained) in Swift, [`api::solving::Session::classify_unconstrained`](/symi/rust/optimization#classify_unconstrained) in Rust.*


Classify one given interior point — supplied as the parallel `point_variables` /
`point_values` lists — by Hessian definiteness, returning the verdict string.

### lagrange_critical_points

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.lagrange_critical_points`](/symi/python/optimization#lagrange_critical_points) in Python, [`UniffiSession.lagrangeCriticalPoints`](/symi/kotlin/optimization#lagrange_critical_points) in Kotlin, [`UniffiSession.lagrangeCriticalPoints`](/symi/swift/optimization#lagrange_critical_points) in Swift, [`api::solving::Session::lagrange_critical_points`](/symi/rust/optimization#lagrange_critical_points) in Rust.*


The equality-constrained critical points via Lagrange multipliers: stationarity of
\(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered
Hessian. The solved multiplier values appear in each point's multipliers.

### karush_kuhn_tucker_points

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.karush_kuhn_tucker_points`](/symi/python/optimization#karush_kuhn_tucker_points) in Python, [`UniffiSession.karushKuhnTuckerPoints`](/symi/kotlin/optimization#karush_kuhn_tucker_points) in Kotlin, [`UniffiSession.karushKuhnTuckerPoints`](/symi/swift/optimization#karush_kuhn_tucker_points) in Swift, [`api::solving::Session::karush_kuhn_tucker_points`](/symi/rust/optimization#karush_kuhn_tucker_points) in Rust.*


The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is
read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`. Only primal- and
dual-feasible candidates are kept; a candidate whose feasibility a sign cannot
settle is retained but classified `inconclusive`. The enumeration is bounded by a
documented cap on the number of inequalities, above which the layer declines.

## Result accessors (WASM)

On WASM the outcome and its points are objects with the following getters; on
Python the same data is returned as plain dicts.

### points

<a id="entry-presentation_wasm_optimization_capability_equations_points_api_results_optimizationoutcome_points"></a>
<a id="placement-placement.wasm.wasm_class.optimizationoutcome_points.3545def4598f"></a>
<p class="symi-entry-owner">OptimizationOutcome property</p>

```typescript signature
readonly points: CriticalPoint[]
```

The list of `CriticalPoint` objects in an `OptimizationOutcome` (WASM).

### classification
The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`,
`"saddle_point"`, or `"inconclusive"`.

### multiplier_variables

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiCriticalPoint.multiplierVariables`](/symi/kotlin/optimization#multiplier_variables) in Kotlin, [`UniffiCriticalPoint.multiplierVariables`](/symi/swift/optimization#multiplier_variables) in Swift, [`api::results::CriticalPoint::multiplier_variables`](/symi/rust/optimization#multiplier_variables) in Rust.*

The names of the introduced Lagrange / KKT multipliers at a constrained critical
point (empty for the unconstrained case).

### multiplier_values

*Not exposed by the WASM / JavaScript bindings. Available as [`UniffiCriticalPoint.multiplierValues`](/symi/kotlin/optimization#multiplier_values) in Kotlin, [`UniffiCriticalPoint.multiplierValues`](/symi/swift/optimization#multiplier_values) in Swift, [`api::results::CriticalPoint::multiplier_values`](/symi/rust/optimization#multiplier_values) in Rust.*

The solved values of those multipliers, in the same order as `multiplier_variables`.

## Global optimization on semialgebraic sets

### global_optimum_on_semialgebraic

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.global_optimum_on_semialgebraic`](/symi/python/optimization#global_optimum_on_semialgebraic) in Python, [`UniffiSession.globalOptimumOnSemialgebraic`](/symi/kotlin/optimization#global_optimum_on_semialgebraic) in Kotlin, [`UniffiSession.globalOptimumOnSemialgebraic`](/symi/swift/optimization#global_optimum_on_semialgebraic) in Swift, [`api::solving::Session::global_optimum_on_semialgebraic`](/symi/rust/optimization#global_optimum_on_semialgebraic) in Rust.*

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

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### classification

<a id="entry-presentation_wasm_optimization_capability_equations_classification_api_results_criticalpoint_classification"></a>
<a id="placement-placement.wasm.wasm_class.criticalpoint_classification.978862e13473"></a>
<p class="symi-entry-owner">CriticalPoint property</p>

```typescript signature
readonly classification: string
```

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`, `"saddle_point"`, or `"inconclusive"`.

### classification

<a id="entry-presentation_wasm_optimization_capability_equations_classification_api_partial_differential_equations_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_classification.2086e21405ea"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```typescript signature
readonly classification: PartialDifferentialEquationClassification | undefined
```

The exact classification the dispatcher established, when it reached one.

### globalOptimumOnSemialgebraic

<a id="entry-presentation_wasm_optimization_capability_equations_global_optimum_on_semialgebraic_api_solving_session_global_optimum_on_semialgebraic"></a>
<a id="placement-placement.wasm.wasm_module.module_globaloptimumonsemialgebraic.22ed79a5f317"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
globalOptimumOnSemialgebraic(
    objective: Expression,
    constraints: Expression,
    variables: string[],
    direction: string,
): OptimizationOutcome
```

`context.global_optimum_on_semialgebraic(objective, constraints, variables: list[VariableLike], direction: str)`

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_globaloptimumonsemialgebraic.479ea3494935"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.globalOptimumOnSemialgebraic</code></p>

```typescript signature
globalOptimumOnSemialgebraic(
    objective: Expression,
    constraints: Expression,
    variables: string[],
    direction: string,
): OptimizationOutcome
```

</details>

### karushKuhnTuckerPoints

<a id="entry-presentation_wasm_optimization_capability_equations_karush_kuhn_tucker_points_api_solving_session_karush_kuhn_tucker_points"></a>
<a id="placement-placement.wasm.wasm_module.module_karushkuhntuckerpoints.a8ef1c2fbad2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
karushKuhnTuckerPoints(
    objective: Expression,
    inequality_constraints: Expression[],
    equality_constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_karushkuhntuckerpoints.fa6b84d46fc0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.karushKuhnTuckerPoints</code></p>

```typescript signature
karushKuhnTuckerPoints(
    objective: Expression,
    inequality_constraints: Expression[],
    equality_constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

</details>

### lagrangeCriticalPoints

<a id="entry-presentation_wasm_optimization_capability_equations_lagrange_critical_points_api_solving_session_lagrange_critical_points"></a>
<a id="placement-placement.wasm.wasm_module.module_lagrangecriticalpoints.bc240aa51629"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
lagrangeCriticalPoints(
    objective: Expression,
    constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

The equality-constrained critical points via Lagrange multipliers: stationarity of \(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered Hessian. The solved multiplier values appear in each point's multipliers.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_lagrangecriticalpoints.e80a858e03b0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lagrangeCriticalPoints</code></p>

```typescript signature
lagrangeCriticalPoints(
    objective: Expression,
    constraints: Expression[],
    variables: string[],
): OptimizationOutcome
```

</details>

### unconstrainedCriticalPoints

<a id="entry-presentation_wasm_optimization_capability_equations_unconstrained_critical_points_api_solving_session_unconstrained_critical_points"></a>
<a id="placement-placement.wasm.wasm_module.module_unconstrainedcriticalpoints.73c270b9471a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
unconstrainedCriticalPoints(
    objective: Expression,
    variables: string[],
): OptimizationOutcome
```

The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified by the definiteness of the Hessian (Sylvester's criterion on the leading principal minors).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_unconstrainedcriticalpoints.40bf18e8ff10"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unconstrainedCriticalPoints</code></p>

```typescript signature
unconstrainedCriticalPoints(
    objective: Expression,
    variables: string[],
): OptimizationOutcome
```

</details>

