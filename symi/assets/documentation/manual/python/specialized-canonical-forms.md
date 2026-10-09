# Specialized canonical forms

These transformations have a fixed normal-form contract: each one produces a
determined shape and never runs the heuristic search used by
[`simplify`](simplification-general.md#simplify). Use them when the output
shape matters more than minimal size.

Related rewrites are on [algebraic transforms](algebraic-transforms.md) and
[trigonometric and complex rewrites](trigonometric-complex-rewrites.md).

## Canonical presentation passes

### piecewise_fold

<a id="placement-placement.python.python_class.context_piecewise_fold.3809a811317d"></a>
`Context.piecewise_fold(input_expression)`

<a id="placement-placement.python.python_class.expression_piecewise_fold.e463070ebd17"></a>
`Expression.piecewise_fold()`

<a id="placement-placement.python.python_module.module_piecewise_fold.e1827f0a9a92"></a>
`symi.piecewise_fold(input_expression)`



Expand `abs`, `signum`, and `heaviside_step` definitions recursively and fold
piecewise operands of sums, products, powers, factorials, and ordinary function
calls into one top-level piecewise expression. For example, `x*abs(x - 1)`
becomes the exact two-branch definition with values `x*(x - 1)` and
`-x*(x - 1)`. Branch combinations retain first-match order and conditions are
conjoined exactly.

Each structural fold is limited to 16 branches and 128 stored nodes, with a
per-input growth limit of eight times the source node count. A node that would
exceed a limit remains unfolded; the operation still returns an exact,
equality-preserving expression and may therefore return the input unchanged.

### rewrite_special_functions

<a id="placement-placement.python.python_class.context_rewrite_special_functions.958e24eee5dd"></a>
`Context.rewrite_special_functions(input_expression, basis)`

<a id="placement-placement.python.python_class.expression_rewrite_special_functions.35eeabf2bebb"></a>
`Expression.rewrite_special_functions(basis)`

<a id="placement-placement.python.python_module.module_rewrite_special_functions.36605b379310"></a>
`symi.rewrite_special_functions(input_expression, basis)`



Rewrite beta, gamma, binomial, factorial, and rising-factorial representations
into the requested `"gamma"`, `"factorial"`, `"binomial"`, or
`"rising_factorial"` basis. The exact identities are applied only when their
domain gates are proven: factorial and binomial conversions require the
relevant non-negative integers, rising-factorial conversions additionally
require a positive base, and beta-to-gamma requires two positive arguments.
For example, with `n` declared a positive integer, `n!` may be rewritten into
the gamma basis and `gamma(n)` into the factorial basis. A site with
unconstrained arguments is returned unchanged. Gamma ratios with a literal
non-negative argument offset are minimized to their exact shifted product.

The context method, expression convenience method, and module function have
the same behavior. An unknown basis name raises an explicit error; there is no
force mode.

### presentation_normal_form

<a id="placement-placement.python.python_class.context_presentation_normal_form.46db54a811e3"></a>
`Context.presentation_normal_form(input_expression)`

<a id="placement-placement.python.python_class.expression_presentation_normal_form.56042dc7923e"></a>
`Expression.presentation_normal_form()`

<a id="placement-placement.python.python_module.module_presentation_normal_form.f7b7b62a0b39"></a>
`symi.presentation_normal_form(input_expression)`



The cheap, bounded display-oriented pass run at solver output seams: rational
normal form only, kept only when the weighted complexity does not grow.
Unlike `simplify` it never runs the full heuristic ladder, so it is fast and
deterministic in shape.

## Example

Each pass produces a determined shape rather than a smallest form.

```python
import symi

x = symi.symbol("x")
n = symi.symbol("n", integer=True, positive=True)
branches = symi.piecewise([
    (symi.less_than(x, 0), -x),
    (symi.logical_true, x),
])

print(symi.piecewise_fold(branches))
print(symi.presentation_normal_form(1 / x + 1 / (x + 1)))
print(symi.rewrite_special_functions(symi.gamma(n), "factorial"))
```

