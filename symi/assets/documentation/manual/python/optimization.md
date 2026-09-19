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

<a id="entry-presentation_python_optimization_capability_equations_unconstrained_critical_points_api_solving_session_unconstrained_critical_points"></a>
<a id="placement-placement.python.python_module.module_unconstrained_critical_points.031d7a3baf3c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
unconstrained_critical_points(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Any
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_unconstrained_critical_points.ea2542856ae2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unconstrained_critical_points</code></p>

```python signature
unconstrained_critical_points(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
) -> Any
```

</details>


The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified
by the definiteness of the Hessian (Sylvester's criterion on the leading principal
minors). A quadratic objective yields a complete outcome; a degenerate Hessian
(`det H = 0`) classifies as `inconclusive`.

### classify_unconstrained

<a id="entry-presentation_python_optimization_capability_equations_classify_unconstrained_api_solving_session_classify_unconstrained"></a>
<a id="placement-placement.python.python_module.module_classify_unconstrained.d8b4216e7503"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_unconstrained(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
    point_variables: Iterable[VariableLike],
    point_values: Iterable[ExpressionLike],
) -> str
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_unconstrained.98d2bf8b8ec1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_unconstrained</code></p>

```python signature
classify_unconstrained(
    objective: ExpressionLike,
    variables: Iterable[VariableLike],
    point_variables: Iterable[VariableLike],
    point_values: Iterable[ExpressionLike],
) -> str
```

</details>


Classify one given interior point — supplied as the parallel `point_variables` /
`point_values` lists — by Hessian definiteness, returning the verdict string.

### lagrange_critical_points

<a id="entry-presentation_python_optimization_capability_equations_lagrange_critical_points_api_solving_session_lagrange_critical_points"></a>
<a id="placement-placement.python.python_module.module_lagrange_critical_points.f93e590e2972"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
lagrange_critical_points(
    objective: ExpressionLike,
    constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_lagrange_critical_points.bd839c800683"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lagrange_critical_points</code></p>

```python signature
lagrange_critical_points(
    objective: ExpressionLike,
    constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

</details>


The equality-constrained critical points via Lagrange multipliers: stationarity of
\(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered
Hessian. The solved multiplier values appear in each point's multipliers.

### karush_kuhn_tucker_points

<a id="entry-presentation_python_optimization_capability_equations_karush_kuhn_tucker_points_api_solving_session_karush_kuhn_tucker_points"></a>
<a id="placement-placement.python.python_module.module_karush_kuhn_tucker_points.71459e1b55c5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
karush_kuhn_tucker_points(
    objective: ExpressionLike,
    inequality_constraints: Iterable[ExpressionLike],
    equality_constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_karush_kuhn_tucker_points.690ab946c747"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.karush_kuhn_tucker_points</code></p>

```python signature
karush_kuhn_tucker_points(
    objective: ExpressionLike,
    inequality_constraints: Iterable[ExpressionLike],
    equality_constraints: Iterable[ExpressionLike],
    variables: Iterable[VariableLike],
) -> Any
```

</details>


The Karush–Kuhn–Tucker points found by active-set enumeration. Each inequality is
read as \(\operatorname{inequality} \le 0\) and each equality as `equality = 0`. Only primal- and
dual-feasible candidates are kept; a candidate whose feasibility a sign cannot
settle is retained but classified `inconclusive`. The enumeration is bounded by a
documented cap on the number of inequalities, above which the layer declines.

## Result accessors (WASM)

On WASM the outcome and its points are objects with the following getters; on
Python the same data is returned as plain dicts.

### points

*Not exposed by the Python bindings. Available as [`UniffiOptimizationOutcome.points`](/symi/kotlin/optimization#points) in Kotlin, [`UniffiOptimizationOutcome.points`](/symi/swift/optimization#points) in Swift, [`api::results::OptimizationOutcome::points`](/symi/rust/optimization#points) in Rust.*

The list of `CriticalPoint` objects in an `OptimizationOutcome` (WASM).

### classification
The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`,
`"saddle_point"`, or `"inconclusive"`.

### multiplier_variables

*Not exposed by the Python bindings. Available as [`UniffiCriticalPoint.multiplierVariables`](/symi/kotlin/optimization#multiplier_variables) in Kotlin, [`UniffiCriticalPoint.multiplierVariables`](/symi/swift/optimization#multiplier_variables) in Swift, [`api::results::CriticalPoint::multiplier_variables`](/symi/rust/optimization#multiplier_variables) in Rust.*

The names of the introduced Lagrange / KKT multipliers at a constrained critical
point (empty for the unconstrained case).

### multiplier_values

*Not exposed by the Python bindings. Available as [`UniffiCriticalPoint.multiplierValues`](/symi/kotlin/optimization#multiplier_values) in Kotlin, [`UniffiCriticalPoint.multiplierValues`](/symi/swift/optimization#multiplier_values) in Swift, [`api::results::CriticalPoint::multiplier_values`](/symi/rust/optimization#multiplier_values) in Rust.*

The solved values of those multipliers, in the same order as `multiplier_variables`.

## Global optimization on semialgebraic sets

### global_optimum_on_semialgebraic

<a id="entry-presentation_python_optimization_capability_equations_global_optimum_on_semialgebraic_api_solving_session_global_optimum_on_semialgebraic"></a>
<a id="placement-placement.python.python_module.module_global_optimum_on_semialgebraic.0c8e65687986"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
global_optimum_on_semialgebraic(
    objective: ExpressionLike,
    constraints: ExpressionLike,
    variables: Iterable[VariableLike],
    direction: str,
) -> Any
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_global_optimum_on_semialgebraic.b1474df83839"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.global_optimum_on_semialgebraic</code></p>

```python signature
global_optimum_on_semialgebraic(
    objective: ExpressionLike,
    constraints: ExpressionLike,
    variables: Iterable[VariableLike],
    direction: str,
) -> Any
```

</details>

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

Critical points and their classification.

```python
import symi

x = symi.symbol("x")
y = symi.symbol("y")
objective = x**2 + y**2

print(symi.unconstrained_critical_points(objective, ["x", "y"]))
print(symi.lagrange_critical_points(objective, [x + y - 1], ["x", "y"]))
```


## Additional API

### classification

<a id="entry-presentation_python_optimization_capability_equations_classification_api_partial_differential_equations_partialdifferentialequationsolveresult_classification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_classification.0c853e3e8c67"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
classification: Optional[PartialDifferentialEquationClassification]
```

The exact classification the dispatcher established, when it reached one.

