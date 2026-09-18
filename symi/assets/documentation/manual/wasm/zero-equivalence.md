# Zero equivalence

### zero_equivalent

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.zero_equivalent`](/symi/python/zero-equivalence#zero_equivalent) in Python, [`UniffiExpression.zeroEquivalent`](/symi/kotlin/zero-equivalence#zero_equivalent) in Kotlin, [`UniffiExpression.zeroEquivalent`](/symi/swift/zero-equivalence#zero_equivalent) in Swift, [`api::Expression::zero_equivalent`](/symi/rust/zero-equivalence#zero_equivalent) in Rust.*



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


```javascript
const relation = context.parse("2^(1-z)*cos(pi*z/2)*gamma(z)*zeta(z) - pi^z*zeta(1-z)");
console.log(context.zeroEquivalent(relation));
```

