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

`DifferentialEquationSolutionScope` is shared by the ordinary and partial
cases. A `general` request asks for the complete family and is answered only
when completeness is proved over the requested class; a `particular` request
asks for one solution through the given data. The two are separate questions,
and a general request is never answered by a particular solution.
<a id="entry-presentation_rust_api_differentialequationsolutionscope"></a>
<a id="placement-placement.rust.native_rust.api_differentialequationsolutionscope.754ed4c87b09"></a>
<p class="symi-entry-owner">api re_export</p>

```rust signature
pub use ordinary_differential_equations::DifferentialEquationSolutionScope;
```

How much of a differential equation's solution set a request asks for.

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope.21391b50eeec"></a>
<p class="symi-entry-owner">Type: <code>api::ordinary_differential_equations::DifferentialEquationSolutionScope</code></p>

```rust signature
pub enum DifferentialEquationSolutionScope
```

</details>

<a id="entry-presentation_rust_api_differentialequationsolutionscope_general"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_general.25d78a5b7872"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope variant</p>

```rust signature
General,
```

The complete family on a regular chart, which owes a full-rank data map.

<a id="entry-presentation_rust_api_differentialequationsolutionscope_particular"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_particular.6da519c69a4e"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope variant</p>

```rust signature
Particular,
```

One solution through the stated data.

<a id="entry-presentation_rust_api_differentialequationsolutionscope_from_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_from_name.52ad6eb58468"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope method</p>

```rust signature
pub fn from_name(name: &str) -> Result<Self, ApiError>
```

Validates one stable lowercase host spelling.

<a id="entry-presentation_rust_api_differentialequationsolutionscope_name"></a>
<a id="placement-placement.rust.native_rust.api_ordinary_differential_equations_differentialequationsolutionscope_name.c53bd561c22d"></a>
<p class="symi-entry-owner">api::ordinary_differential_equations::DifferentialEquationSolutionScope method</p>

```rust signature
pub fn name(self) -> &'static str
```

Returns the stable lowercase binding spelling.

