# Integral transforms

All four entries are *eager* dispatchers: a table of closed-form atoms fires
first, then algebraic rules (linearity, shifts, scaling, derivative,
convolution), and inputs neither layer recognises return the **unevaluated
transform node** (composable via `execute` later). Unevaluated transform
nodes can also be built directly through `parse`.

### laplace_transform

<a id="entry-presentation_kotlin_api_session_laplace_transform"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_laplacetransform.4ec84c708340"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun laplaceTransform(
    target: UniffiExpression,
    timeVariable: kotlin.String,
    frequencyVariable: kotlin.String,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_laplacetransform.fcef93d4ba18"></a>
<p class="symi-entry-owner">Variant using local assumptions — UniffiAssumptionScope method: <code>UniffiAssumptionScope.laplaceTransform</code></p>

```kotlin signature
fun laplaceTransform(
    target: UniffiExpression,
    timeVariable: kotlin.String,
    frequencyVariable: kotlin.String,
): UniffiExpression
```

</details>


Forward Laplace transform \(F(s) = \int_0^\infty f(t)e^{-st}\,dt\).

### inverse_laplace_transform

<a id="entry-presentation_kotlin_api_session_inverse_laplace_transform"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_inverselaplacetransform.0e6935fbad22"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun inverseLaplaceTransform(
    target: UniffiExpression,
    frequencyVariable: kotlin.String,
    timeVariable: kotlin.String,
): UniffiExpression
```


Inverse Laplace transform; rational inputs route through a partial-fraction
reverse lookup.

### fourier_transform

<a id="entry-presentation_kotlin_api_session_fourier_transform"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_fouriertransform.498daf530397"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun fourierTransform(
    target: UniffiExpression,
    timeVariable: kotlin.String,
    frequencyVariable: kotlin.String,
): UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms and variants</summary>

<a id="placement-placement.kotlin.kotlin_object.uniffiassumptionscope_fouriertransform.c7f05ab6c3fd"></a>
<p class="symi-entry-owner">Variant using local assumptions — UniffiAssumptionScope method: <code>UniffiAssumptionScope.fourierTransform</code></p>

```kotlin signature
fun fourierTransform(
    target: UniffiExpression,
    timeVariable: kotlin.String,
    frequencyVariable: kotlin.String,
): UniffiExpression
```

</details>


Forward Fourier transform in the angular-frequency convention
\(F(\omega) = \int f(t)e^{-i\omega t}\,dt\).

### inverse_fourier_transform

<a id="entry-presentation_kotlin_api_session_inverse_fourier_transform"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_inversefouriertransform.39d680254693"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun inverseFourierTransform(
    target: UniffiExpression,
    frequencyVariable: kotlin.String,
    timeVariable: kotlin.String,
): UniffiExpression
```


Inverse Fourier transform of the same convention.

## Example

