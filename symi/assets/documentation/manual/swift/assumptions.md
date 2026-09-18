# Assumptions

Assumptions are typed, canonical propositions over scalar expressions. They are
kept separately from the legacy per-symbol compatibility record, so compound
Boolean formulas and immutable local scopes do not lose information.

Queries are three-valued: `True` means entailed, `False` means refuted, and
`None` / `undefined` means that the bounded symbolic engine cannot decide.
`could_hold` is a possibility query and may return true when `ask` is unknown.

## Proposition builders

### real_assumption

<a id="placement-placement.swift.swift_object.uniffisession_realassumption.bbf444970b17"></a>
`UniffiSession.realAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is real.

### rational_assumption

<a id="placement-placement.swift.swift_object.uniffisession_rationalassumption.29a77ad6ce79"></a>
`UniffiSession.rationalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is rational.

### integer_assumption

<a id="placement-placement.swift.swift_object.uniffisession_integerassumption.42b0ac0add7b"></a>
`UniffiSession.integerAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is an integer.

### natural_assumption

<a id="placement-placement.swift.swift_object.uniffisession_naturalassumption.5256556afcd7"></a>
`UniffiSession.naturalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is a natural number.

### positive_integer_assumption

<a id="placement-placement.swift.swift_object.uniffisession_positiveintegerassumption.54531ccb0bec"></a>
`UniffiSession.positiveIntegerAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is a positive integer.

### positive_assumption

<a id="placement-placement.swift.swift_object.uniffisession_positiveassumption.b77092a60c87"></a>
`UniffiSession.positiveAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is strictly positive.

### negative_assumption

<a id="placement-placement.swift.swift_object.uniffisession_negativeassumption.e4b6ed74ebc5"></a>
`UniffiSession.negativeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is strictly negative.

### nonzero_assumption

<a id="placement-placement.swift.swift_object.uniffisession_nonzeroassumption.ce8b24f738de"></a>
`UniffiSession.nonzeroAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is nonzero.

### finite_assumption

<a id="placement-placement.swift.swift_object.uniffisession_finiteassumption.dd3e29eb286b"></a>
`UniffiSession.finiteAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is finite.

### complex_assumption

<a id="placement-placement.swift.swift_object.uniffisession_complexassumption.14b12126c031"></a>
`UniffiSession.complexAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is a finite complex number.

### extended_real_assumption

<a id="placement-placement.swift.swift_object.uniffisession_extendedrealassumption.93149f42d6ca"></a>
`UniffiSession.extendedRealAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is an extended real, including signed infinity.

### infinite_assumption

<a id="placement-placement.swift.swift_object.uniffisession_infiniteassumption.5f0ffd93265c"></a>
`UniffiSession.infiniteAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is one of the two signed infinities.

### irrational_assumption

<a id="placement-placement.swift.swift_object.uniffisession_irrationalassumption.4a60885215fb"></a>
`UniffiSession.irrationalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is real and not rational.

### zero_assumption

<a id="placement-placement.swift.swift_object.uniffisession_zeroassumption.2df7ff800b3f"></a>
`UniffiSession.zeroAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is exactly zero.

### even_assumption

<a id="placement-placement.swift.swift_object.uniffisession_evenassumption.eb455d3c7e37"></a>
`UniffiSession.evenAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is an even integer.

### odd_assumption

<a id="placement-placement.swift.swift_object.uniffisession_oddassumption.3839750742e9"></a>
`UniffiSession.oddAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is an odd integer.

### prime_assumption

<a id="placement-placement.swift.swift_object.uniffisession_primeassumption.6ca6c19ac317"></a>
`UniffiSession.primeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is a proven ordinary prime integer.

### composite_assumption

<a id="placement-placement.swift.swift_object.uniffisession_compositeassumption.db30dc0b9a45"></a>
`UniffiSession.compositeAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is a proven ordinary composite integer.

### algebraic_assumption

<a id="placement-placement.swift.swift_object.uniffisession_algebraicassumption.6c368d6a57ac"></a>
`UniffiSession.algebraicAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is algebraic over the rationals.

### transcendental_assumption

<a id="placement-placement.swift.swift_object.uniffisession_transcendentalassumption.ad9c5fdb0497"></a>
`UniffiSession.transcendentalAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression is transcendental over the rationals.

### defined_assumption

<a id="placement-placement.swift.swift_object.uniffisession_definedassumption.1f2338dbf585"></a>
`UniffiSession.definedAssumption(subject: UniffiExpression) -> UniffiAssumptionProposition`

Build a proposition asserting that an expression denotes one scalar value at the active point. Its negation asserts that the expression is undefined there; definedness alone authorizes no value, finiteness, realness, sign, continuity, or analyticity.

### equal_assumption

<a id="placement-placement.swift.swift_object.uniffisession_equalassumption.7f6a866dd7d2"></a>
`UniffiSession.equalAssumption(left: UniffiExpression, right: UniffiExpression) -> UniffiAssumptionProposition`

Build a defined scalar equality proposition.

### not_equal_assumption

<a id="placement-placement.swift.swift_object.uniffisession_notequalassumption.5dd2a6d5af7d"></a>
`UniffiSession.notEqualAssumption(left: UniffiExpression, right: UniffiExpression) -> UniffiAssumptionProposition`

Build a defined scalar disequality proposition.

### less_assumption

<a id="placement-placement.swift.swift_object.uniffisession_lessassumption.16f33e296e90"></a>
`UniffiSession.lessAssumption(left: UniffiExpression, right: UniffiExpression) -> UniffiAssumptionProposition`

Build a strict extended-real order proposition.

### less_or_equal_assumption

<a id="placement-placement.swift.swift_object.uniffisession_lessorequalassumption.62cbd18952df"></a>
`UniffiSession.lessOrEqualAssumption(left: UniffiExpression, right: UniffiExpression) -> UniffiAssumptionProposition`

Build a non-strict extended-real order proposition.

### greater_assumption

<a id="placement-placement.swift.swift_object.uniffisession_greaterassumption.7e82fd06ea5e"></a>
`UniffiSession.greaterAssumption(left: UniffiExpression, right: UniffiExpression) -> UniffiAssumptionProposition`

Build a strict extended-real order proposition by reversing its operands canonically.

### greater_or_equal_assumption

<a id="placement-placement.swift.swift_object.uniffisession_greaterorequalassumption.82a8d9a0ba56"></a>
`UniffiSession.greaterOrEqualAssumption(left: UniffiExpression, right: UniffiExpression) -> UniffiAssumptionProposition`

Build a non-strict extended-real order proposition by reversing its operands canonically.

### member_assumption

<a id="placement-placement.swift.swift_object.uniffisession_memberassumption.9fbbc0c96b78"></a>
`UniffiSession.memberAssumption(element: UniffiExpression, setExpression: UniffiExpression) -> UniffiAssumptionProposition`

Build a scalar-membership proposition.

### congruent_assumption

<a id="placement-placement.swift.swift_object.uniffisession_congruentassumption.ddedeba63093"></a>
`UniffiSession.congruentAssumption(left: UniffiExpression, right: UniffiExpression, modulus: UniffiExpression) -> UniffiAssumptionProposition`

Build an integer-congruence proposition with a positive integer modulus.

### assumption_equal

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_equal`](/symi/rust/assumptions#assumption_equal) in Rust.*

Construct an equality proposition over two scalar expressions.

### assumption_not_equal

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_not_equal`](/symi/rust/assumptions#assumption_not_equal) in Rust.*

Construct a disequality proposition over two scalar expressions.

### assumption_less

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_less`](/symi/rust/assumptions#assumption_less) in Rust.*

Construct a strict scalar-order proposition.

### assumption_less_or_equal

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_less_or_equal`](/symi/rust/assumptions#assumption_less_or_equal) in Rust.*

Construct a non-strict scalar-order proposition.

### assumption_greater

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_greater`](/symi/rust/assumptions#assumption_greater) in Rust.*

Construct a strict scalar-order proposition with reversed operands.

### assumption_greater_or_equal

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_greater_or_equal`](/symi/rust/assumptions#assumption_greater_or_equal) in Rust.*

Construct a non-strict scalar-order proposition with reversed operands.

### assumption_member

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_member`](/symi/rust/assumptions#assumption_member) in Rust.*

Construct a scalar-membership proposition.

### assumption_congruent

*Not exposed by the Swift bindings. Available as [`api::Session::assumption_congruent`](/symi/rust/assumptions#assumption_congruent) in Rust.*

Construct an integer congruence proposition.

### assumption_proposition_from_logical_expression

<a id="placement-placement.swift.swift_object.uniffisession_assumptionpropositionfromlogicalexpression.31ad9b84f19a"></a>
`UniffiSession.assumptionPropositionFromLogicalExpression(logicalExpression: UniffiExpression) -> UniffiAssumptionProposition`

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

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_and.6ac7a88ceb7d"></a>
`UniffiAssumptionProposition.and(other: UniffiAssumptionProposition) -> UniffiAssumptionProposition`

Conjoin two propositions and return a canonical proposition.

### or

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_or.1c0024fcb508"></a>
`UniffiAssumptionProposition.or(other: UniffiAssumptionProposition) -> UniffiAssumptionProposition`

Disjoin two propositions and return a canonical proposition.

### not

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_not.4c7fd8190b0b"></a>
`UniffiAssumptionProposition.not() -> UniffiAssumptionProposition`

Negate a proposition and return a canonical proposition.

### relation_kind

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_relationkind.605f26847e27"></a>
`UniffiAssumptionProposition.relationKind() -> String?`

Return the canonical relation kind for a relation atom.

### left_operand

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_leftoperand.d99a11a816a2"></a>
`UniffiAssumptionProposition.leftOperand() -> UniffiExpression?`

Return the left relation or congruence operand when present.

### right_operand

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_rightoperand.1597382b6322"></a>
`UniffiAssumptionProposition.rightOperand() -> UniffiExpression?`

Return the right relation or congruence operand when present.

### membership_element

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_membershipelement.9171da3c3f16"></a>
`UniffiAssumptionProposition.membershipElement() -> UniffiExpression?`

Return the membership element when present.

### membership_set

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_membershipset.834f9ae1b814"></a>
`UniffiAssumptionProposition.membershipSet() -> UniffiExpression?`

Return the membership set expression when present.

### congruence_modulus

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_congruencemodulus.5dff126ededb"></a>
`UniffiAssumptionProposition.congruenceModulus() -> UniffiExpression?`

Return the congruence modulus when present.

### serialize

<a id="placement-placement.swift.swift_object.uniffiassumptionproposition_serialize.f2074b7cca5d"></a>
`UniffiAssumptionProposition.serialize() -> String`

Serialize a proposition in the versioned canonical formula grammar.

### deserialize_assumption_proposition

<a id="placement-placement.swift.swift_object.uniffisession_deserializeassumptionproposition.2b2cc7ba0175"></a>
`UniffiSession.deserializeAssumptionProposition(text: String) -> UniffiAssumptionProposition`

Parse a versioned canonical assumption proposition in the receiving context.

## Durable contexts and scopes

### add_assumptions

<a id="placement-placement.swift.swift_object.uniffisession_addassumptions.fa255787959b"></a>
`UniffiSession.addAssumptions(proposition: UniffiAssumptionProposition) -> Void`

Atomically add a proposition to the durable assumption context. Contradictory
updates are rejected without changing the prior state.

### clear_all_assumptions

<a id="placement-placement.swift.swift_object.uniffisession_clearallassumptions.718b639c5307"></a>
`UniffiSession.clearAllAssumptions() -> Void`

Clear both durable formulas and legacy symbol assumptions.

### ask

<a id="placement-placement.swift.swift_object.uniffiassumptionscope_ask.5025036e4885"></a>
`UniffiAssumptionScope.ask(proposition: UniffiAssumptionProposition) -> UniffiTruthValue`

<a id="placement-placement.swift.swift_object.uniffisession_ask.0c0006984973"></a>
`UniffiSession.ask(proposition: UniffiAssumptionProposition) -> UniffiTruthValue`

Return whether a proposition is entailed by the current durable context.

### could_hold

<a id="placement-placement.swift.swift_object.uniffiassumptionscope_couldhold.0f01d9d1216a"></a>
`UniffiAssumptionScope.couldHold(proposition: UniffiAssumptionProposition) -> UniffiTruthValue`

<a id="placement-placement.swift.swift_object.uniffisession_couldhold.298e72c27693"></a>
`UniffiSession.couldHold(proposition: UniffiAssumptionProposition) -> UniffiTruthValue`

Return whether the current durable context is compatible with a proposition.

### assuming

<a id="placement-placement.swift.swift_object.uniffiassumptionscope_assuming.3cbffeb9c1ab"></a>
`UniffiAssumptionScope.assuming(proposition: UniffiAssumptionProposition) -> UniffiAssumptionScope`

<a id="placement-placement.swift.swift_object.uniffisession_assuming.0c8d2bd1e320"></a>
`UniffiSession.assuming(proposition: UniffiAssumptionProposition) -> UniffiAssumptionScope`

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

<a id="placement-placement.swift.swift_object.uniffiassumptionscope_refine.53a6330a7e27"></a>
`UniffiAssumptionScope.refine(target: UniffiExpression) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffiexpression_refine.198c320bf37e"></a>
`UniffiExpression.refine(assumptions: UniffiAssumptionProposition?) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_refine.ccb92f973860"></a>
`UniffiSession.refine(target: UniffiExpression, assumptions: UniffiAssumptionProposition?) -> UniffiExpression`

Simplify an expression using durable assumptions or one checked local proposition.
