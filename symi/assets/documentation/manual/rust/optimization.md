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

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_solving_session_unconstrained_critical_points_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_unconstrained_critical_points.3591302088a9"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn unconstrained_critical_points<'a, IteratorType, VariableType>(
    &self,
    objective: &Expression,
    variables: IteratorType,
) -> Result<OptimizationOutcome, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


The critical points of `objective` as the solutions of \(\nabla f = 0\), each classified
by the definiteness of the Hessian (Sylvester's criterion on the leading principal
minors). A quadratic objective yields a complete outcome; a degenerate Hessian
(`det H = 0`) classifies as `inconclusive`.

### classify_unconstrained

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_solving_session_classify_unconstrained_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_classify_unconstrained.0663660a9873"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn classify_unconstrained< 'a, 'b, IteratorType, PointIteratorType, VariableType, PointVariableType, >(
    &self,
    objective: &Expression,
    variables: IteratorType,
    point_variables: PointIteratorType,
    point_values: &[Expression],
) -> Result<ExtremumClassification, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
    PointIteratorType: IntoIterator<Item = PointVariableType>,
    PointVariableType: Into<VariableLike<'b>>,
```


Classify one given interior point — supplied as the parallel `point_variables` /
`point_values` lists — by Hessian definiteness, returning the verdict string.

### lagrange_critical_points

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_solving_session_lagrange_critical_points_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_lagrange_critical_points.541a354eab55"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn lagrange_critical_points<'a, IteratorType, VariableType>(
    &self,
    objective: &Expression,
    constraints: &[Expression],
    variables: IteratorType,
) -> Result<OptimizationOutcome, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


The equality-constrained critical points via Lagrange multipliers: stationarity of
\(L = f + \sum_i \lambda_i g_i\) together with each `constraint = 0`, classified by the bordered
Hessian. The solved multiplier values appear in each point's multipliers.

### karush_kuhn_tucker_points

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_solving_session_karush_kuhn_tucker_points_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_karush_kuhn_tucker_points.fdd2fd881de6"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn karush_kuhn_tucker_points<'a, IteratorType, VariableType>(
    &self,
    objective: &Expression,
    inequality_constraints: &[Expression],
    equality_constraints: &[Expression],
    variables: IteratorType,
) -> Result<OptimizationOutcome, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
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

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_results_optimizationoutcome_points_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome_points.3a4e9451181e"></a>
<p class="symi-entry-owner">api::results::OptimizationOutcome method</p>

```rust signature
pub fn points(&self) -> Vec<CriticalPoint>
```

The list of `CriticalPoint` objects in an `OptimizationOutcome` (WASM).

### classification
The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`,
`"saddle_point"`, or `"inconclusive"`.

### multiplier_variables

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_results_criticalpoint_multiplier_variables_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_multiplier_variables.e90952a61ebe"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn multiplier_variables(&self) -> Vec<String>
```

The names of the introduced Lagrange / KKT multipliers at a constrained critical
point (empty for the unconstrained case).

### multiplier_values

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_results_criticalpoint_multiplier_values_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_multiplier_values.4d79bc81f20d"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn multiplier_values(&self) -> Vec<Expression>
```

The solved values of those multipliers, in the same order as `multiplier_variables`.

## Global optimization on semialgebraic sets

### global_optimum_on_semialgebraic

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_solving_session_global_optimum_on_semialgebraic_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_global_optimum_on_semialgebraic.9610835a8618"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn global_optimum_on_semialgebraic<'a, IteratorType, VariableType>(
    &self,
    objective: &Expression,
    constraints: &Expression,
    variables: IteratorType,
    direction: OptimizationDirection,
) -> Result<OptimizationOutcome, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
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

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

### classification

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_partial_differential_equations_partialdifferentialequationsolveresult_classification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationsolveresult_classification.bc39d72ce99c"></a>
<p class="symi-entry-owner">api::partial_differential_equations::PartialDifferentialEquationSolveResult method</p>

```rust signature
pub fn classification(
    &self,
) -> Option<PartialDifferentialEquationClassification>
```

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`, `"saddle_point"`, or `"inconclusive"`.

### classification

<a id="entry-presentation_rust_optimization_capability_rust_native_rust_api_results_criticalpoint_classification_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_classification.819e5b768648"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn classification(&self) -> ExtremumClassification
```

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`, `"saddle_point"`, or `"inconclusive"`.

