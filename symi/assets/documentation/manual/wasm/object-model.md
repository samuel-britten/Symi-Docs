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

```javascript
const first = new symi.Context();
const second = new symi.Context();
const x = first.symbol("x");

console.log(first.differentiate(x.power(2), "x").toString());
try {
    second.differentiate(x, "x");
} catch (error) {
    console.log(error.category);
}
```


## Additional API

<a id="placement-placement.wasm.javascript_facade.context_assumptionsof.3e2500baccd2"></a>
### Context.assumptionsOf

`Context.assumptionsOf(value: VariableLike): Record<string, string>`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionsof.b9741e10cd22"></a>
### SymiFacade.assumptionsOf

`SymiFacade.assumptionsOf(value: VariableLike): Record<string, string>`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_defaultcontext.9502059e3f0c"></a>
### SymiFacade.defaultContext

`SymiFacade.defaultContext: Context`

Returns `context`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_congruencemodulus.ec7759ccca4c"></a>
### AssumptionProposition.congruenceModulus

`pub fn congruence_modulus(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_leftoperand.746fdb26e50b"></a>
### AssumptionProposition.leftOperand

`pub fn left_operand(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipelement.aae55444ab1f"></a>
### AssumptionProposition.membershipElement

`pub fn membership_element(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipset.7ce41b1bc776"></a>
### AssumptionProposition.membershipSet

`pub fn membership_set(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_relationkind.e790b4e9fc3f"></a>
### AssumptionProposition.relationKind

`pub fn relation_kind(&self) -> Result<Option<String>, JsError>`

Returns `Result<Option<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_rightoperand.c7d9f00cb532"></a>
### AssumptionProposition.rightOperand

`pub fn right_operand(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_couldhold.2d2a6b64246b"></a>
### AssumptionScope.couldHold

`pub fn could_hold(&self, proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_diagnostic.3aff803bd40b"></a>
### BulkExpressionOutcome.diagnostic

`pub fn diagnostic(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_index.9565b7871b49"></a>
### BulkExpressionOutcome.index

`pub fn index(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_value.a88ab5dae37a"></a>
### BulkExpressionOutcome.value

`pub fn value(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.wasm.wasm_class.bulktextoutcome_diagnostic.1f99261ae9a5"></a>
### BulkTextOutcome.diagnostic

`pub fn diagnostic(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.bulktextoutcome_index.eb506bca8e60"></a>
### BulkTextOutcome.index

`pub fn index(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.bulktextoutcome_value.e25bb45ec6a7"></a>
### BulkTextOutcome.value

`pub fn value(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.context.bae89741122f"></a>
### Context

`pub fn new() -> Context`

Returns `context`.

<a id="placement-placement.wasm.wasm_class.context_addassumptions.b31f141c59eb"></a>
### Context.addAssumptions

`pub fn add_assumptions(&self, proposition: &AssumptionProposition) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_algebraicassumption.2224c5ffdadb"></a>
### Context.algebraicAssumption

`pub fn algebraic_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_assumptionpropositionfromlogicalexpression.5ea25bd33b20"></a>
### Context.assumptionPropositionFromLogicalExpression

`pub fn assumption_proposition_from_logical_expression(&self, logical_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_assumptionsof.66a8eb453c55"></a>
### Context.assumptionsOf

`pub fn assumptions_of(&self, name: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_canonicalizepartialdifferentialequation.f516f4268b31"></a>
### Context.canonicalizePartialDifferentialEquation

`pub fn canonicalize_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationCanonicalizationResult, JsError>`

Returns `Result<partial_differential_equation_canonicalization_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_changepartialdifferentialequationvariables.2b70c639987b"></a>
### Context.changePartialDifferentialEquationVariables

`pub fn change_partial_differential_equation_variables(&self, problem: &PartialDifferentialEquationProblem, target_variables: Vec<String>, forward_coordinates: Option<Vec<Expression>>, inverse_coordinates: Option<Vec<Expression>>, target_dependent_function: Option<UndefinedFunction>) -> Result<PartialDifferentialEquationTransformationResult, JsError>`

Returns `Result<partial_differential_equation_transformation_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_classifypartialdifferentialequation.e650f9bebef6"></a>
### Context.classifyPartialDifferentialEquation

`pub fn classify_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationClassification, JsError>`

Returns `Result<partial_differential_equation_classification, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_classifysecondorderpartialdifferentialequation.278c33c7f044"></a>
### Context.classifySecondOrderPartialDifferentialEquation

`pub fn classify_second_order_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSecondOrderClassification, JsError>`

Returns `Result<partial_differential_equation_second_order_classification, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_clearallassumptions.bd79ad9a9a16"></a>
### Context.clearAllAssumptions

`pub fn clear_all_assumptions(&self) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_clearassumptions.5956b856933d"></a>
### Context.clearAssumptions

`pub fn clear_assumptions(&self, name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_complexassumption.da3971bb10ac"></a>
### Context.complexAssumption

`pub fn complex_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_complexentries.6d9dfd9287af"></a>
### Context.complexEntries

`pub fn complex_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_compositeassumption.fa27370d4eed"></a>
### Context.compositeAssumption

`pub fn composite_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_congruentassumption.f6180c227f00"></a>
### Context.congruentAssumption

`pub fn congruent_assumption(&self, left: &Expression, right: &Expression, modulus: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_constructpartialdifferentialequationpointsymmetryaction.54cba3ee5909"></a>
### Context.constructPartialDifferentialEquationPointSymmetryAction

`pub fn construct_partial_differential_equation_point_symmetry_action(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAction, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_action, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_couldhold.66586843bd55"></a>
### Context.couldHold

`pub fn could_hold(&self, proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_definedassumption.8c5bd258ba52"></a>
### Context.definedAssumption

`pub fn defined_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_derivepartialdifferentialequationpointsymmetries.9b48ce1a250b"></a>
### Context.derivePartialDifferentialEquationPointSymmetries

`pub fn derive_partial_differential_equation_point_symmetries(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAlgebra, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_algebra, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_deserializeassumptionproposition.aff4c5500d99"></a>
### Context.deserializeAssumptionProposition

`pub fn deserialize_assumption_proposition(&self, text: &str) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_diagonalmatrix.25c6eea29c73"></a>
### Context.diagonalMatrix

`pub fn diagonal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_differentiatebulk.60c81c04a52a"></a>
### Context.differentiateBulk

`pub fn differentiate_bulk(&self, targets: Vec<Expression>, variable: &Expression) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_discoverpartialdifferentialequation.466949e3ded0"></a>
### Context.discoverPartialDifferentialEquation

`pub fn discover_partial_differential_equation(&self, equation: &Expression, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_equalassumption.8c5d0d48bbee"></a>
### Context.equalAssumption

`pub fn equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatenumericbulk.1d8e7313ad2a"></a>
### Context.evaluateNumericBulk

`pub fn evaluate_numeric_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evenassumption.bb78156582ab"></a>
### Context.evenAssumption

`pub fn even_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_executionmode.fb37feb3b5e7"></a>
### Context.executionMode

`pub fn execution_mode(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.context_expandbulk.ddbf38f0af39"></a>
### Context.expandBulk

`pub fn expand_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_explicitpartialdifferentialequationsolution.36080a4f3827"></a>
### Context.explicitPartialDifferentialEquationSolution

`pub fn explicit_partial_differential_equation_solution(&self, solution: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_extendedrealassumption.ae5e7bb5a3e9"></a>
### Context.extendedRealAssumption

`pub fn extended_real_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_finiteassumption.f2b7a40022a4"></a>
### Context.finiteAssumption

`pub fn finite_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fullrankmatrix.d4dda0c1ae74"></a>
### Context.fullRankMatrix

`pub fn full_rank_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_greaterassumption.7d33f6430cf1"></a>
### Context.greaterAssumption

`pub fn greater_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_greaterorequalassumption.45d6551d24b9"></a>
### Context.greaterOrEqualAssumption

`pub fn greater_or_equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hermitianmatrix.ad07d380df99"></a>
### Context.hermitianMatrix

`pub fn hermitian_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_identitymatrix.b3b15b6e67fd"></a>
### Context.identityMatrix

`pub fn identity_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_implicitpartialdifferentialequationsolution.32e5eb5b6dde"></a>
### Context.implicitPartialDifferentialEquationSolution

`pub fn implicit_partial_differential_equation_solution(&self, residual: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_infiniteassumption.930992139804"></a>
### Context.infiniteAssumption

`pub fn infinite_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_initializeparallelism.b65737d204fb"></a>
### Context.initializeParallelism

`pub fn initialize_parallelism(&self, worker_count: usize) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerassumption.cd89ea0aeab3"></a>
### Context.integerAssumption

`pub fn integer_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerentries.24804dca8290"></a>
### Context.integerEntries

`pub fn integer_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefiniteunderconstraint.162de4dfe5ac"></a>
### Context.integrateDefiniteUnderConstraint

`pub fn integrate_definite_under_constraint(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_internerlength.eae1ce3bb1ac"></a>
### Context.internerLength

`pub fn interner_length(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.context_invertiblematrix.64db4aef0074"></a>
### Context.invertibleMatrix

`pub fn invertible_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_irrationalassumption.563f0ff3e367"></a>
### Context.irrationalAssumption

`pub fn irrational_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessassumption.ca0ff78010a6"></a>
### Context.lessAssumption

`pub fn less_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessorequalassumption.11ee484d439d"></a>
### Context.lessOrEqualAssumption

`pub fn less_or_equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lowertriangularmatrix.022cfbba3773"></a>
### Context.lowerTriangularMatrix

`pub fn lower_triangular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixshape.459aae814946"></a>
### Context.matrixShape

`pub fn matrix_shape(&self, subject: &Matrix, rows: usize, columns: usize) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_memberassumption.1ba404fedc2d"></a>
### Context.memberAssumption

`pub fn member_assumption(&self, element: &Expression, set_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_naturalassumption.38e1c8e1981a"></a>
### Context.naturalAssumption

`pub fn natural_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_negativeassumption.2f61c8b3c7a1"></a>
### Context.negativeAssumption

`pub fn negative_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_nonnegativeassumption.64680640bb6a"></a>
### Context.nonnegativeAssumption

`pub fn nonnegative_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_nonpositiveassumption.a68756b4e98f"></a>
### Context.nonpositiveAssumption

`pub fn nonpositive_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_nonzeroassumption.3c73be02c09e"></a>
### Context.nonzeroAssumption

`pub fn nonzero_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_normalmatrix.22c1df434daa"></a>
### Context.normalMatrix

`pub fn normal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_notequalassumption.9cf43d15c370"></a>
### Context.notEqualAssumption

`pub fn not_equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_oddassumption.5565fb3aa853"></a>
### Context.oddAssumption

`pub fn odd_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_orthogonalmatrix.ff1dc519eda5"></a>
### Context.orthogonalMatrix

`pub fn orthogonal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parallelismcapability.3ffc3c2aeaf5"></a>
### Context.parallelismCapability

`pub fn parallelism_capability(&self) -> ParallelismCapability`

Returns `ParallelismCapability`.

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequation.a755ce3b66b1"></a>
### Context.partialDifferentialEquation

`pub fn partial_differential_equation(&self, equation: &Expression, dependent_function: &UndefinedFunction, independent_variables: Vec<String>, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationarbitraryfunction.95275c8112f7"></a>
### Context.partialDifferentialEquationArbitraryFunction

`pub fn partial_differential_equation_arbitrary_function(&self, preferred_name: String, arity: usize) -> PartialDifferentialEquationArbitraryFunction`

Returns `partial_differential_equation_arbitrary_function`.

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationpointsymmetrygenerator.507e6f5d1b4d"></a>
### Context.partialDifferentialEquationPointSymmetryGenerator

`pub fn partial_differential_equation_point_symmetry_generator(&self, problem: &PartialDifferentialEquationProblem, coordinate_infinitesimals: Vec<Expression>, dependent_infinitesimal: &Expression) -> Result<PartialDifferentialEquationPointSymmetryGenerator, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_generator, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positiveassumption.f031f0dc6351"></a>
### Context.positiveAssumption

`pub fn positive_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positivedefinitematrix.b2c5736061fa"></a>
### Context.positiveDefiniteMatrix

`pub fn positive_definite_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positiveintegerassumption.213d99d5dc51"></a>
### Context.positiveIntegerAssumption

`pub fn positive_integer_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positivesemidefinitematrix.29521df6b267"></a>
### Context.positiveSemidefiniteMatrix

`pub fn positive_semidefinite_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_primeassumption.dea59522d9b3"></a>
### Context.primeAssumption

`pub fn prime_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rationalassumption.66ad2d17a4bd"></a>
### Context.rationalAssumption

`pub fn rational_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realassumption.973d612c8247"></a>
### Context.realAssumption

`pub fn real_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realentries.1307176acf67"></a>
### Context.realEntries

`pub fn real_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_separatepartialdifferentialequation.bc377ea512aa"></a>
### Context.separatePartialDifferentialEquation

`pub fn separate_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSeparationResult, JsError>`

Returns `Result<partial_differential_equation_separation_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_serializebulk.6da9c7d96404"></a>
### Context.serializeBulk

`pub fn serialize_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkTextOutcome>, JsError>`

Returns `Result<Vec<BulkTextOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setexecutionmode.8558c817b7d7"></a>
### Context.setExecutionMode

`pub fn set_execution_mode(&self, name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifybulk.f58e98df3b0c"></a>
### Context.simplifyBulk

`pub fn simplify_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifyunderconstraint.d6de0069cdb2"></a>
### Context.simplifyUnderConstraint

`pub fn simplify_under_constraint(&self, input_expression: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_singularmatrix.95862437c4bc"></a>
### Context.singularMatrix

`pub fn singular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationrequest.0d10418c0664"></a>
### Context.solveOrdinaryDifferentialEquationRequest

`pub fn solve_ordinary_differential_equation_request(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, scope: String, condition_residuals: Option<Vec<Expression>>, method: Option<String>, regularity: Option<String>) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationsystemrequest.b14fb515da40"></a>
### Context.solveOrdinaryDifferentialEquationSystemRequest

`pub fn solve_ordinary_differential_equation_system_request(&self, equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, condition_residuals: Option<Vec<Expression>>, method: Option<String>) -> Result<OrdinaryDifferentialEquationSystemSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_system_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithhistory.213a3190a46e"></a>
### Context.solveOrdinaryDifferentialEquationWithHistory

`pub fn solve_ordinary_differential_equation_with_history(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, history_value: &Expression, history_start: &Expression, history_end: &Expression) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequation.e4cfd20f1895"></a>
### Context.solvePartialDifferentialEquation

`pub fn solve_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationbysimilarityreduction.cbb1d2d4f631"></a>
### Context.solvePartialDifferentialEquationBySimilarityReduction

`pub fn solve_partial_differential_equation_by_similarity_reduction(&self, problem: &PartialDifferentialEquationProblem, generator: &PartialDifferentialEquationPointSymmetryGenerator) -> Result<PartialDifferentialEquationSimilaritySolution, JsError>`

Returns `Result<partial_differential_equation_similarity_solution, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationrequest.9454cbc9afee"></a>
### Context.solvePartialDifferentialEquationRequest

`pub fn solve_partial_differential_equation_request(&self, problem: &PartialDifferentialEquationProblem, scope: String, geometric_domain: Option<String>, regularity: Option<String>, solution_class: Option<String>, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationwithtransformaxisspecifications.662e82df8c14"></a>
### Context.solvePartialDifferentialEquationWithTransformAxisSpecifications

`pub fn solve_partial_differential_equation_with_transform_axis_specifications(&self, problem: &PartialDifferentialEquationProblem, method: String, transform_axis_specifications: Vec<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_squarematrix.10a5804efa2d"></a>
### Context.squareMatrix

`pub fn square_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_substitutebulk.23b4102b48c2"></a>
### Context.substituteBulk

`pub fn substitute_bulk(&self, targets: Vec<Expression>, variable: &Expression, value: &Expression) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_symmetricmatrix.fef52053eed2"></a>
### Context.symmetricMatrix

`pub fn symmetric_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_transcendentalassumption.6d339804210b"></a>
### Context.transcendentalAssumption

`pub fn transcendental_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_unitarymatrix.4eef4d42ba96"></a>
### Context.unitaryMatrix

`pub fn unitary_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_uppertriangularmatrix.5ff14f5d2604"></a>
### Context.upperTriangularMatrix

`pub fn upper_triangular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_verifyordinarydifferentialequationsystemsolution.6259425d8a18"></a>
### Context.verifyOrdinaryDifferentialEquationSystemSolution

`pub fn verify_ordinary_differential_equation_system_solution(&self, equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, components: Vec<Expression>, generated_constants: Vec<Expression>, condition_residuals: Option<Vec<Expression>>) -> Result<OrdinaryDifferentialEquationSystemVerificationReport, JsError>`

Returns `Result<ordinary_differential_equation_system_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationcoordinatetransformation.8d606f34fd5e"></a>
### Context.verifyPartialDifferentialEquationCoordinateTransformation

`pub fn verify_partial_differential_equation_coordinate_transformation(&self, problem: &PartialDifferentialEquationProblem, transformation: &PartialDifferentialEquationTransformationResult) -> Result<PartialDifferentialEquationTransformationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_transformation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationsolution.9d784d900bb6"></a>
### Context.verifyPartialDifferentialEquationSolution

`pub fn verify_partial_differential_equation_solution(&self, problem: &PartialDifferentialEquationProblem, solution: &PartialDifferentialEquationSolutionFamily) -> Result<PartialDifferentialEquationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_zeroassumption.e80b6e21b307"></a>
### Context.zeroAssumption

`pub fn zero_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_zeroequivalent.9d78dbb91e75"></a>
### Context.zeroEquivalent

`pub fn zero_equivalent(&self, input_expression: &Expression, constraint: Option<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_zeromatrix.2e74a285fae1"></a>
### Context.zeroMatrix

`pub fn zero_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_add.96a43fe08167"></a>
### Expression.add

`pub fn add(&self, other: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integratedefiniteunderconstraint.ae1d271eaed2"></a>
### Expression.integrateDefiniteUnderConstraint

`pub fn integrate_definite_under_constraint(&self, variable: &str, lower: &Expression, upper: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isalgebraic.7f69c43994c4"></a>
### Expression.isAlgebraic

`pub fn is_algebraic(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iscomplex.cb55f33afdac"></a>
### Expression.isComplex

`pub fn is_complex(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iscomposite.9305add4812c"></a>
### Expression.isComposite

`pub fn is_composite(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iseven.79ec01947e1b"></a>
### Expression.isEven

`pub fn is_even(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isextendedreal.172c09a6da36"></a>
### Expression.isExtendedReal

`pub fn is_extended_real(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isinfinite.859baf12b120"></a>
### Expression.isInfinite

`pub fn is_infinite(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isirrational.6d6714833660"></a>
### Expression.isIrrational

`pub fn is_irrational(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnatural.08b113b0d6b1"></a>
### Expression.isNatural

`pub fn is_natural(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnonpositive.43f76142cb65"></a>
### Expression.isNonpositive

`pub fn is_nonpositive(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isodd.1296c406043e"></a>
### Expression.isOdd

`pub fn is_odd(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_ispositiveinteger.de9efbe8d022"></a>
### Expression.isPositiveInteger

`pub fn is_positive_integer(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_istranscendental.7bafdf46504b"></a>
### Expression.isTranscendental

`pub fn is_transcendental(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iszero.39d9a4da2056"></a>
### Expression.isZero

`pub fn is_zero(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_length.45f409e47bab"></a>
### Expression.length

`pub fn length(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_multiply.f2a3f2cee0c1"></a>
### Expression.multiply

`pub fn multiply(&self, other: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_simplifyunderconstraint.1623bd3f02f7"></a>
### Expression.simplifyUnderConstraint

`pub fn simplify_under_constraint(&self, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_subtract.792ca56d060e"></a>
### Expression.subtract

`pub fn subtract(&self, other: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_zeroequivalent.d55b1b33dd0a"></a>
### Expression.zeroEquivalent

`pub fn zero_equivalent(&self, constraint: Option<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_decline.24f117c6e555"></a>
### OrdinaryDifferentialEquationSolveResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_form.ed5c138e707a"></a>
### OrdinaryDifferentialEquationSolveResult.form

`pub fn form(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_frequencydomainequation.4b988fcde71e"></a>
### OrdinaryDifferentialEquationSolveResult.frequencyDomainEquation

`pub fn frequency_domain_equation(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generality.0acc7843fcff"></a>
### OrdinaryDifferentialEquationSolveResult.generality

`pub fn generality(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generatedconstants.b24b49acc560"></a>
### OrdinaryDifferentialEquationSolveResult.generatedConstants

`pub fn generated_constants(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_image.2505758202af"></a>
### OrdinaryDifferentialEquationSolveResult.image

`pub fn image(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_method.2a36ab088dab"></a>
### OrdinaryDifferentialEquationSolveResult.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_solution.095194c1e3e8"></a>
### OrdinaryDifferentialEquationSolveResult.solution

`pub fn solution(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verification.98a3c08527f6"></a>
### OrdinaryDifferentialEquationSolveResult.verification

`pub fn verification(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_components.b446bfacdaad"></a>
### OrdinaryDifferentialEquationSystemSolveResult.components

`pub fn components(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_decline.a04d9d49a2dc"></a>
### OrdinaryDifferentialEquationSystemSolveResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generality.b6dedec50021"></a>
### OrdinaryDifferentialEquationSystemSolveResult.generality

`pub fn generality(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generatedconstants.918ffd7b6ed6"></a>
### OrdinaryDifferentialEquationSystemSolveResult.generatedConstants

`pub fn generated_constants(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_method.85f1db18a22f"></a>
### OrdinaryDifferentialEquationSystemSolveResult.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_route.ad4fa4980543"></a>
### OrdinaryDifferentialEquationSystemSolveResult.route

`pub fn route(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verification.21b83effc580"></a>
### OrdinaryDifferentialEquationSystemSolveResult.verification

`pub fn verification(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_generality.06f7e5f0bc1b"></a>
### OrdinaryDifferentialEquationSystemVerificationReport.generality

`pub fn generality(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_requiredrank.28c5e9d61fa5"></a>
### OrdinaryDifferentialEquationSystemVerificationReport.requiredRank

`pub fn required_rank(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_active.7a56c9003ea3"></a>
### ParallelismCapability.active

`pub fn active(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_backend.6ace752fbfa8"></a>
### ParallelismCapability.backend

`pub fn backend(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_compiled.cdc011ae2a95"></a>
### ParallelismCapability.compiled

`pub fn compiled(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_initialized.4f99d93e07ed"></a>
### ParallelismCapability.initialized

`pub fn initialized(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_maximumoperationconcurrency.0130e4f9bd13"></a>
### ParallelismCapability.maximumOperationConcurrency

`pub fn maximum_operation_concurrency(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_selectedmode.42c75b8ac175"></a>
### ParallelismCapability.selectedMode

`pub fn selected_mode(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_unavailablereason.07bb1c3498ad"></a>
### ParallelismCapability.unavailableReason

`pub fn unavailable_reason(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_workercount.2182d20e0f67"></a>
### ParallelismCapability.workerCount

`pub fn worker_count(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_arity.d1caa458c863"></a>
### PartialDifferentialEquationArbitraryFunction.arity

`pub fn arity(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_name.42b1c3bd0a16"></a>
### PartialDifferentialEquationArbitraryFunction.name

`pub fn name(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_canonicalized.a1fcbcf36d91"></a>
### PartialDifferentialEquationCanonicalizationResult.canonicalized

`pub fn canonicalized(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_decline.864bf76b4827"></a>
### PartialDifferentialEquationCanonicalizationResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_principalform.56b9d4fecb56"></a>
### PartialDifferentialEquationCanonicalizationResult.principalForm

`pub fn principal_form(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformationdecline.bbfd366c8896"></a>
### PartialDifferentialEquationCanonicalizationResult.transformationDecline

`pub fn transformation_decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_coefficientdata.8e7c41f8826b"></a>
### PartialDifferentialEquationClassification.coefficientData

`pub fn coefficient_data(&self) -> Result<PartialDifferentialEquationCoefficientData, JsError>`

Returns `Result<partial_differential_equation_coefficient_data, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_linearity.a6e667e25ec5"></a>
### PartialDifferentialEquationClassification.linearity

`pub fn linearity(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_methodcandidates.f9f5eeb37c13"></a>
### PartialDifferentialEquationClassification.methodCandidates

`pub fn method_candidates(&self) -> Result<Vec<PartialDifferentialEquationMethodCandidate>, JsError>`

Returns `Result<Vec<partial_differential_equation_method_candidate>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_order.bd643506262a"></a>
### PartialDifferentialEquationClassification.order

`pub fn order(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_secondorderprincipalpart.b59823cebdcb"></a>
### PartialDifferentialEquationClassification.secondOrderPrincipalPart

`pub fn second_order_principal_part(&self) -> Result<Option<PartialDifferentialEquationPrincipalPart>, JsError>`

Returns `Result<Option<partial_differential_equation_principal_part>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_fullcoefficients.2156a699a3a9"></a>
### PartialDifferentialEquationCoefficientData.fullCoefficients

`pub fn full_coefficients(&self) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>`

Returns `Option<Vec<partial_differential_equation_jet_coefficient>>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_highestordercoefficients.5bfc08a1eccb"></a>
### PartialDifferentialEquationCoefficientData.highestOrderCoefficients

`pub fn highest_order_coefficients(&self) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>`

Returns `Option<Vec<partial_differential_equation_jet_coefficient>>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_homogeneous.a3fec03b183d"></a>
### PartialDifferentialEquationCoefficientData.homogeneous

`pub fn homogeneous(&self) -> Option<bool>`

Returns `Option<bool>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_remainder.a984a804d378"></a>
### PartialDifferentialEquationCoefficientData.remainder

`pub fn remainder(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_forwardcoordinates.0aa8930b1189"></a>
### PartialDifferentialEquationCoordinateChange.forwardCoordinates

`pub fn forward_coordinates(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_inversecoordinates.97aaa96afdd2"></a>
### PartialDifferentialEquationCoordinateChange.inverseCoordinates

`pub fn inverse_coordinates(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_sourcevariables.5479a3ea67d3"></a>
### PartialDifferentialEquationCoordinateChange.sourceVariables

`pub fn source_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetdependentfunction.8f8a6f1e66f4"></a>
### PartialDifferentialEquationCoordinateChange.targetDependentFunction

`pub fn target_dependent_function(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetvariables.f70dbe969aba"></a>
### PartialDifferentialEquationCoordinateChange.targetVariables

`pub fn target_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_tostring.1cfabe94bc27"></a>
### PartialDifferentialEquationCoordinateChange.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_derivativeorders.e19d6b4d3f6d"></a>
### PartialDifferentialEquationJetCoefficient.derivativeOrders

`pub fn derivative_orders(&self) -> Vec<usize>`

Returns `Vec<usize>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_method.e9c325f17c27"></a>
### PartialDifferentialEquationMethodCandidate.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_proofobligations.11ee48d0dcf5"></a>
### PartialDifferentialEquationMethodCandidate.proofObligations

`pub fn proof_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.330e9c43133f"></a>
### PartialDifferentialEquationPointSymmetryAction.admitsAdditiveSolutionSymmetry

`pub fn admits_additive_solution_symmetry(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_amplitude.2730e8b0bc62"></a>
### PartialDifferentialEquationPointSymmetryAction.amplitude

`pub fn amplitude(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseed.219eb332d48f"></a>
### PartialDifferentialEquationPointSymmetryAction.appliedToSeed

`pub fn applied_to_seed(&self, seed: &UndefinedFunction) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.8948049973bd"></a>
### PartialDifferentialEquationPointSymmetryAction.appliedToSeedWithAdditiveSolution

`pub fn applied_to_seed_with_additive_solution(&self, seed: &UndefinedFunction, additive_solution: &UndefinedFunction) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_decline.f20fea2d2f62"></a>
### PartialDifferentialEquationPointSymmetryAction.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_intertwining.0394334328b6"></a>
### PartialDifferentialEquationPointSymmetryAction.intertwining

`pub fn intertwining(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_invertibility.47467c701e0d"></a>
### PartialDifferentialEquationPointSymmetryAction.invertibility

`pub fn invertibility(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_multiplier.fdf69e36ea5d"></a>
### PartialDifferentialEquationPointSymmetryAction.multiplier

`pub fn multiplier(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_outstandingobligations.38f9613fa70d"></a>
### PartialDifferentialEquationPointSymmetryAction.outstandingObligations

`pub fn outstanding_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_parameters.05581d4b2818"></a>
### PartialDifferentialEquationPointSymmetryAction.parameters

`pub fn parameters(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6d0421f48d8e"></a>
### PartialDifferentialEquationPointSymmetryAction.pointSymmetryDecline

`pub fn point_symmetry_decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_transformedcoordinates.52e1713096aa"></a>
### PartialDifferentialEquationPointSymmetryAction.transformedCoordinates

`pub fn transformed_coordinates(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.f5647b5468e6"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.admitsAdditiveSolutionSymmetry

`pub fn admits_additive_solution_symmetry(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_basis.eddc9c0c01b2"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.basis

`pub fn basis(&self) -> Vec<PartialDifferentialEquationPointSymmetryGenerator>`

Returns `Vec<partial_differential_equation_point_symmetry_generator>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_decline.5d9e716a25c4"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_determiningequations.f099cf8497a9"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.determiningEquations

`pub fn determining_equations(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_generalgenerator.2a0fc0383ec8"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.generalGenerator

`pub fn general_generator(&self) -> Option<PartialDifferentialEquationPointSymmetryGenerator>`

Returns `Option<partial_differential_equation_point_symmetry_generator>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_outstandingobligations.824f1b8956b3"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.outstandingObligations

`pub fn outstanding_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_parameters.0390dacb6c08"></a>
### PartialDifferentialEquationPointSymmetryAlgebra.parameters

`pub fn parameters(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.abdbda70555b"></a>
### PartialDifferentialEquationPointSymmetryGenerator.coordinateInfinitesimals

`pub fn coordinate_infinitesimals(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.f8f04bc3c924"></a>
### PartialDifferentialEquationPointSymmetryGenerator.dependentInfinitesimal

`pub fn dependent_infinitesimal(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_derivativeorders.e1f27e9ced4d"></a>
### PartialDifferentialEquationPrincipalCoefficient.derivativeOrders

`pub fn derivative_orders(&self) -> Vec<usize>`

Returns `Vec<usize>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_derivativecoefficients.6a4bbb5c5d56"></a>
### PartialDifferentialEquationPrincipalPart.derivativeCoefficients

`pub fn derivative_coefficients(&self) -> Vec<PartialDifferentialEquationPrincipalCoefficient>`

Returns `Vec<partial_differential_equation_principal_coefficient>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_boundaryconditions.b75ca8d49cd1"></a>
### PartialDifferentialEquationProblem.boundaryConditions

`pub fn boundary_conditions(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_dependentfunction.9db624a214dc"></a>
### PartialDifferentialEquationProblem.dependentFunction

`pub fn dependent_function(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_independentvariables.99881275f85e"></a>
### PartialDifferentialEquationProblem.independentVariables

`pub fn independent_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_initialconditions.de63373e4edb"></a>
### PartialDifferentialEquationProblem.initialConditions

`pub fn initial_conditions(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tostring.fe62b42acbb0"></a>
### PartialDifferentialEquationProblem.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_cases.f4b384b5a07a"></a>
### PartialDifferentialEquationSecondOrderClassification.cases

`pub fn cases(&self) -> Vec<PartialDifferentialEquationSecondOrderTypeCase>`

Returns `Vec<partial_differential_equation_second_order_type_case>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_decline.db4e6719bf15"></a>
### PartialDifferentialEquationSecondOrderClassification.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_discriminant.153d7de9dec8"></a>
### PartialDifferentialEquationSecondOrderClassification.discriminant

`pub fn discriminant(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_equationtype.5766d4f3f662"></a>
### PartialDifferentialEquationSecondOrderClassification.equationType

`pub fn equation_type(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_principalmatrix.b9bafb7174f6"></a>
### PartialDifferentialEquationSecondOrderClassification.principalMatrix

`pub fn principal_matrix(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_proofobligations.76f844e0e913"></a>
### PartialDifferentialEquationSecondOrderClassification.proofObligations

`pub fn proof_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_condition.742ceaffa3e1"></a>
### PartialDifferentialEquationSecondOrderTypeCase.condition

`pub fn condition(&self) -> crate::context::AssumptionProposition`

Returns `crate::context::assumption_proposition`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_equationtype.46e990429976"></a>
### PartialDifferentialEquationSecondOrderTypeCase.equationType

`pub fn equation_type(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_independentvariablename.a79c661191a7"></a>
### PartialDifferentialEquationSeparatedEquation.independentVariableName

`pub fn independent_variable_name(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_residual.72f18ca86550"></a>
### PartialDifferentialEquationSeparatedEquation.residual

`pub fn residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_firstequation.14ab74e83d20"></a>
### PartialDifferentialEquationSeparationResult.firstEquation

`pub fn first_equation(&self) -> PartialDifferentialEquationSeparatedEquation`

Returns `partial_differential_equation_separated_equation`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_reconstruction.b551c6f2c2ad"></a>
### PartialDifferentialEquationSeparationResult.reconstruction

`pub fn reconstruction(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_secondequation.f18381889044"></a>
### PartialDifferentialEquationSeparationResult.secondEquation

`pub fn second_equation(&self) -> PartialDifferentialEquationSeparatedEquation`

Returns `partial_differential_equation_separated_equation`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_separationconstant.338e7b674f0f"></a>
### PartialDifferentialEquationSeparationResult.separationConstant

`pub fn separation_constant(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_strategy.4d4c9656d5f2"></a>
### PartialDifferentialEquationSeparationResult.strategy

`pub fn strategy(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_verification.af2ce21b75f8"></a>
### PartialDifferentialEquationSeparationResult.verification

`pub fn verification(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_decline.852cf946c2d7"></a>
### PartialDifferentialEquationSimilaritySolution.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_invariant.4e6ff8b4195d"></a>
### PartialDifferentialEquationSimilaritySolution.invariant

`pub fn invariant(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedconstants.d399bdf3e958"></a>
### PartialDifferentialEquationSimilaritySolution.liftedConstants

`pub fn lifted_constants(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamily.16b78a7aae96"></a>
### PartialDifferentialEquationSimilaritySolution.liftedFamily

`pub fn lifted_family(&self) -> Option<PartialDifferentialEquationSolutionFamily>`

Returns `Option<partial_differential_equation_solution_family>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamilyverification.1f24d4d5c876"></a>
### PartialDifferentialEquationSimilaritySolution.liftedFamilyVerification

`pub fn lifted_family_verification(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_multiplier.700502405026"></a>
### PartialDifferentialEquationSimilaritySolution.multiplier

`pub fn multiplier(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_outstandingobligations.e0f2330fa97f"></a>
### PartialDifferentialEquationSimilaritySolution.outstandingObligations

`pub fn outstanding_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_reducedequation.cbe6c8378679"></a>
### PartialDifferentialEquationSimilaritySolution.reducedEquation

`pub fn reduced_equation(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_similarityvariable.434aacc2d08e"></a>
### PartialDifferentialEquationSimilaritySolution.similarityVariable

`pub fn similarity_variable(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_weight.1ec0dcff27a1"></a>
### PartialDifferentialEquationSimilaritySolution.weight

`pub fn weight(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_arbitraryfunctions.65e4b98a96a7"></a>
### PartialDifferentialEquationSolutionFamily.arbitraryFunctions

`pub fn arbitrary_functions(&self) -> Result<Vec<PartialDifferentialEquationArbitraryFunction>, JsError>`

Returns `Result<Vec<partial_differential_equation_arbitrary_function>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_establishescompleteness.57026acb665d"></a>
### PartialDifferentialEquationSolutionFamily.establishesCompleteness

`pub fn establishes_completeness(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_expression.466f56fd3a0c"></a>
### PartialDifferentialEquationSolutionFamily.expression

`pub fn expression(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_form.8966e9fa5d06"></a>
### PartialDifferentialEquationSolutionFamily.form

`pub fn form(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_proofobligations.e5dda376598b"></a>
### PartialDifferentialEquationSolutionFamily.proofObligations

`pub fn proof_obligations(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_dischargedobligations.346e920762b6"></a>
### PartialDifferentialEquationSolutionProvenance.dischargedObligations

`pub fn discharged_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_linearity.1ab08a772397"></a>
### PartialDifferentialEquationSolutionProvenance.linearity

`pub fn linearity(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_method.4df0ae777fd3"></a>
### PartialDifferentialEquationSolutionProvenance.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_order.988d5c9e0775"></a>
### PartialDifferentialEquationSolutionProvenance.order

`pub fn order(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_decline.661f84740037"></a>
### PartialDifferentialEquationSolveResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_method.f888cfb04f38"></a>
### PartialDifferentialEquationSolveResult.method

`pub fn method(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_provenance.df5113fd5021"></a>
### PartialDifferentialEquationSolveResult.provenance

`pub fn provenance(&self) -> Option<PartialDifferentialEquationSolutionProvenance>`

Returns `Option<partial_differential_equation_solution_provenance>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_solution.9dcf8cda0dd0"></a>
### PartialDifferentialEquationSolveResult.solution

`pub fn solution(&self) -> Option<PartialDifferentialEquationSolutionFamily>`

Returns `Option<partial_differential_equation_solution_family>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verification.625c06465450"></a>
### PartialDifferentialEquationSolveResult.verification

`pub fn verification(&self) -> Option<PartialDifferentialEquationVerificationReport>`

Returns `Option<partial_differential_equation_verification_report>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_coordinatechange.8d17b2f53859"></a>
### PartialDifferentialEquationTransformationResult.coordinateChange

`pub fn coordinate_change(&self) -> Option<PartialDifferentialEquationCoordinateChange>`

Returns `Option<partial_differential_equation_coordinate_change>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_decline.421dc5aa6263"></a>
### PartialDifferentialEquationTransformationResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_normalizationmultiplier.1196debbcaa4"></a>
### PartialDifferentialEquationTransformationResult.normalizationMultiplier

`pub fn normalization_multiplier(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_targetproblem.b42721033cee"></a>
### PartialDifferentialEquationTransformationResult.targetProblem

`pub fn target_problem(&self) -> Option<PartialDifferentialEquationProblem>`

Returns `Option<partial_differential_equation_problem>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_transformed.7b1b402944f8"></a>
### PartialDifferentialEquationTransformationResult.transformed

`pub fn transformed(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_claimedgoverningresidual.0461d4db2c4c"></a>
### PartialDifferentialEquationTransformationVerificationReport.claimedGoverningResidual

`pub fn claimed_governing_residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_compositionresiduals.d94d4f97f722"></a>
### PartialDifferentialEquationTransformationVerificationReport.compositionResiduals

`pub fn composition_residuals(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.83be7441a1af"></a>
### PartialDifferentialEquationTransformationVerificationReport.principalCongruenceResiduals

`pub fn principal_congruence_residuals(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_transformedgoverningresidual.d3784149f15e"></a>
### PartialDifferentialEquationTransformationVerificationReport.transformedGoverningResidual

`pub fn transformed_governing_residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_boundaryconditionresiduals.1c35c85c2d81"></a>
### PartialDifferentialEquationVerificationReport.boundaryConditionResiduals

`pub fn boundary_condition_residuals(&self) -> Vec<PartialDifferentialEquationVerificationResidual>`

Returns `Vec<partial_differential_equation_verification_residual>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_explicitbranch.4065ca30e756"></a>
### PartialDifferentialEquationVerificationReport.explicitBranch

`pub fn explicit_branch(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_governingresidual.816de73fe328"></a>
### PartialDifferentialEquationVerificationReport.governingResidual

`pub fn governing_residual(&self) -> PartialDifferentialEquationVerificationResidual`

Returns `partial_differential_equation_verification_residual`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_inconclusivereason.31d73a309d82"></a>
### PartialDifferentialEquationVerificationReport.inconclusiveReason

`pub fn inconclusive_reason(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_initialconditionresiduals.84ad90fe1dfe"></a>
### PartialDifferentialEquationVerificationReport.initialConditionResiduals

`pub fn initial_condition_residuals(&self) -> Vec<PartialDifferentialEquationVerificationResidual>`

Returns `Vec<partial_differential_equation_verification_residual>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_proofobligations.b11b03c7f975"></a>
### PartialDifferentialEquationVerificationReport.proofObligations

`pub fn proof_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_residual.7de4cbc4eaa6"></a>
### PartialDifferentialEquationVerificationResidual.residual

`pub fn residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.setenumeration_elements.521d21fa5162"></a>
### SetEnumeration.elements

`pub fn elements(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.setenumeration_outcome.7db4df413ad1"></a>
### SetEnumeration.outcome

`pub fn outcome(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.undefinedfunction_tostring.e24a69e52de8"></a>
### UndefinedFunction.toString

`pub fn to_js_string(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_module.module_addassumptions.4a919b81fb21"></a>
### module.addAssumptions

`fn add_assumptions(proposition: &AssumptionProposition) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_algebraicassumption.cadab791299a"></a>
### module.algebraicAssumption

`fn algebraic_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_assumptionpropositionfromlogicalexpression.135c42fd1172"></a>
### module.assumptionPropositionFromLogicalExpression

`fn assumption_proposition_from_logical_expression(logical_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_assumptionsof.55389b6d8956"></a>
### module.assumptionsOf

`fn assumptions_of(name: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_canonicalizepartialdifferentialequation.be642e9771be"></a>
### module.canonicalizePartialDifferentialEquation

`fn canonicalize_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationCanonicalizationResult, JsError>`

Returns `Result<partial_differential_equation_canonicalization_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_changepartialdifferentialequationvariables.9fe6a5fa1ccc"></a>
### module.changePartialDifferentialEquationVariables

`fn change_partial_differential_equation_variables(problem: &PartialDifferentialEquationProblem, target_variables: Vec<String>, forward_coordinates: Option<Vec<Expression>>, inverse_coordinates: Option<Vec<Expression>>, target_dependent_function: Option<UndefinedFunction>) -> Result<PartialDifferentialEquationTransformationResult, JsError>`

Returns `Result<partial_differential_equation_transformation_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_classifypartialdifferentialequation.a666c997e176"></a>
### module.classifyPartialDifferentialEquation

`fn classify_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationClassification, JsError>`

Returns `Result<partial_differential_equation_classification, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_classifysecondorderpartialdifferentialequation.37e1c5283f6c"></a>
### module.classifySecondOrderPartialDifferentialEquation

`fn classify_second_order_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSecondOrderClassification, JsError>`

Returns `Result<partial_differential_equation_second_order_classification, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_clearallassumptions.0db5db87e18d"></a>
### module.clearAllAssumptions

`fn clear_all_assumptions() -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_clearassumptions.b12f408b3470"></a>
### module.clearAssumptions

`fn clear_assumptions(name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_complexassumption.1304cbe2e12a"></a>
### module.complexAssumption

`fn complex_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_complexentries.e48f22cc70fa"></a>
### module.complexEntries

`fn complex_entries(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_compositeassumption.3b1dc4123512"></a>
### module.compositeAssumption

`fn composite_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_congruencemodulus.17e549d7616a"></a>
### module.congruenceModulus

`fn congruence_modulus(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_congruentassumption.906a88486d5e"></a>
### module.congruentAssumption

`fn congruent_assumption(left: &Expression, right: &Expression, modulus: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_constructpartialdifferentialequationpointsymmetryaction.6b50472b60fd"></a>
### module.constructPartialDifferentialEquationPointSymmetryAction

`fn construct_partial_differential_equation_point_symmetry_action(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAction, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_action, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_couldhold.4201d9b1b3bb"></a>
### module.couldHold

`fn could_hold(proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_defaultcontext.6f6779c9ec73"></a>
### module.defaultContext

`fn default_context() -> Context`

Returns `context`.

<a id="placement-placement.wasm.wasm_module.module_definedassumption.5219edfb0174"></a>
### module.definedAssumption

`fn defined_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_derivepartialdifferentialequationpointsymmetries.772574d4d35d"></a>
### module.derivePartialDifferentialEquationPointSymmetries

`fn derive_partial_differential_equation_point_symmetries(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAlgebra, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_algebra, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_deserializeassumptionproposition.4165a4b54429"></a>
### module.deserializeAssumptionProposition

`fn deserialize_assumption_proposition(text: &str) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_diagonalmatrix.0b4ff30c00c6"></a>
### module.diagonalMatrix

`fn diagonal_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_differentiatebulk.88e9636eaec7"></a>
### module.differentiateBulk

`fn differentiate_bulk(targets: Vec<Expression>, variable: &Expression) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_discoverpartialdifferentialequation.8b0d6696025b"></a>
### module.discoverPartialDifferentialEquation

`fn discover_partial_differential_equation(equation: &Expression, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_equalassumption.24d5230bded4"></a>
### module.equalAssumption

`fn equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatenumericbulk.408fe965e833"></a>
### module.evaluateNumericBulk

`fn evaluate_numeric_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evenassumption.edd68ccb590f"></a>
### module.evenAssumption

`fn even_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_executionmode.d4cea0f8949e"></a>
### module.executionMode

`fn execution_mode() -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_module.module_expandbulk.9bd6e6330993"></a>
### module.expandBulk

`fn expand_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_explicitpartialdifferentialequationsolution.71efe41cb42c"></a>
### module.explicitPartialDifferentialEquationSolution

`fn explicit_partial_differential_equation_solution(solution: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_extendedrealassumption.b6b7622d86b1"></a>
### module.extendedRealAssumption

`fn extended_real_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_finiteassumption.6ae53821afcc"></a>
### module.finiteAssumption

`fn finite_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fullrankmatrix.545a4d2aa24c"></a>
### module.fullRankMatrix

`fn full_rank_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterassumption.a5eb42bf8f9c"></a>
### module.greaterAssumption

`fn greater_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterorequalassumption.775238806940"></a>
### module.greaterOrEqualAssumption

`fn greater_or_equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hermitianmatrix.561dfa80b073"></a>
### module.hermitianMatrix

`fn hermitian_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontroladdress.a36df668e7b8"></a>
### module.hostCancellationControlAddress

`fn host_cancellation_control_address() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontrolbytelength.eedb6cf20393"></a>
### module.hostCancellationControlByteLength

`fn host_cancellation_control_byte_length() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationrequested.254657584a52"></a>
### module.hostCancellationRequested

`fn host_cancellation_requested(slot_index: usize, ticket: u32) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotcount.4101f6d428a3"></a>
### module.hostCancellationSlotCount

`fn host_cancellation_slot_count() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotticket.31ee528c4115"></a>
### module.hostCancellationSlotTicket

`fn host_cancellation_slot_ticket(slot_index: usize) -> u32`

Returns `u32`.

<a id="placement-placement.wasm.wasm_module.module_identitymatrix.06589077f324"></a>
### module.identityMatrix

`fn identity_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_implicitpartialdifferentialequationsolution.c7079e45bc6e"></a>
### module.implicitPartialDifferentialEquationSolution

`fn implicit_partial_differential_equation_solution(residual: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_infiniteassumption.30902fe0a9f6"></a>
### module.infiniteAssumption

`fn infinite_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_initthreadpoolwithcapability.356307fe3c6a"></a>
### module.initThreadPoolWithCapability

`fn init_thread_pool_with_capability(worker_count: usize) -> Promise`

Returns `js_sys::Promise`.

<a id="placement-placement.wasm.wasm_module.module_initializeparallelism.cf57f2d301bc"></a>
### module.initializeParallelism

`fn initialize_parallelism(worker_count: usize) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerassumption.bf2080c26dc3"></a>
### module.integerAssumption

`fn integer_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerentries.98584eadce94"></a>
### module.integerEntries

`fn integer_entries(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefiniteunderconstraint.b38208ce9b58"></a>
### module.integrateDefiniteUnderConstraint

`fn integrate_definite_under_constraint(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_internerlength.16f9ad37f8f3"></a>
### module.internerLength

`fn interner_length() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_invertiblematrix.f6ca9c5a4fd1"></a>
### module.invertibleMatrix

`fn invertible_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_irrationalassumption.a422ee432156"></a>
### module.irrationalAssumption

`fn irrational_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_leftoperand.76fb7332aadf"></a>
### module.leftOperand

`fn left_operand(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessassumption.8fc95f457c3b"></a>
### module.lessAssumption

`fn less_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessorequalassumption.9485a709d841"></a>
### module.lessOrEqualAssumption

`fn less_or_equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lowertriangularmatrix.3932d732657f"></a>
### module.lowerTriangularMatrix

`fn lower_triangular_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixshape.3371cecbb4ef"></a>
### module.matrixShape

`fn matrix_shape(subject: &Matrix, rows: usize, columns: usize) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_memberassumption.d3aa17ab5d8c"></a>
### module.memberAssumption

`fn member_assumption(element: &Expression, set_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_membershipelement.8ef3bf1bc659"></a>
### module.membershipElement

`fn membership_element(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_membershipset.b2235c74f247"></a>
### module.membershipSet

`fn membership_set(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_naturalassumption.3ab80dcb8d03"></a>
### module.naturalAssumption

`fn natural_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_negativeassumption.a7d23b923406"></a>
### module.negativeAssumption

`fn negative_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_nonnegativeassumption.cd1162dab735"></a>
### module.nonnegativeAssumption

`fn nonnegative_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_nonpositiveassumption.d8eddd870b43"></a>
### module.nonpositiveAssumption

`fn nonpositive_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_nonzeroassumption.76b8b5800ccd"></a>
### module.nonzeroAssumption

`fn nonzero_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_normalmatrix.73c5d372a8ef"></a>
### module.normalMatrix

`fn normal_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_notequalassumption.c25dc8a01655"></a>
### module.notEqualAssumption

`fn not_equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_oddassumption.6299ce7886a7"></a>
### module.oddAssumption

`fn odd_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_orthogonalmatrix.5841526b40e6"></a>
### module.orthogonalMatrix

`fn orthogonal_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parallelismcapability.1e9632969c40"></a>
### module.parallelismCapability

`fn parallelism_capability() -> crate::context::ParallelismCapability`

Returns `ParallelismCapability`.

<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequation.cbe5f4689b94"></a>
### module.partialDifferentialEquation

`fn partial_differential_equation(equation: &Expression, dependent_function: &UndefinedFunction, independent_variables: Vec<String>, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequationpointsymmetrygenerator.90c8b91663b5"></a>
### module.partialDifferentialEquationPointSymmetryGenerator

`fn partial_differential_equation_point_symmetry_generator(problem: &PartialDifferentialEquationProblem, coordinate_infinitesimals: Vec<Expression>, dependent_infinitesimal: &Expression) -> Result<PartialDifferentialEquationPointSymmetryGenerator, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_generator, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positiveassumption.c2f3eab58e85"></a>
### module.positiveAssumption

`fn positive_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positivedefinitematrix.3e3360ff18c5"></a>
### module.positiveDefiniteMatrix

`fn positive_definite_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positiveintegerassumption.25753e25c658"></a>
### module.positiveIntegerAssumption

`fn positive_integer_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positivesemidefinitematrix.6e762c686132"></a>
### module.positiveSemidefiniteMatrix

`fn positive_semidefinite_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_primeassumption.048f5e3f9f7a"></a>
### module.primeAssumption

`fn prime_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rationalassumption.12ebaab24804"></a>
### module.rationalAssumption

`fn rational_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realassumption.926ab7bf4766"></a>
### module.realAssumption

`fn real_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realentries.7d6debcfcb29"></a>
### module.realEntries

`fn real_entries(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_relationkind.7ff1b1cd4c30"></a>
### module.relationKind

`fn relation_kind(proposition: &AssumptionProposition) -> Result<Option<String>, JsError>`

Returns `Result<Option<String>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_releasehostcancellationslot.0cdb4a4c9d2b"></a>
### module.releaseHostCancellationSlot

`fn release_host_cancellation_slot(slot_index: usize, ticket: u32)`

Returns `()`.

<a id="placement-placement.wasm.wasm_module.module_reservehostcancellationslot.081bf1bf35ab"></a>
### module.reserveHostCancellationSlot

`fn reserve_host_cancellation_slot() -> i32`

Returns `i32`.

<a id="placement-placement.wasm.wasm_module.module_rightoperand.e696bf40887d"></a>
### module.rightOperand

`fn right_operand(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_separatepartialdifferentialequation.39acc8c74690"></a>
### module.separatePartialDifferentialEquation

`fn separate_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSeparationResult, JsError>`

Returns `Result<partial_differential_equation_separation_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_serializebulk.d66dc15ad809"></a>
### module.serializeBulk

`fn serialize_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkTextOutcome>, JsError>`

Returns `Result<Vec<BulkTextOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setexecutionmode.eb3bb85ec56d"></a>
### module.setExecutionMode

`fn set_execution_mode(name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifybulk.410bd7966c46"></a>
### module.simplifyBulk

`fn simplify_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifyunderconstraint.cd9e5a6a75e2"></a>
### module.simplifyUnderConstraint

`fn simplify_under_constraint(input_expression: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_singularmatrix.3fe01d91e635"></a>
### module.singularMatrix

`fn singular_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationrequest.ccf38368c860"></a>
### module.solveOrdinaryDifferentialEquationRequest

`fn solve_ordinary_differential_equation_request(equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, scope: String, condition_residuals: Option<Vec<Expression>>, method: Option<String>, regularity: Option<String>) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationsystemrequest.8607f77ab0ac"></a>
### module.solveOrdinaryDifferentialEquationSystemRequest

`fn solve_ordinary_differential_equation_system_request(equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, condition_residuals: Option<Vec<Expression>>, method: Option<String>) -> Result<OrdinaryDifferentialEquationSystemSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_system_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithhistory.5f497de66d83"></a>
### module.solveOrdinaryDifferentialEquationWithHistory

`fn solve_ordinary_differential_equation_with_history(equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, history_value: &Expression, history_start: &Expression, history_end: &Expression) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequation.4ef3f7b147c7"></a>
### module.solvePartialDifferentialEquation

`fn solve_partial_differential_equation(problem: &PartialDifferentialEquationProblem, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationbysimilarityreduction.f25716664764"></a>
### module.solvePartialDifferentialEquationBySimilarityReduction

`fn solve_partial_differential_equation_by_similarity_reduction(problem: &PartialDifferentialEquationProblem, generator: &PartialDifferentialEquationPointSymmetryGenerator) -> Result<PartialDifferentialEquationSimilaritySolution, JsError>`

Returns `Result<partial_differential_equation_similarity_solution, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationrequest.cd6c143bbccf"></a>
### module.solvePartialDifferentialEquationRequest

`fn solve_partial_differential_equation_request(problem: &PartialDifferentialEquationProblem, scope: String, geometric_domain: Option<String>, regularity: Option<String>, solution_class: Option<String>, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationwithtransformaxisspecifications.ec65b3a1b0a4"></a>
### module.solvePartialDifferentialEquationWithTransformAxisSpecifications

`fn solve_partial_differential_equation_with_transform_axis_specifications(problem: &PartialDifferentialEquationProblem, method: String, transform_axis_specifications: Vec<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_squarematrix.dd03175ad835"></a>
### module.squareMatrix

`fn square_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_substitutebulk.80cd62071bc5"></a>
### module.substituteBulk

`fn substitute_bulk(targets: Vec<Expression>, variable: &Expression, value: &Expression) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_symmetricmatrix.503a37665d86"></a>
### module.symmetricMatrix

`fn symmetric_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_transcendentalassumption.685160fbab59"></a>
### module.transcendentalAssumption

`fn transcendental_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_unitarymatrix.5678eb6d4ccd"></a>
### module.unitaryMatrix

`fn unitary_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_uppertriangularmatrix.14d1fd7d94d6"></a>
### module.upperTriangularMatrix

`fn upper_triangular_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_verifyordinarydifferentialequationsystemsolution.d73b5971c92e"></a>
### module.verifyOrdinaryDifferentialEquationSystemSolution

`fn verify_ordinary_differential_equation_system_solution(equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, components: Vec<Expression>, generated_constants: Vec<Expression>, condition_residuals: Option<Vec<Expression>>) -> Result<OrdinaryDifferentialEquationSystemVerificationReport, JsError>`

Returns `Result<ordinary_differential_equation_system_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationcoordinatetransformation.723f0853a676"></a>
### module.verifyPartialDifferentialEquationCoordinateTransformation

`fn verify_partial_differential_equation_coordinate_transformation(problem: &PartialDifferentialEquationProblem, transformation: &PartialDifferentialEquationTransformationResult) -> Result<PartialDifferentialEquationTransformationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_transformation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationsolution.b86bfbc069d4"></a>
### module.verifyPartialDifferentialEquationSolution

`fn verify_partial_differential_equation_solution(problem: &PartialDifferentialEquationProblem, solution: &PartialDifferentialEquationSolutionFamily) -> Result<PartialDifferentialEquationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_zeroassumption.999da512137e"></a>
### module.zeroAssumption

`fn zero_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_zeroequivalent.cab9fc362970"></a>
### module.zeroEquivalent

`fn zero_equivalent(input_expression: &Expression, constraint: Option<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_zeromatrix.3561defba5d5"></a>
### module.zeroMatrix

`fn zero_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

