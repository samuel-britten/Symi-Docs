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

<a id="entry-presentation_kotlin_assumptions_capability_algebra_add_assumptions_api_session_add_assumptions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_addassumptions.e06095085ae6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun addAssumptions(proposition: UniffiAssumptionProposition): Unit
```

Provides the `add_assumptions` operation on this mobile object.

### algebraic_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_algebraic_assumption_api_session_algebraic_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_algebraicassumption.8894f9b38716"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun algebraicAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `algebraic_assumption` operation on this mobile object.

### and

<a id="entry-presentation_kotlin_assumptions_capability_algebra_and_api_assumptionproposition_and"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_and.b12a51a23db7"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun and(other: UniffiAssumptionProposition): UniffiAssumptionProposition
```

Provides the `and` operation on this mobile object.

### ask

<a id="entry-presentation_kotlin_assumptions_capability_algebra_ask_api_session_ask"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_ask.cc3a45acc77c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ask(proposition: UniffiAssumptionProposition): UniffiTruthValue
```

Provides the `ask` operation on this mobile object.

### ask

<a id="entry-presentation_kotlin_assumptions_capability_algebra_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_ask.f6eced6cea68"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```kotlin signature
fun ask(proposition: UniffiAssumptionProposition): UniffiTruthValue
```

Provides the `ask` operation on this mobile object.

### assuming

<a id="entry-presentation_kotlin_assumptions_capability_algebra_assuming_api_session_assuming"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_assuming.557c66dfdd45"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun assuming(proposition: UniffiAssumptionProposition): UniffiAssumptionScope
```

Provides the `assuming` operation on this mobile object.

### assuming

<a id="entry-presentation_kotlin_assumptions_capability_algebra_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_assuming.62e94472ff48"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```kotlin signature
fun assuming(proposition: UniffiAssumptionProposition): UniffiAssumptionScope
```

Provides the `assuming` operation on this mobile object.

### assumption_proposition_from_logical_expression

<a id="entry-presentation_kotlin_assumptions_capability_algebra_assumption_proposition_from_logical_expression_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_assumptionpropositionfromlogicalexpression.dfd4bd57ac05"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun assumptionPropositionFromLogicalExpression(logicalExpression: UniffiExpression): UniffiAssumptionProposition
```

Provides the `assumption_proposition_from_logical_expression` operation on this mobile object.

### clear_all_assumptions

<a id="entry-presentation_kotlin_assumptions_capability_algebra_clear_all_assumptions_api_session_clear_all_assumptions"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_clearallassumptions.0da651cac38f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun clearAllAssumptions(): Unit
```

Provides the `clear_all_assumptions` operation on this mobile object.

### complex_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_complex_assumption_api_session_complex_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_complexassumption.b9f31c2741e0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun complexAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `complex_assumption` operation on this mobile object.

### composite_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_composite_assumption_api_session_composite_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_compositeassumption.04267cbb5fbd"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun compositeAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `composite_assumption` operation on this mobile object.

### congruence_modulus

<a id="entry-presentation_kotlin_assumptions_capability_algebra_congruence_modulus_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_congruencemodulus.09868a4eb6e4"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun congruenceModulus(): UniffiExpression?
```

Provides the `congruence_modulus` operation on this mobile object.

### congruent_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_congruent_assumption_api_defaults_session_congruent_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_congruentassumption.1bc8977545b3"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun congruentAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
    modulus: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `congruent_assumption` operation on this mobile object.

### could_hold

<a id="entry-presentation_kotlin_assumptions_capability_algebra_could_hold_api_session_could_hold"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_couldhold.f1d94be3bf3d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun couldHold(proposition: UniffiAssumptionProposition): UniffiTruthValue
```

Provides the `could_hold` operation on this mobile object.

### could_hold

<a id="entry-presentation_kotlin_assumptions_capability_algebra_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_couldhold.e8ae3cc27c45"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```kotlin signature
fun couldHold(proposition: UniffiAssumptionProposition): UniffiTruthValue
```

Provides the `could_hold` operation on this mobile object.

### defined_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_defined_assumption_api_session_defined_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_definedassumption.58a6052e981f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun definedAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `defined_assumption` operation on this mobile object.

### deserialize_assumption_proposition

<a id="entry-presentation_kotlin_assumptions_capability_algebra_deserialize_assumption_proposition_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_deserializeassumptionproposition.87293b7248e4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun deserializeAssumptionProposition(text: kotlin.String): UniffiAssumptionProposition
```

Provides the `deserialize_assumption_proposition` operation on this mobile object.

### equal_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_equal_assumption_api_defaults_session_equal_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_equalassumption.78d603642355"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun equalAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `equal_assumption` operation on this mobile object.

### even_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_even_assumption_api_session_even_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_evenassumption.cdee02670250"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun evenAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `even_assumption` operation on this mobile object.

### extended_real_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_extended_real_assumption_api_session_extended_real_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_extendedrealassumption.8d2a33c93883"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun extendedRealAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `extended_real_assumption` operation on this mobile object.

### finite_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_finite_assumption_api_session_finite_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_finiteassumption.530fa318467c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun finiteAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `finite_assumption` operation on this mobile object.

### greater_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_greater_assumption_api_defaults_session_greater_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterassumption.0934e2f6220c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun greaterAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `greater_assumption` operation on this mobile object.

### greater_or_equal_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_greater_or_equal_assumption_api_defaults_session_greater_or_equal_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_greaterorequalassumption.aa096443f789"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun greaterOrEqualAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `greater_or_equal_assumption` operation on this mobile object.

### infinite_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_infinite_assumption_api_session_infinite_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_infiniteassumption.1c4d539dae09"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun infiniteAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `infinite_assumption` operation on this mobile object.

### integer_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_integer_assumption_api_session_integer_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_integerassumption.9dbeb4ec970c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun integerAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `integer_assumption` operation on this mobile object.

### irrational_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_irrational_assumption_api_session_irrational_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_irrationalassumption.ea23fee2abfa"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun irrationalAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `irrational_assumption` operation on this mobile object.

### left_operand

<a id="entry-presentation_kotlin_assumptions_capability_algebra_left_operand_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_leftoperand.a689678e7cb4"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun leftOperand(): UniffiExpression?
```

Provides the `left_operand` operation on this mobile object.

### less_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_less_assumption_api_defaults_session_less_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessassumption.b120efd3781c"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lessAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `less_assumption` operation on this mobile object.

### less_or_equal_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_less_or_equal_assumption_api_defaults_session_less_or_equal_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_lessorequalassumption.e19702516768"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun lessOrEqualAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `less_or_equal_assumption` operation on this mobile object.

### member_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_member_assumption_api_defaults_session_member_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_memberassumption.fcd831635583"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun memberAssumption(
    element: UniffiExpression,
    setExpression: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `member_assumption` operation on this mobile object.

### membership_element

<a id="entry-presentation_kotlin_assumptions_capability_algebra_membership_element_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_membershipelement.d2cae5bdf127"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun membershipElement(): UniffiExpression?
```

Provides the `membership_element` operation on this mobile object.

### membership_set

<a id="entry-presentation_kotlin_assumptions_capability_algebra_membership_set_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_membershipset.db52eff1176f"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun membershipSet(): UniffiExpression?
```

Provides the `membership_set` operation on this mobile object.

### natural_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_natural_assumption_api_session_natural_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_naturalassumption.8806fa8d14d6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun naturalAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `natural_assumption` operation on this mobile object.

### negative_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_negative_assumption_api_session_negative_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_negativeassumption.bac5dba6317a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun negativeAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `negative_assumption` operation on this mobile object.

### nonzero_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_nonzero_assumption_api_session_nonzero_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_nonzeroassumption.f1c537faeff4"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun nonzeroAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `nonzero_assumption` operation on this mobile object.

### not

<a id="entry-presentation_kotlin_assumptions_capability_algebra_not_api_assumptionproposition_not"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_not.6096ddca54f8"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun not(): UniffiAssumptionProposition
```

Provides the `not` operation on this mobile object.

### not_equal_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_not_equal_assumption_api_defaults_session_not_equal_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_notequalassumption.53222f4ea310"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun notEqualAssumption(
    left: UniffiExpression,
    right: UniffiExpression,
): UniffiAssumptionProposition
```

Provides the `not_equal_assumption` operation on this mobile object.

### odd_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_odd_assumption_api_session_odd_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_oddassumption.b6b91e938c8f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun oddAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `odd_assumption` operation on this mobile object.

### or

<a id="entry-presentation_kotlin_assumptions_capability_algebra_or_api_assumptionproposition_or"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_or.a4ef418d5ce7"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun or(other: UniffiAssumptionProposition): UniffiAssumptionProposition
```

Provides the `or` operation on this mobile object.

### positive_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_positive_assumption_api_session_positive_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_positiveassumption.be2804a7bdd5"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun positiveAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `positive_assumption` operation on this mobile object.

### positive_integer_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_positive_integer_assumption_api_session_positive_integer_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_positiveintegerassumption.0d3f6dfede0b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun positiveIntegerAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `positive_integer_assumption` operation on this mobile object.

### prime_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_prime_assumption_api_session_prime_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_primeassumption.640a68dfff0b"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun primeAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `prime_assumption` operation on this mobile object.

### rational_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_rational_assumption_api_session_rational_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_rationalassumption.05affb3bd236"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun rationalAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `rational_assumption` operation on this mobile object.

### real_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_real_assumption_api_session_real_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_realassumption.5a55a15f41d9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun realAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `real_assumption` operation on this mobile object.

### refine

<a id="entry-presentation_kotlin_assumptions_capability_algebra_refine_api_session_refine"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_refine.faa563524dc6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun refine(
    target: UniffiExpression,
    assumptions: UniffiAssumptionProposition?,
): UniffiExpression
```

Provides the `refine` operation on this mobile object.

### refine

<a id="entry-presentation_kotlin_assumptions_capability_algebra_refine_api_expression_refine"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_refine.c0b6b4ed7fa1"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun refine(assumptions: UniffiAssumptionProposition?): UniffiExpression
```

Provides the `refine` operation on this mobile object.

### refine

<a id="entry-presentation_kotlin_assumptions_capability_algebra_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_refine.dfa41383ebbe"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```kotlin signature
fun refine(target: UniffiExpression): UniffiExpression
```

Provides the `refine` operation on this mobile object.

### relation_kind

<a id="entry-presentation_kotlin_assumptions_capability_algebra_relation_kind_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_relationkind.dd15a02321a3"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun relationKind(): kotlin.String?
```

Provides the `relation_kind` operation on this mobile object.

### right_operand

<a id="entry-presentation_kotlin_assumptions_capability_algebra_right_operand_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_rightoperand.c15046bcdfa0"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun rightOperand(): UniffiExpression?
```

Provides the `right_operand` operation on this mobile object.

### serialize

<a id="entry-presentation_kotlin_assumptions_capability_algebra_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionproposition_serialize.a3af76b8a9dd"></a>
<p class="symi-entry-owner">UniffiAssumptionProposition method</p>

```kotlin signature
fun serialize(): kotlin.String
```

Provides the `serialize` operation on this mobile object.

### transcendental_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_transcendental_assumption_api_session_transcendental_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_transcendentalassumption.a92b95243c58"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun transcendentalAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `transcendental_assumption` operation on this mobile object.

### zero_assumption

<a id="entry-presentation_kotlin_assumptions_capability_algebra_zero_assumption_api_session_zero_assumption"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_zeroassumption.fb404fcc9e36"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun zeroAssumption(subject: UniffiExpression): UniffiAssumptionProposition
```

Provides the `zero_assumption` operation on this mobile object.

