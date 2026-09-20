# Zero equivalence

### zero_equivalent

<a id="entry-presentation_swift_api_session_zero_equivalent"></a>
<a id="placement-placement.swift.swift_object.uniffisession_zeroequivalent.15dad0925fdd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func zeroEquivalent(
    target: UniffiExpression,
    constraint: UniffiExpression?,
) -> UniffiZeroEquivalenceVerdict
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_zeroequivalent.742441c0a4e3"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.zeroEquivalent</code></p>

```swift signature
func zeroEquivalent(constraint: UniffiExpression?) -> UniffiZeroEquivalenceVerdict
```

</details>



Proves whether an expression is zero at every point where the input expression is defined within
the declared region. `"true"` is an exact theorem replay, `"false"` has an exact counterexample,
and `"unknown"` is an honest decline. Numeric evaluation is never proof evidence.

The optional logical `constraint` is combined with existing symbol assumptions without changing
them. A `"true"` result does not mean `simplify(expression)` may replace the expression by the
literal `0`: that stricter transformation also needs the expression to be defined everywhere in
the declared region.

The initial admitted routes are the principal-branch Gudermannian identity for a real variable on
`-pi/2 < x < pi/2`, and the Riemann zeta reflection relation. The latter remains a nonzero-shaped
expression under ordinary simplification because its written factors have exceptional points.

