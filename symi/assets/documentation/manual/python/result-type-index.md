# Result-type index

Entries grouped by the shape they return. A host that returns a tuple where another returns a record keeps its own shape here.

## &'static str

- [`expression_type`](expressions.md#entry-presentation_python_api_expression_expression_type) — Expression method

## ( python_matrix, python_matrix, Vec<(python_expression, usize)>, )

- [`Matrix.jordan_decomposition`](matrix-functions.md#entry-presentation_python_api_matrix_jordan_decomposition) — Matrix method

## ( python_matrix, python_matrix, python_matrix, usize, Vec<python_expression>, )

- [`Matrix.smith_normal_form`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_smith_normal_form) — Matrix method

## (Vec<python_expression>, Vec<python_expression>)

- [`continued_fraction_quadratic_irrational`](number-theory.md#entry-presentation_python_api_session_continued_fraction_quadratic_irrational) — Default context

## (f64, f64)

- [`evaluate_to_complex_inexact`](expressions.md#entry-presentation_python_api_session_evaluate_to_complex_inexact) — Expression method
- [`evaluate_to_complex_inexact_at_precision`](expressions.md#entry-presentation_python_api_session_evaluate_to_complex_inexact_at_precision) — Expression method
- [`NumericDefiniteIntegrationResult.value`](calculus.md#entry-presentation_python_api_numericdefiniteintegrationresult_value) — NumericDefiniteIntegrationResult property

## (python_expression, python_expression)

- [`numerator_denominator`](expressions.md#entry-presentation_python_api_session_numerator_denominator) — Default context
- [`Point2d.coordinates`](geometry.md#entry-presentation_python_api_point2d_coordinates) — Point2d method

## (python_expression, python_expression, python_expression)

- [`extended_euclidean`](number-theory.md#entry-presentation_python_api_session_extended_euclidean) — Default context

## (python_matrix, python_matrix, python_matrix)

- [`Matrix.lower_upper_decomposition`](linear-algebra.md#entry-presentation_python_api_matrix_lower_upper_decomposition) — Matrix method

## (python_matrix, python_matrix, usize, Vec<usize>)

- [`Matrix.column_hermite_normal_form`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_column_hermite_normal_form) — Matrix method
- [`Matrix.hermite_normal_form`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_hermite_normal_form) — Matrix method

## (usize, Vec<python_expression>)

- [`Matrix.integer_cokernel_structure`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_integer_cokernel_structure) — Matrix method

## None

- [`add_assumptions`](assumptions.md#entry-presentation_python_api_session_add_assumptions) — Default context
- [`clear_all_assumptions`](assumptions.md#entry-presentation_python_api_session_clear_all_assumptions) — Default context
- [`clear_assumptions`](default-context.md#entry-presentation_python_api_session_clear_assumptions) — Default context
- [`reset_context`](construction-and-parsing.md#entry-presentation_python_api_session_reset_context) — Explicit context
- [`set_execution_mode`](context-safety.md#entry-presentation_python_api_session_set_execution_mode) — Default context

## NumericDefiniteIntegrationResult

Described under [`NumericDefiniteIntegrationResult`](calculus.md#numericdefiniteintegrationresult).

- [`NumericDefiniteIntegrationResult`](calculus.md#entry-presentation_python_api_numericdefiniteintegrationresult) — Type

## PyAny

- [`__getattribute__`](expressions.md#entry-presentation_python_host_python_expression_getattribute) — Expression method
- [`__iter__`](sets.md#entry-presentation_python_host_python_expression_iter) — Expression method
- [`Circle2d.__getattribute__`](geometry.md#entry-presentation_python_host_python_circle2d_getattribute) — Circle2d method
- [`differentiate_bulk`](context-safety.md#entry-presentation_python_api_session_differentiate_bulk) — Default context
- [`enumerate_set_in_interval`](sets.md#entry-presentation_python_api_session_enumerate_set_in_interval) — Default context
- [`evaluate_numeric_bulk`](context-safety.md#entry-presentation_python_api_session_evaluate_numeric_bulk) — Default context
- [`expand_bulk`](context-safety.md#entry-presentation_python_api_session_expand_bulk) — Default context
- [`global_optimum_on_semialgebraic`](optimization.md#entry-presentation_python_api_session_global_optimum_on_semialgebraic) — Default context
- [`karush_kuhn_tucker_points`](optimization.md#entry-presentation_python_api_session_karush_kuhn_tucker_points) — Default context
- [`lagrange_critical_points`](optimization.md#entry-presentation_python_api_session_lagrange_critical_points) — Default context
- [`Matrix.__getattribute__`](linear-algebra.md#entry-presentation_python_host_python_matrix_getattribute) — Matrix method
- [`parallelism_capability`](context-safety.md#entry-presentation_python_api_session_parallelism_capability) — Default context
- [`parse_latex`](construction-and-parsing.md#entry-presentation_python_api_session_parse_latex) — Default context
- [`parse_latex_with_environment`](construction-and-parsing.md#entry-presentation_python_api_session_parse_latex_with_environment) — Default context
- [`parse_serialized_object`](serialization-and-output.md#entry-presentation_python_api_session_parse_serialized_object) — Default context
- [`PartialDifferentialEquationClassification.method_candidates`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationclassification_method_candidates) — PartialDifferentialEquationClassification property
- [`PartialDifferentialEquationSolutionFamily.form`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionfamily_form) — PartialDifferentialEquationSolutionFamily property
- [`PartialDifferentialEquationVerificationReport.governing_residual`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport_governing_residual) — PartialDifferentialEquationVerificationReport property
- [`Point2d.__getattribute__`](geometry.md#entry-presentation_python_host_python_point2d_getattribute) — Point2d method
- [`Polygon2d.__getattribute__`](geometry.md#entry-presentation_python_host_python_polygon2d_getattribute) — Polygon2d method
- [`roots_with_multiplicities`](solving.md#entry-presentation_python_api_session_roots_with_multiplicities) — Default context
- [`Segment2d.__getattribute__`](geometry.md#entry-presentation_python_host_python_segment2d_getattribute) — Segment2d method
- [`serialize_bulk`](context-safety.md#entry-presentation_python_api_session_serialize_bulk) — Default context
- [`simplify_bulk`](context-safety.md#entry-presentation_python_api_session_simplify_bulk) — Default context
- [`solve_polynomial_system`](solving.md#entry-presentation_python_api_session_solve_polynomial_system) — Default context
- [`substitute_bulk`](context-safety.md#entry-presentation_python_api_session_substitute_bulk) — Default context
- [`Triangle2d.__getattribute__`](geometry.md#entry-presentation_python_host_python_triangle2d_getattribute) — Triangle2d method
- [`unconstrained_critical_points`](optimization.md#entry-presentation_python_api_session_unconstrained_critical_points) — Default context

## PyList

- [`to_list`](expressions.md#entry-presentation_python_api_expression_to_list) — Expression method
- [`union_components`](expressions.md#entry-presentation_python_api_expression_union_components) — Expression method

## PythonNumericDefiniteIntegrationResult

- [`integrate_definite_numeric`](calculus.md#entry-presentation_python_api_session_integrate_definite_numeric) — Default context

## Self

- [`Context`](object-model.md#entry-presentation_python_api_session) — Context constructor
- [`CylindricalAlgebraicDecomposition`](cad.md#entry-presentation_python_api_cylindricalalgebraicdecomposition) — CylindricalAlgebraicDecomposition constructor

## assumption_proposition

- [`algebraic_assumption`](assumptions.md#entry-presentation_python_api_session_algebraic_assumption) — Default context
- [`assumption_proposition_from_logical_expression`](assumptions.md#entry-presentation_python_api_session_assumption_proposition_from_logical_expression) — Default context
- [`AssumptionProposition`](assumptions.md#entry-presentation_python_api_assumptionproposition) — Type
- [`AssumptionProposition.and`](assumptions.md#entry-presentation_python_api_assumptionproposition_and) — AssumptionProposition method
- [`AssumptionProposition.not`](assumptions.md#entry-presentation_python_api_assumptionproposition_not) — AssumptionProposition method
- [`AssumptionProposition.or`](assumptions.md#entry-presentation_python_api_assumptionproposition_or) — AssumptionProposition method
- [`complex_assumption`](assumptions.md#entry-presentation_python_api_session_complex_assumption) — Default context
- [`complex_entries`](linear-algebra.md#entry-presentation_python_api_session_complex_entries) — Default context
- [`composite_assumption`](assumptions.md#entry-presentation_python_api_session_composite_assumption) — Default context
- [`congruent_assumption`](assumptions.md#entry-presentation_python_api_session_congruent_assumption) — Default context
- [`defined_assumption`](assumptions.md#entry-presentation_python_api_session_defined_assumption) — Default context
- [`deserialize_assumption_proposition`](assumptions.md#entry-presentation_python_api_session_deserialize_assumption_proposition) — Default context
- [`diagonal_matrix`](matrix-construction.md#entry-presentation_python_api_session_diagonal_matrix) — Default context
- [`equal_assumption`](assumptions.md#entry-presentation_python_api_session_equal_assumption) — Default context
- [`even_assumption`](assumptions.md#entry-presentation_python_api_session_even_assumption) — Default context
- [`extended_real_assumption`](assumptions.md#entry-presentation_python_api_session_extended_real_assumption) — Default context
- [`finite_assumption`](assumptions.md#entry-presentation_python_api_session_finite_assumption) — Default context
- [`full_rank_matrix`](linear-algebra.md#entry-presentation_python_api_session_full_rank_matrix) — Default context
- [`greater_assumption`](assumptions.md#entry-presentation_python_api_session_greater_assumption) — Default context
- [`greater_or_equal_assumption`](assumptions.md#entry-presentation_python_api_session_greater_or_equal_assumption) — Default context
- [`hermitian_matrix`](linear-algebra.md#entry-presentation_python_api_session_hermitian_matrix) — Default context
- [`identity_matrix`](matrix-construction.md#entry-presentation_python_api_session_identity_matrix) — Default context
- [`infinite_assumption`](assumptions.md#entry-presentation_python_api_session_infinite_assumption) — Default context
- [`integer_assumption`](assumptions.md#entry-presentation_python_api_session_integer_assumption) — Default context
- [`integer_entries`](linear-algebra.md#entry-presentation_python_api_session_integer_entries) — Default context
- [`invertible_matrix`](linear-algebra.md#entry-presentation_python_api_session_invertible_matrix) — Default context
- [`irrational_assumption`](assumptions.md#entry-presentation_python_api_session_irrational_assumption) — Default context
- [`less_assumption`](assumptions.md#entry-presentation_python_api_session_less_assumption) — Default context
- [`less_or_equal_assumption`](assumptions.md#entry-presentation_python_api_session_less_or_equal_assumption) — Default context
- [`lower_triangular_matrix`](linear-algebra.md#entry-presentation_python_api_session_lower_triangular_matrix) — Default context
- [`matrix_shape`](linear-algebra.md#entry-presentation_python_api_session_matrix_shape) — Default context
- [`member_assumption`](assumptions.md#entry-presentation_python_api_session_member_assumption) — Default context
- [`natural_assumption`](assumptions.md#entry-presentation_python_api_session_natural_assumption) — Default context
- [`negative_assumption`](assumptions.md#entry-presentation_python_api_session_negative_assumption) — Default context
- [`nonnegative_assumption`](assumptions.md#entry-presentation_python_api_session_nonnegative_assumption) — Default context
- [`nonpositive_assumption`](assumptions.md#entry-presentation_python_api_session_nonpositive_assumption) — Default context
- [`nonzero_assumption`](assumptions.md#entry-presentation_python_api_session_nonzero_assumption) — Default context
- [`normal_matrix`](linear-algebra.md#entry-presentation_python_api_session_normal_matrix) — Default context
- [`not_equal_assumption`](assumptions.md#entry-presentation_python_api_session_not_equal_assumption) — Default context
- [`odd_assumption`](assumptions.md#entry-presentation_python_api_session_odd_assumption) — Default context
- [`orthogonal_matrix`](linear-algebra.md#entry-presentation_python_api_session_orthogonal_matrix) — Default context
- [`PartialDifferentialEquationSecondOrderTypeCase.condition`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondordertypecase_condition) — PartialDifferentialEquationSecondOrderTypeCase property
- [`positive_assumption`](assumptions.md#entry-presentation_python_api_session_positive_assumption) — Default context
- [`positive_definite_matrix`](linear-algebra.md#entry-presentation_python_api_session_positive_definite_matrix) — Default context
- [`positive_integer_assumption`](assumptions.md#entry-presentation_python_api_session_positive_integer_assumption) — Default context
- [`positive_semidefinite_matrix`](linear-algebra.md#entry-presentation_python_api_session_positive_semidefinite_matrix) — Default context
- [`prime_assumption`](assumptions.md#entry-presentation_python_api_session_prime_assumption) — Default context
- [`rational_assumption`](assumptions.md#entry-presentation_python_api_session_rational_assumption) — Default context
- [`real_assumption`](assumptions.md#entry-presentation_python_api_session_real_assumption) — Default context
- [`real_entries`](linear-algebra.md#entry-presentation_python_api_session_real_entries) — Default context
- [`singular_matrix`](linear-algebra.md#entry-presentation_python_api_session_singular_matrix) — Default context
- [`square_matrix`](linear-algebra.md#entry-presentation_python_api_session_square_matrix) — Default context
- [`symmetric_matrix`](linear-algebra.md#entry-presentation_python_api_session_symmetric_matrix) — Default context
- [`transcendental_assumption`](assumptions.md#entry-presentation_python_api_session_transcendental_assumption) — Default context
- [`unitary_matrix`](linear-algebra.md#entry-presentation_python_api_session_unitary_matrix) — Default context
- [`upper_triangular_matrix`](linear-algebra.md#entry-presentation_python_api_session_upper_triangular_matrix) — Default context
- [`zero_assumption`](assumptions.md#entry-presentation_python_api_session_zero_assumption) — Default context
- [`zero_matrix`](matrix-construction.md#entry-presentation_python_api_session_zero_matrix) — Default context

## assumption_scope

Described under [`AssumptionScope`](assumptions.md#ask).

- [`assuming`](assumptions.md#entry-presentation_python_api_session_assuming) — Default context
- [`AssumptionScope`](assumptions.md#entry-presentation_python_api_assumptionscope) — Type

## bool

- [`__bool__`](expressions.md#entry-presentation_python_host_python_expression_bool) — Expression method
- [`__eq__`](expressions.md#entry-presentation_python_host_python_expression_eq) — Expression method
- [`__ne__`](expressions.md#entry-presentation_python_host_python_expression_ne) — Expression method
- [`ask`](assumptions.md#entry-presentation_python_api_session_ask) — Default context
- [`Circle2d.is_stale`](geometry.md#entry-presentation_python_api_circle2d_is_stale) — Circle2d property
- [`could_hold`](assumptions.md#entry-presentation_python_api_session_could_hold) — Default context
- [`equals`](expressions.md#entry-presentation_python_api_expression_equals) — Expression method
- [`evaluate_truth`](logic.md#entry-presentation_python_api_session_evaluate_truth) — Default context
- [`ideal_membership`](polynomials.md#entry-presentation_python_api_session_ideal_membership) — Default context
- [`is_algebraic`](expressions.md#entry-presentation_python_api_expression_is_algebraic) — Expression method
- [`is_complex`](expressions.md#entry-presentation_python_api_expression_is_complex) — Expression method
- [`is_composite`](expressions.md#entry-presentation_python_api_expression_is_composite) — Expression method
- [`is_defined`](expressions.md#entry-presentation_python_api_expression_is_defined) — Expression method
- [`is_equality`](expressions.md#entry-presentation_python_api_expression_is_equality) — Expression method
- [`is_even`](expressions.md#entry-presentation_python_api_expression_is_even) — Expression method
- [`is_extended_real`](expressions.md#entry-presentation_python_api_expression_is_extended_real) — Expression method
- [`is_finite`](expressions.md#entry-presentation_python_api_expression_is_finite) — Expression method
- [`is_finite_set`](expressions.md#entry-presentation_python_api_expression_is_finite_set) — Expression method
- [`is_image_set`](expressions.md#entry-presentation_python_api_expression_is_image_set) — Expression method
- [`is_infinite`](expressions.md#entry-presentation_python_api_expression_is_infinite) — Expression method
- [`is_integer`](expressions.md#entry-presentation_python_api_expression_is_integer) — Expression method
- [`is_integral`](expressions.md#entry-presentation_python_api_expression_is_integral) — Expression method
- [`is_interval`](expressions.md#entry-presentation_python_api_expression_is_interval) — Expression method
- [`is_irrational`](expressions.md#entry-presentation_python_api_expression_is_irrational) — Expression method
- [`is_matrix`](expressions.md#entry-presentation_python_api_expression_is_matrix) — Expression method
- [`is_member`](sets.md#entry-presentation_python_api_session_is_member) — Default context
- [`is_natural`](expressions.md#entry-presentation_python_api_expression_is_natural) — Expression method
- [`is_negative`](expressions.md#entry-presentation_python_api_expression_is_negative) — Expression method
- [`is_nonnegative`](expressions.md#entry-presentation_python_api_session_is_nonnegative) — Expression method
- [`is_nonpositive`](expressions.md#entry-presentation_python_api_session_is_nonpositive) — Expression method
- [`is_nonzero`](expressions.md#entry-presentation_python_api_expression_is_nonzero) — Expression method
- [`is_odd`](expressions.md#entry-presentation_python_api_expression_is_odd) — Expression method
- [`is_positive`](expressions.md#entry-presentation_python_api_expression_is_positive) — Expression method
- [`is_positive_integer`](expressions.md#entry-presentation_python_api_expression_is_positive_integer) — Expression method
- [`is_prime`](number-theory.md#entry-presentation_python_api_session_is_prime) — Default context
- [`is_rational`](expressions.md#entry-presentation_python_api_expression_is_rational) — Expression method
- [`is_real`](expressions.md#entry-presentation_python_api_expression_is_real) — Expression method
- [`is_stale`](expressions.md#entry-presentation_python_api_expression_is_stale) — Expression method
- [`is_subset`](sets.md#entry-presentation_python_api_session_is_subset) — Default context
- [`is_transcendental`](expressions.md#entry-presentation_python_api_expression_is_transcendental) — Expression method
- [`is_union`](expressions.md#entry-presentation_python_api_expression_is_union) — Expression method
- [`is_zero`](expressions.md#entry-presentation_python_api_expression_is_zero) — Expression method
- [`Matrix.has_complex_entries`](linear-algebra.md#entry-presentation_python_api_matrix_has_complex_entries) — Matrix method
- [`Matrix.has_integer_entries`](linear-algebra.md#entry-presentation_python_api_matrix_has_integer_entries) — Matrix method
- [`Matrix.has_real_entries`](linear-algebra.md#entry-presentation_python_api_matrix_has_real_entries) — Matrix method
- [`Matrix.is_diagonal_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_diagonal_matrix) — Matrix method
- [`Matrix.is_equality`](linear-algebra.md#entry-presentation_python_api_matrix_is_equality) — Matrix method
- [`Matrix.is_finite_set`](linear-algebra.md#entry-presentation_python_api_matrix_is_finite_set) — Matrix method
- [`Matrix.is_full_rank_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_full_rank_matrix) — Matrix method
- [`Matrix.is_hermitian_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_hermitian_matrix) — Matrix method
- [`Matrix.is_identity_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_identity_matrix) — Matrix method
- [`Matrix.is_image_set`](linear-algebra.md#entry-presentation_python_api_matrix_is_image_set) — Matrix method
- [`Matrix.is_integral`](linear-algebra.md#entry-presentation_python_api_matrix_is_integral) — Matrix method
- [`Matrix.is_invertible_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_invertible_matrix) — Matrix method
- [`Matrix.is_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_matrix) — Matrix property
- [`Matrix.is_normal_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_normal_matrix) — Matrix method
- [`Matrix.is_orthogonal_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_orthogonal_matrix) — Matrix method
- [`Matrix.is_positive`](linear-algebra.md#entry-presentation_python_api_matrix_is_positive) — Matrix method
- [`Matrix.is_positive_definite_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_positive_definite_matrix) — Matrix method
- [`Matrix.is_positive_semidefinite_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_positive_semidefinite_matrix) — Matrix method
- [`Matrix.is_real`](linear-algebra.md#entry-presentation_python_api_matrix_is_real) — Matrix method
- [`Matrix.is_singular_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_singular_matrix) — Matrix method
- [`Matrix.is_square`](linear-algebra.md#entry-presentation_python_api_matrix_is_square) — Matrix method
- [`Matrix.is_stale`](linear-algebra.md#entry-presentation_python_api_matrix_is_stale) — Matrix property
- [`Matrix.is_symmetric_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_symmetric_matrix) — Matrix method
- [`Matrix.is_union`](linear-algebra.md#entry-presentation_python_api_matrix_is_union) — Matrix method
- [`Matrix.is_unitary_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_unitary_matrix) — Matrix method
- [`Matrix.is_zero_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_is_zero_matrix) — Matrix method
- [`PartialDifferentialEquationCanonicalizationResult.canonicalized`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_canonicalized) — PartialDifferentialEquationCanonicalizationResult property
- [`PartialDifferentialEquationCoefficientData.homogeneous`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoefficientdata_homogeneous) — PartialDifferentialEquationCoefficientData property
- [`PartialDifferentialEquationPointSymmetryAction.admits_additive_solution_symmetry`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_admits_additive_solution_symmetry) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAlgebra.admits_additive_solution_symmetry`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_admits_additive_solution_symmetry) — PartialDifferentialEquationPointSymmetryAlgebra property
- [`PartialDifferentialEquationSolutionFamily.establishes_completeness`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionfamily_establishes_completeness) — PartialDifferentialEquationSolutionFamily property
- [`PartialDifferentialEquationTransformationResult.transformed`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationresult_transformed) — PartialDifferentialEquationTransformationResult property
- [`Point2d.is_stale`](geometry.md#entry-presentation_python_api_point2d_is_stale) — Point2d property
- [`Polygon2d.is_stale`](geometry.md#entry-presentation_python_api_polygon2d_is_stale) — Polygon2d property
- [`Segment2d.is_stale`](geometry.md#entry-presentation_python_api_segment2d_is_stale) — Segment2d property
- [`Triangle2d.is_stale`](geometry.md#entry-presentation_python_api_triangle2d_is_stale) — Triangle2d property

## circle_2d

Described under [`Circle2d`](geometry.md#circle2d_area).

- [`Circle2d`](geometry.md#entry-presentation_python_api_circle2d) — Circle2d constructor
- [`circle_2d`](geometry.md#entry-presentation_python_api_session_circle_2d) — Explicit context

## context

Described under [`Context`](elementary-functions.md#abs).

- [`default_context`](default-context.md#entry-presentation_python_api_session_default_context) — Default context

## definite_integration_result

Described under [`DefiniteIntegrationResult`](calculus.md#definiteintegrationresult).

- [`DefiniteIntegrationResult`](calculus.md#entry-presentation_python_api_definiteintegrationresult) — Type
- [`integrate_definite_detailed`](calculus.md#entry-presentation_python_api_session_integrate_definite_detailed) — Default context

## expression

Described under [`Expression`](elementary-functions.md#absolute_value).

- [`__add__`](expressions.md#entry-presentation_python_host_python_expression_add) — Expression method
- [`__mul__`](expressions.md#entry-presentation_python_host_python_expression_mul) — Expression method
- [`__neg__`](expressions.md#entry-presentation_python_host_python_expression_neg) — Expression method
- [`__pow__`](expressions.md#entry-presentation_python_host_python_expression_pow) — Expression method
- [`__radd__`](expressions.md#entry-presentation_python_host_python_expression_radd) — Expression method
- [`__rmul__`](expressions.md#entry-presentation_python_host_python_expression_rmul) — Expression method
- [`__rpow__`](expressions.md#entry-presentation_python_host_python_expression_rpow) — Expression method
- [`__rsub__`](expressions.md#entry-presentation_python_host_python_expression_rsub) — Expression method
- [`__rtruediv__`](expressions.md#entry-presentation_python_host_python_expression_rtruediv) — Expression method
- [`__sub__`](expressions.md#entry-presentation_python_host_python_expression_sub) — Expression method
- [`__truediv__`](expressions.md#entry-presentation_python_host_python_expression_truediv) — Expression method
- [`abs`](elementary-functions.md#entry-presentation_python_api_session_abs) — Default context
- [`arccos`](elementary-functions.md#entry-presentation_python_api_session_arccos) — Default context
- [`arccosh`](elementary-functions.md#entry-presentation_python_api_session_arccosh) — Default context
- [`arccot`](elementary-functions.md#entry-presentation_python_api_session_arccot) — Default context
- [`arccoth`](elementary-functions.md#entry-presentation_python_api_session_arccoth) — Default context
- [`arccsc`](elementary-functions.md#entry-presentation_python_api_session_arccsc) — Default context
- [`arccsch`](elementary-functions.md#entry-presentation_python_api_session_arccsch) — Default context
- [`arcsec`](elementary-functions.md#entry-presentation_python_api_session_arcsec) — Default context
- [`arcsech`](elementary-functions.md#entry-presentation_python_api_session_arcsech) — Default context
- [`arcsin`](elementary-functions.md#entry-presentation_python_api_session_arcsin) — Default context
- [`arcsinh`](elementary-functions.md#entry-presentation_python_api_session_arcsinh) — Default context
- [`arctan`](elementary-functions.md#entry-presentation_python_api_session_arctan) — Default context
- [`arctanh`](elementary-functions.md#entry-presentation_python_api_session_arctanh) — Default context
- [`AssumptionProposition.congruence_modulus`](assumptions.md#entry-presentation_python_api_assumptionproposition_congruence_modulus) — Default context
- [`AssumptionProposition.left_operand`](assumptions.md#entry-presentation_python_api_assumptionproposition_left_operand) — Default context
- [`AssumptionProposition.membership_element`](assumptions.md#entry-presentation_python_api_assumptionproposition_membership_element) — Default context
- [`AssumptionProposition.membership_set`](assumptions.md#entry-presentation_python_api_assumptionproposition_membership_set) — Default context
- [`AssumptionProposition.right_operand`](assumptions.md#entry-presentation_python_api_assumptionproposition_right_operand) — Default context
- [`bell_number`](combinatorics.md#entry-presentation_python_api_session_bell_number) — Default context
- [`beta`](special-functions.md#entry-presentation_python_api_session_beta) — Default context
- [`binomial`](elementary-functions.md#entry-presentation_python_api_session_binomial) — Default context
- [`cancel`](simplification-general.md#entry-presentation_python_api_session_cancel) — Default context
- [`carlson_rc`](special-functions.md#entry-presentation_python_api_session_carlson_rc) — Default context
- [`carlson_rd`](special-functions.md#entry-presentation_python_api_session_carlson_rd) — Default context
- [`carlson_rf`](special-functions.md#entry-presentation_python_api_session_carlson_rf) — Default context
- [`carlson_rj`](special-functions.md#entry-presentation_python_api_session_carlson_rj) — Default context
- [`catalan_number`](combinatorics.md#entry-presentation_python_api_session_catalan_number) — Default context
- [`ceiling`](elementary-functions.md#entry-presentation_python_api_session_ceiling) — Default context
- [`characteristic_function`](statistics.md#entry-presentation_python_api_session_characteristic_function) — Default context
- [`chebyshev_polynomial_first_kind`](special-functions.md#entry-presentation_python_api_session_chebyshev_polynomial_first_kind) — Default context
- [`chebyshev_polynomial_second_kind`](special-functions.md#entry-presentation_python_api_session_chebyshev_polynomial_second_kind) — Default context
- [`chinese_remainder`](number-theory.md#entry-presentation_python_api_session_chinese_remainder) — Default context
- [`Circle2d.area`](geometry.md#entry-presentation_python_api_circle2d_area) — Circle2d method
- [`Circle2d.circumference`](geometry.md#entry-presentation_python_api_circle2d_circumference) — Circle2d method
- [`Circle2d.equation`](geometry.md#entry-presentation_python_api_circle2d_equation) — Circle2d method
- [`Circle2d.radius`](geometry.md#entry-presentation_python_api_circle2d_radius) — Circle2d property
- [`coefficient`](polynomials.md#entry-presentation_python_api_session_coefficient) — Default context
- [`collect`](algebraic-transforms.md#entry-presentation_python_api_session_collect) — Default context
- [`collect_radicals`](algebraic-transforms.md#entry-presentation_python_api_session_collect_radicals) — Default context
- [`combine_logarithm`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_combine_logarithm) — Default context
- [`combine_powers`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_combine_powers) — Default context
- [`combine_trigonometric`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_combine_trigonometric) — Default context
- [`complete_the_square`](algebraic-transforms.md#entry-presentation_python_api_session_complete_the_square) — Default context
- [`complex_plane`](sets.md#entry-presentation_python_api_session_complex_plane) — Default context
- [`condition_set`](sets.md#entry-presentation_python_api_session_condition_set) — Default context
- [`conjugate`](elementary-functions.md#entry-presentation_python_api_session_conjugate) — Default context
- [`conjunctive_normal_form`](logical-transforms.md#entry-presentation_python_api_session_conjunctive_normal_form) — Default context
- [`continuous_domain`](calculus.md#entry-presentation_python_api_session_continuous_domain) — Default context
- [`cos`](elementary-functions.md#entry-presentation_python_api_session_cos) — Default context
- [`cosh`](elementary-functions.md#entry-presentation_python_api_session_cosh) — Default context
- [`cot`](elementary-functions.md#entry-presentation_python_api_session_cot) — Default context
- [`coth`](elementary-functions.md#entry-presentation_python_api_session_coth) — Default context
- [`covariance`](statistics.md#entry-presentation_python_api_session_covariance) — Default context
- [`csc`](elementary-functions.md#entry-presentation_python_api_session_csc) — Default context
- [`csch`](elementary-functions.md#entry-presentation_python_api_session_csch) — Default context
- [`cumulant`](statistics.md#entry-presentation_python_api_session_cumulant) — Default context
- [`cumulative_distribution`](statistics.md#entry-presentation_python_api_session_cumulative_distribution) — Default context
- [`DefiniteIntegrationResult.value`](calculus.md#entry-presentation_python_api_definiteintegrationresult_value) — DefiniteIntegrationResult property
- [`denest_powers`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_denest_powers) — Default context
- [`denest_radicals`](algebraic-transforms.md#entry-presentation_python_api_session_denest_radicals) — Default context
- [`denominator`](expressions.md#entry-presentation_python_api_session_denominator) — Default context
- [`density`](statistics.md#entry-presentation_python_api_session_density) — Default context
- [`derivative`](deferred-forms.md#entry-presentation_python_api_session_derivative) — Default context
- [`differentiate`](calculus.md#entry-presentation_python_api_session_differentiate) — Default context
- [`digamma`](special-functions.md#entry-presentation_python_api_session_digamma) — Default context
- [`disjunctive_normal_form`](logical-transforms.md#entry-presentation_python_api_session_disjunctive_normal_form) — Default context
- [`distribution`](statistics.md#entry-presentation_python_api_session_distribution) — Default context
- [`divergence`](vector-calculus.md#entry-presentation_python_api_session_divergence) — Default context
- [`divisor_count`](number-theory.md#entry-presentation_python_api_session_divisor_count) — Default context
- [`divisor_sigma`](number-theory.md#entry-presentation_python_api_session_divisor_sigma) — Default context
- [`duplicate`](expressions.md#entry-presentation_python_api_expression_duplicate) — Expression method
- [`e`](evaluation-and-constants.md#entry-presentation_python_api_session_e) — Default context
- [`eliminate_derived_logical_connectives`](logical-transforms.md#entry-presentation_python_api_session_eliminate_derived_logical_connectives) — Default context
- [`eliminate_quantifiers`](solving.md#entry-presentation_python_api_session_eliminate_quantifiers) — Default context
- [`elliptic_e`](special-functions.md#entry-presentation_python_api_session_elliptic_e) — Default context
- [`elliptic_e_incomplete`](special-functions.md#entry-presentation_python_api_session_elliptic_e_incomplete) — Default context
- [`elliptic_f`](special-functions.md#entry-presentation_python_api_session_elliptic_f) — Default context
- [`elliptic_k`](special-functions.md#entry-presentation_python_api_session_elliptic_k) — Default context
- [`elliptic_pi`](special-functions.md#entry-presentation_python_api_session_elliptic_pi) — Default context
- [`elliptic_pi_incomplete`](special-functions.md#entry-presentation_python_api_session_elliptic_pi_incomplete) — Default context
- [`empty_set`](sets.md#entry-presentation_python_api_session_empty_set) — Default context
- [`equal`](relations.md#entry-presentation_python_api_session_equal) — Default context
- [`euler_gamma`](evaluation-and-constants.md#entry-presentation_python_api_session_euler_gamma) — Default context
- [`euler_totient`](number-theory.md#entry-presentation_python_api_session_euler_totient) — Default context
- [`evaluate_limit`](calculus.md#entry-presentation_python_api_session_evaluate_limit) — Default context
- [`evaluate_numeric`](calculus.md#entry-presentation_python_api_session_evaluate_numeric) — Default context
- [`execute`](calculus.md#entry-presentation_python_api_session_execute) — Default context
- [`exp`](elementary-functions.md#entry-presentation_python_api_session_exp) — Default context
- [`expand`](algebraic-transforms.md#entry-presentation_python_api_session_expand) — Default context
- [`expand_complex`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_expand_complex) — Default context
- [`expand_logarithm`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_expand_logarithm) — Default context
- [`expand_power_base`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_expand_power_base) — Default context
- [`expand_trigonometric`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_expand_trigonometric) — Default context
- [`expectation`](statistics.md#entry-presentation_python_api_session_expectation) — Default context
- [`Expression`](expressions.md#entry-presentation_python_api_expression) — Type
- [`factor`](algebraic-transforms.md#entry-presentation_python_api_session_factor) — Default context
- [`factor_common_terms`](algebraic-transforms.md#entry-presentation_python_api_session_factor_common_terms) — Default context
- [`factorial`](elementary-functions.md#entry-presentation_python_api_session_factorial) — Default context
- [`falling_factorial`](combinatorics.md#entry-presentation_python_api_session_falling_factorial) — Default context
- [`fibonacci_number`](combinatorics.md#entry-presentation_python_api_session_fibonacci_number) — Default context
- [`finite_set`](sets.md#entry-presentation_python_api_session_finite_set) — Default context
- [`floor`](elementary-functions.md#entry-presentation_python_api_session_floor) — Default context
- [`fourier_transform`](integral-transforms.md#entry-presentation_python_api_session_fourier_transform) — Default context
- [`gamma`](special-functions.md#entry-presentation_python_api_session_gamma) — Default context
- [`gegenbauer_polynomial`](special-functions.md#entry-presentation_python_api_session_gegenbauer_polynomial) — Default context
- [`generalized_laguerre_polynomial`](special-functions.md#entry-presentation_python_api_session_generalized_laguerre_polynomial) — Default context
- [`greater_than`](relations.md#entry-presentation_python_api_session_greater_than) — Default context
- [`greater_than_or_equal`](relations.md#entry-presentation_python_api_session_greater_than_or_equal) — Default context
- [`hermite_polynomial`](special-functions.md#entry-presentation_python_api_session_hermite_polynomial) — Default context
- [`hurwitz_zeta`](special-functions.md#entry-presentation_python_api_session_hurwitz_zeta) — Default context
- [`hypergeometric_0f1`](special-functions.md#entry-presentation_python_api_session_hypergeometric_0f1) — Default context
- [`hypergeometric_1f1`](special-functions.md#entry-presentation_python_api_session_hypergeometric_1f1) — Default context
- [`hypergeometric_2f1`](special-functions.md#entry-presentation_python_api_session_hypergeometric_2f1) — Default context
- [`hypergeometric_pfq`](special-functions.md#entry-presentation_python_api_session_hypergeometric_pfq) — Default context
- [`image_set`](sets.md#entry-presentation_python_api_session_image_set) — Default context
- [`image_set_domain`](expressions.md#entry-presentation_python_api_expression_image_set_domain) — Expression method
- [`image_set_lambda_expression`](expressions.md#entry-presentation_python_api_expression_image_set_lambda_expression) — Expression method
- [`imaginary_part`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_imaginary_part) — Default context
- [`imaginary_unit`](evaluation-and-constants.md#entry-presentation_python_api_session_imaginary_unit) — Default context
- [`infinity`](evaluation-and-constants.md#entry-presentation_python_api_session_infinity) — Default context
- [`integer`](construction-and-parsing.md#entry-presentation_python_api_session_integer) — Default context
- [`integer_from_string`](construction-and-parsing.md#entry-presentation_python_api_session_integer_from_string) — Default context
- [`integer_gcd`](number-theory.md#entry-presentation_python_api_session_integer_gcd) — Default context
- [`integer_lcm`](number-theory.md#entry-presentation_python_api_session_integer_lcm) — Default context
- [`integer_nth_root`](number-theory.md#entry-presentation_python_api_session_integer_nth_root) — Default context
- [`integer_set`](sets.md#entry-presentation_python_api_session_integer_set) — Default context
- [`integer_square_root`](number-theory.md#entry-presentation_python_api_session_integer_square_root) — Default context
- [`integral`](deferred-forms.md#entry-presentation_python_api_session_integral) — Default context
- [`integral_integrand`](expressions.md#entry-presentation_python_api_expression_integral_integrand) — Expression method
- [`integral_lower_bound`](expressions.md#entry-presentation_python_api_expression_integral_lower_bound) — Expression method
- [`integral_upper_bound`](expressions.md#entry-presentation_python_api_expression_integral_upper_bound) — Expression method
- [`integrate`](calculus.md#entry-presentation_python_api_session_integrate) — Default context
- [`integrate_definite`](calculus.md#entry-presentation_python_api_session_integrate_definite) — Default context
- [`integrate_definite_under_constraint`](calculus.md#entry-presentation_python_api_session_integrate_definite_under_constraint) — Default context
- [`integrate_iterated`](calculus.md#entry-presentation_python_api_session_integrate_iterated) — Default context
- [`interval`](sets.md#entry-presentation_python_api_session_interval) — Default context
- [`interval_lower`](expressions.md#entry-presentation_python_api_expression_interval_lower) — Expression method
- [`interval_upper`](expressions.md#entry-presentation_python_api_expression_interval_upper) — Expression method
- [`introduce_derived_logical_connectives`](logical-transforms.md#entry-presentation_python_api_session_introduce_derived_logical_connectives) — Default context
- [`inverse_fourier_transform`](integral-transforms.md#entry-presentation_python_api_session_inverse_fourier_transform) — Default context
- [`inverse_laplace_transform`](integral-transforms.md#entry-presentation_python_api_session_inverse_laplace_transform) — Default context
- [`jacobi_amplitude`](special-functions.md#entry-presentation_python_api_session_jacobi_amplitude) — Default context
- [`jacobi_cn`](special-functions.md#entry-presentation_python_api_session_jacobi_cn) — Default context
- [`jacobi_dn`](special-functions.md#entry-presentation_python_api_session_jacobi_dn) — Default context
- [`jacobi_polynomial`](special-functions.md#entry-presentation_python_api_session_jacobi_polynomial) — Default context
- [`jacobi_sn`](special-functions.md#entry-presentation_python_api_session_jacobi_sn) — Default context
- [`jacobi_theta_1`](special-functions.md#entry-presentation_python_api_session_jacobi_theta_1) — Default context
- [`jacobi_theta_2`](special-functions.md#entry-presentation_python_api_session_jacobi_theta_2) — Default context
- [`jacobi_theta_3`](special-functions.md#entry-presentation_python_api_session_jacobi_theta_3) — Default context
- [`jacobi_theta_4`](special-functions.md#entry-presentation_python_api_session_jacobi_theta_4) — Default context
- [`laguerre_polynomial`](special-functions.md#entry-presentation_python_api_session_laguerre_polynomial) — Default context
- [`laplace_transform`](integral-transforms.md#entry-presentation_python_api_session_laplace_transform) — Default context
- [`laplacian`](vector-calculus.md#entry-presentation_python_api_session_laplacian) — Default context
- [`laurent_series`](series.md#entry-presentation_python_api_session_laurent_series) — Default context
- [`leading_coefficient`](polynomials.md#entry-presentation_python_api_session_leading_coefficient) — Default context
- [`legendre_polynomial`](special-functions.md#entry-presentation_python_api_session_legendre_polynomial) — Default context
- [`lerch_phi`](special-functions.md#entry-presentation_python_api_session_lerch_phi) — Default context
- [`less_than`](relations.md#entry-presentation_python_api_session_less_than) — Default context
- [`less_than_or_equal`](relations.md#entry-presentation_python_api_session_less_than_or_equal) — Default context
- [`limit`](calculus.md#entry-presentation_python_api_session_limit) — Default context
- [`log`](elementary-functions.md#entry-presentation_python_api_session_log) — Default context
- [`log_gamma`](special-functions.md#entry-presentation_python_api_session_log_gamma) — Default context
- [`logical_false`](logic.md#entry-presentation_python_api_session_logical_false) — Default context
- [`logical_true`](logic.md#entry-presentation_python_api_session_logical_true) — Default context
- [`maclaurin_series`](series.md#entry-presentation_python_api_session_maclaurin_series) — Default context
- [`Matrix.__getitem__`](linear-algebra.md#entry-presentation_python_host_python_matrix_getitem) — Matrix method
- [`Matrix.characteristic_polynomial`](linear-algebra.md#entry-presentation_python_api_matrix_characteristic_polynomial) — Matrix method
- [`Matrix.determinant`](linear-algebra.md#entry-presentation_python_api_matrix_determinant) — Matrix method
- [`Matrix.minimal_polynomial`](linear-algebra.md#entry-presentation_python_api_matrix_minimal_polynomial) — Matrix method
- [`Matrix.trace`](linear-algebra.md#entry-presentation_python_api_matrix_trace) — Matrix method
- [`max`](elementary-functions.md#entry-presentation_python_api_session_max) — Default context
- [`meijer_g`](special-functions.md#entry-presentation_python_api_session_meijer_g) — Default context
- [`min`](elementary-functions.md#entry-presentation_python_api_session_min) — Default context
- [`minimal_polynomial_of`](solving.md#entry-presentation_python_api_session_minimal_polynomial_of) — Default context
- [`minimize_logical`](logical-transforms.md#entry-presentation_python_api_session_minimize_logical) — Default context
- [`mobius`](number-theory.md#entry-presentation_python_api_session_mobius) — Default context
- [`modular_inverse`](number-theory.md#entry-presentation_python_api_session_modular_inverse) — Default context
- [`modular_power`](number-theory.md#entry-presentation_python_api_session_modular_power) — Default context
- [`moment`](statistics.md#entry-presentation_python_api_session_moment) — Default context
- [`moment_generating_function`](statistics.md#entry-presentation_python_api_session_moment_generating_function) — Default context
- [`multinomial`](combinatorics.md#entry-presentation_python_api_session_multinomial) — Default context
- [`not_equal`](relations.md#entry-presentation_python_api_session_not_equal) — Default context
- [`numerator`](expressions.md#entry-presentation_python_api_session_numerator) — Default context
- [`OrdinaryDifferentialEquationSolveResult.frequency_domain_equation`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_frequency_domain_equation) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSolveResult.image`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_image) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSolveResult.solution`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_solution) — OrdinaryDifferentialEquationSolveResult property
- [`parse`](construction-and-parsing.md#entry-presentation_python_api_session_parse) — Default context
- [`partial_fractions`](algebraic-transforms.md#entry-presentation_python_api_session_partial_fractions) — Default context
- [`PartialDifferentialEquationCoefficientData.remainder`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoefficientdata_remainder) — PartialDifferentialEquationCoefficientData property
- [`PartialDifferentialEquationCoordinateChange.jacobian`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange_jacobian) — PartialDifferentialEquationCoordinateChange property
- [`PartialDifferentialEquationJetCoefficient.coefficient`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationjetcoefficient_coefficient) — PartialDifferentialEquationJetCoefficient property
- [`PartialDifferentialEquationPointSymmetryAction.amplitude`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_amplitude) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAction.applied_to_seed`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_applied_to_seed) — PartialDifferentialEquationPointSymmetryAction method
- [`PartialDifferentialEquationPointSymmetryAction.applied_to_seed_with_additive_solution`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_applied_to_seed_with_additive_solution) — PartialDifferentialEquationPointSymmetryAction method
- [`PartialDifferentialEquationPointSymmetryAction.multiplier`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_multiplier) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryGenerator.dependent_infinitesimal`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetrygenerator_dependent_infinitesimal) — PartialDifferentialEquationPointSymmetryGenerator property
- [`PartialDifferentialEquationPrincipalCoefficient.coefficient`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationprincipalcoefficient_coefficient) — PartialDifferentialEquationPrincipalCoefficient property
- [`PartialDifferentialEquationProblem.equation`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem_equation) — PartialDifferentialEquationProblem property
- [`PartialDifferentialEquationSecondOrderClassification.discriminant`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification_discriminant) — PartialDifferentialEquationSecondOrderClassification property
- [`PartialDifferentialEquationSeparatedEquation.residual`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparatedequation_residual) — PartialDifferentialEquationSeparatedEquation property
- [`PartialDifferentialEquationSeparationResult.reconstruction`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparationresult_reconstruction) — PartialDifferentialEquationSeparationResult property
- [`PartialDifferentialEquationSeparationResult.separation_constant`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparationresult_separation_constant) — PartialDifferentialEquationSeparationResult property
- [`PartialDifferentialEquationSimilaritySolution.invariant`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_invariant) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSimilaritySolution.multiplier`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_multiplier) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSimilaritySolution.reduced_equation`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_reduced_equation) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSimilaritySolution.similarity_variable`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_similarity_variable) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSimilaritySolution.weight`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_weight) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSolutionFamily.expression`](partial-differential-equation-results.md#entry-presentation_python_host_python_partialdifferentialequationsolutionfamily_expression) — PartialDifferentialEquationSolutionFamily property
- [`PartialDifferentialEquationTransformationResult.normalization_multiplier`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationresult_normalization_multiplier) — PartialDifferentialEquationTransformationResult property
- [`PartialDifferentialEquationTransformationVerificationReport.claimed_governing_residual`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_claimed_governing_residual) — PartialDifferentialEquationTransformationVerificationReport property
- [`PartialDifferentialEquationTransformationVerificationReport.jacobian`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_jacobian) — PartialDifferentialEquationTransformationVerificationReport property
- [`PartialDifferentialEquationTransformationVerificationReport.transformed_governing_residual`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_transformed_governing_residual) — PartialDifferentialEquationTransformationVerificationReport property
- [`PartialDifferentialEquationVerificationReport.explicit_branch`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport_explicit_branch) — PartialDifferentialEquationVerificationReport property
- [`PartialDifferentialEquationVerificationResidual.residual`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationresidual_residual) — PartialDifferentialEquationVerificationResidual property
- [`partition_count`](combinatorics.md#entry-presentation_python_api_session_partition_count) — Default context
- [`pi`](evaluation-and-constants.md#entry-presentation_python_api_session_pi) — Default context
- [`piecewise`](deferred-forms.md#entry-presentation_python_api_session_piecewise) — Default context
- [`piecewise_fold`](specialized-canonical-forms.md#entry-presentation_python_api_session_piecewise_fold) — Default context
- [`Point2d.distance_to`](geometry.md#entry-presentation_python_api_point2d_distance_to) — Point2d method
- [`Point2d.x`](geometry.md#entry-presentation_python_api_point2d_x) — Point2d property
- [`Point2d.y`](geometry.md#entry-presentation_python_api_point2d_y) — Point2d property
- [`polygamma`](special-functions.md#entry-presentation_python_api_session_polygamma) — Default context
- [`Polygon2d.area`](geometry.md#entry-presentation_python_api_polygon2d_area) — Polygon2d method
- [`Polygon2d.perimeter`](geometry.md#entry-presentation_python_api_polygon2d_perimeter) — Polygon2d method
- [`polylogarithm`](special-functions.md#entry-presentation_python_api_session_polylogarithm) — Default context
- [`polynomial_gcd`](polynomials.md#entry-presentation_python_api_session_polynomial_gcd) — Default context
- [`polynomial_root`](solving.md#entry-presentation_python_api_session_polynomial_root) — Default context
- [`presentation_normal_form`](specialized-canonical-forms.md#entry-presentation_python_api_session_presentation_normal_form) — Default context
- [`probability`](statistics.md#entry-presentation_python_api_session_probability) — Default context
- [`product`](deferred-forms.md#entry-presentation_python_api_session_product) — Default context
- [`product_indefinite`](deferred-forms.md#entry-presentation_python_api_session_product_indefinite) — Default context
- [`random_variable`](statistics.md#entry-presentation_python_api_session_random_variable) — Default context
- [`rational`](construction-and-parsing.md#entry-presentation_python_api_session_rational) — Default context
- [`rational_from_float`](construction-and-parsing.md#entry-presentation_python_api_session_rational_from_float) — Default context
- [`RationalCanonicalForm.characteristic_polynomial`](matrix-canonical-forms.md#entry-presentation_python_api_rationalcanonicalform_characteristic_polynomial) — RationalCanonicalForm property
- [`RationalCanonicalForm.minimal_polynomial`](matrix-canonical-forms.md#entry-presentation_python_api_rationalcanonicalform_minimal_polynomial) — RationalCanonicalForm property
- [`rationalize_denominator`](algebraic-transforms.md#entry-presentation_python_api_session_rationalize_denominator) — Default context
- [`real_line`](sets.md#entry-presentation_python_api_session_real_line) — Default context
- [`real_part`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_real_part) — Default context
- [`refine`](assumptions.md#entry-presentation_python_api_session_refine) — Default context
- [`residue`](series.md#entry-presentation_python_api_session_residue) — Default context
- [`resultant`](polynomials.md#entry-presentation_python_api_session_resultant) — Default context
- [`rewrite_as_exponential`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_rewrite_as_exponential) — Default context
- [`rewrite_as_trigonometric`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_rewrite_as_trigonometric) — Default context
- [`rewrite_in_terms_of`](expressions.md#entry-presentation_python_api_session_rewrite_in_terms_of) — Default context
- [`rewrite_special_functions`](specialized-canonical-forms.md#entry-presentation_python_api_session_rewrite_special_functions) — Default context
- [`rewrite_trigonometric_basis`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_rewrite_trigonometric_basis) — Default context
- [`rising_factorial`](combinatorics.md#entry-presentation_python_api_session_rising_factorial) — Default context
- [`root`](elementary-functions.md#entry-presentation_python_api_session_root) — Default context
- [`sec`](elementary-functions.md#entry-presentation_python_api_session_sec) — Default context
- [`sech`](elementary-functions.md#entry-presentation_python_api_session_sech) — Default context
- [`Segment2d.length`](geometry.md#entry-presentation_python_api_segment2d_length) — Segment2d method
- [`Segment2d.perpendicular_bisector_equation`](geometry.md#entry-presentation_python_api_segment2d_perpendicular_bisector_equation) — Segment2d method
- [`set_complement`](sets.md#entry-presentation_python_api_session_set_complement) — Default context
- [`set_intersection`](sets.md#entry-presentation_python_api_session_set_intersection) — Default context
- [`set_union`](sets.md#entry-presentation_python_api_session_set_union) — Default context
- [`simplify`](simplification-general.md#entry-presentation_python_api_session_simplify) — Default context
- [`simplify_logical`](logical-transforms.md#entry-presentation_python_api_session_simplify_logical) — Default context
- [`simplify_trigonometric`](trigonometric-complex-rewrites.md#entry-presentation_python_api_session_simplify_trigonometric) — Default context
- [`simplify_under_constraint`](simplification-general.md#entry-presentation_python_api_session_simplify_under_constraint) — Default context
- [`sin`](elementary-functions.md#entry-presentation_python_api_session_sin) — Default context
- [`singularities`](calculus.md#entry-presentation_python_api_session_singularities) — Default context
- [`sinh`](elementary-functions.md#entry-presentation_python_api_session_sinh) — Default context
- [`solve_linear_recurrence`](recurrence-equations.md#entry-presentation_python_api_session_solve_linear_recurrence) — Default context
- [`solve_ordinary_differential_equation`](ordinary-differential-equations.md#entry-presentation_python_api_session_solve_ordinary_differential_equation) — Default context
- [`solve_ordinary_differential_equation_with_particular_solution`](ordinary-differential-equations.md#entry-presentation_python_api_session_solve_ordinary_differential_equation_with_particular_solution) — Default context
- [`solve_semialgebraic`](solving.md#entry-presentation_python_api_session_solve_semialgebraic) — Default context
- [`solveset`](solving.md#entry-presentation_python_api_session_solveset) — Default context
- [`solveset_in_domain`](solving.md#entry-presentation_python_api_session_solveset_in_domain) — Default context
- [`sqrt`](elementary-functions.md#entry-presentation_python_api_session_sqrt) — Default context
- [`stirling_first_signed`](combinatorics.md#entry-presentation_python_api_session_stirling_first_signed) — Default context
- [`stirling_second`](combinatorics.md#entry-presentation_python_api_session_stirling_second) — Default context
- [`substitute`](expressions.md#entry-presentation_python_api_session_substitute) — Expression method
- [`summation`](deferred-forms.md#entry-presentation_python_api_session_summation) — Default context
- [`summation_indefinite`](deferred-forms.md#entry-presentation_python_api_session_summation_indefinite) — Default context
- [`symbol`](construction-and-parsing.md#entry-presentation_python_api_session_symbol) — Default context
- [`tan`](elementary-functions.md#entry-presentation_python_api_session_tan) — Default context
- [`tanh`](elementary-functions.md#entry-presentation_python_api_session_tanh) — Default context
- [`taylor_series`](series.md#entry-presentation_python_api_session_taylor_series) — Default context
- [`together`](simplification-general.md#entry-presentation_python_api_session_together) — Default context
- [`ultraspherical_polynomial`](special-functions.md#entry-presentation_python_api_session_ultraspherical_polynomial) — Default context
- [`UndefinedFunction.__call__`](undefined-functions.md#entry-presentation_python_api_undefinedfunction_call) — UndefinedFunction method
- [`UndefinedFunction.derivative`](undefined-functions.md#entry-presentation_python_api_undefinedfunction_derivative) — UndefinedFunction method
- [`variance`](statistics.md#entry-presentation_python_api_session_variance) — Default context
- [`zeta`](special-functions.md#entry-presentation_python_api_session_zeta) — Default context

## float

- [`evaluate_to_float`](expressions.md#entry-presentation_python_api_session_evaluate_to_float) — Expression method
- [`NumericDefiniteIntegrationResult.estimated_absolute_error`](calculus.md#entry-presentation_python_api_numericdefiniteintegrationresult_estimated_absolute_error) — NumericDefiniteIntegrationResult property

## int

- [`__len__`](sets.md#entry-presentation_python_host_python_expression_len) — Expression method
- [`compare_real_roots`](solving.md#entry-presentation_python_api_session_compare_real_roots) — Default context
- [`count_distinct_real_roots`](solving.md#entry-presentation_python_api_session_count_distinct_real_roots) — Default context
- [`CylindricalAlgebraicDecomposition.cell_count`](cad.md#entry-presentation_python_api_cylindricalalgebraicdecomposition_cell_count) — CylindricalAlgebraicDecomposition method
- [`CylindricalAlgebraicDecomposition.cell_dimension`](cad.md#entry-presentation_python_api_cylindricalalgebraicdecomposition_cell_dimension) — CylindricalAlgebraicDecomposition method
- [`degree`](polynomials.md#entry-presentation_python_api_session_degree) — Default context
- [`interner_length`](default-context.md#entry-presentation_python_api_session_interner_length) — Default context
- [`jacobi_symbol`](number-theory.md#entry-presentation_python_api_session_jacobi_symbol) — Default context
- [`kronecker_symbol`](number-theory.md#entry-presentation_python_api_session_kronecker_symbol) — Default context
- [`legendre_symbol`](number-theory.md#entry-presentation_python_api_session_legendre_symbol) — Default context
- [`Matrix.columns`](matrix-construction.md#entry-presentation_python_api_matrix_columns) — Matrix property
- [`Matrix.rank`](linear-algebra.md#entry-presentation_python_api_matrix_rank) — Matrix method
- [`Matrix.rows`](matrix-construction.md#entry-presentation_python_api_matrix_rows) — Matrix property
- [`node_count`](expressions.md#entry-presentation_python_api_expression_node_count) — Expression method
- [`NumericDefiniteIntegrationResult.node_count`](calculus.md#entry-presentation_python_api_numericdefiniteintegrationresult_node_count) — NumericDefiniteIntegrationResult property
- [`NumericDefiniteIntegrationResult.precision_bits`](calculus.md#entry-presentation_python_api_numericdefiniteintegrationresult_precision_bits) — NumericDefiniteIntegrationResult property
- [`OrdinaryDifferentialEquationSystemVerificationReport.required_rank`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport_required_rank) — OrdinaryDifferentialEquationSystemVerificationReport property
- [`PartialDifferentialEquationArbitraryFunction.arity`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationarbitraryfunction_arity) — PartialDifferentialEquationArbitraryFunction property
- [`PartialDifferentialEquationClassification.order`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationclassification_order) — PartialDifferentialEquationClassification property
- [`PartialDifferentialEquationSolutionProvenance.order`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionprovenance_order) — PartialDifferentialEquationSolutionProvenance property
- [`pole_order`](series.md#entry-presentation_python_api_session_pole_order) — Default context
- [`real_root_count`](solving.md#entry-presentation_python_api_session_real_root_count) — Default context
- [`real_root_sign`](solving.md#entry-presentation_python_api_session_real_root_sign) — Default context

## isize

- [`__hash__`](expressions.md#entry-presentation_python_host_python_expression_hash) — Expression method

## list[(python_expression, Vec<python_matrix>)]

- [`Matrix.eigenvectors`](linear-algebra.md#entry-presentation_python_api_matrix_eigenvectors) — Matrix method

## list[(python_expression, python_expression)]

- [`isolate_real_roots`](polynomials.md#entry-presentation_python_api_session_isolate_real_roots) — Default context

## list[(python_expression, u32)]

- [`factor_integer`](number-theory.md#entry-presentation_python_api_session_factor_integer) — Default context

## list[(python_point_2d, python_expression)]

- [`Polygon2d.interior_angles`](geometry.md#entry-presentation_python_api_polygon2d_interior_angles) — Polygon2d method

## list[PyAny]

- [`Point2d.intersection`](geometry.md#entry-presentation_python_api_point2d_intersection) — Point2d method

## list[expression]

- [`change_monomial_order`](polynomials.md#entry-presentation_python_api_session_change_monomial_order) — Default context
- [`continued_fraction_rational`](number-theory.md#entry-presentation_python_api_session_continued_fraction_rational) — Default context
- [`curl`](vector-calculus.md#entry-presentation_python_api_session_curl) — Default context
- [`elimination_ideal`](polynomials.md#entry-presentation_python_api_session_elimination_ideal) — Default context
- [`gradient`](vector-calculus.md#entry-presentation_python_api_session_gradient) — Default context
- [`groebner_basis`](polynomials.md#entry-presentation_python_api_session_groebner_basis) — Default context
- [`ideal_intersection`](polynomials.md#entry-presentation_python_api_session_ideal_intersection) — Default context
- [`ideal_product`](polynomials.md#entry-presentation_python_api_session_ideal_product) — Default context
- [`ideal_sum`](polynomials.md#entry-presentation_python_api_session_ideal_sum) — Default context
- [`implicitize`](polynomials.md#entry-presentation_python_api_session_implicitize) — Default context
- [`Matrix.eigenvalues`](linear-algebra.md#entry-presentation_python_api_matrix_eigenvalues) — Matrix method
- [`OrdinaryDifferentialEquationSolveResult.generated_constants`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_generated_constants) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.components`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_components) — OrdinaryDifferentialEquationSystemSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.generated_constants`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_generated_constants) — OrdinaryDifferentialEquationSystemSolveResult property
- [`PartialDifferentialEquationCoordinateChange.forward_coordinates`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange_forward_coordinates) — PartialDifferentialEquationCoordinateChange property
- [`PartialDifferentialEquationCoordinateChange.inverse_coordinates`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange_inverse_coordinates) — PartialDifferentialEquationCoordinateChange property
- [`PartialDifferentialEquationPointSymmetryAction.parameters`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_parameters) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAction.transformed_coordinates`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_transformed_coordinates) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAlgebra.determining_equations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_determining_equations) — PartialDifferentialEquationPointSymmetryAlgebra property
- [`PartialDifferentialEquationPointSymmetryAlgebra.parameters`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_parameters) — PartialDifferentialEquationPointSymmetryAlgebra property
- [`PartialDifferentialEquationPointSymmetryGenerator.coordinate_infinitesimals`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetrygenerator_coordinate_infinitesimals) — PartialDifferentialEquationPointSymmetryGenerator property
- [`PartialDifferentialEquationProblem.boundary_conditions`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem_boundary_conditions) — PartialDifferentialEquationProblem property
- [`PartialDifferentialEquationProblem.initial_conditions`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem_initial_conditions) — PartialDifferentialEquationProblem property
- [`PartialDifferentialEquationSimilaritySolution.lifted_constants`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_lifted_constants) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationTransformationVerificationReport.composition_residuals`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_composition_residuals) — PartialDifferentialEquationTransformationVerificationReport property
- [`PartialDifferentialEquationTransformationVerificationReport.principal_congruence_residuals`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_principal_congruence_residuals) — PartialDifferentialEquationTransformationVerificationReport property
- [`pell_solutions`](number-theory.md#entry-presentation_python_api_session_pell_solutions) — Default context
- [`RationalCanonicalForm.invariant_factors`](matrix-canonical-forms.md#entry-presentation_python_api_rationalcanonicalform_invariant_factors) — RationalCanonicalForm property
- [`solve`](solving.md#entry-presentation_python_api_session_solve) — Default context
- [`solve_linear_diophantine`](number-theory.md#entry-presentation_python_api_session_solve_linear_diophantine) — Default context
- [`solve_linear_diophantine_system`](number-theory.md#entry-presentation_python_api_session_solve_linear_diophantine_system) — Default context
- [`solve_negative_pell`](number-theory.md#entry-presentation_python_api_session_solve_negative_pell) — Default context
- [`solve_pell`](number-theory.md#entry-presentation_python_api_session_solve_pell) — Default context

## list[float]

- [`CylindricalAlgebraicDecomposition.cell_sample_point`](cad.md#entry-presentation_python_api_cylindricalalgebraicdecomposition_cell_sample_point) — CylindricalAlgebraicDecomposition method
- [`evaluate_on_grid`](calculus.md#entry-presentation_python_api_session_evaluate_on_grid) — Default context
- [`evaluate_on_grid_points`](calculus.md#entry-presentation_python_api_session_evaluate_on_grid_points) — Default context

## list[int]

- [`CylindricalAlgebraicDecomposition.cell_sign_vector`](cad.md#entry-presentation_python_api_cylindricalalgebraicdecomposition_cell_sign_vector) — CylindricalAlgebraicDecomposition method
- [`PartialDifferentialEquationJetCoefficient.derivative_orders`](partial-differential-equation-results.md#entry-presentation_python_host_python_partialdifferentialequationjetcoefficient_derivative_orders) — PartialDifferentialEquationJetCoefficient property
- [`PartialDifferentialEquationPrincipalCoefficient.derivative_orders`](partial-differential-equation-results.md#entry-presentation_python_host_python_partialdifferentialequationprincipalcoefficient_derivative_orders) — PartialDifferentialEquationPrincipalCoefficient property

## list[matrix]

- [`Matrix.integer_image_lattice_basis`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_integer_image_lattice_basis) — Matrix method
- [`Matrix.integer_kernel_basis`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_integer_kernel_basis) — Matrix method
- [`Matrix.integer_row_lattice_basis`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_integer_row_lattice_basis) — Matrix method
- [`Matrix.nullspace_basis`](linear-algebra.md#entry-presentation_python_api_matrix_nullspace_basis) — Matrix method

## list[partial_differential_equation_arbitrary_function]

- [`PartialDifferentialEquationSolutionFamily.arbitrary_functions`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionfamily_arbitrary_functions) — PartialDifferentialEquationSolutionFamily property

## list[partial_differential_equation_jet_coefficient]

- [`PartialDifferentialEquationCoefficientData.full_coefficients`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoefficientdata_full_coefficients) — PartialDifferentialEquationCoefficientData property
- [`PartialDifferentialEquationCoefficientData.highest_order_coefficients`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoefficientdata_highest_order_coefficients) — PartialDifferentialEquationCoefficientData property

## list[partial_differential_equation_point_symmetry_generator]

- [`PartialDifferentialEquationPointSymmetryAlgebra.basis`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_basis) — PartialDifferentialEquationPointSymmetryAlgebra property

## list[partial_differential_equation_principal_coefficient]

- [`PartialDifferentialEquationPrincipalPart.derivative_coefficients`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationprincipalpart_derivative_coefficients) — PartialDifferentialEquationPrincipalPart property

## list[partial_differential_equation_second_order_type_case]

- [`PartialDifferentialEquationSecondOrderClassification.cases`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification_cases) — PartialDifferentialEquationSecondOrderClassification property

## list[partial_differential_equation_verification_residual]

- [`PartialDifferentialEquationVerificationReport.boundary_condition_residuals`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport_boundary_condition_residuals) — PartialDifferentialEquationVerificationReport property
- [`PartialDifferentialEquationVerificationReport.initial_condition_residuals`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport_initial_condition_residuals) — PartialDifferentialEquationVerificationReport property

## list[str]

- [`assumptions_of`](default-context.md#entry-presentation_python_api_session_assumptions_of) — Default context
- [`free_variables`](expressions.md#entry-presentation_python_api_expression_free_variables) — Expression method
- [`PartialDifferentialEquationCoordinateChange.source_variables`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange_source_variables) — PartialDifferentialEquationCoordinateChange property
- [`PartialDifferentialEquationCoordinateChange.target_variables`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange_target_variables) — PartialDifferentialEquationCoordinateChange property
- [`PartialDifferentialEquationMethodCandidate.proof_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationmethodcandidate_proof_obligations) — PartialDifferentialEquationMethodCandidate property
- [`PartialDifferentialEquationPointSymmetryAction.outstanding_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_outstanding_obligations) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAlgebra.outstanding_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_outstanding_obligations) — PartialDifferentialEquationPointSymmetryAlgebra property
- [`PartialDifferentialEquationProblem.independent_variables`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem_independent_variables) — PartialDifferentialEquationProblem property
- [`PartialDifferentialEquationSecondOrderClassification.proof_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification_proof_obligations) — PartialDifferentialEquationSecondOrderClassification property
- [`PartialDifferentialEquationSimilaritySolution.outstanding_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_outstanding_obligations) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSolutionFamily.proof_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionfamily_proof_obligations) — PartialDifferentialEquationSolutionFamily property
- [`PartialDifferentialEquationSolutionProvenance.discharged_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionprovenance_discharged_obligations) — PartialDifferentialEquationSolutionProvenance property
- [`PartialDifferentialEquationVerificationReport.proof_obligations`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport_proof_obligations) — PartialDifferentialEquationVerificationReport property

## matrix

Described under [`Matrix`](linear-algebra.md#characteristic_polynomial).

- [`hessian`](vector-calculus.md#entry-presentation_python_api_session_hessian) — Default context
- [`jacobian`](vector-calculus.md#entry-presentation_python_api_session_jacobian) — Default context
- [`Matrix`](linear-algebra.md#entry-presentation_python_api_matrix) — Matrix constructor
- [`matrix`](matrix-construction.md#entry-presentation_python_api_session_matrix) — Explicit context
- [`Matrix.__add__`](linear-algebra.md#entry-presentation_python_host_python_matrix_add) — Matrix method
- [`Matrix.__mul__`](linear-algebra.md#entry-presentation_python_host_python_matrix_mul) — Matrix method
- [`Matrix.__sub__`](linear-algebra.md#entry-presentation_python_host_python_matrix_sub) — Matrix method
- [`Matrix.add`](linear-algebra.md#entry-presentation_python_api_matrix_add) — Matrix method
- [`Matrix.adjugate`](linear-algebra.md#entry-presentation_python_api_matrix_adjugate) — Matrix method
- [`Matrix.cofactor_matrix`](linear-algebra.md#entry-presentation_python_api_matrix_cofactor_matrix) — Matrix method
- [`Matrix.cosine`](matrix-functions.md#entry-presentation_python_api_matrix_cosine) — Matrix method
- [`Matrix.execute`](linear-algebra.md#entry-presentation_python_api_matrix_execute) — Matrix method
- [`Matrix.exponential`](matrix-functions.md#entry-presentation_python_api_matrix_exponential) — Matrix method
- [`Matrix.hyperbolic_cosine`](matrix-functions.md#entry-presentation_python_api_matrix_hyperbolic_cosine) — Matrix method
- [`Matrix.hyperbolic_sine`](matrix-functions.md#entry-presentation_python_api_matrix_hyperbolic_sine) — Matrix method
- [`Matrix.inverse`](linear-algebra.md#entry-presentation_python_api_matrix_inverse) — Matrix method
- [`Matrix.logarithm`](matrix-functions.md#entry-presentation_python_api_matrix_logarithm) — Matrix method
- [`Matrix.multiply`](linear-algebra.md#entry-presentation_python_api_matrix_multiply) — Matrix method
- [`Matrix.row_reduce`](linear-algebra.md#entry-presentation_python_api_matrix_row_reduce) — Matrix method
- [`Matrix.scalar_multiply`](linear-algebra.md#entry-presentation_python_api_matrix_scalar_multiply) — Matrix method
- [`Matrix.sine`](matrix-functions.md#entry-presentation_python_api_matrix_sine) — Matrix method
- [`Matrix.square_root`](matrix-functions.md#entry-presentation_python_api_matrix_square_root) — Matrix method
- [`Matrix.subtract`](linear-algebra.md#entry-presentation_python_api_matrix_subtract) — Matrix method
- [`Matrix.transpose`](linear-algebra.md#entry-presentation_python_api_matrix_transpose) — Matrix method
- [`matrix_diagonal`](matrix-construction.md#entry-presentation_python_api_session_matrix_diagonal) — Default context
- [`matrix_identity`](matrix-construction.md#entry-presentation_python_api_session_matrix_identity) — Default context
- [`matrix_zero`](matrix-construction.md#entry-presentation_python_api_session_matrix_zero) — Default context
- [`PartialDifferentialEquationPrincipalPart.matrix`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationprincipalpart_matrix) — PartialDifferentialEquationPrincipalPart property
- [`PartialDifferentialEquationSecondOrderClassification.principal_matrix`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification_principal_matrix) — PartialDifferentialEquationSecondOrderClassification property
- [`RationalCanonicalForm.canonical_form`](matrix-canonical-forms.md#entry-presentation_python_api_rationalcanonicalform_canonical_form) — RationalCanonicalForm property
- [`RationalCanonicalForm.similarity`](matrix-canonical-forms.md#entry-presentation_python_api_rationalcanonicalform_similarity) — RationalCanonicalForm property

## ordinary_differential_equation_solve_result

Described under [`OrdinaryDifferentialEquationSolveResult`](ordinary-differential-equations.md#ordinarydifferentialequationsolveresult).

- [`OrdinaryDifferentialEquationSolveResult`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult) — Type
- [`solve_ordinary_differential_equation_request`](ordinary-differential-equations.md#entry-presentation_python_api_session_solve_ordinary_differential_equation_request) — Default context
- [`solve_ordinary_differential_equation_with_history`](ordinary-differential-equations.md#entry-presentation_python_api_session_solve_ordinary_differential_equation_with_history) — Default context

## ordinary_differential_equation_system_solve_result

Described under [`OrdinaryDifferentialEquationSystemSolveResult`](ordinary-differential-equations.md#ordinarydifferentialequationsystemsolveresult).

- [`OrdinaryDifferentialEquationSystemSolveResult`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult) — Type
- [`solve_ordinary_differential_equation_system_request`](ordinary-differential-equations.md#entry-presentation_python_api_session_solve_ordinary_differential_equation_system_request) — Default context

## ordinary_differential_equation_system_verification_report

Described under [`OrdinaryDifferentialEquationSystemVerificationReport`](ordinary-differential-equations.md#ordinarydifferentialequationsystemverificationreport).

- [`OrdinaryDifferentialEquationSystemVerificationReport`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport) — Type
- [`verify_ordinary_differential_equation_system_solution`](ordinary-differential-equations.md#entry-presentation_python_api_session_verify_ordinary_differential_equation_system_solution) — Default context

## partial_differential_equation_arbitrary_function

Described under [`PartialDifferentialEquationArbitraryFunction`](partial-differential-equation-results.md#partialdifferentialequationarbitraryfunction).

- [`partial_differential_equation_arbitrary_function`](partial-differential-equations.md#entry-presentation_python_api_session_partial_differential_equation_arbitrary_function) — Explicit context
- [`PartialDifferentialEquationArbitraryFunction`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationarbitraryfunction) — Type

## partial_differential_equation_canonicalization_result

Described under [`PartialDifferentialEquationCanonicalizationResult`](partial-differential-equation-results.md#partialdifferentialequationcanonicalizationresult).

- [`canonicalize_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_canonicalize_partial_differential_equation) — Default context
- [`PartialDifferentialEquationCanonicalizationResult`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcanonicalizationresult) — Type

## partial_differential_equation_canonicalization_result,

Described under [`PartialDifferentialEquationCanonicalizationResult`](partial-differential-equation-results.md#partialdifferentialequationcanonicalizationresult).

- [`canonicalize_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_canonicalize_partial_differential_equation) — Default context

## partial_differential_equation_classification

Described under [`PartialDifferentialEquationClassification`](partial-differential-equation-results.md#partialdifferentialequationclassification).

- [`classify_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_classify_partial_differential_equation) — Default context
- [`PartialDifferentialEquationClassification`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationclassification) — Type
- [`PartialDifferentialEquationSolveResult.classification`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult_classification) — PartialDifferentialEquationSolveResult property

## partial_differential_equation_classification,

Described under [`PartialDifferentialEquationClassification`](partial-differential-equation-results.md#partialdifferentialequationclassification).

- [`classify_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_classify_partial_differential_equation) — Default context

## partial_differential_equation_coefficient_data

Described under [`PartialDifferentialEquationCoefficientData`](partial-differential-equation-results.md#partialdifferentialequationcoefficientdata).

- [`PartialDifferentialEquationClassification.coefficient_data`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationclassification_coefficient_data) — PartialDifferentialEquationClassification property

## partial_differential_equation_coordinate_change

Described under [`PartialDifferentialEquationCoordinateChange`](partial-differential-equation-results.md#partialdifferentialequationcoordinatechange).

- [`PartialDifferentialEquationCoordinateChange`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange) — Type
- [`PartialDifferentialEquationTransformationResult.coordinate_change`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationresult_coordinate_change) — PartialDifferentialEquationTransformationResult property

## partial_differential_equation_point_symmetry_action

Described under [`PartialDifferentialEquationPointSymmetryAction`](partial-differential-equation-results.md#partialdifferentialequationpointsymmetryaction).

- [`construct_partial_differential_equation_point_symmetry_action`](partial-differential-equations.md#entry-presentation_python_api_session_construct_partial_differential_equation_point_symmetry_action) — Default context
- [`PartialDifferentialEquationPointSymmetryAction`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction) — Type

## partial_differential_equation_point_symmetry_algebra

Described under [`PartialDifferentialEquationPointSymmetryAlgebra`](partial-differential-equation-results.md#partialdifferentialequationpointsymmetryalgebra).

- [`derive_partial_differential_equation_point_symmetries`](partial-differential-equations.md#entry-presentation_python_api_session_derive_partial_differential_equation_point_symmetries) — Default context
- [`PartialDifferentialEquationPointSymmetryAlgebra`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra) — Type

## partial_differential_equation_point_symmetry_generator

Described under [`PartialDifferentialEquationPointSymmetryGenerator`](partial-differential-equation-results.md#partialdifferentialequationpointsymmetrygenerator).

- [`partial_differential_equation_point_symmetry_generator`](partial-differential-equations.md#entry-presentation_python_api_session_partial_differential_equation_point_symmetry_generator) — Default context
- [`PartialDifferentialEquationPointSymmetryAlgebra.general_generator`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_general_generator) — PartialDifferentialEquationPointSymmetryAlgebra property
- [`PartialDifferentialEquationPointSymmetryGenerator`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetrygenerator) — Type

## partial_differential_equation_principal_part

Described under [`PartialDifferentialEquationPrincipalPart`](partial-differential-equation-results.md#partialdifferentialequationprincipalpart).

- [`PartialDifferentialEquationClassification.second_order_principal_part`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationclassification_second_order_principal_part) — PartialDifferentialEquationClassification property

## partial_differential_equation_problem

Described under [`PartialDifferentialEquationProblem`](partial-differential-equation-results.md#partialdifferentialequationproblem).

- [`discover_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_discover_partial_differential_equation) — Default context
- [`partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_partial_differential_equation) — Default context
- [`PartialDifferentialEquationProblem`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem) — Type
- [`PartialDifferentialEquationTransformationResult.target_problem`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationresult_target_problem) — PartialDifferentialEquationTransformationResult property

## partial_differential_equation_second_order_classification

Described under [`PartialDifferentialEquationSecondOrderClassification`](partial-differential-equation-results.md#partialdifferentialequationsecondorderclassification).

- [`classify_second_order_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_classify_second_order_partial_differential_equation) — Default context
- [`PartialDifferentialEquationSecondOrderClassification`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification) — Type

## partial_differential_equation_second_order_classification,

Described under [`PartialDifferentialEquationSecondOrderClassification`](partial-differential-equation-results.md#partialdifferentialequationsecondorderclassification).

- [`classify_second_order_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_classify_second_order_partial_differential_equation) — Default context

## partial_differential_equation_second_order_type_case

Described under [`PartialDifferentialEquationSecondOrderTypeCase`](partial-differential-equation-results.md#partialdifferentialequationsecondordertypecase).

- [`PartialDifferentialEquationSecondOrderTypeCase`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondordertypecase) — Type

## partial_differential_equation_separated_equation

Described under [`PartialDifferentialEquationSeparatedEquation`](partial-differential-equation-results.md#partialdifferentialequationseparatedequation).

- [`PartialDifferentialEquationSeparatedEquation`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparatedequation) — Type
- [`PartialDifferentialEquationSeparationResult.first_equation`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparationresult_first_equation) — PartialDifferentialEquationSeparationResult property
- [`PartialDifferentialEquationSeparationResult.second_equation`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparationresult_second_equation) — PartialDifferentialEquationSeparationResult property

## partial_differential_equation_separation_result

Described under [`PartialDifferentialEquationSeparationResult`](partial-differential-equation-results.md#partialdifferentialequationseparationresult).

- [`PartialDifferentialEquationSeparationResult`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparationresult) — Type
- [`separate_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_separate_partial_differential_equation) — Default context

## partial_differential_equation_similarity_solution

Described under [`PartialDifferentialEquationSimilaritySolution`](partial-differential-equation-results.md#partialdifferentialequationsimilaritysolution).

- [`PartialDifferentialEquationSimilaritySolution`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution) — Type
- [`solve_partial_differential_equation_by_similarity_reduction`](partial-differential-equations.md#entry-presentation_python_api_session_solve_partial_differential_equation_by_similarity_reduction) — Default context

## partial_differential_equation_solution_family

Described under [`PartialDifferentialEquationSolutionFamily`](partial-differential-equation-results.md#partialdifferentialequationsolutionfamily).

- [`explicit_partial_differential_equation_solution`](partial-differential-equations.md#entry-presentation_python_api_session_explicit_partial_differential_equation_solution) — Default context
- [`implicit_partial_differential_equation_solution`](partial-differential-equations.md#entry-presentation_python_api_session_implicit_partial_differential_equation_solution) — Default context
- [`PartialDifferentialEquationSimilaritySolution.lifted_family`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_lifted_family) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSolutionFamily`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionfamily) — Type
- [`PartialDifferentialEquationSolveResult.solution`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult_solution) — PartialDifferentialEquationSolveResult property

## partial_differential_equation_solution_family,

Described under [`PartialDifferentialEquationSolutionFamily`](partial-differential-equation-results.md#partialdifferentialequationsolutionfamily).

- [`explicit_partial_differential_equation_solution`](partial-differential-equations.md#entry-presentation_python_api_session_explicit_partial_differential_equation_solution) — Default context
- [`implicit_partial_differential_equation_solution`](partial-differential-equations.md#entry-presentation_python_api_session_implicit_partial_differential_equation_solution) — Default context

## partial_differential_equation_solution_provenance

Described under [`PartialDifferentialEquationSolutionProvenance`](partial-differential-equation-results.md#partialdifferentialequationsolutionprovenance).

- [`PartialDifferentialEquationSolveResult.provenance`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult_provenance) — PartialDifferentialEquationSolveResult property

## partial_differential_equation_solve_result

Described under [`PartialDifferentialEquationSolveResult`](partial-differential-equation-results.md#partialdifferentialequationsolveresult).

- [`PartialDifferentialEquationSolveResult`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult) — Type
- [`solve_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_solve_partial_differential_equation) — Default context
- [`solve_partial_differential_equation_request`](partial-differential-equations.md#entry-presentation_python_api_session_solve_partial_differential_equation_request) — Default context
- [`solve_partial_differential_equation_with_transform_axis_specifications`](partial-differential-equations.md#entry-presentation_python_api_session_solve_partial_differential_equation_with_transform_axis_specifications) — Default context

## partial_differential_equation_solve_result,

Described under [`PartialDifferentialEquationSolveResult`](partial-differential-equation-results.md#partialdifferentialequationsolveresult).

- [`solve_partial_differential_equation`](partial-differential-equations.md#entry-presentation_python_api_session_solve_partial_differential_equation) — Default context

## partial_differential_equation_transformation_result

Described under [`PartialDifferentialEquationTransformationResult`](partial-differential-equation-results.md#partialdifferentialequationtransformationresult).

- [`change_partial_differential_equation_variables`](partial-differential-equations.md#entry-presentation_python_api_session_change_partial_differential_equation_variables) — Default context
- [`PartialDifferentialEquationCanonicalizationResult.transformation`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_transformation) — PartialDifferentialEquationCanonicalizationResult property
- [`PartialDifferentialEquationTransformationResult`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationresult) — Type

## partial_differential_equation_transformation_result,

Described under [`PartialDifferentialEquationTransformationResult`](partial-differential-equation-results.md#partialdifferentialequationtransformationresult).

- [`change_partial_differential_equation_variables`](partial-differential-equations.md#entry-presentation_python_api_session_change_partial_differential_equation_variables) — Default context

## partial_differential_equation_transformation_verification_report

Described under [`PartialDifferentialEquationTransformationVerificationReport`](partial-differential-equation-results.md#partialdifferentialequationtransformationverificationreport).

- [`PartialDifferentialEquationTransformationVerificationReport`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationverificationreport) — Type
- [`verify_partial_differential_equation_coordinate_transformation`](partial-differential-equations.md#entry-presentation_python_api_session_verify_partial_differential_equation_coordinate_transformation) — Default context

## partial_differential_equation_transformation_verification_report,

Described under [`PartialDifferentialEquationTransformationVerificationReport`](partial-differential-equation-results.md#partialdifferentialequationtransformationverificationreport).

- [`verify_partial_differential_equation_coordinate_transformation`](partial-differential-equations.md#entry-presentation_python_api_session_verify_partial_differential_equation_coordinate_transformation) — Default context

## partial_differential_equation_verification_report

Described under [`PartialDifferentialEquationVerificationReport`](partial-differential-equation-results.md#partialdifferentialequationverificationreport).

- [`PartialDifferentialEquationSolveResult.verification`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult_verification) — PartialDifferentialEquationSolveResult property
- [`PartialDifferentialEquationVerificationReport`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport) — Type
- [`verify_partial_differential_equation_solution`](partial-differential-equations.md#entry-presentation_python_api_session_verify_partial_differential_equation_solution) — Default context

## partial_differential_equation_verification_report,

Described under [`PartialDifferentialEquationVerificationReport`](partial-differential-equation-results.md#partialdifferentialequationverificationreport).

- [`verify_partial_differential_equation_solution`](partial-differential-equations.md#entry-presentation_python_api_session_verify_partial_differential_equation_solution) — Default context

## point_2d

Described under [`Point2d`](geometry.md#intersection).

- [`Circle2d.center`](geometry.md#entry-presentation_python_api_circle2d_center) — Circle2d property
- [`Point2d`](geometry.md#entry-presentation_python_api_point2d) — Point2d constructor
- [`point_2d`](geometry.md#entry-presentation_python_api_session_point_2d) — Explicit context
- [`Polygon2d.centroid`](geometry.md#entry-presentation_python_api_polygon2d_centroid) — Polygon2d method
- [`Segment2d.midpoint`](geometry.md#entry-presentation_python_api_segment2d_midpoint) — Segment2d method

## polygon_2d

Described under [`Polygon2d`](geometry.md#area).

- [`Polygon2d`](geometry.md#entry-presentation_python_api_polygon2d) — Polygon2d constructor
- [`polygon_2d`](geometry.md#entry-presentation_python_api_session_polygon_2d) — Explicit context

## rational_canonical_form

- [`Matrix.rational_canonical_form`](matrix-canonical-forms.md#entry-presentation_python_api_matrix_rational_canonical_form) — Matrix method
- [`RationalCanonicalForm`](matrix-canonical-forms.md#entry-presentation_python_api_rationalcanonicalform) — Type

## segment_2d

Described under [`Segment2d`](geometry.md#intersection).

- [`Segment2d`](geometry.md#entry-presentation_python_api_segment2d) — Segment2d constructor
- [`segment_2d`](geometry.md#entry-presentation_python_api_session_segment_2d) — Explicit context

## str

- [`__repr__`](expressions.md#entry-presentation_python_host_python_expression_repr) — Expression method
- [`__str__`](expressions.md#entry-presentation_python_host_python_expression_str) — Expression method
- [`AssumptionProposition.__str__`](assumptions.md#entry-presentation_python_host_python_assumptionproposition_str) — AssumptionProposition method
- [`AssumptionProposition.relation_kind`](assumptions.md#entry-presentation_python_api_assumptionproposition_relation_kind) — Default context
- [`AssumptionProposition.serialize`](assumptions.md#entry-presentation_python_api_assumptionproposition_serialize) — Default context
- [`Circle2d.__repr__`](geometry.md#entry-presentation_python_host_python_circle2d_repr) — Circle2d method
- [`classify_unconstrained`](optimization.md#entry-presentation_python_api_session_classify_unconstrained) — Default context
- [`CylindricalAlgebraicDecomposition.cell_kind`](cad.md#entry-presentation_python_api_cylindricalalgebraicdecomposition_cell_kind) — CylindricalAlgebraicDecomposition method
- [`CylindricalAlgebraicDecomposition.projection_operator_used`](cad.md#entry-presentation_python_api_cylindricalalgebraicdecomposition_projection_operator_used) — CylindricalAlgebraicDecomposition method
- [`DefiniteIntegrationResult.decline_reason`](calculus.md#entry-presentation_python_api_definiteintegrationresult_decline_reason) — DefiniteIntegrationResult property
- [`DefiniteIntegrationResult.divergence_direction`](calculus.md#entry-presentation_python_api_definiteintegrationresult_divergence_direction) — DefiniteIntegrationResult property
- [`DefiniteIntegrationResult.interpretation`](calculus.md#entry-presentation_python_api_definiteintegrationresult_interpretation) — DefiniteIntegrationResult property
- [`DefiniteIntegrationResult.verdict`](calculus.md#entry-presentation_python_api_definiteintegrationresult_verdict) — DefiniteIntegrationResult property
- [`execution_mode`](context-safety.md#entry-presentation_python_api_session_execution_mode) — Default context
- [`image_set_variable`](expressions.md#entry-presentation_python_api_expression_image_set_variable) — Expression method
- [`initialize_parallelism`](context-safety.md#entry-presentation_python_api_session_initialize_parallelism) — Default context
- [`integral_variable`](expressions.md#entry-presentation_python_api_expression_integral_variable) — Expression method
- [`Matrix.__repr__`](linear-algebra.md#entry-presentation_python_host_python_matrix_repr) — Matrix method
- [`OrdinaryDifferentialEquationSolveResult.decline`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_decline) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSolveResult.form`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_form) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSolveResult.generality`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_generality) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSolveResult.method`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_method) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSolveResult.verdict`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_verdict) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSolveResult.verification`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsolveresult_verification) — OrdinaryDifferentialEquationSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.decline`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_decline) — OrdinaryDifferentialEquationSystemSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.generality`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_generality) — OrdinaryDifferentialEquationSystemSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.method`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_method) — OrdinaryDifferentialEquationSystemSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.route`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_route) — OrdinaryDifferentialEquationSystemSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.verdict`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_verdict) — OrdinaryDifferentialEquationSystemSolveResult property
- [`OrdinaryDifferentialEquationSystemSolveResult.verification`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemsolveresult_verification) — OrdinaryDifferentialEquationSystemSolveResult property
- [`OrdinaryDifferentialEquationSystemVerificationReport.generality`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport_generality) — OrdinaryDifferentialEquationSystemVerificationReport property
- [`OrdinaryDifferentialEquationSystemVerificationReport.verdict`](ordinary-differential-equations.md#entry-presentation_python_api_ordinarydifferentialequationsystemverificationreport_verdict) — OrdinaryDifferentialEquationSystemVerificationReport property
- [`PartialDifferentialEquationArbitraryFunction.name`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationarbitraryfunction_name) — PartialDifferentialEquationArbitraryFunction property
- [`PartialDifferentialEquationCanonicalizationResult.decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_decline) — PartialDifferentialEquationCanonicalizationResult property
- [`PartialDifferentialEquationCanonicalizationResult.principal_form`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_principal_form) — PartialDifferentialEquationCanonicalizationResult property
- [`PartialDifferentialEquationCanonicalizationResult.transformation_decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcanonicalizationresult_transformation_decline) — PartialDifferentialEquationCanonicalizationResult property
- [`PartialDifferentialEquationClassification.linearity`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationclassification_linearity) — PartialDifferentialEquationClassification property
- [`PartialDifferentialEquationCoordinateChange.serialize_object`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange_serialize_object) — PartialDifferentialEquationCoordinateChange method
- [`PartialDifferentialEquationCoordinateChange.target_dependent_function`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationcoordinatechange_target_dependent_function) — PartialDifferentialEquationCoordinateChange property
- [`PartialDifferentialEquationMethodCandidate.method`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationmethodcandidate_method) — PartialDifferentialEquationMethodCandidate property
- [`PartialDifferentialEquationPointSymmetryAction.decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_decline) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAction.intertwining`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_intertwining) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAction.invertibility`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_invertibility) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAction.point_symmetry_decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryaction_point_symmetry_decline) — PartialDifferentialEquationPointSymmetryAction property
- [`PartialDifferentialEquationPointSymmetryAlgebra.decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationpointsymmetryalgebra_decline) — PartialDifferentialEquationPointSymmetryAlgebra property
- [`PartialDifferentialEquationProblem.__repr__`](partial-differential-equation-results.md#entry-presentation_python_host_python_partialdifferentialequationproblem_repr) — PartialDifferentialEquationProblem method
- [`PartialDifferentialEquationProblem.__str__`](partial-differential-equation-results.md#entry-presentation_python_host_python_partialdifferentialequationproblem_str) — PartialDifferentialEquationProblem method
- [`PartialDifferentialEquationProblem.dependent_function`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem_dependent_function) — PartialDifferentialEquationProblem property
- [`PartialDifferentialEquationProblem.serialize_object`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem_serialize_object) — PartialDifferentialEquationProblem method
- [`PartialDifferentialEquationProblem.to_latex`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationproblem_to_latex) — PartialDifferentialEquationProblem method
- [`PartialDifferentialEquationSecondOrderClassification.decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification_decline) — PartialDifferentialEquationSecondOrderClassification property
- [`PartialDifferentialEquationSecondOrderClassification.equation_type`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification_equation_type) — PartialDifferentialEquationSecondOrderClassification property
- [`PartialDifferentialEquationSecondOrderClassification.verdict`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondorderclassification_verdict) — PartialDifferentialEquationSecondOrderClassification property
- [`PartialDifferentialEquationSecondOrderTypeCase.equation_type`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsecondordertypecase_equation_type) — PartialDifferentialEquationSecondOrderTypeCase property
- [`PartialDifferentialEquationSeparatedEquation.independent_variable_name`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparatedequation_independent_variable_name) — PartialDifferentialEquationSeparatedEquation property
- [`PartialDifferentialEquationSeparationResult.strategy`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparationresult_strategy) — PartialDifferentialEquationSeparationResult property
- [`PartialDifferentialEquationSeparationResult.verification`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationseparationresult_verification) — PartialDifferentialEquationSeparationResult property
- [`PartialDifferentialEquationSimilaritySolution.decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_decline) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSimilaritySolution.lifted_family_verification`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsimilaritysolution_lifted_family_verification) — PartialDifferentialEquationSimilaritySolution property
- [`PartialDifferentialEquationSolutionProvenance.linearity`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionprovenance_linearity) — PartialDifferentialEquationSolutionProvenance property
- [`PartialDifferentialEquationSolutionProvenance.method`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolutionprovenance_method) — PartialDifferentialEquationSolutionProvenance property
- [`PartialDifferentialEquationSolveResult.decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult_decline) — PartialDifferentialEquationSolveResult property
- [`PartialDifferentialEquationSolveResult.method`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult_method) — PartialDifferentialEquationSolveResult property
- [`PartialDifferentialEquationSolveResult.verdict`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationsolveresult_verdict) — PartialDifferentialEquationSolveResult property
- [`PartialDifferentialEquationTransformationResult.decline`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationresult_decline) — PartialDifferentialEquationTransformationResult property
- [`PartialDifferentialEquationTransformationVerificationReport.verdict`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationtransformationverificationreport_verdict) — PartialDifferentialEquationTransformationVerificationReport property
- [`PartialDifferentialEquationVerificationReport.inconclusive_reason`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport_inconclusive_reason) — PartialDifferentialEquationVerificationReport property
- [`PartialDifferentialEquationVerificationReport.verdict`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationreport_verdict) — PartialDifferentialEquationVerificationReport property
- [`PartialDifferentialEquationVerificationResidual.verdict`](partial-differential-equation-results.md#entry-presentation_python_api_partialdifferentialequationverificationresidual_verdict) — PartialDifferentialEquationVerificationResidual property
- [`Point2d.__repr__`](geometry.md#entry-presentation_python_host_python_point2d_repr) — Point2d method
- [`Polygon2d.__repr__`](geometry.md#entry-presentation_python_host_python_polygon2d_repr) — Polygon2d method
- [`Segment2d.__repr__`](geometry.md#entry-presentation_python_host_python_segment2d_repr) — Segment2d method
- [`serialize_object`](serialization-and-output.md#entry-presentation_python_api_session_serialize_object) — Default context
- [`symbol_name`](expressions.md#entry-presentation_python_api_expression_symbol_name) — Expression method
- [`to_latex`](serialization-and-output.md#entry-presentation_python_api_session_to_latex) — Default context
- [`to_latex_with_options`](serialization-and-output.md#entry-presentation_python_api_session_to_latex_with_options) — Default context
- [`Triangle2d.__repr__`](geometry.md#entry-presentation_python_host_python_triangle2d_repr) — Triangle2d method
- [`UndefinedFunction.__repr__`](undefined-functions.md#entry-presentation_python_host_python_undefinedfunction_repr) — UndefinedFunction method
- [`zero_equivalent`](zero-equivalence.md#entry-presentation_python_api_session_zero_equivalent) — Default context

## triangle_2d

Described under [`Triangle2d`](geometry.md#area).

- [`Triangle2d`](geometry.md#entry-presentation_python_api_triangle2d) — Triangle2d constructor
- [`triangle_2d`](geometry.md#entry-presentation_python_api_session_triangle_2d) — Explicit context

## undefined_function

Described under [`UndefinedFunction`](undefined-functions.md#call).

- [`undefined_function`](undefined-functions.md#entry-presentation_python_api_session_undefined_function) — Explicit context
- [`UndefinedFunction`](undefined-functions.md#entry-presentation_python_api_undefinedfunction) — Type
