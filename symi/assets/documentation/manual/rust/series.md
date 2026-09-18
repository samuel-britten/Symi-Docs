# Series and residues

### taylor_series

<a id="placement-placement.rust.native_rust.api_assumptionscope_taylor_series.eaf5b6e863d6"></a>
`symi::api::AssumptionScope — pub fn taylor_series<'a, VariableType>(&self, target: &Expression, variable: VariableType, expansion_point: &Expression, truncation_order: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_expression_taylor_series.7ad454aef793"></a>
`symi::api::Expression — pub fn taylor_series<'a, VariableType>(&self, variable: VariableType, expansion_point: &Expression, truncation_order: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_session_taylor_series.6e17b9394091"></a>
`symi::api::Session — pub fn taylor_series<'a, VariableType>(&self, target: &Expression, variable: VariableType, expansion_point: &Expression, truncation_order: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Truncated Taylor expansion about `expansion_point`, keeping terms of degree
**strictly less than** `order` (the remainder is
\(O((x-a)^{\operatorname{order}})\). Returns the truncated polynomial, not a series object;
`order = 0` returns zero. Coefficients are computed exactly by repeated
symbolic differentiation.

### maclaurin_series

<a id="placement-placement.rust.native_rust.api_analysis_session_maclaurin_series.8c62aa60a1ab"></a>
`symi::api::analysis::Session — pub fn maclaurin_series<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType, truncation_order: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_maclaurin_series.3d78592f7525"></a>
`symi::api::expression_operations::Expression — pub fn maclaurin_series<'a, VariableType>(&self, variable: VariableType, truncation_order: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


`taylor_series` specialised to expansion point 0.

### laurent_series

<a id="placement-placement.rust.native_rust.api_expression_laurent_series.a5f8c5f4ee9d"></a>
`symi::api::Expression — pub fn laurent_series<'a, VariableType>(&self, variable: VariableType, center: &Expression, order: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_session_laurent_series.504cb6a093a4"></a>
`symi::api::Session — pub fn laurent_series<'a, VariableType>(&self, target: &Expression, variable: VariableType, center: &Expression, order: usize) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Truncated Laurent expansion at `center`: every \((\operatorname{variable} - \operatorname{center})^k\) term
with \(-m \le k < \operatorname{order}\), where `m` is the pole order. Analytic points degrade
to the Taylor expansion. At an essential singularity (where `pole_order`
declines) the result is an unevaluated `series_unevaluated(...)` placeholder,
because no finite truncation of the principal part is correct.

### residue

<a id="placement-placement.rust.native_rust.api_analysis_session_residue.89a576bf5854"></a>
`symi::api::analysis::Session — pub fn residue<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType, center: &Expression) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_residue.b2e5fa75a3d1"></a>
`symi::api::expression_operations::Expression — pub fn residue<'a, VariableType>(&self, variable: VariableType, center: &Expression) -> Result<Expression, ApiError> where VariableType: Into<VariableLike<'a>>`


Coefficient of \((\operatorname{variable} - \operatorname{center})^{-1}\) in the Laurent expansion at
`center`. Analytic/removable points give 0; simple poles use the limit of
\((x - c) f\); higher poles use the derivative formula. Essential singularities
return an unevaluated `residue_unevaluated(...)` placeholder. Rational
functions use exact polynomial valuations and formal series division, so
explicit algebraic centers do not need to occur as structural factors.

### pole_order

<a id="placement-placement.rust.native_rust.api_analysis_session_pole_order.899f204e334b"></a>
`symi::api::analysis::Session — pub fn pole_order<'a, VariableType>(&self, input_expression: &Expression, variable: VariableType, center: &Expression) -> Result<Option<i64>, ApiError> where VariableType: Into<VariableLike<'a>>`

<a id="placement-placement.rust.native_rust.api_expression_operations_expression_pole_order.b1dfb046d80a"></a>
`symi::api::expression_operations::Expression — pub fn pole_order<'a, VariableType>(&self, variable: VariableType, center: &Expression) -> Result<Option<i64>, ApiError> where VariableType: Into<VariableLike<'a>>`


Order of the singularity at `center`: `0` for analytic/removable points,
\(m \ge 1\) for a pole of order \(m\). Returns `None` (`undefined` in JS) when no
order \(\leq 16\) can be certified — the essential-singularity / undecidable
verdict. **Notes:** this is the one series entry returning a plain integer,
mirroring the core classifier; it never returns an unevaluated form. For a
rational function at an exact algebraic center, the order is obtained from
the square-free multiplicities of its numerator and denominator.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).

