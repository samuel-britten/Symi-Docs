# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="placement-placement.rust.native_rust.api_expression_sin.784298390a00"></a>
`symi::api::Expression — pub fn sin(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_sin.48775e99956a"></a>
`symi::api::Session — pub fn sin(&self, argument: &Expression) -> Result<Expression, ApiError>`


### cos

<a id="placement-placement.rust.native_rust.api_expression_cos.7d5f529c3697"></a>
`symi::api::Expression — pub fn cos(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_cos.052a85edbb1e"></a>
`symi::api::Session — pub fn cos(&self, argument: &Expression) -> Result<Expression, ApiError>`


### tan

<a id="placement-placement.rust.native_rust.api_expression_tan.57e7d4137b54"></a>
`symi::api::Expression — pub fn tan(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_tan.9b5cc68ab9d6"></a>
`symi::api::Session — pub fn tan(&self, argument: &Expression) -> Result<Expression, ApiError>`


### sec

<a id="placement-placement.rust.native_rust.api_expression_sec.e028269effb3"></a>
`symi::api::Expression — pub fn sec(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_sec.06b7f8c585e0"></a>
`symi::api::Session — pub fn sec(&self, argument: &Expression) -> Result<Expression, ApiError>`


### csc

<a id="placement-placement.rust.native_rust.api_expression_csc.dedfddfa959f"></a>
`symi::api::Expression — pub fn csc(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_csc.a5d79de408ae"></a>
`symi::api::Session — pub fn csc(&self, argument: &Expression) -> Result<Expression, ApiError>`


### cot

<a id="placement-placement.rust.native_rust.api_expression_cot.65d1894ef7c9"></a>
`symi::api::Expression — pub fn cot(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_cot.73e3744aa33f"></a>
`symi::api::Session — pub fn cot(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arcsin

<a id="placement-placement.rust.native_rust.api_expression_arcsin.3c48b9e1ccfb"></a>
`symi::api::Expression — pub fn arcsin(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arcsin.a6bb8641feac"></a>
`symi::api::Session — pub fn arcsin(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arccos

<a id="placement-placement.rust.native_rust.api_expression_arccos.a0b3fb29df5f"></a>
`symi::api::Expression — pub fn arccos(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arccos.ac4e2b98dbd8"></a>
`symi::api::Session — pub fn arccos(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arctan

<a id="placement-placement.rust.native_rust.api_expression_arctan.7d9f85b071ad"></a>
`symi::api::Expression — pub fn arctan(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arctan.8b828e298135"></a>
`symi::api::Session — pub fn arctan(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arcsec

<a id="placement-placement.rust.native_rust.api_expression_arcsec.d4da0259d3df"></a>
`symi::api::Expression — pub fn arcsec(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arcsec.be853f3b4e58"></a>
`symi::api::Session — pub fn arcsec(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arccsc

<a id="placement-placement.rust.native_rust.api_expression_arccsc.01e625cd64e5"></a>
`symi::api::Expression — pub fn arccsc(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arccsc.9eb9623e7319"></a>
`symi::api::Session — pub fn arccsc(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arccot

<a id="placement-placement.rust.native_rust.api_expression_arccot.9e91973581df"></a>
`symi::api::Expression — pub fn arccot(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arccot.088a0e2dd8e6"></a>
`symi::api::Session — pub fn arccot(&self, argument: &Expression) -> Result<Expression, ApiError>`


### sinh

<a id="placement-placement.rust.native_rust.api_expression_sinh.679ab2e9da49"></a>
`symi::api::Expression — pub fn sinh(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_sinh.a3f7b924fefd"></a>
`symi::api::Session — pub fn sinh(&self, argument: &Expression) -> Result<Expression, ApiError>`


### cosh

<a id="placement-placement.rust.native_rust.api_expression_cosh.32e255b10e28"></a>
`symi::api::Expression — pub fn cosh(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_cosh.74f6d15815f1"></a>
`symi::api::Session — pub fn cosh(&self, argument: &Expression) -> Result<Expression, ApiError>`


### tanh

<a id="placement-placement.rust.native_rust.api_expression_tanh.0e6a1990345c"></a>
`symi::api::Expression — pub fn tanh(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_tanh.96a80235a5a8"></a>
`symi::api::Session — pub fn tanh(&self, argument: &Expression) -> Result<Expression, ApiError>`


### sech

<a id="placement-placement.rust.native_rust.api_expression_sech.dbb2b7fe485f"></a>
`symi::api::Expression — pub fn sech(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_sech.43d904f78136"></a>
`symi::api::Session — pub fn sech(&self, argument: &Expression) -> Result<Expression, ApiError>`


### csch

<a id="placement-placement.rust.native_rust.api_expression_csch.668a7eaeea0d"></a>
`symi::api::Expression — pub fn csch(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_csch.496236b0de3e"></a>
`symi::api::Session — pub fn csch(&self, argument: &Expression) -> Result<Expression, ApiError>`


### coth

<a id="placement-placement.rust.native_rust.api_expression_coth.41cbb5f8f5c0"></a>
`symi::api::Expression — pub fn coth(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_coth.7308ff7b2d9b"></a>
`symi::api::Session — pub fn coth(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arcsinh

<a id="placement-placement.rust.native_rust.api_expression_arcsinh.c13f0896d550"></a>
`symi::api::Expression — pub fn arcsinh(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arcsinh.2851f8b17aee"></a>
`symi::api::Session — pub fn arcsinh(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arccosh

<a id="placement-placement.rust.native_rust.api_expression_arccosh.120cc326e3e0"></a>
`symi::api::Expression — pub fn arccosh(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arccosh.4e8ee9ed7d9b"></a>
`symi::api::Session — pub fn arccosh(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arctanh

<a id="placement-placement.rust.native_rust.api_expression_arctanh.cce7a54ba246"></a>
`symi::api::Expression — pub fn arctanh(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arctanh.94eb57d50c43"></a>
`symi::api::Session — pub fn arctanh(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arcsech

<a id="placement-placement.rust.native_rust.api_expression_arcsech.b7d7af7600db"></a>
`symi::api::Expression — pub fn arcsech(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arcsech.1b8bc90eb3f2"></a>
`symi::api::Session — pub fn arcsech(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arccsch

<a id="placement-placement.rust.native_rust.api_expression_arccsch.201b9ef07ad5"></a>
`symi::api::Expression — pub fn arccsch(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arccsch.2fc976472128"></a>
`symi::api::Session — pub fn arccsch(&self, argument: &Expression) -> Result<Expression, ApiError>`


### arccoth

<a id="placement-placement.rust.native_rust.api_expression_arccoth.fcb573c109bc"></a>
`symi::api::Expression — pub fn arccoth(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_arccoth.6325c24f55bb"></a>
`symi::api::Session — pub fn arccoth(&self, argument: &Expression) -> Result<Expression, ApiError>`


### exp

<a id="placement-placement.rust.native_rust.api_expression_exp.ff5fa41b181b"></a>
`symi::api::Expression — pub fn exp(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_exp.e98de33a027b"></a>
`symi::api::Session — pub fn exp(&self, argument: &Expression) -> Result<Expression, ApiError>`


The natural exponential.

### log

<a id="placement-placement.rust.native_rust.api_expression_log.888fb6f25b04"></a>
`symi::api::Expression — pub fn log(&self, base: Option<&Expression>) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_log.a3726be10ad2"></a>
`symi::api::Session — pub fn log(&self, argument: &Expression, base: Option<&Expression>) -> Result<Expression, ApiError>`


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="placement-placement.rust.native_rust.api_expression_sqrt.cf4fde2cbb0e"></a>
`symi::api::Expression — pub fn sqrt(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_sqrt.d918e989f8f0"></a>
`symi::api::Session — pub fn sqrt(&self, argument: &Expression) -> Result<Expression, ApiError>`


Principal square root, stored as `x^(1/2)`.

### root

<a id="placement-placement.rust.native_rust.api_session_root.a7cf0d4b71c8"></a>
`symi::api::Session — pub fn root(&self, radicand: &Expression, index: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_results_rootmultiplicity_root.02cf359a422d"></a>
`symi::api::results::RootMultiplicity — pub fn root(&self) -> Expression`


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="placement-placement.rust.native_rust.api_expression_abs.dbf032d725d4"></a>
`symi::api::Expression — pub fn abs(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_abs.2f5fa046c68c"></a>
`symi::api::Session — pub fn abs(&self, argument: &Expression) -> Result<Expression, ApiError>`


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="placement-placement.rust.native_rust.api_expression_floor.59e4c6c50035"></a>
`symi::api::Expression — pub fn floor(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_floor.b4f591af5ec1"></a>
`symi::api::Session — pub fn floor(&self, argument: &Expression) -> Result<Expression, ApiError>`


### ceiling

<a id="placement-placement.rust.native_rust.api_expression_ceiling.170f64adfbca"></a>
`symi::api::Expression — pub fn ceiling(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_ceiling.ec61aed10966"></a>
`symi::api::Session — pub fn ceiling(&self, argument: &Expression) -> Result<Expression, ApiError>`


### conjugate

<a id="placement-placement.rust.native_rust.api_expression_conjugate.d6c3175256ed"></a>
`symi::api::Expression — pub fn conjugate(&self) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_conjugate.9e7294cfba81"></a>
`symi::api::Session — pub fn conjugate(&self, argument: &Expression) -> Result<Expression, ApiError>`


Complex conjugate.

### factorial

<a id="placement-placement.rust.native_rust.api_session_factorial.568299c74924"></a>
`symi::api::Session — pub fn factorial(&self, argument: &Expression) -> Result<Expression, ApiError>`


### binomial

<a id="placement-placement.rust.native_rust.api_expression_binomial.22f71a6a9c6f"></a>
`symi::api::Expression — pub fn binomial(&self, lower: &Expression) -> Result<Expression, ApiError>`

<a id="placement-placement.rust.native_rust.api_session_binomial.b6277398f2c5"></a>
`symi::api::Session — pub fn binomial(&self, upper: &Expression, lower: &Expression) -> Result<Expression, ApiError>`


Binomial coefficient C(n, k).

### min

<a id="placement-placement.rust.native_rust.api_session_min.d28470209f0e"></a>
`symi::api::Session — pub fn min<'a, IteratorType>(&self, arguments: IteratorType) -> Result<Expression, ApiError> where IteratorType: IntoIterator<Item = &'a Expression>`


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="placement-placement.rust.native_rust.api_session_max.8161cd9f6ac3"></a>
`symi::api::Session — pub fn max<'a, IteratorType>(&self, arguments: IteratorType) -> Result<Expression, ApiError> where IteratorType: IntoIterator<Item = &'a Expression>`


Maximum of the arguments (variadic in Python; a JS array in WASM).

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

<a id="placement-placement.rust.native_rust.api_serialization_naturallogarithmpresentation_log.a5e4d3205329"></a>
### api::serialization::NaturalLogarithmPresentation::Log

`symi::api::serialization::NaturalLogarithmPresentation — Log`

Returns `variant`.

