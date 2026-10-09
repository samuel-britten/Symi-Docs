# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="placement-placement.wasm.javascript_facade.context_sin.e186cd596931"></a>
`Context.sin(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_sin.8da54b319d95"></a>
`Expression.sin(): Expression`

<a id="placement-placement.wasm.javascript_facade.symifacade_sin.64ed29b5aabf"></a>
`SymiFacade.sin(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.context_sin.5b5f3d82ecc5"></a>
Raw WebAssembly: `pub fn sin(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_sin.6bd3d48fdeac"></a>
Raw WebAssembly: `fn sin(x: &Expression) -> Result<Expression, JsError>`


### cos

<a id="placement-placement.wasm.javascript_facade.context_cos.127007f1d3bb"></a>
`Context.cos(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_cos.9c05351df5a5"></a>
`Expression.cos(): Expression`

<a id="placement-placement.wasm.javascript_facade.symifacade_cos.08b219c1578f"></a>
`SymiFacade.cos(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.context_cos.8e8798a224e7"></a>
Raw WebAssembly: `pub fn cos(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_cos.e22dd1cddf4b"></a>
Raw WebAssembly: `fn cos(x: &Expression) -> Result<Expression, JsError>`


### tan

<a id="placement-placement.wasm.wasm_class.context_tan.96c4a114dc95"></a>
Raw WebAssembly: `pub fn tan(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_tan.8842ce8669b1"></a>
Raw WebAssembly: `fn tan(x: &Expression) -> Result<Expression, JsError>`


### sec

<a id="placement-placement.wasm.wasm_class.context_sec.84f267f90796"></a>
Raw WebAssembly: `pub fn sec(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_sec.4d68af5f0033"></a>
Raw WebAssembly: `fn sec(x: &Expression) -> Result<Expression, JsError>`


### csc

<a id="placement-placement.wasm.wasm_class.context_csc.b24c53b2bf57"></a>
Raw WebAssembly: `pub fn csc(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_csc.7065ea694039"></a>
Raw WebAssembly: `fn csc(x: &Expression) -> Result<Expression, JsError>`


### cot

<a id="placement-placement.wasm.wasm_class.context_cot.38747a13906c"></a>
Raw WebAssembly: `pub fn cot(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_cot.5f368ffa03f9"></a>
Raw WebAssembly: `fn cot(x: &Expression) -> Result<Expression, JsError>`


### arcsin

<a id="placement-placement.wasm.wasm_class.context_arcsin.b32e227f2b04"></a>
Raw WebAssembly: `pub fn arcsin(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arcsin.e6003a8e88b5"></a>
Raw WebAssembly: `fn arcsin(x: &Expression) -> Result<Expression, JsError>`


### arccos

<a id="placement-placement.wasm.wasm_class.context_arccos.6f986d1187f1"></a>
Raw WebAssembly: `pub fn arccos(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arccos.64eb38298d92"></a>
Raw WebAssembly: `fn arccos(x: &Expression) -> Result<Expression, JsError>`


### arctan

<a id="placement-placement.wasm.wasm_class.context_arctan.7dadd625290a"></a>
Raw WebAssembly: `pub fn arctan(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arctan.94640543b210"></a>
Raw WebAssembly: `fn arctan(x: &Expression) -> Result<Expression, JsError>`


### arcsec

<a id="placement-placement.wasm.wasm_class.context_arcsec.3ca9b48826c7"></a>
Raw WebAssembly: `pub fn arcsec(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arcsec.c8a0041cc409"></a>
Raw WebAssembly: `fn arcsec(x: &Expression) -> Result<Expression, JsError>`


### arccsc

<a id="placement-placement.wasm.wasm_class.context_arccsc.42ee39a70f76"></a>
Raw WebAssembly: `pub fn arccsc(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arccsc.963a346a021c"></a>
Raw WebAssembly: `fn arccsc(x: &Expression) -> Result<Expression, JsError>`


### arccot

<a id="placement-placement.wasm.wasm_class.context_arccot.d6212e82ac65"></a>
Raw WebAssembly: `pub fn arccot(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arccot.d67736f7d772"></a>
Raw WebAssembly: `fn arccot(x: &Expression) -> Result<Expression, JsError>`


### sinh

<a id="placement-placement.wasm.wasm_class.context_sinh.5db01c5a733c"></a>
Raw WebAssembly: `pub fn sinh(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_sinh.1ff5a391d068"></a>
Raw WebAssembly: `fn sinh(x: &Expression) -> Result<Expression, JsError>`


### cosh

<a id="placement-placement.wasm.wasm_class.context_cosh.0d0d2c183bbe"></a>
Raw WebAssembly: `pub fn cosh(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_cosh.7a957d886cb2"></a>
Raw WebAssembly: `fn cosh(x: &Expression) -> Result<Expression, JsError>`


### tanh

<a id="placement-placement.wasm.wasm_class.context_tanh.fcfd055b99f5"></a>
Raw WebAssembly: `pub fn tanh(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_tanh.efb975b6dbc0"></a>
Raw WebAssembly: `fn tanh(x: &Expression) -> Result<Expression, JsError>`


### sech

<a id="placement-placement.wasm.wasm_class.context_sech.b5b9ba43e0b5"></a>
Raw WebAssembly: `pub fn sech(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_sech.6fb6206e0865"></a>
Raw WebAssembly: `fn sech(x: &Expression) -> Result<Expression, JsError>`


### csch

<a id="placement-placement.wasm.wasm_class.context_csch.f2d967560733"></a>
Raw WebAssembly: `pub fn csch(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_csch.4d44335294b8"></a>
Raw WebAssembly: `fn csch(x: &Expression) -> Result<Expression, JsError>`


### coth

<a id="placement-placement.wasm.wasm_class.context_coth.9ca2309ec1d6"></a>
Raw WebAssembly: `pub fn coth(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_coth.1dcf0ef2fba2"></a>
Raw WebAssembly: `fn coth(x: &Expression) -> Result<Expression, JsError>`


### arcsinh

<a id="placement-placement.wasm.wasm_class.context_arcsinh.fa148850e60c"></a>
Raw WebAssembly: `pub fn arcsinh(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arcsinh.93841ccf5c75"></a>
Raw WebAssembly: `fn arcsinh(x: &Expression) -> Result<Expression, JsError>`


### arccosh

<a id="placement-placement.wasm.wasm_class.context_arccosh.cb2cbcc3f028"></a>
Raw WebAssembly: `pub fn arccosh(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arccosh.c9cc3fd80813"></a>
Raw WebAssembly: `fn arccosh(x: &Expression) -> Result<Expression, JsError>`


### arctanh

<a id="placement-placement.wasm.wasm_class.context_arctanh.446dade022fb"></a>
Raw WebAssembly: `pub fn arctanh(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arctanh.9edfb410a017"></a>
Raw WebAssembly: `fn arctanh(x: &Expression) -> Result<Expression, JsError>`


### arcsech

<a id="placement-placement.wasm.wasm_class.context_arcsech.4b7994e5ad8d"></a>
Raw WebAssembly: `pub fn arcsech(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arcsech.47496bc1390d"></a>
Raw WebAssembly: `fn arcsech(x: &Expression) -> Result<Expression, JsError>`


### arccsch

<a id="placement-placement.wasm.wasm_class.context_arccsch.637eb86bfbe6"></a>
Raw WebAssembly: `pub fn arccsch(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arccsch.24e8a1e67daf"></a>
Raw WebAssembly: `fn arccsch(x: &Expression) -> Result<Expression, JsError>`


### arccoth

<a id="placement-placement.wasm.wasm_class.context_arccoth.ccfaaed98446"></a>
Raw WebAssembly: `pub fn arccoth(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_arccoth.53ec83d35724"></a>
Raw WebAssembly: `fn arccoth(x: &Expression) -> Result<Expression, JsError>`


### exp

<a id="placement-placement.wasm.javascript_facade.context_exp.2ab79692a3cc"></a>
`Context.exp(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_exp.11a12106d9fb"></a>
`Expression.exp(): Expression`

<a id="placement-placement.wasm.javascript_facade.symifacade_exp.c26368174598"></a>
`SymiFacade.exp(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.context_exp.560a294e8805"></a>
Raw WebAssembly: `pub fn exp(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_exp.8b7300d911be"></a>
Raw WebAssembly: `fn exp(x: &Expression) -> Result<Expression, JsError>`


The natural exponential.

### log

<a id="placement-placement.wasm.wasm_class.context_log.70c0987461a7"></a>
Raw WebAssembly: `pub fn log(&self, x: &Expression, base: Option<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_log.38cd13720085"></a>
Raw WebAssembly: `fn log(x: &Expression, base: Option<Expression>) -> Result<Expression, JsError>`


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="placement-placement.wasm.javascript_facade.context_sqrt.2a25fe213571"></a>
`Context.sqrt(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.javascript_facade.expression_sqrt.8adbabb8c608"></a>
`Expression.sqrt(): Expression`

<a id="placement-placement.wasm.javascript_facade.symifacade_sqrt.39062d897204"></a>
`SymiFacade.sqrt(value: ExpressionLike): Expression`

<a id="placement-placement.wasm.wasm_class.context_sqrt.e93f423ac79b"></a>
Raw WebAssembly: `pub fn sqrt(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_sqrt.31de3cfa5500"></a>
Raw WebAssembly: `fn sqrt(x: &Expression) -> Result<Expression, JsError>`


Principal square root, stored as `x^(1/2)`.

### root

<a id="placement-placement.wasm.wasm_class.context_root.0a936cd66ba7"></a>
Raw WebAssembly: `pub fn root(&self, x: &Expression, n: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.rootmultiplicity_root.27ae91435854"></a>
Raw WebAssembly: `pub fn root(&self) -> Expression`

<a id="placement-placement.wasm.wasm_module.module_root.305a53c2acc8"></a>
Raw WebAssembly: `fn root(x: &Expression, n: &Expression) -> Result<Expression, JsError>`


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="placement-placement.wasm.wasm_class.context_abs.8becf99ffac2"></a>
Raw WebAssembly: `pub fn abs(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_abs.3346979e2e3e"></a>
Raw WebAssembly: `fn abs(x: &Expression) -> Result<Expression, JsError>`


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="placement-placement.wasm.wasm_class.context_floor.106fcc90d473"></a>
Raw WebAssembly: `pub fn floor(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_floor.44548369db27"></a>
Raw WebAssembly: `fn floor(x: &Expression) -> Result<Expression, JsError>`


### ceiling

<a id="placement-placement.wasm.wasm_class.context_ceiling.b28033129d91"></a>
Raw WebAssembly: `pub fn ceiling(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_ceiling.ea4214d28a60"></a>
Raw WebAssembly: `fn ceiling(x: &Expression) -> Result<Expression, JsError>`


### conjugate

<a id="placement-placement.wasm.wasm_class.context_conjugate.adbaa68a1d9c"></a>
Raw WebAssembly: `pub fn conjugate(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_conjugate.6c7c642fd60f"></a>
Raw WebAssembly: `fn conjugate(x: &Expression) -> Result<Expression, JsError>`


Complex conjugate.

### factorial

<a id="placement-placement.wasm.wasm_class.context_factorial.9cd8cb495318"></a>
Raw WebAssembly: `pub fn factorial(&self, x: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_factorial.5a0581f6a74d"></a>
Raw WebAssembly: `fn factorial(x: &Expression) -> Result<Expression, JsError>`


### binomial

<a id="placement-placement.wasm.wasm_class.context_binomial.bff558909372"></a>
Raw WebAssembly: `pub fn binomial(&self, n: &Expression, k: &Expression) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_binomial.730ef71fff39"></a>
Raw WebAssembly: `fn binomial(n: &Expression, k: &Expression) -> Result<Expression, JsError>`


Binomial coefficient C(n, k).

### min

<a id="placement-placement.wasm.wasm_class.context_min.4481c194c547"></a>
Raw WebAssembly: `pub fn min(&self, arguments: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_min.079bca1de077"></a>
Raw WebAssembly: `fn min(arguments: Vec<Expression>) -> Result<Expression, JsError>`


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="placement-placement.wasm.wasm_class.context_max.c8df78797a62"></a>
Raw WebAssembly: `pub fn max(&self, arguments: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_max.9ad2a66d39c5"></a>
Raw WebAssembly: `fn max(arguments: Vec<Expression>) -> Result<Expression, JsError>`


Maximum of the arguments (variadic in Python; a JS array in WASM).

## Example

Elementary functions evaluate exactly at recognised arguments and stay symbolic elsewhere.

```javascript
const x = symi.symbol("x");

console.log(symi.sin(symi.pi.divide(6)).toString());
console.log(symi.exp(symi.integer(0n)).toString());
console.log(symi.sqrt(symi.integer(18n)).toString());
console.log(x.cos().power(2).add(x.sin().power(2)).toString());
```

