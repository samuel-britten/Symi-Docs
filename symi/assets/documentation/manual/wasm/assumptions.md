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

<a id="entry-presentation_wasm_api_assumptionproposition_and"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_and.dd2edebafd49"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
and(other: AssumptionProposition): AssumptionProposition
```

Conjoin two propositions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_and.52d50e36a4e0"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.and</code></p>

```typescript signature
and(other: AssumptionProposition): AssumptionProposition
```

</details>

### or
Disjoin two propositions and return a canonical proposition.

<a id="entry-presentation_wasm_api_assumptionproposition_or"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_or.68746ec790ae"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
or(other: AssumptionProposition): AssumptionProposition
```

Disjoin two propositions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_or.5d7229fdfdb9"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.or</code></p>

```typescript signature
or(other: AssumptionProposition): AssumptionProposition
```

</details>

### not
Negate a proposition and return a canonical proposition.

<a id="entry-presentation_wasm_api_assumptionproposition_not"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_not.5d5485850aaf"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
not(): AssumptionProposition
```

Negate a proposition in canonical negation-normal form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_not.b60f9be810dc"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.not</code></p>

```typescript signature
not(): AssumptionProposition
```

</details>

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

<a id="entry-presentation_wasm_api_assumptionproposition_serialize"></a>
<a id="placement-placement.wasm.wasm_module.module_serialize.7eefdbffab95"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
serialize(proposition: AssumptionProposition): string
```

Serialize an assumption proposition in the versioned canonical grammar.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_serialize.185b0e9cccac"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.serialize</code></p>

```typescript signature
serialize(): string
```

<a id="placement-placement.wasm.javascript_facade.symifacade_serialize.7f47221634d0"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.serialize</code></p>

```typescript signature
serialize(proposition: AssumptionProposition): string
```

<a id="placement-placement.wasm.wasm_class.assumptionproposition_serialize.765c7dd6b46b"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.serialize</code></p>

```typescript signature
serialize(): string
```

</details>

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

<a id="entry-presentation_wasm_api_session_ask"></a>
<a id="placement-placement.wasm.wasm_module.module_ask.610563575f46"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.javascript_facade.context_ask.dd678b45582e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

<a id="placement-placement.wasm.wasm_class.context_ask.d8318137f075"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

<a id="placement-placement.wasm.javascript_facade.symifacade_ask.3efd93c29c40"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_ask.39f17daa4a26"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | null
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_ask.49091dce105c"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.ask</code></p>

```typescript signature
ask(proposition: AssumptionProposition): boolean | undefined
```

</details>

Return whether a proposition is entailed by the current durable context.

### could_hold

<a id="entry-presentation_wasm_api_session_could_hold"></a>
<a id="placement-placement.wasm.wasm_module.module_couldhold.4201d9b1b3bb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.javascript_facade.context_couldhold.07dbc6c95fcb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | null
```

<a id="placement-placement.wasm.wasm_class.context_couldhold.66586843bd55"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

<a id="placement-placement.wasm.javascript_facade.symifacade_couldhold.c5541088e29c"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | null
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_couldhold.cd0ffcddc4c7"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | null
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_couldhold.2d2a6b64246b"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.couldHold</code></p>

```typescript signature
couldHold(proposition: AssumptionProposition): boolean | undefined
```

</details>

Return whether the current durable context is compatible with a proposition.

### assuming

<a id="entry-presentation_wasm_api_session_assuming"></a>
<a id="placement-placement.wasm.wasm_module.module_assuming.57d83b3bc98a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.javascript_facade.context_assuming.b1b313002885"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

<a id="placement-placement.wasm.wasm_class.context_assuming.d69718f8316b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

<a id="placement-placement.wasm.javascript_facade.symifacade_assuming.40c4ee1c859b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_assuming.448cb5db38c4"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_assuming.bc3feb0b14d3"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.assuming</code></p>

```typescript signature
assuming(proposition: AssumptionProposition): AssumptionScope
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

<a id="entry-presentation_wasm_api_session_refine"></a>
<a id="placement-placement.wasm.wasm_module.module_refine.5ab1dc89ad54"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
refine(
    input_expression: Expression,
    assumptions?: AssumptionProposition | null,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.wasm.javascript_facade.context_refine.d5f9062ecb2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.refine</code></p>

```typescript signature
refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression
```

<a id="placement-placement.wasm.wasm_class.context_refine.823a6652f5ca"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.refine</code></p>

```typescript signature
refine(
    input_expression: Expression,
    assumptions?: AssumptionProposition | null,
): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_refine.07d92cdc7343"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.refine</code></p>

```typescript signature
refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression
```

<a id="placement-placement.wasm.javascript_facade.expression_refine.70673247d439"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.refine</code></p>

```typescript signature
refine(assumptions?: AssumptionProposition | null): Expression
```

<a id="placement-placement.wasm.wasm_class.expression_refine.851cb332f433"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.refine</code></p>

```typescript signature
refine(assumptions?: AssumptionProposition | null): Expression
```

<a id="placement-placement.wasm.javascript_facade.assumptionscope_refine.eb9700297138"></a>
<p class="symi-entry-owner">Variant using local assumptions — AssumptionScope method: <code>AssumptionScope.refine</code></p>

```typescript signature
refine(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.assumptionscope_refine.a34fe51a40a7"></a>
<p class="symi-entry-owner">Variant using local assumptions — Raw WebAssembly: AssumptionScope method: <code>AssumptionScope.refine</code></p>

```typescript signature
refine(input_expression: Expression): Expression
```

</details>

Simplify an expression using durable assumptions or one checked local proposition.

## Additional API

### addAssumptions

<a id="entry-presentation_wasm_api_session_add_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_addassumptions.4a919b81fb21"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

Add a proposition to the default context's durable assumption store.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_addassumptions.bd466d03ca25"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.addAssumptions</code></p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

<a id="placement-placement.wasm.wasm_class.context_addassumptions.b31f141c59eb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.addAssumptions</code></p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

<a id="placement-placement.wasm.javascript_facade.symifacade_addassumptions.73e3352ec9e9"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.addAssumptions</code></p>

```typescript signature
addAssumptions(proposition: AssumptionProposition): void
```

</details>

### algebraicAssumption

<a id="entry-presentation_wasm_api_session_algebraic_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_algebraicassumption.cadab791299a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
algebraicAssumption(subject: Expression): AssumptionProposition
```

Build an algebraicity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_algebraicassumption.13f584dcd297"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.algebraicAssumption</code></p>

```typescript signature
algebraicAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_algebraicassumption.2224c5ffdadb"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.algebraicAssumption</code></p>

```typescript signature
algebraicAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_algebraicassumption.f4ce6f6c9968"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.algebraicAssumption</code></p>

```typescript signature
algebraicAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### assumptionPropositionFromLogicalExpression

<a id="entry-presentation_wasm_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.wasm.wasm_module.module_assumptionpropositionfromlogicalexpression.135c42fd1172"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
assumptionPropositionFromLogicalExpression(logical_expression: Expression): AssumptionProposition
```

Convert a supported logical expression to a typed assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_assumptionpropositionfromlogicalexpression.2634b9a120ce"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumptionPropositionFromLogicalExpression</code></p>

```typescript signature
assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_assumptionpropositionfromlogicalexpression.5ea25bd33b20"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.assumptionPropositionFromLogicalExpression</code></p>

```typescript signature
assumptionPropositionFromLogicalExpression(logical_expression: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionpropositionfromlogicalexpression.296cef2c3834"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.assumptionPropositionFromLogicalExpression</code></p>

```typescript signature
assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition
```

</details>

### clearAllAssumptions

<a id="entry-presentation_wasm_api_session_clear_all_assumptions"></a>
<a id="placement-placement.wasm.wasm_module.module_clearallassumptions.0db5db87e18d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
clearAllAssumptions(): void
```

Clear all assumptions in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_clearallassumptions.a0d7b8978517"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clearAllAssumptions</code></p>

```typescript signature
clearAllAssumptions(): void
```

<a id="placement-placement.wasm.wasm_class.context_clearallassumptions.bd79ad9a9a16"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.clearAllAssumptions</code></p>

```typescript signature
clearAllAssumptions(): void
```

<a id="placement-placement.wasm.javascript_facade.symifacade_clearallassumptions.759cb89d46d9"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.clearAllAssumptions</code></p>

```typescript signature
clearAllAssumptions(): void
```

</details>

### complexAssumption

<a id="entry-presentation_wasm_api_session_complex_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_complexassumption.1304cbe2e12a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
complexAssumption(subject: Expression): AssumptionProposition
```

Build a finite-complex assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_complexassumption.de9b2d0d5a6b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complexAssumption</code></p>

```typescript signature
complexAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_complexassumption.da3971bb10ac"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.complexAssumption</code></p>

```typescript signature
complexAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_complexassumption.6e9580247a40"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.complexAssumption</code></p>

```typescript signature
complexAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### compositeAssumption

<a id="entry-presentation_wasm_api_session_composite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_compositeassumption.3b1dc4123512"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
compositeAssumption(subject: Expression): AssumptionProposition
```

Build a compositeness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_compositeassumption.7fafa23ed771"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.compositeAssumption</code></p>

```typescript signature
compositeAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_compositeassumption.fa27370d4eed"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.compositeAssumption</code></p>

```typescript signature
compositeAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_compositeassumption.c21be76bc301"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.compositeAssumption</code></p>

```typescript signature
compositeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### congruentAssumption

<a id="entry-presentation_wasm_api_session_congruent_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_congruentassumption.906a88486d5e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
congruentAssumption(
    left: Expression,
    right: Expression,
    modulus: Expression,
): AssumptionProposition
```

Build an integer-congruence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_congruentassumption.ba23c40226c0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.congruentAssumption</code></p>

```typescript signature
congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_congruentassumption.f6180c227f00"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.congruentAssumption</code></p>

```typescript signature
congruentAssumption(
    left: Expression,
    right: Expression,
    modulus: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_congruentassumption.cc5d155981f1"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.congruentAssumption</code></p>

```typescript signature
congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition
```

</details>

### definedAssumption

<a id="entry-presentation_wasm_api_session_defined_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_definedassumption.5219edfb0174"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
definedAssumption(subject: Expression): AssumptionProposition
```

Build a pointwise definedness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_definedassumption.a6b8cd5e249d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.definedAssumption</code></p>

```typescript signature
definedAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_definedassumption.8c5bd258ba52"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.definedAssumption</code></p>

```typescript signature
definedAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_definedassumption.d16c9ffedf97"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.definedAssumption</code></p>

```typescript signature
definedAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### deserializeAssumptionProposition

<a id="entry-presentation_wasm_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.wasm.wasm_module.module_deserializeassumptionproposition.4165a4b54429"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

Parse a versioned canonical assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_deserializeassumptionproposition.a3cd68aa2883"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.deserializeAssumptionProposition</code></p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_deserializeassumptionproposition.aff4c5500d99"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.deserializeAssumptionProposition</code></p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_deserializeassumptionproposition.baf0e5199161"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.deserializeAssumptionProposition</code></p>

```typescript signature
deserializeAssumptionProposition(text: string): AssumptionProposition
```

</details>

### equalAssumption

<a id="entry-presentation_wasm_api_session_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_equalassumption.24d5230bded4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
equalAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build an equality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_equalassumption.e2385c0eb338"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equalAssumption</code></p>

```typescript signature
equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_equalassumption.8c5d0d48bbee"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.equalAssumption</code></p>

```typescript signature
equalAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_equalassumption.24f0c321944b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.equalAssumption</code></p>

```typescript signature
equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

### evenAssumption

<a id="entry-presentation_wasm_api_session_even_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_evenassumption.edd68ccb590f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
evenAssumption(subject: Expression): AssumptionProposition
```

Build an evenness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_evenassumption.e7be2f22f2fa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.evenAssumption</code></p>

```typescript signature
evenAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_evenassumption.bb78156582ab"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.evenAssumption</code></p>

```typescript signature
evenAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_evenassumption.d98feb706c03"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.evenAssumption</code></p>

```typescript signature
evenAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### extendedRealAssumption

<a id="entry-presentation_wasm_api_session_extended_real_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_extendedrealassumption.b6b7622d86b1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
extendedRealAssumption(subject: Expression): AssumptionProposition
```

Build an extended-real assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_extendedrealassumption.24a10286e28a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extendedRealAssumption</code></p>

```typescript signature
extendedRealAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_extendedrealassumption.ae5e7bb5a3e9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.extendedRealAssumption</code></p>

```typescript signature
extendedRealAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_extendedrealassumption.13b9ce694b78"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.extendedRealAssumption</code></p>

```typescript signature
extendedRealAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### finiteAssumption

<a id="entry-presentation_wasm_api_session_finite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_finiteassumption.6ae53821afcc"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
finiteAssumption(subject: Expression): AssumptionProposition
```

Build a finiteness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_finiteassumption.53a61f54e11a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finiteAssumption</code></p>

```typescript signature
finiteAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_finiteassumption.f2b7a40022a4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.finiteAssumption</code></p>

```typescript signature
finiteAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteassumption.d74e89873ec3"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.finiteAssumption</code></p>

```typescript signature
finiteAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### greaterAssumption

<a id="entry-presentation_wasm_api_session_greater_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterassumption.a5eb42bf8f9c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
greaterAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_greaterassumption.b5c7e745dc87"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterAssumption</code></p>

```typescript signature
greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_greaterassumption.7d33f6430cf1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.greaterAssumption</code></p>

```typescript signature
greaterAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterassumption.5d34c5df780d"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.greaterAssumption</code></p>

```typescript signature
greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

### greaterOrEqualAssumption

<a id="entry-presentation_wasm_api_session_greater_or_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_greaterorequalassumption.775238806940"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
greaterOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a non-strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_greaterorequalassumption.533a8f9c54be"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greaterOrEqualAssumption</code></p>

```typescript signature
greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_greaterorequalassumption.45d6551d24b9"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.greaterOrEqualAssumption</code></p>

```typescript signature
greaterOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterorequalassumption.71bfbd4b9653"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.greaterOrEqualAssumption</code></p>

```typescript signature
greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

### infiniteAssumption

<a id="entry-presentation_wasm_api_session_infinite_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_infiniteassumption.30902fe0a9f6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
infiniteAssumption(subject: Expression): AssumptionProposition
```

Build an infinity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_infiniteassumption.1f8d8206b5d4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infiniteAssumption</code></p>

```typescript signature
infiniteAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_infiniteassumption.930992139804"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.infiniteAssumption</code></p>

```typescript signature
infiniteAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_infiniteassumption.c08c0dd8e0f7"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.infiniteAssumption</code></p>

```typescript signature
infiniteAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### integerAssumption

<a id="entry-presentation_wasm_api_session_integer_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_integerassumption.bf2080c26dc3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
integerAssumption(subject: Expression): AssumptionProposition
```

Build an integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_integerassumption.cf3033b261f3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integerAssumption</code></p>

```typescript signature
integerAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_integerassumption.cd89ea0aeab3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.integerAssumption</code></p>

```typescript signature
integerAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_integerassumption.8d164e5dcee5"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.integerAssumption</code></p>

```typescript signature
integerAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### irrationalAssumption

<a id="entry-presentation_wasm_api_session_irrational_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_irrationalassumption.a422ee432156"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
irrationalAssumption(subject: Expression): AssumptionProposition
```

Build an irrationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_irrationalassumption.55887270e7fd"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.irrationalAssumption</code></p>

```typescript signature
irrationalAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_irrationalassumption.563f0ff3e367"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.irrationalAssumption</code></p>

```typescript signature
irrationalAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_irrationalassumption.cb191b491b47"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.irrationalAssumption</code></p>

```typescript signature
irrationalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### lessAssumption

<a id="entry-presentation_wasm_api_session_less_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_lessassumption.8fc95f457c3b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
lessAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_lessassumption.c8f4215c1aeb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessAssumption</code></p>

```typescript signature
lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_lessassumption.ca0ff78010a6"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.lessAssumption</code></p>

```typescript signature
lessAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_lessassumption.208b6241d635"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lessAssumption</code></p>

```typescript signature
lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

### lessOrEqualAssumption

<a id="entry-presentation_wasm_api_session_less_or_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_lessorequalassumption.9485a709d841"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
lessOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a non-strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_lessorequalassumption.54b87c34ad81"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.lessOrEqualAssumption</code></p>

```typescript signature
lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_lessorequalassumption.11ee484d439d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.lessOrEqualAssumption</code></p>

```typescript signature
lessOrEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_lessorequalassumption.9a7358375559"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.lessOrEqualAssumption</code></p>

```typescript signature
lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

### memberAssumption

<a id="entry-presentation_wasm_api_session_member_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_memberassumption.d3aa17ab5d8c"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
memberAssumption(
    element: Expression,
    set_expression: Expression,
): AssumptionProposition
```

Build a scalar-membership assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_memberassumption.4bb9ab611722"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.memberAssumption</code></p>

```typescript signature
memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_memberassumption.1ba404fedc2d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.memberAssumption</code></p>

```typescript signature
memberAssumption(
    element: Expression,
    set_expression: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_memberassumption.faafe5efd4c4"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.memberAssumption</code></p>

```typescript signature
memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition
```

</details>

### naturalAssumption

<a id="entry-presentation_wasm_api_session_natural_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_naturalassumption.3ab80dcb8d03"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
naturalAssumption(subject: Expression): AssumptionProposition
```

Build a natural-number assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_naturalassumption.19c46f121eb7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.naturalAssumption</code></p>

```typescript signature
naturalAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_naturalassumption.38e1c8e1981a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.naturalAssumption</code></p>

```typescript signature
naturalAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_naturalassumption.545c396a1a8a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.naturalAssumption</code></p>

```typescript signature
naturalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### negativeAssumption

<a id="entry-presentation_wasm_api_session_negative_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_negativeassumption.a7d23b923406"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
negativeAssumption(subject: Expression): AssumptionProposition
```

Build a strict-negativity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_negativeassumption.4f548122612d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.negativeAssumption</code></p>

```typescript signature
negativeAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_negativeassumption.2f61c8b3c7a1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.negativeAssumption</code></p>

```typescript signature
negativeAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_negativeassumption.a1faca33e449"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.negativeAssumption</code></p>

```typescript signature
negativeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### nonnegativeAssumption

<a id="entry-presentation_wasm_api_session_nonnegative_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonnegativeassumption.cd1162dab735"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
nonnegativeAssumption(subject: Expression): AssumptionProposition
```

Build a universe-guarded nonnegative assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_nonnegativeassumption.d5fe84f63a4f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonnegativeAssumption</code></p>

```typescript signature
nonnegativeAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_nonnegativeassumption.64680640bb6a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.nonnegativeAssumption</code></p>

```typescript signature
nonnegativeAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_nonnegativeassumption.fc8db15a6f1a"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.nonnegativeAssumption</code></p>

```typescript signature
nonnegativeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### nonpositiveAssumption

<a id="entry-presentation_wasm_api_session_nonpositive_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonpositiveassumption.d8eddd870b43"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
nonpositiveAssumption(subject: Expression): AssumptionProposition
```

Build a universe-guarded nonpositive assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_nonpositiveassumption.bbd2f123adaa"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonpositiveAssumption</code></p>

```typescript signature
nonpositiveAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_nonpositiveassumption.a68756b4e98f"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.nonpositiveAssumption</code></p>

```typescript signature
nonpositiveAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_nonpositiveassumption.48fdc398654b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.nonpositiveAssumption</code></p>

```typescript signature
nonpositiveAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### nonzeroAssumption

<a id="entry-presentation_wasm_api_session_nonzero_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_nonzeroassumption.76b8b5800ccd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
nonzeroAssumption(subject: Expression): AssumptionProposition
```

Build a nonzero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_nonzeroassumption.13c24e7f7a6e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonzeroAssumption</code></p>

```typescript signature
nonzeroAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_nonzeroassumption.3c73be02c09e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.nonzeroAssumption</code></p>

```typescript signature
nonzeroAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_nonzeroassumption.dab21ea932d8"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.nonzeroAssumption</code></p>

```typescript signature
nonzeroAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### notEqualAssumption

<a id="entry-presentation_wasm_api_session_not_equal_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_notequalassumption.c25dc8a01655"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
notEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

Build a disequality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_notequalassumption.67d2e7f5e08e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.notEqualAssumption</code></p>

```typescript signature
notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_notequalassumption.9cf43d15c370"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.notEqualAssumption</code></p>

```typescript signature
notEqualAssumption(
    left: Expression,
    right: Expression,
): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_notequalassumption.7f22dc0529bc"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.notEqualAssumption</code></p>

```typescript signature
notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition
```

</details>

### oddAssumption

<a id="entry-presentation_wasm_api_session_odd_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_oddassumption.6299ce7886a7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
oddAssumption(subject: Expression): AssumptionProposition
```

Build an oddness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_oddassumption.4c7823e1efdb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.oddAssumption</code></p>

```typescript signature
oddAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_oddassumption.5565fb3aa853"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.oddAssumption</code></p>

```typescript signature
oddAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_oddassumption.31a0bcf1ea66"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.oddAssumption</code></p>

```typescript signature
oddAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### positiveAssumption

<a id="entry-presentation_wasm_api_session_positive_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_positiveassumption.c2f3eab58e85"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
positiveAssumption(subject: Expression): AssumptionProposition
```

Build a strict-positivity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_positiveassumption.78c5b78a1489"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveAssumption</code></p>

```typescript signature
positiveAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_positiveassumption.f031f0dc6351"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.positiveAssumption</code></p>

```typescript signature
positiveAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveassumption.88eeb1edfead"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveAssumption</code></p>

```typescript signature
positiveAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### positiveIntegerAssumption

<a id="entry-presentation_wasm_api_session_positive_integer_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_positiveintegerassumption.25753e25c658"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
positiveIntegerAssumption(subject: Expression): AssumptionProposition
```

Build a positive-integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_positiveintegerassumption.18b9666cbeb9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positiveIntegerAssumption</code></p>

```typescript signature
positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_positiveintegerassumption.213d99d5dc51"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.positiveIntegerAssumption</code></p>

```typescript signature
positiveIntegerAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveintegerassumption.fa356b4ace52"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.positiveIntegerAssumption</code></p>

```typescript signature
positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### primeAssumption

<a id="entry-presentation_wasm_api_session_prime_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_primeassumption.048f5e3f9f7a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
primeAssumption(subject: Expression): AssumptionProposition
```

Build a primality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_primeassumption.c38a13dbad3a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.primeAssumption</code></p>

```typescript signature
primeAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_primeassumption.dea59522d9b3"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.primeAssumption</code></p>

```typescript signature
primeAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_primeassumption.20ac88ea9ecd"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.primeAssumption</code></p>

```typescript signature
primeAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### rationalAssumption

<a id="entry-presentation_wasm_api_session_rational_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_rationalassumption.12ebaab24804"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
rationalAssumption(subject: Expression): AssumptionProposition
```

Build a rationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_rationalassumption.bd30ce74bea3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rationalAssumption</code></p>

```typescript signature
rationalAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_rationalassumption.66ad2d17a4bd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.rationalAssumption</code></p>

```typescript signature
rationalAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_rationalassumption.50a8e1879939"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.rationalAssumption</code></p>

```typescript signature
rationalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### realAssumption

<a id="entry-presentation_wasm_api_session_real_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_realassumption.926ab7bf4766"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
realAssumption(subject: Expression): AssumptionProposition
```

Build a realness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_realassumption.9a2fc4517edb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.realAssumption</code></p>

```typescript signature
realAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_realassumption.973d612c8247"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.realAssumption</code></p>

```typescript signature
realAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_realassumption.a407a99bc207"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.realAssumption</code></p>

```typescript signature
realAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### transcendentalAssumption

<a id="entry-presentation_wasm_api_session_transcendental_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_transcendentalassumption.685160fbab59"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
transcendentalAssumption(subject: Expression): AssumptionProposition
```

Build a transcendence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_transcendentalassumption.0a4b799a5b1c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.transcendentalAssumption</code></p>

```typescript signature
transcendentalAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_transcendentalassumption.6d339804210b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.transcendentalAssumption</code></p>

```typescript signature
transcendentalAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_transcendentalassumption.59b1bbba7112"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.transcendentalAssumption</code></p>

```typescript signature
transcendentalAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### zeroAssumption

<a id="entry-presentation_wasm_api_session_zero_assumption"></a>
<a id="placement-placement.wasm.wasm_module.module_zeroassumption.999da512137e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
zeroAssumption(subject: Expression): AssumptionProposition
```

Build a zero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_zeroassumption.e6f179fd3a86"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zeroAssumption</code></p>

```typescript signature
zeroAssumption(value: ExpressionLike): AssumptionProposition
```

<a id="placement-placement.wasm.wasm_class.context_zeroassumption.e80b6e21b307"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.zeroAssumption</code></p>

```typescript signature
zeroAssumption(subject: Expression): AssumptionProposition
```

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroassumption.750741382236"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.zeroAssumption</code></p>

```typescript signature
zeroAssumption(value: ExpressionLike): AssumptionProposition
```

</details>

### AssumptionProposition

<a id="entry-presentation_wasm_api_assumptionproposition"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition.b30925c7b0d9"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class AssumptionProposition
```

Public type placement for AssumptionProposition.

#### AssumptionProposition.congruenceModulus

<a id="entry-presentation_wasm_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.wasm.wasm_module.module_congruencemodulus.17e549d7616a"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
congruenceModulus(proposition: AssumptionProposition): Expression | undefined
```

Return the congruence modulus when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_congruencemodulus.958e75bacc16"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.congruenceModulus</code></p>

```typescript signature
congruenceModulus(): Expression | null
```

<a id="placement-placement.wasm.javascript_facade.symifacade_congruencemodulus.5433d54422f2"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.congruenceModulus</code></p>

```typescript signature
congruenceModulus(proposition: AssumptionProposition): Expression | null
```

<a id="placement-placement.wasm.wasm_class.assumptionproposition_congruencemodulus.ec7759ccca4c"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.congruenceModulus</code></p>

```typescript signature
congruenceModulus(): Expression | undefined
```

</details>

#### AssumptionProposition.free

<a id="entry-presentation_wasm_host_wasm_assumptionproposition_free"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_free.3aac53fe6166"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
free(): void
```

Public method placement for free.

#### AssumptionProposition.leftOperand

<a id="entry-presentation_wasm_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.wasm.wasm_module.module_leftoperand.76fb7332aadf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
leftOperand(proposition: AssumptionProposition): Expression | undefined
```

Return the left relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_leftoperand.1cd6f2d84196"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.leftOperand</code></p>

```typescript signature
leftOperand(): Expression | null
```

<a id="placement-placement.wasm.javascript_facade.symifacade_leftoperand.7b6a1f8eac18"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.leftOperand</code></p>

```typescript signature
leftOperand(proposition: AssumptionProposition): Expression | null
```

<a id="placement-placement.wasm.wasm_class.assumptionproposition_leftoperand.746fdb26e50b"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.leftOperand</code></p>

```typescript signature
leftOperand(): Expression | undefined
```

</details>

#### AssumptionProposition.membershipElement

<a id="entry-presentation_wasm_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.wasm.wasm_module.module_membershipelement.8ef3bf1bc659"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
membershipElement(proposition: AssumptionProposition): Expression | undefined
```

Return the membership element when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipelement.e669e2bb3843"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membershipElement</code></p>

```typescript signature
membershipElement(): Expression | null
```

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipelement.0fc6fd43e584"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.membershipElement</code></p>

```typescript signature
membershipElement(proposition: AssumptionProposition): Expression | null
```

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipelement.aae55444ab1f"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.membershipElement</code></p>

```typescript signature
membershipElement(): Expression | undefined
```

</details>

#### AssumptionProposition.membershipSet

<a id="entry-presentation_wasm_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.wasm.wasm_module.module_membershipset.b2235c74f247"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
membershipSet(proposition: AssumptionProposition): Expression | undefined
```

Return the membership set expression when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipset.56fd05efb36b"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membershipSet</code></p>

```typescript signature
membershipSet(): Expression | null
```

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipset.4cc3c059c77b"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.membershipSet</code></p>

```typescript signature
membershipSet(proposition: AssumptionProposition): Expression | null
```

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipset.7ce41b1bc776"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.membershipSet</code></p>

```typescript signature
membershipSet(): Expression | undefined
```

</details>

#### AssumptionProposition.relationKind

<a id="entry-presentation_wasm_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.wasm.wasm_module.module_relationkind.7ff1b1cd4c30"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
relationKind(proposition: AssumptionProposition): string | undefined
```

Return the canonical relation kind for an assumption proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_relationkind.077f50cc3ca4"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.relationKind</code></p>

```typescript signature
relationKind(): "equal" | "not_equal" | "less" | "less_or_equal" | null
```

<a id="placement-placement.wasm.javascript_facade.symifacade_relationkind.bb3ed2b1488e"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.relationKind</code></p>

```typescript signature
relationKind(proposition: AssumptionProposition): "equal" | "not_equal" | "less" | "less_or_equal" | null
```

<a id="placement-placement.wasm.wasm_class.assumptionproposition_relationkind.e790b4e9fc3f"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.relationKind</code></p>

```typescript signature
relationKind(): string | undefined
```

</details>

#### AssumptionProposition.rightOperand

<a id="entry-presentation_wasm_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.wasm.wasm_module.module_rightoperand.e696bf40887d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
rightOperand(proposition: AssumptionProposition): Expression | undefined
```

Return the right relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_rightoperand.cd1d8db9f940"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.rightOperand</code></p>

```typescript signature
rightOperand(): Expression | null
```

<a id="placement-placement.wasm.javascript_facade.symifacade_rightoperand.48bc4bcc6b14"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.rightOperand</code></p>

```typescript signature
rightOperand(proposition: AssumptionProposition): Expression | null
```

<a id="placement-placement.wasm.wasm_class.assumptionproposition_rightoperand.c7d9f00cb532"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.rightOperand</code></p>

```typescript signature
rightOperand(): Expression | undefined
```

</details>

#### AssumptionProposition.toString

<a id="entry-presentation_wasm_api_assumptionproposition_to_string"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionproposition_tostring.1bef2e8fdf8b"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```typescript signature
toString(): string
```

Return the canonical formula spelling.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.assumptionproposition_tostring.ac1a37e09f72"></a>
<p class="symi-entry-owner">Raw WebAssembly: AssumptionProposition method: <code>AssumptionProposition.toString</code></p>

```typescript signature
toString(): string
```

</details>

### AssumptionScope

<a id="entry-presentation_wasm_api_assumptionscope"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope.6062700f9779"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class AssumptionScope
```

Public type placement for AssumptionScope.

#### AssumptionScope.free

<a id="entry-presentation_wasm_host_wasm_assumptionscope_free"></a>
<a id="placement-placement.wasm.javascript_facade.assumptionscope_free.0065977a775c"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```typescript signature
free(): void
```

Public method placement for free.

