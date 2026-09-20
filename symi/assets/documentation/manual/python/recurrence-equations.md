# Recurrence equations

A recurrence equation relates an unknown sequence to its own shifted values.
It is the discrete analogue of an [ordinary differential
equation](ordinary-differential-equations.md), and it is written the same way:
the unknown sequence is an [undefined function](undefined-functions.md)
evaluated at an index, and a shift is that function evaluated at `n + k`.

```python
context = symi.Context()
n = context.symbol("n")
a = context.undefined_function("a")
# \(a(n+2) = a(n+1) + a(n),\quad a(0) = 0,\ a(1) = 1\)
equation = a.call([n + 2]) - a.call([n + 1]) - a.call([n])
solution = context.solve_linear_recurrence(equation, a(n), "n", [(0, 0), (1, 1)])
# Binet's formula for the Fibonacci numbers
```

## Solving

### solve_linear_recurrence

<a id="entry-presentation_python_api_session_solve_linear_recurrence"></a>
<a id="placement-placement.python.python_module.module_solve_linear_recurrence.7c6ba50bd5f2"></a>
<p class="symi-entry-owner">Default context</p>

```python signature
solve_linear_recurrence(
    equation: ExpressionLike,
    sequence_call: ExpressionLike,
    index_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.python.python_class.context_solve_linear_recurrence.4787f699ed82"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.solve_linear_recurrence</code></p>

```python signature
solve_linear_recurrence(
    equation: ExpressionLike,
    sequence_call: ExpressionLike,
    index_variable: VariableLike,
    initial_conditions: Optional[Iterable[tuple[ExpressionLike, ExpressionLike]]] = None,
) -> Expression
```

</details>


Solve a linear recurrence for the unknown sequence named by `sequence_call`
(e.g. `a(n)`). Backward shifts are normalised by translating the whole
equation. Homogeneous recurrences with polynomial coefficients use Petkovšek's
Hyper algorithm; the general solution carries one fresh symbolic constant per
basis element. Constant-coefficient recurrences may be inhomogeneous when the
forcing is a sum of polynomial-times-exponential terms, with resonant trials
raised by the root multiplicity; recurrences whose coefficients are rational in
`n` and `c^n` are solved in that mixed field when a rational solution exists.
Other shapes return the unevaluated `recurrence_equation` placeholder.
`initial_conditions` is a list of `(index, value)` pairs. WASM passes a flat
interleaved array.

**Constant coefficients.** When every coefficient is a rational constant and
Petkovšek's basis is incomplete, the characteristic polynomial is factored over
\(\mathbb{Q}\) and each irreducible factor solved in radicals, giving the
algebraic-exponential basis \(n^j \operatorname{root}^n\) with the multiplicity factors
included. This is what closes recurrences whose characteristic roots are
irrational — `a(n+2) = a(n+1) + a(n)` with `a(0) = 0, a(1) = 1` returns
Binet's formula rather than the placeholder. Exact fitting is performed for
irreducible factors up to degree two; a cubic or higher irreducible factor
declines to the placeholder rather than eliminating over nested Cardano and
Ferrari radicals.

**Initial conditions.** A complete window determines *every* constant, not just
the first: the window gives a square linear system in the constants which is
solved by exact symbolic elimination, and the fitted result is replayed against
each supplied condition before it is returned. A window that does not determine
the constants leaves the symbolic-constant general solution intact.

## Related

- [Ordinary differential equations](ordinary-differential-equations.md) — the
  continuous analogue, whose constant-coefficient route uses the same
  characteristic-polynomial reasoning.
- [Undefined functions](undefined-functions.md) — how the unknown sequence is
  named and called.
- [Polynomials](polynomials.md) — the factorization of the characteristic
  polynomial that produces the algebraic-exponential basis.
