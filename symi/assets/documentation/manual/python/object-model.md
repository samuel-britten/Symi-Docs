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

<a id="placement-placement.python.python_class.assumptionproposition.dbbb3effee02"></a>
### AssumptionProposition

`class symi.AssumptionProposition`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.assumptionproposition_str.4c1fd8746e1e"></a>
### AssumptionProposition.__str__

`AssumptionProposition.__str__()`

Returns `str`.

<a id="placement-placement.python.python_class.assumptionscope.f98eede99dab"></a>
### AssumptionScope

`class symi.AssumptionScope`

Returns `assumption_scope`.

<a id="placement-placement.python.python_class.context.a37e22f21fdc"></a>
### Context

`Context()`

Returns `Self`.

<a id="placement-placement.python.python_class.context_canonicalize_partial_differential_equation.c15668c55ef8"></a>
### Context.canonicalize_partial_differential_equation

`Context.canonicalize_partial_differential_equation(problem)`

Returns `partial_differential_equation_canonicalization_result`.

<a id="placement-placement.python.python_class.context_change_partial_differential_equation_variables.2c37631230c9"></a>
### Context.change_partial_differential_equation_variables

`Context.change_partial_differential_equation_variables(problem, target_variables, forward_coordinates=None, inverse_coordinates=None, target_dependent_function=None)`

Returns `partial_differential_equation_transformation_result`.

<a id="placement-placement.python.python_class.context_classify_partial_differential_equation.f80771a4e3c1"></a>
### Context.classify_partial_differential_equation

`Context.classify_partial_differential_equation(problem)`

Returns `partial_differential_equation_classification`.

<a id="placement-placement.python.python_class.context_classify_second_order_partial_differential_equation.7f924f5a5610"></a>
### Context.classify_second_order_partial_differential_equation

`Context.classify_second_order_partial_differential_equation(problem)`

Returns `partial_differential_equation_second_order_classification`.

<a id="placement-placement.python.python_class.context_complex_entries.5f2958b71aba"></a>
### Context.complex_entries

`Context.complex_entries(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_diagonal_matrix.d5c6b8521631"></a>
### Context.diagonal_matrix

`Context.diagonal_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_differentiate_bulk.2900b36d44c8"></a>
### Context.differentiate_bulk

`Context.differentiate_bulk(targets, variable)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.context_discover_partial_differential_equation.65f033d1c9b8"></a>
### Context.discover_partial_differential_equation

`Context.discover_partial_differential_equation(equation, initial_conditions=None, boundary_conditions=None)`

Returns `partial_differential_equation_problem`.

<a id="placement-placement.python.python_class.context_evaluate_numeric_bulk.98a931a15f6a"></a>
### Context.evaluate_numeric_bulk

`Context.evaluate_numeric_bulk(targets)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.context_expand_bulk.0e3995efc016"></a>
### Context.expand_bulk

`Context.expand_bulk(targets)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.context_explicit_partial_differential_equation_solution.ed2a21850eb6"></a>
### Context.explicit_partial_differential_equation_solution

`Context.explicit_partial_differential_equation_solution(solution, arbitrary_functions=None, proof_obligations=None)`

Returns `partial_differential_equation_solution_family`.

<a id="placement-placement.python.python_class.context_full_rank_matrix.927198cb7f5e"></a>
### Context.full_rank_matrix

`Context.full_rank_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_hermitian_matrix.b735ad83a78d"></a>
### Context.hermitian_matrix

`Context.hermitian_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_identity_matrix.0ebf4e138e96"></a>
### Context.identity_matrix

`Context.identity_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_implicit_partial_differential_equation_solution.d565ff6b0430"></a>
### Context.implicit_partial_differential_equation_solution

`Context.implicit_partial_differential_equation_solution(residual, arbitrary_functions=None, proof_obligations=None)`

Returns `partial_differential_equation_solution_family`.

<a id="placement-placement.python.python_class.context_initialize_parallelism.b18527ef97b9"></a>
### Context.initialize_parallelism

`Context.initialize_parallelism(worker_count)`

Returns `str`.

<a id="placement-placement.python.python_class.context_integer_entries.f379e76f46af"></a>
### Context.integer_entries

`Context.integer_entries(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_integrate_definite_under_constraint.69fda3541ccd"></a>
### Context.integrate_definite_under_constraint

`Context.integrate_definite_under_constraint(input_expression, variable, lower, upper, constraint)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_invertible_matrix.ad8b55dfcfb8"></a>
### Context.invertible_matrix

`Context.invertible_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_lower_triangular_matrix.320e7251eef5"></a>
### Context.lower_triangular_matrix

`Context.lower_triangular_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_matrix_shape.1d55b535ae28"></a>
### Context.matrix_shape

`Context.matrix_shape(subject, rows, columns)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_nonnegative_assumption.c0947f110757"></a>
### Context.nonnegative_assumption

`Context.nonnegative_assumption(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_nonpositive_assumption.efacdb59df5d"></a>
### Context.nonpositive_assumption

`Context.nonpositive_assumption(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_normal_matrix.57490eb83d5d"></a>
### Context.normal_matrix

`Context.normal_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_orthogonal_matrix.2380b9db6cd3"></a>
### Context.orthogonal_matrix

`Context.orthogonal_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_parallelism_capability.cbcbdf5e5bf5"></a>
### Context.parallelism_capability

`Context.parallelism_capability()`

Returns `PyAny`.

<a id="placement-placement.python.python_class.context_partial_differential_equation.38acc6e956d8"></a>
### Context.partial_differential_equation

`Context.partial_differential_equation(equation, dependent_function, independent_variables, initial_conditions=None, boundary_conditions=None)`

Returns `partial_differential_equation_problem`.

<a id="placement-placement.python.python_class.context_partial_differential_equation_arbitrary_function.06a37767e111"></a>
### Context.partial_differential_equation_arbitrary_function

`Context.partial_differential_equation_arbitrary_function(preferred_name, arity)`

Returns `partial_differential_equation_arbitrary_function`.

<a id="placement-placement.python.python_class.context_positive_definite_matrix.a998f31168b7"></a>
### Context.positive_definite_matrix

`Context.positive_definite_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_positive_semidefinite_matrix.1f8443e9fb0f"></a>
### Context.positive_semidefinite_matrix

`Context.positive_semidefinite_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_real_entries.844c105ddebe"></a>
### Context.real_entries

`Context.real_entries(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_separate_partial_differential_equation.0863e9a4a752"></a>
### Context.separate_partial_differential_equation

`Context.separate_partial_differential_equation(problem)`

Returns `partial_differential_equation_separation_result`.

<a id="placement-placement.python.python_class.context_serialize_bulk.6f42f6f244f3"></a>
### Context.serialize_bulk

`Context.serialize_bulk(targets)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.context_set_execution_mode.597c8bd411fc"></a>
### Context.set_execution_mode

`Context.set_execution_mode(name)`

Returns `None`.

<a id="placement-placement.python.python_class.context_simplify_under_constraint.f9667336f9db"></a>
### Context.simplify_under_constraint

`Context.simplify_under_constraint(input_expression, constraint)`

Returns `expression`.

<a id="placement-placement.python.python_class.context_singular_matrix.4b9069dcd876"></a>
### Context.singular_matrix

`Context.singular_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation.810caa3f1554"></a>
### Context.solve_partial_differential_equation

`Context.solve_partial_differential_equation(problem, method="automatic")`

Returns `partial_differential_equation_solve_result`.

<a id="placement-placement.python.python_class.context_solve_partial_differential_equation_with_transform_axis_specifications.12163ffe7cb2"></a>
### Context.solve_partial_differential_equation_with_transform_axis_specifications

`Context.solve_partial_differential_equation_with_transform_axis_specifications(problem, method, transform_axis_specifications)`

Returns `partial_differential_equation_solve_result`.

<a id="placement-placement.python.python_class.context_square_matrix.7e18aef128a6"></a>
### Context.square_matrix

`Context.square_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_substitute_bulk.7da95161fa74"></a>
### Context.substitute_bulk

`Context.substitute_bulk(targets, variable, value)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.context_symmetric_matrix.5f7f01de4d22"></a>
### Context.symmetric_matrix

`Context.symmetric_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_unitary_matrix.0c1eaabf71ca"></a>
### Context.unitary_matrix

`Context.unitary_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_upper_triangular_matrix.d74ef8f77475"></a>
### Context.upper_triangular_matrix

`Context.upper_triangular_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_coordinate_transformation.542bb424361e"></a>
### Context.verify_partial_differential_equation_coordinate_transformation

`Context.verify_partial_differential_equation_coordinate_transformation(problem, transformation)`

Returns `partial_differential_equation_transformation_verification_report`.

<a id="placement-placement.python.python_class.context_verify_partial_differential_equation_solution.6fcadf40257f"></a>
### Context.verify_partial_differential_equation_solution

`Context.verify_partial_differential_equation_solution(problem, solution)`

Returns `partial_differential_equation_verification_report`.

<a id="placement-placement.python.python_class.context_zero_matrix.7b8066c05383"></a>
### Context.zero_matrix

`Context.zero_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.expression.f1defafa2138"></a>
### Expression

`class symi.Expression`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_add.58a4bd4dd71b"></a>
### Expression.__add__

`Expression.__add__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_bool.69418ace2aed"></a>
### Expression.__bool__

`Expression.__bool__()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_eq.5a2d56342b69"></a>
### Expression.__eq__

`Expression.__eq__(other)`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_getattribute.76962b06f74d"></a>
### Expression.__getattribute__

`Expression.__getattribute__(receiver, name)`

Returns `PyAny`.

<a id="placement-placement.python.python_class.expression_hash.fcf6ce555e16"></a>
### Expression.__hash__

`Expression.__hash__()`

Returns `isize`.

<a id="placement-placement.python.python_class.expression_iter.f81354937f72"></a>
### Expression.__iter__

`Expression.__iter__()`

Returns `PyAny`.

<a id="placement-placement.python.python_class.expression_len.d43139256aa0"></a>
### Expression.__len__

`Expression.__len__()`

Returns `int`.

<a id="placement-placement.python.python_class.expression_mul.605ba0478e43"></a>
### Expression.__mul__

`Expression.__mul__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_ne.8cbf473dc2ff"></a>
### Expression.__ne__

`Expression.__ne__(other)`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_neg.ef8096e95741"></a>
### Expression.__neg__

`Expression.__neg__()`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_pow.ac2cb53ba3dc"></a>
### Expression.__pow__

`Expression.__pow__(exponent, modulo)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_radd.b3f9590b78f9"></a>
### Expression.__radd__

`Expression.__radd__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_repr.51e3a215dd82"></a>
### Expression.__repr__

`Expression.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_class.expression_rmul.fd487c5f63ce"></a>
### Expression.__rmul__

`Expression.__rmul__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_rpow.ea98d5ba5b89"></a>
### Expression.__rpow__

`Expression.__rpow__(base, modulo)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_rsub.2815deb80733"></a>
### Expression.__rsub__

`Expression.__rsub__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_rtruediv.f1cdc35ec1fa"></a>
### Expression.__rtruediv__

`Expression.__rtruediv__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_str.329819f4a97c"></a>
### Expression.__str__

`Expression.__str__()`

Returns `str`.

<a id="placement-placement.python.python_class.expression_sub.f0d35560c2a2"></a>
### Expression.__sub__

`Expression.__sub__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_truediv.14a00eccae14"></a>
### Expression.__truediv__

`Expression.__truediv__(other)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_integrate_definite_under_constraint.360d68b2ae2c"></a>
### Expression.integrate_definite_under_constraint

`Expression.integrate_definite_under_constraint(variable, lower, upper, constraint)`

Returns `expression`.

<a id="placement-placement.python.python_class.expression_is_algebraic.68ea1091eca2"></a>
### Expression.is_algebraic

`Expression.is_algebraic()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_complex.c64638be3cc5"></a>
### Expression.is_complex

`Expression.is_complex()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_composite.5048052ad74b"></a>
### Expression.is_composite

`Expression.is_composite()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_even.b24e23216d5b"></a>
### Expression.is_even

`Expression.is_even()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_extended_real.80f714a04d07"></a>
### Expression.is_extended_real

`Expression.is_extended_real()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_infinite.db44c70207f2"></a>
### Expression.is_infinite

`Expression.is_infinite()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_irrational.97edaad6ba30"></a>
### Expression.is_irrational

`Expression.is_irrational()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_natural.8c704553368c"></a>
### Expression.is_natural

`Expression.is_natural()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_nonpositive.69a4edec7757"></a>
### Expression.is_nonpositive

`Expression.is_nonpositive()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_odd.279898eb431e"></a>
### Expression.is_odd

`Expression.is_odd()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_positive_integer.d43ced293292"></a>
### Expression.is_positive_integer

`Expression.is_positive_integer()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_transcendental.51397fc05a1d"></a>
### Expression.is_transcendental

`Expression.is_transcendental()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_is_zero.e8cc82d31054"></a>
### Expression.is_zero

`Expression.is_zero()`

Returns `bool`.

<a id="placement-placement.python.python_class.expression_simplify_under_constraint.2ab59e8546d9"></a>
### Expression.simplify_under_constraint

`Expression.simplify_under_constraint(constraint)`

Returns `expression`.

<a id="placement-placement.python.python_class.matrix_add.ab8ce536842a"></a>
### Matrix.add

`Matrix.add(other)`

Returns `matrix`.

<a id="placement-placement.python.python_class.matrix_has_complex_entries.e69d7e187678"></a>
### Matrix.has_complex_entries

`Matrix.has_complex_entries()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_has_integer_entries.3fe8e758b6ff"></a>
### Matrix.has_integer_entries

`Matrix.has_integer_entries()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_has_real_entries.5b15ebbe5ce6"></a>
### Matrix.has_real_entries

`Matrix.has_real_entries()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_diagonal_matrix.5335fe934256"></a>
### Matrix.is_diagonal_matrix

`Matrix.is_diagonal_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_full_rank_matrix.26e1c2964606"></a>
### Matrix.is_full_rank_matrix

`Matrix.is_full_rank_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_hermitian_matrix.0f20491b19a5"></a>
### Matrix.is_hermitian_matrix

`Matrix.is_hermitian_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_identity_matrix.fe1d1afefd5e"></a>
### Matrix.is_identity_matrix

`Matrix.is_identity_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_invertible_matrix.5784807b0f4c"></a>
### Matrix.is_invertible_matrix

`Matrix.is_invertible_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_normal_matrix.d4f3f3ee2a5b"></a>
### Matrix.is_normal_matrix

`Matrix.is_normal_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_orthogonal_matrix.f38fd03d9581"></a>
### Matrix.is_orthogonal_matrix

`Matrix.is_orthogonal_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_positive_definite_matrix.c44e8e2495dc"></a>
### Matrix.is_positive_definite_matrix

`Matrix.is_positive_definite_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_positive_semidefinite_matrix.f902a6aeabc1"></a>
### Matrix.is_positive_semidefinite_matrix

`Matrix.is_positive_semidefinite_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_singular_matrix.a489349163d9"></a>
### Matrix.is_singular_matrix

`Matrix.is_singular_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_square.6f63c0a768ab"></a>
### Matrix.is_square

`Matrix.is_square()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_symmetric_matrix.5a6e2021d34f"></a>
### Matrix.is_symmetric_matrix

`Matrix.is_symmetric_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_unitary_matrix.25b4cc412898"></a>
### Matrix.is_unitary_matrix

`Matrix.is_unitary_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_is_zero_matrix.d4bf84b7ef84"></a>
### Matrix.is_zero_matrix

`Matrix.is_zero_matrix()`

Returns `bool`.

<a id="placement-placement.python.python_class.matrix_multiply.b71d7e16636b"></a>
### Matrix.multiply

`Matrix.multiply(other)`

Returns `matrix`.

<a id="placement-placement.python.python_class.matrix_subtract.689f072cd263"></a>
### Matrix.subtract

`Matrix.subtract(other)`

Returns `matrix`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_decline.97b6a3b080c9"></a>
### OrdinaryDifferentialEquationSolveResult.decline

`OrdinaryDifferentialEquationSolveResult.decline`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_form.fb9c33113e1f"></a>
### OrdinaryDifferentialEquationSolveResult.form

`OrdinaryDifferentialEquationSolveResult.form`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_frequency_domain_equation.d67bda0a2e26"></a>
### OrdinaryDifferentialEquationSolveResult.frequency_domain_equation

`OrdinaryDifferentialEquationSolveResult.frequency_domain_equation`

Returns `expression`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generality.69c1f19a3095"></a>
### OrdinaryDifferentialEquationSolveResult.generality

`OrdinaryDifferentialEquationSolveResult.generality`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_generated_constants.76586028281a"></a>
### OrdinaryDifferentialEquationSolveResult.generated_constants

`OrdinaryDifferentialEquationSolveResult.generated_constants`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_image.423aa8e2cc90"></a>
### OrdinaryDifferentialEquationSolveResult.image

`OrdinaryDifferentialEquationSolveResult.image`

Returns `expression`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_method.75a7820ecba4"></a>
### OrdinaryDifferentialEquationSolveResult.method

`OrdinaryDifferentialEquationSolveResult.method`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_solution.6d23f2ed61c8"></a>
### OrdinaryDifferentialEquationSolveResult.solution

`OrdinaryDifferentialEquationSolveResult.solution`

Returns `expression`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsolveresult_verification.d464f1a7ea4c"></a>
### OrdinaryDifferentialEquationSolveResult.verification

`OrdinaryDifferentialEquationSolveResult.verification`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_components.ce8bfaadda21"></a>
### OrdinaryDifferentialEquationSystemSolveResult.components

`OrdinaryDifferentialEquationSystemSolveResult.components`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_decline.73605e35c453"></a>
### OrdinaryDifferentialEquationSystemSolveResult.decline

`OrdinaryDifferentialEquationSystemSolveResult.decline`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generality.29335d39f0fd"></a>
### OrdinaryDifferentialEquationSystemSolveResult.generality

`OrdinaryDifferentialEquationSystemSolveResult.generality`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_generated_constants.f8b463ed4cc5"></a>
### OrdinaryDifferentialEquationSystemSolveResult.generated_constants

`OrdinaryDifferentialEquationSystemSolveResult.generated_constants`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_method.e890e7536e13"></a>
### OrdinaryDifferentialEquationSystemSolveResult.method

`OrdinaryDifferentialEquationSystemSolveResult.method`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_route.ebc67035a80d"></a>
### OrdinaryDifferentialEquationSystemSolveResult.route

`OrdinaryDifferentialEquationSystemSolveResult.route`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemsolveresult_verification.9d0a62131f4c"></a>
### OrdinaryDifferentialEquationSystemSolveResult.verification

`OrdinaryDifferentialEquationSystemSolveResult.verification`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_generality.dc50930dc8fc"></a>
### OrdinaryDifferentialEquationSystemVerificationReport.generality

`OrdinaryDifferentialEquationSystemVerificationReport.generality`

Returns `str`.

<a id="placement-placement.python.python_class.ordinarydifferentialequationsystemverificationreport_required_rank.95834db51730"></a>
### OrdinaryDifferentialEquationSystemVerificationReport.required_rank

`OrdinaryDifferentialEquationSystemVerificationReport.required_rank`

Returns `int`.

<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction.bf6b31e5359a"></a>
### PartialDifferentialEquationArbitraryFunction

`class symi.PartialDifferentialEquationArbitraryFunction`

Returns `partial_differential_equation_arbitrary_function`.

<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_arity.84a63ebfd4de"></a>
### PartialDifferentialEquationArbitraryFunction.arity

`PartialDifferentialEquationArbitraryFunction.arity`

Returns `int`.

<a id="placement-placement.python.python_class.partialdifferentialequationarbitraryfunction_name.49a7f2bf3c70"></a>
### PartialDifferentialEquationArbitraryFunction.name

`PartialDifferentialEquationArbitraryFunction.name`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult.db76eb5b02c5"></a>
### PartialDifferentialEquationCanonicalizationResult

`class symi.PartialDifferentialEquationCanonicalizationResult`

Returns `partial_differential_equation_canonicalization_result`.

<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_canonicalized.b7cda59605f4"></a>
### PartialDifferentialEquationCanonicalizationResult.canonicalized

`PartialDifferentialEquationCanonicalizationResult.canonicalized`

Returns `bool`.

<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_decline.209eebc522b0"></a>
### PartialDifferentialEquationCanonicalizationResult.decline

`PartialDifferentialEquationCanonicalizationResult.decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_principal_form.55eaca035913"></a>
### PartialDifferentialEquationCanonicalizationResult.principal_form

`PartialDifferentialEquationCanonicalizationResult.principal_form`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationcanonicalizationresult_transformation_decline.e4758cff1d65"></a>
### PartialDifferentialEquationCanonicalizationResult.transformation_decline

`PartialDifferentialEquationCanonicalizationResult.transformation_decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationclassification.2853e3416a17"></a>
### PartialDifferentialEquationClassification

`class symi.PartialDifferentialEquationClassification`

Returns `partial_differential_equation_classification`.

<a id="placement-placement.python.python_class.partialdifferentialequationclassification_coefficient_data.d0f091b30ed3"></a>
### PartialDifferentialEquationClassification.coefficient_data

`PartialDifferentialEquationClassification.coefficient_data`

Returns `partial_differential_equation_coefficient_data`.

<a id="placement-placement.python.python_class.partialdifferentialequationclassification_linearity.56f639c46019"></a>
### PartialDifferentialEquationClassification.linearity

`PartialDifferentialEquationClassification.linearity`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationclassification_method_candidates.cb1e50b6f94c"></a>
### PartialDifferentialEquationClassification.method_candidates

`PartialDifferentialEquationClassification.method_candidates`

Returns `PyAny`.

<a id="placement-placement.python.python_class.partialdifferentialequationclassification_order.7d5c5173ea9b"></a>
### PartialDifferentialEquationClassification.order

`PartialDifferentialEquationClassification.order`

Returns `int`.

<a id="placement-placement.python.python_class.partialdifferentialequationclassification_second_order_principal_part.1c993426e743"></a>
### PartialDifferentialEquationClassification.second_order_principal_part

`PartialDifferentialEquationClassification.second_order_principal_part`

Returns `partial_differential_equation_principal_part`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_full_coefficients.daaae70574cb"></a>
### PartialDifferentialEquationCoefficientData.full_coefficients

`PartialDifferentialEquationCoefficientData.full_coefficients`

Returns `list[partial_differential_equation_jet_coefficient]`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_highest_order_coefficients.8b4789085db5"></a>
### PartialDifferentialEquationCoefficientData.highest_order_coefficients

`PartialDifferentialEquationCoefficientData.highest_order_coefficients`

Returns `list[partial_differential_equation_jet_coefficient]`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_homogeneous.dbe994183f40"></a>
### PartialDifferentialEquationCoefficientData.homogeneous

`PartialDifferentialEquationCoefficientData.homogeneous`

Returns `bool`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoefficientdata_remainder.49809b3ca92f"></a>
### PartialDifferentialEquationCoefficientData.remainder

`PartialDifferentialEquationCoefficientData.remainder`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange.a6259e7fc3ae"></a>
### PartialDifferentialEquationCoordinateChange

`class symi.PartialDifferentialEquationCoordinateChange`

Returns `partial_differential_equation_coordinate_change`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_forward_coordinates.02503a3a9116"></a>
### PartialDifferentialEquationCoordinateChange.forward_coordinates

`PartialDifferentialEquationCoordinateChange.forward_coordinates`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_inverse_coordinates.b11eb810ac1f"></a>
### PartialDifferentialEquationCoordinateChange.inverse_coordinates

`PartialDifferentialEquationCoordinateChange.inverse_coordinates`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_source_variables.5711dea1f360"></a>
### PartialDifferentialEquationCoordinateChange.source_variables

`PartialDifferentialEquationCoordinateChange.source_variables`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_dependent_function.121412f8190e"></a>
### PartialDifferentialEquationCoordinateChange.target_dependent_function

`PartialDifferentialEquationCoordinateChange.target_dependent_function`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationcoordinatechange_target_variables.418691a17ebb"></a>
### PartialDifferentialEquationCoordinateChange.target_variables

`PartialDifferentialEquationCoordinateChange.target_variables`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationjetcoefficient_derivative_orders.f1ad7bc43c9f"></a>
### PartialDifferentialEquationJetCoefficient.derivative_orders

`PartialDifferentialEquationJetCoefficient.derivative_orders`

Returns `list[int]`.

<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_method.5c046b720aee"></a>
### PartialDifferentialEquationMethodCandidate.method

`PartialDifferentialEquationMethodCandidate.method`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationmethodcandidate_proof_obligations.62b639706f98"></a>
### PartialDifferentialEquationMethodCandidate.proof_obligations

`PartialDifferentialEquationMethodCandidate.proof_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction.054567b401b6"></a>
### PartialDifferentialEquationPointSymmetryAction

`class symi.PartialDifferentialEquationPointSymmetryAction`

Returns `partial_differential_equation_point_symmetry_action`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry.a40e17458d0a"></a>
### PartialDifferentialEquationPointSymmetryAction.admits_additive_solution_symmetry

`PartialDifferentialEquationPointSymmetryAction.admits_additive_solution_symmetry`

Returns `bool`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_amplitude.0452aee1f4e0"></a>
### PartialDifferentialEquationPointSymmetryAction.amplitude

`PartialDifferentialEquationPointSymmetryAction.amplitude`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed.43551abec47e"></a>
### PartialDifferentialEquationPointSymmetryAction.applied_to_seed

`PartialDifferentialEquationPointSymmetryAction.applied_to_seed(seed)`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution.68bd4a5f4310"></a>
### PartialDifferentialEquationPointSymmetryAction.applied_to_seed_with_additive_solution

`PartialDifferentialEquationPointSymmetryAction.applied_to_seed_with_additive_solution(seed, additive_solution)`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_decline.ec0449047038"></a>
### PartialDifferentialEquationPointSymmetryAction.decline

`PartialDifferentialEquationPointSymmetryAction.decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_intertwining.e228d1a0b73d"></a>
### PartialDifferentialEquationPointSymmetryAction.intertwining

`PartialDifferentialEquationPointSymmetryAction.intertwining`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_invertibility.9065eb9a060b"></a>
### PartialDifferentialEquationPointSymmetryAction.invertibility

`PartialDifferentialEquationPointSymmetryAction.invertibility`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_multiplier.3aadf88e1108"></a>
### PartialDifferentialEquationPointSymmetryAction.multiplier

`PartialDifferentialEquationPointSymmetryAction.multiplier`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_outstanding_obligations.524c89762767"></a>
### PartialDifferentialEquationPointSymmetryAction.outstanding_obligations

`PartialDifferentialEquationPointSymmetryAction.outstanding_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_parameters.6783e40857bf"></a>
### PartialDifferentialEquationPointSymmetryAction.parameters

`PartialDifferentialEquationPointSymmetryAction.parameters`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_point_symmetry_decline.b8e4947aa41a"></a>
### PartialDifferentialEquationPointSymmetryAction.point_symmetry_decline

`PartialDifferentialEquationPointSymmetryAction.point_symmetry_decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryaction_transformed_coordinates.a43527f3e30b"></a>
### PartialDifferentialEquationPointSymmetryAction.transformed_coordinates

`PartialDifferentialEquationPointSymmetryAction.transformed_coordinates`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra.43e8e8506d73"></a>
### PartialDifferentialEquationPointSymmetryAlgebra

`class symi.PartialDifferentialEquationPointSymmetryAlgebra`

Returns `partial_differential_equation_point_symmetry_algebra`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry.0efa3cd7d81a"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.admits_additive_solution_symmetry

`PartialDifferentialEquationPointSymmetryAlgebra.admits_additive_solution_symmetry`

Returns `bool`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_basis.6303fe70e9f9"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.basis

`PartialDifferentialEquationPointSymmetryAlgebra.basis`

Returns `list[partial_differential_equation_point_symmetry_generator]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_decline.926d29357a74"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.decline

`PartialDifferentialEquationPointSymmetryAlgebra.decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_determining_equations.41a1666298dc"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.determining_equations

`PartialDifferentialEquationPointSymmetryAlgebra.determining_equations`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_general_generator.606696d514c2"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.general_generator

`PartialDifferentialEquationPointSymmetryAlgebra.general_generator`

Returns `partial_differential_equation_point_symmetry_generator`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_outstanding_obligations.38353b8499cb"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.outstanding_obligations

`PartialDifferentialEquationPointSymmetryAlgebra.outstanding_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetryalgebra_parameters.f071852ff56f"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.parameters

`PartialDifferentialEquationPointSymmetryAlgebra.parameters`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator.46dc178a0b19"></a>
### PartialDifferentialEquationPointSymmetryGenerator

`class symi.PartialDifferentialEquationPointSymmetryGenerator`

Returns `partial_differential_equation_point_symmetry_generator`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals.433d9a3c7be8"></a>
### PartialDifferentialEquationPointSymmetryGenerator.coordinate_infinitesimals

`PartialDifferentialEquationPointSymmetryGenerator.coordinate_infinitesimals`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal.418e6bc28927"></a>
### PartialDifferentialEquationPointSymmetryGenerator.dependent_infinitesimal

`PartialDifferentialEquationPointSymmetryGenerator.dependent_infinitesimal`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationprincipalcoefficient_derivative_orders.a56dfe30a372"></a>
### PartialDifferentialEquationPrincipalCoefficient.derivative_orders

`PartialDifferentialEquationPrincipalCoefficient.derivative_orders`

Returns `list[int]`.

<a id="placement-placement.python.python_class.partialdifferentialequationprincipalpart_derivative_coefficients.1a0212ab6c98"></a>
### PartialDifferentialEquationPrincipalPart.derivative_coefficients

`PartialDifferentialEquationPrincipalPart.derivative_coefficients`

Returns `list[partial_differential_equation_principal_coefficient]`.

<a id="placement-placement.python.python_class.partialdifferentialequationproblem.814ddc0a0b7c"></a>
### PartialDifferentialEquationProblem

`class symi.PartialDifferentialEquationProblem`

Returns `partial_differential_equation_problem`.

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_repr.b3dee485a3ee"></a>
### PartialDifferentialEquationProblem.__repr__

`PartialDifferentialEquationProblem.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_str.6a17cc0d3853"></a>
### PartialDifferentialEquationProblem.__str__

`PartialDifferentialEquationProblem.__str__()`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_boundary_conditions.8f03369049ed"></a>
### PartialDifferentialEquationProblem.boundary_conditions

`PartialDifferentialEquationProblem.boundary_conditions`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_dependent_function.b24dfa1c2033"></a>
### PartialDifferentialEquationProblem.dependent_function

`PartialDifferentialEquationProblem.dependent_function`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_independent_variables.fbea44b1e2dd"></a>
### PartialDifferentialEquationProblem.independent_variables

`PartialDifferentialEquationProblem.independent_variables`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationproblem_initial_conditions.36dcc6dd1e1d"></a>
### PartialDifferentialEquationProblem.initial_conditions

`PartialDifferentialEquationProblem.initial_conditions`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification.79bcc28d4c8c"></a>
### PartialDifferentialEquationSecondOrderClassification

`class symi.PartialDifferentialEquationSecondOrderClassification`

Returns `partial_differential_equation_second_order_classification`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_cases.f2ecce2bacf2"></a>
### PartialDifferentialEquationSecondOrderClassification.cases

`PartialDifferentialEquationSecondOrderClassification.cases`

Returns `list[partial_differential_equation_second_order_type_case]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_decline.66efe7a284d8"></a>
### PartialDifferentialEquationSecondOrderClassification.decline

`PartialDifferentialEquationSecondOrderClassification.decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_discriminant.eb5014c76a4a"></a>
### PartialDifferentialEquationSecondOrderClassification.discriminant

`PartialDifferentialEquationSecondOrderClassification.discriminant`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_equation_type.e904ef6cfc4d"></a>
### PartialDifferentialEquationSecondOrderClassification.equation_type

`PartialDifferentialEquationSecondOrderClassification.equation_type`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_principal_matrix.83b6ad0b8925"></a>
### PartialDifferentialEquationSecondOrderClassification.principal_matrix

`PartialDifferentialEquationSecondOrderClassification.principal_matrix`

Returns `matrix`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondorderclassification_proof_obligations.f0afe69b27f4"></a>
### PartialDifferentialEquationSecondOrderClassification.proof_obligations

`PartialDifferentialEquationSecondOrderClassification.proof_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase.937ad2b74813"></a>
### PartialDifferentialEquationSecondOrderTypeCase

`class symi.PartialDifferentialEquationSecondOrderTypeCase`

Returns `partial_differential_equation_second_order_type_case`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_condition.2de3ae8d0f76"></a>
### PartialDifferentialEquationSecondOrderTypeCase.condition

`PartialDifferentialEquationSecondOrderTypeCase.condition`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_class.partialdifferentialequationsecondordertypecase_equation_type.e9d6236bfae8"></a>
### PartialDifferentialEquationSecondOrderTypeCase.equation_type

`PartialDifferentialEquationSecondOrderTypeCase.equation_type`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation.363214c4f25b"></a>
### PartialDifferentialEquationSeparatedEquation

`class symi.PartialDifferentialEquationSeparatedEquation`

Returns `partial_differential_equation_separated_equation`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_independent_variable_name.bd1a8a824c6d"></a>
### PartialDifferentialEquationSeparatedEquation.independent_variable_name

`PartialDifferentialEquationSeparatedEquation.independent_variable_name`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparatedequation_residual.b55d79fdd2b3"></a>
### PartialDifferentialEquationSeparatedEquation.residual

`PartialDifferentialEquationSeparatedEquation.residual`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult.6eb4b5859523"></a>
### PartialDifferentialEquationSeparationResult

`class symi.PartialDifferentialEquationSeparationResult`

Returns `partial_differential_equation_separation_result`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_first_equation.da9731e36890"></a>
### PartialDifferentialEquationSeparationResult.first_equation

`PartialDifferentialEquationSeparationResult.first_equation`

Returns `partial_differential_equation_separated_equation`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_reconstruction.09d3fa1dfefd"></a>
### PartialDifferentialEquationSeparationResult.reconstruction

`PartialDifferentialEquationSeparationResult.reconstruction`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_second_equation.b2cd436c137a"></a>
### PartialDifferentialEquationSeparationResult.second_equation

`PartialDifferentialEquationSeparationResult.second_equation`

Returns `partial_differential_equation_separated_equation`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_separation_constant.0ac14df0a67a"></a>
### PartialDifferentialEquationSeparationResult.separation_constant

`PartialDifferentialEquationSeparationResult.separation_constant`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_strategy.fb54b0c578b5"></a>
### PartialDifferentialEquationSeparationResult.strategy

`PartialDifferentialEquationSeparationResult.strategy`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationseparationresult_verification.1e52e66e28d5"></a>
### PartialDifferentialEquationSeparationResult.verification

`PartialDifferentialEquationSeparationResult.verification`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution.63b8526ae52f"></a>
### PartialDifferentialEquationSimilaritySolution

`class symi.PartialDifferentialEquationSimilaritySolution`

Returns `partial_differential_equation_similarity_solution`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_decline.1993ab6269f4"></a>
### PartialDifferentialEquationSimilaritySolution.decline

`PartialDifferentialEquationSimilaritySolution.decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_invariant.e7c03a6b811a"></a>
### PartialDifferentialEquationSimilaritySolution.invariant

`PartialDifferentialEquationSimilaritySolution.invariant`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_constants.0a1697f7c174"></a>
### PartialDifferentialEquationSimilaritySolution.lifted_constants

`PartialDifferentialEquationSimilaritySolution.lifted_constants`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family.0c52fcf52fa4"></a>
### PartialDifferentialEquationSimilaritySolution.lifted_family

`PartialDifferentialEquationSimilaritySolution.lifted_family`

Returns `partial_differential_equation_solution_family`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_lifted_family_verification.df253a79ee32"></a>
### PartialDifferentialEquationSimilaritySolution.lifted_family_verification

`PartialDifferentialEquationSimilaritySolution.lifted_family_verification`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_multiplier.bb4222681cd4"></a>
### PartialDifferentialEquationSimilaritySolution.multiplier

`PartialDifferentialEquationSimilaritySolution.multiplier`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_outstanding_obligations.d4bee98b7e50"></a>
### PartialDifferentialEquationSimilaritySolution.outstanding_obligations

`PartialDifferentialEquationSimilaritySolution.outstanding_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_reduced_equation.65c060212fc5"></a>
### PartialDifferentialEquationSimilaritySolution.reduced_equation

`PartialDifferentialEquationSimilaritySolution.reduced_equation`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_similarity_variable.a5e2d49e4f89"></a>
### PartialDifferentialEquationSimilaritySolution.similarity_variable

`PartialDifferentialEquationSimilaritySolution.similarity_variable`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationsimilaritysolution_weight.43eaeb3aa2a4"></a>
### PartialDifferentialEquationSimilaritySolution.weight

`PartialDifferentialEquationSimilaritySolution.weight`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily.342004c3830c"></a>
### PartialDifferentialEquationSolutionFamily

`class symi.PartialDifferentialEquationSolutionFamily`

Returns `partial_differential_equation_solution_family`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_arbitrary_functions.299cc635305d"></a>
### PartialDifferentialEquationSolutionFamily.arbitrary_functions

`PartialDifferentialEquationSolutionFamily.arbitrary_functions`

Returns `list[partial_differential_equation_arbitrary_function]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_expression.c54e5da11722"></a>
### PartialDifferentialEquationSolutionFamily.expression

`PartialDifferentialEquationSolutionFamily.expression`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_form.1c89bcadafda"></a>
### PartialDifferentialEquationSolutionFamily.form

`PartialDifferentialEquationSolutionFamily.form`

Returns `PyAny`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionfamily_proof_obligations.2e0bde41df8e"></a>
### PartialDifferentialEquationSolutionFamily.proof_obligations

`PartialDifferentialEquationSolutionFamily.proof_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_discharged_obligations.4dd3fc6c7d13"></a>
### PartialDifferentialEquationSolutionProvenance.discharged_obligations

`PartialDifferentialEquationSolutionProvenance.discharged_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_linearity.689837d85d4d"></a>
### PartialDifferentialEquationSolutionProvenance.linearity

`PartialDifferentialEquationSolutionProvenance.linearity`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_method.eb18b6c344a2"></a>
### PartialDifferentialEquationSolutionProvenance.method

`PartialDifferentialEquationSolutionProvenance.method`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolutionprovenance_order.80c7a59ef077"></a>
### PartialDifferentialEquationSolutionProvenance.order

`PartialDifferentialEquationSolutionProvenance.order`

Returns `int`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult.9ba510b691a3"></a>
### PartialDifferentialEquationSolveResult

`class symi.PartialDifferentialEquationSolveResult`

Returns `partial_differential_equation_solve_result`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_decline.5ec3951f6b50"></a>
### PartialDifferentialEquationSolveResult.decline

`PartialDifferentialEquationSolveResult.decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_method.99e32f6d4621"></a>
### PartialDifferentialEquationSolveResult.method

`PartialDifferentialEquationSolveResult.method`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_provenance.de3205aa6707"></a>
### PartialDifferentialEquationSolveResult.provenance

`PartialDifferentialEquationSolveResult.provenance`

Returns `partial_differential_equation_solution_provenance`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_solution.1f292346c9da"></a>
### PartialDifferentialEquationSolveResult.solution

`PartialDifferentialEquationSolveResult.solution`

Returns `partial_differential_equation_solution_family`.

<a id="placement-placement.python.python_class.partialdifferentialequationsolveresult_verification.c6c44ab3ef2a"></a>
### PartialDifferentialEquationSolveResult.verification

`PartialDifferentialEquationSolveResult.verification`

Returns `partial_differential_equation_verification_report`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult.d20831abed72"></a>
### PartialDifferentialEquationTransformationResult

`class symi.PartialDifferentialEquationTransformationResult`

Returns `partial_differential_equation_transformation_result`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_coordinate_change.c0a6c7f8c2c7"></a>
### PartialDifferentialEquationTransformationResult.coordinate_change

`PartialDifferentialEquationTransformationResult.coordinate_change`

Returns `partial_differential_equation_coordinate_change`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_decline.51f4aa097b90"></a>
### PartialDifferentialEquationTransformationResult.decline

`PartialDifferentialEquationTransformationResult.decline`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_normalization_multiplier.0a7d0a2ec99b"></a>
### PartialDifferentialEquationTransformationResult.normalization_multiplier

`PartialDifferentialEquationTransformationResult.normalization_multiplier`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_target_problem.2d8d6a9199f5"></a>
### PartialDifferentialEquationTransformationResult.target_problem

`PartialDifferentialEquationTransformationResult.target_problem`

Returns `partial_differential_equation_problem`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationresult_transformed.afa1507c2444"></a>
### PartialDifferentialEquationTransformationResult.transformed

`PartialDifferentialEquationTransformationResult.transformed`

Returns `bool`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport.d3734a054b14"></a>
### PartialDifferentialEquationTransformationVerificationReport

`class symi.PartialDifferentialEquationTransformationVerificationReport`

Returns `partial_differential_equation_transformation_verification_report`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_claimed_governing_residual.feccf290837c"></a>
### PartialDifferentialEquationTransformationVerificationReport.claimed_governing_residual

`PartialDifferentialEquationTransformationVerificationReport.claimed_governing_residual`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_composition_residuals.d9fedd58e205"></a>
### PartialDifferentialEquationTransformationVerificationReport.composition_residuals

`PartialDifferentialEquationTransformationVerificationReport.composition_residuals`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_principal_congruence_residuals.a939bfb16497"></a>
### PartialDifferentialEquationTransformationVerificationReport.principal_congruence_residuals

`PartialDifferentialEquationTransformationVerificationReport.principal_congruence_residuals`

Returns `list[expression]`.

<a id="placement-placement.python.python_class.partialdifferentialequationtransformationverificationreport_transformed_governing_residual.de21233fe125"></a>
### PartialDifferentialEquationTransformationVerificationReport.transformed_governing_residual

`PartialDifferentialEquationTransformationVerificationReport.transformed_governing_residual`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport.53d4e9c949a7"></a>
### PartialDifferentialEquationVerificationReport

`class symi.PartialDifferentialEquationVerificationReport`

Returns `partial_differential_equation_verification_report`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_boundary_condition_residuals.d27e4537a107"></a>
### PartialDifferentialEquationVerificationReport.boundary_condition_residuals

`PartialDifferentialEquationVerificationReport.boundary_condition_residuals`

Returns `list[partial_differential_equation_verification_residual]`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_explicit_branch.c215fb42d5ba"></a>
### PartialDifferentialEquationVerificationReport.explicit_branch

`PartialDifferentialEquationVerificationReport.explicit_branch`

Returns `expression`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_governing_residual.174594f9f244"></a>
### PartialDifferentialEquationVerificationReport.governing_residual

`PartialDifferentialEquationVerificationReport.governing_residual`

Returns `PyAny`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_inconclusive_reason.b874f0a79d2b"></a>
### PartialDifferentialEquationVerificationReport.inconclusive_reason

`PartialDifferentialEquationVerificationReport.inconclusive_reason`

Returns `str`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_initial_condition_residuals.32a899a2e2b1"></a>
### PartialDifferentialEquationVerificationReport.initial_condition_residuals

`PartialDifferentialEquationVerificationReport.initial_condition_residuals`

Returns `list[partial_differential_equation_verification_residual]`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationreport_proof_obligations.f9ea81ab6102"></a>
### PartialDifferentialEquationVerificationReport.proof_obligations

`PartialDifferentialEquationVerificationReport.proof_obligations`

Returns `list[str]`.

<a id="placement-placement.python.python_class.partialdifferentialequationverificationresidual_residual.fe62a14ffa59"></a>
### PartialDifferentialEquationVerificationResidual.residual

`PartialDifferentialEquationVerificationResidual.residual`

Returns `expression`.

<a id="placement-placement.python.python_class.segment2d_length.dd559e0e77a3"></a>
### Segment2d.length

`Segment2d.length()`

Returns `expression`.

<a id="placement-placement.python.python_class.undefinedfunction_call.e796dd930962"></a>
### UndefinedFunction.__call__

`UndefinedFunction.__call__(*arguments)`

Returns `expression`.

<a id="placement-placement.python.python_class.undefinedfunction_repr.8398a418ad39"></a>
### UndefinedFunction.__repr__

`UndefinedFunction.__repr__()`

Returns `str`.

<a id="placement-placement.python.python_module.module_canonicalize_partial_differential_equation.a52ec715a39a"></a>
### module.canonicalize_partial_differential_equation

`symi.canonicalize_partial_differential_equation(problem)`

Returns `partial_differential_equation_canonicalization_result,`.

<a id="placement-placement.python.python_module.module_change_partial_differential_equation_variables.ea81302fbc97"></a>
### module.change_partial_differential_equation_variables

`symi.change_partial_differential_equation_variables(problem, target_variables, forward_coordinates=None, inverse_coordinates=None, target_dependent_function=None)`

Returns `partial_differential_equation_transformation_result,`.

<a id="placement-placement.python.python_module.module_classify_partial_differential_equation.35014b001694"></a>
### module.classify_partial_differential_equation

`symi.classify_partial_differential_equation(problem)`

Returns `partial_differential_equation_classification,`.

<a id="placement-placement.python.python_module.module_classify_second_order_partial_differential_equation.4366ea8e6378"></a>
### module.classify_second_order_partial_differential_equation

`symi.classify_second_order_partial_differential_equation(problem)`

Returns `partial_differential_equation_second_order_classification,`.

<a id="placement-placement.python.python_module.module_complex_entries.ad74d94f6a7e"></a>
### module.complex_entries

`symi.complex_entries(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_diagonal_matrix.cb2bd3eae1d2"></a>
### module.diagonal_matrix

`symi.diagonal_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_differentiate_bulk.362ccffbf089"></a>
### module.differentiate_bulk

`symi.differentiate_bulk(targets, variable)`

Returns `PyAny`.

<a id="placement-placement.python.python_module.module_discover_partial_differential_equation.52ddbbb333c3"></a>
### module.discover_partial_differential_equation

`symi.discover_partial_differential_equation(equation, initial_conditions=None, boundary_conditions=None)`

Returns `partial_differential_equation_problem`.

<a id="placement-placement.python.python_module.module_evaluate_numeric_bulk.80f5ed832fcb"></a>
### module.evaluate_numeric_bulk

`symi.evaluate_numeric_bulk(targets)`

Returns `PyAny`.

<a id="placement-placement.python.python_module.module_expand_bulk.dfeb447b0fd8"></a>
### module.expand_bulk

`symi.expand_bulk(targets)`

Returns `PyAny`.

<a id="placement-placement.python.python_module.module_explicit_partial_differential_equation_solution.2a00578eaf74"></a>
### module.explicit_partial_differential_equation_solution

`symi.explicit_partial_differential_equation_solution(solution, arbitrary_functions=None, proof_obligations=None)`

Returns `partial_differential_equation_solution_family,`.

<a id="placement-placement.python.python_module.module_full_rank_matrix.bca25f7ee25a"></a>
### module.full_rank_matrix

`symi.full_rank_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_hermitian_matrix.9fe4c0c586b6"></a>
### module.hermitian_matrix

`symi.hermitian_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_identity_matrix.4d6c93f48f1e"></a>
### module.identity_matrix

`symi.identity_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_implicit_partial_differential_equation_solution.192367f01daf"></a>
### module.implicit_partial_differential_equation_solution

`symi.implicit_partial_differential_equation_solution(residual, arbitrary_functions=None, proof_obligations=None)`

Returns `partial_differential_equation_solution_family,`.

<a id="placement-placement.python.python_module.module_initialize_parallelism.4ce7fbe05c03"></a>
### module.initialize_parallelism

`symi.initialize_parallelism(worker_count)`

Returns `str`.

<a id="placement-placement.python.python_module.module_integer_entries.d6ab920262bc"></a>
### module.integer_entries

`symi.integer_entries(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_integrate_definite_under_constraint.8f9a35858e9d"></a>
### module.integrate_definite_under_constraint

`symi.integrate_definite_under_constraint(input_expression, variable, lower, upper, constraint)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_invertible_matrix.4d17a3ac74e2"></a>
### module.invertible_matrix

`symi.invertible_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_lower_triangular_matrix.f7364e2611f4"></a>
### module.lower_triangular_matrix

`symi.lower_triangular_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_matrix_shape.169fd16e9013"></a>
### module.matrix_shape

`symi.matrix_shape(subject, rows, columns)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_nonnegative_assumption.7c69dc7cf6b5"></a>
### module.nonnegative_assumption

`symi.nonnegative_assumption(input_expression)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_nonpositive_assumption.e2a94e839e39"></a>
### module.nonpositive_assumption

`symi.nonpositive_assumption(input_expression)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_normal_matrix.b8fd28bfb4a1"></a>
### module.normal_matrix

`symi.normal_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_orthogonal_matrix.36bf053e5933"></a>
### module.orthogonal_matrix

`symi.orthogonal_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_parallelism_capability.462cfa180ab0"></a>
### module.parallelism_capability

`symi.parallelism_capability()`

Returns `PyAny`.

<a id="placement-placement.python.python_module.module_partial_differential_equation.ba416b0ca935"></a>
### module.partial_differential_equation

`symi.partial_differential_equation(equation, dependent_function, independent_variables, initial_conditions=None, boundary_conditions=None)`

Returns `partial_differential_equation_problem`.

<a id="placement-placement.python.python_module.module_positive_definite_matrix.5a24f83b14d4"></a>
### module.positive_definite_matrix

`symi.positive_definite_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_positive_semidefinite_matrix.4cc39df663df"></a>
### module.positive_semidefinite_matrix

`symi.positive_semidefinite_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_real_entries.1b5d05fc8a93"></a>
### module.real_entries

`symi.real_entries(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_separate_partial_differential_equation.7ed47d2f874d"></a>
### module.separate_partial_differential_equation

`symi.separate_partial_differential_equation(problem)`

Returns `partial_differential_equation_separation_result`.

<a id="placement-placement.python.python_module.module_serialize_bulk.afaf64d0cab2"></a>
### module.serialize_bulk

`symi.serialize_bulk(targets)`

Returns `PyAny`.

<a id="placement-placement.python.python_module.module_set_execution_mode.972044f1676d"></a>
### module.set_execution_mode

`symi.set_execution_mode(name)`

Returns `None`.

<a id="placement-placement.python.python_module.module_simplify_under_constraint.24b8db7c930a"></a>
### module.simplify_under_constraint

`symi.simplify_under_constraint(input_expression, constraint)`

Returns `expression`.

<a id="placement-placement.python.python_module.module_singular_matrix.6e5632e57c3f"></a>
### module.singular_matrix

`symi.singular_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_solve_partial_differential_equation.ac810cee7c6f"></a>
### module.solve_partial_differential_equation

`symi.solve_partial_differential_equation(problem, method="automatic")`

Returns `partial_differential_equation_solve_result,`.

<a id="placement-placement.python.python_module.module_solve_partial_differential_equation_with_transform_axis_specifications.6445539720cf"></a>
### module.solve_partial_differential_equation_with_transform_axis_specifications

`symi.solve_partial_differential_equation_with_transform_axis_specifications(problem, method, transform_axis_specifications)`

Returns `partial_differential_equation_solve_result`.

<a id="placement-placement.python.python_module.module_square_matrix.10c4c7e8efa1"></a>
### module.square_matrix

`symi.square_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_substitute_bulk.865d6094216b"></a>
### module.substitute_bulk

`symi.substitute_bulk(targets, variable, value)`

Returns `PyAny`.

<a id="placement-placement.python.python_module.module_symmetric_matrix.9e1bebd0ea64"></a>
### module.symmetric_matrix

`symi.symmetric_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_unitary_matrix.1e1e98f0779f"></a>
### module.unitary_matrix

`symi.unitary_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_upper_triangular_matrix.fc245841334f"></a>
### module.upper_triangular_matrix

`symi.upper_triangular_matrix(subject)`

Returns `assumption_proposition`.

<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_coordinate_transformation.894d29fe74aa"></a>
### module.verify_partial_differential_equation_coordinate_transformation

`symi.verify_partial_differential_equation_coordinate_transformation(problem, transformation)`

Returns `partial_differential_equation_transformation_verification_report,`.

<a id="placement-placement.python.python_module.module_verify_partial_differential_equation_solution.b40079d9e42a"></a>
### module.verify_partial_differential_equation_solution

`symi.verify_partial_differential_equation_solution(problem, solution)`

Returns `partial_differential_equation_verification_report,`.

<a id="placement-placement.python.python_module.module_zero_matrix.c698818abd16"></a>
### module.zero_matrix

`symi.zero_matrix(subject)`

Returns `assumption_proposition`.

