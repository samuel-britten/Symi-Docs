# Polynomial queries

These take ordinary expressions plus a variable name; the named variable
becomes the main polynomial variable and every other free variable rides
along symbolically in the coefficients. An expression that is not polynomial
in the variable (a transcendental call of it, a non-integer power of it)
makes the query decline — `None` for `degree`, an error for the others.

### degree

<a id="entry-presentation_wasm_api_session_degree"></a>
<a id="placement-placement.wasm.wasm_module.module_degree.b2d823ac32d1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
degree(
    input_expression: Expression,
    variable: string,
): number | undefined
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_degree.d5afc93f0991"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.degree</code></p>

```typescript signature
degree(
    input_expression: Expression,
    variable: string,
): number | undefined
```

</details>


Degree in `variable`. `None` when the expression is not polynomial in
`variable` **or is identically zero** (the zero polynomial has no degree
under the core convention).

### leading_coefficient

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.leading_coefficient`](/symi/python/polynomials#leading_coefficient) in Python, [`UniffiSession.leadingCoefficient`](/symi/kotlin/polynomials#leading_coefficient) in Kotlin, [`UniffiSession.leadingCoefficient`](/symi/swift/polynomials#leading_coefficient) in Swift, [`api::algebra::Session::leading_coefficient`](/symi/rust/polynomials#leading_coefficient) in Rust.*


Coefficient of the highest power of `variable`; may contain the other free
variables. Errors on non-polynomial or zero input.

### coefficient

<a id="entry-presentation_wasm_api_session_coefficient"></a>
<a id="placement-placement.wasm.wasm_module.module_coefficient.b04c0fe2497b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
coefficient(
    input_expression: Expression,
    variable: string,
    power: number,
): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_coefficient.8facb544769d"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.coefficient</code></p>

```typescript signature
coefficient(
    input_expression: Expression,
    variable: string,
    power: number,
): Expression
```

</details>


Coefficient of `variable^power`; integer 0 when the term is absent. Errors
on non-polynomial input.

### polynomial_gcd

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.polynomial_gcd`](/symi/python/polynomials#polynomial_gcd) in Python, [`UniffiSession.polynomialGcd`](/symi/kotlin/polynomials#polynomial_gcd) in Kotlin, [`UniffiSession.polynomialGcd`](/symi/swift/polynomials#polynomial_gcd) in Swift, [`api::algebra::Session::polynomial_gcd`](/symi/rust/polynomials#polynomial_gcd) in Rust.*


Greatest common divisor of the two expressions as polynomials in `variable`
(primitive, with the core's sign normalisation). Errors when either input is
not polynomial in `variable`.

### resultant

<a id="entry-presentation_wasm_api_session_resultant"></a>
<a id="placement-placement.wasm.wasm_module.module_resultant.fd887f886ff7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
resultant(a: Expression, b: Expression, variable: string): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_resultant.a85ac4158e89"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.resultant</code></p>

```typescript signature
resultant(a: Expression, b: Expression, variable: string): Expression
```

</details>


Resultant with respect to `variable`; zero exactly when the two polynomials
share a root (over the algebraic closure). Errors on non-polynomial input.

### isolate_real_roots

<a id="entry-presentation_wasm_api_session_isolate_real_roots"></a>
<a id="placement-placement.wasm.wasm_module.module_isolaterealroots.fdc9ee498713"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
isolateRealRoots(
    input_expression: Expression,
    variable: string,
): IsolatingInterval[]
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_isolaterealroots.67ba1eadfe31"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.isolateRealRoots</code></p>

```typescript signature
isolateRealRoots(
    input_expression: Expression,
    variable: string,
): IsolatingInterval[]
```

</details>


One `(lower, upper)` rational isolating interval per distinct real root,
sorted ascending; a collapsed pair `(r, r)` marks an exact rational root.
Requires a non-zero **univariate** polynomial with rational coefficients.
**Notes:** WASM returns `IsolatingInterval` objects with `lower`/`upper`
getters.

### isolating_interval (WASM result class)

### lower

<a id="entry-presentation_wasm_api_isolatinginterval_lower"></a>
<a id="placement-placement.wasm.wasm_class.isolatinginterval_lower.fbc0bf3f0386"></a>
<p class="symi-entry-owner">Raw WebAssembly: IsolatingInterval property</p>

```typescript signature
readonly lower: Expression
```

Lower endpoint of the isolating interval.

### upper

<a id="entry-presentation_wasm_api_isolatinginterval_upper"></a>
<a id="placement-placement.wasm.wasm_class.isolatinginterval_upper.c137d742d426"></a>
<p class="symi-entry-owner">Raw WebAssembly: IsolatingInterval property</p>

```typescript signature
readonly upper: Expression
```

Upper endpoint of the isolating interval.

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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.groebner_basis`](/symi/python/polynomials#groebner_basis) in Python, [`UniffiSession.groebnerBasis`](/symi/kotlin/polynomials#groebner_basis) in Kotlin, [`UniffiSession.groebnerBasis`](/symi/swift/polynomials#groebner_basis) in Swift, [`api::algebra::Session::groebner_basis`](/symi/rust/polynomials#groebner_basis) in Rust.*


The canonical reduced Gröbner basis of the ideal `<generators>` under the named
monomial order — monic, autoreduced, and sorted, so it is unique for the
`(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_membership

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_membership`](/symi/python/polynomials#ideal_membership) in Python, [`UniffiSession.idealMembership`](/symi/kotlin/polynomials#ideal_membership) in Kotlin, [`UniffiSession.idealMembership`](/symi/swift/polynomials#ideal_membership) in Swift, [`api::algebra::Session::ideal_membership`](/symi/rust/polynomials#ideal_membership) in Rust.*


Whether `element` lies in the ideal `<generators>`, decided by reducing it to
its normal form modulo the Gröbner basis (zero exactly when it is a member).
The verdict is independent of the order. `None` when the element or a generator
is outside \(\mathbb{Q}[\text{variables}]\).

### ideal_sum

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_sum`](/symi/python/polynomials#ideal_sum) in Python, [`UniffiSession.idealSum`](/symi/kotlin/polynomials#ideal_sum) in Kotlin, [`UniffiSession.idealSum`](/symi/swift/polynomials#ideal_sum) in Swift, [`api::algebra::Session::ideal_sum`](/symi/rust/polynomials#ideal_sum) in Rust.*


A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two
generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_product

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_product`](/symi/python/polynomials#ideal_product) in Python, [`UniffiSession.idealProduct`](/symi/kotlin/polynomials#ideal_product) in Kotlin, [`UniffiSession.idealProduct`](/symi/swift/polynomials#ideal_product) in Swift, [`api::algebra::Session::ideal_product`](/symi/rust/polynomials#ideal_product) in Rust.*


A Gröbner basis of the ideal product \(I J\), generated by all pairwise
products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

### ideal_intersection

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.ideal_intersection`](/symi/python/polynomials#ideal_intersection) in Python, [`UniffiSession.idealIntersection`](/symi/kotlin/polynomials#ideal_intersection) in Kotlin, [`UniffiSession.idealIntersection`](/symi/swift/polynomials#ideal_intersection) in Swift, [`api::algebra::Session::ideal_intersection`](/symi/rust/polynomials#ideal_intersection) in Rust.*


A generating set of the ideal intersection \(I \cap J\), computed by the standard
tag-variable elimination construction \(t I + (1-t) J\). `None` on a
non-\(\mathbb{Q}[\text{variables}]\) generator.

### elimination_ideal

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.elimination_ideal`](/symi/python/polynomials#elimination_ideal) in Python, [`UniffiSession.eliminationIdeal`](/symi/kotlin/polynomials#elimination_ideal) in Kotlin, [`UniffiSession.eliminationIdeal`](/symi/swift/polynomials#elimination_ideal) in Swift, [`api::algebra::Session::elimination_ideal`](/symi/rust/polynomials#elimination_ideal) in Rust.*


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

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.change_monomial_order`](/symi/python/polynomials#change_monomial_order) in Python, [`UniffiSession.changeMonomialOrder`](/symi/kotlin/polynomials#change_monomial_order) in Kotlin, [`UniffiSession.changeMonomialOrder`](/symi/swift/polynomials#change_monomial_order) in Swift, [`api::algebra::Session::change_monomial_order`](/symi/rust/polynomials#change_monomial_order) in Rust.*


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

<a id="entry-presentation_wasm_api_session_implicitize"></a>
<a id="placement-placement.wasm.wasm_module.module_implicitize.a997715b9750"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
implicitize(
    coordinates: string[],
    parameters: string[],
    parametric_expressions: Expression[],
): Expression[] | undefined
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_implicitize.05ec5f6bd5e5"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.implicitize</code></p>

```typescript signature
implicitize(
    coordinates: string[],
    parameters: string[],
    parametric_expressions: Expression[],
): Expression[] | undefined
```

</details>


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

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

### Context

<a id="entry-presentation_wasm_host_wasm_symifacade_context"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_context.8eb8851d9fac"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Context: ContextConstructor
```

Public property placement for Context.

### Expression

<a id="entry-presentation_wasm_host_wasm_symifacade_expression"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_expression.93094cdfa844"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Expression: unknown
```

Public property placement for Expression.

### Matrix

<a id="entry-presentation_wasm_host_wasm_symifacade_matrix"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.7fe47f8c649d"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
Matrix: unknown
```

Public property placement for Matrix.

### SymiContextError

<a id="entry-presentation_wasm_host_wasm_module_symicontexterror"></a>
<a id="placement-placement.wasm.javascript_facade.symicontexterror.8a9c0b29d21a"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiContextError extends SymiError {}
```

Public type placement for SymiContextError.

### SymiDomainError

<a id="entry-presentation_wasm_host_wasm_module_symidomainerror"></a>
<a id="placement-placement.wasm.javascript_facade.symidomainerror.ca3777e8db87"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiDomainError extends SymiError {}
```

Public type placement for SymiDomainError.

### SymiError

<a id="entry-presentation_wasm_host_wasm_module_symierror"></a>
<a id="placement-placement.wasm.javascript_facade.symierror.4dd8ef89912f"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiError extends Error
```

Public type placement for SymiError.

### SymiInternalError

<a id="entry-presentation_wasm_host_wasm_module_symiinternalerror"></a>
<a id="placement-placement.wasm.javascript_facade.symiinternalerror.9f964e7b647d"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiInternalError extends SymiError {}
```

Public type placement for SymiInternalError.

### SymiResourceError

<a id="entry-presentation_wasm_host_wasm_module_symiresourceerror"></a>
<a id="placement-placement.wasm.javascript_facade.symiresourceerror.e63a87983441"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiResourceError extends SymiError {}
```

Public type placement for SymiResourceError.

### SymiTypeError

<a id="entry-presentation_wasm_host_wasm_module_symitypeerror"></a>
<a id="placement-placement.wasm.javascript_facade.symitypeerror.f73719bf5950"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
class SymiTypeError extends SymiError {}
```

Public type placement for SymiTypeError.

### changeMonomialOrder

<a id="entry-presentation_wasm_api_session_change_monomial_order"></a>
<a id="placement-placement.wasm.wasm_module.module_changemonomialorder.fd8d2e8526b4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
changeMonomialOrder(
    basis: Expression[],
    variables: string[],
    source_order: string,
    target_order: string,
): Expression[] | undefined
```

Convert a Gröbner basis of a zero-dimensional ideal from `source_order` to `target_order` by FGLM (Faugère–Gianni–Lazard–Mora) — linear algebra in the finite-dimensional quotient ring \(\mathbb{Q}[\text{variables}]/I\), far cheaper than computing the target basis directly (the msolve route to a lexicographic basis is a cheap `degrevlex` basis followed by this conversion).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_changemonomialorder.e2a57ba75287"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.changeMonomialOrder</code></p>

```typescript signature
changeMonomialOrder(
    basis: Expression[],
    variables: string[],
    source_order: string,
    target_order: string,
): Expression[] | undefined
```

</details>

### eliminationIdeal

<a id="entry-presentation_wasm_api_session_elimination_ideal"></a>
<a id="placement-placement.wasm.wasm_module.module_eliminationideal.99af73451cd1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
eliminationIdeal(
    generators: Expression[],
    variables: string[],
    eliminate: string[],
): Expression[] | undefined
```

A Gröbner basis of the elimination ideal \(\langle\operatorname{generators}\rangle \cap \mathbb{Q}[\text{surviving variables}]\), projecting away the variables named in `eliminate` via the Elimination Theorem (a block order ranks the eliminated variables high and the generators free of them are kept).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_eliminationideal.04f94bd7d8f1"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.eliminationIdeal</code></p>

```typescript signature
eliminationIdeal(
    generators: Expression[],
    variables: string[],
    eliminate: string[],
): Expression[] | undefined
```

</details>

### free

<a id="entry-presentation_wasm_host_wasm_expression_free"></a>
<a id="placement-placement.wasm.javascript_facade.expression_free.04d9e93ee17b"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
free(): void
```

Public method placement for free.

### groebnerBasis

<a id="entry-presentation_wasm_api_session_groebner_basis"></a>
<a id="placement-placement.wasm.wasm_module.module_groebnerbasis.5de4c9b11109"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
groebnerBasis(
    generators: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

The canonical reduced Gröbner basis of the ideal `<generators>` under the named monomial order — monic, autoreduced, and sorted, so it is unique for the `(ideal, order)` pair. `None` when any generator is outside \(\mathbb{Q}[\text{variables}]\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_groebnerbasis.888872534bf7"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.groebnerBasis</code></p>

```typescript signature
groebnerBasis(
    generators: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

### idealIntersection

<a id="entry-presentation_wasm_api_session_ideal_intersection"></a>
<a id="placement-placement.wasm.wasm_module.module_idealintersection.6e49de3034aa"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
idealIntersection(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

A generating set of the ideal intersection \(I \cap J\), computed by the standard tag-variable elimination construction \(t I + (1-t) J\).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealintersection.acbee9138efd"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.idealIntersection</code></p>

```typescript signature
idealIntersection(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

### idealMembership

<a id="entry-presentation_wasm_api_session_ideal_membership"></a>
<a id="placement-placement.wasm.wasm_module.module_idealmembership.c719b9f17e53"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
idealMembership(
    element: Expression,
    generators: Expression[],
    variables: string[],
    order?: string | null,
): boolean | undefined
```

Whether `element` lies in the ideal `<generators>`, decided by reducing it to its normal form modulo the Gröbner basis (zero exactly when it is a member).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealmembership.c32c85f3e675"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.idealMembership</code></p>

```typescript signature
idealMembership(
    element: Expression,
    generators: Expression[],
    variables: string[],
    order?: string | null,
): boolean | undefined
```

</details>

### idealProduct

<a id="entry-presentation_wasm_api_session_ideal_product"></a>
<a id="placement-placement.wasm.wasm_module.module_idealproduct.fe3132e266f0"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
idealProduct(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

A Gröbner basis of the ideal product \(I J\), generated by all pairwise products of the two generator lists. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealproduct.a99fc7e4c6bf"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.idealProduct</code></p>

```typescript signature
idealProduct(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

### idealSum

<a id="entry-presentation_wasm_api_session_ideal_sum"></a>
<a id="placement-placement.wasm.wasm_module.module_idealsum.0fe68881ed36"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
idealSum(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

A Gröbner basis of the ideal sum `I + J`, the ideal generated by the two generator lists together. `None` on a non-\(\mathbb{Q}[\text{variables}]\) generator.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_idealsum.cd86d2191b7e"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.idealSum</code></p>

```typescript signature
idealSum(
    generators_left: Expression[],
    generators_right: Expression[],
    variables: string[],
    order?: string | null,
): Expression[] | undefined
```

</details>

### leadingCoefficient

<a id="entry-presentation_wasm_api_session_leading_coefficient"></a>
<a id="placement-placement.wasm.wasm_module.module_leadingcoefficient.612cd4c6aaf2"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
leadingCoefficient(
    input_expression: Expression,
    variable: string,
): Expression
```

Coefficient of the highest power of `variable`; may contain the other free variables. Errors on non-polynomial or zero input.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_leadingcoefficient.fa8ae548276b"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.leadingCoefficient</code></p>

```typescript signature
leadingCoefficient(
    input_expression: Expression,
    variable: string,
): Expression
```

</details>

### polynomialGcd

<a id="entry-presentation_wasm_api_session_polynomial_gcd"></a>
<a id="placement-placement.wasm.wasm_module.module_polynomialgcd.5dff4635a3c4"></a>
<p class="symi-entry-owner">Raw WebAssembly: Default context</p>

```typescript signature
polynomialGcd(
    a: Expression,
    b: Expression,
    variable: string,
): Expression
```

Greatest common divisor of the two expressions as polynomials in `variable` (primitive, with the core's sign normalisation).

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_polynomialgcd.32c4a46fd180"></a>
<p class="symi-entry-owner">Raw WebAssembly: Explicit context: <code>Context.polynomialGcd</code></p>

```typescript signature
polynomialGcd(
    a: Expression,
    b: Expression,
    variable: string,
): Expression
```

</details>

### raw

<a id="entry-presentation_wasm_host_wasm_symifacade_raw"></a>
<a id="placement-placement.wasm.javascript_facade.symifacade_raw.aef6294b0f07"></a>
<p class="symi-entry-owner">SymiFacade property</p>

```typescript signature
readonly raw: unknown
```

Public property placement for raw.

### toString

<a id="entry-presentation_wasm_api_expression_to_string"></a>
<a id="placement-placement.wasm.javascript_facade.expression_tostring.f0177b10aa8c"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
toString(): string
```

The mathematical text of the expression.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.expression_tostring.f64870e2f750"></a>
<p class="symi-entry-owner">Raw WebAssembly: Expression method: <code>Expression.toString</code></p>

```typescript signature
toString(): string
```

</details>

### PiecewiseBranch

<a id="entry-presentation_wasm_api_piecewisebranch"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch.d690830b18b4"></a>
<p class="symi-entry-owner">Type</p>

```typescript signature
interface PiecewiseBranch
```

Public type placement for PiecewiseBranch.

#### PiecewiseBranch.condition

<a id="entry-presentation_wasm_api_piecewisebranch_condition"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch_condition.64f74fb11773"></a>
<p class="symi-entry-owner">PiecewiseBranch property</p>

```typescript signature
condition: ExpressionLike
```

Public property placement for condition.

#### PiecewiseBranch.value

<a id="entry-presentation_wasm_api_piecewisebranch_value"></a>
<a id="placement-placement.wasm.javascript_facade.piecewisebranch_value.801f7c3c6459"></a>
<p class="symi-entry-owner">PiecewiseBranch property</p>

```typescript signature
value: ExpressionLike
```

Public property placement for value.

