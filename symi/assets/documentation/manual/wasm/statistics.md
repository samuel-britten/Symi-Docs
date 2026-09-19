# Statistics

Symbolic probability distributions (univariate first tier) and random-variable
algebra. A *distribution* node names a parametrised family; a *random variable*
node names a draw from a distribution. Distinct draws from the same distribution
are independent by default. The [complete distribution registry](distribution-reference.md)
lists every accepted family, its ordered parameters, support, and closed-form
operations. The canonical names for the gamma and beta families are
`gamma_distribution` and `beta_distribution`.

### distribution

<a id="entry-presentation_wasm_statistics_capability_probability_distribution_api_probability_session_distribution"></a>
<a id="placement-placement.wasm.wasm_module.module_distribution.a8ab95ab5293"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
distribution(name: string, parameters: Expression[]): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_distribution.8db68bce15d8"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.distribution</code></p>

```typescript signature
distribution(name: string, parameters: Expression[]): Expression
```

</details>


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

<a id="entry-presentation_wasm_statistics_capability_probability_density_api_probability_session_density"></a>
<a id="placement-placement.wasm.wasm_module.module_density.cd2642291cfe"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
density(random_variable: Expression, point: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_density.4a13b738d461"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.density</code></p>

```typescript signature
density(random_variable: Expression, point: Expression): Expression
```

</details>


Probability density (continuous families) or probability mass (discrete
families) of `random_variable` evaluated at `point`. Falls back to an
unevaluated structural form when no closed form exists.

### cumulative_distribution

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.cumulative_distribution`](/symi/python/statistics#cumulative_distribution) in Python, [`UniffiSession.cumulativeDistribution`](/symi/kotlin/statistics#cumulative_distribution) in Kotlin, [`UniffiSession.cumulativeDistribution`](/symi/swift/statistics#cumulative_distribution) in Swift, [`api::probability::Session::cumulative_distribution`](/symi/rust/statistics#cumulative_distribution) in Rust.*


Cumulative distribution function of `random_variable` evaluated at `point`.

### expectation

<a id="entry-presentation_wasm_statistics_capability_probability_expectation_api_probability_session_expectation"></a>
<a id="placement-placement.wasm.wasm_module.module_expectation.4574bc9e8615"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
expectation(
    target: Expression,
    random_variables: Expression[],
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_expectation.67e8bae93912"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expectation</code></p>

```typescript signature
expectation(
    target: Expression,
    random_variables: Expression[],
): Expression
```

</details>


Expectation of `target` over the listed independent random variables. Linearity
and the constant-factor lift are applied; bare and power-of-random-variable
leaves consume the distribution's mean and raw moments.

### variance

<a id="entry-presentation_wasm_statistics_capability_probability_variance_api_probability_session_variance"></a>
<a id="placement-placement.wasm.wasm_module.module_variance.1e88b3e35c6d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
variance(target: Expression, random_variables: Expression[]): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_variance.f8ef1aa2b2f3"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.variance</code></p>

```typescript signature
variance(target: Expression, random_variables: Expression[]): Expression
```

</details>


Variance of `target` over the listed independent random variables.

### covariance

<a id="entry-presentation_wasm_statistics_capability_probability_covariance_api_probability_session_covariance"></a>
<a id="placement-placement.wasm.wasm_module.module_covariance.7f07c38ba9fc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
covariance(
    left: Expression,
    right: Expression,
    random_variables: Expression[],
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_covariance.cf6b9f0ac1bf"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.covariance</code></p>

```typescript signature
covariance(
    left: Expression,
    right: Expression,
    random_variables: Expression[],
): Expression
```

</details>


Covariance of `left` and `right` over the listed independent random variables;
zero for independent operands.

### probability

<a id="entry-presentation_wasm_statistics_capability_probability_probability_api_probability_session_probability"></a>
<a id="placement-placement.wasm.wasm_module.module_probability.048a1136670a"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
probability(
    predicate: Expression,
    random_variables: Expression[],
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_probability.7ba12c2caf78"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.probability</code></p>

```typescript signature
probability(
    predicate: Expression,
    random_variables: Expression[],
): Expression
```

</details>


Probability that `predicate` (a tail comparison such as `X > t`) holds over the
listed independent random variables.

### moment

<a id="entry-presentation_wasm_statistics_capability_probability_moment_api_probability_session_moment"></a>
<a id="placement-placement.wasm.wasm_module.module_moment.2520aabf6538"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
moment(random_variable: Expression, order: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_moment.39df9a0ae11b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.moment</code></p>

```typescript signature
moment(random_variable: Expression, order: Expression): Expression
```

</details>


The `order`-th raw moment `E[X^order]` of `random_variable`.

### cumulant

<a id="entry-presentation_wasm_statistics_capability_probability_cumulant_api_probability_session_cumulant"></a>
<a id="placement-placement.wasm.wasm_module.module_cumulant.81f780dfe410"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cumulant(random_variable: Expression, order: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cumulant.842dc00f3798"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulant</code></p>

```typescript signature
cumulant(random_variable: Expression, order: Expression): Expression
```

</details>


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

### characteristicFunction

<a id="entry-presentation_wasm_statistics_capability_probability_characteristic_function_api_probability_session_characteristic_function"></a>
<a id="placement-placement.wasm.wasm_module.module_characteristicfunction.6bcf8578c6fc"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
characteristicFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_characteristicfunction.67fa97a031f0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.characteristicFunction</code></p>

```typescript signature
characteristicFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

</details>

### cumulativeDistribution

<a id="entry-presentation_wasm_statistics_capability_probability_cumulative_distribution_api_probability_session_cumulative_distribution"></a>
<a id="placement-placement.wasm.wasm_module.module_cumulativedistribution.6fed2a150b33"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cumulativeDistribution(
    random_variable: Expression,
    point: Expression,
): Expression
```

Cumulative distribution function of `random_variable` evaluated at `point`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cumulativedistribution.437149c7bc0e"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulativeDistribution</code></p>

```typescript signature
cumulativeDistribution(
    random_variable: Expression,
    point: Expression,
): Expression
```

</details>

### momentGeneratingFunction

<a id="entry-presentation_wasm_statistics_capability_probability_moment_generating_function_api_probability_session_moment_generating_function"></a>
<a id="placement-placement.wasm.wasm_module.module_momentgeneratingfunction.7320c47b4aec"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
momentGeneratingFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

Closed-form moment generating function `M_X(t)` of `random_variable` in the named auxiliary variable, when elementary; otherwise an unevaluated structural form.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_momentgeneratingfunction.5c1a2bc41ac9"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.momentGeneratingFunction</code></p>

```typescript signature
momentGeneratingFunction(
    random_variable: Expression,
    auxiliary_variable: string,
): Expression
```

</details>

### randomVariable

<a id="entry-presentation_wasm_statistics_capability_probability_random_variable_api_probability_session_random_variable"></a>
<a id="placement-placement.wasm.wasm_module.module_randomvariable.88bac8365ef0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
randomVariable(name: string, distribution: Expression): Expression
```

Build a random variable named `name` drawn from `distribution`.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_randomvariable.2116c1217247"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.randomVariable</code></p>

```typescript signature
randomVariable(name: string, distribution: Expression): Expression
```

</details>

