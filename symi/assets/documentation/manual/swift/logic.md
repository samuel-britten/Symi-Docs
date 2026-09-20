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

<a id="entry-presentation_swift_api_session_logical_true"></a>
<a id="placement-placement.swift.swift_object.uniffisession_logicaltrue.ea8fb89b97aa"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func logicalTrue() -> UniffiExpression
```


The Boolean constant true (\(\top\)).

### logical_false

<a id="entry-presentation_swift_api_session_logical_false"></a>
<a id="placement-placement.swift.swift_object.uniffisession_logicalfalse.30325dfe08df"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func logicalFalse() -> UniffiExpression
```


The Boolean constant false (\(\bot\)).

### evaluate_truth

<a id="entry-presentation_swift_api_session_evaluate_truth"></a>
<a id="placement-placement.swift.swift_object.uniffisession_evaluatetruth.793bd49e7d4e"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func evaluateTruth(target: UniffiExpression) -> UniffiTruthValue
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_evaluatetruth.88a628a26ac3"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.evaluateTruth</code></p>

```swift signature
func evaluateTruth() -> UniffiTruthValue
```

</details>


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

