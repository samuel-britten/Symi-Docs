# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="entry-presentation_rust_api_session_degree"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_degree.a11d0fca0af0"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn degree<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Option<usize>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

<a id="entry-presentation_rust_api_session_leading_coefficient"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_leading_coefficient.316e8ad21cfc"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn leading_coefficient<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

<a id="entry-presentation_rust_api_session_coefficient"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_coefficient.1b8ac623d88d"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn coefficient<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
    power: usize,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

<a id="entry-presentation_rust_api_session_polynomial_gcd"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_polynomial_gcd.f1a1e5671e14"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn polynomial_gcd<'a, VariableType>(
    &self,
    left: &Expression,
    right: &Expression,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="entry-presentation_rust_api_session_resultant"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_resultant.defd7ec67600"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn resultant<'a, VariableType>(
    &self,
    left: &Expression,
    right: &Expression,
    variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="entry-presentation_rust_api_session_isolate_real_roots"></a>
<a id="placement-placement.rust.native_rust.api_solving_session_isolate_real_roots.5561fe04483f"></a>
<p class="symi-entry-owner">api::solving::Session method</p>

```rust signature
pub fn isolate_real_roots<'a, VariableType>(
    &self,
    input_expression: &Expression,
    variable: VariableType,
) -> Result<Vec<IsolatingInterval>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_isolate_real_roots.fc1b6ebe7acd"></a>
<p class="symi-entry-owner">api::expression_operations::Expression method: <code>api::expression_operations::Expression::isolate_real_roots</code></p>

```rust signature
pub fn isolate_real_roots<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<Vec<IsolatingInterval>, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

</details>


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="entry-presentation_rust_api_isolatinginterval_lower"></a>
<a id="placement-placement.rust.native_rust.api_results_isolatinginterval_lower.6f3689208e56"></a>
<p class="symi-entry-owner">api::results::IsolatingInterval method</p>

```rust signature
pub fn lower(&self) -> Expression
```

The lower endpoint.

### upper

<a id="entry-presentation_rust_api_isolatinginterval_upper"></a>
<a id="placement-placement.rust.native_rust.api_results_isolatinginterval_upper.e57c65a14ea8"></a>
<p class="symi-entry-owner">api::results::IsolatingInterval method</p>

```rust signature
pub fn upper(&self) -> Expression
```

The upper endpoint.

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

<a id="entry-presentation_rust_api_session_groebner_basis"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_groebner_basis.84428111421f"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn groebner_basis<'a, IteratorType, VariableType>(
    &self,
    generators: &[Expression],
    variables: IteratorType,
    order: MonomialOrdering,
) -> Result<Option<Vec<Expression>>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

<a id="entry-presentation_rust_api_session_ideal_membership"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_membership.528f883ec50e"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn ideal_membership<'a, IteratorType, VariableType>(
    &self,
    element: &Expression,
    generators: &[Expression],
    variables: IteratorType,
    order: MonomialOrdering,
) -> Result<Option<bool>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

<a id="entry-presentation_rust_api_session_ideal_sum"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_sum.07c6b3070971"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn ideal_sum<'a, IteratorType, VariableType>(
    &self,
    generators_left: &[Expression],
    generators_right: &[Expression],
    variables: IteratorType,
    order: MonomialOrdering,
) -> Result<Option<Vec<Expression>>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

<a id="entry-presentation_rust_api_session_ideal_product"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_product.3209f1425a99"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn ideal_product<'a, IteratorType, VariableType>(
    &self,
    generators_left: &[Expression],
    generators_right: &[Expression],
    variables: IteratorType,
    order: MonomialOrdering,
) -> Result<Option<Vec<Expression>>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

<a id="entry-presentation_rust_api_session_ideal_intersection"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_ideal_intersection.227abfe301ad"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn ideal_intersection<'a, IteratorType, VariableType>(
    &self,
    generators_left: &[Expression],
    generators_right: &[Expression],
    variables: IteratorType,
    order: MonomialOrdering,
) -> Result<Option<Vec<Expression>>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

<a id="entry-presentation_rust_api_session_elimination_ideal"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_elimination_ideal.7548ef12a96f"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn elimination_ideal<'a, 'b, VariablesType, EliminateType, VariableType, EliminatedType>(
    &self,
    generators: &[Expression],
    variables: VariablesType,
    eliminate: EliminateType,
) -> Result<Option<Vec<Expression>>, ApiError>
where
    VariablesType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
    EliminateType: IntoIterator<Item = EliminatedType>,
    EliminatedType: Into<VariableLike<'b>>,
```


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

<a id="entry-presentation_rust_api_session_change_monomial_order"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_change_monomial_order.a590b4e5fa99"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn change_monomial_order<'a, IteratorType, VariableType>(
    &self,
    basis: &[Expression],
    variables: IteratorType,
    source_order: MonomialOrdering,
    target_order: MonomialOrdering,
) -> Result<Option<Vec<Expression>>, ApiError>
where
    IteratorType: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
```


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

<a id="entry-presentation_rust_api_session_implicitize"></a>
<a id="placement-placement.rust.native_rust.api_algebra_session_implicitize.6a1744e798b0"></a>
<p class="symi-entry-owner">api::algebra::Session method</p>

```rust signature
pub fn implicitize<'a, 'b, CoordinatesType, ParametersType, CoordinateType, ParameterType>(
    &self,
    coordinates: CoordinatesType,
    parameters: ParametersType,
    parametric_expressions: &[Expression],
) -> Result<Option<Vec<Expression>>, ApiError>
where
    CoordinatesType: IntoIterator<Item = CoordinateType>,
    CoordinateType: Into<VariableLike<'a>>,
    ParametersType: IntoIterator<Item = ParameterType>,
    ParameterType: Into<VariableLike<'b>>,
```


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

### api::algebra

<a id="entry-presentation_rust_native_module_api_algebra"></a>
<a id="placement-placement.rust.native_rust.api_algebra.a63c75b9f5ab"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod algebra;
```

Polynomial, ideal, and algebraic-rewrite operations of the native API.

### cylindrical_algebraic_decomposition

<a id="entry-presentation_rust_api_session_cylindrical_algebraic_decomposition"></a>
<a id="placement-placement.rust.native_rust.api_session_cylindrical_algebraic_decomposition.820163b507d9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn cylindrical_algebraic_decomposition< 'a, ExpressionIterator, VariableIterator, VariableType, ConstraintIterator, >(
    &self,
    expressions: ExpressionIterator,
    variables: VariableIterator,
    equational_constraints: ConstraintIterator,
) -> Result<CylindricalAlgebraicDecomposition, ApiError>
where
    ExpressionIterator: IntoIterator<Item = Expression>,
    VariableIterator: IntoIterator<Item = VariableType>,
    VariableType: Into<VariableLike<'a>>,
    ConstraintIterator: IntoIterator<Item = usize>,
```

Provides the `cylindrical_algebraic_decomposition` operation on this native type.

### factor_over_gaussian_integers

<a id="entry-presentation_rust_api_session_factor_over_gaussian_integers"></a>
<a id="placement-placement.rust.native_rust.api_session_factor_over_gaussian_integers.6a70e6be19ef"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn factor_over_gaussian_integers(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

Factors a univariate polynomial over the Gaussian integers.

### IsolatingInterval

<a id="entry-presentation_rust_api_isolatinginterval"></a>
<a id="placement-placement.rust.native_rust.api_isolatinginterval.40248483e9b4"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::IsolatingInterval;
```

A rational interval that isolates exactly one real root.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_isolatinginterval.c0b0a61df2d7"></a>
<p class="symi-entry-owner">Type: <code>api::results::IsolatingInterval</code></p>

```rust signature
pub struct IsolatingInterval
```

</details>

### MonomialOrdering

<a id="entry-presentation_rust_api_monomialordering"></a>
<a id="placement-placement.rust.native_rust.api_monomialordering.be5473e1854c"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use options::MonomialOrdering;
```

A monomial ordering supported by the native polynomial API.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_options_monomialordering.b021b8be344d"></a>
<p class="symi-entry-owner">Type: <code>api::options::MonomialOrdering</code></p>

```rust signature
pub enum MonomialOrdering
```

</details>

#### MonomialOrdering.DegreeLexicographic

<a id="entry-presentation_rust_api_monomialordering_degreelexicographic"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_degreelexicographic.bea681905252"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering variant</p>

```rust signature
DegreeLexicographic,
```

Degree-lexicographic ordering.

#### MonomialOrdering.DegreeReverseLexicographic

<a id="entry-presentation_rust_api_monomialordering_degreereverselexicographic"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_degreereverselexicographic.2c8f91130c10"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering variant</p>

```rust signature
DegreeReverseLexicographic,
```

Degree-reverse-lexicographic ordering.

#### MonomialOrdering.Lexicographic

<a id="entry-presentation_rust_api_monomialordering_lexicographic"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_lexicographic.88f77b3d2878"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering variant</p>

```rust signature
Lexicographic,
```

Lexicographic ordering.

#### MonomialOrdering.from_name

<a id="entry-presentation_rust_api_monomialordering_from_name"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_from_name.2ef0b3c4fa69"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Resolves a stable monomial-order spelling, including documented aliases.

#### MonomialOrdering.into_core

<a id="entry-presentation_rust_api_monomialordering_into_core"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_into_core.3fd1df78cd24"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering method</p>

```rust signature
pub fn into_core(
    self,
) -> crate::polynomial::monomial_order::MonomialOrder
```

Converts this binding-neutral value to the engine representation.

#### MonomialOrdering.name

<a id="entry-presentation_rust_api_monomialordering_name"></a>
<a id="placement-placement.rust.native_rust.api_options_monomialordering_name.b8d9abcd99e9"></a>
<p class="symi-entry-owner">api::options::MonomialOrdering method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable binding spelling of this monomial ordering.

### PiecewiseBranch

<a id="entry-presentation_rust_api_piecewisebranch"></a>
<a id="placement-placement.rust.native_rust.api_piecewisebranch.3ed16cef07a7"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use results::PiecewiseBranch;
```

One condition and value pair of a piecewise expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_results_piecewisebranch.68c16bec8834"></a>
<p class="symi-entry-owner">Type: <code>api::results::PiecewiseBranch</code></p>

```rust signature
pub struct PiecewiseBranch
```

</details>

#### PiecewiseBranch.condition

<a id="entry-presentation_rust_api_piecewisebranch_condition"></a>
<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_condition.f8212f6466a1"></a>
<p class="symi-entry-owner">api::results::PiecewiseBranch method</p>

```rust signature
pub fn condition(&self) -> Expression
```

The condition guarding this branch.

#### PiecewiseBranch.new

<a id="entry-presentation_rust_api_piecewisebranch_new"></a>
<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_new.bebdb94e35ae"></a>
<p class="symi-entry-owner">api::results::PiecewiseBranch method</p>

```rust signature
pub fn new(condition: &Expression, value: &Expression) -> Self
```

Construct a branch from its condition and value.

#### PiecewiseBranch.value

<a id="entry-presentation_rust_api_piecewisebranch_value"></a>
<a id="placement-placement.rust.native_rust.api_results_piecewisebranch_value.ab78d16de436"></a>
<p class="symi-entry-owner">api::results::PiecewiseBranch method</p>

```rust signature
pub fn value(&self) -> Expression
```

The value taken when the condition holds.

