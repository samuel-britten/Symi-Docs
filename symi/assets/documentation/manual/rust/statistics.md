# Statistics

Symbolic probability distributions (univariate first tier) and random-variable
algebra. A *distribution* node names a parametrised family; a *random variable*
node names a draw from a distribution. Distinct draws from the same distribution
are independent by default. The [complete distribution registry](distribution-reference.md)
lists every accepted family, its ordered parameters, support, and closed-form
operations. The canonical names for the gamma and beta families are
`gamma_distribution` and `beta_distribution`.

### distribution

<a id="entry-presentation_rust_api_session_distribution"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_distribution.a063aaf8504e"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn distribution(
    &self,
    name: &str,
    parameters: &[Expression],
) -> Result<Expression, ApiError>
```


Build a distribution node from a family name and its ordered parameter list
(e.g. `distribution("normal", [mean, standard_deviation])`). An unknown name
raises an invalid-option error. A parameter count that does not match the
family's arity raises a collection-shape error; it does not create an
`undefined` mathematical value.

### random_variable

<a id="entry-presentation_rust_api_session_random_variable"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_random_variable.385009302bb0"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn random_variable(
    &self,
    name: &str,
    distribution: &Expression,
) -> Result<Expression, ApiError>
```


Build a random variable named `name` drawn from `distribution`. Each call
interns a distinct symbol, so two draws from the same distribution stay
independent under hash-consing.

### density

<a id="entry-presentation_rust_api_session_density"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_density.a337a5a3551c"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn density(
    &self,
    random_variable: &Expression,
    point: &Expression,
) -> Result<Expression, ApiError>
```


Probability density (continuous families) or probability mass (discrete
families) of `random_variable` evaluated at `point`. Falls back to an
unevaluated structural form when no closed form exists.

### cumulative_distribution

<a id="entry-presentation_rust_api_session_cumulative_distribution"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_cumulative_distribution.42afedf72cb3"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn cumulative_distribution(
    &self,
    random_variable: &Expression,
    point: &Expression,
) -> Result<Expression, ApiError>
```


Cumulative distribution function of `random_variable` evaluated at `point`.

### expectation

<a id="entry-presentation_rust_api_session_expectation"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_expectation.d2c31696cf14"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn expectation(
    &self,
    target: &Expression,
    random_variables: &[Expression],
) -> Result<Expression, ApiError>
```


Expectation of `target` over the listed independent random variables. Linearity
and the constant-factor lift are applied; bare and power-of-random-variable
leaves consume the distribution's mean and raw moments.

### variance

<a id="entry-presentation_rust_api_session_variance"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_variance.f34f6a88337d"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn variance(
    &self,
    target: &Expression,
    random_variables: &[Expression],
) -> Result<Expression, ApiError>
```


Variance of `target` over the listed independent random variables.

### covariance

<a id="entry-presentation_rust_api_session_covariance"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_covariance.4bba8e418669"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn covariance(
    &self,
    left: &Expression,
    right: &Expression,
    random_variables: &[Expression],
) -> Result<Expression, ApiError>
```


Covariance of `left` and `right` over the listed independent random variables;
zero for independent operands.

### probability

<a id="entry-presentation_rust_api_session_probability"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_probability.8494139fd742"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn probability(
    &self,
    predicate: &Expression,
    random_variables: &[Expression],
) -> Result<Expression, ApiError>
```


Probability that `predicate` (a tail comparison such as `X > t`) holds over the
listed independent random variables.

### moment

<a id="entry-presentation_rust_api_session_moment"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_moment.2fecf95c9099"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn moment(
    &self,
    random_variable: &Expression,
    order: &Expression,
) -> Result<Expression, ApiError>
```


The `order`-th raw moment `E[X^order]` of `random_variable`.

### cumulant

<a id="entry-presentation_rust_api_session_cumulant"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_cumulant.8346ff72ad22"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn cumulant(
    &self,
    random_variable: &Expression,
    order: &Expression,
) -> Result<Expression, ApiError>
```


The `order`-th cumulant of `random_variable`.

### moment_generating_function

<a id="entry-presentation_rust_api_session_moment_generating_function"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_moment_generating_function.9c540c7e7174"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn moment_generating_function<'a, VariableType>(
    &self,
    random_variable: &Expression,
    auxiliary_variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Closed-form moment generating function `M_X(t)` of `random_variable` in the
named auxiliary variable, when elementary; otherwise an unevaluated structural
form.

### characteristic_function

<a id="entry-presentation_rust_api_session_characteristic_function"></a>
<a id="placement-placement.rust.native_rust.api_probability_session_characteristic_function.60b81ada7307"></a>
<p class="symi-entry-owner">api::probability::Session method</p>

```rust signature
pub fn characteristic_function<'a, VariableType>(
    &self,
    random_variable: &Expression,
    auxiliary_variable: VariableType,
) -> Result<Expression, ApiError>
where
    VariableType: Into<VariableLike<'a>>,
```


Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named
auxiliary variable, when elementary; otherwise an unevaluated structural form.

## Example

Build a random variable and read its density, mean, and variance.

```rust
use symi::api::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let session = Session::new();
    let standard_normal =
        session.distribution("normal", &[session.integer(0), session.integer(1)])?;
    let measurement = session.random_variable("X", &standard_normal)?;

    println!("{}", session.density(&measurement, &session.symbol("t"))?);
    println!("{}", session.expectation(&measurement, &[measurement.clone()])?);
    println!("{}", session.variance(&measurement, &[measurement.clone()])?);
    Ok(())
}
```


## Additional API

### api::probability

<a id="entry-presentation_rust_native_module_api_probability"></a>
<a id="placement-placement.rust.native_rust.api_probability.1cffdfa3f5c4"></a>
<p class="symi-entry-owner">api module</p>

```rust signature
pub mod probability;
```

Distribution and statistics operations of the native API.

