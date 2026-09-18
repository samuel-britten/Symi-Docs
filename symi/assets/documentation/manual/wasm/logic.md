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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.logical_true`](/symi/python/logic#logical_true) in Python, [`UniffiSession.logicalTrue`](/symi/kotlin/logic#logical_true) in Kotlin, [`UniffiSession.logicalTrue`](/symi/swift/logic#logical_true) in Swift, [`api::Session::logical_true`](/symi/rust/logic#logical_true) in Rust.*


The Boolean constant true (\(\top\)).

### logical_false

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.logical_false`](/symi/python/logic#logical_false) in Python, [`UniffiSession.logicalFalse`](/symi/kotlin/logic#logical_false) in Kotlin, [`UniffiSession.logicalFalse`](/symi/swift/logic#logical_false) in Swift, [`api::Session::logical_false`](/symi/rust/logic#logical_false) in Rust.*


The Boolean constant false (\(\bot\)).

### evaluate_truth

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.evaluate_truth`](/symi/python/logic#evaluate_truth) in Python, [`UniffiExpression.evaluateTruth`](/symi/kotlin/logic#evaluate_truth) in Kotlin, [`UniffiExpression.evaluateTruth`](/symi/swift/logic#evaluate_truth) in Swift, [`api::Expression::evaluate_truth`](/symi/rust/logic#evaluate_truth) in Rust.*


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

```javascript
const x = symi.symbol("x");

console.log(symi.evaluateTruth(symi.lessThan(symi.rational(1n, 3n), 1)));
console.log(symi.evaluateTruth(symi.lessThan(x, 1)));
```


## Additional API

<a id="placement-placement.wasm.javascript_facade.context_eliminatederivedlogicalconnectives.fbf21e222b48"></a>
### Context.eliminateDerivedLogicalConnectives

`Context.eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_evaluatetruth.a9ce02ce8752"></a>
### Context.evaluateTruth

`Context.evaluateTruth(predicate: ExpressionLike): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_introducederivedlogicalconnectives.1178bb7be801"></a>
### Context.introduceDerivedLogicalConnectives

`Context.introduceDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_logicalfalse.9bc67d1ef760"></a>
### Context.logicalFalse

`Context.readonly logicalFalse: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_logicaltrue.9727eb1248c1"></a>
### Context.logicalTrue

`Context.readonly logicalTrue: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_simplifylogical.d5a84750401d"></a>
### Context.simplifyLogical

`Context.simplifyLogical(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_eliminatederivedlogicalconnectives.03dbed4ef109"></a>
### Expression.eliminateDerivedLogicalConnectives

`Expression.eliminateDerivedLogicalConnectives(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_evaluatetruth.e2bc58e39b58"></a>
### Expression.evaluateTruth

`Expression.evaluateTruth(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_introducederivedlogicalconnectives.d61df7a5125f"></a>
### Expression.introduceDerivedLogicalConnectives

`Expression.introduceDerivedLogicalConnectives(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_simplifylogical.dce05b71d665"></a>
### Expression.simplifyLogical

`Expression.simplifyLogical(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_eliminatederivedlogicalconnectives.ac05ca331ca5"></a>
### SymiFacade.eliminateDerivedLogicalConnectives

`SymiFacade.eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_evaluatetruth.b770fcd9faa8"></a>
### SymiFacade.evaluateTruth

`SymiFacade.evaluateTruth(predicate: ExpressionLike): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_introducederivedlogicalconnectives.d87c58b06818"></a>
### SymiFacade.introduceDerivedLogicalConnectives

`SymiFacade.introduceDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_logicalfalse.2e267b20bbb1"></a>
### SymiFacade.logicalFalse

`SymiFacade.readonly logicalFalse: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_logicaltrue.42cc56407238"></a>
### SymiFacade.logicalTrue

`SymiFacade.readonly logicalTrue: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_simplifylogical.7e8c3741add9"></a>
### SymiFacade.simplifyLogical

`SymiFacade.simplifyLogical(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.wasm_class.context_eliminatederivedlogicalconnectives.3556bcb58aec"></a>
### Context.eliminateDerivedLogicalConnectives

`pub fn eliminate_derived_logical_connectives(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatetruth.863d04a2419d"></a>
### Context.evaluateTruth

`pub fn evaluate_truth(&self, input_expression: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_introducederivedlogicalconnectives.b3bbbe9c8c71"></a>
### Context.introduceDerivedLogicalConnectives

`pub fn introduce_derived_logical_connectives(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_logicalfalse.94e8b3dd883e"></a>
### Context.logicalFalse

`pub fn logical_false(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_logicaltrue.e8dfff3d592b"></a>
### Context.logicalTrue

`pub fn logical_true(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_minimizelogical.e8634cea64ca"></a>
### Context.minimizeLogical

`pub fn minimize_logical(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifylogical.0449b898501d"></a>
### Context.simplifyLogical

`pub fn simplify_logical(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_eliminatederivedlogicalconnectives.1f7a9ae4427f"></a>
### Expression.eliminateDerivedLogicalConnectives

`pub fn eliminate_derived_logical_connectives(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetruth.1071ae13c246"></a>
### Expression.evaluateTruth

`pub fn evaluate_truth(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_introducederivedlogicalconnectives.174398edf818"></a>
### Expression.introduceDerivedLogicalConnectives

`pub fn introduce_derived_logical_connectives(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_minimizelogical.1eeedfe07389"></a>
### Expression.minimizeLogical

`pub fn minimize_logical(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_simplifylogical.b150d8671266"></a>
### Expression.simplifyLogical

`pub fn simplify_logical(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_eliminatederivedlogicalconnectives.86334ce1fe59"></a>
### module.eliminateDerivedLogicalConnectives

`fn eliminate_derived_logical_connectives(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatetruth.fb0e4e2d9223"></a>
### module.evaluateTruth

`fn evaluate_truth(input_expression: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_introducederivedlogicalconnectives.83816a1b06a4"></a>
### module.introduceDerivedLogicalConnectives

`fn introduce_derived_logical_connectives(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_logicalfalse.6aee9d3550be"></a>
### module.logicalFalse

`fn logical_false() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_logicaltrue.8c894af8e323"></a>
### module.logicalTrue

`fn logical_true() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_minimizelogical.b1927e04de80"></a>
### module.minimizeLogical

`fn minimize_logical(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifylogical.c91f7d3e4b36"></a>
### module.simplifyLogical

`fn simplify_logical(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

