# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_sin.8d3a90a5d7a1"></a>
`UniffiExpression.sin(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_sin.2d9ca856ed4d"></a>
`UniffiSession.sin(argument: UniffiExpression): UniffiExpression`


### cos

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_cos.80ff76ba553e"></a>
`UniffiExpression.cos(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_cos.78d1284daaf8"></a>
`UniffiSession.cos(argument: UniffiExpression): UniffiExpression`


### tan

<a id="placement-placement.kotlin.kotlin_object.uniffisession_tan.2700050865d9"></a>
`UniffiSession.tan(argument: UniffiExpression): UniffiExpression`


### sec

<a id="placement-placement.kotlin.kotlin_object.uniffisession_sec.35a42a45fd60"></a>
`UniffiSession.sec(argument: UniffiExpression): UniffiExpression`


### csc

<a id="placement-placement.kotlin.kotlin_object.uniffisession_csc.658a18240131"></a>
`UniffiSession.csc(argument: UniffiExpression): UniffiExpression`


### cot

<a id="placement-placement.kotlin.kotlin_object.uniffisession_cot.fecc10290a06"></a>
`UniffiSession.cot(argument: UniffiExpression): UniffiExpression`


### arcsin

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsin.f68d592b9d98"></a>
`UniffiSession.arcsin(argument: UniffiExpression): UniffiExpression`


### arccos

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccos.2195d84a443e"></a>
`UniffiSession.arccos(argument: UniffiExpression): UniffiExpression`


### arctan

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arctan.05d467b08cb0"></a>
`UniffiSession.arctan(argument: UniffiExpression): UniffiExpression`


### arcsec

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsec.ccc84c331917"></a>
`UniffiSession.arcsec(argument: UniffiExpression): UniffiExpression`


### arccsc

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccsc.338e3029f884"></a>
`UniffiSession.arccsc(argument: UniffiExpression): UniffiExpression`


### arccot

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccot.330a7d02a7e8"></a>
`UniffiSession.arccot(argument: UniffiExpression): UniffiExpression`


### sinh

<a id="placement-placement.kotlin.kotlin_object.uniffisession_sinh.f1a812b74d0d"></a>
`UniffiSession.sinh(argument: UniffiExpression): UniffiExpression`


### cosh

<a id="placement-placement.kotlin.kotlin_object.uniffisession_cosh.f82cec120b3f"></a>
`UniffiSession.cosh(argument: UniffiExpression): UniffiExpression`


### tanh

<a id="placement-placement.kotlin.kotlin_object.uniffisession_tanh.e420f2e25458"></a>
`UniffiSession.tanh(argument: UniffiExpression): UniffiExpression`


### sech

<a id="placement-placement.kotlin.kotlin_object.uniffisession_sech.8e76c2d153c6"></a>
`UniffiSession.sech(argument: UniffiExpression): UniffiExpression`


### csch

<a id="placement-placement.kotlin.kotlin_object.uniffisession_csch.173ed0fa729e"></a>
`UniffiSession.csch(argument: UniffiExpression): UniffiExpression`


### coth

<a id="placement-placement.kotlin.kotlin_object.uniffisession_coth.749703f1578e"></a>
`UniffiSession.coth(argument: UniffiExpression): UniffiExpression`


### arcsinh

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsinh.7ad933067d00"></a>
`UniffiSession.arcsinh(argument: UniffiExpression): UniffiExpression`


### arccosh

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccosh.c05e718b01d0"></a>
`UniffiSession.arccosh(argument: UniffiExpression): UniffiExpression`


### arctanh

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arctanh.f00757b15b3f"></a>
`UniffiSession.arctanh(argument: UniffiExpression): UniffiExpression`


### arcsech

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arcsech.3ac834225808"></a>
`UniffiSession.arcsech(argument: UniffiExpression): UniffiExpression`


### arccsch

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccsch.869b23e4fcec"></a>
`UniffiSession.arccsch(argument: UniffiExpression): UniffiExpression`


### arccoth

<a id="placement-placement.kotlin.kotlin_object.uniffisession_arccoth.f74aad1fec9a"></a>
`UniffiSession.arccoth(argument: UniffiExpression): UniffiExpression`


### exp

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_exp.967d513de928"></a>
`UniffiExpression.exp(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_exp.5cd3ec109c1f"></a>
`UniffiSession.exp(argument: UniffiExpression): UniffiExpression`


The natural exponential.

### log

<a id="placement-placement.kotlin.kotlin_object.uniffisession_log.80ff5c181f89"></a>
`UniffiSession.log(argument: UniffiExpression, base: UniffiExpression?): UniffiExpression`


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="placement-placement.kotlin.kotlin_object.uniffiexpression_sqrt.013f0efe246e"></a>
`UniffiExpression.sqrt(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_sqrt.bbceb33e5fbb"></a>
`UniffiSession.sqrt(argument: UniffiExpression): UniffiExpression`


Principal square root, stored as `x^(1/2)`.

### root

<a id="placement-placement.kotlin.kotlin_object.uniffirootmultiplicity_root.0c31d2602fb2"></a>
`UniffiRootMultiplicity.root(): UniffiExpression`

<a id="placement-placement.kotlin.kotlin_object.uniffisession_root.e95935f8fb84"></a>
`UniffiSession.root(radicand: UniffiExpression, index: UniffiExpression): UniffiExpression`


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="placement-placement.kotlin.kotlin_object.uniffisession_abs.3bb3aa666268"></a>
`UniffiSession.abs(argument: UniffiExpression): UniffiExpression`


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="placement-placement.kotlin.kotlin_object.uniffisession_floor.9ea2c4c27641"></a>
`UniffiSession.floor(argument: UniffiExpression): UniffiExpression`


### ceiling

<a id="placement-placement.kotlin.kotlin_object.uniffisession_ceiling.386186a04ced"></a>
`UniffiSession.ceiling(argument: UniffiExpression): UniffiExpression`


### conjugate

<a id="placement-placement.kotlin.kotlin_object.uniffisession_conjugate.40983b1a8754"></a>
`UniffiSession.conjugate(argument: UniffiExpression): UniffiExpression`


Complex conjugate.

### factorial

<a id="placement-placement.kotlin.kotlin_object.uniffisession_factorial.e55092387fe1"></a>
`UniffiSession.factorial(argument: UniffiExpression): UniffiExpression`


### binomial

<a id="placement-placement.kotlin.kotlin_object.uniffisession_binomial.f0c1042d892e"></a>
`UniffiSession.binomial(upper: UniffiExpression, lower: UniffiExpression): UniffiExpression`


Binomial coefficient C(n, k).

### min

<a id="placement-placement.kotlin.kotlin_object.uniffisession_min.94394434a90e"></a>
`UniffiSession.min(arguments: List<UniffiExpression>): UniffiExpression`


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="placement-placement.kotlin.kotlin_object.uniffisession_max.0a2ca3dffd7f"></a>
`UniffiSession.max(arguments: List<UniffiExpression>): UniffiExpression`


Maximum of the arguments (variadic in Python; a JS array in WASM).

## Example

