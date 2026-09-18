# Statistics

Symbolic probability distributions (univariate first tier) and random-variable
algebra. A *distribution* node names a parametrised family; a *random variable*
node names a draw from a distribution. Distinct draws from the same distribution
are independent by default. The [complete distribution registry](distribution-reference.md)
lists every accepted family, its ordered parameters, support, and closed-form
operations. The canonical names for the gamma and beta families are
`gamma_distribution` and `beta_distribution`.

### distribution

<a id="placement-placement.wasm.wasm_class.context_distribution.8db68bce15d8"></a>
Raw WebAssembly: `pub fn distribution(&self, name: &str, parameters: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_distribution.a8ab95ab5293"></a>
Raw WebAssembly: `fn distribution(name: &str, parameters: Vec<Expression>) -> Result<Expression, JsError>`


Build a distribution node from a family name and its ordered parameter list
(e.g. `distribution("normal", [mean, standard_deviation])`). An unknown name
raises an invalid-option error. A parameter count that does not match the
family's arity raises a collection-shape error; it does not create an
`undefined` mathematical value.

### random_variable

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.random_variable`](/symi/python/statistics#random_variable) in Python, [`UniffiSession.randomVariable`](/symi/kotlin/statistics#random_variable) in Kotlin, [`UniffiSession.randomVariable`](/symi/swift/statistics#random_variable) in Swift, [`api::probability::Session::random_variable`](/symi/rust/statistics#random_variable) in Rust.*


Build a random variable named `name` drawn from `distribution`. Each call
interns a distinct symbol, so two draws from the same distribution stay
independent under hash-consing.

### density

<a id="placement-placement.wasm.wasm_class.context_density.4a13b738d461"></a>
Raw WebAssembly: `pub fn density(&self, random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_density.cd2642291cfe"></a>
Raw WebAssembly: `fn density(random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`


Probability density (continuous families) or probability mass (discrete
families) of `random_variable` evaluated at `point`. Falls back to an
unevaluated structural form when no closed form exists.

### cumulative_distribution

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.cumulative_distribution`](/symi/python/statistics#cumulative_distribution) in Python, [`UniffiSession.cumulativeDistribution`](/symi/kotlin/statistics#cumulative_distribution) in Kotlin, [`UniffiSession.cumulativeDistribution`](/symi/swift/statistics#cumulative_distribution) in Swift, [`api::probability::Session::cumulative_distribution`](/symi/rust/statistics#cumulative_distribution) in Rust.*


Cumulative distribution function of `random_variable` evaluated at `point`.

### expectation

<a id="placement-placement.wasm.wasm_class.context_expectation.67e8bae93912"></a>
Raw WebAssembly: `pub fn expectation(&self, target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_expectation.4574bc9e8615"></a>
Raw WebAssembly: `fn expectation(target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`


Expectation of `target` over the listed independent random variables. Linearity
and the constant-factor lift are applied; bare and power-of-random-variable
leaves consume the distribution's mean and raw moments.

### variance

<a id="placement-placement.wasm.wasm_class.context_variance.f8ef1aa2b2f3"></a>
Raw WebAssembly: `pub fn variance(&self, target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_variance.1e88b3e35c6d"></a>
Raw WebAssembly: `fn variance(target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`


Variance of `target` over the listed independent random variables.

### covariance

<a id="placement-placement.wasm.wasm_class.context_covariance.cf6b9f0ac1bf"></a>
Raw WebAssembly: `pub fn covariance(&self, left: &Expression, right: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_covariance.7f07c38ba9fc"></a>
Raw WebAssembly: `fn covariance(left: &Expression, right: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`


Covariance of `left` and `right` over the listed independent random variables;
zero for independent operands.

### probability

<a id="placement-placement.wasm.wasm_class.context_probability.7ba12c2caf78"></a>
Raw WebAssembly: `pub fn probability(&self, predicate: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_probability.048a1136670a"></a>
Raw WebAssembly: `fn probability(predicate: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`


Probability that `predicate` (a tail comparison such as `X > t`) holds over the
listed independent random variables.

### moment

<a id="placement-placement.wasm.wasm_class.context_moment.39df9a0ae11b"></a>
Raw WebAssembly: `pub fn moment(&self, random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_moment.2520aabf6538"></a>
Raw WebAssembly: `fn moment(random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`


The `order`-th raw moment `E[X^order]` of `random_variable`.

### cumulant

<a id="placement-placement.wasm.wasm_class.context_cumulant.842dc00f3798"></a>
Raw WebAssembly: `pub fn cumulant(&self, random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_cumulant.81f780dfe410"></a>
Raw WebAssembly: `fn cumulant(random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`


The `order`-th cumulant of `random_variable`.

### moment_generating_function

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.moment_generating_function`](/symi/python/statistics#moment_generating_function) in Python, [`UniffiSession.momentGeneratingFunction`](/symi/kotlin/statistics#moment_generating_function) in Kotlin, [`UniffiSession.momentGeneratingFunction`](/symi/swift/statistics#moment_generating_function) in Swift, [`api::probability::Session::moment_generating_function`](/symi/rust/statistics#moment_generating_function) in Rust.*


Closed-form moment generating function `M_X(t)` of `random_variable` in the
named auxiliary variable, when elementary; otherwise an unevaluated structural
form.

### characteristic_function

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.characteristic_function`](/symi/python/statistics#characteristic_function) in Python, [`UniffiSession.characteristicFunction`](/symi/kotlin/statistics#characteristic_function) in Kotlin, [`UniffiSession.characteristicFunction`](/symi/swift/statistics#characteristic_function) in Swift, [`api::probability::Session::characteristic_function`](/symi/rust/statistics#characteristic_function) in Rust.*


Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named
auxiliary variable, when elementary; otherwise an unevaluated structural form.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

<a id="placement-placement.wasm.wasm_class.context_characteristicfunction.67fa97a031f0"></a>
### Context.characteristicFunction

`pub fn characteristic_function(&self, random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_cumulativedistribution.437149c7bc0e"></a>
### Context.cumulativeDistribution

`pub fn cumulative_distribution(&self, random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_momentgeneratingfunction.5c1a2bc41ac9"></a>
### Context.momentGeneratingFunction

`pub fn moment_generating_function(&self, random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_randomvariable.2116c1217247"></a>
### Context.randomVariable

`pub fn random_variable(&self, name: &str, distribution: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_characteristicfunction.6bcf8578c6fc"></a>
### module.characteristicFunction

`fn characteristic_function(random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_cumulativedistribution.6fed2a150b33"></a>
### module.cumulativeDistribution

`fn cumulative_distribution(random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_momentgeneratingfunction.7320c47b4aec"></a>
### module.momentGeneratingFunction

`fn moment_generating_function(random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_randomvariable.88bac8365ef0"></a>
### module.randomVariable

`fn random_variable(name: &str, distribution: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

