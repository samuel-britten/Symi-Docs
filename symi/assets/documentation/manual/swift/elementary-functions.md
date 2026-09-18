# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="placement-placement.swift.swift_object.uniffiexpression_sin.51d54b8378d7"></a>
`UniffiExpression.sin() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_sin.d38469b1a956"></a>
`UniffiSession.sin(argument: UniffiExpression) -> UniffiExpression`


### cos

<a id="placement-placement.swift.swift_object.uniffiexpression_cos.35fee6110943"></a>
`UniffiExpression.cos() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_cos.c9df262f5328"></a>
`UniffiSession.cos(argument: UniffiExpression) -> UniffiExpression`


### tan

<a id="placement-placement.swift.swift_object.uniffisession_tan.4a38bbc6a305"></a>
`UniffiSession.tan(argument: UniffiExpression) -> UniffiExpression`


### sec

<a id="placement-placement.swift.swift_object.uniffisession_sec.796dc3e13f1a"></a>
`UniffiSession.sec(argument: UniffiExpression) -> UniffiExpression`


### csc

<a id="placement-placement.swift.swift_object.uniffisession_csc.97312d88f534"></a>
`UniffiSession.csc(argument: UniffiExpression) -> UniffiExpression`


### cot

<a id="placement-placement.swift.swift_object.uniffisession_cot.b577453ff703"></a>
`UniffiSession.cot(argument: UniffiExpression) -> UniffiExpression`


### arcsin

<a id="placement-placement.swift.swift_object.uniffisession_arcsin.7d17db4f886a"></a>
`UniffiSession.arcsin(argument: UniffiExpression) -> UniffiExpression`


### arccos

<a id="placement-placement.swift.swift_object.uniffisession_arccos.873a014414b3"></a>
`UniffiSession.arccos(argument: UniffiExpression) -> UniffiExpression`


### arctan

<a id="placement-placement.swift.swift_object.uniffisession_arctan.4e8a93014c68"></a>
`UniffiSession.arctan(argument: UniffiExpression) -> UniffiExpression`


### arcsec

<a id="placement-placement.swift.swift_object.uniffisession_arcsec.002cb0ce2eeb"></a>
`UniffiSession.arcsec(argument: UniffiExpression) -> UniffiExpression`


### arccsc

<a id="placement-placement.swift.swift_object.uniffisession_arccsc.27a9d43f9a25"></a>
`UniffiSession.arccsc(argument: UniffiExpression) -> UniffiExpression`


### arccot

<a id="placement-placement.swift.swift_object.uniffisession_arccot.9b0d534c00dc"></a>
`UniffiSession.arccot(argument: UniffiExpression) -> UniffiExpression`


### sinh

<a id="placement-placement.swift.swift_object.uniffisession_sinh.154d05746423"></a>
`UniffiSession.sinh(argument: UniffiExpression) -> UniffiExpression`


### cosh

<a id="placement-placement.swift.swift_object.uniffisession_cosh.470bd71c936c"></a>
`UniffiSession.cosh(argument: UniffiExpression) -> UniffiExpression`


### tanh

<a id="placement-placement.swift.swift_object.uniffisession_tanh.06a5b797a74c"></a>
`UniffiSession.tanh(argument: UniffiExpression) -> UniffiExpression`


### sech

<a id="placement-placement.swift.swift_object.uniffisession_sech.7653b59db837"></a>
`UniffiSession.sech(argument: UniffiExpression) -> UniffiExpression`


### csch

<a id="placement-placement.swift.swift_object.uniffisession_csch.ba0508357fff"></a>
`UniffiSession.csch(argument: UniffiExpression) -> UniffiExpression`


### coth

<a id="placement-placement.swift.swift_object.uniffisession_coth.57a98e776dfd"></a>
`UniffiSession.coth(argument: UniffiExpression) -> UniffiExpression`


### arcsinh

<a id="placement-placement.swift.swift_object.uniffisession_arcsinh.cb8516bb48eb"></a>
`UniffiSession.arcsinh(argument: UniffiExpression) -> UniffiExpression`


### arccosh

<a id="placement-placement.swift.swift_object.uniffisession_arccosh.7f0395225cdb"></a>
`UniffiSession.arccosh(argument: UniffiExpression) -> UniffiExpression`


### arctanh

<a id="placement-placement.swift.swift_object.uniffisession_arctanh.d92df5a25d9f"></a>
`UniffiSession.arctanh(argument: UniffiExpression) -> UniffiExpression`


### arcsech

<a id="placement-placement.swift.swift_object.uniffisession_arcsech.aa9d73ebdb85"></a>
`UniffiSession.arcsech(argument: UniffiExpression) -> UniffiExpression`


### arccsch

<a id="placement-placement.swift.swift_object.uniffisession_arccsch.f5c64d3b4305"></a>
`UniffiSession.arccsch(argument: UniffiExpression) -> UniffiExpression`


### arccoth

<a id="placement-placement.swift.swift_object.uniffisession_arccoth.d461e89715fa"></a>
`UniffiSession.arccoth(argument: UniffiExpression) -> UniffiExpression`


### exp

<a id="placement-placement.swift.swift_object.uniffiexpression_exp.112ee239c8ce"></a>
`UniffiExpression.exp() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_exp.96fa2cf9a8a0"></a>
`UniffiSession.exp(argument: UniffiExpression) -> UniffiExpression`


The natural exponential.

### log

<a id="placement-placement.swift.swift_object.uniffisession_log.56e8cba0f445"></a>
`UniffiSession.log(argument: UniffiExpression, base: UniffiExpression?) -> UniffiExpression`


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="placement-placement.swift.swift_object.uniffiexpression_sqrt.e590a327a79f"></a>
`UniffiExpression.sqrt() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_sqrt.3a06fe6228b3"></a>
`UniffiSession.sqrt(argument: UniffiExpression) -> UniffiExpression`


Principal square root, stored as `x^(1/2)`.

### root

<a id="placement-placement.swift.swift_object.uniffirootmultiplicity_root.9988be4aaad7"></a>
`UniffiRootMultiplicity.root() -> UniffiExpression`

<a id="placement-placement.swift.swift_object.uniffisession_root.619b5fda1909"></a>
`UniffiSession.root(radicand: UniffiExpression, index: UniffiExpression) -> UniffiExpression`


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="placement-placement.swift.swift_object.uniffisession_abs.dd9267509aa4"></a>
`UniffiSession.abs(argument: UniffiExpression) -> UniffiExpression`


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="placement-placement.swift.swift_object.uniffisession_floor.c2df3fd00241"></a>
`UniffiSession.floor(argument: UniffiExpression) -> UniffiExpression`


### ceiling

<a id="placement-placement.swift.swift_object.uniffisession_ceiling.90e7123537d5"></a>
`UniffiSession.ceiling(argument: UniffiExpression) -> UniffiExpression`


### conjugate

<a id="placement-placement.swift.swift_object.uniffisession_conjugate.f4aff69bd1f7"></a>
`UniffiSession.conjugate(argument: UniffiExpression) -> UniffiExpression`


Complex conjugate.

### factorial

<a id="placement-placement.swift.swift_object.uniffisession_factorial.804228dc077f"></a>
`UniffiSession.factorial(argument: UniffiExpression) -> UniffiExpression`


### binomial

<a id="placement-placement.swift.swift_object.uniffisession_binomial.6424961e17af"></a>
`UniffiSession.binomial(upper: UniffiExpression, lower: UniffiExpression) -> UniffiExpression`


Binomial coefficient C(n, k).

### min

<a id="placement-placement.swift.swift_object.uniffisession_min.2e33a44befc8"></a>
`UniffiSession.min(arguments: [UniffiExpression]) -> UniffiExpression`


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="placement-placement.swift.swift_object.uniffisession_max.a8a8d7405982"></a>
`UniffiSession.max(arguments: [UniffiExpression]) -> UniffiExpression`


Maximum of the arguments (variadic in Python; a JS array in WASM).

## Example

