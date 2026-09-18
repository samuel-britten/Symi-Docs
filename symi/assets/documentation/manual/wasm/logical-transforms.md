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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.disjunctive_normal_form`](/symi/python/logical-transforms#disjunctive_normal_form) in Python, [`UniffiExpression.disjunctiveNormalForm`](/symi/kotlin/logical-transforms#disjunctive_normal_form) in Kotlin, [`UniffiExpression.disjunctiveNormalForm`](/symi/swift/logical-transforms#disjunctive_normal_form) in Swift, [`api::expression_operations::Expression::disjunctive_normal_form`](/symi/rust/logical-transforms#disjunctive_normal_form) in Rust.*


Rewrite a propositional formula into a reduced disjunctive normal form (an
OR of AND-terms over literals): derived connectives are eliminated,
negations are pushed to the atoms, the formula is distributed, and
contradictory, duplicate, and subsumed terms are dropped.

### conjunctive_normal_form

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.conjunctive_normal_form`](/symi/python/logical-transforms#conjunctive_normal_form) in Python, [`UniffiExpression.conjunctiveNormalForm`](/symi/kotlin/logical-transforms#conjunctive_normal_form) in Kotlin, [`UniffiExpression.conjunctiveNormalForm`](/symi/swift/logical-transforms#conjunctive_normal_form) in Swift, [`api::expression_operations::Expression::conjunctive_normal_form`](/symi/rust/logical-transforms#conjunctive_normal_form) in Rust.*


The dual of `disjunctive_normal_form`: a reduced conjunctive normal form (an
AND of OR-clauses over literals).

### minimize_logical

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.minimize_logical`](/symi/python/logical-transforms#minimize_logical) in Python, [`UniffiExpression.minimizeLogical`](/symi/kotlin/logical-transforms#minimize_logical) in Kotlin, [`UniffiExpression.minimizeLogical`](/symi/swift/logical-transforms#minimize_logical) in Swift, [`api::expression_operations::Expression::minimize_logical`](/symi/rust/logical-transforms#minimize_logical) in Rust.*


The smaller of the minimum sum-of-products and product-of-sums two-level
forms. Within a practical atom bound this is the exact Quine–McCluskey
minimum (prime implicants, essential extraction, and Petrick's method on the
residual chart); above it, an Espresso-style heuristic returns a good — not
provably minimal — cover.

### simplify_logical

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.simplify_logical`](/symi/python/logical-transforms#simplify_logical) in Python, [`UniffiExpression.simplifyLogical`](/symi/kotlin/logical-transforms#simplify_logical) in Kotlin, [`UniffiExpression.simplifyLogical`](/symi/swift/logical-transforms#simplify_logical) in Swift, [`api::expression_operations::Expression::simplify_logical`](/symi/rust/logical-transforms#simplify_logical) in Rust.*


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.eliminate_derived_logical_connectives`](/symi/python/logical-transforms#eliminate_derived_logical_connectives) in Python, [`UniffiExpression.eliminateDerivedLogicalConnectives`](/symi/kotlin/logical-transforms#eliminate_derived_logical_connectives) in Kotlin, [`UniffiExpression.eliminateDerivedLogicalConnectives`](/symi/swift/logical-transforms#eliminate_derived_logical_connectives) in Swift, [`api::expression_operations::Expression::eliminate_derived_logical_connectives`](/symi/rust/logical-transforms#eliminate_derived_logical_connectives) in Rust.*


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


```javascript
const formula = symi.parse("equivalent(x, y)");
symi.eliminateDerivedLogicalConnectives(formula).toString();
// logical_or(logical_and(x, y), logical_and(logical_not(x), logical_not(y)))
```


### introduce_derived_logical_connectives

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.introduce_derived_logical_connectives`](/symi/python/logical-transforms#introduce_derived_logical_connectives) in Python, [`UniffiExpression.introduceDerivedLogicalConnectives`](/symi/kotlin/logical-transforms#introduce_derived_logical_connectives) in Kotlin, [`UniffiExpression.introduceDerivedLogicalConnectives`](/symi/swift/logical-transforms#introduce_derived_logical_connectives) in Swift, [`api::expression_operations::Expression::introduce_derived_logical_connectives`](/symi/rust/logical-transforms#introduce_derived_logical_connectives) in Rust.*


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


```javascript
const formula = symi.parse(
    "logical_and(logical_or(logical_not(a), b), logical_or(logical_not(b), a))",
);
symi.introduceDerivedLogicalConnectives(formula).toString();
// equivalent(a, b)
```

