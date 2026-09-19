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

<a id="entry-presentation_python_assumptions_capability_contexts_add_assumptions_api_session_add_assumptions"></a>
<a id="placement-placement.python.python_module.module_add_assumptions.5534bc9705a0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
add_assumptions(proposition: Any) -> None
```

Add a proposition to the default context's durable assumption store.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_add_assumptions.3c5c1e06a162"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.add_assumptions</code></p>

```python signature
add_assumptions(proposition: Any) -> None
```

</details>

### algebraic_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_algebraic_assumption_api_session_algebraic_assumption"></a>
<a id="placement-placement.python.python_module.module_algebraic_assumption.3e42ce87f0c8"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
algebraic_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an algebraicity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_algebraic_assumption.6668f28bbcab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.algebraic_assumption</code></p>

```python signature
algebraic_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### and

<a id="entry-presentation_python_assumptions_capability_contexts_and_api_assumptionproposition_and"></a>
<a id="placement-placement.python.python_class.assumptionproposition_and.6f0fb9535ca0"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```python signature
and(other)
```

Conjoin two propositions.

### ask

<a id="entry-presentation_python_assumptions_capability_contexts_ask_api_assumptionscope_ask"></a>
<a id="placement-placement.python.python_class.assumptionscope_ask.8b509b1e4374"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
ask(proposition: Any) -> Optional[bool]
```

Ask a proposition against the immutable scope snapshot.

### ask

<a id="entry-presentation_python_assumptions_capability_contexts_ask_api_session_ask"></a>
<a id="placement-placement.python.python_module.module_ask.46448bddac9d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
ask(proposition: Any) -> Optional[bool]
```

Ask whether a proposition is entailed by the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_ask.5e7d1d8a46a1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ask</code></p>

```python signature
ask(proposition: Any) -> Optional[bool]
```

</details>

### assuming

<a id="entry-presentation_python_assumptions_capability_contexts_assuming_api_assumptionscope_assuming"></a>
<a id="placement-placement.python.python_class.assumptionscope_assuming.8472ace80b00"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
assuming(proposition: Any) -> AssumptionScope
```

Compose a further immutable overlay.

### assuming

<a id="entry-presentation_python_assumptions_capability_contexts_assuming_api_session_assuming"></a>
<a id="placement-placement.python.python_module.module_assuming.d8dc7c25ca26"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
assuming(proposition: Any) -> AssumptionScope
```

Create an immutable local assumption scope in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_assuming.428587b6ed47"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assuming</code></p>

```python signature
assuming(proposition: Any) -> AssumptionScope
```

</details>

### assumption_proposition_from_logical_expression

<a id="entry-presentation_python_assumptions_capability_contexts_assumption_proposition_from_logical_expression_api_session_assumption_proposition_from_logical_expression"></a>
<a id="placement-placement.python.python_module.module_assumption_proposition_from_logical_expression.75701bde4184"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
assumption_proposition_from_logical_expression(logical_expression: ExpressionLike) -> AssumptionProposition
```

Convert a supported logical expression to a typed assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_assumption_proposition_from_logical_expression.6bb099358e64"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.assumption_proposition_from_logical_expression</code></p>

```python signature
assumption_proposition_from_logical_expression(logical_expression: ExpressionLike) -> AssumptionProposition
```

</details>

### clear_all_assumptions

<a id="entry-presentation_python_assumptions_capability_contexts_clear_all_assumptions_api_session_clear_all_assumptions"></a>
<a id="placement-placement.python.python_module.module_clear_all_assumptions.118de91197c2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
clear_all_assumptions() -> None
```

Clear all assumptions in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_clear_all_assumptions.f74c63d49ce3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.clear_all_assumptions</code></p>

```python signature
clear_all_assumptions() -> None
```

</details>

### complex_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_complex_assumption_api_session_complex_assumption"></a>
<a id="placement-placement.python.python_module.module_complex_assumption.5e420f8c1172"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
complex_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a finite-complex assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_complex_assumption.83b9529b0377"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.complex_assumption</code></p>

```python signature
complex_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### composite_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_composite_assumption_api_session_composite_assumption"></a>
<a id="placement-placement.python.python_module.module_composite_assumption.30dbacb9ae11"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
composite_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a compositeness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_composite_assumption.aebcd0430cc3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.composite_assumption</code></p>

```python signature
composite_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### congruence_modulus

<a id="entry-presentation_python_assumptions_capability_contexts_congruence_modulus_api_assumptionproposition_congruence_modulus"></a>
<a id="placement-placement.python.python_module.module_congruence_modulus.0d5d260ad39c"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
congruence_modulus(proposition: Any) -> Optional[Expression]
```

Return the congruence modulus when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_congruence_modulus.5c6a48aa27a2"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.congruence_modulus</code></p>

```python signature
congruence_modulus() -> Optional[Expression]
```

</details>

### congruent_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_congruent_assumption_api_defaults_session_congruent_assumption"></a>
<a id="placement-placement.python.python_module.module_congruent_assumption.c97dfd2fafe9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
congruent_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
    modulus: ExpressionLike,
) -> AssumptionProposition
```

Build an integer-congruence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_congruent_assumption.2b5d2841f8f7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.congruent_assumption</code></p>

```python signature
congruent_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
    modulus: ExpressionLike,
) -> AssumptionProposition
```

</details>

### could_hold

<a id="entry-presentation_python_assumptions_capability_contexts_could_hold_api_assumptionscope_could_hold"></a>
<a id="placement-placement.python.python_class.assumptionscope_could_hold.79ec09546b09"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
could_hold(proposition: Any) -> Optional[bool]
```

Ask whether a proposition is compatible with the immutable scope snapshot.

### could_hold

<a id="entry-presentation_python_assumptions_capability_contexts_could_hold_api_session_could_hold"></a>
<a id="placement-placement.python.python_module.module_could_hold.7a7a59f32b15"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
could_hold(proposition: Any) -> Optional[bool]
```

Ask whether a proposition is compatible with the default context's assumptions.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_could_hold.e4f6b1a8f31f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.could_hold</code></p>

```python signature
could_hold(proposition: Any) -> Optional[bool]
```

</details>

### defined_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_defined_assumption_api_session_defined_assumption"></a>
<a id="placement-placement.python.python_module.module_defined_assumption.c4e03a95c53d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
defined_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a pointwise definedness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_defined_assumption.11fa043594f7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.defined_assumption</code></p>

```python signature
defined_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### deserialize_assumption_proposition

<a id="entry-presentation_python_assumptions_capability_contexts_deserialize_assumption_proposition_api_session_deserialize_assumption_proposition"></a>
<a id="placement-placement.python.python_module.module_deserialize_assumption_proposition.ef24a2ce4ba6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
deserialize_assumption_proposition(text: str) -> AssumptionProposition
```

Parse a versioned canonical assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_deserialize_assumption_proposition.e74c9fe0297b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.deserialize_assumption_proposition</code></p>

```python signature
deserialize_assumption_proposition(text: str) -> AssumptionProposition
```

</details>

### equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_equal_assumption_api_defaults_session_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_equal_assumption.167e0c4b07ea"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build an equality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_equal_assumption.c01ebdd8014d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.equal_assumption</code></p>

```python signature
equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

### even_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_even_assumption_api_session_even_assumption"></a>
<a id="placement-placement.python.python_module.module_even_assumption.0344d2eb9537"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
even_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an evenness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_even_assumption.12ea745ce233"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.even_assumption</code></p>

```python signature
even_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### extended_real_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_extended_real_assumption_api_session_extended_real_assumption"></a>
<a id="placement-placement.python.python_module.module_extended_real_assumption.1e226df989bd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
extended_real_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an extended-real assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_extended_real_assumption.07eea67a7a45"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.extended_real_assumption</code></p>

```python signature
extended_real_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### finite_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_finite_assumption_api_session_finite_assumption"></a>
<a id="placement-placement.python.python_module.module_finite_assumption.ff3558f6b171"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
finite_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a finiteness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_finite_assumption.81e9cb0c27c6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.finite_assumption</code></p>

```python signature
finite_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### greater_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_greater_assumption_api_defaults_session_greater_assumption"></a>
<a id="placement-placement.python.python_module.module_greater_assumption.1ba0f7d7ae7d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_assumption.1cc4159f5617"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_assumption</code></p>

```python signature
greater_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

### greater_or_equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_greater_or_equal_assumption_api_defaults_session_greater_or_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_greater_or_equal_assumption.26650392c272"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
greater_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a non-strict scalar-order assumption proposition with reversed operands in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_greater_or_equal_assumption.3917a98caf90"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.greater_or_equal_assumption</code></p>

```python signature
greater_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

### infinite_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_infinite_assumption_api_session_infinite_assumption"></a>
<a id="placement-placement.python.python_module.module_infinite_assumption.cbda15e8b727"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
infinite_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an infinity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_infinite_assumption.2d77e250a82b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.infinite_assumption</code></p>

```python signature
infinite_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### integer_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_integer_assumption_api_session_integer_assumption"></a>
<a id="placement-placement.python.python_module.module_integer_assumption.f185036b04c6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
integer_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_integer_assumption.85a64395b991"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.integer_assumption</code></p>

```python signature
integer_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### irrational_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_irrational_assumption_api_session_irrational_assumption"></a>
<a id="placement-placement.python.python_module.module_irrational_assumption.3e0ac49ac535"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
irrational_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an irrationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_irrational_assumption.66f194e38ebe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.irrational_assumption</code></p>

```python signature
irrational_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### left_operand

<a id="entry-presentation_python_assumptions_capability_contexts_left_operand_api_assumptionproposition_left_operand"></a>
<a id="placement-placement.python.python_module.module_left_operand.4e66dcfbd33f"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
left_operand(proposition: Any) -> Optional[Expression]
```

Return the left relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_left_operand.cee13cef016d"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.left_operand</code></p>

```python signature
left_operand() -> Optional[Expression]
```

</details>

### less_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_less_assumption_api_defaults_session_less_assumption"></a>
<a id="placement-placement.python.python_module.module_less_assumption.dedb60ca39a9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_assumption.119dbf671dc9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_assumption</code></p>

```python signature
less_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

### less_or_equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_less_or_equal_assumption_api_defaults_session_less_or_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_less_or_equal_assumption.e524819ec09a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
less_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a non-strict scalar-order assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_less_or_equal_assumption.ad44558346d3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.less_or_equal_assumption</code></p>

```python signature
less_or_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

### member_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_member_assumption_api_defaults_session_member_assumption"></a>
<a id="placement-placement.python.python_module.module_member_assumption.a60e8dee72bc"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
member_assumption(
    element: ExpressionLike,
    set_expression: ExpressionLike,
) -> AssumptionProposition
```

Build a scalar-membership assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_member_assumption.70329535155f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.member_assumption</code></p>

```python signature
member_assumption(
    element: ExpressionLike,
    set_expression: ExpressionLike,
) -> AssumptionProposition
```

</details>

### membership_element

<a id="entry-presentation_python_assumptions_capability_contexts_membership_element_api_assumptionproposition_membership_element"></a>
<a id="placement-placement.python.python_module.module_membership_element.eefd24abb000"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
membership_element(proposition: Any) -> Optional[Expression]
```

Return the membership element when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_membership_element.af61b3a44cd8"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membership_element</code></p>

```python signature
membership_element() -> Optional[Expression]
```

</details>

### membership_set

<a id="entry-presentation_python_assumptions_capability_contexts_membership_set_api_assumptionproposition_membership_set"></a>
<a id="placement-placement.python.python_module.module_membership_set.a1132ccbd58a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
membership_set(proposition: Any) -> Optional[Expression]
```

Return the membership set expression when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_membership_set.86537461a6a8"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.membership_set</code></p>

```python signature
membership_set() -> Optional[Expression]
```

</details>

### natural_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_natural_assumption_api_session_natural_assumption"></a>
<a id="placement-placement.python.python_module.module_natural_assumption.c1a9825dc555"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
natural_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a natural-number assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_natural_assumption.8a2217ce89fb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.natural_assumption</code></p>

```python signature
natural_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### negative_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_negative_assumption_api_session_negative_assumption"></a>
<a id="placement-placement.python.python_module.module_negative_assumption.c1ee3fb881dd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
negative_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a strict-negativity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_negative_assumption.ee80216da503"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.negative_assumption</code></p>

```python signature
negative_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### nonzero_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_nonzero_assumption_api_session_nonzero_assumption"></a>
<a id="placement-placement.python.python_module.module_nonzero_assumption.8b80885792a9"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
nonzero_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a nonzero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_nonzero_assumption.d99730d01532"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.nonzero_assumption</code></p>

```python signature
nonzero_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### not

<a id="entry-presentation_python_assumptions_capability_contexts_not_api_assumptionproposition_not"></a>
<a id="placement-placement.python.python_class.assumptionproposition_not.045676b20152"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```python signature
not()
```

Negate a proposition.

### not_equal_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_not_equal_assumption_api_defaults_session_not_equal_assumption"></a>
<a id="placement-placement.python.python_module.module_not_equal_assumption.78a9f583401a"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
not_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

Build a disequality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_not_equal_assumption.2f875ce168e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.not_equal_assumption</code></p>

```python signature
not_equal_assumption(
    left: ExpressionLike,
    right: ExpressionLike,
) -> AssumptionProposition
```

</details>

### odd_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_odd_assumption_api_session_odd_assumption"></a>
<a id="placement-placement.python.python_module.module_odd_assumption.7248f3f6e827"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
odd_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build an oddness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_odd_assumption.d9cf44c4ac2d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.odd_assumption</code></p>

```python signature
odd_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### or

<a id="entry-presentation_python_assumptions_capability_contexts_or_api_assumptionproposition_or"></a>
<a id="placement-placement.python.python_class.assumptionproposition_or.de6031767101"></a>
<p class="symi-entry-owner">AssumptionProposition method</p>

```python signature
or(other)
```

Disjoin two propositions.

### positive_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_positive_assumption_api_session_positive_assumption"></a>
<a id="placement-placement.python.python_module.module_positive_assumption.74db6e80f453"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a strict-positivity assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_assumption.e0bc55b6fd65"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_assumption</code></p>

```python signature
positive_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### positive_integer_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_positive_integer_assumption_api_session_positive_integer_assumption"></a>
<a id="placement-placement.python.python_module.module_positive_integer_assumption.e64875fe5bab"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
positive_integer_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a positive-integer assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_positive_integer_assumption.b4f90bffcfa8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.positive_integer_assumption</code></p>

```python signature
positive_integer_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### prime_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_prime_assumption_api_session_prime_assumption"></a>
<a id="placement-placement.python.python_module.module_prime_assumption.f13a223f22ed"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
prime_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a primality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_prime_assumption.86c9cf48fa82"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.prime_assumption</code></p>

```python signature
prime_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### rational_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_rational_assumption_api_session_rational_assumption"></a>
<a id="placement-placement.python.python_module.module_rational_assumption.260550d8ea71"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
rational_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a rationality assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_rational_assumption.c917db27f8ab"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.rational_assumption</code></p>

```python signature
rational_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### real_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_real_assumption_api_session_real_assumption"></a>
<a id="placement-placement.python.python_module.module_real_assumption.fc6de2b878b6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
real_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a realness assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_real_assumption.5548ec725f23"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.real_assumption</code></p>

```python signature
real_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### refine

<a id="entry-presentation_python_assumptions_capability_contexts_refine_api_assumptionscope_refine"></a>
<a id="placement-placement.python.python_class.assumptionscope_refine.36067d324ccf"></a>
<p class="symi-entry-owner">AssumptionScope method</p>

```python signature
refine(input_expression: ExpressionLike) -> Expression
```

Refine an expression against this immutable local assumption scope.

### refine

<a id="entry-presentation_python_assumptions_capability_contexts_refine_api_session_refine"></a>
<a id="placement-placement.python.python_module.module_refine.071351212302"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
refine(
    input_expression: ExpressionLike,
    assumptions: Optional[Any] = None,
) -> Expression
```

Refine an expression using durable assumptions or one checked local proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_refine.76378dcfe8ec"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.refine</code></p>

```python signature
refine(
    input_expression: ExpressionLike,
    assumptions: Optional[Any] = None,
) -> Expression
```

</details>

### refine

<a id="entry-presentation_python_assumptions_capability_contexts_refine_api_expression_refine"></a>
<a id="placement-placement.python.python_class.expression_refine.ce9953b90828"></a>
<p class="symi-entry-owner">Expression method</p>

```python signature
refine(assumptions: Optional[Any] = None) -> Expression
```

Refine this expression using durable assumptions or one checked local proposition.

### relation_kind

<a id="entry-presentation_python_assumptions_capability_contexts_relation_kind_api_assumptionproposition_relation_kind"></a>
<a id="placement-placement.python.python_module.module_relation_kind.632a4e37f4c7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
relation_kind(proposition: Any) -> Optional[str]
```

Return the canonical relation kind for an assumption proposition.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_relation_kind.f8984b08a241"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.relation_kind</code></p>

```python signature
relation_kind() -> Optional[str]
```

</details>

### right_operand

<a id="entry-presentation_python_assumptions_capability_contexts_right_operand_api_assumptionproposition_right_operand"></a>
<a id="placement-placement.python.python_module.module_right_operand.a6ef7e813657"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
right_operand(proposition: Any) -> Optional[Expression]
```

Return the right relation or congruence operand when present.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_right_operand.bc39fbcb538e"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.right_operand</code></p>

```python signature
right_operand() -> Optional[Expression]
```

</details>

### serialize

<a id="entry-presentation_python_assumptions_capability_contexts_serialize_api_assumptionproposition_serialize"></a>
<a id="placement-placement.python.python_module.module_serialize.f5b62eedbe49"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
serialize(proposition: Any) -> str
```

Serialize an assumption proposition in the versioned canonical grammar.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.assumptionproposition_serialize.4c8a55f22281"></a>
<p class="symi-entry-owner">AssumptionProposition method: <code>AssumptionProposition.serialize</code></p>

```python signature
serialize() -> str
```

</details>

### transcendental_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_transcendental_assumption_api_session_transcendental_assumption"></a>
<a id="placement-placement.python.python_module.module_transcendental_assumption.f93ee0ffe954"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
transcendental_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a transcendence assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_transcendental_assumption.f04ad245af9e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.transcendental_assumption</code></p>

```python signature
transcendental_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

### zero_assumption

<a id="entry-presentation_python_assumptions_capability_contexts_zero_assumption_api_session_zero_assumption"></a>
<a id="placement-placement.python.python_module.module_zero_assumption.3f481767b689"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
zero_assumption(input_expression: ExpressionLike) -> AssumptionProposition
```

Build a zero assumption proposition in the default context.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_zero_assumption.2beb552c0ca5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.zero_assumption</code></p>

```python signature
zero_assumption(subject: ExpressionLike) -> AssumptionProposition
```

</details>

