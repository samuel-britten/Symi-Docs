# Assumptions

Assumptions are typed, canonical propositions over scalar expressions. They are
kept separately from the legacy per-symbol compatibility record, so compound
Boolean formulas and immutable local scopes do not lose information.

Queries are three-valued: `True` means entailed, `False` means refuted, and
`None` / `undefined` means that the bounded symbolic engine cannot decide.
`could_hold` is a possibility query and may return true when `ask` is unknown.

## Proposition builders

### real_assumption
Build a proposition asserting that an expression is real.

### rational_assumption
Build a proposition asserting that an expression is rational.

### integer_assumption
Build a proposition asserting that an expression is an integer.

### natural_assumption
Build a proposition asserting that an expression is a natural number.

### positive_integer_assumption
Build a proposition asserting that an expression is a positive integer.

### positive_assumption
Build a proposition asserting that an expression is strictly positive.

### negative_assumption
Build a proposition asserting that an expression is strictly negative.

### nonzero_assumption
Build a proposition asserting that an expression is nonzero.

### finite_assumption
Build a proposition asserting that an expression is finite.

### complex_assumption
Build a proposition asserting that an expression is a finite complex number.

### extended_real_assumption
Build a proposition asserting that an expression is an extended real, including signed infinity.

### infinite_assumption
Build a proposition asserting that an expression is one of the two signed infinities.

### irrational_assumption
Build a proposition asserting that an expression is real and not rational.

### zero_assumption
Build a proposition asserting that an expression is exactly zero.

### even_assumption
Build a proposition asserting that an expression is an even integer.

### odd_assumption
Build a proposition asserting that an expression is an odd integer.

### prime_assumption
Build a proposition asserting that an expression is a proven ordinary prime integer.

### composite_assumption
Build a proposition asserting that an expression is a proven ordinary composite integer.

### algebraic_assumption
Build a proposition asserting that an expression is algebraic over the rationals.

### transcendental_assumption
Build a proposition asserting that an expression is transcendental over the rationals.

### defined_assumption
Build a proposition asserting that an expression denotes one scalar value at the active point. Its negation asserts that the expression is undefined there; definedness alone authorizes no value, finiteness, realness, sign, continuity, or analyticity.

### equal_assumption
Build a defined scalar equality proposition.

### not_equal_assumption
Build a defined scalar disequality proposition.

### less_assumption
Build a strict extended-real order proposition.

### less_or_equal_assumption
Build a non-strict extended-real order proposition.

### greater_assumption
Build a strict extended-real order proposition by reversing its operands canonically.

### greater_or_equal_assumption
Build a non-strict extended-real order proposition by reversing its operands canonically.

### member_assumption
Build a scalar-membership proposition.

### congruent_assumption
Build an integer-congruence proposition with a positive integer modulus.

### assumption_equal

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_equal.8356dce71ec8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an equality proposition over two scalar expressions.

### assumption_not_equal

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_not_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_not_equal.850cd7bb7a53"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_not_equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a disequality proposition over two scalar expressions.

### assumption_less

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_less_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_less.e1acec56402d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_less(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a strict scalar-order proposition.

### assumption_less_or_equal

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_less_or_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_less_or_equal.aa03e6afddac"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_less_or_equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a non-strict scalar-order proposition.

### assumption_greater

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_greater_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_greater.818fcb3a3568"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_greater(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a strict scalar-order proposition with reversed operands.

### assumption_greater_or_equal

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_greater_or_equal_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_greater_or_equal.d9899d5c3742"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_greater_or_equal(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a non-strict scalar-order proposition with reversed operands.

### assumption_member

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_member_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_member.177fbf518516"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_member(
    &self,
    element: &Expression,
    set_expression: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a scalar-membership proposition.

### assumption_congruent

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_congruent_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_congruent.34dc28467225"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_congruent(
    &self,
    left: &Expression,
    right: &Expression,
    modulus: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an integer congruence proposition.

### assumption_proposition_from_logical_expression
Convert a supported Boolean relation expression into a typed assumption proposition.

## Matrix proposition builders

Matrix propositions use an immutable, context-owned snapshot of the matrix. They
return the same three-valued results as scalar assumptions and reject matrices
from another context or an earlier context generation. `matrix_shape` additionally
records the required dimensions in the canonical formula and serialization.

### matrix_shape
Build a proposition asserting that a matrix has the requested positive row and
column counts.

### square_matrix
Build a proposition asserting that a matrix is square.

### zero_matrix
Build a proposition asserting that every matrix entry is zero.

### identity_matrix
Build a proposition asserting that a matrix is an identity matrix.

### diagonal_matrix
Build a proposition asserting that a matrix is diagonal.

### upper_triangular_matrix
Build a proposition asserting that a matrix is upper triangular.

### lower_triangular_matrix
Build a proposition asserting that a matrix is lower triangular.

### symmetric_matrix
Build a proposition asserting that a matrix equals its transpose.

### hermitian_matrix
Build a proposition asserting that a matrix equals its conjugate transpose.

### orthogonal_matrix
Build a proposition asserting that a real square matrix is orthogonal.

### unitary_matrix
Build a proposition asserting that a square matrix is unitary.

### normal_matrix
Build a proposition asserting that a square matrix commutes with its conjugate transpose.

### full_rank_matrix
Build a proposition asserting that a matrix has full rank.

### invertible_matrix
Build a proposition asserting that a matrix is square and invertible.

### singular_matrix
Build a proposition asserting that a matrix is square and singular.

### integer_entries
Build a proposition asserting that every matrix entry is an integer.

### real_entries
Build a proposition asserting that every matrix entry is real.

### complex_entries
Build a proposition asserting that every matrix entry is a finite complex value.

### positive_definite_matrix
Build a proposition asserting that a matrix is positive definite under the
engine's exact Hermitian/real-domain convention.

### positive_semidefinite_matrix
Build a proposition asserting that a matrix is positive semidefinite under the
engine's exact Hermitian/real-domain convention.

## Scalar classification

`natural` includes zero. `positive` and `negative` include the matching signed infinity;
`zero` is finite zero, and `nonzero` includes non-real finite complex values and signed
infinities. `nonnegative` and `nonpositive` are universe-guarded extended-real propositions;
a bare negated sign does not establish either one. Prime and composite are not complements:
negative integers, zero, and one are neither.

Primality is exact and proof-producing. A probable-prime screening result is deliberately
unknown and is never exposed as a symbolic prime fact.

## Proposition objects

### assumption_proposition
An immutable, context-owned Boolean assumption formula.

### and
Conjoin two propositions and return a canonical proposition.

### or
Disjoin two propositions and return a canonical proposition.

### not
Negate a proposition and return a canonical proposition.

### relation_kind
Return the canonical relation kind for a relation atom.

### left_operand
Return the left relation or congruence operand when present.

### right_operand
Return the right relation or congruence operand when present.

### membership_element
Return the membership element when present.

### membership_set
Return the membership set expression when present.

### congruence_modulus
Return the congruence modulus when present.

### serialize
Serialize a proposition in the versioned canonical formula grammar.

### deserialize_assumption_proposition
Parse a versioned canonical assumption proposition in the receiving context.

## Durable contexts and scopes

### add_assumptions
Atomically add a proposition to the durable assumption context. Contradictory
updates are rejected without changing the prior state.

### clear_all_assumptions
Clear both durable formulas and legacy symbol assumptions.

### ask
Return whether a proposition is entailed by the current durable context.

### could_hold
Return whether the current durable context is compatible with a proposition.

### assuming
Create an immutable local scope by overlaying a proposition. The overlay does
not change the owning context.

### assumption_scope
An immutable local assumption scope. Its scope-aware operations—`simplify`,
`refine`, `integrate`, `integrate_definite`, `evaluate_limit`,
`taylor_series`, `laplace_transform`, `fourier_transform`, `singularities`,
and `continuous_domain`—execute through the captured assumptions without
mutating the owning context. Each one asks the same shared assumption session
that the durable entry points use, so a compound or relational fact reaches
them exactly as a per-symbol declaration does. If an assumption cannot be
checked for the requested operation, the operation keeps its ordinary
unevaluated or declined result rather than guessing a branch.

### refine
Simplify an expression using durable assumptions or one checked local proposition.

## Additional API

### add_assumptions

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_add_assumptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_add_assumptions.a9a3b94a273b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn add_assumptions(
    &self,
    proposition: &AssumptionProposition,
) -> Result<(), ApiError>
```

Atomically add a proposition to the durable assumption context. Contradictory updates are rejected without changing the prior state.

### algebraic_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_algebraic_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_algebraic_assumption.98fa9cf45109"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn algebraic_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is algebraic over the rationals.

### and

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_and_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_and.a646cbcf74ec"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn and(
    &self,
    other: &AssumptionProposition,
) -> Result<AssumptionProposition, ApiError>
```

Conjoin two propositions and return a canonical proposition.

### ask

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionscope_ask_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_ask.831821b8a41d"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn ask(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

Return whether a proposition is entailed by the current durable context.

### ask

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_ask_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_ask.7da7dd473768"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn ask(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

Return whether a proposition is entailed by the current durable context.

### assuming

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionscope_assuming_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_assuming.fa40680b748e"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn assuming(
    &self,
    proposition: &AssumptionProposition,
) -> Result<AssumptionScope, ApiError>
```

Create an immutable local scope by overlaying a proposition. The overlay does not change the owning context.

### assuming

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assuming_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assuming.627a0545e57b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assuming(
    &self,
    proposition: &AssumptionProposition,
) -> Result<AssumptionScope, ApiError>
```

Create an immutable local scope by overlaying a proposition. The overlay does not change the owning context.

### assumption_proposition_from_logical_expression

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_assumption_proposition_from_logical_expression_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_proposition_from_logical_expression.e5a22d51578d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_proposition_from_logical_expression(
    &self,
    logical_expression: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Convert a supported Boolean relation expression into a typed assumption proposition.

### clear_all_assumptions

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_clear_all_assumptions_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_clear_all_assumptions.33ece12c035c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn clear_all_assumptions(&self) -> Result<(), ApiError>
```

Clear both durable formulas and legacy symbol assumptions.

### complex_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_complex_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_complex_assumption.a6cd48090814"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a finite complex number.

### composite_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_composite_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_composite_assumption.ed0b511955cc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn composite_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a proven ordinary composite integer.

### congruence_modulus

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_congruence_modulus_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_congruence_modulus.dfd38ff01d08"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn congruence_modulus(&self) -> Result<Option<Expression>, ApiError>
```

Return the congruence modulus when present.

### congruent_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_congruent_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_congruent_assumption.7c4da7a97b40"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn congruent_assumption(
    &self,
    left: &Expression,
    right: &Expression,
    modulus: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build an integer-congruence proposition with a positive integer modulus.

### could_hold

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionscope_could_hold_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_could_hold.7f87c8670a7b"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn could_hold(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

Return whether the current durable context is compatible with a proposition.

### could_hold

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_could_hold_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_could_hold.f688ca55aa32"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn could_hold(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

Return whether the current durable context is compatible with a proposition.

### defined_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_defined_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_defined_assumption.75a8340043f6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn defined_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression denotes one scalar value at the active point. Its negation asserts that the expression is undefined there; definedness alone authorizes no value, finiteness, realness, sign, continuity, or analyticity.

### deserialize_assumption_proposition

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_deserialize_assumption_proposition_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_deserialize_assumption_proposition.ac28804a17f6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn deserialize_assumption_proposition(
    &self,
    text: &str,
) -> Result<AssumptionProposition, ApiError>
```

Parse a versioned canonical assumption proposition in the receiving context.

### equal_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_equal_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_equal_assumption.63da95d54bb9"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn equal_assumption(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a defined scalar equality proposition.

### even_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_even_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_even_assumption.b4db05c44681"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn even_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an even integer.

### extended_real_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_extended_real_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_extended_real_assumption.b4f2201a83bc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn extended_real_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an extended real, including signed infinity.

### finite_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_finite_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_finite_assumption.7f7da1533ed4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn finite_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is finite.

### greater_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_greater_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_greater_assumption.5b24d1b2c104"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn greater_assumption(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a strict extended-real order proposition by reversing its operands canonically.

### greater_or_equal_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_greater_or_equal_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_greater_or_equal_assumption.bfa0c187148b"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn greater_or_equal_assumption(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a non-strict extended-real order proposition by reversing its operands canonically.

### infinite_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_infinite_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_infinite_assumption.a244d6756057"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn infinite_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is one of the two signed infinities.

### integer_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_integer_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_assumption.0d697ef1f764"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an integer.

### irrational_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_irrational_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_irrational_assumption.c2305654ce2a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn irrational_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is real and not rational.

### left_operand

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_left_operand_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_left_operand.56224dbdede6"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn left_operand(&self) -> Result<Option<Expression>, ApiError>
```

Return the left relation or congruence operand when present.

### less_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_less_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_less_assumption.1b27012642fc"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn less_assumption(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a strict extended-real order proposition.

### less_or_equal_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_less_or_equal_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_less_or_equal_assumption.36c5cb65d679"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn less_or_equal_assumption(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a non-strict extended-real order proposition.

### member_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_member_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_member_assumption.ca1576390a61"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn member_assumption(
    &self,
    element: &Expression,
    set_expression: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a scalar-membership proposition.

### membership_element

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_membership_element_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_membership_element.688b97d11757"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn membership_element(&self) -> Result<Option<Expression>, ApiError>
```

Return the membership element when present.

### membership_set

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_membership_set_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_membership_set.82a1e68f192b"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn membership_set(&self) -> Result<Option<Expression>, ApiError>
```

Return the membership set expression when present.

### natural_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_natural_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_natural_assumption.d227f91f3985"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn natural_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a natural number.

### negative_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_negative_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_negative_assumption.e6a3a781bed5"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn negative_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is strictly negative.

### nonzero_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_nonzero_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_nonzero_assumption.b579ac6d26a4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonzero_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is nonzero.

### not

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_not_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_not.a95545b014ac"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn not(&self) -> Result<AssumptionProposition, ApiError>
```

Negate a proposition and return a canonical proposition.

### not_equal_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_defaults_session_not_equal_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_defaults_session_not_equal_assumption.aa99ee95b8a4"></a>
<p class="symi-entry-owner">api::defaults::Session method</p>

```rust signature
pub fn not_equal_assumption(
    &self,
    left: &Expression,
    right: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a defined scalar disequality proposition.

### odd_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_odd_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_odd_assumption.977c489b7afb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn odd_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an odd integer.

### or

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_or_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_or.a64023a35f84"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn or(
    &self,
    other: &AssumptionProposition,
) -> Result<AssumptionProposition, ApiError>
```

Disjoin two propositions and return a canonical proposition.

### positive_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_positive_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_assumption.06bbf0676276"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is strictly positive.

### positive_integer_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_positive_integer_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_integer_assumption.f468c46532cb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_integer_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a positive integer.

### prime_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_prime_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_prime_assumption.dc28680e7639"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn prime_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a proven ordinary prime integer.

### rational_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_rational_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_rational_assumption.cbbabb28b642"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is rational.

### real_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_real_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_real_assumption.1c05503eee13"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is real.

### refine

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionscope_refine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_refine.f5d360a10caa"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn refine(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

Simplify an expression using durable assumptions or one checked local proposition.

### refine

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_expression_refine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_expression_refine.fba174f6ee2b"></a>
<p class="symi-entry-owner">api::Expression method</p>

```rust signature
pub fn refine(
    &self,
    assumptions: Option<&AssumptionProposition>,
) -> Result<Expression, ApiError>
```

Simplify an expression using durable assumptions or one checked local proposition.

### refine

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_refine_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_refine.18eaf6ab52db"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn refine(
    &self,
    target: &Expression,
    assumptions: Option<&AssumptionProposition>,
) -> Result<Expression, ApiError>
```

Simplify an expression using durable assumptions or one checked local proposition.

### relation_kind

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_relation_kind_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_relation_kind.0b7b16f0d8d2"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn relation_kind(&self) -> Result<Option<&'static str>, ApiError>
```

Return the canonical relation kind for a relation atom.

### right_operand

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_right_operand_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_right_operand.cab23b9fa7f4"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn right_operand(&self) -> Result<Option<Expression>, ApiError>
```

Return the right relation or congruence operand when present.

### serialize

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_assumptionproposition_serialize_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_serialize.cf01f5c79178"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn serialize(&self) -> Result<String, ApiError>
```

Serialize a proposition in the versioned canonical formula grammar.

### transcendental_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_transcendental_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_transcendental_assumption.d96b56aff4b9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn transcendental_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is transcendental over the rationals.

### zero_assumption

<a id="entry-presentation_rust_assumptions_capability_rust_native_rust_api_session_zero_assumption_unnamed"></a>
<a id="placement-placement.rust.native_rust.api_session_zero_assumption.afe2528f469c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zero_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is exactly zero.

