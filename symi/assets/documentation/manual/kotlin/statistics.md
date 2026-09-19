# Statistics

Symbolic probability distributions (univariate first tier) and random-variable
algebra. A *distribution* node names a parametrised family; a *random variable*
node names a draw from a distribution. Distinct draws from the same distribution
are independent by default. The [complete distribution registry](distribution-reference.md)
lists every accepted family, its ordered parameters, support, and closed-form
operations. The canonical names for the gamma and beta families are
`gamma_distribution` and `beta_distribution`.

### distribution

<a id="entry-presentation_kotlin_statistics_capability_probability_distribution_api_probability_session_distribution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_distribution.50e720f7e2c8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun distribution(
    name: kotlin.String,
    parameters: List<UniffiExpression>,
): UniffiExpression
```


Build a distribution node from a family name and its ordered parameter list
(e.g. `distribution("normal", [mean, standard_deviation])`). An unknown name
raises an invalid-option error. A parameter count that does not match the
family's arity raises a collection-shape error; it does not create an
`undefined` mathematical value.

### random_variable

<a id="entry-presentation_kotlin_statistics_capability_probability_random_variable_api_probability_session_random_variable"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_randomvariable.fd2baaf6aae8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun randomVariable(
    name: kotlin.String,
    distribution: UniffiExpression,
): UniffiExpression
```


Build a random variable named `name` drawn from `distribution`. Each call
interns a distinct symbol, so two draws from the same distribution stay
independent under hash-consing.

### density

<a id="entry-presentation_kotlin_statistics_capability_probability_density_api_probability_session_density"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_density.8474843b0a00"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun density(
    randomVariable: UniffiExpression,
    point: UniffiExpression,
): UniffiExpression
```


Probability density (continuous families) or probability mass (discrete
families) of `random_variable` evaluated at `point`. Falls back to an
unevaluated structural form when no closed form exists.

### cumulative_distribution

<a id="entry-presentation_kotlin_statistics_capability_probability_cumulative_distribution_api_probability_session_cumulative_distribution"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_cumulativedistribution.a21cdead2158"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun cumulativeDistribution(
    randomVariable: UniffiExpression,
    point: UniffiExpression,
): UniffiExpression
```


Cumulative distribution function of `random_variable` evaluated at `point`.

### expectation

<a id="entry-presentation_kotlin_statistics_capability_probability_expectation_api_probability_session_expectation"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_expectation.449a52b2a304"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun expectation(
    target: UniffiExpression,
    randomVariables: List<UniffiExpression>,
): UniffiExpression
```


Expectation of `target` over the listed independent random variables. Linearity
and the constant-factor lift are applied; bare and power-of-random-variable
leaves consume the distribution's mean and raw moments.

### variance

<a id="entry-presentation_kotlin_statistics_capability_probability_variance_api_probability_session_variance"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_variance.d87240a7a239"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun variance(
    target: UniffiExpression,
    randomVariables: List<UniffiExpression>,
): UniffiExpression
```


Variance of `target` over the listed independent random variables.

### covariance

<a id="entry-presentation_kotlin_statistics_capability_probability_covariance_api_probability_session_covariance"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_covariance.e804b8cfcb4d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun covariance(
    left: UniffiExpression,
    right: UniffiExpression,
    randomVariables: List<UniffiExpression>,
): UniffiExpression
```


Covariance of `left` and `right` over the listed independent random variables;
zero for independent operands.

### probability

<a id="entry-presentation_kotlin_statistics_capability_probability_probability_api_probability_session_probability"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_probability.1c1ba6b2c786"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun probability(
    predicate: UniffiExpression,
    randomVariables: List<UniffiExpression>,
): UniffiExpression
```


Probability that `predicate` (a tail comparison such as `X > t`) holds over the
listed independent random variables.

### moment

<a id="entry-presentation_kotlin_statistics_capability_probability_moment_api_probability_session_moment"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_moment.49f68e6872e8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun moment(
    randomVariable: UniffiExpression,
    order: UniffiExpression,
): UniffiExpression
```


The `order`-th raw moment `E[X^order]` of `random_variable`.

### cumulant

<a id="entry-presentation_kotlin_statistics_capability_probability_cumulant_api_probability_session_cumulant"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_cumulant.a21aa9e30293"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun cumulant(
    randomVariable: UniffiExpression,
    order: UniffiExpression,
): UniffiExpression
```


The `order`-th cumulant of `random_variable`.

### moment_generating_function

<a id="entry-presentation_kotlin_statistics_capability_probability_moment_generating_function_api_probability_session_moment_generating_function"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_momentgeneratingfunction.89e42436813d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun momentGeneratingFunction(
    randomVariable: UniffiExpression,
    auxiliaryVariable: kotlin.String,
): UniffiExpression
```


Closed-form moment generating function `M_X(t)` of `random_variable` in the
named auxiliary variable, when elementary; otherwise an unevaluated structural
form.

### characteristic_function

<a id="entry-presentation_kotlin_statistics_capability_probability_characteristic_function_api_probability_session_characteristic_function"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_characteristicfunction.dc6471efa34f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun characteristicFunction(
    randomVariable: UniffiExpression,
    auxiliaryVariable: kotlin.String,
): UniffiExpression
```


Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named
auxiliary variable, when elementary; otherwise an unevaluated structural form.

## Example

