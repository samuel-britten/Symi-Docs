# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="placement-placement.python.python_class.context_degree.bb4b6eca0c20"></a>
`Context.degree(input_expression, variable)`

<a id="placement-placement.python.python_module.module_degree.255ff853162b"></a>
`symi.degree(input_expression, variable)`


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

<a id="placement-placement.python.python_class.context_leading_coefficient.41a3fe2ba55f"></a>
`Context.leading_coefficient(input_expression, variable)`

<a id="placement-placement.python.python_module.module_leading_coefficient.30ccbe4ce993"></a>
`symi.leading_coefficient(input_expression, variable)`


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

<a id="placement-placement.python.python_class.context_coefficient.40e75eb53350"></a>
`Context.coefficient(input_expression, variable, power)`

<a id="placement-placement.python.python_class.partialdifferentialequationjetcoefficient_coefficient.8e9e167c35d1"></a>
`PartialDifferentialEquationJetCoefficient.coefficient`

<a id="placement-placement.python.python_class.partialdifferentialequationprincipalcoefficient_coefficient.2b29c8576cbc"></a>
`PartialDifferentialEquationPrincipalCoefficient.coefficient`

<a id="placement-placement.python.python_module.module_coefficient.c4dd39a9eb50"></a>
`symi.coefficient(input_expression, variable, power)`


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

<a id="placement-placement.python.python_class.context_polynomial_gcd.30ceebd4dcdb"></a>
`Context.polynomial_gcd(a, b, variable)`

<a id="placement-placement.python.python_module.module_polynomial_gcd.39fa5994e834"></a>
`symi.polynomial_gcd(a, b, variable)`


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="placement-placement.python.python_class.context_resultant.ee06f245060a"></a>
`Context.resultant(a, b, variable)`

<a id="placement-placement.python.python_module.module_resultant.e405fc22394a"></a>
`symi.resultant(a, b, variable)`


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="placement-placement.python.python_class.context_isolate_real_roots.e790d9fc2a3c"></a>
`Context.isolate_real_roots(input_expression, variable)`

<a id="placement-placement.python.python_module.module_isolate_real_roots.685131c37adf"></a>
`symi.isolate_real_roots(input_expression, variable)`


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

*Not exposed by the Python bindings. Available as [`UniffiIsolatingInterval.lower`](/symi/kotlin/polynomials#lower) in Kotlin, [`UniffiIsolatingInterval.lower`](/symi/swift/polynomials#lower) in Swift, [`api::results::IsolatingInterval::lower`](/symi/rust/polynomials#lower) in Rust.*


### upper

*Not exposed by the Python bindings. Available as [`UniffiIsolatingInterval.upper`](/symi/kotlin/polynomials#upper) in Kotlin, [`UniffiIsolatingInterval.upper`](/symi/swift/polynomials#upper) in Swift, [`api::results::IsolatingInterval::upper`](/symi/rust/polynomials#upper) in Rust.*


## Gröbner bases and ideals

These operate over the polynomial ring \(\mathbb{Q}[\text{variables}]\). Generators are passed
as an expression list; the ring variables are named by a string list; the
monomial order is named by a string (`"lexicographic"` / `"lex"`,
`"degree_lexicographic"` / `"deglex"`, or `"degree_reverse_lexicographic"` /
`"degrevlex"`, the computational default). Any generator that is not a
polynomial over \(\mathbb{Q}\) in the named variables — a transcendental call, a non-integer
power, an unnamed symbol, or an irrational coefficient — makes the operation
decline cleanly (Python `None`, WASM `null`); it never returns a wrong or
partial answer. Within \(\mathbb{Q}[\text{variables}]\) the results are exact and complete: a
returned basis is the canonical reduced Gröbner basis, membership is a genuine
decision, and elimination is exact by the Elimination Theorem.

**Performance.** The basis is computed by **F4** (Faugère's
batched Macaulay-matrix reduction), with a signature-based engine (**F5 / GVW**)
available internally; the reference Buchberger algorithm is retained as the
differential oracle these are checked against. The choice of engine is an
internal acceleration only: the result is **identical** to the reference
Buchberger basis for every input, and the monomial-order argument and the whole
binding surface are unchanged. These entry points simply run faster — there is
no new method to call.

### groebner_basis

<a id="placement-placement.python.python_class.context_groebner_basis.4684f56c6f16"></a>
`Context.groebner_basis(generators, variables, order=None)`

<a id="placement-placement.python.python_module.module_groebner_basis.4a0b56aabfeb"></a>
`symi.groebner_basis(generators, variables, order=None)`


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

<a id="placement-placement.python.python_class.context_ideal_membership.4dd014fcdee3"></a>
`Context.ideal_membership(element, generators, variables, order=None)`

<a id="placement-placement.python.python_module.module_ideal_membership.69c4c3618634"></a>
`symi.ideal_membership(element, generators, variables, order=None)`


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

<a id="placement-placement.python.python_class.context_ideal_sum.a325e677c420"></a>
`Context.ideal_sum(generators_left, generators_right, variables, order=None)`

<a id="placement-placement.python.python_module.module_ideal_sum.c9e7495dc415"></a>
`symi.ideal_sum(generators_left, generators_right, variables, order=None)`


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

<a id="placement-placement.python.python_class.context_ideal_product.398939b3253f"></a>
`Context.ideal_product(generators_left, generators_right, variables, order=None)`

<a id="placement-placement.python.python_module.module_ideal_product.975bfdbced05"></a>
`symi.ideal_product(generators_left, generators_right, variables, order=None)`


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

<a id="placement-placement.python.python_class.context_ideal_intersection.b6fbace27013"></a>
`Context.ideal_intersection(generators_left, generators_right, variables, order=None)`

<a id="placement-placement.python.python_module.module_ideal_intersection.2d3eef499cec"></a>
`symi.ideal_intersection(generators_left, generators_right, variables, order=None)`


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

<a id="placement-placement.python.python_class.context_elimination_ideal.bf56d3bbbcfa"></a>
`Context.elimination_ideal(generators, variables, eliminate)`

<a id="placement-placement.python.python_module.module_elimination_ideal.2e1c0485c830"></a>
`symi.elimination_ideal(generators, variables, eliminate)`


A Gröbner basis of the elimination ideal \(\langle\operatorname{generators}\rangle \cap
\mathbb{Q}[\text{surviving variables}]\), projecting away the variables named in `eliminate` via the
Elimination Theorem (a block order ranks the eliminated variables high and the
generators free of them are kept). Exact: it neither drops nor introduces
components. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator. Example: eliminating `t`
from \(\{x - t^2, y - t^3\}\) returns the twisted-cubic implicit equation \(y^2 - x^3\).

## Order change and implicitisation

These consume a Gröbner basis rather than compute one from scratch. The order
change runs the standard FGLM algorithm; implicitisation is parameter
elimination with the rational-parametrisation saturation wired in.

### change_monomial_order

<a id="placement-placement.python.python_class.context_change_monomial_order.ba2a72818a67"></a>
`Context.change_monomial_order(basis, variables, source_order, target_order)`

<a id="placement-placement.python.python_module.module_change_monomial_order.25caa642bc5b"></a>
`symi.change_monomial_order(basis, variables, source_order, target_order)`


Convert a Gröbner basis of a **zero-dimensional** ideal from `source_order` to
`target_order` by FGLM (Faugère–Gianni–Lazard–Mora) — linear algebra in the
finite-dimensional quotient ring \(\mathbb{Q}[\text{variables}]/I\), far cheaper than computing
the target basis directly (the msolve route to a lexicographic basis is a cheap
`degrevlex` basis followed by this conversion). The result is the **canonical
reduced** Gröbner basis under `target_order`, identical to a direct
`groebner_basis` call. `None` when the ideal is positive-dimensional (the
quotient ring is infinite-dimensional, so FGLM does not apply) or any generator
is outside \(\mathbb{Q}[\text{variables}]\).

### implicitize

<a id="placement-placement.python.python_class.context_implicitize.3f4088cb5f55"></a>
`Context.implicitize(coordinates, parameters, parametric_expressions)`

<a id="placement-placement.python.python_module.module_implicitize.5dc8d52f5239"></a>
`symi.implicitize(coordinates, parameters, parametric_expressions)`


The implicit ideal of a parametric curve or surface \(x_i = f_i(\operatorname{parameters})\) (the
i-th coordinate paired with the i-th parametric expression), returned as a
generator list over \(\mathbb{Q}[\text{coordinates}]\) — the elimination of the parameters
(Cox–Little–O'Shea ch. 3). A **polynomial** parametrisation eliminates the
parameters directly; a **rational** one \(f_i = p_i/q_i\) clears denominators and
**saturates** by the denominator product through a fresh tag variable, so the
eliminant is the true implicit equation rather than a multiple carrying spurious
components. `None` when a parametric expression is outside \(\mathbb{Q}(\operatorname{parameters})\) or
there are no parameters. Examples: \(\{x = t^2, y = t^3\}\) returns \(y^2 - x^3\);
\(\{x = (1 - t^2)/(1 + t^2), y = 2t/(1 + t^2)\}\) returns \(x^2 + y^2 - 1\).

## Example

Polynomial structure is read through explicit generators.

```python
import symi

x = symi.symbol("x")
polynomial = x**3 - 2 * x + 1

print(symi.degree(polynomial, "x"))
print(symi.leading_coefficient(polynomial, "x"))
print(symi.coefficient(polynomial, "x", 1))
print(symi.polynomial_gcd(x**2 - 1, x - 1, "x"))
print(symi.resultant(x**2 - 1, x - 1, "x"))
```


## Additional API

<a id="placement-placement.python.python_class.cylindricalalgebraicdecomposition.6f69ff9d363f"></a>
### CylindricalAlgebraicDecomposition

`CylindricalAlgebraicDecomposition(expressions, variables, equational_constraints = [])`

Returns `Self`.

