# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="entry-presentation_swift_api_session_sin"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sin.d38469b1a956"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sin(argument: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_sin.51d54b8378d7"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.sin</code></p>

```swift signature
func sin() -> UniffiExpression
```

</details>


### cos

<a id="entry-presentation_swift_api_session_cos"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cos.c9df262f5328"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cos(argument: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_cos.35fee6110943"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.cos</code></p>

```swift signature
func cos() -> UniffiExpression
```

</details>


### tan

<a id="entry-presentation_swift_api_session_tan"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tan.4a38bbc6a305"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func tan(argument: UniffiExpression) -> UniffiExpression
```


### sec

<a id="entry-presentation_swift_api_session_sec"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sec.796dc3e13f1a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sec(argument: UniffiExpression) -> UniffiExpression
```


### csc

<a id="entry-presentation_swift_api_session_csc"></a>
<a id="placement-placement.swift.swift_object.uniffisession_csc.97312d88f534"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func csc(argument: UniffiExpression) -> UniffiExpression
```


### cot

<a id="entry-presentation_swift_api_session_cot"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cot.b577453ff703"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cot(argument: UniffiExpression) -> UniffiExpression
```


### arcsin

<a id="entry-presentation_swift_api_session_arcsin"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsin.7d17db4f886a"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsin(argument: UniffiExpression) -> UniffiExpression
```


### arccos

<a id="entry-presentation_swift_api_session_arccos"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccos.873a014414b3"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccos(argument: UniffiExpression) -> UniffiExpression
```


### arctan

<a id="entry-presentation_swift_api_session_arctan"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arctan.4e8a93014c68"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arctan(argument: UniffiExpression) -> UniffiExpression
```


### arcsec

<a id="entry-presentation_swift_api_session_arcsec"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsec.002cb0ce2eeb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsec(argument: UniffiExpression) -> UniffiExpression
```


### arccsc

<a id="entry-presentation_swift_api_session_arccsc"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccsc.27a9d43f9a25"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccsc(argument: UniffiExpression) -> UniffiExpression
```


### arccot

<a id="entry-presentation_swift_api_session_arccot"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccot.9b0d534c00dc"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccot(argument: UniffiExpression) -> UniffiExpression
```


### sinh

<a id="entry-presentation_swift_api_session_sinh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sinh.154d05746423"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sinh(argument: UniffiExpression) -> UniffiExpression
```


### cosh

<a id="entry-presentation_swift_api_session_cosh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_cosh.470bd71c936c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func cosh(argument: UniffiExpression) -> UniffiExpression
```


### tanh

<a id="entry-presentation_swift_api_session_tanh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_tanh.06a5b797a74c"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func tanh(argument: UniffiExpression) -> UniffiExpression
```


### sech

<a id="entry-presentation_swift_api_session_sech"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sech.7653b59db837"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sech(argument: UniffiExpression) -> UniffiExpression
```


### csch

<a id="entry-presentation_swift_api_session_csch"></a>
<a id="placement-placement.swift.swift_object.uniffisession_csch.ba0508357fff"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func csch(argument: UniffiExpression) -> UniffiExpression
```


### coth

<a id="entry-presentation_swift_api_session_coth"></a>
<a id="placement-placement.swift.swift_object.uniffisession_coth.57a98e776dfd"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func coth(argument: UniffiExpression) -> UniffiExpression
```


### arcsinh

<a id="entry-presentation_swift_api_session_arcsinh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsinh.cb8516bb48eb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsinh(argument: UniffiExpression) -> UniffiExpression
```


### arccosh

<a id="entry-presentation_swift_api_session_arccosh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccosh.7f0395225cdb"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccosh(argument: UniffiExpression) -> UniffiExpression
```


### arctanh

<a id="entry-presentation_swift_api_session_arctanh"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arctanh.d92df5a25d9f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arctanh(argument: UniffiExpression) -> UniffiExpression
```


### arcsech

<a id="entry-presentation_swift_api_session_arcsech"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arcsech.aa9d73ebdb85"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arcsech(argument: UniffiExpression) -> UniffiExpression
```


### arccsch

<a id="entry-presentation_swift_api_session_arccsch"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccsch.f5c64d3b4305"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccsch(argument: UniffiExpression) -> UniffiExpression
```


### arccoth

<a id="entry-presentation_swift_api_session_arccoth"></a>
<a id="placement-placement.swift.swift_object.uniffisession_arccoth.d461e89715fa"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func arccoth(argument: UniffiExpression) -> UniffiExpression
```


### exp

<a id="entry-presentation_swift_api_session_exp"></a>
<a id="placement-placement.swift.swift_object.uniffisession_exp.96fa2cf9a8a0"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func exp(argument: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_exp.112ee239c8ce"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.exp</code></p>

```swift signature
func exp() -> UniffiExpression
```

</details>


The natural exponential.

### log

<a id="entry-presentation_swift_api_session_log"></a>
<a id="placement-placement.swift.swift_object.uniffisession_log.56e8cba0f445"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func log(
    argument: UniffiExpression,
    base: UniffiExpression?,
) -> UniffiExpression
```


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="entry-presentation_swift_api_session_sqrt"></a>
<a id="placement-placement.swift.swift_object.uniffisession_sqrt.3a06fe6228b3"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func sqrt(argument: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_sqrt.e590a327a79f"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.sqrt</code></p>

```swift signature
func sqrt() -> UniffiExpression
```

</details>


Principal square root, stored as `x^(1/2)`.

### root

<a id="entry-presentation_swift_api_session_root"></a>
<a id="placement-placement.swift.swift_object.uniffisession_root.619b5fda1909"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func root(
    radicand: UniffiExpression,
    index: UniffiExpression,
) -> UniffiExpression
```


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="entry-presentation_swift_api_session_abs"></a>
<a id="placement-placement.swift.swift_object.uniffisession_abs.dd9267509aa4"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func abs(argument: UniffiExpression) -> UniffiExpression
```


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="entry-presentation_swift_api_session_floor"></a>
<a id="placement-placement.swift.swift_object.uniffisession_floor.c2df3fd00241"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func floor(argument: UniffiExpression) -> UniffiExpression
```


### ceiling

<a id="entry-presentation_swift_api_session_ceiling"></a>
<a id="placement-placement.swift.swift_object.uniffisession_ceiling.90e7123537d5"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func ceiling(argument: UniffiExpression) -> UniffiExpression
```


### conjugate

<a id="entry-presentation_swift_api_session_conjugate"></a>
<a id="placement-placement.swift.swift_object.uniffisession_conjugate.f4aff69bd1f7"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func conjugate(argument: UniffiExpression) -> UniffiExpression
```


Complex conjugate.

### factorial

<a id="entry-presentation_swift_api_session_factorial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_factorial.804228dc077f"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func factorial(argument: UniffiExpression) -> UniffiExpression
```


### binomial

<a id="entry-presentation_swift_api_session_binomial"></a>
<a id="placement-placement.swift.swift_object.uniffisession_binomial.6424961e17af"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func binomial(
    upper: UniffiExpression,
    lower: UniffiExpression,
) -> UniffiExpression
```


Binomial coefficient C(n, k).

### min

<a id="entry-presentation_swift_api_session_min"></a>
<a id="placement-placement.swift.swift_object.uniffisession_min.2e33a44befc8"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func min(arguments: [UniffiExpression]) -> UniffiExpression
```


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="entry-presentation_swift_api_session_max"></a>
<a id="placement-placement.swift.swift_object.uniffisession_max.a8a8d7405982"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func max(arguments: [UniffiExpression]) -> UniffiExpression
```


Maximum of the arguments (variadic in Python; a JS array in WASM).

## Example


### absolute_value

<a id="entry-presentation_swift_api_session_absolute_value"></a>
<a id="placement-placement.swift.swift_object.uniffisession_absolutevalue.e830fae29853"></a>
<p class="symi-entry-owner">Explicit context</p>

```swift signature
func absoluteValue(argument: UniffiExpression) -> UniffiExpression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.swift.swift_object.uniffiexpression_absolutevalue.6dd3aae9d19d"></a>
<p class="symi-entry-owner">Expression method: <code>UniffiExpression.absoluteValue</code></p>

```swift signature
func absoluteValue() -> UniffiExpression
```

</details>


The absolute value \(|x|\), spelled in full. It is the same operation as
[`abs`](#abs); the two names exist because `abs` is the spelling the Python and
JavaScript hosts use for their own built-in, and the full name is the spelling
the mobile hosts generate.
