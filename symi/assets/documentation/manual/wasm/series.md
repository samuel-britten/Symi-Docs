# Series and residues

### taylor_series

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionScope.taylor_series`](/symi/python/series#taylor_series) in Python, [`UniffiAssumptionScope.taylorSeries`](/symi/kotlin/series#taylor_series) in Kotlin, [`UniffiAssumptionScope.taylorSeries`](/symi/swift/series#taylor_series) in Swift, [`api::AssumptionScope::taylor_series`](/symi/rust/series#taylor_series) in Rust.*


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.maclaurin_series`](/symi/python/series#maclaurin_series) in Python, [`UniffiExpression.maclaurinSeries`](/symi/kotlin/series#maclaurin_series) in Kotlin, [`UniffiExpression.maclaurinSeries`](/symi/swift/series#maclaurin_series) in Swift, [`api::analysis::Session::maclaurin_series`](/symi/rust/series#maclaurin_series) in Rust.*


`taylor_series` specialised to expansion point 0.

### laurent_series

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.laurent_series`](/symi/python/series#laurent_series) in Python, [`UniffiExpression.laurentSeries`](/symi/kotlin/series#laurent_series) in Kotlin, [`UniffiExpression.laurentSeries`](/symi/swift/series#laurent_series) in Swift, [`api::Expression::laurent_series`](/symi/rust/series#laurent_series) in Rust.*


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="placement-placement.wasm.wasm_class.context_residue.d125c14f4192"></a>
Raw WebAssembly: `pub fn residue(&self, input_expression: &Expression, variable: &str, center: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.expression_residue.8d5e9c55a6de"></a>
Raw WebAssembly: `pub fn residue(&self, variable: &str, center: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_residue.7086b98f8e0d"></a>
Raw WebAssembly: `fn residue(input_expression: &Expression, variable: &str, center: &Expression) -> Result<Expression, JsError>`


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.pole_order`](/symi/python/series#pole_order) in Python, [`UniffiExpression.poleOrder`](/symi/kotlin/series#pole_order) in Kotlin, [`UniffiExpression.poleOrder`](/symi/swift/series#pole_order) in Swift, [`api::analysis::Session::pole_order`](/symi/rust/series#pole_order) in Rust.*


Order of the singularity at `center`: `0` for analytic/removable points,
\(m \ge 1\) for a pole of order \(m\). Returns `None` (`undefined` in JS) when no
order \(\leq 16\) can be certified — the essential-singularity / undecidable
verdict. **Notes:** this is the one series entry returning a plain integer,
mirroring the core classifier; it never returns an unevaluated form. For a
rational function at an exact algebraic center, the order is obtained from
the square-free multiplicities of its numerator and denominator.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

<a id="placement-placement.wasm.wasm_class.assumptionscope_taylorseries.c3cad65c2ce1"></a>
### AssumptionScope.taylorSeries

`pub fn taylor_series(&self, input_expression: &Expression, variable: &str, expansion_point: &Expression, truncation_order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_laurentseries.e8316922ebf6"></a>
### Context.laurentSeries

`pub fn laurent_series(&self, input_expression: &Expression, variable: &str, center: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_maclaurinseries.9c0c4610a21a"></a>
### Context.maclaurinSeries

`pub fn maclaurin_series(&self, input_expression: &Expression, variable: &str, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_taylorseries.2224e0e71344"></a>
### Context.taylorSeries

`pub fn taylor_series(&self, input_expression: &Expression, variable: &str, expansion_point: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_laurentseries.d0f2974aa39d"></a>
### Expression.laurentSeries

`pub fn laurent_series(&self, variable: &str, center: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_maclaurinseries.61e0610232f5"></a>
### Expression.maclaurinSeries

`pub fn maclaurin_series(&self, variable: &str, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_taylorseries.34401ae1c495"></a>
### Expression.taylorSeries

`pub fn taylor_series(&self, variable: &str, expansion_point: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_laurentseries.0b961aee8cd4"></a>
### module.laurentSeries

`fn laurent_series(input_expression: &Expression, variable: &str, center: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_maclaurinseries.607a15898ae4"></a>
### module.maclaurinSeries

`fn maclaurin_series(input_expression: &Expression, variable: &str, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_taylorseries.e1b8fff7e6aa"></a>
### module.taylorSeries

`fn taylor_series(input_expression: &Expression, variable: &str, expansion_point: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

