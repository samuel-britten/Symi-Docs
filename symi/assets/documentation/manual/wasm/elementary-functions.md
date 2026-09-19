# Elementary functions

Elementary functions simplify when their arguments provide enough exact information.


All routed through the auto-simplifying builders, so the result is in
canonical ASAE form (e.g. `sqrt(x)` is stored as `x^(1/2)`, known special
values collapse).

### sin

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sin_api_session_sin"></a>
<a id="placement-placement.wasm.wasm_module.module_sin.6bd3d48fdeac"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sin(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_sin.e186cd596931"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sin</code></p>

```typescript signature
sin(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_sin.5b5f3d82ecc5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sin</code></p>

```typescript signature
sin(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_sin.64ed29b5aabf"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.sin</code></p>

```typescript signature
sin(value: ExpressionLike): Expression
```

</details>

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sin_api_expression_sin"></a>
<a id="placement-placement.wasm.javascript_facade.expression_sin.8da54b319d95"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
sin(): Expression
```


### cos

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cos_api_session_cos"></a>
<a id="placement-placement.wasm.wasm_module.module_cos.e22dd1cddf4b"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cos(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_cos.127007f1d3bb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cos</code></p>

```typescript signature
cos(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_cos.8e8798a224e7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cos</code></p>

```typescript signature
cos(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_cos.08b219c1578f"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.cos</code></p>

```typescript signature
cos(value: ExpressionLike): Expression
```

</details>

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cos_api_expression_cos"></a>
<a id="placement-placement.wasm.javascript_facade.expression_cos.9c05351df5a5"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
cos(): Expression
```


### tan

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_tan_api_session_tan"></a>
<a id="placement-placement.wasm.wasm_module.module_tan.8842ce8669b1"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
tan(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tan.96c4a114dc95"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.tan</code></p>

```typescript signature
tan(x: Expression): Expression
```

</details>


### sec

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sec_api_session_sec"></a>
<a id="placement-placement.wasm.wasm_module.module_sec.4d68af5f0033"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sec(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_sec.84f267f90796"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sec</code></p>

```typescript signature
sec(x: Expression): Expression
```

</details>


### csc

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_csc_api_session_csc"></a>
<a id="placement-placement.wasm.wasm_module.module_csc.7065ea694039"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
csc(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_csc.b24c53b2bf57"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.csc</code></p>

```typescript signature
csc(x: Expression): Expression
```

</details>


### cot

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cot_api_session_cot"></a>
<a id="placement-placement.wasm.wasm_module.module_cot.5f368ffa03f9"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cot(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cot.38747a13906c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cot</code></p>

```typescript signature
cot(x: Expression): Expression
```

</details>


### arcsin

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsin_api_session_arcsin"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsin.e6003a8e88b5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsin(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsin.b32e227f2b04"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsin</code></p>

```typescript signature
arcsin(x: Expression): Expression
```

</details>


### arccos

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccos_api_session_arccos"></a>
<a id="placement-placement.wasm.wasm_module.module_arccos.64eb38298d92"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccos(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccos.6f986d1187f1"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccos</code></p>

```typescript signature
arccos(x: Expression): Expression
```

</details>


### arctan

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arctan_api_session_arctan"></a>
<a id="placement-placement.wasm.wasm_module.module_arctan.94640543b210"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arctan(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arctan.7dadd625290a"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arctan</code></p>

```typescript signature
arctan(x: Expression): Expression
```

</details>


### arcsec

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsec_api_session_arcsec"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsec.c8a0041cc409"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsec(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsec.3ca9b48826c7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsec</code></p>

```typescript signature
arcsec(x: Expression): Expression
```

</details>


### arccsc

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccsc_api_session_arccsc"></a>
<a id="placement-placement.wasm.wasm_module.module_arccsc.963a346a021c"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccsc(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccsc.42ee39a70f76"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccsc</code></p>

```typescript signature
arccsc(x: Expression): Expression
```

</details>


### arccot

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccot_api_session_arccot"></a>
<a id="placement-placement.wasm.wasm_module.module_arccot.d67736f7d772"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccot(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccot.d6212e82ac65"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccot</code></p>

```typescript signature
arccot(x: Expression): Expression
```

</details>


### sinh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sinh_api_session_sinh"></a>
<a id="placement-placement.wasm.wasm_module.module_sinh.1ff5a391d068"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sinh(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_sinh.5db01c5a733c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sinh</code></p>

```typescript signature
sinh(x: Expression): Expression
```

</details>


### cosh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_cosh_api_session_cosh"></a>
<a id="placement-placement.wasm.wasm_module.module_cosh.7a957d886cb2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
cosh(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_cosh.0d0d2c183bbe"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.cosh</code></p>

```typescript signature
cosh(x: Expression): Expression
```

</details>


### tanh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_tanh_api_session_tanh"></a>
<a id="placement-placement.wasm.wasm_module.module_tanh.efb975b6dbc0"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
tanh(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_tanh.fcfd055b99f5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.tanh</code></p>

```typescript signature
tanh(x: Expression): Expression
```

</details>


### sech

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sech_api_session_sech"></a>
<a id="placement-placement.wasm.wasm_module.module_sech.6fb6206e0865"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sech(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_sech.b5b9ba43e0b5"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sech</code></p>

```typescript signature
sech(x: Expression): Expression
```

</details>


### csch

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_csch_api_session_csch"></a>
<a id="placement-placement.wasm.wasm_module.module_csch.4d44335294b8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
csch(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_csch.f2d967560733"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.csch</code></p>

```typescript signature
csch(x: Expression): Expression
```

</details>


### coth

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_coth_api_session_coth"></a>
<a id="placement-placement.wasm.wasm_module.module_coth.1dcf0ef2fba2"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
coth(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_coth.9ca2309ec1d6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.coth</code></p>

```typescript signature
coth(x: Expression): Expression
```

</details>


### arcsinh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsinh_api_session_arcsinh"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsinh.93841ccf5c75"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsinh(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsinh.fa148850e60c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsinh</code></p>

```typescript signature
arcsinh(x: Expression): Expression
```

</details>


### arccosh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccosh_api_session_arccosh"></a>
<a id="placement-placement.wasm.wasm_module.module_arccosh.c9cc3fd80813"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccosh(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccosh.cb2cbcc3f028"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccosh</code></p>

```typescript signature
arccosh(x: Expression): Expression
```

</details>


### arctanh

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arctanh_api_session_arctanh"></a>
<a id="placement-placement.wasm.wasm_module.module_arctanh.9edfb410a017"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arctanh(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arctanh.446dade022fb"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arctanh</code></p>

```typescript signature
arctanh(x: Expression): Expression
```

</details>


### arcsech

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arcsech_api_session_arcsech"></a>
<a id="placement-placement.wasm.wasm_module.module_arcsech.47496bc1390d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arcsech(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arcsech.4b7994e5ad8d"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arcsech</code></p>

```typescript signature
arcsech(x: Expression): Expression
```

</details>


### arccsch

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccsch_api_session_arccsch"></a>
<a id="placement-placement.wasm.wasm_module.module_arccsch.24e8a1e67daf"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccsch(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccsch.637eb86bfbe6"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccsch</code></p>

```typescript signature
arccsch(x: Expression): Expression
```

</details>


### arccoth

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_arccoth_api_session_arccoth"></a>
<a id="placement-placement.wasm.wasm_module.module_arccoth.53ec83d35724"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
arccoth(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_arccoth.ccfaaed98446"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.arccoth</code></p>

```typescript signature
arccoth(x: Expression): Expression
```

</details>


### exp

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_exp_api_session_exp"></a>
<a id="placement-placement.wasm.wasm_module.module_exp.8b7300d911be"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
exp(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_exp.2ab79692a3cc"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.exp</code></p>

```typescript signature
exp(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_exp.560a294e8805"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.exp</code></p>

```typescript signature
exp(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_exp.c26368174598"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.exp</code></p>

```typescript signature
exp(value: ExpressionLike): Expression
```

</details>

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_exp_api_expression_exp"></a>
<a id="placement-placement.wasm.javascript_facade.expression_exp.11a12106d9fb"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
exp(): Expression
```


The natural exponential.

### log

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_log_api_session_log"></a>
<a id="placement-placement.wasm.wasm_module.module_log.38cd13720085"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
log(x: Expression, base?: Expression | null): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_log.70c0987461a7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.log</code></p>

```typescript signature
log(x: Expression, base?: Expression | null): Expression
```

</details>


Natural logarithm; with `base` given, `log(x)/log(base)`.

### sqrt

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sqrt_api_session_sqrt"></a>
<a id="placement-placement.wasm.wasm_module.module_sqrt.31de3cfa5500"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
sqrt(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.javascript_facade.context_sqrt.2a25fe213571"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sqrt</code></p>

```typescript signature
sqrt(value: ExpressionLike): Expression
```

<a id="placement-placement.wasm.wasm_class.context_sqrt.e93f423ac79b"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.sqrt</code></p>

```typescript signature
sqrt(x: Expression): Expression
```

<a id="placement-placement.wasm.javascript_facade.symifacade_sqrt.39062d897204"></a>
<p class="symi-entry-owner">SymiFacade method: <code>SymiFacade.sqrt</code></p>

```typescript signature
sqrt(value: ExpressionLike): Expression
```

</details>

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_sqrt_api_expression_sqrt"></a>
<a id="placement-placement.wasm.javascript_facade.expression_sqrt.8adbabb8c608"></a>
<p class="symi-entry-owner">Expression method</p>

```typescript signature
sqrt(): Expression
```


Principal square root, stored as `x^(1/2)`.

### root

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_root_api_session_root"></a>
<a id="placement-placement.wasm.wasm_module.module_root.305a53c2acc8"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
root(x: Expression, n: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_root.0a936cd66ba7"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.root</code></p>

```typescript signature
root(x: Expression, n: Expression): Expression
```

</details>

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_root_api_results_rootmultiplicity_root"></a>
<a id="placement-placement.wasm.wasm_class.rootmultiplicity_root.27ae91435854"></a>
<p class="symi-entry-owner">RootMultiplicity property</p>

```typescript signature
readonly root: Expression
```


Principal n-th root, stored as `x^(1/n)`.

### abs

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_abs_api_session_abs"></a>
<a id="placement-placement.wasm.wasm_module.module_abs.3346979e2e3e"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
abs(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_abs.8becf99ffac2"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.abs</code></p>

```typescript signature
abs(x: Expression): Expression
```

</details>


The absolute value. It folds to `x` or `-x` whenever the sign of `x` is decided by the exact real
order procedure — the same decided class `evaluate_truth` reports on — so `abs(sqrt(5) - 2)`
becomes `sqrt(5) - 2` rather than staying wrapped. A sign the procedure cannot prove leaves the
call symbolic; `signum` folds on exactly the same reach.

### floor

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_floor_api_session_floor"></a>
<a id="placement-placement.wasm.wasm_module.module_floor.44548369db27"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
floor(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_floor.106fcc90d473"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.floor</code></p>

```typescript signature
floor(x: Expression): Expression
```

</details>


### ceiling

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_ceiling_api_session_ceiling"></a>
<a id="placement-placement.wasm.wasm_module.module_ceiling.ea4214d28a60"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
ceiling(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_ceiling.b28033129d91"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.ceiling</code></p>

```typescript signature
ceiling(x: Expression): Expression
```

</details>


### conjugate

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_conjugate_api_session_conjugate"></a>
<a id="placement-placement.wasm.wasm_module.module_conjugate.6c7c642fd60f"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
conjugate(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_conjugate.adbaa68a1d9c"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.conjugate</code></p>

```typescript signature
conjugate(x: Expression): Expression
```

</details>


Complex conjugate.

### factorial

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_factorial_api_session_factorial"></a>
<a id="placement-placement.wasm.wasm_module.module_factorial.5a0581f6a74d"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
factorial(x: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_factorial.9cd8cb495318"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.factorial</code></p>

```typescript signature
factorial(x: Expression): Expression
```

</details>


### binomial

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_binomial_api_session_binomial"></a>
<a id="placement-placement.wasm.wasm_module.module_binomial.730ef71fff39"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
binomial(n: Expression, k: Expression): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_binomial.bff558909372"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.binomial</code></p>

```typescript signature
binomial(n: Expression, k: Expression): Expression
```

</details>


Binomial coefficient C(n, k).

### min

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_min_api_session_min"></a>
<a id="placement-placement.wasm.wasm_module.module_min.079bca1de077"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
min(arguments: Expression[]): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_min.4481c194c547"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.min</code></p>

```typescript signature
min(arguments: Expression[]): Expression
```

</details>


Minimum of the arguments (variadic in Python; a JS array in WASM).

### max

<a id="entry-presentation_wasm_elementary_functions_capability_elementary_functions_max_api_session_max"></a>
<a id="placement-placement.wasm.wasm_module.module_max.9ad2a66d39c5"></a>
<p class="symi-entry-owner">Default context</p>

```typescript signature
max(arguments: Expression[]): Expression
```

<details class="symi-calling-forms">
<summary>Calling forms</summary>

<a id="placement-placement.wasm.wasm_class.context_max.c8df78797a62"></a>
<p class="symi-entry-owner">Explicit context: <code>Context.max</code></p>

```typescript signature
max(arguments: Expression[]): Expression
```

</details>


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

