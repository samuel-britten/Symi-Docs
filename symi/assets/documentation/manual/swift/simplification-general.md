# General simplification

The general simplification ladder and the two rational-form operations it is
built on. Directed algebraic rewrites are on
[algebraic transforms](algebraic-transforms.md), and the fixed-contract
presentation passes are on
[specialized canonical forms](specialized-canonical-forms.md).

### simplify

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_simplify_api_session_simplify"></a>
<a id="placement-placement.swift.swift_object.uniffisession_simplify.809faad16187"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func simplify(target: UniffiExpression) -> UniffiExpression
```

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_simplify_api_expression_simplify"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_simplify.981c0cc8505d"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func simplify() -> UniffiExpression
```

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_simplify_api_assumptionscope_simplify"></a>
<a id="placement-placement.swift.swift_object.uniffiassumptionscope_simplify.7723216756b6"></a>
<p class="symi-entry-owner">UniffiAssumptionScope method</p>

```swift signature
func simplify(target: UniffiExpression) -> UniffiExpression
```



The full heuristic simplification ladder: weighted-complexity-guided search
over rational normal form, radical denesting, trigonometric/log rewrites,
parity and absolute-value rules. The result is never accepted if its weighted
complexity grows. Principal square roots extract structural square content
only under a realness proof: `sqrt(x^2)` becomes `abs(x)` for real `x`, while
`sqrt(z^2)` remains unchanged for a default-complex `z`.

Declared symbol assumptions also enable a small set of branch-aware principal-power reductions.
For a negative real `z`, `sqrt(1 / z)` normalizes to `-z ** (-1 / 2)`; for a strictly positive
factor `p`, `(u * p) ** w` may extract `p ** w`; and a declared-integer exponent distributes over
a product. Each rule declines without its exact guard. `abs(a + i*b)` can reduce through exact,
wrapper-free Cartesian components only when its squared norm simplifies to a smaller form, such as
`abs(3 - sqrt(7) + i*sqrt(6*sqrt(7) - 15)) == 1`.

#### Radicals and perfect powers

These four rules are applied by ordinary construction, so they hold for every
expression the library builds, not only for the results of `simplify`.

A **positive rational base under a rational exponent** has its perfect-power
content removed exactly whenever the degree of that content divides the
exponent's reduced denominator. So `991026973 ** Fraction(1, 6)` becomes
`sqrt(997)`, because `991026973 = 997^3` and `3` divides `6`; the base is never
factored, only exact integer roots of the degrees the denominator admits are
tried. A rational base reduces only when its numerator and denominator are both
exact roots of the same degree. Content whose degree does not divide the
denominator is left to the ordinary surd canonicalizer, so `sqrt(8)` is still
`2*sqrt(2)`. Negative and non-real bases are excluded: `(-8) ** Fraction(1, 3)`
stays a principal power, because extracting an odd perfect power from a
negative base does not preserve the principal argument.

An **expanded binomial square** — a three-term sum such as `1 + 4*sqrt(r) + 4*r`
— is recognised only through an exact replayed witness: a candidate binomial is
built from the square roots of two of the terms and is accepted only when
expanding its square reproduces the original sum exactly. Nothing is matched by
pattern, so a middle term that differs by one is refused rather than repaired.

The witness proves squareness, not a branch. Its two consumers carry separate
guards:

- under a **square root**, `sqrt(u^2)` returns `abs(u)` for a witness proved
  real, and the ordinary exact sign procedure then folds the absolute value
  when the sign is decided; and
- under **any other exponent**, `(u^2) ** a` becomes `u ** (2*a)` only for a
  witness proved *strictly positive*, because the principal-power composition
  law is available only on the positive real axis. A real witness of unknown
  sign reaches the absolute value but not the nested power.

### cancel

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_cancel_api_session_cancel"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cancel.1ced49e0fc6d"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cancel(target: UniffiExpression) -> UniffiExpression
```

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_cancel_api_expression_cancel"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_cancel.602b185ecf1a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func cancel() -> UniffiExpression
```



Rational normal form: write as a single fraction and divide out the
polynomial GCD of numerator and denominator.

### together

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_together_api_session_together"></a>
<a id="placement-placement.swift.swift_object.uniffisession_together.2e844db94287"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func together(target: UniffiExpression) -> UniffiExpression
```

<a id="entry-presentation_swift_simplification_general_capability_expression_transformations_together_api_expression_together"></a>
<a id="placement-placement.swift.swift_object.uniffiexpression_together.3d006fc5c43a"></a>
<p class="symi-entry-owner">Expression method</p>

```swift signature
func together() -> UniffiExpression
```



Combine a sum of fractions over a common denominator. On Symi's
representation `together` and `cancel` coincide; both names exist because
they are distinct user intents.

## Example

