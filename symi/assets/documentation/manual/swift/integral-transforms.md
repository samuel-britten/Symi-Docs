# Integral transforms

All four entries are *eager* dispatchers: a table of closed-form atoms fires
first, then algebraic rules (linearity, shifts, scaling, derivative,
convolution), and inputs neither layer recognises return the **unevaluated
transform node** (composable via `execute` later). Unevaluated transform
nodes can also be built directly through `parse`.

### laplace_transform

<a id="placement-placement.swift.swift_object.uniffiassumptionscope_laplacetransform.15f1bc3978b9"></a>
`UniffiAssumptionScope.laplaceTransform(target: UniffiExpression, timeVariable: String, frequencyVariable: String) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_laplacetransform.4e3ba76aaeeb"></a>
`UniffiSession.laplaceTransform(target: UniffiExpression, timeVariable: String, frequencyVariable: String) -> UniffiExpression`


Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

### inverse_laplace_transform

<a id="placement-placement.swift.swift_object.uniffisession_inverselaplacetransform.f2a6d78c0eb6"></a>
`UniffiSession.inverseLaplaceTransform(target: UniffiExpression, frequencyVariable: String, timeVariable: String) -> UniffiExpression`


Inverse Laplace transform; rational inputs route through a partial-fraction
reverse lookup.

### fourier_transform

<a id="placement-placement.swift.swift_object.uniffiassumptionscope_fouriertransform.aea4f0c4d33f"></a>
`UniffiAssumptionScope.fourierTransform(target: UniffiExpression, timeVariable: String, frequencyVariable: String) -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_fouriertransform.1e10abe971af"></a>
`UniffiSession.fourierTransform(target: UniffiExpression, timeVariable: String, frequencyVariable: String) -> UniffiExpression`


Forward Fourier transform in the angular-frequency convention
\(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

### inverse_fourier_transform

<a id="placement-placement.swift.swift_object.uniffisession_inversefouriertransform.d4b7c77719cf"></a>
`UniffiSession.inverseFourierTransform(target: UniffiExpression, frequencyVariable: String, timeVariable: String) -> UniffiExpression`


Inverse Fourier transform of the same convention.

## Example

