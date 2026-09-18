# Combinatorics

Same convention as integer number theory: integer-leaf expressions in,
integer-leaf expressions out; non-integer input raises, as do arguments
outside each function's domain (negative counts, …).

### falling_factorial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.falling_factorial`](/symi/python/combinatorics#falling_factorial) in Python, [`UniffiSession.fallingFactorial`](/symi/kotlin/combinatorics#falling_factorial) in Kotlin, [`UniffiSession.fallingFactorial`](/symi/swift/combinatorics#falling_factorial) in Swift, [`api::Session::falling_factorial`](/symi/rust/combinatorics#falling_factorial) in Rust.*


\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer,
`base` may be any integer.

### rising_factorial

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.rising_factorial`](/symi/python/combinatorics#rising_factorial) in Python, [`UniffiSession.risingFactorial`](/symi/kotlin/combinatorics#rising_factorial) in Kotlin, [`UniffiSession.risingFactorial`](/symi/swift/combinatorics#rising_factorial) in Swift, [`api::Session::rising_factorial`](/symi/rust/combinatorics#rising_factorial) in Rust.*


\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

### stirling_first_signed

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.stirling_first_signed`](/symi/python/combinatorics#stirling_first_signed) in Python, [`UniffiSession.stirlingFirstSigned`](/symi/kotlin/combinatorics#stirling_first_signed) in Kotlin, [`UniffiSession.stirlingFirstSigned`](/symi/swift/combinatorics#stirling_first_signed) in Swift, [`api::Session::stirling_first_signed`](/symi/rust/combinatorics#stirling_first_signed) in Rust.*


Signed Stirling number of the first kind s(n, k).

### stirling_second

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.stirling_second`](/symi/python/combinatorics#stirling_second) in Python, [`UniffiSession.stirlingSecond`](/symi/kotlin/combinatorics#stirling_second) in Kotlin, [`UniffiSession.stirlingSecond`](/symi/swift/combinatorics#stirling_second) in Swift, [`api::Session::stirling_second`](/symi/rust/combinatorics#stirling_second) in Rust.*


Stirling number of the second kind S(n, k).

### bell_number

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.bell_number`](/symi/python/combinatorics#bell_number) in Python, [`UniffiSession.bellNumber`](/symi/kotlin/combinatorics#bell_number) in Kotlin, [`UniffiSession.bellNumber`](/symi/swift/combinatorics#bell_number) in Swift, [`api::Session::bell_number`](/symi/rust/combinatorics#bell_number) in Rust.*


The n-th Bell number.

### catalan_number

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.catalan_number`](/symi/python/combinatorics#catalan_number) in Python, [`UniffiSession.catalanNumber`](/symi/kotlin/combinatorics#catalan_number) in Kotlin, [`UniffiSession.catalanNumber`](/symi/swift/combinatorics#catalan_number) in Swift, [`api::Session::catalan_number`](/symi/rust/combinatorics#catalan_number) in Rust.*


The n-th Catalan number.

### fibonacci_number

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.fibonacci_number`](/symi/python/combinatorics#fibonacci_number) in Python, [`UniffiSession.fibonacciNumber`](/symi/kotlin/combinatorics#fibonacci_number) in Kotlin, [`UniffiSession.fibonacciNumber`](/symi/swift/combinatorics#fibonacci_number) in Swift, [`api::Session::fibonacci_number`](/symi/rust/combinatorics#fibonacci_number) in Rust.*


The n-th Fibonacci number (F(0) = 0, F(1) = 1).

### partition_count

*Not exposed by the WASM / JavaScript bindings. Available as [`Context.partition_count`](/symi/python/combinatorics#partition_count) in Python, [`UniffiSession.partitionCount`](/symi/kotlin/combinatorics#partition_count) in Kotlin, [`UniffiSession.partitionCount`](/symi/swift/combinatorics#partition_count) in Swift, [`api::Session::partition_count`](/symi/rust/combinatorics#partition_count) in Rust.*


Number of integer partitions p(n).

### multinomial

<a id="placement-placement.wasm.wasm_class.context_multinomial.2a15ecdfee92"></a>
Raw WebAssembly: `pub fn multinomial(&self, parts: Vec<Expression>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_multinomial.9170c8108eb5"></a>
Raw WebAssembly: `fn multinomial(parts: Vec<Expression>) -> Result<Expression, JsError>`


Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative
integers.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.


## Additional API

<a id="placement-placement.wasm.javascript_facade.context_complexplane.336fcef1c7a5"></a>
### Context.complexPlane

`Context.readonly complexPlane: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_realline.04c11e555295"></a>
### Context.realLine

`Context.readonly realLine: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_complexplane.64775d0049e5"></a>
### SymiFacade.complexPlane

`SymiFacade.readonly complexPlane: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realline.84c2087be448"></a>
### SymiFacade.realLine

`SymiFacade.readonly realLine: Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_bellnumber.b9d2d8d24cb1"></a>
### Context.bellNumber

`pub fn bell_number(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_catalannumber.97437d3ebb0e"></a>
### Context.catalanNumber

`pub fn catalan_number(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_chineseremainder.4aebe1e8fe59"></a>
### Context.chineseRemainder

`pub fn chinese_remainder(&self, residues_and_moduli: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_complexplane.586e5589826d"></a>
### Context.complexPlane

`pub fn complex_plane(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_conjunctivenormalform.fd02ee7d14f1"></a>
### Context.conjunctiveNormalForm

`pub fn conjunctive_normal_form(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_continuedfractionquadraticirrational.4dd188c6160b"></a>
### Context.continuedFractionQuadraticIrrational

`pub fn continued_fraction_quadratic_irrational(&self, value: &Expression) -> Result<QuadraticContinuedFractionExpansion, JsError>`

Returns `Result<quadratic_continued_fraction_expansion, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_continuedfractionrational.cf59a95f002b"></a>
### Context.continuedFractionRational

`pub fn continued_fraction_rational(&self, value: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_disjunctivenormalform.08f586ff9227"></a>
### Context.disjunctiveNormalForm

`pub fn disjunctive_normal_form(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_eulertotient.0e9516a9c2bb"></a>
### Context.eulerTotient

`pub fn euler_totient(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_extendedeuclidean.2caeb9577112"></a>
### Context.extendedEuclidean

`pub fn extended_euclidean(&self, a: &Expression, b: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fallingfactorial.c7ebe77cd326"></a>
### Context.fallingFactorial

`pub fn falling_factorial(&self, base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fibonaccinumber.bfba4fbe0c16"></a>
### Context.fibonacciNumber

`pub fn fibonacci_number(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ismember.c95641df7e1f"></a>
### Context.isMember

`pub fn is_member(&self, element: &Expression, set: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobisymbol.7c5f47880345"></a>
### Context.jacobiSymbol

`pub fn jacobi_symbol(&self, numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_kroneckersymbol.5fb205f9197f"></a>
### Context.kroneckerSymbol

`pub fn kronecker_symbol(&self, numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_legendresymbol.573f83890b5c"></a>
### Context.legendreSymbol

`pub fn legendre_symbol(&self, numerator: &Expression, prime: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_modularinverse.58167e0fe801"></a>
### Context.modularInverse

`pub fn modular_inverse(&self, value: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_modularpower.f0c98dd7bb85"></a>
### Context.modularPower

`pub fn modular_power(&self, base: &Expression, exponent: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_partitioncount.adf34104cda8"></a>
### Context.partitionCount

`pub fn partition_count(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realline.f9ddcef2c243"></a>
### Context.realLine

`pub fn real_line(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_risingfactorial.4d89d9f355ee"></a>
### Context.risingFactorial

`pub fn rising_factorial(&self, base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantine.a71e6e2e49cd"></a>
### Context.solveLinearDiophantine

`pub fn solve_linear_diophantine(&self, coefficients: Vec<Expression>, constant: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantinesystem.8fa55d464929"></a>
### Context.solveLinearDiophantineSystem

`pub fn solve_linear_diophantine_system(&self, coefficient_matrix: &Matrix, constants: Vec<Expression>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_stirlingfirstsigned.08afbe99e971"></a>
### Context.stirlingFirstSigned

`pub fn stirling_first_signed(&self, n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_stirlingsecond.3c96654ef70b"></a>
### Context.stirlingSecond

`pub fn stirling_second(&self, n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_conjunctivenormalform.eef84cedcdfd"></a>
### Expression.conjunctiveNormalForm

`pub fn conjunctive_normal_form(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_disjunctivenormalform.9a756d79b061"></a>
### Expression.disjunctiveNormalForm

`pub fn disjunctive_normal_form(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_initialterms.c0053bbd2c9d"></a>
### QuadraticContinuedFractionExpansion.initialTerms

`pub fn initial_terms(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_periodicterms.c7ae5216de14"></a>
### QuadraticContinuedFractionExpansion.periodicTerms

`pub fn periodic_terms(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_module.module_bellnumber.e556ba988a19"></a>
### module.bellNumber

`fn bell_number(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_catalannumber.9e04d6cc190d"></a>
### module.catalanNumber

`fn catalan_number(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_chineseremainder.f3bf8937649c"></a>
### module.chineseRemainder

`fn chinese_remainder(residues_and_moduli: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_complexplane.a46c1c83bcc0"></a>
### module.complexPlane

`fn complex_plane() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_conjunctivenormalform.18125e7d91b4"></a>
### module.conjunctiveNormalForm

`fn conjunctive_normal_form(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_continuedfractionquadraticirrational.dcf0d429e737"></a>
### module.continuedFractionQuadraticIrrational

`fn continued_fraction_quadratic_irrational(value: &Expression) -> Result<QuadraticContinuedFractionExpansion, JsError>`

Returns `Result<quadratic_continued_fraction_expansion, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_continuedfractionrational.c51caff08918"></a>
### module.continuedFractionRational

`fn continued_fraction_rational(value: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_disjunctivenormalform.5d44449a582f"></a>
### module.disjunctiveNormalForm

`fn disjunctive_normal_form(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_eulertotient.4cd7de9cfaf0"></a>
### module.eulerTotient

`fn euler_totient(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_extendedeuclidean.83f8fd6d7934"></a>
### module.extendedEuclidean

`fn extended_euclidean(a: &Expression, b: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fallingfactorial.cf3717768829"></a>
### module.fallingFactorial

`fn falling_factorial(base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fibonaccinumber.b645e018b9c3"></a>
### module.fibonacciNumber

`fn fibonacci_number(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ismember.1e1e670a4cc3"></a>
### module.isMember

`fn is_member(element: &Expression, set: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobisymbol.c3f360d8c1d2"></a>
### module.jacobiSymbol

`fn jacobi_symbol(numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_kroneckersymbol.fe2e8066bdaf"></a>
### module.kroneckerSymbol

`fn kronecker_symbol(numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_legendresymbol.d3d4b7dcbf1d"></a>
### module.legendreSymbol

`fn legendre_symbol(numerator: &Expression, prime: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_modularinverse.89b1fb456696"></a>
### module.modularInverse

`fn modular_inverse(value: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_modularpower.c5fc06c4c577"></a>
### module.modularPower

`fn modular_power(base: &Expression, exponent: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_partitioncount.626fcc1e58d6"></a>
### module.partitionCount

`fn partition_count(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realline.d150784a3d9d"></a>
### module.realLine

`fn real_line() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_risingfactorial.5558264a15ca"></a>
### module.risingFactorial

`fn rising_factorial(base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantine.c44d14859433"></a>
### module.solveLinearDiophantine

`fn solve_linear_diophantine(coefficients: Vec<Expression>, constant: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantinesystem.f6937abefeef"></a>
### module.solveLinearDiophantineSystem

`fn solve_linear_diophantine_system(coefficient_matrix: &Matrix, constants: Vec<Expression>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_stirlingfirstsigned.5f73261d260b"></a>
### module.stirlingFirstSigned

`fn stirling_first_signed(n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_stirlingsecond.854182aab42c"></a>
### module.stirlingSecond

`fn stirling_second(n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

