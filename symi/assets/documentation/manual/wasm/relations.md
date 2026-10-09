# Relations and predicates

Relations construct symbolic formulas. They are distinct from host-language truth queries.

## Relations

Relation nodes are used as equations for `solve`/`solveset`, as piecewise
conditions, and as boolean-valued results.

### equal

<a id="placement-placement.wasm.wasm_class.context_equal.2dce7bc44567"></a>
Raw WebAssembly: `pub fn equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_equal.8d132f8ca4bd"></a>
Raw WebAssembly: `fn equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`


### not_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.not_equal`](/symi/python/relations#not_equal) in Python, [`UniffiSession.notEqual`](/symi/kotlin/relations#not_equal) in Kotlin, [`UniffiSession.notEqual`](/symi/swift/relations#not_equal) in Swift, [`api::Session::not_equal`](/symi/rust/relations#not_equal) in Rust.*


### less_than

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.less_than`](/symi/python/relations#less_than) in Python, [`UniffiExpression.lessThan`](/symi/kotlin/relations#less_than) in Kotlin, [`UniffiExpression.lessThan`](/symi/swift/relations#less_than) in Swift, [`api::Session::less_than`](/symi/rust/relations#less_than) in Rust.*


### less_than_or_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.less_than_or_equal`](/symi/python/relations#less_than_or_equal) in Python, [`UniffiSession.lessThanOrEqual`](/symi/kotlin/relations#less_than_or_equal) in Kotlin, [`UniffiSession.lessThanOrEqual`](/symi/swift/relations#less_than_or_equal) in Swift, [`api::Session::less_than_or_equal`](/symi/rust/relations#less_than_or_equal) in Rust.*


### greater_than

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.greater_than`](/symi/python/relations#greater_than) in Python, [`UniffiSession.greaterThan`](/symi/kotlin/relations#greater_than) in Kotlin, [`UniffiSession.greaterThan`](/symi/swift/relations#greater_than) in Swift, [`api::Session::greater_than`](/symi/rust/relations#greater_than) in Rust.*


### greater_than_or_equal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.greater_than_or_equal`](/symi/python/relations#greater_than_or_equal) in Python, [`UniffiSession.greaterThanOrEqual`](/symi/kotlin/relations#greater_than_or_equal) in Kotlin, [`UniffiSession.greaterThanOrEqual`](/symi/swift/relations#greater_than_or_equal) in Swift, [`api::Session::greater_than_or_equal`](/symi/rust/relations#greater_than_or_equal) in Rust.*


## Example

Relations are symbolic expressions until they are evaluated.

```javascript
const x = symi.symbol("x");

console.log(symi.lessThan(x, 1).toString());
console.log(symi.evaluateTruth(symi.lessThan(symi.integer(1n), 2)));
```


## Additional API

<a id="placement-placement.wasm.javascript_facade.context_lessthan.893ab0968b8e"></a>
### Context.lessThan

`Context.lessThan(left: ExpressionLike, right: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_lessthan.556075d96973"></a>
### Expression.lessThan

`Expression.lessThan(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lessthan.8b815324871d"></a>
### SymiFacade.lessThan

`SymiFacade.lessThan(left: ExpressionLike, right: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.wasm_class.context_greaterthan.f224f387e805"></a>
### Context.greaterThan

`pub fn greater_than(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_greaterthanorequal.ec8578b13d6e"></a>
### Context.greaterThanOrEqual

`pub fn greater_than_or_equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessthan.5f7e2595fdc8"></a>
### Context.lessThan

`pub fn less_than(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessthanorequal.14b771192996"></a>
### Context.lessThanOrEqual

`pub fn less_than_or_equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_notequal.e274c6ff26f1"></a>
### Context.notEqual

`pub fn not_equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterthan.3093032cb367"></a>
### module.greaterThan

`fn greater_than(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterthanorequal.50b0a6698716"></a>
### module.greaterThanOrEqual

`fn greater_than_or_equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessthan.bc55302e0173"></a>
### module.lessThan

`fn less_than(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessthanorequal.c97b335533ab"></a>
### module.lessThanOrEqual

`fn less_than_or_equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_notequal.e71bd58fd421"></a>
### module.notEqual

`fn not_equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

