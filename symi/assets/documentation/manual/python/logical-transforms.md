# Logical transforms

Logical normal forms and Boolean simplification operate on symbolic relations.
They do not coerce an unknown proposition into a host Boolean.

These transforms treat syntactically distinct atoms as independent Boolean
variables; they do not reason about relations *among* atoms, which is
constraint satisfaction. Every transform is logically equivalent to its input
by construction. The connectives, constants, and the three-valued host query
are described in [Boolean algebra and logic](logic.md).

## Normal forms and Boolean simplification

### disjunctive_normal_form

<a id="entry-presentation_python_api_session_disjunctive_normal_form"></a>
<a id="placement-placement.python.python_module.module_disjunctive_normal_form.fdced179b826"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
disjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_disjunctive_normal_form.84e7ccb90232"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.disjunctive_normal_form</code></p>

```python signature
disjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_disjunctive_normal_form.f2c63596196e"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.disjunctive_normal_form</code></p>

```python signature
disjunctive_normal_form() -> Expression
```

</details>


Rewrite a propositional formula into a reduced disjunctive normal form (an
OR of AND-terms over literals): derived connectives are eliminated,
negations are pushed to the atoms, the formula is distributed, and
contradictory, duplicate, and subsumed terms are dropped.

### conjunctive_normal_form

<a id="entry-presentation_python_api_session_conjunctive_normal_form"></a>
<a id="placement-placement.python.python_module.module_conjunctive_normal_form.f4432ad40575"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
conjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_conjunctive_normal_form.2c1714cc1f76"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conjunctive_normal_form</code></p>

```python signature
conjunctive_normal_form(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_conjunctive_normal_form.f887d3e3aba7"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.conjunctive_normal_form</code></p>

```python signature
conjunctive_normal_form() -> Expression
```

</details>


The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an
AND of OR-clauses over literals).

### minimize_logical

<a id="entry-presentation_python_api_session_minimize_logical"></a>
<a id="placement-placement.python.python_module.module_minimize_logical.6aa7301c62f6"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
minimize_logical(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_minimize_logical.922db5217a78"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.minimize_logical</code></p>

```python signature
minimize_logical(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_minimize_logical.b25a9a94bc0a"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.minimize_logical</code></p>

```python signature
minimize_logical() -> Expression
```

</details>


The smaller of the minimum sum-of-products and product-of-sums two-level
forms. Within a practical atom bound this is the exact Quine–McCluskey
minimum (prime implicants, essential extraction, and Petrick's method on the
residual chart); above it, an Espresso-style heuristic returns a good — not
provably minimal — cover.

### simplify_logical

<a id="entry-presentation_python_api_session_simplify_logical"></a>
<a id="placement-placement.python.python_module.module_simplify_logical.106a43a65d64"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
simplify_logical(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_simplify_logical.33bcfe6e72e2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.simplify_logical</code></p>

```python signature
simplify_logical(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_simplify_logical.b7532204a234"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.simplify_logical</code></p>

```python signature
simplify_logical() -> Expression
```

</details>


Return whichever of the original form, the disjunctive and conjunctive
normal forms, and the two minimal two-level forms has the smallest weighted
size.

## Directed basis conversion

`simplify_logical`, `minimize_logical`, and the two normal forms all answer a
*cost* question. The two transforms below answer a *presentation* question
instead: they convert between the derived connectives and the and/or/not basis
in a fixed direction, whatever that does to the size of the formula. They are
deliberately separate operations — `simplify_logical` is not changed to invoke
either of them, and neither performs hidden normal-form work.

### eliminate_derived_logical_connectives

<a id="entry-presentation_python_api_session_eliminate_derived_logical_connectives"></a>
<a id="placement-placement.python.python_module.module_eliminate_derived_logical_connectives.c9c77eaa3fb7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
eliminate_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_eliminate_derived_logical_connectives.ec9eb455b7d3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.eliminate_derived_logical_connectives</code></p>

```python signature
eliminate_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_eliminate_derived_logical_connectives.05b5e44aa2e4"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.eliminate_derived_logical_connectives</code></p>

```python signature
eliminate_derived_logical_connectives() -> Expression
```

</details>


Rewrite every `implies`, `equivalent`, and `exclusive_or` occurrence in a
propositional formula into the `logical_and` / `logical_or` / `logical_not`
basis. The result is propositionally equivalent to the input for every
assignment of its atoms, and carries no derived connective.

The defining identities are

```text
implies(a, b)      = logical_or(logical_not(a), b)
equivalent(a, b)   = logical_or(logical_and(a, b),
                                logical_and(logical_not(a), logical_not(b)))
exclusive_or(a, b) = logical_or(logical_and(a, logical_not(b)),
                                logical_and(logical_not(a), b))
```

Symi's `equivalent` and `exclusive_or` are n-ary, and the conversion
preserves those semantics exactly. `equivalent(a, b, c, ...)` is the all-equal
predicate — true exactly when every operand has the same truth value — so it
becomes "all operands true, or all operands false", which stays linear in the
operand count. `exclusive_or(a, b, c, ...)` is odd parity, and is expanded by
splitting the operand list into balanced halves, which keeps the edge-expanded
result quadratic rather than exponential in the operand count.

Because the direction is fixed, the result may be **larger** than the input.
That is the contract: `implies(a, b)` has three nodes and its and/or/not form
has four, and this operation returns the four-node form where
`simplify_logical` correctly keeps the three-node one.

Every non-connective leaf is an opaque atom. A relation such as `x^2 < y` is
carried across untouched, never rewritten arithmetically, and a connective call
whose arity the grammar does not admit is likewise preserved exactly rather
than being given an invented interpretation.

The operation is bounded by fixed, deterministic ceilings on input size,
nesting depth, derived-connective count, and expanded output size — not by a
wall clock, so native and WebAssembly admit exactly the same formulas. Refusal
is atomic: a formula whose conversion would cross a ceiling comes back
unchanged, and no partially converted tree is ever returned. A formula that is
already in the basis also comes back unchanged.

```python
import symi

formula = symi.parse("implies(logical_and(w, x), logical_and(y, z))")
symi.eliminate_derived_logical_connectives(formula)
# logical_or(logical_and(y, z), logical_not(logical_and(w, x)))
```



### introduce_derived_logical_connectives

<a id="entry-presentation_python_api_session_introduce_derived_logical_connectives"></a>
<a id="placement-placement.python.python_module.module_introduce_derived_logical_connectives.f87b90e17341"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
introduce_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_introduce_derived_logical_connectives.11e2a6a6022f"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.introduce_derived_logical_connectives</code></p>

```python signature
introduce_derived_logical_connectives(input_expression: ExpressionLike) -> Expression
```

<a id="placement-placement.python.python_class.expression_introduce_derived_logical_connectives.8f28ec501589"></a>
<p class="symi-entry-owner">Expression method: <code>Expression.introduce_derived_logical_connectives</code></p>

```python signature
introduce_derived_logical_connectives() -> Expression
```

</details>


The inverse presentation direction. Recognise the exact canonical definitions
of implication, equivalence, and exclusive-or inside an and/or/not formula and
replace each match with the corresponding derived connective, but only where
the replacement strictly reduces the size of the formula.

The recognised families are

```text
logical_or(logical_not(a), b)                             -> implies(a, b)
logical_or(logical_and(a, b),
           logical_and(logical_not(a), logical_not(b)))   -> equivalent(a, b)
logical_and(logical_or(logical_not(a), b),
            logical_or(logical_not(b), a))                -> equivalent(a, b)
logical_or(logical_and(a, logical_not(b)),
           logical_and(logical_not(a), b))                -> exclusive_or(a, b)
```

Matching is insensitive to canonical commutative child order, and a flattened
n-ary parent is accepted whenever the matched clauses can be replaced without
disturbing the other children, so `logical_or(A, B, c)` compresses to
`logical_or(equivalent(a, b), c)` when `A` and `B` are the two equivalence
clauses. The disjunctive equivalence family also generalises to the n-ary
all-equal predicate: `logical_or(logical_and(a, b, c), logical_and(not a, not
b, not c))` compresses to `equivalent(a, b, c)`.

This is a local structural compressor, not Boolean synthesis. It does **not**
solve a truth table for a globally minimal derived-connective formula, and it
leaves alone any formula that is merely equivalent to a definition without
matching it structurally — including anything that would first need absorption,
distribution, consensus, or reasoning about relations among atoms. Call
`disjunctive_normal_form`, `conjunctive_normal_form`, or `minimize_logical`
explicitly first when those transformations are wanted.

The proof of each replacement is the exact structural definition it matched:
names, rendering order, numeric samples, and the assumption engine are never
consulted. A second call changes nothing.

```python
import symi

formula = symi.parse("logical_or(logical_not(a), b)")
symi.introduce_derived_logical_connectives(formula)
# implies(a, b)
```


