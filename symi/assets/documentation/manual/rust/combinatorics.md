# Combinatorics

Same convention as integer number theory: integer-leaf expressions in,
integer-leaf expressions out; non-integer input raises, as do arguments
outside each function's domain (negative counts, …).

### falling_factorial

<a id="placement-placement.rust.native_rust.api_session_falling_factorial.97d9d50f214f"></a>
`symi::api::Session — pub fn falling_factorial(&self, value: &Expression, order: &Expression) -> Result<Expression, ApiError>`


\(\operatorname{base}(\operatorname{base}-1)\cdots(\operatorname{base}-\operatorname{length}+1)\); `length` must be a non-negative integer,
`base` may be any integer.

### rising_factorial

<a id="placement-placement.rust.native_rust.api_session_rising_factorial.7413d342c9e8"></a>
`symi::api::Session — pub fn rising_factorial(&self, value: &Expression, order: &Expression) -> Result<Expression, ApiError>`


\(\operatorname{base}(\operatorname{base}+1)\cdots(\operatorname{base}+\operatorname{length}-1)\) (the Pochhammer symbol on integers).

### stirling_first_signed

<a id="placement-placement.rust.native_rust.api_session_stirling_first_signed.8177b3365d34"></a>
`symi::api::Session — pub fn stirling_first_signed(&self, upper: &Expression, lower: &Expression) -> Result<Expression, ApiError>`


Signed Stirling number of the first kind s(n, k).

### stirling_second

<a id="placement-placement.rust.native_rust.api_session_stirling_second.6192ea34fb07"></a>
`symi::api::Session — pub fn stirling_second(&self, upper: &Expression, lower: &Expression) -> Result<Expression, ApiError>`


Stirling number of the second kind S(n, k).

### bell_number

<a id="placement-placement.rust.native_rust.api_session_bell_number.a702a6b0106f"></a>
`symi::api::Session — pub fn bell_number(&self, argument: &Expression) -> Result<Expression, ApiError>`


The n-th Bell number.

### catalan_number

<a id="placement-placement.rust.native_rust.api_session_catalan_number.926864e5b4bb"></a>
`symi::api::Session — pub fn catalan_number(&self, argument: &Expression) -> Result<Expression, ApiError>`


The n-th Catalan number.

### fibonacci_number

<a id="placement-placement.rust.native_rust.api_session_fibonacci_number.2bf6b4f7bf73"></a>
`symi::api::Session — pub fn fibonacci_number(&self, argument: &Expression) -> Result<Expression, ApiError>`


The n-th Fibonacci number (F(0) = 0, F(1) = 1).

### partition_count

<a id="placement-placement.rust.native_rust.api_session_partition_count.7cb8aa69d09a"></a>
`symi::api::Session — pub fn partition_count(&self, argument: &Expression) -> Result<Expression, ApiError>`


Number of integer partitions p(n).

### multinomial

<a id="placement-placement.rust.native_rust.api_number_theory_session_multinomial.0ebb99d68284"></a>
`symi::api::number_theory::Session — pub fn multinomial(&self, parts: &[Expression]) -> Result<Expression, ApiError>`


Multinomial coefficient \((\sum \operatorname{parts})! / \prod (\operatorname{part}_i!)\); parts must be non-negative
integers.

## Example

This family is not part of the recommended `symi::api` facade in this release. Call it through the native modules in the [native Rust API reference](/symi/rust/api/symi/).


## Additional API

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_binomial.8bf8d25d89d4"></a>
### api::options::SpecialFunctionBasis::Binomial

`symi::api::options::SpecialFunctionBasis — Binomial`

Returns `variant`.

<a id="placement-placement.rust.native_rust.api_options_specialfunctionbasis_factorial.dc6346dcbe28"></a>
### api::options::SpecialFunctionBasis::Factorial

`symi::api::options::SpecialFunctionBasis — Factorial`

Returns `variant`.

