# Vector calculus

Coordinates are passed as a list of variable names; vector fields as a list
of component expressions in the same order. Empty variable lists and
component/variable count mismatches raise.

### gradient

<a id="placement-placement.wasm.wasm_class.context_gradient.61111b1393d7"></a>
Raw WebAssembly: `pub fn gradient(&self, scalar_field: &Expression, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`

<a id="placement-placement.wasm.wasm_module.module_gradient.5e6c59111568"></a>
Raw WebAssembly: `fn gradient(scalar_field: &Expression, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`


\(\nabla f\): the partial derivatives in the order of `variables`.

### divergence

<a id="placement-placement.wasm.wasm_class.context_divergence.b0dfa0093378"></a>
Raw WebAssembly: `pub fn divergence(&self, vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_divergence.22455ef9ce79"></a>
Raw WebAssembly: `fn divergence(vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Expression, JsError>`


\(\nabla\cdot F = \sum_i \partial F_i/\partial x_i\); component and variable counts must match.

### curl

<a id="placement-placement.wasm.wasm_class.context_curl.4644328f1a4b"></a>
Raw WebAssembly: `pub fn curl(&self, vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`

<a id="placement-placement.wasm.wasm_module.module_curl.04cc2d24b092"></a>
Raw WebAssembly: `fn curl(vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`


\(\nabla\times F\). **Requires exactly three components and three variables**; other
dimensions raise.

### laplacian

<a id="placement-placement.wasm.wasm_class.context_laplacian.d47f5d0355d4"></a>
Raw WebAssembly: `pub fn laplacian(&self, scalar_field: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_module.module_laplacian.441c89e28847"></a>
Raw WebAssembly: `fn laplacian(scalar_field: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`


\(\Delta f = \nabla\cdot\nabla f\).

### jacobian

<a id="placement-placement.wasm.wasm_class.context_jacobian.a16e01c96433"></a>
Raw WebAssembly: `pub fn jacobian(&self, vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Matrix, JsError>`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_jacobian.598b8fca5781"></a>
Raw WebAssembly: `pub fn jacobian(&self) -> Result<Expression, JsError>`

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_jacobian.59d33834bad1"></a>
Raw WebAssembly: `pub fn jacobian(&self) -> Expression`

<a id="placement-placement.wasm.wasm_module.module_jacobian.9371d4f76961"></a>
Raw WebAssembly: `fn jacobian(vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Matrix, JsError>`


The matrix with entry \((i, j) = \partial F_i/\partial x_j\) (rows index components, columns index
variables). Returned as a `Matrix` so the result composes with the matrix
methods.

### hessian

<a id="placement-placement.wasm.wasm_class.context_hessian.20761aa7d61e"></a>
Raw WebAssembly: `pub fn hessian(&self, scalar_field: &Expression, variables: Vec<String>) -> Result<Matrix, JsError>`

<a id="placement-placement.wasm.wasm_module.module_hessian.c1073609193d"></a>
Raw WebAssembly: `fn hessian(scalar_field: &Expression, variables: Vec<String>) -> Result<Matrix, JsError>`


The \(n\times n\) matrix of second partials, computed as the Jacobian of the gradient;
structurally symmetric on smooth input.

## Example

This family is not part of the recommended JavaScript facade in this release. Call it through the generated `symi.raw` layer, whose entries are listed with their wasm-bindgen signatures above, and read [Migration](migration.md) for the ownership rules that apply there.

