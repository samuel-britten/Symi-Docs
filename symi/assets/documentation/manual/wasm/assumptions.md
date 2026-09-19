# Assumptions

Assumptions are typed, canonical propositions over scalar expressions. They are
kept separately from the legacy per-symbol compatibility record, so compound
Boolean formulas and immutable local scopes do not lose information.

Queries are three-valued: `True` means entailed, `False` means refuted, and
`None` / `undefined` means that the bounded symbolic engine cannot decide.
`could_hold` is a possibility query and may return true when `ask` is unknown.

## Proposition builders

### real_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.real_assumption`](/symi/python/assumptions#real_assumption) in Python, [`UniffiSession.realAssumption`](/symi/kotlin/assumptions#real_assumption) in Kotlin, [`UniffiSession.realAssumption`](/symi/swift/assumptions#real_assumption) in Swift, [`api::Session::real_assumption`](/symi/rust/assumptions#real_assumption) in Rust.*

Build a proposition asserting that an expression is real.

### rational_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rational_assumption`](/symi/python/assumptions#rational_assumption) in Python, [`UniffiSession.rationalAssumption`](/symi/kotlin/assumptions#rational_assumption) in Kotlin, [`UniffiSession.rationalAssumption`](/symi/swift/assumptions#rational_assumption) in Swift, [`api::Session::rational_assumption`](/symi/rust/assumptions#rational_assumption) in Rust.*

Build a proposition asserting that an expression is rational.

### integer_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.integer_assumption`](/symi/python/assumptions#integer_assumption) in Python, [`UniffiSession.integerAssumption`](/symi/kotlin/assumptions#integer_assumption) in Kotlin, [`UniffiSession.integerAssumption`](/symi/swift/assumptions#integer_assumption) in Swift, [`api::Session::integer_assumption`](/symi/rust/assumptions#integer_assumption) in Rust.*

Build a proposition asserting that an expression is an integer.

### natural_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.natural_assumption`](/symi/python/assumptions#natural_assumption) in Python, [`UniffiSession.naturalAssumption`](/symi/kotlin/assumptions#natural_assumption) in Kotlin, [`UniffiSession.naturalAssumption`](/symi/swift/assumptions#natural_assumption) in Swift, [`api::Session::natural_assumption`](/symi/rust/assumptions#natural_assumption) in Rust.*

Build a proposition asserting that an expression is a natural number.

### positive_integer_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.positive_integer_assumption`](/symi/python/assumptions#positive_integer_assumption) in Python, [`UniffiSession.positiveIntegerAssumption`](/symi/kotlin/assumptions#positive_integer_assumption) in Kotlin, [`UniffiSession.positiveIntegerAssumption`](/symi/swift/assumptions#positive_integer_assumption) in Swift, [`api::Session::positive_integer_assumption`](/symi/rust/assumptions#positive_integer_assumption) in Rust.*

Build a proposition asserting that an expression is a positive integer.

### positive_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.positive_assumption`](/symi/python/assumptions#positive_assumption) in Python, [`UniffiSession.positiveAssumption`](/symi/kotlin/assumptions#positive_assumption) in Kotlin, [`UniffiSession.positiveAssumption`](/symi/swift/assumptions#positive_assumption) in Swift, [`api::Session::positive_assumption`](/symi/rust/assumptions#positive_assumption) in Rust.*

Build a proposition asserting that an expression is strictly positive.

### negative_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.negative_assumption`](/symi/python/assumptions#negative_assumption) in Python, [`UniffiSession.negativeAssumption`](/symi/kotlin/assumptions#negative_assumption) in Kotlin, [`UniffiSession.negativeAssumption`](/symi/swift/assumptions#negative_assumption) in Swift, [`api::Session::negative_assumption`](/symi/rust/assumptions#negative_assumption) in Rust.*

Build a proposition asserting that an expression is strictly negative.

### nonzero_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.nonzero_assumption`](/symi/python/assumptions#nonzero_assumption) in Python, [`UniffiSession.nonzeroAssumption`](/symi/kotlin/assumptions#nonzero_assumption) in Kotlin, [`UniffiSession.nonzeroAssumption`](/symi/swift/assumptions#nonzero_assumption) in Swift, [`api::Session::nonzero_assumption`](/symi/rust/assumptions#nonzero_assumption) in Rust.*

Build a proposition asserting that an expression is nonzero.

### finite_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.finite_assumption`](/symi/python/assumptions#finite_assumption) in Python, [`UniffiSession.finiteAssumption`](/symi/kotlin/assumptions#finite_assumption) in Kotlin, [`UniffiSession.finiteAssumption`](/symi/swift/assumptions#finite_assumption) in Swift, [`api::Session::finite_assumption`](/symi/rust/assumptions#finite_assumption) in Rust.*

Build a proposition asserting that an expression is finite.

### complex_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.complex_assumption`](/symi/python/assumptions#complex_assumption) in Python, [`UniffiSession.complexAssumption`](/symi/kotlin/assumptions#complex_assumption) in Kotlin, [`UniffiSession.complexAssumption`](/symi/swift/assumptions#complex_assumption) in Swift, [`api::Session::complex_assumption`](/symi/rust/assumptions#complex_assumption) in Rust.*

Build a proposition asserting that an expression is a finite complex number.

### extended_real_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.extended_real_assumption`](/symi/python/assumptions#extended_real_assumption) in Python, [`UniffiSession.extendedRealAssumption`](/symi/kotlin/assumptions#extended_real_assumption) in Kotlin, [`UniffiSession.extendedRealAssumption`](/symi/swift/assumptions#extended_real_assumption) in Swift, [`api::Session::extended_real_assumption`](/symi/rust/assumptions#extended_real_assumption) in Rust.*

Build a proposition asserting that an expression is an extended real, including signed infinity.

### infinite_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.infinite_assumption`](/symi/python/assumptions#infinite_assumption) in Python, [`UniffiSession.infiniteAssumption`](/symi/kotlin/assumptions#infinite_assumption) in Kotlin, [`UniffiSession.infiniteAssumption`](/symi/swift/assumptions#infinite_assumption) in Swift, [`api::Session::infinite_assumption`](/symi/rust/assumptions#infinite_assumption) in Rust.*

Build a proposition asserting that an expression is one of the two signed infinities.

### irrational_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.irrational_assumption`](/symi/python/assumptions#irrational_assumption) in Python, [`UniffiSession.irrationalAssumption`](/symi/kotlin/assumptions#irrational_assumption) in Kotlin, [`UniffiSession.irrationalAssumption`](/symi/swift/assumptions#irrational_assumption) in Swift, [`api::Session::irrational_assumption`](/symi/rust/assumptions#irrational_assumption) in Rust.*

Build a proposition asserting that an expression is real and not rational.

### zero_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.zero_assumption`](/symi/python/assumptions#zero_assumption) in Python, [`UniffiSession.zeroAssumption`](/symi/kotlin/assumptions#zero_assumption) in Kotlin, [`UniffiSession.zeroAssumption`](/symi/swift/assumptions#zero_assumption) in Swift, [`api::Session::zero_assumption`](/symi/rust/assumptions#zero_assumption) in Rust.*

Build a proposition asserting that an expression is exactly zero.

### even_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.even_assumption`](/symi/python/assumptions#even_assumption) in Python, [`UniffiSession.evenAssumption`](/symi/kotlin/assumptions#even_assumption) in Kotlin, [`UniffiSession.evenAssumption`](/symi/swift/assumptions#even_assumption) in Swift, [`api::Session::even_assumption`](/symi/rust/assumptions#even_assumption) in Rust.*

Build a proposition asserting that an expression is an even integer.

### odd_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.odd_assumption`](/symi/python/assumptions#odd_assumption) in Python, [`UniffiSession.oddAssumption`](/symi/kotlin/assumptions#odd_assumption) in Kotlin, [`UniffiSession.oddAssumption`](/symi/swift/assumptions#odd_assumption) in Swift, [`api::Session::odd_assumption`](/symi/rust/assumptions#odd_assumption) in Rust.*

Build a proposition asserting that an expression is an odd integer.

### prime_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.prime_assumption`](/symi/python/assumptions#prime_assumption) in Python, [`UniffiSession.primeAssumption`](/symi/kotlin/assumptions#prime_assumption) in Kotlin, [`UniffiSession.primeAssumption`](/symi/swift/assumptions#prime_assumption) in Swift, [`api::Session::prime_assumption`](/symi/rust/assumptions#prime_assumption) in Rust.*

Build a proposition asserting that an expression is a proven ordinary prime integer.

### composite_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.composite_assumption`](/symi/python/assumptions#composite_assumption) in Python, [`UniffiSession.compositeAssumption`](/symi/kotlin/assumptions#composite_assumption) in Kotlin, [`UniffiSession.compositeAssumption`](/symi/swift/assumptions#composite_assumption) in Swift, [`api::Session::composite_assumption`](/symi/rust/assumptions#composite_assumption) in Rust.*

Build a proposition asserting that an expression is a proven ordinary composite integer.

### algebraic_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.algebraic_assumption`](/symi/python/assumptions#algebraic_assumption) in Python, [`UniffiSession.algebraicAssumption`](/symi/kotlin/assumptions#algebraic_assumption) in Kotlin, [`UniffiSession.algebraicAssumption`](/symi/swift/assumptions#algebraic_assumption) in Swift, [`api::Session::algebraic_assumption`](/symi/rust/assumptions#algebraic_assumption) in Rust.*

Build a proposition asserting that an expression is algebraic over the rationals.

### transcendental_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.transcendental_assumption`](/symi/python/assumptions#transcendental_assumption) in Python, [`UniffiSession.transcendentalAssumption`](/symi/kotlin/assumptions#transcendental_assumption) in Kotlin, [`UniffiSession.transcendentalAssumption`](/symi/swift/assumptions#transcendental_assumption) in Swift, [`api::Session::transcendental_assumption`](/symi/rust/assumptions#transcendental_assumption) in Rust.*

Build a proposition asserting that an expression is transcendental over the rationals.

### defined_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.defined_assumption`](/symi/python/assumptions#defined_assumption) in Python, [`UniffiSession.definedAssumption`](/symi/kotlin/assumptions#defined_assumption) in Kotlin, [`UniffiSession.definedAssumption`](/symi/swift/assumptions#defined_assumption) in Swift, [`api::Session::defined_assumption`](/symi/rust/assumptions#defined_assumption) in Rust.*

Build a proposition asserting that an expression denotes one scalar value at the active point. Its negation asserts that the expression is undefined there; definedness alone authorizes no value, finiteness, realness, sign, continuity, or analyticity.

### equal_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.equal_assumption`](/symi/python/assumptions#equal_assumption) in Python, [`UniffiSession.equalAssumption`](/symi/kotlin/assumptions#equal_assumption) in Kotlin, [`UniffiSession.equalAssumption`](/symi/swift/assumptions#equal_assumption) in Swift, [`api::defaults::Session::equal_assumption`](/symi/rust/assumptions#equal_assumption) in Rust.*

Build a defined scalar equality proposition.

### not_equal_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.not_equal_assumption`](/symi/python/assumptions#not_equal_assumption) in Python, [`UniffiSession.notEqualAssumption`](/symi/kotlin/assumptions#not_equal_assumption) in Kotlin, [`UniffiSession.notEqualAssumption`](/symi/swift/assumptions#not_equal_assumption) in Swift, [`api::defaults::Session::not_equal_assumption`](/symi/rust/assumptions#not_equal_assumption) in Rust.*

Build a defined scalar disequality proposition.

### less_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.less_assumption`](/symi/python/assumptions#less_assumption) in Python, [`UniffiSession.lessAssumption`](/symi/kotlin/assumptions#less_assumption) in Kotlin, [`UniffiSession.lessAssumption`](/symi/swift/assumptions#less_assumption) in Swift, [`api::defaults::Session::less_assumption`](/symi/rust/assumptions#less_assumption) in Rust.*

Build a strict extended-real order proposition.

### less_or_equal_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.less_or_equal_assumption`](/symi/python/assumptions#less_or_equal_assumption) in Python, [`UniffiSession.lessOrEqualAssumption`](/symi/kotlin/assumptions#less_or_equal_assumption) in Kotlin, [`UniffiSession.lessOrEqualAssumption`](/symi/swift/assumptions#less_or_equal_assumption) in Swift, [`api::defaults::Session::less_or_equal_assumption`](/symi/rust/assumptions#less_or_equal_assumption) in Rust.*

Build a non-strict extended-real order proposition.

### greater_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.greater_assumption`](/symi/python/assumptions#greater_assumption) in Python, [`UniffiSession.greaterAssumption`](/symi/kotlin/assumptions#greater_assumption) in Kotlin, [`UniffiSession.greaterAssumption`](/symi/swift/assumptions#greater_assumption) in Swift, [`api::defaults::Session::greater_assumption`](/symi/rust/assumptions#greater_assumption) in Rust.*

Build a strict extended-real order proposition by reversing its operands canonically.

### greater_or_equal_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.greater_or_equal_assumption`](/symi/python/assumptions#greater_or_equal_assumption) in Python, [`UniffiSession.greaterOrEqualAssumption`](/symi/kotlin/assumptions#greater_or_equal_assumption) in Kotlin, [`UniffiSession.greaterOrEqualAssumption`](/symi/swift/assumptions#greater_or_equal_assumption) in Swift, [`api::defaults::Session::greater_or_equal_assumption`](/symi/rust/assumptions#greater_or_equal_assumption) in Rust.*

Build a non-strict extended-real order proposition by reversing its operands canonically.

### member_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.member_assumption`](/symi/python/assumptions#member_assumption) in Python, [`UniffiSession.memberAssumption`](/symi/kotlin/assumptions#member_assumption) in Kotlin, [`UniffiSession.memberAssumption`](/symi/swift/assumptions#member_assumption) in Swift, [`api::defaults::Session::member_assumption`](/symi/rust/assumptions#member_assumption) in Rust.*

Build a scalar-membership proposition.

### congruent_assumption

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.congruent_assumption`](/symi/python/assumptions#congruent_assumption) in Python, [`UniffiSession.congruentAssumption`](/symi/kotlin/assumptions#congruent_assumption) in Kotlin, [`UniffiSession.congruentAssumption`](/symi/swift/assumptions#congruent_assumption) in Swift, [`api::defaults::Session::congruent_assumption`](/symi/rust/assumptions#congruent_assumption) in Rust.*

Build an integer-congruence proposition with a positive integer modulus.

### assumption_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_equal`](/symi/rust/assumptions#assumption_equal) in Rust.*

Construct an equality proposition over two scalar expressions.

### assumption_not_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_not_equal`](/symi/rust/assumptions#assumption_not_equal) in Rust.*

Construct a disequality proposition over two scalar expressions.

### assumption_less

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_less`](/symi/rust/assumptions#assumption_less) in Rust.*

Construct a strict scalar-order proposition.

### assumption_less_or_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_less_or_equal`](/symi/rust/assumptions#assumption_less_or_equal) in Rust.*

Construct a non-strict scalar-order proposition.

### assumption_greater

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_greater`](/symi/rust/assumptions#assumption_greater) in Rust.*

Construct a strict scalar-order proposition with reversed operands.

### assumption_greater_or_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_greater_or_equal`](/symi/rust/assumptions#assumption_greater_or_equal) in Rust.*

Construct a non-strict scalar-order proposition with reversed operands.

### assumption_member

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_member`](/symi/rust/assumptions#assumption_member) in Rust.*

Construct a scalar-membership proposition.

### assumption_congruent

*Not exposed by the WASM / JavaScript bindings. Available as [`api::Session::assumption_congruent`](/symi/rust/assumptions#assumption_congruent) in Rust.*

Construct an integer congruence proposition.

### assumption_proposition_from_logical_expression

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.assumption_proposition_from_logical_expression`](/symi/python/assumptions#assumption_proposition_from_logical_expression) in Python, [`UniffiSession.assumptionPropositionFromLogicalExpression`](/symi/kotlin/assumptions#assumption_proposition_from_logical_expression) in Kotlin, [`UniffiSession.assumptionPropositionFromLogicalExpression`](/symi/swift/assumptions#assumption_proposition_from_logical_expression) in Swift, [`api::Session::assumption_proposition_from_logical_expression`](/symi/rust/assumptions#assumption_proposition_from_logical_expression) in Rust.*

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

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionProposition.relation_kind`](/symi/python/assumptions#relation_kind) in Python, [`UniffiAssumptionProposition.relationKind`](/symi/kotlin/assumptions#relation_kind) in Kotlin, [`UniffiAssumptionProposition.relationKind`](/symi/swift/assumptions#relation_kind) in Swift, [`api::AssumptionProposition::relation_kind`](/symi/rust/assumptions#relation_kind) in Rust.*

Return the canonical relation kind for a relation atom.

### left_operand

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionProposition.left_operand`](/symi/python/assumptions#left_operand) in Python, [`UniffiAssumptionProposition.leftOperand`](/symi/kotlin/assumptions#left_operand) in Kotlin, [`UniffiAssumptionProposition.leftOperand`](/symi/swift/assumptions#left_operand) in Swift, [`api::AssumptionProposition::left_operand`](/symi/rust/assumptions#left_operand) in Rust.*

Return the left relation or congruence operand when present.

### right_operand

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionProposition.right_operand`](/symi/python/assumptions#right_operand) in Python, [`UniffiAssumptionProposition.rightOperand`](/symi/kotlin/assumptions#right_operand) in Kotlin, [`UniffiAssumptionProposition.rightOperand`](/symi/swift/assumptions#right_operand) in Swift, [`api::AssumptionProposition::right_operand`](/symi/rust/assumptions#right_operand) in Rust.*

Return the right relation or congruence operand when present.

### membership_element

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionProposition.membership_element`](/symi/python/assumptions#membership_element) in Python, [`UniffiAssumptionProposition.membershipElement`](/symi/kotlin/assumptions#membership_element) in Kotlin, [`UniffiAssumptionProposition.membershipElement`](/symi/swift/assumptions#membership_element) in Swift, [`api::AssumptionProposition::membership_element`](/symi/rust/assumptions#membership_element) in Rust.*

Return the membership element when present.

### membership_set

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionProposition.membership_set`](/symi/python/assumptions#membership_set) in Python, [`UniffiAssumptionProposition.membershipSet`](/symi/kotlin/assumptions#membership_set) in Kotlin, [`UniffiAssumptionProposition.membershipSet`](/symi/swift/assumptions#membership_set) in Swift, [`api::AssumptionProposition::membership_set`](/symi/rust/assumptions#membership_set) in Rust.*

Return the membership set expression when present.

### congruence_modulus

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionProposition.congruence_modulus`](/symi/python/assumptions#congruence_modulus) in Python, [`UniffiAssumptionProposition.congruenceModulus`](/symi/kotlin/assumptions#congruence_modulus) in Kotlin, [`UniffiAssumptionProposition.congruenceModulus`](/symi/swift/assumptions#congruence_modulus) in Swift, [`api::AssumptionProposition::congruence_modulus`](/symi/rust/assumptions#congruence_modulus) in Rust.*

Return the congruence modulus when present.

### serialize
Serialize a proposition in the versioned canonical formula grammar.

### deserialize_assumption_proposition

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.deserialize_assumption_proposition`](/symi/python/assumptions#deserialize_assumption_proposition) in Python, [`UniffiSession.deserializeAssumptionProposition`](/symi/kotlin/assumptions#deserialize_assumption_proposition) in Kotlin, [`UniffiSession.deserializeAssumptionProposition`](/symi/swift/assumptions#deserialize_assumption_proposition) in Swift, [`api::Session::deserialize_assumption_proposition`](/symi/rust/assumptions#deserialize_assumption_proposition) in Rust.*

Parse a versioned canonical assumption proposition in the receiving context.

## Durable contexts and scopes

### add_assumptions

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.add_assumptions`](/symi/python/assumptions#add_assumptions) in Python, [`UniffiSession.addAssumptions`](/symi/kotlin/assumptions#add_assumptions) in Kotlin, [`UniffiSession.addAssumptions`](/symi/swift/assumptions#add_assumptions) in Swift, [`api::Session::add_assumptions`](/symi/rust/assumptions#add_assumptions) in Rust.*

Atomically add a proposition to the durable assumption context. Contradictory
updates are rejected without changing the prior state.

### clear_all_assumptions

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.clear_all_assumptions`](/symi/python/assumptions#clear_all_assumptions) in Python, [`UniffiSession.clearAllAssumptions`](/symi/kotlin/assumptions#clear_all_assumptions) in Kotlin, [`UniffiSession.clearAllAssumptions`](/symi/swift/assumptions#clear_all_assumptions) in Swift, [`api::Session::clear_all_assumptions`](/symi/rust/assumptions#clear_all_assumptions) in Rust.*

Clear both durable formulas and legacy symbol assumptions.

### ask
Return whether a proposition is entailed by the current durable context.

### could_hold

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionScope.could_hold`](/symi/python/assumptions#could_hold) in Python, [`UniffiAssumptionScope.couldHold`](/symi/kotlin/assumptions#could_hold) in Kotlin, [`UniffiAssumptionScope.couldHold`](/symi/swift/assumptions#could_hold) in Swift, [`api::AssumptionScope::could_hold`](/symi/rust/assumptions#could_hold) in Rust.*

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

### and

<a id="entry-presentation_wasm_assumptions_capability_algebra_and_api_assumptionproposition_and"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_and.dd2edebafd49"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
and(other: AssumptionProposition): AssumptionProposition
```

Conjoin two propositions.

### and

<a id="entry-presentation_wasm_assumptions_capability_contexts_and_api_assumptionproposition_and"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_and.52d50e36a4e0"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
and(other: AssumptionProposition): AssumptionProposition
```

Conjoin two propositions.

### ask

<a id="entry-presentation_wasm_assumptions_capability_algebra_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_ask.39f17daa4a26"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

Ask a proposition against the immutable scope snapshot.

### ask

<a id="entry-presentation_wasm_assumptions_capability_contexts_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_ask.49091dce105c"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

Ask a proposition against the immutable scope snapshot.

### ask

<a id="entry-presentation_wasm_assumptions_capability_contexts_ask_api_session_ask"></a>
<a id="placement-placement.wasm.wasm_module.module_ask.610563575f46"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

Ask whether a proposition is entailed by the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ask.d8318137f075"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

</details>

### ask

<a id="entry-presentation_wasm_assumptions_capability_algebra_ask_api_session_ask"></a>
<a id="placement-placement.wasm.javascript_facade.context_ask.dd678b45582e"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

Ask whether a proposition is entailed by durable assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_ask.3efd93c29c40"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

</details>

### assuming

<a id="entry-presentation_wasm_assumptions_capability_algebra_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_assuming.448cb5db38c4"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Compose a further immutable overlay.

### assuming

<a id="entry-presentation_wasm_assumptions_capability_contexts_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_assuming.bc3feb0b14d3"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Compose a further immutable overlay.

### assuming

<a id="entry-presentation_wasm_assumptions_capability_contexts_assuming_api_session_assuming"></a>
<a id="placement-placement.wasm.wasm_module.module_assuming.57d83b3bc98a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Create an immutable local assumption scope in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_assuming.d69718f8316b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

</details>

### assuming

<a id="entry-presentation_wasm_assumptions_capability_algebra_assuming_api_session_assuming"></a>
<a id="placement-placement.wasm.javascript_facade.context_assuming.b1b313002885"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

Create an immutable local assumption scope.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_assuming.40c4ee1c859b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

</details>

### not

<a id="entry-presentation_wasm_assumptions_capability_algebra_not_api_assumptionproposition_not"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_not.5d5485850aaf"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
not(): AssumptionProposition
```

Negate a proposition in canonical negation-normal form.

### not

<a id="entry-presentation_wasm_assumptions_capability_contexts_not_api_assumptionproposition_not"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_not.b60f9be810dc"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
not(): AssumptionProposition
```

Negate a proposition in canonical negation-normal form.

### or

<a id="entry-presentation_wasm_assumptions_capability_algebra_or_api_assumptionproposition_or"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_or.68746ec790ae"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
or(other: AssumptionProposition): AssumptionProposition
```

Disjoin two propositions.

### or

<a id="entry-presentation_wasm_assumptions_capability_contexts_or_api_assumptionproposition_or"></a>
<a id="placement-placement.wasm.wasm_class.assumptionproposition_or.5d7229fdfdb9"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
or(other: AssumptionProposition): AssumptionProposition
```

Disjoin two propositions.

### refine

<a id="entry-presentation_wasm_assumptions_capability_algebra_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_refine.eb9700297138"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
refine(value: ExpressionLike): Expression
```

Refine an expression against this immutable local assumption scope.

### refine

<a id="entry-presentation_wasm_assumptions_capability_contexts_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.wasm.wasm_class.assumptionscope_refine.a34fe51a40a7"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
refine(input_expression: Expression): Expression
```

Refine an expression against this immutable local assumption scope.

### refine

<a id="entry-presentation_wasm_assumptions_capability_contexts_refine_api_session_refine"></a>
<a id="placement-placement.wasm.wasm_module.module_refine.5ab1dc89ad54"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
refine(
    input_expression: Expression,
    assumptions?: AssumptionProposition | null,
): Expression
```

Refine an expression using durable assumptions or one checked local proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_refine.823a6652f5ca"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.refine</code></p>

```typescript signature
refine(
    input_expression: Expression,
    assumptions?: AssumptionProposition | null,
): Expression
```

</details>

### refine

<a id="entry-presentation_wasm_assumptions_capability_algebra_refine_api_session_refine"></a>
<a id="placement-placement.wasm.javascript_facade.context_refine.d5f9062ecb2d"></a>
<p class="symi-entry-owner">Explicit context</p>

```typescript signature
refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression
```

Refine an expression using durable assumptions or one checked local proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_refine.07d92cdc7343"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.refine</code></p>

```typescript signature
refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression
```

</details>

### refine

<a id="entry-presentation_wasm_assumptions_capability_algebra_refine_api_expression_refine"></a>
<a id="placement-placement.wasm.javascript_facade.expression_refine.70673247d439"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
refine(assumptions?: AssumptionProposition | null): Expression
```

Refine this expression using durable assumptions or one checked local proposition.

### refine

<a id="entry-presentation_wasm_assumptions_capability_contexts_refine_api_expression_refine"></a>
<a id="placement-placement.wasm.wasm_class.expression_refine.851cb332f433"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
refine(assumptions?: AssumptionProposition | null): Expression
```

Refine this expression using durable assumptions or one checked local proposition.

### serialize

<a id="entry-presentation_wasm_assumptions_capability_algebra_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_serialize.185b0e9cccac"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
serialize(): string
```

Serialize this proposition in the versioned canonical formula grammar.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.symifacade_serialize.7f47221634d0"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.serialize</code></p>

```typescript signature
serialize(proposition: AssumptionProposition): string
```

</details>

### serialize

<a id="entry-presentation_wasm_assumptions_capability_contexts_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.wasm.wasm_module.module_serialize.7eefdbffab95"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
serialize(proposition: AssumptionProposition): string
```

Serialize an assumption proposition in the versioned canonical grammar.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_serialize.765c7dd6b46b"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.serialize</code></p>

```typescript signature
serialize(): string
```

</details>

