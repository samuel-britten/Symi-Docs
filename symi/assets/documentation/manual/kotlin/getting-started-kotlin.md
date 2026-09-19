# Getting started: Kotlin

The Kotlin surface is generated from the same binding contract as the other
language APIs. In a source checkout, activate the project environment, build
the UniFFI library, and generate the Kotlin and Swift transport bindings:

```bash
source ../.environment/activate
cargo build -p symi-uniffi
python tools/mobile_bindings.py
```

The generated Kotlin sources live under
`symi-uniffi/generated/kotlin/app/symi/`. Include both generated Kotlin files,
the `symi_uniffi` native library, and the project-local Java Native Access
archive in the host application using the platform's normal native-library
packaging mechanism. `tools/mobile_bindings.py` is the reference compilation
and execution setup for a source build.

Import `app.symi.*` and create an `UniffiSession` for an isolated computation.
The session owns every expression it creates. `use` closes its native handle
when the computation is complete.

```kotlin
import app.symi.*

fun main() {
    UniffiSession().use { session ->
        val x = session.symbol("x")
        val polynomial = session.parse("x^2 + 2*x + 1")

        println(polynomial.factor().toDisplayString())
        println(session.integrate(session.sin(x), "x").toDisplayString())
    }
}
```


Kotlin exposes normal arithmetic as operators on `UniffiExpression`, so
`first + second` and `first * second` are the exact symbolic operations. Names
that Kotlin reserves are escaped in generated declarations, but ordinary calls
use the familiar spellings such as `symbol`, `integrate`, and `factor`.

Calls that can decline or reject an invalid input surface a `UniffiException`.
Its diagnostic case contains the stable category, operation, parameter path,
received value, expected value, and hint. Treat a diagnostic as an unsuccessful
call; do not replace it with an approximate answer.

Objects from distinct sessions cannot be combined, and resetting a session
invalidates objects it previously produced. Keep an expression and every
operation on it in the same live `UniffiSession`. See [Context safety](context-safety.md)
and [Conversions and collections](conversion-rules.md) for the ownership and
input rules shared by all language surfaces.
