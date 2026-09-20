# Differential and recurrence equations

An equation for an unknown *function* is solved differently depending on how
many variables that function has, and whether its argument is continuous or an
integer index. Symi documents the three cases on their own pages; this page
is the map between them.

| Subject | Page |
|---|---|
| One unknown function of one continuous variable, and systems of them | [Ordinary differential equations](ordinary-differential-equations.md) |
| One unknown function of several variables | [Partial differential equations](partial-differential-equations.md) |
| The records every PDE entry returns | [Partial differential equation results](partial-differential-equation-results.md) |
| An unknown sequence related to its own shifted values | [Recurrence equations](recurrence-equations.md) |

All three start the same way. The unknown is a named function with no
definition, and its derivatives are structural derivative nodes built from that
name — not derivatives that anything has tried to evaluate. Both are documented
in [Undefined functions](undefined-functions.md), which also separates the three
different operations in this manual spelled `derivative` or `differentiate`.

```python
context = symi.Context()
x = context.symbol("x")
y = context.undefined_function("y")
y_of_x = y(x)
# \(y'(x) = y(x) \Rightarrow y' - y = 0\)
equation = y.derivative([1], [x]) - y_of_x
solution = context.solve_ordinary_differential_equation(equation, y_of_x, "x")
# log(abs(y(x))) - (integration_constant_0 + x)   — an implicit solution
```


## Compatibility entries and request entries

Each subject offers two kinds of entry, and the difference matters more than
the difference between the subjects.

An **expression-returning** entry is a compatibility projection: it answers with
the solution alone. A **request** entry takes the scope, method, data, and
regularity as part of the question and answers with a record that keeps the
evidence behind the answer — the method that actually ran, the independent
verifier's verdict, the rank verdict behind a complete-family claim, the
constants the family treats as free, and a typed decline reason.

A request that cannot be answered as stated declines. It is never projected onto
a weaker question whose answer is then reported under the stronger one, and a
result is never approximated when the exact answer was not found.

## Solution scope

### DifferentialEquationSolutionScope

*Not exposed by the Python bindings. Available as [`api::DifferentialEquationSolutionScope`](/symi/rust/differential-equations#differentialequationsolutionscope) in Rust.*


`DifferentialEquationSolutionScope` is shared by the ordinary and partial
cases. A `general` request asks for the complete family and is answered only
when completeness is proved over the requested class; a `particular` request
asks for one solution through the given data. The two are separate questions,
and a general request is never answered by a particular solution.
