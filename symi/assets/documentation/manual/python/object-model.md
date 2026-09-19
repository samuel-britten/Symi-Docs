# Object model

Each class is named for the Symi operation vocabulary and spelled the way
its host language spells a class: Python uses CapWords (`Expression`,
`Point2d`), JavaScript uses PascalCase (`Expression`, `Point2d`), and Kotlin
and Swift use their UniFFI prefixed forms. The names below are given in the
shared Symi spelling; see [Names in each language](introduction.md#names_in_each_language)
for the rule that maps them onto one host.

## context

The root object. It owns the symbol table (names + assumptions) and the
hash-consed expression interner. Every constructor and every mathematical
operation is a `Context` method; results are `Expression`, `Matrix`, or
geometry objects that hold a reference back to their context. Never mix
objects from different contexts.

## expression

An immutable reference into the context's hash-consed expression tree. The
same class represents numbers, symbols, arithmetic trees, function calls,
unevaluated calculus nodes (integrals, derivatives, summations, transforms,
exact polynomial-root atoms, ODE/recurrence placeholders, piecewise) and set values (intervals, finite
sets, unions, intersections, complements, image sets, condition sets).
`expression_type` reports the top-level node kind; the `is_*` shape queries
and structural accessors (`interval_lower`, `integral_integrand`,
`union_components`, …) take the node apart.

Operations that cannot produce a closed form return an
**unevaluated node** of the matching kind rather than guessing; calling
`execute` later retries evaluation (useful after substituting values).

## matrix

A dense symbolic matrix with `Expression` entries. Constructed directly
against the default context with the class itself, via `context.matrix` for an
explicit context, via `matrix_identity`, `matrix_zero`, `matrix_diagonal`, or
returned by `jacobian` / `hessian`. Row/column indices are zero-based.

## Geometry classes

`Point2d`, `Segment2d`, `Polygon2d`, `Triangle2d`, `Circle2d` — exact
symbolic plane geometry built from `Expression` coordinates. Constructing
these classes directly uses the default context; their matching `Context`
methods provide explicit-context construction.

## undefined_function

A callable proxy for a user-named function symbol, used to build the unknown
function in ODE/recurrence equations: `y = context.undefined_function("y")`,
then `y(x)` (Python) or `y.call([x])` (JS) produces the function-call
expression `y(x)`.

## Result-shape classes (WASM only)

Where the Python binding returns tuples, the WASM binding returns small
classes with named getters:

| class | getters | returned by |
|---|---|---|
| `RootMultiplicity` | `root`, `multiplicity` | `rootsWithMultiplicities` |
| `Eigenpair` | `eigenvalue`, `vectors` | `eigenvectors` |
| `PrimeFactor` | `prime`, `multiplicity` | `factorInteger` |
| `IsolatingInterval` | `lower`, `upper` | `isolateRealRoots` |
| `QuadraticContinuedFractionExpansion` | `initialTerms`, `periodicTerms` | `continuedFractionQuadraticIrrational` |
| `VertexAngle` | `vertex`, `angle` | `interiorAngles` |

## Three-valued logic

Assumption and set queries (`is_real`, `is_positive`, `is_integer`,
`is_rational`, `is_negative`, `is_nonzero`, `is_finite`, `is_member`,
`is_subset`, `is_prime`) are three-valued: a definite yes/no on structural
proof, otherwise "unknown" (`None` in Python, `undefined` in JS). Unknown
means *undecided*, never *false*.

## Example

Every object records its owner, so a value keeps working only inside the context that made it.

```python
import symi

first = symi.Context()
second = symi.Context()
x = first.symbol("x")

print(first.integrate(first.sin(x), x))
try:
    second.differentiate(x, "x")
except RuntimeError as error:
    print(error.category, error.parameter_path)
```


## Additional API

### AssumptionProposition

<a id="entry-presentation_python_object_model_capability_contexts_assumption_proposition_api_assumptionproposition"></a>
<a id="placement-placement.python.python_class.assumptionproposition.dbbb3effee02"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class AssumptionProposition
```

A typed immutable assumption proposition owned by a Python context.

### AssumptionScope

<a id="entry-presentation_python_object_model_capability_contexts_assumption_scope_api_assumptionscope"></a>
<a id="placement-placement.python.python_class.assumptionscope.f98eede99dab"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class AssumptionScope
```

An immutable local assumption scope owned by a Python context.

### Context

<a id="entry-presentation_python_object_model_capability_contexts_context_api_session"></a>
<a id="placement-placement.python.python_class.context.a37e22f21fdc"></a>
<p class="symi-entry-owner">Context constructor</p>

```python signature
Context()
```

Create an isolated context with its own symbol table, interner, and assumptions.

### Expression

<a id="entry-presentation_python_object_model_capability_contexts_expression_api_expression"></a>
<a id="placement-placement.python.python_class.expression.f1defafa2138"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class Expression
```

A symbolic expression owned by the context that built it.

### PartialDifferentialEquationArbitraryFunction

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_partialdifferentialequationarbitraryfunction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction.bf6b31e5359a"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationArbitraryFunction
```

A collision-free arbitrary function allocated for a PDE candidate.

### PartialDifferentialEquationCanonicalizationResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_canonicalization_result_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult.db76eb5b02c5"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationCanonicalizationResult
```

The verified canonical coordinates or typed decline from automatic canonicalization.

### PartialDifferentialEquationClassification

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_classification_api_partial_differential_equations_partialdifferentialequationclassification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification.2853e3416a17"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationClassification
```

Exact structural analysis data for one scalar partial differential equation.

### PartialDifferentialEquationCoordinateChange

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_coordinate_change_api_partial_differential_equations_partialdifferentialequationcoordinatechange"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange.a6259e7fc3ae"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationCoordinateChange
```

A validated exact two-variable change of independent variables.

### PartialDifferentialEquationPointSymmetryAction

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationpointsymmetryaction_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction.054567b401b6"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryAction
```

The connected local point-symmetry action of a PDE, or its typed decline.

### PartialDifferentialEquationPointSymmetryAlgebra

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationpointsymmetryalgebra_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra.43e8e8506d73"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryAlgebra
```

The derived point-symmetry algebra of a PDE, or its typed decline.

### PartialDifferentialEquationPointSymmetryGenerator

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationpointsymmetrygenerator_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator.46dc178a0b19"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationPointSymmetryGenerator
```

One point-symmetry generator of a PDE, given by its infinitesimals.

### PartialDifferentialEquationProblem

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_problem_api_partial_differential_equations_partialdifferentialequationproblem"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem.814ddc0a0b7c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationProblem
```

A validated scalar partial differential equation owned by one Python context.

### PartialDifferentialEquationSecondOrderClassification

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_second_order_classification_api_partial_differential_equations_partialdifferentialequationsecondorderclassification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification.79bcc28d4c8c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSecondOrderClassification
```

Exact real elliptic, parabolic, or hyperbolic analysis of a second-order equation.

### PartialDifferentialEquationSecondOrderTypeCase

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_second_order_type_case_api_partial_differential_equations_partialdifferentialequationsecondordertypecase"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase.937ad2b74813"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSecondOrderTypeCase
```

One exact condition and the classical second-order type proved under it.

### PartialDifferentialEquationSeparatedEquation

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_separated_equation_api_partial_differential_equations_partialdifferentialequationseparatedequation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation.363214c4f25b"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSeparatedEquation
```

One exact separated ordinary differential equation exposed by a PDE transformation.

### PartialDifferentialEquationSeparationResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_separation_result_api_partial_differential_equations_partialdifferentialequationseparationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult.6eb4b5859523"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSeparationResult
```

A verified directed separation transformation with its two exact ODE factors.

### PartialDifferentialEquationSimilaritySolution

<a id="entry-presentation_python_object_model_capability_contexts_partialdifferentialequationsimilaritysolution_api_partial_differential_equations_partialdifferentialequationsimilaritysolution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution.63b8526ae52f"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSimilaritySolution
```

The invariant solutions of a PDE under one point symmetry, or a typed decline.

### PartialDifferentialEquationSolutionFamily

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_solution_family_api_partial_differential_equations_partialdifferentialequationsolutionfamily"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily.342004c3830c"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSolutionFamily
```

An explicit or implicit PDE candidate solution family.

### PartialDifferentialEquationSolveResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_solve_result_api_partial_differential_equations_partialdifferentialequationsolveresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult.9ba510b691a3"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationSolveResult
```

The sound result or typed decline from PDE dispatch.

### PartialDifferentialEquationTransformationResult

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_transformation_result_api_partial_differential_equations_partialdifferentialequationtransformationresult"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult.d20831abed72"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationTransformationResult
```

The transformed problem or typed decline from an exact change of variables.

### PartialDifferentialEquationTransformationVerificationReport

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_transformation_verification_report_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport.d3734a054b14"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationTransformationVerificationReport
```

Independent exact evidence that a coordinate transformation is correct.

### PartialDifferentialEquationVerificationReport

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_verification_report_api_partial_differential_equations_partialdifferentialequationverificationreport"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport.53d4e9c949a7"></a>
<p class="symi-entry-owner">Type</p>

```python signature
class PartialDifferentialEquationVerificationReport
```

Independent exact verification evidence for a PDE candidate solution.

### __add__

<a id="entry-presentation_python_object_model_capability_contexts_add_unresolved"></a>
<a id="placement-placement.python.python_class.expression_add.58a4bd4dd71b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__add__(other: Any) -> Expression
```

Sum `self + other`, returning a new expression.

### __bool__

<a id="entry-presentation_python_object_model_capability_contexts_bool_unresolved"></a>
<a id="placement-placement.python.python_class.expression_bool.69418ace2aed"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__bool__() -> bool
```

Always raises: symbolic truth is three-valued, so use `evaluate_truth` instead.

### __call__

<a id="entry-presentation_python_object_model_capability_contexts_call_unresolved"></a>
<a id="placement-placement.python.python_class.undefinedfunction_call.e796dd930962"></a>
<p class="symi-entry-owner">UndefinedFunction method</p>

```python signature
__call__(*arguments: Any) -> Expression
```

Apply the named function to `arguments`, building an unevaluated `function_call`.

### __eq__

<a id="entry-presentation_python_object_model_capability_contexts_eq_unresolved"></a>
<a id="placement-placement.python.python_class.expression_eq.5a2d56342b69"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__eq__(other: Any) -> bool
```

Structural equality of two expressions from the same live context; use `equal` to build a relation.

### __getattribute__

<a id="entry-presentation_python_object_model_capability_contexts_getattribute_unresolved"></a>
<a id="placement-placement.python.python_class.expression_getattribute.76962b06f74d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__getattribute__(name: str) -> Any
```

Reject attribute access on a stale object before delegating to the default lookup.

### __hash__

<a id="entry-presentation_python_object_model_capability_contexts_hash_unresolved"></a>
<a id="placement-placement.python.python_class.expression_hash.fcf6ce555e16"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__hash__() -> int
```

Hash consistent with structural equality, so expressions can key a dict or set.

### __iter__

<a id="entry-presentation_python_object_model_capability_contexts_iter_unresolved"></a>
<a id="placement-placement.python.python_class.expression_iter.f81354937f72"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__iter__() -> Any
```

Iterate the elements of a `finite_set` expression.

### __len__

<a id="entry-presentation_python_object_model_capability_contexts_len_unresolved"></a>
<a id="placement-placement.python.python_class.expression_len.d43139256aa0"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__len__() -> int
```

Number of elements of a `finite_set` expression.

### __mul__

<a id="entry-presentation_python_object_model_capability_contexts_mul_unresolved"></a>
<a id="placement-placement.python.python_class.expression_mul.605ba0478e43"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__mul__(other: Any) -> Expression
```

Product `self * other`, returning a new expression.

### __ne__

<a id="entry-presentation_python_object_model_capability_contexts_ne_unresolved"></a>
<a id="placement-placement.python.python_class.expression_ne.8cbf473dc2ff"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__ne__(other: Any) -> bool
```

Structural inequality, the negation of `__eq__`.

### __neg__

<a id="entry-presentation_python_object_model_capability_contexts_neg_unresolved"></a>
<a id="placement-placement.python.python_class.expression_neg.ef8096e95741"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__neg__() -> Expression
```

Negation `-self`, returning a new expression.

### __pow__

<a id="entry-presentation_python_object_model_capability_contexts_pow_unresolved"></a>
<a id="placement-placement.python.python_class.expression_pow.ac2cb53ba3dc"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__pow__(exponent: Any, modulo: Optional[Any] = ...) -> Expression
```

Power `self ** exponent`; the three-argument form is rejected.

### __radd__

<a id="entry-presentation_python_object_model_capability_contexts_radd_unresolved"></a>
<a id="placement-placement.python.python_class.expression_radd.b3f9590b78f9"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__radd__(other: Any) -> Expression
```

Sum `other + self`, returning a new expression.

### __repr__

<a id="entry-presentation_python_object_model_capability_contexts_repr_unresolved"></a>
<a id="placement-placement.python.python_class.expression_repr.51e3a215dd82"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__repr__() -> str
```

The `repr()` text, which reports staleness instead of failing.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_repr.b3dee485a3ee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method: <code>PartialDifferentialEquationProblem.__repr__</code></p>

```python signature
__repr__() -> str
```

<a id="placement-placement.python.python_class.undefinedfunction_repr.8398a418ad39"></a>
<p class="symi-entry-owner">UndefinedFunction method: <code>UndefinedFunction.__repr__</code></p>

```python signature
__repr__() -> str
```

</details>

### __rmul__

<a id="entry-presentation_python_object_model_capability_contexts_rmul_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rmul.fd487c5f63ce"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rmul__(other: Any) -> Expression
```

Product `other * self`, returning a new expression.

### __rpow__

<a id="entry-presentation_python_object_model_capability_contexts_rpow_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rpow.ea98d5ba5b89"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rpow__(base: Any, modulo: Optional[Any] = ...) -> Expression
```

Power `base ** self`; the three-argument form is rejected.

### __rsub__

<a id="entry-presentation_python_object_model_capability_contexts_rsub_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rsub.2815deb80733"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rsub__(other: Any) -> Expression
```

Difference `other - self`, returning a new expression.

### __rtruediv__

<a id="entry-presentation_python_object_model_capability_contexts_rtruediv_unresolved"></a>
<a id="placement-placement.python.python_class.expression_rtruediv.f1cdc35ec1fa"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__rtruediv__(other: Any) -> Expression
```

Quotient `other / self`, returning a new expression.

### __str__

<a id="entry-presentation_python_object_model_capability_contexts_str_unresolved"></a>
<a id="placement-placement.python.python_class.expression_str.329819f4a97c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__str__() -> str
```

The mathematical text of the expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_str.4c1fd8746e1e"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.__str__</code></p>

```python signature
__str__() -> str
```

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_str.6a17cc0d3853"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem method: <code>PartialDifferentialEquationProblem.__str__</code></p>

```python signature
__str__() -> str
```

</details>

### __sub__

<a id="entry-presentation_python_object_model_capability_contexts_sub_unresolved"></a>
<a id="placement-placement.python.python_class.expression_sub.f0d35560c2a2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__sub__(other: Any) -> Expression
```

Difference `self - other`, returning a new expression.

### __truediv__

<a id="entry-presentation_python_object_model_capability_contexts_truediv_unresolved"></a>
<a id="placement-placement.python.python_class.expression_truediv.14a00eccae14"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
__truediv__(other: Any) -> Expression
```

Quotient `self / other`, returning a new expression.

### add

<a id="entry-presentation_python_object_model_capability_contexts_add_api_matrix_add"></a>
<a id="placement-placement.python.python_class.matrix_add.ab8ce536842a"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
add(other: Matrix) -> Matrix
```

Entrywise sum of two matrices of the same shape.

### admits_additive_solution_symmetry

<a id="entry-presentation_python_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry.a40e17458d0a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
admits_additive_solution_symmetry: bool
```

Whether the action adds an arbitrary solution by linear superposition.

### admits_additive_solution_symmetry

<a id="entry-presentation_python_object_model_capability_contexts_admits_additive_solution_symmetry_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry.0efa3cd7d81a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
admits_additive_solution_symmetry: bool
```

Whether adding any solution of the linear homogeneous equation is also a symmetry.

### amplitude

<a id="entry-presentation_python_object_model_capability_contexts_amplitude_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_amplitude"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_amplitude.0452aee1f4e0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
amplitude: Optional[expression]
```

The amplitude multiplying the transformed seed.

### applied_to_seed

<a id="entry-presentation_python_object_model_capability_contexts_applied_to_seed_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed.43551abec47e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```python signature
applied_to_seed(seed: undefined_function) -> expression
```

The transformed seed solution under the action.

### applied_to_seed_with_additive_solution

<a id="entry-presentation_python_object_model_capability_contexts_applied_to_seed_with_additive_solution_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution.68bd4a5f4310"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction method</p>

```python signature
applied_to_seed_with_additive_solution(
    seed: undefined_function,
    additive_solution: undefined_function,
) -> expression
```

The transformed seed solution plus an added solution under the action.

### arbitrary_functions

<a id="entry-presentation_python_object_model_capability_contexts_arbitrary_functions_api_partial_differential_equations_partialdifferentialequationsolutionfamily_arbitrary_functions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_arbitrary_functions.299cc635305d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
arbitrary_functions: list[PartialDifferentialEquationArbitraryFunction]
```

The functions that stay arbitrary and opaque throughout verification.

### arity

<a id="entry-presentation_python_object_model_capability_contexts_arity_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_arity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_arity.84a63ebfd4de"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```python signature
arity: int
```

The recorded and validated function arity.

### basis

<a id="entry-presentation_python_object_model_capability_contexts_basis_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_basis"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_basis.6303fe70e9f9"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
basis: list[partial_differential_equation_point_symmetry_generator]
```

The independently verified basis generators, one per parameter.

### boundary_condition_residuals

<a id="entry-presentation_python_object_model_capability_contexts_boundary_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_boundary_condition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_boundary_condition_residuals.d27e4537a107"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
boundary_condition_residuals: list[PartialDifferentialEquationVerificationResidual]
```

One reduced residual per boundary condition, in insertion order.

### boundary_conditions

<a id="entry-presentation_python_object_model_capability_contexts_boundary_conditions_api_partial_differential_equations_partialdifferentialequationproblem_boundary_conditions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_boundary_conditions.8f03369049ed"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
boundary_conditions: list[Expression]
```

The boundary-condition residuals in insertion order.

### canonicalize_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_canonicalize_partial_differential_equation_api_partial_differential_equations_session_canonicalize_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_canonicalize_partial_differential_equation.a52ec715a39a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
canonicalize_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationCanonicalizationResult
```

Construct and independently verify exact canonical coordinates for a supported PDE.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_canonicalize_partial_differential_equation.c15668c55ef8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.canonicalize_partial_differential_equation</code></p>

```python signature
canonicalize_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationCanonicalizationResult
```

</details>

### canonicalized

<a id="entry-presentation_python_object_model_capability_contexts_canonicalized_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_canonicalized"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_canonicalized.b7cda59605f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
canonicalized: bool
```

Whether verified canonical coordinates were constructed.

### cases

<a id="entry-presentation_python_object_model_capability_contexts_cases_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_cases"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_cases.f2ecce2bacf2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
cases: list[PartialDifferentialEquationSecondOrderTypeCase]
```

The complete exact case table, when the verdict is conditional.

### change_partial_differential_equation_variables

<a id="entry-presentation_python_object_model_capability_contexts_change_partial_differential_equation_variables_api_partial_differential_equations_session_change_partial_differential_equation_variables"></a>
<a id="placement-placement.python.python_module.module_change_partial_differential_equation_variables.ea81302fbc97"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
change_partial_differential_equation_variables(
    problem: PartialDifferentialEquationProblem,
    target_variables: Iterable[VariableLike],
    forward_coordinates: Optional[Iterable[ExpressionLike]] = None,
    inverse_coordinates: Optional[Iterable[ExpressionLike]] = None,
    target_dependent_function: Optional[Any] = None,
) -> PartialDifferentialEquationTransformationResult
```

Transform a two-variable PDE through an exact user-supplied change of variables.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_change_partial_differential_equation_variables.2c37631230c9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.change_partial_differential_equation_variables</code></p>

```python signature
change_partial_differential_equation_variables(
    problem: PartialDifferentialEquationProblem,
    target_variables: Iterable[VariableLike],
    forward_coordinates: Optional[Iterable[ExpressionLike]] = None,
    inverse_coordinates: Optional[Iterable[ExpressionLike]] = None,
    target_dependent_function: Optional[Any] = None,
) -> PartialDifferentialEquationTransformationResult
```

</details>

### claimed_governing_residual

<a id="entry-presentation_python_object_model_capability_contexts_claimed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_claimed_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_claimed_governing_residual.feccf290837c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
claimed_governing_residual: Expression
```

The governing residual the transformation claimed.

### classify_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_classify_partial_differential_equation_api_partial_differential_equations_session_classify_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_classify_partial_differential_equation.35014b001694"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationClassification
```

Classify a validated scalar partial differential equation with exact structural analysis.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_partial_differential_equation.f80771a4e3c1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_partial_differential_equation</code></p>

```python signature
classify_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationClassification
```

</details>

### classify_second_order_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_classify_second_order_partial_differential_equation_api_partial_differential_equations_session_classify_second_order_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_classify_second_order_partial_differential_equation.4366ea8e6378"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
classify_second_order_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSecondOrderClassification
```

Classify a two-variable linear second-order PDE over real coordinates.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_classify_second_order_partial_differential_equation.7f924f5a5610"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.classify_second_order_partial_differential_equation</code></p>

```python signature
classify_second_order_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSecondOrderClassification
```

</details>

### coefficient_data

<a id="entry-presentation_python_object_model_capability_contexts_coefficient_data_api_partial_differential_equations_partialdifferentialequationclassification_coefficient_data"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_coefficient_data.d0f091b30ed3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
coefficient_data: PartialDifferentialEquationCoefficientData
```

The exact affine coefficient data extracted from the governing residual.

### complex_entries

<a id="entry-presentation_python_object_model_capability_contexts_complex_entries_api_session_complex_entries"></a>
<a id="placement-placement.python.python_module.module_complex_entries.ad74d94f6a7e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complex_entries(subject: Matrix) -> AssumptionProposition
```

Build a finite-complex-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complex_entries.5f2958b71aba"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complex_entries</code></p>

```python signature
complex_entries(subject: Matrix) -> AssumptionProposition
```

</details>

### components

<a id="entry-presentation_python_object_model_capability_contexts_components_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_components"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_components.ce8bfaadda21"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
components: list[expression]
```

One explicit value per declared unknown, in declaration order, when solved.

### composition_residuals

<a id="entry-presentation_python_object_model_capability_contexts_composition_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_composition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_composition_residuals.d9fedd58e205"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
composition_residuals: list[Expression]
```

Every forward and inverse map-composition residual.

### condition

<a id="entry-presentation_python_object_model_capability_contexts_condition_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_condition"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_condition.2de3ae8d0f76"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```python signature
condition: AssumptionProposition
```

The exact condition under which this case's classical type holds.

### coordinate_change

<a id="entry-presentation_python_object_model_capability_contexts_coordinate_change_api_partial_differential_equations_partialdifferentialequationtransformationresult_coordinate_change"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_coordinate_change.c0a6c7f8c2c7"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
coordinate_change: Optional[PartialDifferentialEquationCoordinateChange]
```

The validated coordinate change of a successful transformation.

### coordinate_infinitesimals

<a id="entry-presentation_python_object_model_capability_contexts_coordinate_infinitesimals_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals.433d9a3c7be8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```python signature
coordinate_infinitesimals: list[expression]
```

The coordinate infinitesimals in the problem's independent-variable order.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_decline"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_decline.97b6a3b080c9"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
decline: Optional[str]
```

The typed reason no certified candidate was produced.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_decline"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_decline.73605e35c453"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
decline: Optional[str]
```

The typed reason no certified assignment was produced.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_decline.209eebc522b0"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
decline: Optional[str]
```

The exact reason automatic canonicalization declined.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_decline.ec0449047038"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
decline: Optional[str]
```

The typed reason the action was not constructed.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_decline.926d29357a74"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
decline: Optional[str]
```

The typed reason the algebra was not derived.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_decline.66efe7a284d8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
decline: Optional[str]
```

The exact reason an unknown analysis could not be completed.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_decline.1993ab6269f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
decline: Optional[str]
```

The typed reason no similarity family was produced.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationsolveresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_decline.5ec3951f6b50"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
decline: Optional[str]
```

The stable decline reason, when no solution was produced.

### decline

<a id="entry-presentation_python_object_model_capability_contexts_decline_api_partial_differential_equations_partialdifferentialequationtransformationresult_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_decline.51f4aa097b90"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
decline: Optional[str]
```

The exact reason no transformation was produced.

### dependent_function

<a id="entry-presentation_python_object_model_capability_contexts_dependent_function_api_partial_differential_equations_partialdifferentialequationproblem_dependent_function"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_dependent_function.b24dfa1c2033"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
dependent_function: str
```

The declared dependent-function name.

### dependent_infinitesimal

<a id="entry-presentation_python_object_model_capability_contexts_dependent_infinitesimal_api_partial_differential_equations_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal.418e6bc28927"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryGenerator property</p>

```python signature
dependent_infinitesimal: expression
```

The dependent infinitesimal of the generator.

### derivative_coefficients

<a id="entry-presentation_python_object_model_capability_contexts_derivative_coefficients_api_partial_differential_equations_partialdifferentialequationprincipalpart_derivative_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationprincipalpart_derivative_coefficients.1a0212ab6c98"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalPart property</p>

```python signature
derivative_coefficients: list[PartialDifferentialEquationPrincipalCoefficient]
```

The raw mixed-derivative coefficients, before symmetrization halves them.

### derivative_orders

<a id="entry-presentation_python_object_model_capability_contexts_derivative_orders_unresolved"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationjetcoefficient_derivative_orders.f1ad7bc43c9f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationJetCoefficient property</p>

```python signature
derivative_orders: list[int]
```

The derivative multi-index of the jet this coefficient multiplies.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.partialdifferentialequationprincipalcoefficient_derivative_orders.a56dfe30a372"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPrincipalCoefficient property: <code>PartialDifferentialEquationPrincipalCoefficient.derivative_orders</code></p>

```python signature
derivative_orders: list[int]
```

</details>

### determining_equations

<a id="entry-presentation_python_object_model_capability_contexts_determining_equations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_determining_equations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_determining_equations.41a1666298dc"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
determining_equations: list[expression]
```

The determining equations exactly as derived, before any reduction.

### diagonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_diagonal_matrix_api_session_diagonal_matrix"></a>
<a id="placement-placement.python.python_module.module_diagonal_matrix.cb2bd3eae1d2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
diagonal_matrix(subject: Matrix) -> AssumptionProposition
```

Build a diagonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_diagonal_matrix.d5c6b8521631"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.diagonal_matrix</code></p>

```python signature
diagonal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### differentiate_bulk

<a id="entry-presentation_python_object_model_capability_contexts_differentiate_bulk_api_session_differentiate_bulk"></a>
<a id="placement-placement.python.python_module.module_differentiate_bulk.362ccffbf089"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
differentiate_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
) -> Any
```

Differentiate an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_differentiate_bulk.2900b36d44c8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.differentiate_bulk</code></p>

```python signature
differentiate_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
) -> Any
```

</details>

### discharged_obligations

<a id="entry-presentation_python_object_model_capability_contexts_discharged_obligations_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_discharged_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_discharged_obligations.4dd3fc6c7d13"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
discharged_obligations: list[str]
```

The obligations discharged by exact query before the solution was returned.

### discover_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_discover_partial_differential_equation_api_partial_differential_equations_session_discover_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_discover_partial_differential_equation.52ddbbb333c3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
discover_partial_differential_equation(
    equation: ExpressionInput,
    initial_conditions: Optional[ExpressionCollectionInput] = None,
    boundary_conditions: Optional[ExpressionCollectionInput] = None,
) -> PartialDifferentialEquationProblem
```

Discover the unique scalar partial differential equation signature from one governing residual, in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_discover_partial_differential_equation.65f033d1c9b8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.discover_partial_differential_equation</code></p>

```python signature
discover_partial_differential_equation(
    equation: ExpressionLike,
    initial_conditions: Iterable[ExpressionLike] = None,
    boundary_conditions: Iterable[ExpressionLike] = None,
) -> PartialDifferentialEquationProblem
```

</details>

### discriminant

<a id="entry-presentation_python_object_model_capability_contexts_discriminant_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_discriminant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_discriminant.eb5014c76a4a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
discriminant: Expression
```

The exact discriminant `b^2 - a*c` of the symmetric principal matrix.

### equation_type

<a id="entry-presentation_python_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_equation_type"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_equation_type.e904ef6cfc4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
equation_type: Optional[str]
```

The single proved classical type, when the verdict is definite.

### equation_type

<a id="entry-presentation_python_object_model_capability_contexts_equation_type_api_partial_differential_equations_partialdifferentialequationsecondordertypecase_equation_type"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_equation_type.e9d6236bfae8"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderTypeCase property</p>

```python signature
equation_type: str
```

The classical type proved under this case's condition.

### evaluate_numeric_bulk

<a id="entry-presentation_python_object_model_capability_contexts_evaluate_numeric_bulk_api_session_evaluate_numeric_bulk"></a>
<a id="placement-placement.python.python_module.module_evaluate_numeric_bulk.80f5ed832fcb"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
evaluate_numeric_bulk(targets: PythonExpressionCollectionInput) -> Any
```

Evaluate an ordered collection numerically in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_evaluate_numeric_bulk.98a931a15f6a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evaluate_numeric_bulk</code></p>

```python signature
evaluate_numeric_bulk(targets: PythonExpressionCollectionInput) -> Any
```

</details>

### expand_bulk

<a id="entry-presentation_python_object_model_capability_contexts_expand_bulk_api_session_expand_bulk"></a>
<a id="placement-placement.python.python_module.module_expand_bulk.dfeb447b0fd8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expand_bulk(targets: PythonExpressionCollectionInput) -> Any
```

Expand an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expand_bulk.0e3995efc016"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expand_bulk</code></p>

```python signature
expand_bulk(targets: PythonExpressionCollectionInput) -> Any
```

</details>

### explicit_branch

<a id="entry-presentation_python_object_model_capability_contexts_explicit_branch_api_partial_differential_equations_partialdifferentialequationverificationreport_explicit_branch"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_explicit_branch.c215fb42d5ba"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
explicit_branch: Optional[Expression]
```

The isolated explicit branch checked for an implicit candidate.

### explicit_partial_differential_equation_solution

<a id="entry-presentation_python_object_model_capability_contexts_explicit_partial_differential_equation_solution_api_partial_differential_equations_session_explicit_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_explicit_partial_differential_equation_solution.2a00578eaf74"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
explicit_partial_differential_equation_solution(
    solution: ExpressionInput,
    arbitrary_functions: Optional[list[PartialDifferentialEquationArbitraryFunction]] = None,
    proof_obligations: Optional[list[str]] = None,
) -> PartialDifferentialEquationSolutionFamily
```

Create an explicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_explicit_partial_differential_equation_solution.ed2a21850eb6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.explicit_partial_differential_equation_solution</code></p>

```python signature
explicit_partial_differential_equation_solution(
    solution: ExpressionLike,
    arbitrary_functions: Any = ...,
    proof_obligations: Any = ...,
) -> PartialDifferentialEquationSolutionFamily
```

</details>

### expression

<a id="entry-presentation_python_object_model_capability_contexts_expression_unresolved"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_expression.c54e5da11722"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
expression: Expression
```

The exact candidate expression carried by this family.

### first_equation

<a id="entry-presentation_python_object_model_capability_contexts_first_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_first_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_first_equation.da9731e36890"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
first_equation: PartialDifferentialEquationSeparatedEquation
```

The first exact separated ODE.

### form

<a id="entry-presentation_python_object_model_capability_contexts_form_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_form"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_form.fb9c33113e1f"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
form: Optional[str]
```

Whether the solution is the value of the unknown or a relation read as zero.

### form

<a id="entry-presentation_python_object_model_capability_contexts_form_api_partial_differential_equations_partialdifferentialequationsolutionfamily_form"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_form.1c89bcadafda"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
form: Any
```

Whether this candidate is an `explicit` value or an `implicit` residual.

### forward_coordinates

<a id="entry-presentation_python_object_model_capability_contexts_forward_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_forward_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_forward_coordinates.02503a3a9116"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
forward_coordinates: list[Expression]
```

The ordered source-to-target coordinate expressions.

### frequency_domain_equation

<a id="entry-presentation_python_object_model_capability_contexts_frequency_domain_equation_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_frequency_domain_equation"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_frequency_domain_equation.d67bda0a2e26"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
frequency_domain_equation: Optional[expression]
```

The frequency-domain equation of a Laplace transform solution, read as zero.

### full_coefficients

<a id="entry-presentation_python_object_model_capability_contexts_full_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_full_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_full_coefficients.daaae70574cb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
full_coefficients: Optional[list[PartialDifferentialEquationJetCoefficient]]
```

Every jet coefficient, when the equation is exactly linear.

### full_rank_matrix

<a id="entry-presentation_python_object_model_capability_contexts_full_rank_matrix_api_session_full_rank_matrix"></a>
<a id="placement-placement.python.python_module.module_full_rank_matrix.bca25f7ee25a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
full_rank_matrix(subject: Matrix) -> AssumptionProposition
```

Build a full-rank-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_full_rank_matrix.927198cb7f5e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.full_rank_matrix</code></p>

```python signature
full_rank_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### general_generator

<a id="entry-presentation_python_object_model_capability_contexts_general_generator_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_general_generator"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_general_generator.606696d514c2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
general_generator: Optional[partial_differential_equation_point_symmetry_generator]
```

The general generator, a combination of the basis through the parameters.

### generality

<a id="entry-presentation_python_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generality.69c1f19a3095"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
generality: Optional[str]
```

The rank decision behind a complete-family claim, when the request required one.

### generality

<a id="entry-presentation_python_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generality.29335d39f0fd"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
generality: Optional[str]
```

The rank decision on the constants-to-initial-jet map, when verification ran.

### generality

<a id="entry-presentation_python_object_model_capability_contexts_generality_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_generality"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_generality.dc50930dc8fc"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
generality: str
```

The rank decision on the map from the supplied constants to the initial jet.

### generated_constants

<a id="entry-presentation_python_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_generated_constants"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generated_constants.76586028281a"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
generated_constants: list[expression]
```

Exactly the constants the solution treats as free.

### generated_constants

<a id="entry-presentation_python_object_model_capability_contexts_generated_constants_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_generated_constants"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generated_constants.f8b463ed4cc5"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
generated_constants: list[expression]
```

Exactly the constants the assignment treats as free.

### governing_residual

<a id="entry-presentation_python_object_model_capability_contexts_governing_residual_api_partial_differential_equations_partialdifferentialequationverificationreport_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_governing_residual.174594f9f244"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
governing_residual: Any
```

Independently reduced governing-equation evidence.

### has_complex_entries

<a id="entry-presentation_python_object_model_capability_contexts_has_complex_entries_api_matrix_has_complex_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_complex_entries.e69d7e187678"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_complex_entries() -> Optional[bool]
```

Query whether every entry is finite complex.

### has_integer_entries

<a id="entry-presentation_python_object_model_capability_contexts_has_integer_entries_api_matrix_has_integer_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_integer_entries.3fe8e758b6ff"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_integer_entries() -> Optional[bool]
```

Query whether every entry is an integer.

### has_real_entries

<a id="entry-presentation_python_object_model_capability_contexts_has_real_entries_api_matrix_has_real_entries"></a>
<a id="placement-placement.python.python_class.matrix_has_real_entries.5b15ebbe5ce6"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
has_real_entries() -> Optional[bool]
```

Query whether every entry is real.

### hermitian_matrix

<a id="entry-presentation_python_object_model_capability_contexts_hermitian_matrix_api_session_hermitian_matrix"></a>
<a id="placement-placement.python.python_module.module_hermitian_matrix.9fe4c0c586b6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
hermitian_matrix(subject: Matrix) -> AssumptionProposition
```

Build a Hermitian-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_hermitian_matrix.b735ad83a78d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.hermitian_matrix</code></p>

```python signature
hermitian_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### highest_order_coefficients

<a id="entry-presentation_python_object_model_capability_contexts_highest_order_coefficients_api_partial_differential_equations_partialdifferentialequationcoefficientdata_highest_order_coefficients"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_highest_order_coefficients.8b4789085db5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
highest_order_coefficients: Optional[list[PartialDifferentialEquationJetCoefficient]]
```

The highest-order jet coefficients, when the equation is affine in them.

### homogeneous

<a id="entry-presentation_python_object_model_capability_contexts_homogeneous_api_partial_differential_equations_partialdifferentialequationcoefficientdata_homogeneous"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_homogeneous.dbe994183f40"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
homogeneous: Optional[bool]
```

Whether the equation was proved homogeneous, when that statement is meaningful.

### identity_matrix

<a id="entry-presentation_python_object_model_capability_contexts_identity_matrix_api_session_identity_matrix"></a>
<a id="placement-placement.python.python_module.module_identity_matrix.4d6c93f48f1e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
identity_matrix(subject: Matrix) -> AssumptionProposition
```

Build an identity-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_identity_matrix.0ebf4e138e96"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.identity_matrix</code></p>

```python signature
identity_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### image

<a id="entry-presentation_python_object_model_capability_contexts_image_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_image"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_image.423aa8e2cc90"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
image: Optional[expression]
```

The image of the unknown a Laplace transform solution solved for.

### implicit_partial_differential_equation_solution

<a id="entry-presentation_python_object_model_capability_contexts_implicit_partial_differential_equation_solution_api_partial_differential_equations_session_implicit_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_implicit_partial_differential_equation_solution.192367f01daf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
implicit_partial_differential_equation_solution(
    residual: ExpressionInput,
    arbitrary_functions: Optional[list[PartialDifferentialEquationArbitraryFunction]] = None,
    proof_obligations: Optional[list[str]] = None,
) -> PartialDifferentialEquationSolutionFamily
```

Create an implicit partial differential equation solution family in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_implicit_partial_differential_equation_solution.d565ff6b0430"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.implicit_partial_differential_equation_solution</code></p>

```python signature
implicit_partial_differential_equation_solution(
    residual: ExpressionLike,
    arbitrary_functions: Any = ...,
    proof_obligations: Any = ...,
) -> PartialDifferentialEquationSolutionFamily
```

</details>

### inconclusive_reason

<a id="entry-presentation_python_object_model_capability_contexts_inconclusive_reason_api_partial_differential_equations_partialdifferentialequationverificationreport_inconclusive_reason"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_inconclusive_reason.b874f0a79d2b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
inconclusive_reason: Optional[str]
```

The deterministic reason verification could not reach a proof.

### independent_variable_name

<a id="entry-presentation_python_object_model_capability_contexts_independent_variable_name_api_partial_differential_equations_partialdifferentialequationseparatedequation_independent_variable_name"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_independent_variable_name.bd1a8a824c6d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```python signature
independent_variable_name: str
```

The name of this ODE's independent variable.

### independent_variables

<a id="entry-presentation_python_object_model_capability_contexts_independent_variables_api_partial_differential_equations_partialdifferentialequationproblem_independent_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_independent_variables.fbea44b1e2dd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
independent_variables: list[str]
```

The independent variables in their semantic declared order.

### initial_condition_residuals

<a id="entry-presentation_python_object_model_capability_contexts_initial_condition_residuals_api_partial_differential_equations_partialdifferentialequationverificationreport_initial_condition_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_initial_condition_residuals.32a899a2e2b1"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
initial_condition_residuals: list[PartialDifferentialEquationVerificationResidual]
```

One reduced residual per initial condition, in insertion order.

### initial_conditions

<a id="entry-presentation_python_object_model_capability_contexts_initial_conditions_api_partial_differential_equations_partialdifferentialequationproblem_initial_conditions"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationproblem_initial_conditions.36dcc6dd1e1d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationProblem property</p>

```python signature
initial_conditions: list[Expression]
```

The initial-condition residuals in insertion order.

### initialize_parallelism

<a id="entry-presentation_python_object_model_capability_contexts_initialize_parallelism_api_session_initialize_parallelism"></a>
<a id="placement-placement.python.python_module.module_initialize_parallelism.4ce7fbe05c03"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
initialize_parallelism(worker_count: int) -> str
```

Initialize the process-wide parallel backend from the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_initialize_parallelism.b18527ef97b9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.initialize_parallelism</code></p>

```python signature
initialize_parallelism(worker_count: int) -> str
```

</details>

### integer_entries

<a id="entry-presentation_python_object_model_capability_contexts_integer_entries_api_session_integer_entries"></a>
<a id="placement-placement.python.python_module.module_integer_entries.d6ab920262bc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_entries(subject: Matrix) -> AssumptionProposition
```

Build an integer-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_entries.f379e76f46af"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_entries</code></p>

```python signature
integer_entries(subject: Matrix) -> AssumptionProposition
```

</details>

### integrate_definite_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_integrate_definite_under_constraint_api_session_integrate_definite_under_constraint"></a>
<a id="placement-placement.python.python_module.module_integrate_definite_under_constraint.8f9a35858e9d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integrate_definite_under_constraint(
    input_expression: ExpressionLike,
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

Definite integration under a local bounded logical constraint.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integrate_definite_under_constraint.69fda3541ccd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integrate_definite_under_constraint</code></p>

```python signature
integrate_definite_under_constraint(
    input_expression: ExpressionLike,
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

</details>

### integrate_definite_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_integrate_definite_under_constraint_api_expression_integrate_definite_under_constraint"></a>
<a id="placement-placement.python.python_class.expression_integrate_definite_under_constraint.360d68b2ae2c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
integrate_definite_under_constraint(
    variable: Any,
    lower: ExpressionLike,
    upper: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

Definite integration under a local bounded logical constraint.

### intertwining

<a id="entry-presentation_python_object_model_capability_contexts_intertwining_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_intertwining"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_intertwining.e228d1a0b73d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
intertwining: Optional[str]
```

The exact decision on the intertwining identity.

### invariant

<a id="entry-presentation_python_object_model_capability_contexts_invariant_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_invariant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_invariant.e7c03a6b811a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
invariant: Optional[expression]
```

The invariant of the generator's base field.

### inverse_coordinates

<a id="entry-presentation_python_object_model_capability_contexts_inverse_coordinates_api_partial_differential_equations_partialdifferentialequationcoordinatechange_inverse_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_inverse_coordinates.b11eb810ac1f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
inverse_coordinates: list[Expression]
```

The ordered target-to-source coordinate expressions.

### invertibility

<a id="entry-presentation_python_object_model_capability_contexts_invertibility_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_invertibility"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_invertibility.9065eb9a060b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
invertibility: Optional[str]
```

The exact decision that the coordinate map is invertible on its chart.

### invertible_matrix

<a id="entry-presentation_python_object_model_capability_contexts_invertible_matrix_api_session_invertible_matrix"></a>
<a id="placement-placement.python.python_module.module_invertible_matrix.4d17a3ac74e2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
invertible_matrix(subject: Matrix) -> AssumptionProposition
```

Build an invertible-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_invertible_matrix.ad8b55dfcfb8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.invertible_matrix</code></p>

```python signature
invertible_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### is_algebraic

<a id="entry-presentation_python_object_model_capability_contexts_is_algebraic_api_expression_is_algebraic"></a>
<a id="placement-placement.python.python_class.expression_is_algebraic.68ea1091eca2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_algebraic() -> Optional[bool]
```

Whether the expression is known to be algebraic.

### is_complex

<a id="entry-presentation_python_object_model_capability_contexts_is_complex_api_expression_is_complex"></a>
<a id="placement-placement.python.python_class.expression_is_complex.c64638be3cc5"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_complex() -> Optional[bool]
```

Whether the expression is known to be finite complex.

### is_composite

<a id="entry-presentation_python_object_model_capability_contexts_is_composite_api_expression_is_composite"></a>
<a id="placement-placement.python.python_class.expression_is_composite.5048052ad74b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_composite() -> Optional[bool]
```

Whether the expression is known to be composite.

### is_diagonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_diagonal_matrix_api_matrix_is_diagonal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_diagonal_matrix.5335fe934256"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_diagonal_matrix() -> Optional[bool]
```

Query whether this matrix is diagonal.

### is_even

<a id="entry-presentation_python_object_model_capability_contexts_is_even_api_expression_is_even"></a>
<a id="placement-placement.python.python_class.expression_is_even.b24e23216d5b"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_even() -> Optional[bool]
```

Whether the expression is known to be even.

### is_extended_real

<a id="entry-presentation_python_object_model_capability_contexts_is_extended_real_api_expression_is_extended_real"></a>
<a id="placement-placement.python.python_class.expression_is_extended_real.80f714a04d07"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_extended_real() -> Optional[bool]
```

Whether the expression is known to be extended-real.

### is_full_rank_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_full_rank_matrix_api_matrix_is_full_rank_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_full_rank_matrix.26e1c2964606"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_full_rank_matrix() -> Optional[bool]
```

Query whether this matrix has full rank.

### is_hermitian_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_hermitian_matrix_api_matrix_is_hermitian_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_hermitian_matrix.0f20491b19a5"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_hermitian_matrix() -> Optional[bool]
```

Query whether this matrix is Hermitian.

### is_identity_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_identity_matrix_api_matrix_is_identity_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_identity_matrix.fe1d1afefd5e"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_identity_matrix() -> Optional[bool]
```

Query whether this matrix is the identity matrix.

### is_infinite

<a id="entry-presentation_python_object_model_capability_contexts_is_infinite_api_expression_is_infinite"></a>
<a id="placement-placement.python.python_class.expression_is_infinite.db44c70207f2"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_infinite() -> Optional[bool]
```

Whether the expression is known to be infinite.

### is_invertible_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_invertible_matrix_api_matrix_is_invertible_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_invertible_matrix.5784807b0f4c"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_invertible_matrix() -> Optional[bool]
```

Query whether this matrix is invertible.

### is_irrational

<a id="entry-presentation_python_object_model_capability_contexts_is_irrational_api_expression_is_irrational"></a>
<a id="placement-placement.python.python_class.expression_is_irrational.97edaad6ba30"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_irrational() -> Optional[bool]
```

Whether the expression is known to be irrational.

### is_natural

<a id="entry-presentation_python_object_model_capability_contexts_is_natural_api_expression_is_natural"></a>
<a id="placement-placement.python.python_class.expression_is_natural.8c704553368c"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_natural() -> Optional[bool]
```

Whether the expression is known to be natural.

### is_nonpositive

<a id="entry-presentation_python_object_model_capability_contexts_is_nonpositive_api_expression_is_nonpositive"></a>
<a id="placement-placement.python.python_class.expression_is_nonpositive.69a4edec7757"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_nonpositive() -> Optional[bool]
```

Whether the expression is known to be nonpositive.

### is_normal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_normal_matrix_api_matrix_is_normal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_normal_matrix.d4f3f3ee2a5b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_normal_matrix() -> Optional[bool]
```

Query whether this matrix is normal.

### is_odd

<a id="entry-presentation_python_object_model_capability_contexts_is_odd_api_expression_is_odd"></a>
<a id="placement-placement.python.python_class.expression_is_odd.279898eb431e"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_odd() -> Optional[bool]
```

Whether the expression is known to be odd.

### is_orthogonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_orthogonal_matrix_api_matrix_is_orthogonal_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_orthogonal_matrix.f38fd03d9581"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_orthogonal_matrix() -> Optional[bool]
```

Query whether this matrix is orthogonal.

### is_positive_definite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_positive_definite_matrix_api_matrix_is_positive_definite_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_positive_definite_matrix.c44e8e2495dc"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive_definite_matrix() -> Optional[bool]
```

Query whether this matrix is positive definite.

### is_positive_integer

<a id="entry-presentation_python_object_model_capability_contexts_is_positive_integer_api_expression_is_positive_integer"></a>
<a id="placement-placement.python.python_class.expression_is_positive_integer.d43ced293292"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_positive_integer() -> Optional[bool]
```

Whether the expression is known to be a positive integer.

### is_positive_semidefinite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_positive_semidefinite_matrix_api_matrix_is_positive_semidefinite_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_positive_semidefinite_matrix.f902a6aeabc1"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_positive_semidefinite_matrix() -> Optional[bool]
```

Query whether this matrix is positive semidefinite.

### is_singular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_singular_matrix_api_matrix_is_singular_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_singular_matrix.a489349163d9"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_singular_matrix() -> Optional[bool]
```

Query whether this matrix is singular.

### is_square

<a id="entry-presentation_python_object_model_capability_contexts_is_square_api_matrix_is_square"></a>
<a id="placement-placement.python.python_class.matrix_is_square.6f63c0a768ab"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_square() -> Optional[bool]
```

Query whether this matrix is square.

### is_symmetric_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_symmetric_matrix_api_matrix_is_symmetric_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_symmetric_matrix.5a6e2021d34f"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_symmetric_matrix() -> Optional[bool]
```

Query whether this matrix is symmetric.

### is_transcendental

<a id="entry-presentation_python_object_model_capability_contexts_is_transcendental_api_expression_is_transcendental"></a>
<a id="placement-placement.python.python_class.expression_is_transcendental.51397fc05a1d"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_transcendental() -> Optional[bool]
```

Whether the expression is known to be transcendental.

### is_unitary_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_unitary_matrix_api_matrix_is_unitary_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_unitary_matrix.25b4cc412898"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_unitary_matrix() -> Optional[bool]
```

Query whether this matrix is unitary.

### is_zero

<a id="entry-presentation_python_object_model_capability_contexts_is_zero_api_expression_is_zero"></a>
<a id="placement-placement.python.python_class.expression_is_zero.e8cc82d31054"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
is_zero() -> Optional[bool]
```

Whether the expression is known to be zero.

### is_zero_matrix

<a id="entry-presentation_python_object_model_capability_contexts_is_zero_matrix_api_matrix_is_zero_matrix"></a>
<a id="placement-placement.python.python_class.matrix_is_zero_matrix.d4bf84b7ef84"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
is_zero_matrix() -> Optional[bool]
```

Query whether this matrix is the zero matrix.

### length

<a id="entry-presentation_python_object_model_capability_contexts_length_api_segment2d_length"></a>
<a id="placement-placement.python.python_class.segment2d_length.dd559e0e77a3"></a>
<p class="symi-entry-owner">Segment2d method</p>

```python signature
length() -> Expression
```

Also the finite-set length accessor on `expression` in WASM; context disambiguates.

### lifted_constants

<a id="entry-presentation_python_object_model_capability_contexts_lifted_constants_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_constants"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_constants.0a1697f7c174"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_constants: list[expression]
```

The constants the lifted family is parameterized by.

### lifted_family

<a id="entry-presentation_python_object_model_capability_contexts_lifted_family_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family.0c52fcf52fa4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_family: Optional[partial_differential_equation_solution_family]
```

The invariant solutions of the original equation.

### lifted_family_verification

<a id="entry-presentation_python_object_model_capability_contexts_lifted_family_verification_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_lifted_family_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family_verification.df253a79ee32"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
lifted_family_verification: Optional[str]
```

The exact decision that the lifted family solves the original equation.

### linearity

<a id="entry-presentation_python_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationclassification_linearity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_linearity.56f639c46019"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
linearity: str
```

The most-specific exact linearity class.

### linearity

<a id="entry-presentation_python_object_model_capability_contexts_linearity_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_linearity"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_linearity.689837d85d4d"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
linearity: str
```

The exact linearity class recorded at the time the candidate was produced.

### lower_triangular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_lower_triangular_matrix_api_session_lower_triangular_matrix"></a>
<a id="placement-placement.python.python_module.module_lower_triangular_matrix.f7364e2611f4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
lower_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

Build a lower-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_lower_triangular_matrix.320e7251eef5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lower_triangular_matrix</code></p>

```python signature
lower_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### matrix_shape

<a id="entry-presentation_python_object_model_capability_contexts_matrix_shape_api_session_matrix_shape"></a>
<a id="placement-placement.python.python_module.module_matrix_shape.169fd16e9013"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
matrix_shape(
    subject: Matrix,
    rows: int,
    columns: int,
) -> AssumptionProposition
```

Build a matrix shape proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_matrix_shape.1d55b535ae28"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.matrix_shape</code></p>

```python signature
matrix_shape(
    subject: Matrix,
    rows: int,
    columns: int,
) -> AssumptionProposition
```

</details>

### method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_method"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_method.75a7820ecba4"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
method: str
```

The method the request actually ran.

### method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_method"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_method.e890e7536e13"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
method: str
```

The method the system request actually ran.

### method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationmethodcandidate_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_method.5c046b720aee"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```python signature
method: str
```

The stable advisory method name.

### method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_method.eb18b6c344a2"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
method: str
```

The method identity this solution was produced by.

### method

<a id="entry-presentation_python_object_model_capability_contexts_method_api_partial_differential_equations_partialdifferentialequationsolveresult_method"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_method.99e32f6d4621"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
method: Optional[str]
```

The method that produced a solution, when one did.

### method_candidates

<a id="entry-presentation_python_object_model_capability_contexts_method_candidates_api_partial_differential_equations_partialdifferentialequationclassification_method_candidates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_method_candidates.cb1e50b6f94c"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
method_candidates: Any
```

The advisory methods in deterministic preference order.

### multiplier

<a id="entry-presentation_python_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_multiplier.3aadf88e1108"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
multiplier: Optional[expression]
```

The multiplier of the intertwining identity.

### multiplier

<a id="entry-presentation_python_object_model_capability_contexts_multiplier_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_multiplier.bb4222681cd4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
multiplier: Optional[expression]
```

The multiplier of the reduction identity.

### multiply

<a id="entry-presentation_python_object_model_capability_contexts_multiply_api_matrix_multiply"></a>
<a id="placement-placement.python.python_class.matrix_multiply.b71d7e16636b"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
multiply(other: Matrix) -> Matrix
```

Matrix product; inner dimensions must agree.

### name

<a id="entry-presentation_python_object_model_capability_contexts_name_api_partial_differential_equations_partialdifferentialequationarbitraryfunction_name"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_name.49a7f2bf3c70"></a>
<p class="symi-entry-owner">PartialDifferentialEquationArbitraryFunction property</p>

```python signature
name: str
```

The collision-free allocated function name.

### nonnegative_assumption

<a id="entry-presentation_python_object_model_capability_contexts_nonnegative_assumption_api_session_nonnegative_assumption"></a>
<a id="placement-placement.python.python_module.module_nonnegative_assumption.7c69dc7cf6b5"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
nonnegative_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a universe-guarded nonnegative assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_nonnegative_assumption.c0947f110757"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonnegative_assumption</code></p>

```python signature
nonnegative_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### nonpositive_assumption

<a id="entry-presentation_python_object_model_capability_contexts_nonpositive_assumption_api_session_nonpositive_assumption"></a>
<a id="placement-placement.python.python_module.module_nonpositive_assumption.e2a94e839e39"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
nonpositive_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a universe-guarded nonpositive assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_nonpositive_assumption.efacdb59df5d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonpositive_assumption</code></p>

```python signature
nonpositive_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### normal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_normal_matrix_api_session_normal_matrix"></a>
<a id="placement-placement.python.python_module.module_normal_matrix.b8fd28bfb4a1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
normal_matrix(subject: Matrix) -> AssumptionProposition
```

Build a normal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_normal_matrix.57490eb83d5d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.normal_matrix</code></p>

```python signature
normal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### normalization_multiplier

<a id="entry-presentation_python_object_model_capability_contexts_normalization_multiplier_api_partial_differential_equations_partialdifferentialequationtransformationresult_normalization_multiplier"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_normalization_multiplier.0a7d0a2ec99b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
normalization_multiplier: Optional[Expression]
```

The proved-nonzero residual-normalization multiplier.

### order

<a id="entry-presentation_python_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationclassification_order"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_order.7d5c5173ea9b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
order: int
```

The exact highest derivative order.

### order

<a id="entry-presentation_python_object_model_capability_contexts_order_api_partial_differential_equations_partialdifferentialequationsolutionprovenance_order"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_order.80c7a59ef077"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionProvenance property</p>

```python signature
order: int
```

The exact order recorded at the time the candidate was produced.

### orthogonal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_orthogonal_matrix_api_session_orthogonal_matrix"></a>
<a id="placement-placement.python.python_module.module_orthogonal_matrix.36bf053e5933"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
orthogonal_matrix(subject: Matrix) -> AssumptionProposition
```

Build an orthogonal-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_orthogonal_matrix.2380b9db6cd3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.orthogonal_matrix</code></p>

```python signature
orthogonal_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### outstanding_obligations

<a id="entry-presentation_python_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_outstanding_obligations.524c89762767"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the action explicitly does not make.

### outstanding_obligations

<a id="entry-presentation_python_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_outstanding_obligations.38353b8499cb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the algebra explicitly does not make.

### outstanding_obligations

<a id="entry-presentation_python_object_model_capability_contexts_outstanding_obligations_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_outstanding_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_outstanding_obligations.d4bee98b7e50"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
outstanding_obligations: list[str]
```

The claims the family explicitly does not make.

### parallelism_capability

<a id="entry-presentation_python_object_model_capability_contexts_parallelism_capability_api_session_parallelism_capability"></a>
<a id="placement-placement.python.python_module.module_parallelism_capability.462cfa180ab0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
parallelism_capability() -> Any
```

Return capability facts for the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_parallelism_capability.cbcbdf5e5bf5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.parallelism_capability</code></p>

```python signature
parallelism_capability() -> Any
```

</details>

### parameters

<a id="entry-presentation_python_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_parameters"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_parameters.6783e40857bf"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
parameters: list[expression]
```

The group parameters the closed forms depend on.

### parameters

<a id="entry-presentation_python_object_model_capability_contexts_parameters_api_partial_differential_equations_partialdifferentialequationpointsymmetryalgebra_parameters"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_parameters.f071852ff56f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAlgebra property</p>

```python signature
parameters: list[expression]
```

The constants of the general generator, one per basis generator.

### partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_api_partial_differential_equations_session_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_partial_differential_equation.ba416b0ca935"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
partial_differential_equation(
    equation: ExpressionInput,
    dependent_function: Any,
    independent_variables: VariableCollectionInput,
    initial_conditions: Optional[ExpressionCollectionInput] = None,
    boundary_conditions: Optional[ExpressionCollectionInput] = None,
) -> PartialDifferentialEquationProblem
```

Construct a validated scalar partial differential equation in the default context, with an explicit dependent function and independent-variable order.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_partial_differential_equation.38acc6e956d8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.partial_differential_equation</code></p>

```python signature
partial_differential_equation(
    equation: ExpressionLike,
    dependent_function: Any,
    independent_variables: Iterable[VariableLike],
    initial_conditions: Iterable[ExpressionLike] = None,
    boundary_conditions: Iterable[ExpressionLike] = None,
) -> PartialDifferentialEquationProblem
```

</details>

### partial_differential_equation_arbitrary_function

<a id="entry-presentation_python_object_model_capability_contexts_partial_differential_equation_arbitrary_function_api_partial_differential_equations_session_partial_differential_equation_arbitrary_function"></a>
<a id="placement-placement.python.python_class.context_partial_differential_equation_arbitrary_function.06a37767e111"></a>
<p class="symi-entry-owner">Explicit context</p>

```python signature
partial_differential_equation_arbitrary_function(
    preferred_name: str,
    arity: int,
) -> PartialDifferentialEquationArbitraryFunction
```

Allocate a collision-free arbitrary function for a PDE candidate family.

### point_symmetry_decline

<a id="entry-presentation_python_object_model_capability_contexts_point_symmetry_decline_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_point_symmetry_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_point_symmetry_decline.b8e4947aa41a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
point_symmetry_decline: Optional[str]
```

The reason the underlying point-symmetry algebra was not derived, when it was not.

### positive_definite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_positive_definite_matrix_api_session_positive_definite_matrix"></a>
<a id="placement-placement.python.python_module.module_positive_definite_matrix.5a24f83b14d4"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_definite_matrix(subject: Matrix) -> AssumptionProposition
```

Build a positive-definite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_definite_matrix.a998f31168b7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_definite_matrix</code></p>

```python signature
positive_definite_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### positive_semidefinite_matrix

<a id="entry-presentation_python_object_model_capability_contexts_positive_semidefinite_matrix_api_session_positive_semidefinite_matrix"></a>
<a id="placement-placement.python.python_module.module_positive_semidefinite_matrix.4cc39df663df"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_semidefinite_matrix(subject: Matrix) -> AssumptionProposition
```

Build a positive-semidefinite-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_semidefinite_matrix.1f8443e9fb0f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_semidefinite_matrix</code></p>

```python signature
positive_semidefinite_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### principal_congruence_residuals

<a id="entry-presentation_python_object_model_capability_contexts_principal_congruence_residuals_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_principal_congruence_residuals.a939bfb16497"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
principal_congruence_residuals: list[Expression]
```

The exact principal-matrix congruence residuals.

### principal_form

<a id="entry-presentation_python_object_model_capability_contexts_principal_form_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_principal_form"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_principal_form.55eaca035913"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
principal_form: Optional[str]
```

The exact canonical principal form that was reached.

### principal_matrix

<a id="entry-presentation_python_object_model_capability_contexts_principal_matrix_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_principal_matrix"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_principal_matrix.83b6ad0b8925"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
principal_matrix: Matrix
```

The frozen symmetric principal matrix this analysis classified.

### proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationmethodcandidate_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_proof_obligations.62b639706f98"></a>
<p class="symi-entry-owner">PartialDifferentialEquationMethodCandidate property</p>

```python signature
proof_obligations: list[str]
```

The exact obligations this method must discharge before it may solve.

### proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsecondorderclassification_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_proof_obligations.f0afe69b27f4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSecondOrderClassification property</p>

```python signature
proof_obligations: list[str]
```

The obligations a downstream canonical-coordinate route must discharge.

### proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationsolutionfamily_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_proof_obligations.2e0bde41df8e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolutionFamily property</p>

```python signature
proof_obligations: list[str]
```

The obligations recorded against this candidate family.

### proof_obligations

<a id="entry-presentation_python_object_model_capability_contexts_proof_obligations_api_partial_differential_equations_partialdifferentialequationverificationreport_proof_obligations"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_proof_obligations.f9ea81ab6102"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationReport property</p>

```python signature
proof_obligations: list[str]
```

The obligations consulted or left unresolved by this verification.

### provenance

<a id="entry-presentation_python_object_model_capability_contexts_provenance_api_partial_differential_equations_partialdifferentialequationsolveresult_provenance"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_provenance.de3205aa6707"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
provenance: Optional[PartialDifferentialEquationSolutionProvenance]
```

The mathematical provenance a verified solution carries.

### real_entries

<a id="entry-presentation_python_object_model_capability_contexts_real_entries_api_session_real_entries"></a>
<a id="placement-placement.python.python_module.module_real_entries.1b5d05fc8a93"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_entries(subject: Matrix) -> AssumptionProposition
```

Build a real-entry proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_entries.844c105ddebe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_entries</code></p>

```python signature
real_entries(subject: Matrix) -> AssumptionProposition
```

</details>

### reconstruction

<a id="entry-presentation_python_object_model_capability_contexts_reconstruction_api_partial_differential_equations_partialdifferentialequationseparationresult_reconstruction"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_reconstruction.09d3fa1dfefd"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
reconstruction: Expression
```

The product or sum reconstruction of the working unknown.

### reduced_equation

<a id="entry-presentation_python_object_model_capability_contexts_reduced_equation_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_reduced_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_reduced_equation.65c060212fc5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
reduced_equation: Optional[expression]
```

The reduced ordinary differential equation for the profile, read as zero.

### remainder

<a id="entry-presentation_python_object_model_capability_contexts_remainder_api_partial_differential_equations_partialdifferentialequationcoefficientdata_remainder"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_remainder.49809b3ca92f"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoefficientData property</p>

```python signature
remainder: Optional[Expression]
```

The exact jet-free remainder term, when one was extracted.

### required_rank

<a id="entry-presentation_python_object_model_capability_contexts_required_rank_api_ordinary_differential_equations_ordinarydifferentialequationsystemverificationreport_required_rank"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_required_rank.95834db51730"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemVerificationReport property</p>

```python signature
required_rank: int
```

The dimension a complete family of the system must span.

### residual

<a id="entry-presentation_python_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationseparatedequation_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_residual.b55d79fdd2b3"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparatedEquation property</p>

```python signature
residual: Expression
```

The exact ODE residual, interpreted as equal to zero.

### residual

<a id="entry-presentation_python_object_model_capability_contexts_residual_api_partial_differential_equations_partialdifferentialequationverificationresidual_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationverificationresidual_residual.fe62a14ffa59"></a>
<p class="symi-entry-owner">PartialDifferentialEquationVerificationResidual property</p>

```python signature
residual: Expression
```

The independently reduced residual expression.

### route

<a id="entry-presentation_python_object_model_capability_contexts_route_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_route"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_route.ebc67035a80d"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
route: Optional[str]
```

The route the certified assignment came from.

### second_equation

<a id="entry-presentation_python_object_model_capability_contexts_second_equation_api_partial_differential_equations_partialdifferentialequationseparationresult_second_equation"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_second_equation.b2cd436c137a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
second_equation: PartialDifferentialEquationSeparatedEquation
```

The second exact separated ODE.

### second_order_principal_part

<a id="entry-presentation_python_object_model_capability_contexts_second_order_principal_part_api_partial_differential_equations_partialdifferentialequationclassification_second_order_principal_part"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationclassification_second_order_principal_part.1c993426e743"></a>
<p class="symi-entry-owner">PartialDifferentialEquationClassification property</p>

```python signature
second_order_principal_part: Optional[PartialDifferentialEquationPrincipalPart]
```

The exact second-order principal metadata, when the equation has one.

### separate_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_separate_partial_differential_equation_api_partial_differential_equations_session_separate_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_separate_partial_differential_equation.7ed47d2f874d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
separate_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSeparationResult
```

Separate a supported PDE in the default context into exact one-variable ODEs.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_separate_partial_differential_equation.0863e9a4a752"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.separate_partial_differential_equation</code></p>

```python signature
separate_partial_differential_equation(problem: PartialDifferentialEquationProblem) -> PartialDifferentialEquationSeparationResult
```

</details>

### separation_constant

<a id="entry-presentation_python_object_model_capability_contexts_separation_constant_api_partial_differential_equations_partialdifferentialequationseparationresult_separation_constant"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_separation_constant.0ac14df0a67a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
separation_constant: Expression
```

The fresh exact separation constant.

### serialize_bulk

<a id="entry-presentation_python_object_model_capability_contexts_serialize_bulk_api_session_serialize_bulk"></a>
<a id="placement-placement.python.python_module.module_serialize_bulk.afaf64d0cab2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
serialize_bulk(targets: PythonExpressionCollectionInput) -> Any
```

Serialize an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_serialize_bulk.6f42f6f244f3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.serialize_bulk</code></p>

```python signature
serialize_bulk(targets: PythonExpressionCollectionInput) -> Any
```

</details>

### set_execution_mode

<a id="entry-presentation_python_object_model_capability_contexts_set_execution_mode_api_session_set_execution_mode"></a>
<a id="placement-placement.python.python_module.module_set_execution_mode.972044f1676d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
set_execution_mode(name: str) -> None
```

Select the execution mode used by the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_set_execution_mode.597c8bd411fc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.set_execution_mode</code></p>

```python signature
set_execution_mode(name: str) -> None
```

</details>

### similarity_variable

<a id="entry-presentation_python_object_model_capability_contexts_similarity_variable_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_similarity_variable"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_similarity_variable.a5e2d49e4f89"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
similarity_variable: Optional[expression]
```

The coordinate of the reduced equation, standing for the invariant.

### simplify_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_simplify_under_constraint_api_session_simplify_under_constraint"></a>
<a id="placement-placement.python.python_module.module_simplify_under_constraint.24b8db7c930a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify_under_constraint(
    input_expression: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

Simplify an expression under a local bounded logical constraint without changing symbol assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify_under_constraint.f9667336f9db"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify_under_constraint</code></p>

```python signature
simplify_under_constraint(
    input_expression: ExpressionLike,
    constraint: ExpressionLike,
) -> Expression
```

</details>

### simplify_under_constraint

<a id="entry-presentation_python_object_model_capability_contexts_simplify_under_constraint_api_expression_simplify_under_constraint"></a>
<a id="placement-placement.python.python_class.expression_simplify_under_constraint.2ab59e8546d9"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
simplify_under_constraint(constraint: ExpressionLike) -> Expression
```

Simplify this expression under a local bounded logical constraint without changing symbol assumptions.

### singular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_singular_matrix_api_session_singular_matrix"></a>
<a id="placement-placement.python.python_module.module_singular_matrix.6e5632e57c3f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
singular_matrix(subject: Matrix) -> AssumptionProposition
```

Build a singular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_singular_matrix.4b9069dcd876"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.singular_matrix</code></p>

```python signature
singular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### solution

<a id="entry-presentation_python_object_model_capability_contexts_solution_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_solution"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_solution.6d23f2ed61c8"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
solution: Optional[expression]
```

The certified solution, which no declined request carries.

### solution

<a id="entry-presentation_python_object_model_capability_contexts_solution_api_partial_differential_equations_partialdifferentialequationsolveresult_solution"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_solution.1f292346c9da"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
solution: Optional[PartialDifferentialEquationSolutionFamily]
```

The verified solution family, which no declined route may carry.

### solve_partial_differential_equation

<a id="entry-presentation_python_object_model_capability_contexts_solve_partial_differential_equation_api_partial_differential_equations_session_solve_partial_differential_equation"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation.ac810cee7c6f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation(
    problem: PartialDifferentialEquationProblem,
    method: str = "automatic",
) -> PartialDifferentialEquationSolveResult
```

Run the sound partial differential equation dispatcher under a stable method name.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation.810caa3f1554"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation</code></p>

```python signature
solve_partial_differential_equation(
    problem: PartialDifferentialEquationProblem,
    method: str = "automatic",
) -> PartialDifferentialEquationSolveResult
```

</details>

### solve_partial_differential_equation_with_transform_axis_specifications

<a id="entry-presentation_python_object_model_capability_contexts_solve_partial_differential_equation_with_transform_axis_specifications_api_partial_differential_equations_session_solve_partial_differential_equation_with_transform_axis_specifications"></a>
<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_with_transform_axis_specifications.6445539720cf"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_partial_differential_equation_with_transform_axis_specifications(
    problem: PartialDifferentialEquationProblem,
    method: str,
    transform_axis_specifications: list[str],
) -> PartialDifferentialEquationSolveResult
```

Solve a PDE with ordered explicit transform-axis specifications.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_with_transform_axis_specifications.12163ffe7cb2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_partial_differential_equation_with_transform_axis_specifications</code></p>

```python signature
solve_partial_differential_equation_with_transform_axis_specifications(
    problem: PartialDifferentialEquationProblem,
    method: str,
    transform_axis_specifications: list[str],
) -> PartialDifferentialEquationSolveResult
```

</details>

### source_variables

<a id="entry-presentation_python_object_model_capability_contexts_source_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_source_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_source_variables.5711dea1f360"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
source_variables: list[str]
```

The ordered source coordinate names.

### square_matrix

<a id="entry-presentation_python_object_model_capability_contexts_square_matrix_api_session_square_matrix"></a>
<a id="placement-placement.python.python_module.module_square_matrix.10c4c7e8efa1"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
square_matrix(subject: Matrix) -> AssumptionProposition
```

Build a square-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_square_matrix.7e18aef128a6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.square_matrix</code></p>

```python signature
square_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### strategy

<a id="entry-presentation_python_object_model_capability_contexts_strategy_api_partial_differential_equations_partialdifferentialequationseparationresult_strategy"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_strategy.fb54b0c578b5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
strategy: str
```

The directed separation strategy selected by exact analysis.

### substitute_bulk

<a id="entry-presentation_python_object_model_capability_contexts_substitute_bulk_api_session_substitute_bulk"></a>
<a id="placement-placement.python.python_module.module_substitute_bulk.865d6094216b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
substitute_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
    value: PythonExpressionInput,
) -> Any
```

Substitute one symbol and value throughout an ordered collection in the thread's default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_substitute_bulk.7da95161fa74"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.substitute_bulk</code></p>

```python signature
substitute_bulk(
    targets: PythonExpressionCollectionInput,
    variable: PythonExpressionInput,
    value: PythonExpressionInput,
) -> Any
```

</details>

### subtract

<a id="entry-presentation_python_object_model_capability_contexts_subtract_api_matrix_subtract"></a>
<a id="placement-placement.python.python_class.matrix_subtract.689f072cd263"></a>
<p class="symi-entry-owner">Matrix method</p>

```python signature
subtract(other: Matrix) -> Matrix
```

Entrywise difference of two matrices of the same shape.

### symmetric_matrix

<a id="entry-presentation_python_object_model_capability_contexts_symmetric_matrix_api_session_symmetric_matrix"></a>
<a id="placement-placement.python.python_module.module_symmetric_matrix.9e1bebd0ea64"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
symmetric_matrix(subject: Matrix) -> AssumptionProposition
```

Build a symmetric-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_symmetric_matrix.5f7f01de4d22"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.symmetric_matrix</code></p>

```python signature
symmetric_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### target_dependent_function

<a id="entry-presentation_python_object_model_capability_contexts_target_dependent_function_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_dependent_function"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_dependent_function.121412f8190e"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
target_dependent_function: str
```

The target unknown-function name.

### target_problem

<a id="entry-presentation_python_object_model_capability_contexts_target_problem_api_partial_differential_equations_partialdifferentialequationtransformationresult_target_problem"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_target_problem.2d8d6a9199f5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
target_problem: Optional[PartialDifferentialEquationProblem]
```

The transformed PDE problem stated in the target coordinates.

### target_variables

<a id="entry-presentation_python_object_model_capability_contexts_target_variables_api_partial_differential_equations_partialdifferentialequationcoordinatechange_target_variables"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_variables.418691a17ebb"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCoordinateChange property</p>

```python signature
target_variables: list[str]
```

The ordered target coordinate names.

### transformation_decline

<a id="entry-presentation_python_object_model_capability_contexts_transformation_decline_api_partial_differential_equations_partialdifferentialequationcanonicalizationresult_transformation_decline"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_transformation_decline.e4758cff1d65"></a>
<p class="symi-entry-owner">PartialDifferentialEquationCanonicalizationResult property</p>

```python signature
transformation_decline: Optional[str]
```

The underlying coordinate-transformation decline, when one caused the decline.

### transformed

<a id="entry-presentation_python_object_model_capability_contexts_transformed_api_partial_differential_equations_partialdifferentialequationtransformationresult_transformed"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_transformed.afa1507c2444"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationResult property</p>

```python signature
transformed: bool
```

Whether a verified transformation was produced.

### transformed_coordinates

<a id="entry-presentation_python_object_model_capability_contexts_transformed_coordinates_api_partial_differential_equations_partialdifferentialequationpointsymmetryaction_transformed_coordinates"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_transformed_coordinates.a43527f3e30b"></a>
<p class="symi-entry-owner">PartialDifferentialEquationPointSymmetryAction property</p>

```python signature
transformed_coordinates: list[expression]
```

The coordinates at which a seed solution is evaluated.

### transformed_governing_residual

<a id="entry-presentation_python_object_model_capability_contexts_transformed_governing_residual_api_partial_differential_equations_partialdifferentialequationtransformationverificationreport_transformed_governing_residual"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_transformed_governing_residual.de21233fe125"></a>
<p class="symi-entry-owner">PartialDifferentialEquationTransformationVerificationReport property</p>

```python signature
transformed_governing_residual: Expression
```

The independently transformed source governing residual.

### unitary_matrix

<a id="entry-presentation_python_object_model_capability_contexts_unitary_matrix_api_session_unitary_matrix"></a>
<a id="placement-placement.python.python_module.module_unitary_matrix.1e1e98f0779f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
unitary_matrix(subject: Matrix) -> AssumptionProposition
```

Build a unitary-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_unitary_matrix.0c1eaabf71ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.unitary_matrix</code></p>

```python signature
unitary_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### upper_triangular_matrix

<a id="entry-presentation_python_object_model_capability_contexts_upper_triangular_matrix_api_session_upper_triangular_matrix"></a>
<a id="placement-placement.python.python_module.module_upper_triangular_matrix.fc245841334f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
upper_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

Build a upper-triangular-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_upper_triangular_matrix.d74ef8f77475"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.upper_triangular_matrix</code></p>

```python signature
upper_triangular_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

### verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsolveresult_verification"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_verification.d464f1a7ea4c"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSolveResult property</p>

```python signature
verification: Optional[str]
```

The independent verifier's decision on the candidate, when verification ran.

### verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_ordinary_differential_equations_ordinarydifferentialequationsystemsolveresult_verification"></a>
<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_verification.9d0a62131f4c"></a>
<p class="symi-entry-owner">OrdinaryDifferentialEquationSystemSolveResult property</p>

```python signature
verification: Optional[str]
```

The independent verifier's decision on the assignment, when verification ran.

### verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationseparationresult_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_verification.1e52e66e28d5"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSeparationResult property</p>

```python signature
verification: str
```

The independent recombination-verification verdict.

### verification

<a id="entry-presentation_python_object_model_capability_contexts_verification_api_partial_differential_equations_partialdifferentialequationsolveresult_verification"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_verification.c6c44ab3ef2a"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSolveResult property</p>

```python signature
verification: Optional[PartialDifferentialEquationVerificationReport]
```

The independent verification report a solved result must carry.

### verify_partial_differential_equation_coordinate_transformation

<a id="entry-presentation_python_object_model_capability_contexts_verify_partial_differential_equation_coordinate_transformation_api_partial_differential_equations_session_verify_partial_differential_equation_coordinate_transformation"></a>
<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_coordinate_transformation.894d29fe74aa"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_partial_differential_equation_coordinate_transformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
) -> PartialDifferentialEquationTransformationVerificationReport
```

Independently verify an exact PDE coordinate transformation.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_coordinate_transformation.542bb424361e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_partial_differential_equation_coordinate_transformation</code></p>

```python signature
verify_partial_differential_equation_coordinate_transformation(
    problem: PartialDifferentialEquationProblem,
    transformation: PartialDifferentialEquationTransformationResult,
) -> PartialDifferentialEquationTransformationVerificationReport
```

</details>

### verify_partial_differential_equation_solution

<a id="entry-presentation_python_object_model_capability_contexts_verify_partial_differential_equation_solution_api_partial_differential_equations_session_verify_partial_differential_equation_solution"></a>
<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_solution.b40079d9e42a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
verify_partial_differential_equation_solution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
) -> PartialDifferentialEquationVerificationReport
```

Independently verify a partial differential equation candidate with exact residual reasoning.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_solution.6fcadf40257f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.verify_partial_differential_equation_solution</code></p>

```python signature
verify_partial_differential_equation_solution(
    problem: PartialDifferentialEquationProblem,
    solution: PartialDifferentialEquationSolutionFamily,
) -> PartialDifferentialEquationVerificationReport
```

</details>

### weight

<a id="entry-presentation_python_object_model_capability_contexts_weight_api_partial_differential_equations_partialdifferentialequationsimilaritysolution_weight"></a>
<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_weight.43eaeb3aa2a4"></a>
<p class="symi-entry-owner">PartialDifferentialEquationSimilaritySolution property</p>

```python signature
weight: Optional[expression]
```

The weight of invariant solutions.

### zero_matrix

<a id="entry-presentation_python_object_model_capability_contexts_zero_matrix_api_session_zero_matrix"></a>
<a id="placement-placement.python.python_module.module_zero_matrix.c698818abd16"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zero_matrix(subject: Matrix) -> AssumptionProposition
```

Build a zero-matrix proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zero_matrix.7b8066c05383"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zero_matrix</code></p>

```python signature
zero_matrix(subject: Matrix) -> AssumptionProposition
```

</details>

