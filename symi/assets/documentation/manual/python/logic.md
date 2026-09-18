# Boolean algebra and logic

See [Evaluation and constants](evaluation-and-constants.md) for the distinction
between symbolic relations, `execute`, logical simplification, and the exact
three-valued host query.

Logical formulas are built from the connective heads `logical_and`,
`logical_or`, `logical_not`, `implies`, `equivalent` (the n-ary "all
arguments equal" biconditional), and `exclusive_or` (n-ary parity), applied
through `parse` or `call`/`function_call` over the relational atoms
(`equal`, `less_than`, …) and ordinary symbols treated as Boolean
variables. The associative-commutative connectives auto-simplify to a flat,
sorted, deduplicated, constant- and complement-folded canonical form. The
two Boolean constants are `logical_true` and `logical_false`.

Normal forms and Boolean simplification are documented in
[logical transforms](logical-transforms.md).

### logical_true

<a id="placement-placement.python.python_class.context_logical_true.2245ad3a5ca6"></a>
`Context.logical_true`

<a id="placement-placement.python.python_module.module_logical_true.ef761df9ca2e"></a>
`symi.logical_true`


The Boolean constant true (\(\top\)).

### logical_false

<a id="placement-placement.python.python_class.context_logical_false.2a29c31f903d"></a>
`Context.logical_false`

<a id="placement-placement.python.python_module.module_logical_false.35969dae5f4e"></a>
`symi.logical_false`


The Boolean constant false (\(\bot\)).

### evaluate_truth

<a id="placement-placement.python.python_class.context_evaluate_truth.a421c2b10040"></a>
`Context.evaluate_truth(input_expression)`

<a id="placement-placement.python.python_class.expression_evaluate_truth.2acfc1c52e62"></a>
`Expression.evaluate_truth()`

<a id="placement-placement.python.python_module.module_evaluate_truth.973391b33da4"></a>
`symi.evaluate_truth(input_expression)`


`evaluate_truth(predicate)` uses exact three-valued logic. Python returns `True`, `False`, or
`None`; JavaScript returns `true`, `false`, or `null`; Rust returns `TruthValue`. Non-logical
numeric expressions are rejected.

**The third value means undecided, never false.** A `None` / `null` / `unknown` result says the
procedure could not prove either verdict — not that the predicate is false. This distinction is
load-bearing at the call site, because a host-language `if` treats `None` and `null` as falsy: a
test written `if evaluate_truth(...)` silently reads every undecided relation as false. Compare
against `True` / `False` (or `true` / `false`) explicitly whenever the undecided case matters.

Order, equality and sign relations are decided exactly, by rational and polynomial arithmetic
only — no floating point ever enters the decision. The decided class is the closed-form real
constants: integer and rational literals, `pi`, real algebraic numbers, sums, products, integer
powers, and rational powers of a positive base (so `sqrt` and nested radicals), together with
`abs` and `signum` over those. Within that class a comparison is decided in full, including
values that need term collection to become constant at all, such as `x + sqrt(5) < x + 3`.

Outside it the answer is `unknown` by design, not by accident: comparisons whose difference
involves `e`, `log 2` or a special-function value, order between unassumed symbols, and any
relation with a provably non-real operand — `sqrt(-4)` is `2i`, about which no order verdict is
meaningful — all decline rather than guess.

## Example

Logical expressions carry a three-valued outcome.

```python
import symi

x = symi.symbol("x")

print(symi.evaluate_truth(symi.less_than(symi.rational(1, 3), 1)))
print(symi.evaluate_truth(symi.less_than(x, 1)))
print(symi.disjunctive_normal_form(symi.parse("logical_and(logical_or(a, b), logical_or(a, c))")))
print(symi.minimize_logical(symi.parse("logical_or(logical_and(a, b), logical_and(a, logical_not(b)))")))
```

