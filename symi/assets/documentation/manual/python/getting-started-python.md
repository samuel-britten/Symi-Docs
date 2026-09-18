# Getting started: Python

Build the extension in the activated project environment:

```bash
cd symi-python
maturin develop --release
```

Prefer a qualified import so Symi names do not shadow Python builtins:

```python
from fractions import Fraction
import symi

x = symi.symbol("x", positive=True)
polynomial = x**2 + 2*x + 1

print(polynomial.factor())                  # (1 + x)^2
print(symi.integrate(symi.sin(x), x))
print(polynomial.substitute(x, 3))
print(symi.rational(2, 3) + Fraction(1, 3))
assert symi.integer(1 << 4096) == 1 << 4096
```

Python `int`, excluding `bool`, is accepted anywhere an expression-like value
is expected and retains arbitrary precision. `fractions.Fraction` is converted
exactly. A `float` is never silently promoted to an exact expression.

Constants are values, not calls:

```python
circle_area = symi.pi * symi.symbol("radius")**2
assert symi.evaluate_truth(symi.rational(1, 3) < 1) is True
```

Relations are symbolic expressions. Use `evaluate_truth` for an explicit
`True`, `False`, or `None`; use `execute` when a symbolic true/false expression
is wanted. Python truth testing of an undecidable symbolic value raises an
error instead of guessing.

Classes take Python's CapWords spelling — `Expression`, `Matrix`, `Context`,
`Point2d` — while methods, module functions, and keyword arguments keep the
Symi underscore spelling. For an isolated computation, create an explicit
context:

```python
context = symi.Context()
x = context.symbol("x")
matrix = context.matrix(((1, x), (x, 1)))
print(matrix.determinant())
```

Variable parameters accept either a name or a symbol from the same context.
Collections accept finite iterables according to their mathematical meaning:
matrices require ordered rows, while `finite_set` also accepts unordered host
collections. See [Conversions and collections](conversion-rules.md) and
[Context safety](context-safety.md).

Errors carry stable structured attributes:

```python
try:
    symi.integer(1.5)
except TypeError as error:
    print(error.category, error.operation, error.parameter_path)
    print(error.received, error.expected, error.hint)
```

Boundary validation raises `TypeError` for a wrong host type, `ValueError` for
an invalid exact conversion, and `RuntimeError` for a context or staleness
violation. The structured attributes above are present on boundary
diagnostics; a mathematical precondition reported from inside an operation
(for example a zero denominator in `rational`) raises a plain `ValueError`
carrying only its message.

The supplied `symi.pyi` describes expression-like inputs, constants,
structured objects, and context methods for editors and type checkers.
