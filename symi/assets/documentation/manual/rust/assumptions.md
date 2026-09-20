# Assumptions

Assumptions are typed, canonical propositions over scalar expressions. They are
kept separately from the legacy per-symbol compatibility record, so compound
Boolean formulas and immutable local scopes do not lose information.

Queries are three-valued: `True` means entailed, `False` means refuted, and
`None` / `undefined` means that the bounded symbolic engine cannot decide.
`could_hold` is a possibility query and may return true when `ask` is unknown.

## Proposition builders

### real_assumption

<a id="entry-presentation_rust_api_session_real_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_real_assumption.1c05503eee13"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is real.

### rational_assumption

<a id="entry-presentation_rust_api_session_rational_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_rational_assumption.cbbabb28b642"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn rational_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is rational.

### integer_assumption

<a id="entry-presentation_rust_api_session_integer_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_integer_assumption.0d697ef1f764"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn integer_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an integer.

### natural_assumption

<a id="entry-presentation_rust_api_session_natural_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_natural_assumption.d227f91f3985"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn natural_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a natural number.

### positive_integer_assumption

<a id="entry-presentation_rust_api_session_positive_integer_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_integer_assumption.f468c46532cb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_integer_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a positive integer.

### positive_assumption

<a id="entry-presentation_rust_api_session_positive_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_assumption.06bbf0676276"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is strictly positive.

### negative_assumption

<a id="entry-presentation_rust_api_session_negative_assumption"></a>
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

<a id="entry-presentation_rust_api_session_nonzero_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_nonzero_assumption.b579ac6d26a4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonzero_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is nonzero.

### finite_assumption

<a id="entry-presentation_rust_api_session_finite_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_finite_assumption.7f7da1533ed4"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn finite_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is finite.

### complex_assumption

<a id="entry-presentation_rust_api_session_complex_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_complex_assumption.a6cd48090814"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a finite complex number.

### extended_real_assumption

<a id="entry-presentation_rust_api_session_extended_real_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_extended_real_assumption.b4f2201a83bc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn extended_real_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an extended real, including signed infinity.

### infinite_assumption

<a id="entry-presentation_rust_api_session_infinite_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_infinite_assumption.a244d6756057"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn infinite_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is one of the two signed infinities.

### irrational_assumption

<a id="entry-presentation_rust_api_session_irrational_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_irrational_assumption.c2305654ce2a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn irrational_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is real and not rational.

### zero_assumption

<a id="entry-presentation_rust_api_session_zero_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_zero_assumption.afe2528f469c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zero_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is exactly zero.

### even_assumption

<a id="entry-presentation_rust_api_session_even_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_even_assumption.b4db05c44681"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn even_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an even integer.

### odd_assumption

<a id="entry-presentation_rust_api_session_odd_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_odd_assumption.977c489b7afb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn odd_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is an odd integer.

### prime_assumption

<a id="entry-presentation_rust_api_session_prime_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_prime_assumption.dc28680e7639"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn prime_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a proven ordinary prime integer.

### composite_assumption

<a id="entry-presentation_rust_api_session_composite_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_composite_assumption.ed0b511955cc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn composite_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is a proven ordinary composite integer.

### algebraic_assumption

<a id="entry-presentation_rust_api_session_algebraic_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_algebraic_assumption.98fa9cf45109"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn algebraic_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is algebraic over the rationals.

### transcendental_assumption

<a id="entry-presentation_rust_api_session_transcendental_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_transcendental_assumption.d96b56aff4b9"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn transcendental_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression is transcendental over the rationals.

### defined_assumption

<a id="entry-presentation_rust_api_session_defined_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_defined_assumption.75a8340043f6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn defined_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Build a proposition asserting that an expression denotes one scalar value at the active point. Its negation asserts that the expression is undefined there; definedness alone authorizes no value, finiteness, realness, sign, continuity, or analyticity.

### equal_assumption

<a id="entry-presentation_rust_api_session_equal_assumption"></a>
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

### not_equal_assumption

<a id="entry-presentation_rust_api_session_not_equal_assumption"></a>
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

### less_assumption

<a id="entry-presentation_rust_api_session_less_assumption"></a>
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

<a id="entry-presentation_rust_api_session_less_or_equal_assumption"></a>
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

### greater_assumption

<a id="entry-presentation_rust_api_session_greater_assumption"></a>
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

<a id="entry-presentation_rust_api_session_greater_or_equal_assumption"></a>
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

### member_assumption

<a id="entry-presentation_rust_api_session_member_assumption"></a>
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

### congruent_assumption

<a id="entry-presentation_rust_api_session_congruent_assumption"></a>
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

### assumption_equal

<a id="entry-presentation_rust_api_session_assumption_equal"></a>
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

<a id="entry-presentation_rust_api_session_assumption_not_equal"></a>
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

<a id="entry-presentation_rust_api_session_assumption_less"></a>
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

<a id="entry-presentation_rust_api_session_assumption_less_or_equal"></a>
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

<a id="entry-presentation_rust_api_session_assumption_greater"></a>
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

<a id="entry-presentation_rust_api_session_assumption_greater_or_equal"></a>
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

<a id="entry-presentation_rust_api_session_assumption_member"></a>
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

<a id="entry-presentation_rust_api_session_assumption_congruent"></a>
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

<a id="entry-presentation_rust_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_proposition_from_logical_expression.e5a22d51578d"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_proposition_from_logical_expression(
    &self,
    logical_expression: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

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

<a id="entry-presentation_rust_api_assumptionproposition_and"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_and.a646cbcf74ec"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn and(
    &self,
    other: &AssumptionProposition,
) -> Result<AssumptionProposition, ApiError>
```

Conjoin this proposition with another proposition.

### or
Disjoin two propositions and return a canonical proposition.

<a id="entry-presentation_rust_api_assumptionproposition_or"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_or.a64023a35f84"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn or(
    &self,
    other: &AssumptionProposition,
) -> Result<AssumptionProposition, ApiError>
```

Disjoin this proposition with another proposition.

### not
Negate a proposition and return a canonical proposition.

<a id="entry-presentation_rust_api_assumptionproposition_not"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_not.a95545b014ac"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn not(&self) -> Result<AssumptionProposition, ApiError>
```

Negate this proposition in canonical negation-normal form.

### relation_kind
Return the canonical relation kind for a relation atom.

<a id="entry-presentation_rust_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_relation_kind.0b7b16f0d8d2"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn relation_kind(&self) -> Result<Option<&'static str>, ApiError>
```

Return the canonical relation kind when this proposition is one relation atom.

### left_operand
Return the left relation or congruence operand when present.

<a id="entry-presentation_rust_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_left_operand.56224dbdede6"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn left_operand(&self) -> Result<Option<Expression>, ApiError>
```

Return the left relation or congruence operand when present.

### right_operand
Return the right relation or congruence operand when present.

<a id="entry-presentation_rust_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_right_operand.cab23b9fa7f4"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn right_operand(&self) -> Result<Option<Expression>, ApiError>
```

Return the right relation or congruence operand when present.

### membership_element
Return the membership element when present.

<a id="entry-presentation_rust_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_membership_element.688b97d11757"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn membership_element(&self) -> Result<Option<Expression>, ApiError>
```

Return the membership element when this proposition is one membership atom.

### membership_set
Return the membership set expression when present.

<a id="entry-presentation_rust_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_membership_set.82a1e68f192b"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn membership_set(&self) -> Result<Option<Expression>, ApiError>
```

Return the membership set when this proposition is one membership atom.

### congruence_modulus
Return the congruence modulus when present.

<a id="entry-presentation_rust_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_congruence_modulus.dfd38ff01d08"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn congruence_modulus(&self) -> Result<Option<Expression>, ApiError>
```

Return the modulus when this proposition is one congruence atom.

### serialize
Serialize a proposition in the versioned canonical formula grammar.

<a id="entry-presentation_rust_api_assumptionproposition_serialize"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_serialize.cf01f5c79178"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn serialize(&self) -> Result<String, ApiError>
```

Serialize this proposition in the versioned canonical formula grammar.

### deserialize_assumption_proposition

<a id="entry-presentation_rust_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.rust.native_rust.api_session_deserialize_assumption_proposition.ac28804a17f6"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn deserialize_assumption_proposition(
    &self,
    text: &str,
) -> Result<AssumptionProposition, ApiError>
```

Parse a versioned canonical assumption proposition in the receiving context.

## Durable contexts and scopes

### add_assumptions

<a id="entry-presentation_rust_api_session_add_assumptions"></a>
<a id="placement-placement.rust.native_rust.api_session_add_assumptions.a9a3b94a273b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn add_assumptions(
    &self,
    proposition: &AssumptionProposition,
) -> Result<(), ApiError>
```

Atomically add a proposition to the durable assumption context. Contradictory
updates are rejected without changing the prior state.

### clear_all_assumptions

<a id="entry-presentation_rust_api_session_clear_all_assumptions"></a>
<a id="placement-placement.rust.native_rust.api_session_clear_all_assumptions.33ece12c035c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn clear_all_assumptions(&self) -> Result<(), ApiError>
```

Clear both durable formulas and legacy symbol assumptions.

### ask

<a id="entry-presentation_rust_api_session_ask"></a>
<a id="placement-placement.rust.native_rust.api_session_ask.7da7dd473768"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn ask(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_assumptionscope_ask.831821b8a41d"></a>
<p class="symi-entry-owner">Variant using local assumptions — api::AssumptionScope method: <code>api::AssumptionScope::ask</code></p>

```rust signature
pub fn ask(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

</details>

Return whether a proposition is entailed by the current durable context.

### could_hold

<a id="entry-presentation_rust_api_session_could_hold"></a>
<a id="placement-placement.rust.native_rust.api_session_could_hold.f688ca55aa32"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn could_hold(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_assumptionscope_could_hold.7f87c8670a7b"></a>
<p class="symi-entry-owner">Variant using local assumptions — api::AssumptionScope method: <code>api::AssumptionScope::could_hold</code></p>

```rust signature
pub fn could_hold(
    &self,
    proposition: &AssumptionProposition,
) -> Result<TruthValue, ApiError>
```

</details>

Return whether the current durable context is compatible with a proposition.

### assuming

<a id="entry-presentation_rust_api_session_assuming"></a>
<a id="placement-placement.rust.native_rust.api_session_assuming.627a0545e57b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assuming(
    &self,
    proposition: &AssumptionProposition,
) -> Result<AssumptionScope, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_assumptionscope_assuming.fa40680b748e"></a>
<p class="symi-entry-owner">Variant using local assumptions — api::AssumptionScope method: <code>api::AssumptionScope::assuming</code></p>

```rust signature
pub fn assuming(
    &self,
    proposition: &AssumptionProposition,
) -> Result<AssumptionScope, ApiError>
```

</details>

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
unevaluated or declined result rather than guessing a branch. Each of those
operations is documented with its subject — `integrate` on
[Calculus](calculus.md#integrate), for instance — as an explicitly labelled
variant that runs under local assumptions, not as an alias of the durable form.

### refine

<a id="entry-presentation_rust_api_session_refine"></a>
<a id="placement-placement.rust.native_rust.api_session_refine.18eaf6ab52db"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn refine(
    &self,
    target: &Expression,
    assumptions: Option<&AssumptionProposition>,
) -> Result<Expression, ApiError>
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.rust.native_rust.api_expression_refine.fba174f6ee2b"></a>
<p class="symi-entry-owner">api::Expression method: <code>api::Expression::refine</code></p>

```rust signature
pub fn refine(
    &self,
    assumptions: Option<&AssumptionProposition>,
) -> Result<Expression, ApiError>
```

<a id="placement-placement.rust.native_rust.api_assumptionscope_refine.f5d360a10caa"></a>
<p class="symi-entry-owner">Variant using local assumptions — api::AssumptionScope method: <code>api::AssumptionScope::refine</code></p>

```rust signature
pub fn refine(
    &self,
    target: &Expression,
) -> Result<Expression, ApiError>
```

</details>

Simplify an expression using durable assumptions or one checked local proposition.

## Additional API

### algebraic

<a id="entry-presentation_rust_api_session_algebraic"></a>
<a id="placement-placement.rust.native_rust.api_session_algebraic.690bf727c8f0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn algebraic(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an algebraicity proposition for a scalar expression.

### all_assumptions

<a id="entry-presentation_rust_api_session_all_assumptions"></a>
<a id="placement-placement.rust.native_rust.api_session_all_assumptions.bbcfdc6cd0a2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn all_assumptions(&self) -> Result<AssumptionReport, ApiError>
```

Return the lossless durable assumption report.

### assumption_report_of

<a id="entry-presentation_rust_api_session_assumption_report_of"></a>
<a id="placement-placement.rust.native_rust.api_session_assumption_report_of.d061fc78809b"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn assumption_report_of<'a, VariableType>(
    &self,
    variable: VariableType,
) -> Result<AssumptionReport, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```

Return the durable assumption report while validating a scalar subject.

### complex

<a id="entry-presentation_rust_api_session_complex"></a>
<a id="placement-placement.rust.native_rust.api_session_complex.102c7307d2ec"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn complex(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a finite-complex proposition for a scalar expression.

### composite

<a id="entry-presentation_rust_api_session_composite"></a>
<a id="placement-placement.rust.native_rust.api_session_composite.0831fb64ec85"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn composite(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a compositeness proposition for a scalar expression.

### declared_symbol

<a id="entry-presentation_rust_api_session_declared_symbol"></a>
<a id="placement-placement.rust.native_rust.api_session_declared_symbol.88abf51b0332"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn declared_symbol(
    &self,
    name: &str,
    declaration: SymbolDeclaration,
) -> Result<Expression, ApiError>
```

The scalar domain and sign facts a binding may declare when interning a symbol.

### defined

<a id="entry-presentation_rust_api_session_defined"></a>
<a id="placement-placement.rust.native_rust.api_session_defined.036eb495a286"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn defined(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a pointwise definedness proposition for a scalar expression.

### even

<a id="entry-presentation_rust_api_session_even"></a>
<a id="placement-placement.rust.native_rust.api_session_even.9a4b6941f438"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn even(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an evenness proposition for a scalar expression.

### extended_real

<a id="entry-presentation_rust_api_session_extended_real"></a>
<a id="placement-placement.rust.native_rust.api_session_extended_real.1e55ef22238a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn extended_real(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an extended-real proposition for a scalar expression.

### finite

<a id="entry-presentation_rust_api_session_finite"></a>
<a id="placement-placement.rust.native_rust.api_session_finite.eba9c4f1eba0"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn finite(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a finiteness proposition for a scalar expression.

### infinite

<a id="entry-presentation_rust_api_session_infinite"></a>
<a id="placement-placement.rust.native_rust.api_session_infinite.edea6c51e960"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn infinite(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an infinity proposition for a scalar expression.

### irrational

<a id="entry-presentation_rust_api_session_irrational"></a>
<a id="placement-placement.rust.native_rust.api_session_irrational.8345b308ac1c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn irrational(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an irrationality proposition for a scalar expression.

### logical_assumption_and

<a id="entry-presentation_rust_api_session_logical_assumption_and"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_assumption_and.e04edbc81167"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_assumption_and<I>(
    &self,
    propositions: I,
) -> Result<AssumptionProposition, ApiError>
where
    I: IntoIterator<Item = AssumptionProposition>,
```

Combine propositions with canonical conjunction.

### logical_assumption_not

<a id="entry-presentation_rust_api_session_logical_assumption_not"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_assumption_not.e7a57d8579eb"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_assumption_not(
    &self,
    proposition: &AssumptionProposition,
) -> Result<AssumptionProposition, ApiError>
```

Negate a proposition in canonical negation-normal form.

### logical_assumption_or

<a id="entry-presentation_rust_api_session_logical_assumption_or"></a>
<a id="placement-placement.rust.native_rust.api_session_logical_assumption_or.28be28d5c6b7"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn logical_assumption_or<I>(
    &self,
    propositions: I,
) -> Result<AssumptionProposition, ApiError>
where
    I: IntoIterator<Item = AssumptionProposition>,
```

Combine propositions with canonical disjunction.

### matrix_assumption

<a id="entry-presentation_rust_api_session_matrix_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_matrix_assumption.511d2c170c4c"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn matrix_assumption(
    &self,
    subject: &Matrix,
    predicate: MatrixPredicate,
) -> Result<AssumptionProposition, ApiError>
```

Builds the proposition asserting a named matrix predicate of a matrix subject.

### natural

<a id="entry-presentation_rust_api_session_natural"></a>
<a id="placement-placement.rust.native_rust.api_session_natural.724f305cdb42"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn natural(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a natural-number proposition for a scalar expression.

### negative

<a id="entry-presentation_rust_api_session_negative"></a>
<a id="placement-placement.rust.native_rust.api_session_negative.1965e32857a3"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn negative(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a strict-negativity proposition for a scalar expression.

### nonnegative

<a id="entry-presentation_rust_api_session_nonnegative"></a>
<a id="placement-placement.rust.native_rust.api_session_nonnegative.ed38f3760ae8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonnegative(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a universe-guarded nonnegative proposition for a scalar expression.

### nonnegative_assumption

<a id="entry-presentation_rust_api_session_nonnegative_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_nonnegative_assumption.3a54bd90ec6e"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonnegative_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Constructs the nonnegative_assumption proposition for a scalar expression.

### nonpositive

<a id="entry-presentation_rust_api_session_nonpositive"></a>
<a id="placement-placement.rust.native_rust.api_session_nonpositive.dcfee4a791c2"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonpositive(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a universe-guarded nonpositive proposition for a scalar expression.

### nonpositive_assumption

<a id="entry-presentation_rust_api_session_nonpositive_assumption"></a>
<a id="placement-placement.rust.native_rust.api_session_nonpositive_assumption.e2b4f0332782"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonpositive_assumption(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Constructs the nonpositive_assumption proposition for a scalar expression.

### nonzero

<a id="entry-presentation_rust_api_session_nonzero"></a>
<a id="placement-placement.rust.native_rust.api_session_nonzero.4af60b679735"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn nonzero(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a nonzero proposition for a scalar expression.

### odd

<a id="entry-presentation_rust_api_session_odd"></a>
<a id="placement-placement.rust.native_rust.api_session_odd.026e44d816ab"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn odd(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct an oddness proposition for a scalar expression.

### positive

<a id="entry-presentation_rust_api_session_positive"></a>
<a id="placement-placement.rust.native_rust.api_session_positive.4da0298fa7ef"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a strict-positivity proposition for a scalar expression.

### positive_integer

<a id="entry-presentation_rust_api_session_positive_integer"></a>
<a id="placement-placement.rust.native_rust.api_session_positive_integer.b7dc1f4a9e7a"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn positive_integer(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a positive-integer proposition for a scalar expression.

### real

<a id="entry-presentation_rust_api_session_real"></a>
<a id="placement-placement.rust.native_rust.api_session_real.a9dfb6b509dc"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn real(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a realness proposition for a scalar expression.

### transcendental

<a id="entry-presentation_rust_api_session_transcendental"></a>
<a id="placement-placement.rust.native_rust.api_session_transcendental.d066b1b8a0c8"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn transcendental(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a transcendence proposition for a scalar expression.

### zero

<a id="entry-presentation_rust_api_session_zero"></a>
<a id="placement-placement.rust.native_rust.api_session_zero.712a12abe984"></a>
<p class="symi-entry-owner">api::Session method</p>

```rust signature
pub fn zero(
    &self,
    subject: &Expression,
) -> Result<AssumptionProposition, ApiError>
```

Construct a zero proposition for a scalar expression.

### AssumptionProposition

<a id="entry-presentation_rust_api_assumptionproposition"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition.b53dab90eba0"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct AssumptionProposition
```

A typed immutable assumption proposition owned by a session.

#### AssumptionProposition.generation

<a id="entry-presentation_rust_api_assumptionproposition_generation"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_generation.192022c49a50"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn generation(&self) -> u64
```

The session generation this object was created in.

#### AssumptionProposition.is_stale

<a id="entry-presentation_rust_api_assumptionproposition_is_stale"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_is_stale.bd3a61ecd160"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn is_stale(&self) -> bool
```

Whether this object predates its session's most recent reset.

#### AssumptionProposition.session

<a id="entry-presentation_rust_api_assumptionproposition_session"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_session.f8f1033ba167"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn session(&self) -> Session
```

The session that owns this object, for host adapters that carry the owner alongside it.

#### AssumptionProposition.stable_text

<a id="entry-presentation_rust_api_assumptionproposition_stable_text"></a>
<a id="placement-placement.rust.native_rust.api_assumptionproposition_stable_text.4dde784fab76"></a>
<p class="symi-entry-owner">api::AssumptionProposition method</p>

```rust signature
pub fn stable_text(&self) -> Result<String, ApiError>
```

Return the deterministic canonical formula spelling.

### AssumptionReport

<a id="entry-presentation_rust_api_assumptionreport"></a>
<a id="placement-placement.rust.native_rust.api_assumptionreport.42df4cf37a27"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::knowledge_base::AssumptionReport;
```

A deterministic report of the active durable assumption state.

### AssumptionScope

<a id="entry-presentation_rust_api_assumptionscope"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope.40ef4e50cf87"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub struct AssumptionScope
```

An immutable local assumption scope owned by a session.

#### AssumptionScope.assumptions

<a id="entry-presentation_rust_api_assumptionscope_assumptions"></a>
<a id="placement-placement.rust.native_rust.api_assumptionscope_assumptions.d531fb350c1b"></a>
<p class="symi-entry-owner">api::AssumptionScope method</p>

```rust signature
pub fn assumptions(&self) -> Result<AssumptionReport, ApiError>
```

Return the captured scope report as a canonical formula report.

### Quantifier

<a id="entry-presentation_rust_api_quantifier"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier.b446560d7208"></a>
<p class="symi-entry-owner">Type</p>

```rust signature
pub enum Quantifier
```

A quantifier binding one variable of a prenex formula.

#### Quantifier.Exists

<a id="entry-presentation_rust_api_quantifier_exists"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_exists.7d665d0bd1ac"></a>
<p class="symi-entry-owner">api::logic::Quantifier variant</p>

```rust signature
Exists,
```

The existential quantifier.

#### Quantifier.Forall

<a id="entry-presentation_rust_api_quantifier_forall"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_forall.80a8122de96b"></a>
<p class="symi-entry-owner">api::logic::Quantifier variant</p>

```rust signature
Forall,
```

The universal quantifier.

#### Quantifier.from_name

<a id="entry-presentation_rust_api_quantifier_from_name"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_from_name.bd74c063277e"></a>
<p class="symi-entry-owner">api::logic::Quantifier method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Resolve the stable spelling a binding passes across the boundary.

#### Quantifier.name

<a id="entry-presentation_rust_api_quantifier_name"></a>
<a id="placement-placement.rust.native_rust.api_logic_quantifier_name.313f614c038a"></a>
<p class="symi-entry-owner">api::logic::Quantifier method</p>

```rust signature
pub fn name(&self) -> &'static str
```

The stable spelling of this quantifier.

### TruthValue

<a id="entry-presentation_rust_api_truthvalue"></a>
<a id="placement-placement.rust.native_rust.api_truthvalue.7c11ba8cd4c3"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use crate::assumptions::TruthValue;
```

Re-exports the three-valued assumption verdict shared by every binding.

