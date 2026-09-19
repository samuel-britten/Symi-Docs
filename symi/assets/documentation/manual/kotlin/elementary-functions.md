# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_sin_api_session_sin"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_sin.2d9ca856ed4d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun sin(argument: UniffiExpression): UniffiExpression
```

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_sin_api_expression_sin"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_sin.8d3a90a5d7a1"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun sin(): UniffiExpression
```


### cos

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_cos_api_session_cos"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_cos.78d1284daaf8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun cos(argument: UniffiExpression): UniffiExpression
```

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_cos_api_expression_cos"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_cos.80ff76ba553e"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun cos(): UniffiExpression
```


### tan

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_tan_api_session_tan"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_tan.2700050865d9"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun tan(argument: UniffiExpression): UniffiExpression
```


### sec

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_sec_api_session_sec"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_sec.35a42a45fd60"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun sec(argument: UniffiExpression): UniffiExpression
```


### csc

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_csc_api_session_csc"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_csc.658a18240131"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun csc(argument: UniffiExpression): UniffiExpression
```


### cot

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_cot_api_session_cot"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_cot.fecc10290a06"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun cot(argument: UniffiExpression): UniffiExpression
```


### arcsin

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arcsin_api_session_arcsin"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsin.f68d592b9d98"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arcsin(argument: UniffiExpression): UniffiExpression
```


### arccos

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arccos_api_session_arccos"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccos.2195d84a443e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arccos(argument: UniffiExpression): UniffiExpression
```


### arctan

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arctan_api_session_arctan"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arctan.05d467b08cb0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arctan(argument: UniffiExpression): UniffiExpression
```


### arcsec

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arcsec_api_session_arcsec"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsec.ccc84c331917"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arcsec(argument: UniffiExpression): UniffiExpression
```


### arccsc

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arccsc_api_session_arccsc"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccsc.338e3029f884"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arccsc(argument: UniffiExpression): UniffiExpression
```


### arccot

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arccot_api_session_arccot"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccot.330a7d02a7e8"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arccot(argument: UniffiExpression): UniffiExpression
```


### sinh

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_sinh_api_session_sinh"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_sinh.f1a812b74d0d"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun sinh(argument: UniffiExpression): UniffiExpression
```


### cosh

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_cosh_api_session_cosh"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_cosh.f82cec120b3f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun cosh(argument: UniffiExpression): UniffiExpression
```


### tanh

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_tanh_api_session_tanh"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_tanh.e420f2e25458"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun tanh(argument: UniffiExpression): UniffiExpression
```


### sech

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_sech_api_session_sech"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_sech.8e76c2d153c6"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun sech(argument: UniffiExpression): UniffiExpression
```


### csch

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_csch_api_session_csch"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_csch.173ed0fa729e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun csch(argument: UniffiExpression): UniffiExpression
```


### coth

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_coth_api_session_coth"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_coth.749703f1578e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun coth(argument: UniffiExpression): UniffiExpression
```


### arcsinh

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arcsinh_api_session_arcsinh"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsinh.7ad933067d00"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arcsinh(argument: UniffiExpression): UniffiExpression
```


### arccosh

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arccosh_api_session_arccosh"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccosh.c05e718b01d0"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arccosh(argument: UniffiExpression): UniffiExpression
```


### arctanh

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arctanh_api_session_arctanh"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arctanh.f00757b15b3f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arctanh(argument: UniffiExpression): UniffiExpression
```


### arcsech

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arcsech_api_session_arcsech"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsech.3ac834225808"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arcsech(argument: UniffiExpression): UniffiExpression
```


### arccsch

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arccsch_api_session_arccsch"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccsch.869b23e4fcec"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arccsch(argument: UniffiExpression): UniffiExpression
```


### arccoth

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_arccoth_api_session_arccoth"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccoth.f74aad1fec9a"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun arccoth(argument: UniffiExpression): UniffiExpression
```


### exp

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_exp_api_session_exp"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_exp.5cd3ec109c1f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun exp(argument: UniffiExpression): UniffiExpression
```

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_exp_api_expression_exp"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_exp.967d513de928"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun exp(): UniffiExpression
```


The natural exponential.

### log

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_log_api_session_log"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_log.80ff5c181f89"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun log(
    argument: UniffiExpression,
    base: UniffiExpression?,
): UniffiExpression
```


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_sqrt_api_session_sqrt"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_sqrt.bbceb33e5fbb"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun sqrt(argument: UniffiExpression): UniffiExpression
```

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_sqrt_api_expression_sqrt"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_sqrt.013f0efe246e"></a>
<p class="symi-entry-owner">Expression method</p>

```kotlin signature
fun sqrt(): UniffiExpression
```


Principal square root, stored as `x^(1/2)`.

### root

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_root_api_session_root"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_root.e95935f8fb84"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun root(
    radicand: UniffiExpression,
    index: UniffiExpression,
): UniffiExpression
```

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_root_api_results_rootmultiplicity_root"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffirootmultiplicity_root.0c31d2602fb2"></a>
<p class="symi-entry-owner">UniffiRootMultiplicity method</p>

```kotlin signature
fun root(): UniffiExpression
```


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_abs_api_session_abs"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_abs.3bb3aa666268"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun abs(argument: UniffiExpression): UniffiExpression
```


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_floor_api_session_floor"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_floor.9ea2c4c27641"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun floor(argument: UniffiExpression): UniffiExpression
```


### ceiling

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_ceiling_api_session_ceiling"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_ceiling.386186a04ced"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun ceiling(argument: UniffiExpression): UniffiExpression
```


### conjugate

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_conjugate_api_session_conjugate"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_conjugate.40983b1a8754"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun conjugate(argument: UniffiExpression): UniffiExpression
```


Complex conjugate.

### factorial

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_factorial_api_session_factorial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_factorial.e55092387fe1"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun factorial(argument: UniffiExpression): UniffiExpression
```


### binomial

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_binomial_api_session_binomial"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_binomial.f0c1042d892e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun binomial(
    upper: UniffiExpression,
    lower: UniffiExpression,
): UniffiExpression
```


Binomial coefficient C(n, k).

### min

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_min_api_session_min"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_min.94394434a90e"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun min(arguments: List<UniffiExpression>): UniffiExpression
```


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="entry-presentation_kotlin_elementary_functions_capability_elementary_functions_max_api_session_max"></a>
<a id="placement-placement.kotlin.kotlin_object.uniffisession_max.0a2ca3dffd7f"></a>
<p class="symi-entry-owner">Explicit context</p>

```kotlin signature
fun max(arguments: List<UniffiExpression>): UniffiExpression
```


Maximum of the arguments (variadic in Python; a JS array in WASM).

## Example

