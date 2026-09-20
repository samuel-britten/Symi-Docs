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

<a id="entry-presentation_rust_api_session_unconstrained_critical_points"></a>
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

<a id="entry-presentation_rust_api_session_classify_unconstrained"></a>
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

<a id="entry-presentation_rust_api_session_lagrange_critical_points"></a>
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

<a id="entry-presentation_rust_api_session_karush_kuhn_tucker_points"></a>
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
The list of `CriticalPoint` objects in an `OptimizationOutcome` (WASM).

<a id="entry-presentation_rust_api_optimizationoutcome_points"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome_points.3a4e9451181e"></a>
<p class="symi-entry-owner">api::results::OptimizationOutcome method</p>

```rust signature
pub fn points(&self) -> Vec<CriticalPoint>
```

The classified critical points, empty on a decline.

### classification

<a id="entry-presentation_rust_api_criticalpoint_classification"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_classification.819e5b768648"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn classification(&self) -> ExtremumClassification
```

The verdict string of a critical point: `"local_minimum"`, `"local_maximum"`,
`"saddle_point"`, or `"inconclusive"`.

### multiplier_variables
The names of the introduced Lagrange / KKT multipliers at a constrained critical
point (empty for the unconstrained case).

<a id="entry-presentation_rust_api_criticalpoint_multiplier_variables"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_multiplier_variables.e90952a61ebe"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn multiplier_variables(&self) -> Vec<String>
```

The names of the introduced Lagrange or Karush-Kuhn-Tucker multipliers.

### multiplier_values
The solved values of those multipliers, in the same order as `multiplier_variables`.

<a id="entry-presentation_rust_api_criticalpoint_multiplier_values"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_multiplier_values.4d79bc81f20d"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn multiplier_values(&self) -> Vec<Expression>
```

The value taken by each multiplier, parallel to `multiplier_variables`.

## Global optimization on semialgebraic sets

### global_optimum_on_semialgebraic

<a id="entry-presentation_rust_api_session_global_optimum_on_semialgebraic"></a>
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

### CriticalPoint

<a id="entry-presentation_rust_api_criticalpoint"></a>
<a id="placement-placement.rust.native_rust.api_criticalpoint.fb6ea799d622"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::CriticalPoint;
```

One classified critical point of an optimization problem.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_criticalpoint.cedba0c1731d"></a>
<p class="symi-entry-owner">Type: <code>api::results::CriticalPoint</code></p>

```rust signature
pub struct CriticalPoint
```

</details>

#### CriticalPoint.values

<a id="entry-presentation_rust_api_criticalpoint_values"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_values.bcdf7f87b478"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn values(&self) -> Vec<Expression>
```

The coordinate attained by each unknown, parallel to `variables`.

#### CriticalPoint.variables

<a id="entry-presentation_rust_api_criticalpoint_variables"></a>
<a id="placement-placement.rust.native_rust.api_results_criticalpoint_variables.6d6886ffaaef"></a>
<p class="symi-entry-owner">api::results::CriticalPoint method</p>

```rust signature
pub fn variables(&self) -> Vec<String>
```

The unknown names of this point's assignment, in order.

### ExtremumClassification

<a id="entry-presentation_rust_api_extremumclassification"></a>
<a id="placement-placement.rust.native_rust.api_extremumclassification.8383fe1c9605"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::ExtremumClassification;
```

The classification a critical point received from the second-order test.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_extremumclassification.dc4ea1831049"></a>
<p class="symi-entry-owner">Type: <code>api::results::ExtremumClassification</code></p>

```rust signature
pub enum ExtremumClassification
```

</details>

#### ExtremumClassification.Inconclusive

<a id="entry-presentation_rust_api_extremumclassification_inconclusive"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_inconclusive.fe5432e31620"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
Inconclusive,
```

The second-order test did not settle the point.

#### ExtremumClassification.LocalMaximum

<a id="entry-presentation_rust_api_extremumclassification_localmaximum"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_localmaximum.87cd035cd73f"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
LocalMaximum,
```

The point is a local maximum.

#### ExtremumClassification.LocalMinimum

<a id="entry-presentation_rust_api_extremumclassification_localminimum"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_localminimum.9d19c7248e90"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
LocalMinimum,
```

The point is a local minimum.

#### ExtremumClassification.SaddlePoint

<a id="entry-presentation_rust_api_extremumclassification_saddlepoint"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_saddlepoint.363b4873c973"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification variant</p>

```rust signature
SaddlePoint,
```

The point is a saddle point.

#### ExtremumClassification.name

<a id="entry-presentation_rust_api_extremumclassification_name"></a>
<a id="placement-placement.rust.native_rust.api_results_extremumclassification_name.43c94fa83e7c"></a>
<p class="symi-entry-owner">api::results::ExtremumClassification method</p>

```rust signature
pub fn name(&self) -> &'static str
```

The stable lowercase spelling shared by every binding.

### OptimizationDirection

<a id="entry-presentation_rust_api_optimizationdirection"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection.126e02b5cefb"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum OptimizationDirection
```

Whether a global optimum is sought at the minimum or the maximum.

#### OptimizationDirection.Maximize

<a id="entry-presentation_rust_api_optimizationdirection_maximize"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_maximize.c226a76d3ee4"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection variant</p>

```rust signature
Maximize,
```

Seek the global maximum.

#### OptimizationDirection.Minimize

<a id="entry-presentation_rust_api_optimizationdirection_minimize"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_minimize.b5bb0bf386da"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection variant</p>

```rust signature
Minimize,
```

Seek the global minimum.

#### OptimizationDirection.from_name

<a id="entry-presentation_rust_api_optimizationdirection_from_name"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_from_name.e0dce74498f2"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Resolve the stable spelling a binding passes across the boundary.

#### OptimizationDirection.name

<a id="entry-presentation_rust_api_optimizationdirection_name"></a>
<a id="placement-placement.rust.native_rust.api_solving_optimizationdirection_name.b4e0208816f5"></a>
<p class="symi-entry-owner">api::solving::OptimizationDirection method</p>

```rust signature
pub fn name(&self) -> &'static str
```

The stable spelling of this direction.

### OptimizationOutcome

<a id="entry-presentation_rust_api_optimizationoutcome"></a>
<a id="placement-placement.rust.native_rust.api_optimizationoutcome.8f0c2b119170"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::OptimizationOutcome;
```

The outcome of a critical-point or optimum enumeration.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome.b8d619afb7e1"></a>
<p class="symi-entry-owner">Type: <code>api::results::OptimizationOutcome</code></p>

```rust signature
pub struct OptimizationOutcome
```

</details>

#### OptimizationOutcome.complete

<a id="entry-presentation_rust_api_optimizationoutcome_complete"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome_complete.59d38f151b43"></a>
<p class="symi-entry-owner">api::results::OptimizationOutcome method</p>

```rust signature
pub fn complete(&self) -> bool
```

True only when the enumeration was certified exhaustive.

#### OptimizationOutcome.verdict

<a id="entry-presentation_rust_api_optimizationoutcome_verdict"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationoutcome_verdict.dca4ffa727c7"></a>
<p class="symi-entry-owner">api::results::OptimizationOutcome method</p>

```rust signature
pub fn verdict(&self) -> OptimizationVerdict
```

Whether the enumeration produced points or declined.

### OptimizationVerdict

<a id="entry-presentation_rust_api_optimizationverdict"></a>
<a id="placement-placement.rust.native_rust.api_optimizationverdict.02c319d61a22"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::OptimizationVerdict;
```

The verdict an optimization enumeration reached.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_optimizationverdict.490ecc8b5b8a"></a>
<p class="symi-entry-owner">Type: <code>api::results::OptimizationVerdict</code></p>

```rust signature
pub enum OptimizationVerdict
```

</details>

#### OptimizationVerdict.Declined

<a id="entry-presentation_rust_api_optimizationverdict_declined"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_declined.f8b866d0e695"></a>
<p class="symi-entry-owner">api::results::OptimizationVerdict variant</p>

```rust signature
Declined,
```

The enumeration declined.

#### OptimizationVerdict.Points

<a id="entry-presentation_rust_api_optimizationverdict_points"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_points.8a31b18bf235"></a>
<p class="symi-entry-owner">api::results::OptimizationVerdict variant</p>

```rust signature
Points,
```

The enumeration produced critical points.

#### OptimizationVerdict.name

<a id="entry-presentation_rust_api_optimizationverdict_name"></a>
<a id="placement-placement.rust.native_rust.api_results_optimizationverdict_name.ec82dab48a03"></a>
<p class="symi-entry-owner">api::results::OptimizationVerdict method</p>

```rust signature
pub fn name(&self) -> &'static str
```

The stable lowercase spelling shared by every binding.

