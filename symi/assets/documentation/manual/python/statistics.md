# Statistics

Symbolic probability distributions (univariate first tier) and random-variable
algebra. A *distribution* node names a parametrised family; a *random variable*
node names a draw from a distribution. Distinct draws from the same distribution
are independent by default. The [complete distribution registry](distribution-reference.md)
lists every accepted family, its ordered parameters, support, and closed-form
operations. The canonical names for the gamma and beta families are
`gamma_distribution` and `beta_distribution`.

### distribution

<a id="placement-placement.python.python_class.context_distribution.ab03278ee9a0"></a>
`Context.distribution(name, parameters)`

<a id="placement-placement.python.python_module.module_distribution.99e19fa872d0"></a>
`symi.distribution(name, parameters)`


Build a distribution node from a family name and its ordered parameter list
(e.g. `distribution("normal", [mean, standard_deviation])`). An unknown name
raises an invalid-option error. A parameter count that does not match the
family's arity raises a collection-shape error; it does not create an
`undefined` mathematical value.

### random_variable

<a id="placement-placement.python.python_class.context_random_variable.8afa72c52272"></a>
`Context.random_variable(name, distribution)`

<a id="placement-placement.python.python_module.module_random_variable.e8379bd928e7"></a>
`symi.random_variable(name, distribution)`


Build a random variable named `name` drawn from `distribution`. Each call
interns a distinct symbol, so two draws from the same distribution stay
independent under hash-consing.

### density

<a id="placement-placement.python.python_class.context_density.1024ad42d312"></a>
`Context.density(random_variable, point)`

<a id="placement-placement.python.python_module.module_density.44b9d8513f98"></a>
`symi.density(random_variable, point)`


Probability density (continuous families) or probability mass (discrete
families) of `random_variable` evaluated at `point`. Falls back to an
unevaluated structural form when no closed form exists.

### cumulative_distribution

<a id="placement-placement.python.python_class.context_cumulative_distribution.2c15953c82f4"></a>
`Context.cumulative_distribution(random_variable, point)`

<a id="placement-placement.python.python_module.module_cumulative_distribution.fed9e9b364fa"></a>
`symi.cumulative_distribution(random_variable, point)`


Cumulative distribution function of `random_variable` evaluated at `point`.

### expectation

<a id="placement-placement.python.python_class.context_expectation.8318ca750073"></a>
`Context.expectation(target, random_variables)`

<a id="placement-placement.python.python_module.module_expectation.18ccccad83ac"></a>
`symi.expectation(target, random_variables)`


Expectation of `target` over the listed independent random variables. Linearity
and the constant-factor lift are applied; bare and power-of-random-variable
leaves consume the distribution's mean and raw moments.

### variance

<a id="placement-placement.python.python_class.context_variance.d35f662e74b6"></a>
`Context.variance(target, random_variables)`

<a id="placement-placement.python.python_module.module_variance.c842ecc5717d"></a>
`symi.variance(target, random_variables)`


Variance of `target` over the listed independent random variables.

### covariance

<a id="placement-placement.python.python_class.context_covariance.a6be9e049ae6"></a>
`Context.covariance(left, right, random_variables)`

<a id="placement-placement.python.python_module.module_covariance.1d9bb3cec96e"></a>
`symi.covariance(left, right, random_variables)`


Covariance of `left` and `right` over the listed independent random variables;
zero for independent operands.

### probability

<a id="placement-placement.python.python_class.context_probability.ac4050c8baed"></a>
`Context.probability(predicate, random_variables)`

<a id="placement-placement.python.python_module.module_probability.1fd29c23b842"></a>
`symi.probability(predicate, random_variables)`


Probability that `predicate` (a tail comparison such as `X > t`) holds over the
listed independent random variables.

### moment

<a id="placement-placement.python.python_class.context_moment.a6493217bef6"></a>
`Context.moment(random_variable, order)`

<a id="placement-placement.python.python_module.module_moment.fa9725983b7b"></a>
`symi.moment(random_variable, order)`


The `order`-th raw moment `E[X^order]` of `random_variable`.

### cumulant

<a id="placement-placement.python.python_class.context_cumulant.90245cc0ca22"></a>
`Context.cumulant(random_variable, order)`

<a id="placement-placement.python.python_module.module_cumulant.03a574ea9dbd"></a>
`symi.cumulant(random_variable, order)`


The `order`-th cumulant of `random_variable`.

### moment_generating_function

<a id="placement-placement.python.python_class.context_moment_generating_function.2b624dc66039"></a>
`Context.moment_generating_function(random_variable, auxiliary_variable)`

<a id="placement-placement.python.python_module.module_moment_generating_function.9346d977ea00"></a>
`symi.moment_generating_function(random_variable, auxiliary_variable)`


Closed-form moment generating function `M_X(t)` of `random_variable` in the
named auxiliary variable, when elementary; otherwise an unevaluated structural
form.

### characteristic_function

<a id="placement-placement.python.python_class.context_characteristic_function.8299398476e6"></a>
`Context.characteristic_function(random_variable, auxiliary_variable)`

<a id="placement-placement.python.python_module.module_characteristic_function.1b31581d27c3"></a>
`symi.characteristic_function(random_variable, auxiliary_variable)`


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

