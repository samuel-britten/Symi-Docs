# Statistics

Symbolic probability distributions (univariate first tier) and random-variable
algebra. A *distribution* node names a parametrised family; a *random variable*
node names a draw from a distribution. Distinct draws from the same distribution
are independent by default. The [complete distribution registry](distribution-reference.md)
lists every accepted family, its ordered parameters, support, and closed-form
operations. The canonical names for the gamma and beta families are
`gamma_distribution` and `beta_distribution`.

### distribution

<a id="placement-placement.kotlin.kotlin_object.uniffisession_distribution.50e720f7e2c8"></a>
`UniffiSession.distribution(name: kotlin.String, parameters: List<UniffiExpression>): UniffiExpression`


Build a distribution node from a family name and its ordered parameter list
(e.g. `distribution("normal", [mean, standard_deviation])`). An unknown name
raises an invalid-option error. A parameter count that does not match the
family's arity raises a collection-shape error; it does not create an
`undefined` mathematical value.

### random_variable

<a id="placement-placement.kotlin.kotlin_object.uniffisession_randomvariable.fd2baaf6aae8"></a>
`UniffiSession.randomVariable(name: kotlin.String, distribution: UniffiExpression): UniffiExpression`


Build a random variable named `name` drawn from `distribution`. Each call
interns a distinct symbol, so two draws from the same distribution stay
independent under hash-consing.

### density

<a id="placement-placement.kotlin.kotlin_object.uniffisession_density.8474843b0a00"></a>
`UniffiSession.density(randomVariable: UniffiExpression, point: UniffiExpression): UniffiExpression`


Probability density (continuous families) or probability mass (discrete
families) of `random_variable` evaluated at `point`. Falls back to an
unevaluated structural form when no closed form exists.

### cumulative_distribution

<a id="placement-placement.kotlin.kotlin_object.uniffisession_cumulativedistribution.a21cdead2158"></a>
`UniffiSession.cumulativeDistribution(randomVariable: UniffiExpression, point: UniffiExpression): UniffiExpression`


Cumulative distribution function of `random_variable` evaluated at `point`.

### expectation

<a id="placement-placement.kotlin.kotlin_object.uniffisession_expectation.449a52b2a304"></a>
`UniffiSession.expectation(target: UniffiExpression, randomVariables: List<UniffiExpression>): UniffiExpression`


Expectation of `target` over the listed independent random variables. Linearity
and the constant-factor lift are applied; bare and power-of-random-variable
leaves consume the distribution's mean and raw moments.

### variance

<a id="placement-placement.kotlin.kotlin_object.uniffisession_variance.d87240a7a239"></a>
`UniffiSession.variance(target: UniffiExpression, randomVariables: List<UniffiExpression>): UniffiExpression`


Variance of `target` over the listed independent random variables.

### covariance

<a id="placement-placement.kotlin.kotlin_object.uniffisession_covariance.e804b8cfcb4d"></a>
`UniffiSession.covariance(left: UniffiExpression, right: UniffiExpression, randomVariables: List<UniffiExpression>): UniffiExpression`


Covariance of `left` and `right` over the listed independent random variables;
zero for independent operands.

### probability

<a id="placement-placement.kotlin.kotlin_object.uniffisession_probability.1c1ba6b2c786"></a>
`UniffiSession.probability(predicate: UniffiExpression, randomVariables: List<UniffiExpression>): UniffiExpression`


Probability that `predicate` (a tail comparison such as `X > t`) holds over the
listed independent random variables.

### moment

<a id="placement-placement.kotlin.kotlin_object.uniffisession_moment.49f68e6872e8"></a>
`UniffiSession.moment(randomVariable: UniffiExpression, order: UniffiExpression): UniffiExpression`


The `order`-th raw moment `E[X^order]` of `random_variable`.

### cumulant

<a id="placement-placement.kotlin.kotlin_object.uniffisession_cumulant.a21aa9e30293"></a>
`UniffiSession.cumulant(randomVariable: UniffiExpression, order: UniffiExpression): UniffiExpression`


The `order`-th cumulant of `random_variable`.

### moment_generating_function

<a id="placement-placement.kotlin.kotlin_object.uniffisession_momentgeneratingfunction.89e42436813d"></a>
`UniffiSession.momentGeneratingFunction(randomVariable: UniffiExpression, auxiliaryVariable: kotlin.String): UniffiExpression`


Closed-form moment generating function `M_X(t)` of `random_variable` in the
named auxiliary variable, when elementary; otherwise an unevaluated structural
form.

### characteristic_function

<a id="placement-placement.kotlin.kotlin_object.uniffisession_characteristicfunction.dc6471efa34f"></a>
`UniffiSession.characteristicFunction(randomVariable: UniffiExpression, auxiliaryVariable: kotlin.String): UniffiExpression`


Closed-form characteristic function \(\varphi_X(t)\) of `random_variable` in the named
auxiliary variable, when elementary; otherwise an unevaluated structural form.

## Example

