# Statistics

Symbolic probability distributions (univariate first tier) and random-variable
algebra. A *distribution* node names a parametrised family; a *random variable*
node names a draw from a distribution. Distinct draws from the same distribution
are independent by default. The [complete distribution registry](distribution-reference.md)
lists every accepted family, its ordered parameters, support, and closed-form
operations. The canonical names for the gamma and beta families are
`gamma_distribution` and `beta_distribution`.

### distribution

<a id="entry-presentation_python_statistics_capability_probability_distribution_api_probability_session_distribution"></a>
<a id="placement-placement.python.python_module.module_distribution.99e19fa872d0"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
distribution(
    name: str,
    parameters: Iterable[ExpressionLike],
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_distribution.ab03278ee9a0"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.distribution</code></p>

```python signature
distribution(
    name: str,
    parameters: Iterable[ExpressionLike],
) -> Expression
```

</details>


Build a distribution node from a family name and its ordered parameter list
(e.g. `distribution("normal", [mean, standard_deviation])`). An unknown name
raises an invalid-option error. A parameter count that does not match the
family's arity raises a collection-shape error; it does not create an
`undefined` mathematical value.

### random_variable

<a id="entry-presentation_python_statistics_capability_probability_random_variable_api_probability_session_random_variable"></a>
<a id="placement-placement.python.python_module.module_random_variable.e8379bd928e7"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
random_variable(name: str, distribution: ExpressionLike) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_random_variable.8afa72c52272"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.random_variable</code></p>

```python signature
random_variable(name: str, distribution: ExpressionLike) -> Expression
```

</details>


Build a random variable named `name` drawn from `distribution`. Each call
interns a distinct symbol, so two draws from the same distribution stay
independent under hash-consing.

### density

<a id="entry-presentation_python_statistics_capability_probability_density_api_probability_session_density"></a>
<a id="placement-placement.python.python_module.module_density.44b9d8513f98"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
density(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_density.1024ad42d312"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.density</code></p>

```python signature
density(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

</details>


Probability density (continuous families) or probability mass (discrete
families) of `random_variable` evaluated at `point`. Falls back to an
unevaluated structural form when no closed form exists.

### cumulative_distribution

<a id="entry-presentation_python_statistics_capability_probability_cumulative_distribution_api_probability_session_cumulative_distribution"></a>
<a id="placement-placement.python.python_module.module_cumulative_distribution.fed9e9b364fa"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cumulative_distribution(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cumulative_distribution.2c15953c82f4"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulative_distribution</code></p>

```python signature
cumulative_distribution(
    random_variable: ExpressionLike,
    point: ExpressionLike,
) -> Expression
```

</details>


Cumulative distribution function of `random_variable` evaluated at `point`.

### expectation

<a id="entry-presentation_python_statistics_capability_probability_expectation_api_probability_session_expectation"></a>
<a id="placement-placement.python.python_module.module_expectation.18ccccad83ac"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
expectation(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_expectation.8318ca750073"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.expectation</code></p>

```python signature
expectation(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>


Expectation of `target` over the listed independent random variables. Linearity
and the constant-factor lift are applied; bare and power-of-random-variable
leaves consume the distribution's mean and raw moments.

### variance

<a id="entry-presentation_python_statistics_capability_probability_variance_api_probability_session_variance"></a>
<a id="placement-placement.python.python_module.module_variance.c842ecc5717d"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
variance(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_variance.d35f662e74b6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.variance</code></p>

```python signature
variance(
    target: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>


Variance of `target` over the listed independent random variables.

### covariance

<a id="entry-presentation_python_statistics_capability_probability_covariance_api_probability_session_covariance"></a>
<a id="placement-placement.python.python_module.module_covariance.1d9bb3cec96e"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
covariance(
    left: ExpressionLike,
    right: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_covariance.a6be9e049ae6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.covariance</code></p>

```python signature
covariance(
    left: ExpressionLike,
    right: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>


Covariance of `left` and `right` over the listed independent random variables;
zero for independent operands.

### probability

<a id="entry-presentation_python_statistics_capability_probability_probability_api_probability_session_probability"></a>
<a id="placement-placement.python.python_module.module_probability.1fd29c23b842"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
probability(
    predicate: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_probability.ac4050c8baed"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.probability</code></p>

```python signature
probability(
    predicate: ExpressionLike,
    random_variables: Iterable[ExpressionLike],
) -> Expression
```

</details>


Probability that `predicate` (a tail comparison such as `X > t`) holds over the
listed independent random variables.

### moment

<a id="entry-presentation_python_statistics_capability_probability_moment_api_probability_session_moment"></a>
<a id="placement-placement.python.python_module.module_moment.fa9725983b7b"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
moment(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_moment.a6493217bef6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.moment</code></p>

```python signature
moment(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

</details>


The `order`-th raw moment `E[X^order]` of `random_variable`.

### cumulant

<a id="entry-presentation_python_statistics_capability_probability_cumulant_api_probability_session_cumulant"></a>
<a id="placement-placement.python.python_module.module_cumulant.03a574ea9dbd"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
cumulant(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_cumulant.90245cc0ca22"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cumulant</code></p>

```python signature
cumulant(
    random_variable: ExpressionLike,
    order: ExpressionLike,
) -> Expression
```

</details>


The `order`-th cumulant of `random_variable`.

### moment_generating_function

<a id="entry-presentation_python_statistics_capability_probability_moment_generating_function_api_probability_session_moment_generating_function"></a>
<a id="placement-placement.python.python_module.module_moment_generating_function.9346d977ea00"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
moment_generating_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_moment_generating_function.2b624dc66039"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.moment_generating_function</code></p>

```python signature
moment_generating_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

</details>


Closed-form moment generating function `M_X(t)` of `random_variable` in the
named auxiliary variable, when elementary; otherwise an unevaluated structural
form.

### characteristic_function

<a id="entry-presentation_python_statistics_capability_probability_characteristic_function_api_probability_session_characteristic_function"></a>
<a id="placement-placement.python.python_module.module_characteristic_function.1b31581d27c3"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
characteristic_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_characteristic_function.8299398476e6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.characteristic_function</code></p>

```python signature
characteristic_function(
    random_variable: ExpressionLike,
    auxiliary_variable: VariableLike,
) -> Expression
```

</details>


Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named
auxiliary variable, when elementary; otherwise an unevaluated structural form.

## Example

Build a random variable, then read its exact moments.

```python
import symi

x = symi.symbol("x")
mean = symi.symbol("mean")
deviation = symi.symbol("deviation", positive=True)

variable = symi.random_variable(
    "measurement", symi.distribution("normal", [mean, deviation])
)

print(symi.density(variable, x))
print(symi.expectation(variable, [variable]))
print(symi.variance(variable, [variable]))
```

