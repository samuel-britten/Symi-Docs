# Assumptions

Assumptions are typed, canonical propositions over scalar expressions. They are
kept separately from the legacy per-symbol compatibility record, so compound
Boolean formulas and immutable local scopes do not lose information.

Queries are three-valued: `True` means entailed, `False` means refuted, and
`None` / `undefined` means that the bounded symbolic engine cannot decide.
`could_hold` is a possibility query and may return true when `ask` is unknown.

## Proposition builders

### real_assumption

<a id="placement-placement.python.python_class.context_real_assumption.5548ec725f23"></a>
`Context.real_assumption(subject)`

<a id="placement-placement.python.python_module.module_real_assumption.fc6de2b878b6"></a>
`symi.real_assumption(input_expression)`

Build a proposition asserting that an expression is real.

### rational_assumption

<a id="placement-placement.python.python_class.context_rational_assumption.c917db27f8ab"></a>
`Context.rational_assumption(subject)`

<a id="placement-placement.python.python_module.module_rational_assumption.260550d8ea71"></a>
`symi.rational_assumption(input_expression)`

Build a proposition asserting that an expression is rational.

### integer_assumption

<a id="placement-placement.python.python_class.context_integer_assumption.85a64395b991"></a>
`Context.integer_assumption(subject)`

<a id="placement-placement.python.python_module.module_integer_assumption.f185036b04c6"></a>
`symi.integer_assumption(input_expression)`

Build a proposition asserting that an expression is an integer.

### natural_assumption

<a id="placement-placement.python.python_class.context_natural_assumption.8a2217ce89fb"></a>
`Context.natural_assumption(subject)`

<a id="placement-placement.python.python_module.module_natural_assumption.c1a9825dc555"></a>
`symi.natural_assumption(input_expression)`

Build a proposition asserting that an expression is a natural number.

### positive_integer_assumption

<a id="placement-placement.python.python_class.context_positive_integer_assumption.b4f90bffcfa8"></a>
`Context.positive_integer_assumption(subject)`

<a id="placement-placement.python.python_module.module_positive_integer_assumption.e64875fe5bab"></a>
`symi.positive_integer_assumption(input_expression)`

Build a proposition asserting that an expression is a positive integer.

### positive_assumption

<a id="placement-placement.python.python_class.context_positive_assumption.e0bc55b6fd65"></a>
`Context.positive_assumption(subject)`

<a id="placement-placement.python.python_module.module_positive_assumption.74db6e80f453"></a>
`symi.positive_assumption(input_expression)`

Build a proposition asserting that an expression is strictly positive.

### negative_assumption

<a id="placement-placement.python.python_class.context_negative_assumption.ee80216da503"></a>
`Context.negative_assumption(subject)`

<a id="placement-placement.python.python_module.module_negative_assumption.c1ee3fb881dd"></a>
`symi.negative_assumption(input_expression)`

Build a proposition asserting that an expression is strictly negative.

### nonzero_assumption

<a id="placement-placement.python.python_class.context_nonzero_assumption.d99730d01532"></a>
`Context.nonzero_assumption(subject)`

<a id="placement-placement.python.python_module.module_nonzero_assumption.8b80885792a9"></a>
`symi.nonzero_assumption(input_expression)`

Build a proposition asserting that an expression is nonzero.

### finite_assumption

<a id="placement-placement.python.python_class.context_finite_assumption.81e9cb0c27c6"></a>
`Context.finite_assumption(subject)`

<a id="placement-placement.python.python_module.module_finite_assumption.ff3558f6b171"></a>
`symi.finite_assumption(input_expression)`

Build a proposition asserting that an expression is finite.

### complex_assumption

<a id="placement-placement.python.python_class.context_complex_assumption.83b9529b0377"></a>
`Context.complex_assumption(subject)`

<a id="placement-placement.python.python_module.module_complex_assumption.5e420f8c1172"></a>
`symi.complex_assumption(input_expression)`

Build a proposition asserting that an expression is a finite complex number.

### extended_real_assumption

<a id="placement-placement.python.python_class.context_extended_real_assumption.07eea67a7a45"></a>
`Context.extended_real_assumption(subject)`

<a id="placement-placement.python.python_module.module_extended_real_assumption.1e226df989bd"></a>
`symi.extended_real_assumption(input_expression)`

Build a proposition asserting that an expression is an extended real, including signed infinity.

### infinite_assumption

<a id="placement-placement.python.python_class.context_infinite_assumption.2d77e250a82b"></a>
`Context.infinite_assumption(subject)`

<a id="placement-placement.python.python_module.module_infinite_assumption.cbda15e8b727"></a>
`symi.infinite_assumption(input_expression)`

Build a proposition asserting that an expression is one of the two signed infinities.

### irrational_assumption

<a id="placement-placement.python.python_class.context_irrational_assumption.66f194e38ebe"></a>
`Context.irrational_assumption(subject)`

<a id="placement-placement.python.python_module.module_irrational_assumption.3e0ac49ac535"></a>
`symi.irrational_assumption(input_expression)`

Build a proposition asserting that an expression is real and not rational.

### zero_assumption

<a id="placement-placement.python.python_class.context_zero_assumption.2beb552c0ca5"></a>
`Context.zero_assumption(subject)`

<a id="placement-placement.python.python_module.module_zero_assumption.3f481767b689"></a>
`symi.zero_assumption(input_expression)`

Build a proposition asserting that an expression is exactly zero.

### even_assumption

<a id="placement-placement.python.python_class.context_even_assumption.12ea745ce233"></a>
`Context.even_assumption(subject)`

<a id="placement-placement.python.python_module.module_even_assumption.0344d2eb9537"></a>
`symi.even_assumption(input_expression)`

Build a proposition asserting that an expression is an even integer.

### odd_assumption

<a id="placement-placement.python.python_class.context_odd_assumption.d9cf44c4ac2d"></a>
`Context.odd_assumption(subject)`

<a id="placement-placement.python.python_module.module_odd_assumption.7248f3f6e827"></a>
`symi.odd_assumption(input_expression)`

Build a proposition asserting that an expression is an odd integer.

### prime_assumption

<a id="placement-placement.python.python_class.context_prime_assumption.86c9cf48fa82"></a>
`Context.prime_assumption(subject)`

<a id="placement-placement.python.python_module.module_prime_assumption.f13a223f22ed"></a>
`symi.prime_assumption(input_expression)`

Build a proposition asserting that an expression is a proven ordinary prime integer.

### composite_assumption

<a id="placement-placement.python.python_class.context_composite_assumption.aebcd0430cc3"></a>
`Context.composite_assumption(subject)`

<a id="placement-placement.python.python_module.module_composite_assumption.30dbacb9ae11"></a>
`symi.composite_assumption(input_expression)`

Build a proposition asserting that an expression is a proven ordinary composite integer.

### algebraic_assumption

<a id="placement-placement.python.python_class.context_algebraic_assumption.6668f28bbcab"></a>
`Context.algebraic_assumption(subject)`

<a id="placement-placement.python.python_module.module_algebraic_assumption.3e42ce87f0c8"></a>
`symi.algebraic_assumption(input_expression)`

Build a proposition asserting that an expression is algebraic over the rationals.

### transcendental_assumption

<a id="placement-placement.python.python_class.context_transcendental_assumption.f04ad245af9e"></a>
`Context.transcendental_assumption(subject)`

<a id="placement-placement.python.python_module.module_transcendental_assumption.f93ee0ffe954"></a>
`symi.transcendental_assumption(input_expression)`

Build a proposition asserting that an expression is transcendental over the rationals.

### defined_assumption

<a id="placement-placement.python.python_class.context_defined_assumption.11fa043594f7"></a>
`Context.defined_assumption(subject)`

<a id="placement-placement.python.python_module.module_defined_assumption.c4e03a95c53d"></a>
`symi.defined_assumption(input_expression)`

Build a proposition asserting that an expression denotes one scalar value at the active point. Its negation asserts that the expression is undefined there; definedness alone authorizes no value, finiteness, realness, sign, continuity, or analyticity.

### equal_assumption

<a id="placement-placement.python.python_class.context_equal_assumption.c01ebdd8014d"></a>
`Context.equal_assumption(left, right)`

<a id="placement-placement.python.python_module.module_equal_assumption.167e0c4b07ea"></a>
`symi.equal_assumption(left, right)`

Build a defined scalar equality proposition.

### not_equal_assumption

<a id="placement-placement.python.python_class.context_not_equal_assumption.2f875ce168e2"></a>
`Context.not_equal_assumption(left, right)`

<a id="placement-placement.python.python_module.module_not_equal_assumption.78a9f583401a"></a>
`symi.not_equal_assumption(left, right)`

Build a defined scalar disequality proposition.

### less_assumption

<a id="placement-placement.python.python_class.context_less_assumption.119dbf671dc9"></a>
`Context.less_assumption(left, right)`

<a id="placement-placement.python.python_module.module_less_assumption.dedb60ca39a9"></a>
`symi.less_assumption(left, right)`

Build a strict extended-real order proposition.

### less_or_equal_assumption

<a id="placement-placement.python.python_class.context_less_or_equal_assumption.ad44558346d3"></a>
`Context.less_or_equal_assumption(left, right)`

<a id="placement-placement.python.python_module.module_less_or_equal_assumption.e524819ec09a"></a>
`symi.less_or_equal_assumption(left, right)`

Build a non-strict extended-real order proposition.

### greater_assumption

<a id="placement-placement.python.python_class.context_greater_assumption.1cc4159f5617"></a>
`Context.greater_assumption(left, right)`

<a id="placement-placement.python.python_module.module_greater_assumption.1ba0f7d7ae7d"></a>
`symi.greater_assumption(left, right)`

Build a strict extended-real order proposition by reversing its operands canonically.

### greater_or_equal_assumption

<a id="placement-placement.python.python_class.context_greater_or_equal_assumption.3917a98caf90"></a>
`Context.greater_or_equal_assumption(left, right)`

<a id="placement-placement.python.python_module.module_greater_or_equal_assumption.26650392c272"></a>
`symi.greater_or_equal_assumption(left, right)`

Build a non-strict extended-real order proposition by reversing its operands canonically.

### member_assumption

<a id="placement-placement.python.python_class.context_member_assumption.70329535155f"></a>
`Context.member_assumption(element, set_expression)`

<a id="placement-placement.python.python_module.module_member_assumption.a60e8dee72bc"></a>
`symi.member_assumption(element, set_expression)`

Build a scalar-membership proposition.

### congruent_assumption

<a id="placement-placement.python.python_class.context_congruent_assumption.2b5d2841f8f7"></a>
`Context.congruent_assumption(left, right, modulus)`

<a id="placement-placement.python.python_module.module_congruent_assumption.c97dfd2fafe9"></a>
`symi.congruent_assumption(left, right, modulus)`

Build an integer-congruence proposition with a positive integer modulus.

### assumption_equal

*Not exposed by the Python bindings. Available as [`api::Session::assumption_equal`](/symi/rust/assumptions#assumption_equal) in Rust.*

Construct an equality proposition over two scalar expressions.

### assumption_not_equal

*Not exposed by the Python bindings. Available as [`api::Session::assumption_not_equal`](/symi/rust/assumptions#assumption_not_equal) in Rust.*

Construct a disequality proposition over two scalar expressions.

### assumption_less

*Not exposed by the Python bindings. Available as [`api::Session::assumption_less`](/symi/rust/assumptions#assumption_less) in Rust.*

Construct a strict scalar-order proposition.

### assumption_less_or_equal

*Not exposed by the Python bindings. Available as [`api::Session::assumption_less_or_equal`](/symi/rust/assumptions#assumption_less_or_equal) in Rust.*

Construct a non-strict scalar-order proposition.

### assumption_greater

*Not exposed by the Python bindings. Available as [`api::Session::assumption_greater`](/symi/rust/assumptions#assumption_greater) in Rust.*

Construct a strict scalar-order proposition with reversed operands.

### assumption_greater_or_equal

*Not exposed by the Python bindings. Available as [`api::Session::assumption_greater_or_equal`](/symi/rust/assumptions#assumption_greater_or_equal) in Rust.*

Construct a non-strict scalar-order proposition with reversed operands.

### assumption_member

*Not exposed by the Python bindings. Available as [`api::Session::assumption_member`](/symi/rust/assumptions#assumption_member) in Rust.*

Construct a scalar-membership proposition.

### assumption_congruent

*Not exposed by the Python bindings. Available as [`api::Session::assumption_congruent`](/symi/rust/assumptions#assumption_congruent) in Rust.*

Construct an integer congruence proposition.

### assumption_proposition_from_logical_expression

<a id="placement-placement.python.python_class.context_assumption_proposition_from_logical_expression.6bb099358e64"></a>
`Context.assumption_proposition_from_logical_expression(logical_expression)`

<a id="placement-placement.python.python_module.module_assumption_proposition_from_logical_expression.75701bde4184"></a>
`symi.assumption_proposition_from_logical_expression(logical_expression)`

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

<a id="placement-placement.python.python_class.assumptionproposition_and.6f0fb9535ca0"></a>
`AssumptionProposition.and(other)`

Conjoin two propositions and return a canonical proposition.

### or

<a id="placement-placement.python.python_class.assumptionproposition_or.de6031767101"></a>
`AssumptionProposition.or(other)`

Disjoin two propositions and return a canonical proposition.

### not

<a id="placement-placement.python.python_class.assumptionproposition_not.045676b20152"></a>
`AssumptionProposition.not()`

Negate a proposition and return a canonical proposition.

### relation_kind

<a id="placement-placement.python.python_class.assumptionproposition_relation_kind.f8984b08a241"></a>
`AssumptionProposition.relation_kind()`

<a id="placement-placement.python.python_module.module_relation_kind.632a4e37f4c7"></a>
`symi.relation_kind(proposition)`

Return the canonical relation kind for a relation atom.

### left_operand

<a id="placement-placement.python.python_class.assumptionproposition_left_operand.cee13cef016d"></a>
`AssumptionProposition.left_operand()`

<a id="placement-placement.python.python_module.module_left_operand.4e66dcfbd33f"></a>
`symi.left_operand(proposition)`

Return the left relation or congruence operand when present.

### right_operand

<a id="placement-placement.python.python_class.assumptionproposition_right_operand.bc39fbcb538e"></a>
`AssumptionProposition.right_operand()`

<a id="placement-placement.python.python_module.module_right_operand.a6ef7e813657"></a>
`symi.right_operand(proposition)`

Return the right relation or congruence operand when present.

### membership_element

<a id="placement-placement.python.python_class.assumptionproposition_membership_element.af61b3a44cd8"></a>
`AssumptionProposition.membership_element()`

<a id="placement-placement.python.python_module.module_membership_element.eefd24abb000"></a>
`symi.membership_element(proposition)`

Return the membership element when present.

### membership_set

<a id="placement-placement.python.python_class.assumptionproposition_membership_set.86537461a6a8"></a>
`AssumptionProposition.membership_set()`

<a id="placement-placement.python.python_module.module_membership_set.a1132ccbd58a"></a>
`symi.membership_set(proposition)`

Return the membership set expression when present.

### congruence_modulus

<a id="placement-placement.python.python_class.assumptionproposition_congruence_modulus.5c6a48aa27a2"></a>
`AssumptionProposition.congruence_modulus()`

<a id="placement-placement.python.python_module.module_congruence_modulus.0d5d260ad39c"></a>
`symi.congruence_modulus(proposition)`

Return the congruence modulus when present.

### serialize

<a id="placement-placement.python.python_class.assumptionproposition_serialize.4c8a55f22281"></a>
`AssumptionProposition.serialize()`

<a id="placement-placement.python.python_module.module_serialize.f5b62eedbe49"></a>
`symi.serialize(proposition)`

Serialize a proposition in the versioned canonical formula grammar.

### deserialize_assumption_proposition

<a id="placement-placement.python.python_class.context_deserialize_assumption_proposition.e74c9fe0297b"></a>
`Context.deserialize_assumption_proposition(text)`

<a id="placement-placement.python.python_module.module_deserialize_assumption_proposition.ef24a2ce4ba6"></a>
`symi.deserialize_assumption_proposition(text)`

Parse a versioned canonical assumption proposition in the receiving context.

## Durable contexts and scopes

### add_assumptions

<a id="placement-placement.python.python_class.context_add_assumptions.3c5c1e06a162"></a>
`Context.add_assumptions(proposition)`

<a id="placement-placement.python.python_module.module_add_assumptions.5534bc9705a0"></a>
`symi.add_assumptions(proposition)`

Atomically add a proposition to the durable assumption context. Contradictory
updates are rejected without changing the prior state.

### clear_all_assumptions

<a id="placement-placement.python.python_class.context_clear_all_assumptions.f74c63d49ce3"></a>
`Context.clear_all_assumptions()`

<a id="placement-placement.python.python_module.module_clear_all_assumptions.118de91197c2"></a>
`symi.clear_all_assumptions()`

Clear both durable formulas and legacy symbol assumptions.

### ask

<a id="placement-placement.python.python_class.assumptionscope_ask.8b509b1e4374"></a>
`AssumptionScope.ask(proposition)`

<a id="placement-placement.python.python_class.context_ask.5e7d1d8a46a1"></a>
`Context.ask(proposition)`

<a id="placement-placement.python.python_module.module_ask.46448bddac9d"></a>
`symi.ask(proposition)`

Return whether a proposition is entailed by the current durable context.

### could_hold

<a id="placement-placement.python.python_class.assumptionscope_could_hold.79ec09546b09"></a>
`AssumptionScope.could_hold(proposition)`

<a id="placement-placement.python.python_class.context_could_hold.e4f6b1a8f31f"></a>
`Context.could_hold(proposition)`

<a id="placement-placement.python.python_module.module_could_hold.7a7a59f32b15"></a>
`symi.could_hold(proposition)`

Return whether the current durable context is compatible with a proposition.

### assuming

<a id="placement-placement.python.python_class.assumptionscope_assuming.8472ace80b00"></a>
`AssumptionScope.assuming(proposition)`

<a id="placement-placement.python.python_class.context_assuming.428587b6ed47"></a>
`Context.assuming(proposition)`

<a id="placement-placement.python.python_module.module_assuming.d8dc7c25ca26"></a>
`symi.assuming(proposition)`

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

<a id="placement-placement.python.python_class.assumptionscope_refine.36067d324ccf"></a>
`AssumptionScope.refine(input_expression)`

<a id="placement-placement.python.python_class.context_refine.76378dcfe8ec"></a>
`Context.refine(input_expression, assumptions=None)`

<a id="placement-placement.python.python_class.expression_refine.ce9953b90828"></a>
`Expression.refine(assumptions=None)`

<a id="placement-placement.python.python_module.module_refine.071351212302"></a>
`symi.refine(input_expression, assumptions=None)`

Simplify an expression using durable assumptions or one checked local proposition.
