# Assumptions

Assumptions are typed, canonical propositions over scalar expressions. They are
kept separately from the legacy per-symbol compatibility record, so compound
Boolean formulas and immutable local scopes do not lose information.

Queries are three-valued: `True` means entailed, `False` means refuted, and
`None` / `undefined` means that the bounded symbolic engine cannot decide.
`could_hold` is a possibility query and may return true when `ask` is unknown.

## Proposition builders

### real_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_realassumption.5a55a15f41d9"></a>
`UniffiSession.realAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is real.

### rational_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_rationalassumption.05affb3bd236"></a>
`UniffiSession.rationalAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is rational.

### integer_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerassumption.9dbeb4ec970c"></a>
`UniffiSession.integerAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is an integer.

### natural_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_naturalassumption.8806fa8d14d6"></a>
`UniffiSession.naturalAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is a natural number.

### positive_integer_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_positiveintegerassumption.0d3f6dfede0b"></a>
`UniffiSession.positiveIntegerAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is a positive integer.

### positive_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_positiveassumption.be2804a7bdd5"></a>
`UniffiSession.positiveAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is strictly positive.

### negative_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_negativeassumption.bac5dba6317a"></a>
`UniffiSession.negativeAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is strictly negative.

### nonzero_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_nonzeroassumption.f1c537faeff4"></a>
`UniffiSession.nonzeroAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is nonzero.

### finite_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_finiteassumption.530fa318467c"></a>
`UniffiSession.finiteAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is finite.

### complex_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_complexassumption.b9f31c2741e0"></a>
`UniffiSession.complexAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is a finite complex number.

### extended_real_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_extendedrealassumption.8d2a33c93883"></a>
`UniffiSession.extendedRealAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is an extended real, including signed infinity.

### infinite_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_infiniteassumption.1c4d539dae09"></a>
`UniffiSession.infiniteAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is one of the two signed infinities.

### irrational_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_irrationalassumption.ea23fee2abfa"></a>
`UniffiSession.irrationalAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is real and not rational.

### zero_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_zeroassumption.fb404fcc9e36"></a>
`UniffiSession.zeroAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is exactly zero.

### even_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_evenassumption.cdee02670250"></a>
`UniffiSession.evenAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is an even integer.

### odd_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_oddassumption.b6b91e938c8f"></a>
`UniffiSession.oddAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is an odd integer.

### prime_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_primeassumption.640a68dfff0b"></a>
`UniffiSession.primeAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is a proven ordinary prime integer.

### composite_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_compositeassumption.04267cbb5fbd"></a>
`UniffiSession.compositeAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is a proven ordinary composite integer.

### algebraic_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_algebraicassumption.8894f9b38716"></a>
`UniffiSession.algebraicAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is algebraic over the rationals.

### transcendental_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_transcendentalassumption.a92b95243c58"></a>
`UniffiSession.transcendentalAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression is transcendental over the rationals.

### defined_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_definedassumption.58a6052e981f"></a>
`UniffiSession.definedAssumption(subject: UniffiExpression): UniffiAssumptionProposition`

Build a proposition asserting that an expression denotes one scalar value at the active point. Its negation asserts that the expression is undefined there; definedness alone authorizes no value, finiteness, realness, sign, continuity, or analyticity.

### equal_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_equalassumption.78d603642355"></a>
`UniffiSession.equalAssumption(left: UniffiExpression, right: UniffiExpression): UniffiAssumptionProposition`

Build a defined scalar equality proposition.

### not_equal_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_notequalassumption.53222f4ea310"></a>
`UniffiSession.notEqualAssumption(left: UniffiExpression, right: UniffiExpression): UniffiAssumptionProposition`

Build a defined scalar disequality proposition.

### less_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessassumption.b120efd3781c"></a>
`UniffiSession.lessAssumption(left: UniffiExpression, right: UniffiExpression): UniffiAssumptionProposition`

Build a strict extended-real order proposition.

### less_or_equal_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessorequalassumption.e19702516768"></a>
`UniffiSession.lessOrEqualAssumption(left: UniffiExpression, right: UniffiExpression): UniffiAssumptionProposition`

Build a non-strict extended-real order proposition.

### greater_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterassumption.0934e2f6220c"></a>
`UniffiSession.greaterAssumption(left: UniffiExpression, right: UniffiExpression): UniffiAssumptionProposition`

Build a strict extended-real order proposition by reversing its operands canonically.

### greater_or_equal_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterorequalassumption.aa096443f789"></a>
`UniffiSession.greaterOrEqualAssumption(left: UniffiExpression, right: UniffiExpression): UniffiAssumptionProposition`

Build a non-strict extended-real order proposition by reversing its operands canonically.

### member_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_memberassumption.fcd831635583"></a>
`UniffiSession.memberAssumption(element: UniffiExpression, setExpression: UniffiExpression): UniffiAssumptionProposition`

Build a scalar-membership proposition.

### congruent_assumption

<a id="placement-placement.kotlin.kotlin_object.uniffisession_congruentassumption.1bc8977545b3"></a>
`UniffiSession.congruentAssumption(left: UniffiExpression, right: UniffiExpression, modulus: UniffiExpression): UniffiAssumptionProposition`

Build an integer-congruence proposition with a positive integer modulus.

### assumption_equal

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_equal`](/symi/rust/assumptions#assumption_equal) in Rust.*

Construct an equality proposition over two scalar expressions.

### assumption_not_equal

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_not_equal`](/symi/rust/assumptions#assumption_not_equal) in Rust.*

Construct a disequality proposition over two scalar expressions.

### assumption_less

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_less`](/symi/rust/assumptions#assumption_less) in Rust.*

Construct a strict scalar-order proposition.

### assumption_less_or_equal

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_less_or_equal`](/symi/rust/assumptions#assumption_less_or_equal) in Rust.*

Construct a non-strict scalar-order proposition.

### assumption_greater

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_greater`](/symi/rust/assumptions#assumption_greater) in Rust.*

Construct a strict scalar-order proposition with reversed operands.

### assumption_greater_or_equal

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_greater_or_equal`](/symi/rust/assumptions#assumption_greater_or_equal) in Rust.*

Construct a non-strict scalar-order proposition with reversed operands.

### assumption_member

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_member`](/symi/rust/assumptions#assumption_member) in Rust.*

Construct a scalar-membership proposition.

### assumption_congruent

*Not exposed by the Kotlin bindings. Available as [`api::Session::assumption_congruent`](/symi/rust/assumptions#assumption_congruent) in Rust.*

Construct an integer congruence proposition.

### assumption_proposition_from_logical_expression

<a id="placement-placement.kotlin.kotlin_object.uniffisession_assumptionpropositionfromlogicalexpression.dfd4bd57ac05"></a>
`UniffiSession.assumptionPropositionFromLogicalExpression(logicalExpression: UniffiExpression): UniffiAssumptionProposition`

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

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_and.b12a51a23db7"></a>
`UniffiAssumptionProposition.and(other: UniffiAssumptionProposition): UniffiAssumptionProposition`

Conjoin two propositions and return a canonical proposition.

### or

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_or.a4ef418d5ce7"></a>
`UniffiAssumptionProposition.or(other: UniffiAssumptionProposition): UniffiAssumptionProposition`

Disjoin two propositions and return a canonical proposition.

### not

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_not.6096ddca54f8"></a>
`UniffiAssumptionProposition.not(): UniffiAssumptionProposition`

Negate a proposition and return a canonical proposition.

### relation_kind

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_relationkind.dd15a02321a3"></a>
`UniffiAssumptionProposition.relationKind(): kotlin.String?`

Return the canonical relation kind for a relation atom.

### left_operand

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_leftoperand.a689678e7cb4"></a>
`UniffiAssumptionProposition.leftOperand(): UniffiExpression?`

Return the left relation or congruence operand when present.

### right_operand

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_rightoperand.c15046bcdfa0"></a>
`UniffiAssumptionProposition.rightOperand(): UniffiExpression?`

Return the right relation or congruence operand when present.

### membership_element

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_membershipelement.d2cae5bdf127"></a>
`UniffiAssumptionProposition.membershipElement(): UniffiExpression?`

Return the membership element when present.

### membership_set

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_membershipset.db52eff1176f"></a>
`UniffiAssumptionProposition.membershipSet(): UniffiExpression?`

Return the membership set expression when present.

### congruence_modulus

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_congruencemodulus.09868a4eb6e4"></a>
`UniffiAssumptionProposition.congruenceModulus(): UniffiExpression?`

Return the congruence modulus when present.

### serialize

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_serialize.a3af76b8a9dd"></a>
`UniffiAssumptionProposition.serialize(): kotlin.String`

Serialize a proposition in the versioned canonical formula grammar.

### deserialize_assumption_proposition

<a id="placement-placement.kotlin.kotlin_object.uniffisession_deserializeassumptionproposition.87293b7248e4"></a>
`UniffiSession.deserializeAssumptionProposition(text: kotlin.String): UniffiAssumptionProposition`

Parse a versioned canonical assumption proposition in the receiving context.

## Durable contexts and scopes

### add_assumptions

<a id="placement-placement.kotlin.kotlin_object.uniffisession_addassumptions.e06095085ae6"></a>
`UniffiSession.addAssumptions(proposition: UniffiAssumptionProposition): Unit`

Atomically add a proposition to the durable assumption context. Contradictory
updates are rejected without changing the prior state.

### clear_all_assumptions

<a id="placement-placement.kotlin.kotlin_object.uniffisession_clearallassumptions.0da651cac38f"></a>
`UniffiSession.clearAllAssumptions(): Unit`

Clear both durable formulas and legacy symbol assumptions.

### ask

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_ask.f6eced6cea68"></a>
`UniffiAssumptionScope.ask(proposition: UniffiAssumptionProposition): UniffiTruthValue`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_ask.cc3a45acc77c"></a>
`UniffiSession.ask(proposition: UniffiAssumptionProposition): UniffiTruthValue`

Return whether a proposition is entailed by the current durable context.

### could_hold

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_couldhold.e8ae3cc27c45"></a>
`UniffiAssumptionScope.couldHold(proposition: UniffiAssumptionProposition): UniffiTruthValue`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_couldhold.f1d94be3bf3d"></a>
`UniffiSession.couldHold(proposition: UniffiAssumptionProposition): UniffiTruthValue`

Return whether the current durable context is compatible with a proposition.

### assuming

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_assuming.62e94472ff48"></a>
`UniffiAssumptionScope.assuming(proposition: UniffiAssumptionProposition): UniffiAssumptionScope`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_assuming.557c66dfdd45"></a>
`UniffiSession.assuming(proposition: UniffiAssumptionProposition): UniffiAssumptionScope`

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

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_refine.dfa41383ebbe"></a>
`UniffiAssumptionScope.refine(target: UniffiExpression): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_refine.c0b6b4ed7fa1"></a>
`UniffiExpression.refine(assumptions: UniffiAssumptionProposition?): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_refine.faa563524dc6"></a>
`UniffiSession.refine(target: UniffiExpression, assumptions: UniffiAssumptionProposition?): UniffiExpression`

Simplify an expression using durable assumptions or one checked local proposition.
