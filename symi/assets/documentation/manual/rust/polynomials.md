# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="placement-placement.rust.native_rust.api_algebra_session_degree.a11d0fca0af0"></a>
`symi::api::algebra::Session — pub fn degree<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType) -> Result<Option<usize>, ApiError> where VariableType: Into<VariableLike<'a>>`


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

<a id="placement-placement.rust.native_rust.api_algebra_session_leading_coefficient.316e8ad21cfc"></a>
`symi::api::algebra::Session — pub fn leading_coefficient<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

<a id="placement-placement.rust.native_rust.api_algebra_session_coefficient.1b8ac623d88d"></a>
`symi::api::algebra::Session — pub fn coefficient<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType, power: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationjetcoefficient_coefficient.2517447716de"></a>
`symi::api::partial_differential_equations::PartialDifferentialEquationJetCoefficient — pub fn coefficient(&self) -> Expression`

<a id="placement-placement.rust.native_rust.api_partial_differential_equations_partialdifferentialequationprincipalcoefficient_coefficient.36c84887f4a8"></a>
`symi::api::partial_differential_equations::PartialDifferentialEquationPrincipalCoefficient — pub fn coefficient(&self) -> Expression`


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

<a id="placement-placement.rust.native_rust.api_algebra_session_polynomial_gcd.f1a1e5671e14"></a>
`symi::api::algebra::Session — pub fn polynomial_gcd<'a, VariableType>(&self, left: &Expression, right: &Expression, variable: VariableType) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="placement-placement.rust.native_rust.api_algebra_session_resultant.defd7ec67600"></a>
`symi::api::algebra::Session — pub fn resultant<'a, VariableType>(&self, left: &Expression, right: &Expression, variable: VariableType) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_isolate_real_roots.fc1b6ebe7acd"></a>
`symi::api::expression_operations::Expression — pub fn isolate_real_roots<'a, VariableType>(&self, variable: VariableType) -> Result<Vec<IsolatingInterval>, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_solving_session_isolate_real_roots.5561fe04483f"></a>
`symi::api::solving::Session — pub fn isolate_real_roots<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType) -> Result<Vec<IsolatingInterval>, ApiError> where VariableType: Into<VariableLike<'a>>`


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="placement-placement.rust.native_rust.api_results_isolatinginterval_lower.6f3689208e56"></a>
`symi::api::results::IsolatingInterval — pub fn lower(&self) -> Expression`


### upper

<a id="placement-placement.rust.native_rust.api_results_isolatinginterval_upper.e57c65a14ea8"></a>
`symi::api::results::IsolatingInterval — pub fn upper(&self) -> Expression`


## Gröbner bases and ideals

These operate over the polynomial ring \(\mathbb{Q}[\text{variables}]\). Generators are passed
as an expression list; the ring variables are named by a string list; the
monomial order is named by a string (`"lexicographic"` / `"lex"`,
`"degree_lexicographic"` / `"deglex"`, or `"degree_reverse_lexicographic"` /
`"degrevlex"`, the computational default). Any generator that is not a
polynomial over \(\mathbb{Q}\) in the named variables — a transcendental call, a non-integer
power, an unnamed symbol, or an irrational coefficient — makes the operation
decline cleanly (Python `None`, WASM `null`); it never returns a wrong or
partial answer. Within \(\mathbb{Q}[\text{variables}]\) the results are exact and complete: a
returned basis is the canonical reduced Gröbner basis, membership is a genuine
decision, and elimination is exact by the Elimination Theorem.

**Performance.** The basis is computed by **F4** (Faugère's
batched Macaulay-matrix reduction), with a signature-based engine (**F5 / GVW**)
available internally; the reference Buchberger algorithm is retained as the
differential oracle these are checked against. The choice of engine is an
internal acceleration only: the result is **identical** to the reference
Buchberger basis for every input, and the monomial-order argument and the whole
binding surface are unchanged. These entry points simply run faster — there is
no new method to call.

### groebner_basis

<a id="placement-placement.rust.native_rust.api_algebra_session_groebner_basis.84428111421f"></a>
`symi::api::algebra::Session — pub fn groebner_basis<'a, IteratorType, VariableType>(&self, generators: &[Expression], variables: IteratorType, order: MonomialOrdering) -> Result<Option<Vec<Expression>>, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_membership.528f883ec50e"></a>
`symi::api::algebra::Session — pub fn ideal_membership<'a, IteratorType, VariableType>(&self, element: &Expression, generators: &[Expression], variables: IteratorType, order: MonomialOrdering) -> Result<Option<bool>, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_sum.07c6b3070971"></a>
`symi::api::algebra::Session — pub fn ideal_sum<'a, IteratorType, VariableType>(&self, generators_left: &[Expression], generators_right: &[Expression], variables: IteratorType, order: MonomialOrdering) -> Result<Option<Vec<Expression>>, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_product.3209f1425a99"></a>
`symi::api::algebra::Session — pub fn ideal_product<'a, IteratorType, VariableType>(&self, generators_left: &[Expression], generators_right: &[Expression], variables: IteratorType, order: MonomialOrdering) -> Result<Option<Vec<Expression>>, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_intersection.227abfe301ad"></a>
`symi::api::algebra::Session — pub fn ideal_intersection<'a, IteratorType, VariableType>(&self, generators_left: &[Expression], generators_right: &[Expression], variables: IteratorType, order: MonomialOrdering) -> Result<Option<Vec<Expression>>, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

<a id="placement-placement.rust.native_rust.api_algebra_session_elimination_ideal.7548ef12a96f"></a>
`symi::api::algebra::Session — pub fn elimination_ideal<'a, 'b, VariablesType, EliminateType, VariableType, EliminatedType>(&self, generators: &[Expression], variables: VariablesType, eliminate: EliminateType) -> Result<Option<Vec<Expression>>, ApiError> where VariablesType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>, EliminateType: IntoIterator<Item = EliminatedType>, EliminatedType: Into<VariableLike<'b>>`


A Gröbner basis of the elimination ideal \(\langle\operatorname{generators}\rangle \cap
\mathbb{Q}[\text{surviving variables}]\), projecting away the variables named in `eliminate` via the
Elimination Theorem (a block order ranks the eliminated variables high and the
generators free of them are kept). Exact: it neither drops nor introduces
components. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator. Example: eliminating `t`
from \(\{x - t^2, y - t^3\}\) returns the twisted-cubic implicit equation \(y^2 - x^3\).

## Order change and implicitisation

These consume a Gröbner basis rather than compute one from scratch. The order
change runs the standard FGLM algorithm; implicitisation is parameter
elimination with the rational-parametrisation saturation wired in.

### change_monomial_order

<a id="placement-placement.rust.native_rust.api_algebra_session_change_monomial_order.a590b4e5fa99"></a>
`symi::api::algebra::Session — pub fn change_monomial_order<'a, IteratorType, VariableType>(&self, basis: &[Expression], variables: IteratorType, source_order: MonomialOrdering, target_order: MonomialOrdering) -> Result<Option<Vec<Expression>>, ApiError> where IteratorType: IntoIterator<Item = VariableType>, VariableType: Into<VariableLike<'a>>`


Convert a Gröbner basis of a **zero-dimensional** ideal from `source_order` to
`target_order` by FGLM (Faugère–Gianni–Lazard–Mora) — linear algebra in the
finite-dimensional quotient ring \(\mathbb{Q}[\text{variables}]/I\), far cheaper than computing
the target basis directly (the msolve route to a lexicographic basis is a cheap
`degrevlex` basis followed by this conversion). The result is the **canonical
reduced** Gröbner basis under `target_order`, identical to a direct
`groebner_basis` call. `None` when the ideal is positive-dimensional (the
quotient ring is infinite-dimensional, so FGLM does not apply) or any generator
is outside \(\mathbb{Q}[\text{variables}]\).

### implicitize

<a id="placement-placement.rust.native_rust.api_algebra_session_implicitize.6a1744e798b0"></a>
`symi::api::algebra::Session — pub fn implicitize<'a, 'b, CoordinatesType, ParametersType, CoordinateType, ParameterType>(&self, coordinates: CoordinatesType, parameters: ParametersType, parametric_expressions: &[Expression]) -> Result<Option<Vec<Expression>>, ApiError> where CoordinatesType: IntoIterator<Item = CoordinateType>, CoordinateType: Into<VariableLike<'a>>, ParametersType: IntoIterator<Item = ParameterType>, ParameterType: Into<VariableLike<'b>>`


The implicit ideal of a parametric curve or surface \(x_i = f_i(\operatorname{parameters})\) (the
i-th coordinate paired with the i-th parametric expression), returned as a
generator list over \(\mathbb{Q}[\text{coordinates}]\) — the elimination of the parameters
(Cox–Little–O'Shea ch. 3). A **polynomial** parametrisation eliminates the
parameters directly; a **rational** one \(f_i = p_i/q_i\) clears denominators and
**saturates** by the denominator product through a fresh tag variable, so the
eliminant is the true implicit equation rather than a multiple carrying spurious
components. `None` when a parametric expression is outside \(\mathbb{Q}(\operatorname{parameters})\) or
there are no parameters. Examples: \(\{x = t^2, y = t^3\}\) returns \(y^2 - x^3\);
\(\{x = (1 - t^2)/(1 + t^2), y = 2t/(1 + t^2)\}\) returns \(x^2 + y^2 - 1\).

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

<a id="placement-placement.rust.native_rust.api_matrix.2ba95f0af754"></a>
### api::Matrix

`symi::api — pub struct Matrix {`

Returns `unknown`.

<a id="placement-placement.rust.native_rust.api_serialization_mathematicalobject_matrix.183aef3672be"></a>
### api::serialization::MathematicalObject::Matrix

`symi::api::serialization::MathematicalObject — Matrix(Matrix)`

Returns `variant`.

