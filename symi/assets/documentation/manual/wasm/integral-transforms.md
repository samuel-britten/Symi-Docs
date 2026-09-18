# Integral transforms

All four entries are *eager* dispatchers: a table of closed-form atoms fires
first, then algebraic rules (linearity, shifts, scaling, derivative,
convolution), and inputs neither layer recognises return the **unevaluated
transform node** (composable via `execute` later). Unevaluated transform
nodes can also be built directly through `parse`.

### laplace_transform

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionScope.laplace_transform`](/symi/python/integral-transforms#laplace_transform) in Python, [`UniffiAssumptionScope.laplaceTransform`](/symi/kotlin/integral-transforms#laplace_transform) in Kotlin, [`UniffiAssumptionScope.laplaceTransform`](/symi/swift/integral-transforms#laplace_transform) in Swift, [`api::AssumptionScope::laplace_transform`](/symi/rust/integral-transforms#laplace_transform) in Rust.*


Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

### inverse_laplace_transform

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.inverse_laplace_transform`](/symi/python/integral-transforms#inverse_laplace_transform) in Python, [`UniffiSession.inverseLaplaceTransform`](/symi/kotlin/integral-transforms#inverse_laplace_transform) in Kotlin, [`UniffiSession.inverseLaplaceTransform`](/symi/swift/integral-transforms#inverse_laplace_transform) in Swift, [`api::Expression::inverse_laplace_transform`](/symi/rust/integral-transforms#inverse_laplace_transform) in Rust.*


Inverse Laplace transform; rational inputs route through a partial-fraction
reverse lookup.

### fourier_transform

*Not exposed by the WASM / JavaScript bindings. Available as [`AssumptionScope.fourier_transform`](/symi/python/integral-transforms#fourier_transform) in Python, [`UniffiAssumptionScope.fourierTransform`](/symi/kotlin/integral-transforms#fourier_transform) in Kotlin, [`UniffiAssumptionScope.fourierTransform`](/symi/swift/integral-transforms#fourier_transform) in Swift, [`api::AssumptionScope::fourier_transform`](/symi/rust/integral-transforms#fourier_transform) in Rust.*


Forward Fourier transform in the angular-frequency convention
\(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

### inverse_fourier_transform

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.inverse_fourier_transform`](/symi/python/integral-transforms#inverse_fourier_transform) in Python, [`UniffiSession.inverseFourierTransform`](/symi/kotlin/integral-transforms#inverse_fourier_transform) in Kotlin, [`UniffiSession.inverseFourierTransform`](/symi/swift/integral-transforms#inverse_fourier_transform) in Swift, [`api::Expression::inverse_fourier_transform`](/symi/rust/integral-transforms#inverse_fourier_transform) in Rust.*


Inverse Fourier transform of the same convention.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.

