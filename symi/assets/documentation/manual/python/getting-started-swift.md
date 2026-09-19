# Getting started: Swift

The Swift surface is generated from the same binding contract as the other
language APIs. In a source checkout, activate the project environment, build
the UniFFI library, and generate the Kotlin and Swift transport bindings:

```bash
source ../.environment/activate
cargo build -p symi-uniffi
python tools/mobile_bindings.py
```

The generated Swift module is under `symi-uniffi/generated/swift/`. Add its
sources, module map, and the `symi_uniffi` native library to the host target
using the platform's normal framework or package integration. The
`tools/mobile_bindings.py` command is the reference compilation and execution
setup for a source build.

Import `Symi` in an application target, then use an `UniffiSession` for one
isolated symbolic computation. Every method that crosses the native boundary
can throw, so handle errors at the point where the mathematical operation is
requested.


The generated conveniences provide Swift arithmetic operators for exact
expressions. For example, `first + second` is symbolic addition, not floating
point arithmetic. The `plainText()` method gives an expression's canonical
display form; mathematical results remain symbolic objects.

A thrown `UniffiError.diagnostic` carries the stable category, operation,
parameter path, received value, expected value, and hint. A diagnostic reports
that the requested operation was not performed; it is not a numeric fallback.

Objects from distinct sessions cannot be combined, and resetting a session
invalidates objects it previously produced. Keep an expression and every
operation on it in the same live `UniffiSession`. See [Context safety](context-safety.md)
and [Conversions and collections](conversion-rules.md) for the ownership and
input rules shared by all language surfaces.
