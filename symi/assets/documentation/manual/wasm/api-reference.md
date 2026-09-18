# Complete placement index

<a id="placement-placement.wasm.javascript_facade.assumptionproposition.b30925c7b0d9"></a>
## AssumptionProposition

`export class AssumptionProposition {`

Returns `assumption_proposition`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_and.dd2edebafd49"></a>
## AssumptionProposition.and

`AssumptionProposition.and(other: AssumptionProposition): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_congruencemodulus.958e75bacc16"></a>
## AssumptionProposition.congruenceModulus

`AssumptionProposition.congruenceModulus(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_free.3aac53fe6166"></a>
## AssumptionProposition.free

`AssumptionProposition.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_leftoperand.1cd6f2d84196"></a>
## AssumptionProposition.leftOperand

`AssumptionProposition.leftOperand(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipelement.e669e2bb3843"></a>
## AssumptionProposition.membershipElement

`AssumptionProposition.membershipElement(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_membershipset.56fd05efb36b"></a>
## AssumptionProposition.membershipSet

`AssumptionProposition.membershipSet(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_not.5d5485850aaf"></a>
## AssumptionProposition.not

`AssumptionProposition.not(): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_or.68746ec790ae"></a>
## AssumptionProposition.or

`AssumptionProposition.or(other: AssumptionProposition): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_relationkind.077f50cc3ca4"></a>
## AssumptionProposition.relationKind

`AssumptionProposition.relationKind(): "equal" | "not_equal" | "less" | "less_or_equal" | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_rightoperand.cd1d8db9f940"></a>
## AssumptionProposition.rightOperand

`AssumptionProposition.rightOperand(): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_serialize.185b0e9cccac"></a>
## AssumptionProposition.serialize

`AssumptionProposition.serialize(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionproposition_tostring.1bef2e8fdf8b"></a>
## AssumptionProposition.toString

`AssumptionProposition.toString(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope.6062700f9779"></a>
## AssumptionScope

`export class AssumptionScope {`

Returns `assumption_scope`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_ask.39f17daa4a26"></a>
## AssumptionScope.ask

`AssumptionScope.ask(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_assuming.448cb5db38c4"></a>
## AssumptionScope.assuming

`AssumptionScope.assuming(proposition: AssumptionProposition): AssumptionScope`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_continuousdomain.6d9849f22085"></a>
## AssumptionScope.continuousDomain

`AssumptionScope.continuousDomain(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_couldhold.cd0ffcddc4c7"></a>
## AssumptionScope.couldHold

`AssumptionScope.couldHold(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_free.0065977a775c"></a>
## AssumptionScope.free

`AssumptionScope.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_integrate.2a66e4d0ee6f"></a>
## AssumptionScope.integrate

`AssumptionScope.integrate(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_refine.eb9700297138"></a>
## AssumptionScope.refine

`AssumptionScope.refine(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_simplify.76d00d707442"></a>
## AssumptionScope.simplify

`AssumptionScope.simplify(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.assumptionscope_singularities.227597e63d8e"></a>
## AssumptionScope.singularities

`AssumptionScope.singularities(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context.63263e1ca6f7"></a>
## Context

`export interface Context {`

Returns `context`.

<a id="placement-placement.wasm.javascript_facade.context_absolutevalue.ef3837cbe2e9"></a>
## Context.absoluteValue

`Context.absoluteValue(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_addassumptions.bd466d03ca25"></a>
## Context.addAssumptions

`Context.addAssumptions(proposition: AssumptionProposition): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_algebraicassumption.13f584dcd297"></a>
## Context.algebraicAssumption

`Context.algebraicAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_ask.dd678b45582e"></a>
## Context.ask

`Context.ask(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_assuming.b1b313002885"></a>
## Context.assuming

`Context.assuming(proposition: AssumptionProposition): AssumptionScope`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_assumptionpropositionfromlogicalexpression.2634b9a120ce"></a>
## Context.assumptionPropositionFromLogicalExpression

`Context.assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_assumptionsof.3e2500baccd2"></a>
## Context.assumptionsOf

`Context.assumptionsOf(value: VariableLike): Record<string, string>`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_clearallassumptions.a0d7b8978517"></a>
## Context.clearAllAssumptions

`Context.clearAllAssumptions(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_complexassumption.de9b2d0d5a6b"></a>
## Context.complexAssumption

`Context.complexAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_complexentries.8ea406d31c90"></a>
## Context.complexEntries

`Context.complexEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_complexplane.336fcef1c7a5"></a>
## Context.complexPlane

`Context.readonly complexPlane: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_compositeassumption.7fafa23ed771"></a>
## Context.compositeAssumption

`Context.compositeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_congruentassumption.ba23c40226c0"></a>
## Context.congruentAssumption

`Context.congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_cos.127007f1d3bb"></a>
## Context.cos

`Context.cos(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_couldhold.07dbc6c95fcb"></a>
## Context.couldHold

`Context.couldHold(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_definedassumption.a6b8cd5e249d"></a>
## Context.definedAssumption

`Context.definedAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_deserializeassumptionproposition.a3cd68aa2883"></a>
## Context.deserializeAssumptionProposition

`Context.deserializeAssumptionProposition(text: string): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_diagonalmatrix.4a508bb260ba"></a>
## Context.diagonalMatrix

`Context.diagonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_differentiate.02b9812493bf"></a>
## Context.differentiate

`Context.differentiate(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_e.44cbd15853e1"></a>
## Context.e

`Context.readonly e: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_eliminatederivedlogicalconnectives.fbf21e222b48"></a>
## Context.eliminateDerivedLogicalConnectives

`Context.eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_emptyset.4bb6a4877195"></a>
## Context.emptySet

`Context.readonly emptySet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_equalassumption.e2385c0eb338"></a>
## Context.equalAssumption

`Context.equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_eulergamma.1ff2ebfe65bd"></a>
## Context.eulerGamma

`Context.readonly eulerGamma: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_evaluatetruth.a9ce02ce8752"></a>
## Context.evaluateTruth

`Context.evaluateTruth(predicate: ExpressionLike): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_evenassumption.e7be2f22f2fa"></a>
## Context.evenAssumption

`Context.evenAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_execute.f750d4ad1a52"></a>
## Context.execute

`Context.execute(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_exp.2ab79692a3cc"></a>
## Context.exp

`Context.exp(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_extendedrealassumption.24a10286e28a"></a>
## Context.extendedRealAssumption

`Context.extendedRealAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_finiteassumption.53a61f54e11a"></a>
## Context.finiteAssumption

`Context.finiteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_finiteset.e1e1955cbc02"></a>
## Context.finiteSet

`Context.finiteSet(values: Iterable<ExpressionLike>): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_fullrankmatrix.9ea5686dda2d"></a>
## Context.fullRankMatrix

`Context.fullRankMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_greaterassumption.b5c7e745dc87"></a>
## Context.greaterAssumption

`Context.greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_greaterorequalassumption.533a8f9c54be"></a>
## Context.greaterOrEqualAssumption

`Context.greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_hermitianmatrix.b40f37562f34"></a>
## Context.hermitianMatrix

`Context.hermitianMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_identitymatrix.a1cf6abb115b"></a>
## Context.identityMatrix

`Context.identityMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_imaginarypart.617f7b6602bb"></a>
## Context.imaginaryPart

`Context.imaginaryPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_imaginaryunit.1b78ce4eaae2"></a>
## Context.imaginaryUnit

`Context.readonly imaginaryUnit: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_infiniteassumption.1f8d8206b5d4"></a>
## Context.infiniteAssumption

`Context.infiniteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_infinity.43c79a8d626e"></a>
## Context.infinity

`Context.readonly infinity: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_integer.00fd0a177c13"></a>
## Context.integer

`Context.integer(value: bigint | number): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_integerassumption.cf3033b261f3"></a>
## Context.integerAssumption

`Context.integerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_integerentries.1bfe48d4d7e5"></a>
## Context.integerEntries

`Context.integerEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_integerset.d4dc80555db9"></a>
## Context.integerSet

`Context.readonly integerSet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_integrate.c7366cddca9f"></a>
## Context.integrate

`Context.integrate(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_introducederivedlogicalconnectives.1178bb7be801"></a>
## Context.introduceDerivedLogicalConnectives

`Context.introduceDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_invertiblematrix.3f2a5f363550"></a>
## Context.invertibleMatrix

`Context.invertibleMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_irrationalassumption.55887270e7fd"></a>
## Context.irrationalAssumption

`Context.irrationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_lessassumption.c8f4215c1aeb"></a>
## Context.lessAssumption

`Context.lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_lessorequalassumption.54b87c34ad81"></a>
## Context.lessOrEqualAssumption

`Context.lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_lessthan.893ab0968b8e"></a>
## Context.lessThan

`Context.lessThan(left: ExpressionLike, right: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_logicalfalse.9bc67d1ef760"></a>
## Context.logicalFalse

`Context.readonly logicalFalse: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_logicaltrue.9727eb1248c1"></a>
## Context.logicalTrue

`Context.readonly logicalTrue: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_lowertriangularmatrix.f6b8f881e801"></a>
## Context.lowerTriangularMatrix

`Context.lowerTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_matrix.31619139102f"></a>
## Context.matrix

`Context.matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_matrixshape.36881a4eaa96"></a>
## Context.matrixShape

`Context.matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_memberassumption.4bb9ab611722"></a>
## Context.memberAssumption

`Context.memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_naturalassumption.19c46f121eb7"></a>
## Context.naturalAssumption

`Context.naturalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_negativeassumption.4f548122612d"></a>
## Context.negativeAssumption

`Context.negativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_nonnegativeassumption.d5fe84f63a4f"></a>
## Context.nonnegativeAssumption

`Context.nonnegativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_nonpositiveassumption.bbd2f123adaa"></a>
## Context.nonpositiveAssumption

`Context.nonpositiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_nonzeroassumption.13c24e7f7a6e"></a>
## Context.nonzeroAssumption

`Context.nonzeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_normalmatrix.1dab2bd7e17a"></a>
## Context.normalMatrix

`Context.normalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_notequalassumption.67d2e7f5e08e"></a>
## Context.notEqualAssumption

`Context.notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_numeratordenominator.4d682728a341"></a>
## Context.numeratorDenominator

`Context.numeratorDenominator(value: ExpressionLike): NumeratorDenominator`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_oddassumption.4c7823e1efdb"></a>
## Context.oddAssumption

`Context.oddAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_orthogonalmatrix.d64d9afbebcd"></a>
## Context.orthogonalMatrix

`Context.orthogonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_parse.9232ed6b93ca"></a>
## Context.parse

`Context.parse(text: string): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_pi.eadf6aa4f2e3"></a>
## Context.pi

`Context.readonly pi: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_piecewise.2001a04b252e"></a>
## Context.piecewise

`Context.piecewise(branches: Iterable<PiecewiseBranch>): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positiveassumption.78c5b78a1489"></a>
## Context.positiveAssumption

`Context.positiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positivedefinitematrix.7dbac73d84be"></a>
## Context.positiveDefiniteMatrix

`Context.positiveDefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positiveintegerassumption.18b9666cbeb9"></a>
## Context.positiveIntegerAssumption

`Context.positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_positivesemidefinitematrix.c0dc57765934"></a>
## Context.positiveSemidefiniteMatrix

`Context.positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_primeassumption.c38a13dbad3a"></a>
## Context.primeAssumption

`Context.primeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_rational.bba5ba8e5c64"></a>
## Context.rational

`Context.rational(numerator: bigint | number, denominator: bigint | number): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_rationalassumption.bd30ce74bea3"></a>
## Context.rationalAssumption

`Context.rationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_realassumption.9a2fc4517edb"></a>
## Context.realAssumption

`Context.realAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_realentries.bdb9034606ef"></a>
## Context.realEntries

`Context.realEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_realline.04c11e555295"></a>
## Context.realLine

`Context.readonly realLine: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.context_realpart.dde44e15175b"></a>
## Context.realPart

`Context.realPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_refine.d5f9062ecb2d"></a>
## Context.refine

`Context.refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_resetcontext.71381bfb9d67"></a>
## Context.resetContext

`Context.resetContext(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_simplifylogical.d5a84750401d"></a>
## Context.simplifyLogical

`Context.simplifyLogical(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_sin.e186cd596931"></a>
## Context.sin

`Context.sin(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_singularmatrix.4d8f48a378b9"></a>
## Context.singularMatrix

`Context.singularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_sqrt.2a25fe213571"></a>
## Context.sqrt

`Context.sqrt(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_squarematrix.ca6d22aeb8ae"></a>
## Context.squareMatrix

`Context.squareMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_symbol.00afc323719f"></a>
## Context.symbol

`Context.symbol(name: string): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_symmetricmatrix.29a86f11f324"></a>
## Context.symmetricMatrix

`Context.symmetricMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_together.9e3d503c834f"></a>
## Context.together

`Context.together(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_transcendentalassumption.0a4b799a5b1c"></a>
## Context.transcendentalAssumption

`Context.transcendentalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_unitarymatrix.0d68d571cdb5"></a>
## Context.unitaryMatrix

`Context.unitaryMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_uppertriangularmatrix.fa854937bbdc"></a>
## Context.upperTriangularMatrix

`Context.upperTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_zeroassumption.e6f179fd3a86"></a>
## Context.zeroAssumption

`Context.zeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_zeroequivalent.4c2cfbd43500"></a>
## Context.zeroEquivalent

`Context.zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.context_zeromatrix.a94420588464"></a>
## Context.zeroMatrix

`Context.zeroMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.contextconstructor.1350f1ba4da2"></a>
## ContextConstructor

`export interface ContextConstructor {`

Returns `context_constructor`.

<a id="placement-placement.wasm.javascript_facade.contextconstructor_new.0f9094d96686"></a>
## ContextConstructor.new

`ContextConstructor.new(): Context`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression.41c8e859d914"></a>
## Expression

`export interface Expression {`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.expression_absolutevalue.d16fc61f887a"></a>
## Expression.absoluteValue

`Expression.absoluteValue(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_add.d9aaa9c8c688"></a>
## Expression.add

`Expression.add(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_cos.9c05351df5a5"></a>
## Expression.cos

`Expression.cos(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_denominator.9d6d160c4432"></a>
## Expression.denominator

`Expression.denominator(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_derivative.71488970b451"></a>
## Expression.derivative

`Expression.derivative(variable: VariableLike, order?: number): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_differentiate.85cf43e1ce4c"></a>
## Expression.differentiate

`Expression.differentiate(variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_divide.0b155bc736f4"></a>
## Expression.divide

`Expression.divide(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_duplicate.d4be0ef54df8"></a>
## Expression.duplicate

`Expression.duplicate(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_eliminatederivedlogicalconnectives.03dbed4ef109"></a>
## Expression.eliminateDerivedLogicalConnectives

`Expression.eliminateDerivedLogicalConnectives(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_evaluatetruth.e2bc58e39b58"></a>
## Expression.evaluateTruth

`Expression.evaluateTruth(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_execute.8b9ac9285061"></a>
## Expression.execute

`Expression.execute(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_exp.11a12106d9fb"></a>
## Expression.exp

`Expression.exp(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_free.04d9e93ee17b"></a>
## Expression.free

`Expression.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_imaginarypart.869495f47a9a"></a>
## Expression.imaginaryPart

`Expression.imaginaryPart(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_integrate.d67955658e24"></a>
## Expression.integrate

`Expression.integrate(variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_introducederivedlogicalconnectives.d61df7a5125f"></a>
## Expression.introduceDerivedLogicalConnectives

`Expression.introduceDerivedLogicalConnectives(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isalgebraic.166881d40821"></a>
## Expression.isAlgebraic

`Expression.isAlgebraic(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iscomplex.cf239ae130b6"></a>
## Expression.isComplex

`Expression.isComplex(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iscomposite.acede8711f42"></a>
## Expression.isComposite

`Expression.isComposite(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isdefined.ba68953821c2"></a>
## Expression.isDefined

`Expression.isDefined(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iseven.c8395efaf78a"></a>
## Expression.isEven

`Expression.isEven(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isextendedreal.8b90e63c733a"></a>
## Expression.isExtendedReal

`Expression.isExtendedReal(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isfinite.ec4bd13d38ab"></a>
## Expression.isFinite

`Expression.isFinite(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isinfinite.baee2508c4d8"></a>
## Expression.isInfinite

`Expression.isInfinite(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isinteger.a645e50fd6f0"></a>
## Expression.isInteger

`Expression.isInteger(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isirrational.f90590ac06dc"></a>
## Expression.isIrrational

`Expression.isIrrational(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnatural.c7d8ac466cd4"></a>
## Expression.isNatural

`Expression.isNatural(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnegative.215cc4b539f3"></a>
## Expression.isNegative

`Expression.isNegative(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnonnegative.a0bbd36976fc"></a>
## Expression.isNonnegative

`Expression.isNonnegative(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnonpositive.15bf64f03f4c"></a>
## Expression.isNonpositive

`Expression.isNonpositive(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isnonzero.cee90ac676f3"></a>
## Expression.isNonzero

`Expression.isNonzero(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isodd.9cef0c32b06d"></a>
## Expression.isOdd

`Expression.isOdd(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_ispositive.5a6cf1d747f2"></a>
## Expression.isPositive

`Expression.isPositive(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_ispositiveinteger.d958deb107ee"></a>
## Expression.isPositiveInteger

`Expression.isPositiveInteger(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isprime.988dd0cf28d7"></a>
## Expression.isPrime

`Expression.isPrime(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isrational.c5942929964d"></a>
## Expression.isRational

`Expression.isRational(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_isreal.418cb2d56d52"></a>
## Expression.isReal

`Expression.isReal(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_istranscendental.54d40bab7088"></a>
## Expression.isTranscendental

`Expression.isTranscendental(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_iszero.4743ee8492f4"></a>
## Expression.isZero

`Expression.isZero(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_lessthan.556075d96973"></a>
## Expression.lessThan

`Expression.lessThan(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_multiply.6129ea2e7a04"></a>
## Expression.multiply

`Expression.multiply(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_negate.1e2d3469633f"></a>
## Expression.negate

`Expression.negate(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_numerator.3d9f01a0881d"></a>
## Expression.numerator

`Expression.numerator(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_numeratordenominator.a6fbcb7d0d59"></a>
## Expression.numeratorDenominator

`Expression.numeratorDenominator(): NumeratorDenominator`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_power.87eb729715d1"></a>
## Expression.power

`Expression.power(exponent: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_realpart.96ac58cb8855"></a>
## Expression.realPart

`Expression.realPart(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_refine.70673247d439"></a>
## Expression.refine

`Expression.refine(assumptions?: AssumptionProposition | null): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_simplifylogical.dce05b71d665"></a>
## Expression.simplifyLogical

`Expression.simplifyLogical(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_sin.8da54b319d95"></a>
## Expression.sin

`Expression.sin(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_sqrt.8adbabb8c608"></a>
## Expression.sqrt

`Expression.sqrt(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_subtract.01fa19892c94"></a>
## Expression.subtract

`Expression.subtract(other: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_symbolname.5aadc5ef70f0"></a>
## Expression.symbolName

`Expression.symbolName(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_tostring.f0177b10aa8c"></a>
## Expression.toString

`Expression.toString(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_together.d11878327d8a"></a>
## Expression.together

`Expression.together(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.expression_zeroequivalent.03483f9201c5"></a>
## Expression.zeroEquivalent

`Expression.zeroEquivalent(constraint?: ExpressionLike | null): "true" | "false" | "unknown"`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix.75a04eacf90d"></a>
## Matrix

`export interface Matrix {`

Returns `matrix`.

<a id="placement-placement.wasm.javascript_facade.matrix_add.b4cbe00e9031"></a>
## Matrix.add

`Matrix.add(other: Matrix): Matrix`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_columns.30f3e2e7c0cf"></a>
## Matrix.columns

`Matrix.readonly columns: number`

Returns `number`.

<a id="placement-placement.wasm.javascript_facade.matrix_determinant.375ed98dc9f9"></a>
## Matrix.determinant

`Matrix.determinant(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_entry.720b6a063946"></a>
## Matrix.entry

`Matrix.entry(row: number, column: number): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_execute.28422f05de37"></a>
## Matrix.execute

`Matrix.execute(): Matrix`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_free.26db4cf3b6c5"></a>
## Matrix.free

`Matrix.free(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_hascomplexentries.e62108844da5"></a>
## Matrix.hasComplexEntries

`Matrix.hasComplexEntries(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_hasintegerentries.2146ac2809b2"></a>
## Matrix.hasIntegerEntries

`Matrix.hasIntegerEntries(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_hasrealentries.b42db7a5a2d1"></a>
## Matrix.hasRealEntries

`Matrix.hasRealEntries(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isdiagonalmatrix.415747dbf667"></a>
## Matrix.isDiagonalMatrix

`Matrix.isDiagonalMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isfullrankmatrix.c1348883d7c3"></a>
## Matrix.isFullRankMatrix

`Matrix.isFullRankMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_ishermitianmatrix.5c0a1b02c764"></a>
## Matrix.isHermitianMatrix

`Matrix.isHermitianMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isidentitymatrix.cae24290fdfb"></a>
## Matrix.isIdentityMatrix

`Matrix.isIdentityMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isinvertiblematrix.505c014c37f1"></a>
## Matrix.isInvertibleMatrix

`Matrix.isInvertibleMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isnormalmatrix.98b51d7166e5"></a>
## Matrix.isNormalMatrix

`Matrix.isNormalMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isorthogonalmatrix.eda747c0fc34"></a>
## Matrix.isOrthogonalMatrix

`Matrix.isOrthogonalMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_ispositivedefinitematrix.e2669501e27d"></a>
## Matrix.isPositiveDefiniteMatrix

`Matrix.isPositiveDefiniteMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_ispositivesemidefinitematrix.772c2ae7ee0e"></a>
## Matrix.isPositiveSemidefiniteMatrix

`Matrix.isPositiveSemidefiniteMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_issingularmatrix.873fe293b8c3"></a>
## Matrix.isSingularMatrix

`Matrix.isSingularMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_issquare.efcc71c65d6c"></a>
## Matrix.isSquare

`Matrix.isSquare(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_issymmetricmatrix.c48f740a1f98"></a>
## Matrix.isSymmetricMatrix

`Matrix.isSymmetricMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_isunitarymatrix.53b189737152"></a>
## Matrix.isUnitaryMatrix

`Matrix.isUnitaryMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_iszeromatrix.311afbe0ef29"></a>
## Matrix.isZeroMatrix

`Matrix.isZeroMatrix(): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_multiply.2820cc1c77f6"></a>
## Matrix.multiply

`Matrix.multiply(other: Matrix): Matrix`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_rows.5a09e96bea77"></a>
## Matrix.rows

`Matrix.readonly rows: number`

Returns `number`.

<a id="placement-placement.wasm.javascript_facade.matrix_tostring.afeb8a997d5b"></a>
## Matrix.toString

`Matrix.toString(): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.matrix_trace.520d7f729d12"></a>
## Matrix.trace

`Matrix.trace(): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.numeratordenominator.7ceff7e08454"></a>
## NumeratorDenominator

`export interface NumeratorDenominator {`

Returns `numerator_denominator`.

<a id="placement-placement.wasm.javascript_facade.numeratordenominator_denominator.9141100064f1"></a>
## NumeratorDenominator.denominator

`NumeratorDenominator.denominator: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.numeratordenominator_numerator.875fb10bce86"></a>
## NumeratorDenominator.numerator

`NumeratorDenominator.numerator: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.piecewisebranch.d690830b18b4"></a>
## PiecewiseBranch

`export interface PiecewiseBranch {`

Returns `piecewise_branch`.

<a id="placement-placement.wasm.javascript_facade.piecewisebranch_condition.64f74fb11773"></a>
## PiecewiseBranch.condition

`PiecewiseBranch.condition: ExpressionLike`

Returns `expression_like`.

<a id="placement-placement.wasm.javascript_facade.piecewisebranch_value.801f7c3c6459"></a>
## PiecewiseBranch.value

`PiecewiseBranch.value: ExpressionLike`

Returns `expression_like`.

<a id="placement-placement.wasm.javascript_facade.symicontexterror.8a9c0b29d21a"></a>
## SymiContextError

`export class SymiContextError extends SymiError {}`

Returns `SymiContextError`.

<a id="placement-placement.wasm.javascript_facade.symidomainerror.ca3777e8db87"></a>
## SymiDomainError

`export class SymiDomainError extends SymiError {}`

Returns `SymiDomainError`.

<a id="placement-placement.wasm.javascript_facade.symierror.4dd8ef89912f"></a>
## SymiError

`export class SymiError extends Error {`

Returns `SymiError`.

<a id="placement-placement.wasm.javascript_facade.symierror_category.6b54a640412f"></a>
## SymiError.category

`SymiError.readonly category: DiagnosticCategory`

Returns `diagnostic_category`.

<a id="placement-placement.wasm.javascript_facade.symierror_code.30f9d8518f8d"></a>
## SymiError.code

`SymiError.readonly code: DiagnosticCategory`

Returns `diagnostic_category`.

<a id="placement-placement.wasm.javascript_facade.symierror_expected.a59eda760e94"></a>
## SymiError.expected

`SymiError.readonly expected: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_hint.dc290abb816b"></a>
## SymiError.hint

`SymiError.readonly hint: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_operation.27d0151a414d"></a>
## SymiError.operation

`SymiError.readonly operation: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_parameterpath.4560085cfcfd"></a>
## SymiError.parameterPath

`SymiError.readonly parameterPath: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symierror_received.ae703f25576e"></a>
## SymiError.received

`SymiError.readonly received: string | null`

Returns `string | null`.

<a id="placement-placement.wasm.javascript_facade.symifacade.ff8eea78fa52"></a>
## SymiFacade

`export interface SymiFacade {`

Returns `symi_facade`.

<a id="placement-placement.wasm.javascript_facade.symifacade_context.8eb8851d9fac"></a>
## SymiFacade.Context

`SymiFacade.Context: ContextConstructor`

Returns `context_constructor`.

<a id="placement-placement.wasm.javascript_facade.symifacade_expression.93094cdfa844"></a>
## SymiFacade.Expression

`SymiFacade.Expression: unknown`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.7fe47f8c649d"></a>
## SymiFacade.Matrix

`SymiFacade.Matrix: unknown`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_absolutevalue.0f6b9a8f80d5"></a>
## SymiFacade.absoluteValue

`SymiFacade.absoluteValue(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_addassumptions.73e3352ec9e9"></a>
## SymiFacade.addAssumptions

`SymiFacade.addAssumptions(proposition: AssumptionProposition): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_algebraicassumption.f4ce6f6c9968"></a>
## SymiFacade.algebraicAssumption

`SymiFacade.algebraicAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_ask.3efd93c29c40"></a>
## SymiFacade.ask

`SymiFacade.ask(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_assuming.40c4ee1c859b"></a>
## SymiFacade.assuming

`SymiFacade.assuming(proposition: AssumptionProposition): AssumptionScope`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionpropositionfromlogicalexpression.296cef2c3834"></a>
## SymiFacade.assumptionPropositionFromLogicalExpression

`SymiFacade.assumptionPropositionFromLogicalExpression(logicalExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_assumptionsof.b9741e10cd22"></a>
## SymiFacade.assumptionsOf

`SymiFacade.assumptionsOf(value: VariableLike): Record<string, string>`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_clearallassumptions.759cb89d46d9"></a>
## SymiFacade.clearAllAssumptions

`SymiFacade.clearAllAssumptions(): void`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_complexassumption.6e9580247a40"></a>
## SymiFacade.complexAssumption

`SymiFacade.complexAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_complexentries.7d80eaa5cce4"></a>
## SymiFacade.complexEntries

`SymiFacade.complexEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_complexplane.64775d0049e5"></a>
## SymiFacade.complexPlane

`SymiFacade.readonly complexPlane: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_compositeassumption.c21be76bc301"></a>
## SymiFacade.compositeAssumption

`SymiFacade.compositeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_congruencemodulus.5433d54422f2"></a>
## SymiFacade.congruenceModulus

`SymiFacade.congruenceModulus(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_congruentassumption.cc5d155981f1"></a>
## SymiFacade.congruentAssumption

`SymiFacade.congruentAssumption(left: ExpressionLike, right: ExpressionLike, modulus: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_cos.08b219c1578f"></a>
## SymiFacade.cos

`SymiFacade.cos(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_couldhold.c5541088e29c"></a>
## SymiFacade.couldHold

`SymiFacade.couldHold(proposition: AssumptionProposition): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_defaultcontext.9502059e3f0c"></a>
## SymiFacade.defaultContext

`SymiFacade.defaultContext: Context`

Returns `context`.

<a id="placement-placement.wasm.javascript_facade.symifacade_definedassumption.d16c9ffedf97"></a>
## SymiFacade.definedAssumption

`SymiFacade.definedAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_deserializeassumptionproposition.baf0e5199161"></a>
## SymiFacade.deserializeAssumptionProposition

`SymiFacade.deserializeAssumptionProposition(text: string): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_diagonalmatrix.bdd963190e9d"></a>
## SymiFacade.diagonalMatrix

`SymiFacade.diagonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_differentiate.e4a123823c8a"></a>
## SymiFacade.differentiate

`SymiFacade.differentiate(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_e.e814399adf66"></a>
## SymiFacade.e

`SymiFacade.readonly e: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_eliminatederivedlogicalconnectives.ac05ca331ca5"></a>
## SymiFacade.eliminateDerivedLogicalConnectives

`SymiFacade.eliminateDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_emptyset.9c24ad3939de"></a>
## SymiFacade.emptySet

`SymiFacade.readonly emptySet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_equalassumption.24f0c321944b"></a>
## SymiFacade.equalAssumption

`SymiFacade.equalAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_eulergamma.f378f98b8d47"></a>
## SymiFacade.eulerGamma

`SymiFacade.readonly eulerGamma: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_evaluatetruth.b770fcd9faa8"></a>
## SymiFacade.evaluateTruth

`SymiFacade.evaluateTruth(predicate: ExpressionLike): boolean | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_evenassumption.d98feb706c03"></a>
## SymiFacade.evenAssumption

`SymiFacade.evenAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_execute.899a0953de4b"></a>
## SymiFacade.execute

`SymiFacade.execute(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_exp.c26368174598"></a>
## SymiFacade.exp

`SymiFacade.exp(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_extendedrealassumption.13b9ce694b78"></a>
## SymiFacade.extendedRealAssumption

`SymiFacade.extendedRealAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteassumption.d74e89873ec3"></a>
## SymiFacade.finiteAssumption

`SymiFacade.finiteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_finiteset.1387548559b6"></a>
## SymiFacade.finiteSet

`SymiFacade.finiteSet(values: Iterable<ExpressionLike>): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_fullrankmatrix.661d3f99feb1"></a>
## SymiFacade.fullRankMatrix

`SymiFacade.fullRankMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterassumption.5d34c5df780d"></a>
## SymiFacade.greaterAssumption

`SymiFacade.greaterAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_greaterorequalassumption.71bfbd4b9653"></a>
## SymiFacade.greaterOrEqualAssumption

`SymiFacade.greaterOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_hermitianmatrix.75fe3584e710"></a>
## SymiFacade.hermitianMatrix

`SymiFacade.hermitianMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_identitymatrix.a0eea0b9ad1a"></a>
## SymiFacade.identityMatrix

`SymiFacade.identityMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_imaginarypart.5d66750ea9bf"></a>
## SymiFacade.imaginaryPart

`SymiFacade.imaginaryPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_imaginaryunit.43ca2d94269d"></a>
## SymiFacade.imaginaryUnit

`SymiFacade.readonly imaginaryUnit: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_infiniteassumption.c08c0dd8e0f7"></a>
## SymiFacade.infiniteAssumption

`SymiFacade.infiniteAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_infinity.bf44254ac060"></a>
## SymiFacade.infinity

`SymiFacade.readonly infinity: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integer.d5d69dc27b57"></a>
## SymiFacade.integer

`SymiFacade.integer(value: bigint | number): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integerassumption.8d164e5dcee5"></a>
## SymiFacade.integerAssumption

`SymiFacade.integerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integerentries.177ca0ebd539"></a>
## SymiFacade.integerEntries

`SymiFacade.integerEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integerset.f9cb1be0989f"></a>
## SymiFacade.integerSet

`SymiFacade.readonly integerSet: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_integrate.23b97ff9965a"></a>
## SymiFacade.integrate

`SymiFacade.integrate(value: ExpressionLike, variable: VariableLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_introducederivedlogicalconnectives.d87c58b06818"></a>
## SymiFacade.introduceDerivedLogicalConnectives

`SymiFacade.introduceDerivedLogicalConnectives(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_invertiblematrix.2a836dfb9d2c"></a>
## SymiFacade.invertibleMatrix

`SymiFacade.invertibleMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_irrationalassumption.cb191b491b47"></a>
## SymiFacade.irrationalAssumption

`SymiFacade.irrationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_leftoperand.7b6a1f8eac18"></a>
## SymiFacade.leftOperand

`SymiFacade.leftOperand(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lessassumption.208b6241d635"></a>
## SymiFacade.lessAssumption

`SymiFacade.lessAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lessorequalassumption.9a7358375559"></a>
## SymiFacade.lessOrEqualAssumption

`SymiFacade.lessOrEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lessthan.8b815324871d"></a>
## SymiFacade.lessThan

`SymiFacade.lessThan(left: ExpressionLike, right: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_logicalfalse.2e267b20bbb1"></a>
## SymiFacade.logicalFalse

`SymiFacade.readonly logicalFalse: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_logicaltrue.42cc56407238"></a>
## SymiFacade.logicalTrue

`SymiFacade.readonly logicalTrue: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_lowertriangularmatrix.17896f244489"></a>
## SymiFacade.lowerTriangularMatrix

`SymiFacade.lowerTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_matrix.e3d8245c690c"></a>
## SymiFacade.matrix

`SymiFacade.matrix(rows: Iterable<Iterable<ExpressionLike>>): Matrix`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_matrixshape.ba060181fcb1"></a>
## SymiFacade.matrixShape

`SymiFacade.matrixShape(value: Matrix, rows: number, columns: number): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_memberassumption.faafe5efd4c4"></a>
## SymiFacade.memberAssumption

`SymiFacade.memberAssumption(element: ExpressionLike, setExpression: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipelement.0fc6fd43e584"></a>
## SymiFacade.membershipElement

`SymiFacade.membershipElement(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_membershipset.4cc3c059c77b"></a>
## SymiFacade.membershipSet

`SymiFacade.membershipSet(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_naturalassumption.545c396a1a8a"></a>
## SymiFacade.naturalAssumption

`SymiFacade.naturalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_negativeassumption.a1faca33e449"></a>
## SymiFacade.negativeAssumption

`SymiFacade.negativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_nonnegativeassumption.fc8db15a6f1a"></a>
## SymiFacade.nonnegativeAssumption

`SymiFacade.nonnegativeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_nonpositiveassumption.48fdc398654b"></a>
## SymiFacade.nonpositiveAssumption

`SymiFacade.nonpositiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_nonzeroassumption.dab21ea932d8"></a>
## SymiFacade.nonzeroAssumption

`SymiFacade.nonzeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_normalmatrix.ab26f6537ccc"></a>
## SymiFacade.normalMatrix

`SymiFacade.normalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_notequalassumption.7f22dc0529bc"></a>
## SymiFacade.notEqualAssumption

`SymiFacade.notEqualAssumption(left: ExpressionLike, right: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_numeratordenominator.52fe19194901"></a>
## SymiFacade.numeratorDenominator

`SymiFacade.numeratorDenominator(value: ExpressionLike): NumeratorDenominator`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_oddassumption.31a0bcf1ea66"></a>
## SymiFacade.oddAssumption

`SymiFacade.oddAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_orthogonalmatrix.5479e2dfb83c"></a>
## SymiFacade.orthogonalMatrix

`SymiFacade.orthogonalMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_parse.b80ff0cf5eec"></a>
## SymiFacade.parse

`SymiFacade.parse(text: string): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_pi.650aba83836c"></a>
## SymiFacade.pi

`SymiFacade.readonly pi: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_piecewise.e54e812abd39"></a>
## SymiFacade.piecewise

`SymiFacade.piecewise(branches: Iterable<PiecewiseBranch>): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveassumption.88eeb1edfead"></a>
## SymiFacade.positiveAssumption

`SymiFacade.positiveAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positivedefinitematrix.5fa32eb988b6"></a>
## SymiFacade.positiveDefiniteMatrix

`SymiFacade.positiveDefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positiveintegerassumption.fa356b4ace52"></a>
## SymiFacade.positiveIntegerAssumption

`SymiFacade.positiveIntegerAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_positivesemidefinitematrix.06f230347a8f"></a>
## SymiFacade.positiveSemidefiniteMatrix

`SymiFacade.positiveSemidefiniteMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_primeassumption.20ac88ea9ecd"></a>
## SymiFacade.primeAssumption

`SymiFacade.primeAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_rational.fe5d8d04f54b"></a>
## SymiFacade.rational

`SymiFacade.rational(numerator: bigint | number, denominator: bigint | number): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_rationalassumption.50a8e1879939"></a>
## SymiFacade.rationalAssumption

`SymiFacade.rationalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_raw.aef6294b0f07"></a>
## SymiFacade.raw

`SymiFacade.readonly raw: unknown`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realassumption.a407a99bc207"></a>
## SymiFacade.realAssumption

`SymiFacade.realAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realentries.0dc13fbd48dc"></a>
## SymiFacade.realEntries

`SymiFacade.realEntries(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realline.84c2087be448"></a>
## SymiFacade.realLine

`SymiFacade.readonly realLine: Expression`

Returns `expression`.

<a id="placement-placement.wasm.javascript_facade.symifacade_realpart.24ce21e1ba1d"></a>
## SymiFacade.realPart

`SymiFacade.realPart(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_refine.07d92cdc7343"></a>
## SymiFacade.refine

`SymiFacade.refine(value: ExpressionLike, assumptions?: AssumptionProposition | null): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_relationkind.bb3ed2b1488e"></a>
## SymiFacade.relationKind

`SymiFacade.relationKind(proposition: AssumptionProposition): "equal" | "not_equal" | "less" | "less_or_equal" | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_rightoperand.48bc4bcc6b14"></a>
## SymiFacade.rightOperand

`SymiFacade.rightOperand(proposition: AssumptionProposition): Expression | null`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_serialize.7f47221634d0"></a>
## SymiFacade.serialize

`SymiFacade.serialize(proposition: AssumptionProposition): string`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_simplifylogical.7e8c3741add9"></a>
## SymiFacade.simplifyLogical

`SymiFacade.simplifyLogical(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_sin.64ed29b5aabf"></a>
## SymiFacade.sin

`SymiFacade.sin(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_singularmatrix.5c788f7b7710"></a>
## SymiFacade.singularMatrix

`SymiFacade.singularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_sqrt.39062d897204"></a>
## SymiFacade.sqrt

`SymiFacade.sqrt(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_squarematrix.07006ba57e12"></a>
## SymiFacade.squareMatrix

`SymiFacade.squareMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_symbol.75a86a968259"></a>
## SymiFacade.symbol

`SymiFacade.symbol(name: string): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_symmetricmatrix.72efdbcc7ebb"></a>
## SymiFacade.symmetricMatrix

`SymiFacade.symmetricMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_together.63d6c1df067d"></a>
## SymiFacade.together

`SymiFacade.together(value: ExpressionLike): Expression`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_transcendentalassumption.59b1bbba7112"></a>
## SymiFacade.transcendentalAssumption

`SymiFacade.transcendentalAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_unitarymatrix.a1c207d3bd64"></a>
## SymiFacade.unitaryMatrix

`SymiFacade.unitaryMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_uppertriangularmatrix.7fc7c36b3f9a"></a>
## SymiFacade.upperTriangularMatrix

`SymiFacade.upperTriangularMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroassumption.750741382236"></a>
## SymiFacade.zeroAssumption

`SymiFacade.zeroAssumption(value: ExpressionLike): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_zeroequivalent.5b941b0c7ab2"></a>
## SymiFacade.zeroEquivalent

`SymiFacade.zeroEquivalent(value: ExpressionLike, constraint?: ExpressionLike | null): "true" | "false" | "unknown"`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symifacade_zeromatrix.c57cdcbf6784"></a>
## SymiFacade.zeroMatrix

`SymiFacade.zeroMatrix(value: Matrix): AssumptionProposition`

Returns `unknown`.

<a id="placement-placement.wasm.javascript_facade.symiinternalerror.9f964e7b647d"></a>
## SymiInternalError

`export class SymiInternalError extends SymiError {}`

Returns `SymiInternalError`.

<a id="placement-placement.wasm.javascript_facade.symiresourceerror.e63a87983441"></a>
## SymiResourceError

`export class SymiResourceError extends SymiError {}`

Returns `SymiResourceError`.

<a id="placement-placement.wasm.javascript_facade.symitypeerror.f73719bf5950"></a>
## SymiTypeError

`export class SymiTypeError extends SymiError {}`

Returns `SymiTypeError`.

<a id="placement-placement.wasm.javascript_facade.module_createfacade.ec941be21075"></a>
## module.createFacade

`symi.export function createFacade(rawModule: unknown): SymiFacade`

Returns `unknown`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_and.52d50e36a4e0"></a>
## AssumptionProposition.and

`pub fn and(&self, other: &AssumptionProposition) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_congruencemodulus.ec7759ccca4c"></a>
## AssumptionProposition.congruenceModulus

`pub fn congruence_modulus(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_leftoperand.746fdb26e50b"></a>
## AssumptionProposition.leftOperand

`pub fn left_operand(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipelement.aae55444ab1f"></a>
## AssumptionProposition.membershipElement

`pub fn membership_element(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_membershipset.7ce41b1bc776"></a>
## AssumptionProposition.membershipSet

`pub fn membership_set(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_not.b60f9be810dc"></a>
## AssumptionProposition.not

`pub fn not(&self) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_or.5d7229fdfdb9"></a>
## AssumptionProposition.or

`pub fn or(&self, other: &AssumptionProposition) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_relationkind.e790b4e9fc3f"></a>
## AssumptionProposition.relationKind

`pub fn relation_kind(&self) -> Result<Option<String>, JsError>`

Returns `Result<Option<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_rightoperand.c7d9f00cb532"></a>
## AssumptionProposition.rightOperand

`pub fn right_operand(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_serialize.765c7dd6b46b"></a>
## AssumptionProposition.serialize

`pub fn serialize(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionproposition_tostring.ac1a37e09f72"></a>
## AssumptionProposition.toString

`pub fn to_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_ask.49091dce105c"></a>
## AssumptionScope.ask

`pub fn ask(&self, proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_assuming.bc3feb0b14d3"></a>
## AssumptionScope.assuming

`pub fn assuming(&self, proposition: &AssumptionProposition) -> Result<AssumptionScope, JsError>`

Returns `Result<assumption_scope, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_continuousdomain.24bf52c8474b"></a>
## AssumptionScope.continuousDomain

`pub fn continuous_domain(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_couldhold.2d2a6b64246b"></a>
## AssumptionScope.couldHold

`pub fn could_hold(&self, proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_evaluatelimit.8126d7e3bcbd"></a>
## AssumptionScope.evaluateLimit

`pub fn evaluate_limit(&self, input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_fouriertransform.5a22c0081730"></a>
## AssumptionScope.fourierTransform

`pub fn fourier_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_integrate.2fdd7c0dfbd7"></a>
## AssumptionScope.integrate

`pub fn integrate(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_integratedefinite.f892481fe20c"></a>
## AssumptionScope.integrateDefinite

`pub fn integrate_definite(&self, input_expression: &Expression, variable: &str, lower_bound: &Expression, upper_bound: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_laplacetransform.ec1051a0196b"></a>
## AssumptionScope.laplaceTransform

`pub fn laplace_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_refine.a34fe51a40a7"></a>
## AssumptionScope.refine

`pub fn refine(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_simplify.08324753316d"></a>
## AssumptionScope.simplify

`pub fn simplify(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_singularities.f24ea8f03f44"></a>
## AssumptionScope.singularities

`pub fn singularities(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.assumptionscope_taylorseries.c3cad65c2ce1"></a>
## AssumptionScope.taylorSeries

`pub fn taylor_series(&self, input_expression: &Expression, variable: &str, expansion_point: &Expression, truncation_order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_diagnostic.3aff803bd40b"></a>
## BulkExpressionOutcome.diagnostic

`pub fn diagnostic(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_index.9565b7871b49"></a>
## BulkExpressionOutcome.index

`pub fn index(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.bulkexpressionoutcome_value.a88ab5dae37a"></a>
## BulkExpressionOutcome.value

`pub fn value(&self) -> Option<Expression>`

Returns `Option<Expression>`.

<a id="placement-placement.wasm.wasm_class.bulktextoutcome_diagnostic.1f99261ae9a5"></a>
## BulkTextOutcome.diagnostic

`pub fn diagnostic(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.bulktextoutcome_index.eb506bca8e60"></a>
## BulkTextOutcome.index

`pub fn index(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.bulktextoutcome_value.e25bb45ec6a7"></a>
## BulkTextOutcome.value

`pub fn value(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.circle2d.b811b7e71dd1"></a>
## Circle2d

`pub fn new(center: &Point2d, radius: &Expression) -> Result<Circle2d, JsError>`

Returns `Result<circle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_area.743b71e37a1b"></a>
## Circle2d.area

`pub fn area(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_center.0e20868fec4f"></a>
## Circle2d.center

`pub fn center(&self) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_circumference.6d0e340e969d"></a>
## Circle2d.circumference

`pub fn circumference(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_equation.f2d8bb126725"></a>
## Circle2d.equation

`pub fn equation(&self, variable_x: &str, variable_y: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_intersection.a7bed6c77edd"></a>
## Circle2d.intersection

`pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

Returns `Result<Box<[JsValue]>, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_radius.fa13be61ae3c"></a>
## Circle2d.radius

`pub fn radius(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_serializeobject.4ffca9023185"></a>
## Circle2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_tolatex.2d6cae698d4b"></a>
## Circle2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.circle2d_tostring.fc0197c0b351"></a>
## Circle2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context.bae89741122f"></a>
## Context

`pub fn new() -> Context`

Returns `context`.

<a id="placement-placement.wasm.wasm_class.context_abs.8becf99ffac2"></a>
## Context.abs

`pub fn abs(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_addassumptions.b31f141c59eb"></a>
## Context.addAssumptions

`pub fn add_assumptions(&self, proposition: &AssumptionProposition) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_algebraicassumption.2224c5ffdadb"></a>
## Context.algebraicAssumption

`pub fn algebraic_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arccos.6f986d1187f1"></a>
## Context.arccos

`pub fn arccos(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arccosh.cb2cbcc3f028"></a>
## Context.arccosh

`pub fn arccosh(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arccot.d6212e82ac65"></a>
## Context.arccot

`pub fn arccot(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arccoth.ccfaaed98446"></a>
## Context.arccoth

`pub fn arccoth(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arccsc.42ee39a70f76"></a>
## Context.arccsc

`pub fn arccsc(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arccsch.637eb86bfbe6"></a>
## Context.arccsch

`pub fn arccsch(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arcsec.3ca9b48826c7"></a>
## Context.arcsec

`pub fn arcsec(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arcsech.4b7994e5ad8d"></a>
## Context.arcsech

`pub fn arcsech(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arcsin.b32e227f2b04"></a>
## Context.arcsin

`pub fn arcsin(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arcsinh.fa148850e60c"></a>
## Context.arcsinh

`pub fn arcsinh(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arctan.7dadd625290a"></a>
## Context.arctan

`pub fn arctan(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_arctanh.446dade022fb"></a>
## Context.arctanh

`pub fn arctanh(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ask.d8318137f075"></a>
## Context.ask

`pub fn ask(&self, proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_assuming.d69718f8316b"></a>
## Context.assuming

`pub fn assuming(&self, proposition: &AssumptionProposition) -> Result<AssumptionScope, JsError>`

Returns `Result<assumption_scope, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_assumptionpropositionfromlogicalexpression.5ea25bd33b20"></a>
## Context.assumptionPropositionFromLogicalExpression

`pub fn assumption_proposition_from_logical_expression(&self, logical_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_assumptionsof.66a8eb453c55"></a>
## Context.assumptionsOf

`pub fn assumptions_of(&self, name: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_bellnumber.b9d2d8d24cb1"></a>
## Context.bellNumber

`pub fn bell_number(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_beta.10022cde03c3"></a>
## Context.beta

`pub fn beta(&self, x: &Expression, y: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_binomial.bff558909372"></a>
## Context.binomial

`pub fn binomial(&self, n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_cancel.932c8c84c37d"></a>
## Context.cancel

`pub fn cancel(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_canonicalizepartialdifferentialequation.f516f4268b31"></a>
## Context.canonicalizePartialDifferentialEquation

`pub fn canonicalize_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationCanonicalizationResult, JsError>`

Returns `Result<partial_differential_equation_canonicalization_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_carlsonrc.903b0b7b6b2b"></a>
## Context.carlsonRc

`pub fn carlson_rc(&self, first_argument: &Expression, second_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_carlsonrd.11aac1f3979a"></a>
## Context.carlsonRd

`pub fn carlson_rd(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_carlsonrf.6d094605d199"></a>
## Context.carlsonRf

`pub fn carlson_rf(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_carlsonrj.a4fb7ba28bd8"></a>
## Context.carlsonRj

`pub fn carlson_rj(&self, first_argument: &Expression, second_argument: &Expression, third_argument: &Expression, fourth_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_catalannumber.97437d3ebb0e"></a>
## Context.catalanNumber

`pub fn catalan_number(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ceiling.b28033129d91"></a>
## Context.ceiling

`pub fn ceiling(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_changemonomialorder.e2a57ba75287"></a>
## Context.changeMonomialOrder

`pub fn change_monomial_order(&self, basis: Vec<Expression>, variables: Vec<String>, source_order: String, target_order: String) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_changepartialdifferentialequationvariables.2b70c639987b"></a>
## Context.changePartialDifferentialEquationVariables

`pub fn change_partial_differential_equation_variables(&self, problem: &PartialDifferentialEquationProblem, target_variables: Vec<String>, forward_coordinates: Option<Vec<Expression>>, inverse_coordinates: Option<Vec<Expression>>, target_dependent_function: Option<UndefinedFunction>) -> Result<PartialDifferentialEquationTransformationResult, JsError>`

Returns `Result<partial_differential_equation_transformation_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_characteristicfunction.67fa97a031f0"></a>
## Context.characteristicFunction

`pub fn characteristic_function(&self, random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialfirstkind.0a328846aedc"></a>
## Context.chebyshevPolynomialFirstKind

`pub fn chebyshev_polynomial_first_kind(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_chebyshevpolynomialsecondkind.e583655d7674"></a>
## Context.chebyshevPolynomialSecondKind

`pub fn chebyshev_polynomial_second_kind(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_chineseremainder.4aebe1e8fe59"></a>
## Context.chineseRemainder

`pub fn chinese_remainder(&self, residues_and_moduli: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_circle2d.b6b5bff08685"></a>
## Context.circle2d

`pub fn circle_2d(&self, center: &Point2d, radius: &Expression) -> Result<Circle2d, JsError>`

Returns `Result<circle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_classifypartialdifferentialequation.e650f9bebef6"></a>
## Context.classifyPartialDifferentialEquation

`pub fn classify_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationClassification, JsError>`

Returns `Result<partial_differential_equation_classification, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_classifysecondorderpartialdifferentialequation.278c33c7f044"></a>
## Context.classifySecondOrderPartialDifferentialEquation

`pub fn classify_second_order_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSecondOrderClassification, JsError>`

Returns `Result<partial_differential_equation_second_order_classification, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_classifyunconstrained.5099f86e57ff"></a>
## Context.classifyUnconstrained

`pub fn classify_unconstrained(&self, objective: &Expression, variables: Vec<String>, point_variables: Vec<String>, point_values: Vec<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_clearallassumptions.bd79ad9a9a16"></a>
## Context.clearAllAssumptions

`pub fn clear_all_assumptions(&self) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_clearassumptions.5956b856933d"></a>
## Context.clearAssumptions

`pub fn clear_assumptions(&self, name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_coefficient.8facb544769d"></a>
## Context.coefficient

`pub fn coefficient(&self, input_expression: &Expression, variable: &str, power: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_collect.bdcb1b32b44d"></a>
## Context.collect

`pub fn collect(&self, input_expression: &Expression, generator: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_collectradicals.8882f588936f"></a>
## Context.collectRadicals

`pub fn collect_radicals(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_combinelogarithm.d75c6b7bb203"></a>
## Context.combineLogarithm

`pub fn combine_logarithm(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_combinepowers.7c10205ea9cd"></a>
## Context.combinePowers

`pub fn combine_powers(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_combinetrigonometric.741f4fcc74d0"></a>
## Context.combineTrigonometric

`pub fn combine_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_comparerealroots.fb4df4838464"></a>
## Context.compareRealRoots

`pub fn compare_real_roots(&self, first_expression: &Expression, first_variable: &str, first_index: usize, second_expression: &Expression, second_variable: &str, second_index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_completethesquare.7c0eae8e0253"></a>
## Context.completeTheSquare

`pub fn complete_the_square(&self, input_expression: &Expression, variable: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_complexassumption.da3971bb10ac"></a>
## Context.complexAssumption

`pub fn complex_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_complexentries.6d9dfd9287af"></a>
## Context.complexEntries

`pub fn complex_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_complexplane.586e5589826d"></a>
## Context.complexPlane

`pub fn complex_plane(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_compositeassumption.fa27370d4eed"></a>
## Context.compositeAssumption

`pub fn composite_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_conditionset.ca3ed9f0ad48"></a>
## Context.conditionSet

`pub fn condition_set(&self, variable: &str, condition: &Expression, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_congruentassumption.f6180c227f00"></a>
## Context.congruentAssumption

`pub fn congruent_assumption(&self, left: &Expression, right: &Expression, modulus: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_conjugate.adbaa68a1d9c"></a>
## Context.conjugate

`pub fn conjugate(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_conjunctivenormalform.fd02ee7d14f1"></a>
## Context.conjunctiveNormalForm

`pub fn conjunctive_normal_form(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_constructpartialdifferentialequationpointsymmetryaction.54cba3ee5909"></a>
## Context.constructPartialDifferentialEquationPointSymmetryAction

`pub fn construct_partial_differential_equation_point_symmetry_action(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAction, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_action, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_continuedfractionquadraticirrational.4dd188c6160b"></a>
## Context.continuedFractionQuadraticIrrational

`pub fn continued_fraction_quadratic_irrational(&self, value: &Expression) -> Result<QuadraticContinuedFractionExpansion, JsError>`

Returns `Result<quadratic_continued_fraction_expansion, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_continuedfractionrational.cf59a95f002b"></a>
## Context.continuedFractionRational

`pub fn continued_fraction_rational(&self, value: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_continuousdomain.b3456b9e12a2"></a>
## Context.continuousDomain

`pub fn continuous_domain(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_cos.8e8798a224e7"></a>
## Context.cos

`pub fn cos(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_cosh.0d0d2c183bbe"></a>
## Context.cosh

`pub fn cosh(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_cot.38747a13906c"></a>
## Context.cot

`pub fn cot(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_coth.9ca2309ec1d6"></a>
## Context.coth

`pub fn coth(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_couldhold.66586843bd55"></a>
## Context.couldHold

`pub fn could_hold(&self, proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_countdistinctrealroots.7ee1d266c9eb"></a>
## Context.countDistinctRealRoots

`pub fn count_distinct_real_roots(&self, input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_covariance.cf6b9f0ac1bf"></a>
## Context.covariance

`pub fn covariance(&self, left: &Expression, right: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_csc.b24c53b2bf57"></a>
## Context.csc

`pub fn csc(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_csch.f2d967560733"></a>
## Context.csch

`pub fn csch(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_cumulant.842dc00f3798"></a>
## Context.cumulant

`pub fn cumulant(&self, random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_cumulativedistribution.437149c7bc0e"></a>
## Context.cumulativeDistribution

`pub fn cumulative_distribution(&self, random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_curl.4644328f1a4b"></a>
## Context.curl

`pub fn curl(&self, vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_definedassumption.8c5bd258ba52"></a>
## Context.definedAssumption

`pub fn defined_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_degree.d5afc93f0991"></a>
## Context.degree

`pub fn degree(&self, input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_denestpowers.4c2e62cdb07a"></a>
## Context.denestPowers

`pub fn denest_powers(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_denestradicals.2a3aa905082a"></a>
## Context.denestRadicals

`pub fn denest_radicals(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_denominator.fed5cc8af821"></a>
## Context.denominator

`pub fn denominator(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_density.4a13b738d461"></a>
## Context.density

`pub fn density(&self, random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_derivative.50bdfc4c863b"></a>
## Context.derivative

`pub fn derivative(&self, input_expression: &Expression, variable: &str, order: Option<usize>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_derivepartialdifferentialequationpointsymmetries.9b48ce1a250b"></a>
## Context.derivePartialDifferentialEquationPointSymmetries

`pub fn derive_partial_differential_equation_point_symmetries(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAlgebra, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_algebra, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_deserializeassumptionproposition.aff4c5500d99"></a>
## Context.deserializeAssumptionProposition

`pub fn deserialize_assumption_proposition(&self, text: &str) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_diagonalmatrix.25c6eea29c73"></a>
## Context.diagonalMatrix

`pub fn diagonal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_differentiate.df81a03aa1ac"></a>
## Context.differentiate

`pub fn differentiate(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_differentiatebulk.60c81c04a52a"></a>
## Context.differentiateBulk

`pub fn differentiate_bulk(&self, targets: Vec<Expression>, variable: &Expression) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_digamma.8058ef2c8766"></a>
## Context.digamma

`pub fn digamma(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_discoverpartialdifferentialequation.466949e3ded0"></a>
## Context.discoverPartialDifferentialEquation

`pub fn discover_partial_differential_equation(&self, equation: &Expression, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_disjunctivenormalform.08f586ff9227"></a>
## Context.disjunctiveNormalForm

`pub fn disjunctive_normal_form(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_distribution.8db68bce15d8"></a>
## Context.distribution

`pub fn distribution(&self, name: &str, parameters: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_divergence.b0dfa0093378"></a>
## Context.divergence

`pub fn divergence(&self, vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_divisorcount.51c87db41fb4"></a>
## Context.divisorCount

`pub fn divisor_count(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_divisorsigma.189d83e734c5"></a>
## Context.divisorSigma

`pub fn divisor_sigma(&self, n: &Expression, power: u32) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_e.8c51aa37c2b8"></a>
## Context.e

`pub fn e(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_eliminatederivedlogicalconnectives.3556bcb58aec"></a>
## Context.eliminateDerivedLogicalConnectives

`pub fn eliminate_derived_logical_connectives(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_eliminatequantifiers.943addcee9cd"></a>
## Context.eliminateQuantifiers

`pub fn eliminate_quantifiers(&self, matrix: &Expression, quantifiers: Vec<String>, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_eliminationideal.04f94bd7d8f1"></a>
## Context.eliminationIdeal

`pub fn elimination_ideal(&self, generators: Vec<Expression>, variables: Vec<String>, eliminate: Vec<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_elliptice.5532b3804b95"></a>
## Context.ellipticE

`pub fn elliptic_e(&self, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticeincomplete.25cb5b0479c7"></a>
## Context.ellipticEIncomplete

`pub fn elliptic_e_incomplete(&self, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticf.33bd7036e7c9"></a>
## Context.ellipticF

`pub fn elliptic_f(&self, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_elliptick.629bbeb8e11c"></a>
## Context.ellipticK

`pub fn elliptic_k(&self, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticpi.c988463102bc"></a>
## Context.ellipticPi

`pub fn elliptic_pi(&self, characteristic: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ellipticpiincomplete.719e94d7de55"></a>
## Context.ellipticPiIncomplete

`pub fn elliptic_pi_incomplete(&self, characteristic: &Expression, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_emptyset.a28d7059ab50"></a>
## Context.emptySet

`pub fn empty_set(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_enumeratesetininterval.b6c6fc34da8d"></a>
## Context.enumerateSetInInterval

`pub fn enumerate_set_in_interval(&self, set: &Expression, lower: &Expression, upper: &Expression, lower_inclusive: Option<bool>, upper_inclusive: Option<bool>, limit: Option<usize>) -> Result<SetEnumeration, JsError>`

Returns `Result<set_enumeration, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_equal.2dce7bc44567"></a>
## Context.equal

`pub fn equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_equalassumption.8c5d0d48bbee"></a>
## Context.equalAssumption

`pub fn equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_eulergamma.f3ad231b2543"></a>
## Context.eulerGamma

`pub fn euler_gamma(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_eulertotient.0e9516a9c2bb"></a>
## Context.eulerTotient

`pub fn euler_totient(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatelimit.198af56c4c62"></a>
## Context.evaluateLimit

`pub fn evaluate_limit(&self, input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatenumeric.cf32bb7a03b5"></a>
## Context.evaluateNumeric

`pub fn evaluate_numeric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatenumericbulk.1d8e7313ad2a"></a>
## Context.evaluateNumericBulk

`pub fn evaluate_numeric_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluateongrid.58241f8651c5"></a>
## Context.evaluateOnGrid

`pub fn evaluate_on_grid(&self, input_expression: &Expression, variable: &str, x_values: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluateongridpoints.883efda52e22"></a>
## Context.evaluateOnGridPoints

`pub fn evaluate_on_grid_points(&self, input_expression: &Expression, variables: Vec<String>, points: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evaluatetruth.863d04a2419d"></a>
## Context.evaluateTruth

`pub fn evaluate_truth(&self, input_expression: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_evenassumption.bb78156582ab"></a>
## Context.evenAssumption

`pub fn even_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_execute.8f16d95e4225"></a>
## Context.execute

`pub fn execute(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_executionmode.fb37feb3b5e7"></a>
## Context.executionMode

`pub fn execution_mode(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.context_exp.560a294e8805"></a>
## Context.exp

`pub fn exp(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expand.d98009438d4a"></a>
## Context.expand

`pub fn expand(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandbulk.ddbf38f0af39"></a>
## Context.expandBulk

`pub fn expand_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandcomplex.ec1c84d2cb66"></a>
## Context.expandComplex

`pub fn expand_complex(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandlogarithm.edb9385b56d9"></a>
## Context.expandLogarithm

`pub fn expand_logarithm(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandpowerbase.d498d0612d9b"></a>
## Context.expandPowerBase

`pub fn expand_power_base(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expandtrigonometric.a896374747a3"></a>
## Context.expandTrigonometric

`pub fn expand_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_expectation.67e8bae93912"></a>
## Context.expectation

`pub fn expectation(&self, target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_explicitpartialdifferentialequationsolution.36080a4f3827"></a>
## Context.explicitPartialDifferentialEquationSolution

`pub fn explicit_partial_differential_equation_solution(&self, solution: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_extendedeuclidean.2caeb9577112"></a>
## Context.extendedEuclidean

`pub fn extended_euclidean(&self, a: &Expression, b: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_extendedrealassumption.ae5e7bb5a3e9"></a>
## Context.extendedRealAssumption

`pub fn extended_real_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_factor.631689a43337"></a>
## Context.factor

`pub fn factor(&self, input_expression: &Expression, gaussian: Option<bool>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_factorcommonterms.1a2013256c21"></a>
## Context.factorCommonTerms

`pub fn factor_common_terms(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_factorinteger.3224abb06726"></a>
## Context.factorInteger

`pub fn factor_integer(&self, n: &Expression) -> Result<Vec<PrimeFactor>, JsError>`

Returns `Result<Vec<prime_factor>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_factorial.9cd8cb495318"></a>
## Context.factorial

`pub fn factorial(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fallingfactorial.c7ebe77cd326"></a>
## Context.fallingFactorial

`pub fn falling_factorial(&self, base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fibonaccinumber.bfba4fbe0c16"></a>
## Context.fibonacciNumber

`pub fn fibonacci_number(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_finiteassumption.f2b7a40022a4"></a>
## Context.finiteAssumption

`pub fn finite_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_finiteset.3a45883a0e93"></a>
## Context.finiteSet

`pub fn finite_set(&self, elements: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_floor.106fcc90d473"></a>
## Context.floor

`pub fn floor(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fouriertransform.6e6cbfb61d2f"></a>
## Context.fourierTransform

`pub fn fourier_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_fullrankmatrix.d4dda0c1ae74"></a>
## Context.fullRankMatrix

`pub fn full_rank_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_gamma.15bd4b87da3c"></a>
## Context.gamma

`pub fn gamma(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_gegenbauerpolynomial.9c0b54be20d8"></a>
## Context.gegenbauerPolynomial

`pub fn gegenbauer_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_generalizedlaguerrepolynomial.2aafcd528a5f"></a>
## Context.generalizedLaguerrePolynomial

`pub fn generalized_laguerre_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_globaloptimumonsemialgebraic.479ea3494935"></a>
## Context.globalOptimumOnSemialgebraic

`pub fn global_optimum_on_semialgebraic(&self, objective: &Expression, constraints: &Expression, variables: Vec<String>, direction: &str) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_gradient.61111b1393d7"></a>
## Context.gradient

`pub fn gradient(&self, scalar_field: &Expression, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_greaterassumption.7d33f6430cf1"></a>
## Context.greaterAssumption

`pub fn greater_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_greaterorequalassumption.45d6551d24b9"></a>
## Context.greaterOrEqualAssumption

`pub fn greater_or_equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_greaterthan.f224f387e805"></a>
## Context.greaterThan

`pub fn greater_than(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_greaterthanorequal.ec8578b13d6e"></a>
## Context.greaterThanOrEqual

`pub fn greater_than_or_equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_groebnerbasis.888872534bf7"></a>
## Context.groebnerBasis

`pub fn groebner_basis(&self, generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hermitepolynomial.68f367f719e9"></a>
## Context.hermitePolynomial

`pub fn hermite_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hermitianmatrix.ad07d380df99"></a>
## Context.hermitianMatrix

`pub fn hermitian_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hessian.20761aa7d61e"></a>
## Context.hessian

`pub fn hessian(&self, scalar_field: &Expression, variables: Vec<String>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hurwitzzeta.faec90c9388d"></a>
## Context.hurwitzZeta

`pub fn hurwitz_zeta(&self, s: &Expression, a: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometric0f1.eb8ad3cf9c53"></a>
## Context.hypergeometric0f1

`pub fn hypergeometric_0f1(&self, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometric1f1.658e3f7743d5"></a>
## Context.hypergeometric1f1

`pub fn hypergeometric_1f1(&self, upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometric2f1.941040609faf"></a>
## Context.hypergeometric2f1

`pub fn hypergeometric_2f1(&self, first_upper_parameter: &Expression, second_upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_hypergeometricpfq.2b937c3c8db4"></a>
## Context.hypergeometricPfq

`pub fn hypergeometric_pfq(&self, upper_parameters: Vec<Expression>, lower_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealintersection.acbee9138efd"></a>
## Context.idealIntersection

`pub fn ideal_intersection(&self, generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealmembership.c32c85f3e675"></a>
## Context.idealMembership

`pub fn ideal_membership(&self, element: &Expression, generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealproduct.a99fc7e4c6bf"></a>
## Context.idealProduct

`pub fn ideal_product(&self, generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_idealsum.cd86d2191b7e"></a>
## Context.idealSum

`pub fn ideal_sum(&self, generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_identitymatrix.b3b15b6e67fd"></a>
## Context.identityMatrix

`pub fn identity_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_imageset.5630fa218da7"></a>
## Context.imageSet

`pub fn image_set(&self, lambda_expression: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_imaginarypart.776c5cf4f0e7"></a>
## Context.imaginaryPart

`pub fn imaginary_part(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_imaginaryunit.deec42261320"></a>
## Context.imaginaryUnit

`pub fn imaginary_unit(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_implicitpartialdifferentialequationsolution.32e5eb5b6dde"></a>
## Context.implicitPartialDifferentialEquationSolution

`pub fn implicit_partial_differential_equation_solution(&self, residual: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_implicitize.05ec5f6bd5e5"></a>
## Context.implicitize

`pub fn implicitize(&self, coordinates: Vec<String>, parameters: Vec<String>, parametric_expressions: Vec<Expression>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_infiniteassumption.930992139804"></a>
## Context.infiniteAssumption

`pub fn infinite_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_infinity.bfd6a5bf4701"></a>
## Context.infinity

`pub fn infinity(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_initializeparallelism.b65737d204fb"></a>
## Context.initializeParallelism

`pub fn initialize_parallelism(&self, worker_count: usize) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integer.adbc02ce5b38"></a>
## Context.integer

`pub fn integer(&self, value: i64) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerassumption.cd89ea0aeab3"></a>
## Context.integerAssumption

`pub fn integer_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerentries.24804dca8290"></a>
## Context.integerEntries

`pub fn integer_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerfromstring.dac330233bfa"></a>
## Context.integerFromString

`pub fn integer_from_string(&self, text: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integergcd.dd986d1b30ec"></a>
## Context.integerGcd

`pub fn integer_gcd(&self, a: &Expression, b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerlcm.cbbcb09e9de0"></a>
## Context.integerLcm

`pub fn integer_lcm(&self, a: &Expression, b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integernthroot.937d47a1b8bd"></a>
## Context.integerNthRoot

`pub fn integer_nth_root(&self, n: &Expression, root_index: u64) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integerset.85a66913c2aa"></a>
## Context.integerSet

`pub fn integer_set(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_integersquareroot.a1377fb2624b"></a>
## Context.integerSquareRoot

`pub fn integer_square_root(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integral.f6129c72c596"></a>
## Context.integral

`pub fn integral(&self, integrand: &Expression, variable: &str, lower: Option<Expression>, upper: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integrate.7ea7e1c842ce"></a>
## Context.integrate

`pub fn integrate(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefinite.c23e8611ea36"></a>
## Context.integrateDefinite

`pub fn integrate_definite(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefinitedetailed.d4e91bc937ad"></a>
## Context.integrateDefiniteDetailed

`pub fn integrate_definite_detailed(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, interpretation: Option<String>, constraint: Option<Expression>) -> Result<DefiniteIntegrationResult, JsError>`

Returns `Result<definite_integration_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefinitenumeric.b394f4572330"></a>
## Context.integrateDefiniteNumeric

`pub fn integrate_definite_numeric(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, precision_bits: u32) -> Result<NumericDefiniteIntegrationResult, JsError>`

Returns `Result<NumericDefiniteIntegrationResult, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integratedefiniteunderconstraint.162de4dfe5ac"></a>
## Context.integrateDefiniteUnderConstraint

`pub fn integrate_definite_under_constraint(&self, input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_integrateiterated.d5ecdfc91bda"></a>
## Context.integrateIterated

`pub fn integrate_iterated(&self, input_expression: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_internerlength.eae1ce3bb1ac"></a>
## Context.internerLength

`pub fn interner_length(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.context_interval.abdb397ea405"></a>
## Context.interval

`pub fn interval(&self, lower: &Expression, upper: &Expression, lower_open: Option<bool>, upper_open: Option<bool>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_introducederivedlogicalconnectives.b3bbbe9c8c71"></a>
## Context.introduceDerivedLogicalConnectives

`pub fn introduce_derived_logical_connectives(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_inversefouriertransform.1256b676d4cd"></a>
## Context.inverseFourierTransform

`pub fn inverse_fourier_transform(&self, input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_inverselaplacetransform.12be5bd7a8d7"></a>
## Context.inverseLaplaceTransform

`pub fn inverse_laplace_transform(&self, input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_invertiblematrix.64db4aef0074"></a>
## Context.invertibleMatrix

`pub fn invertible_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_irrationalassumption.563f0ff3e367"></a>
## Context.irrationalAssumption

`pub fn irrational_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ismember.c95641df7e1f"></a>
## Context.isMember

`pub fn is_member(&self, element: &Expression, set: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_isprime.8164fbb41a14"></a>
## Context.isPrime

`pub fn is_prime(&self, n: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_issubset.f566fef15352"></a>
## Context.isSubset

`pub fn is_subset(&self, set_a: &Expression, set_b: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_isolaterealroots.67ba1eadfe31"></a>
## Context.isolateRealRoots

`pub fn isolate_real_roots(&self, input_expression: &Expression, variable: &str) -> Result<Vec<IsolatingInterval>, JsError>`

Returns `Result<Vec<isolating_interval>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobiamplitude.a587330f092b"></a>
## Context.jacobiAmplitude

`pub fn jacobi_amplitude(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobicn.f58ebda31a50"></a>
## Context.jacobiCn

`pub fn jacobi_cn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobidn.00819f251239"></a>
## Context.jacobiDn

`pub fn jacobi_dn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobipolynomial.efcf62ec673a"></a>
## Context.jacobiPolynomial

`pub fn jacobi_polynomial(&self, degree: &Expression, first_parameter: &Expression, second_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobisn.74cfc885f96f"></a>
## Context.jacobiSn

`pub fn jacobi_sn(&self, argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobisymbol.7c5f47880345"></a>
## Context.jacobiSymbol

`pub fn jacobi_symbol(&self, numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta1.c4d23116584e"></a>
## Context.jacobiTheta1

`pub fn jacobi_theta_1(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta2.189cc40aeeea"></a>
## Context.jacobiTheta2

`pub fn jacobi_theta_2(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta3.0a910e4dfec6"></a>
## Context.jacobiTheta3

`pub fn jacobi_theta_3(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobitheta4.4a26c72700a2"></a>
## Context.jacobiTheta4

`pub fn jacobi_theta_4(&self, argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_jacobian.a16e01c96433"></a>
## Context.jacobian

`pub fn jacobian(&self, vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_karushkuhntuckerpoints.fa6b84d46fc0"></a>
## Context.karushKuhnTuckerPoints

`pub fn karush_kuhn_tucker_points(&self, objective: &Expression, inequality_constraints: Vec<Expression>, equality_constraints: Vec<Expression>, variables: Vec<String>) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_kroneckersymbol.5fb205f9197f"></a>
## Context.kroneckerSymbol

`pub fn kronecker_symbol(&self, numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lagrangecriticalpoints.e80a858e03b0"></a>
## Context.lagrangeCriticalPoints

`pub fn lagrange_critical_points(&self, objective: &Expression, constraints: Vec<Expression>, variables: Vec<String>) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_laguerrepolynomial.62995c0f2327"></a>
## Context.laguerrePolynomial

`pub fn laguerre_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_laplacetransform.eaa99d3405c1"></a>
## Context.laplaceTransform

`pub fn laplace_transform(&self, input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_laplacian.d47f5d0355d4"></a>
## Context.laplacian

`pub fn laplacian(&self, scalar_field: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_laurentseries.e8316922ebf6"></a>
## Context.laurentSeries

`pub fn laurent_series(&self, input_expression: &Expression, variable: &str, center: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_leadingcoefficient.fa8ae548276b"></a>
## Context.leadingCoefficient

`pub fn leading_coefficient(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_legendrepolynomial.28ff6dbacc69"></a>
## Context.legendrePolynomial

`pub fn legendre_polynomial(&self, degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_legendresymbol.573f83890b5c"></a>
## Context.legendreSymbol

`pub fn legendre_symbol(&self, numerator: &Expression, prime: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lerchphi.1a43d0de986c"></a>
## Context.lerchPhi

`pub fn lerch_phi(&self, argument: &Expression, order: &Expression, shift: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessassumption.ca0ff78010a6"></a>
## Context.lessAssumption

`pub fn less_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessorequalassumption.11ee484d439d"></a>
## Context.lessOrEqualAssumption

`pub fn less_or_equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessthan.5f7e2595fdc8"></a>
## Context.lessThan

`pub fn less_than(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_lessthanorequal.14b771192996"></a>
## Context.lessThanOrEqual

`pub fn less_than_or_equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_limit.6bf8a3ae36bb"></a>
## Context.limit

`pub fn limit(&self, input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_log.70c0987461a7"></a>
## Context.log

`pub fn log(&self, x: &Expression, base: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_loggamma.5ec5f03b6584"></a>
## Context.logGamma

`pub fn log_gamma(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_logicalfalse.94e8b3dd883e"></a>
## Context.logicalFalse

`pub fn logical_false(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_logicaltrue.e8dfff3d592b"></a>
## Context.logicalTrue

`pub fn logical_true(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_lowertriangularmatrix.022cfbba3773"></a>
## Context.lowerTriangularMatrix

`pub fn lower_triangular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_maclaurinseries.9c0c4610a21a"></a>
## Context.maclaurinSeries

`pub fn maclaurin_series(&self, input_expression: &Expression, variable: &str, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrix.6a9f56e8356c"></a>
## Context.matrix

`pub fn matrix(&self, rows: usize, columns: usize, entries: Vec<Expression>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixdiagonal.dba54c60749f"></a>
## Context.matrixDiagonal

`pub fn matrix_diagonal(&self, entries: Vec<Expression>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixidentity.843c4412d2b9"></a>
## Context.matrixIdentity

`pub fn matrix_identity(&self, size: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixshape.459aae814946"></a>
## Context.matrixShape

`pub fn matrix_shape(&self, subject: &Matrix, rows: usize, columns: usize) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_matrixzero.3576687a68ef"></a>
## Context.matrixZero

`pub fn matrix_zero(&self, rows: usize, columns: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_max.c8df78797a62"></a>
## Context.max

`pub fn max(&self, arguments: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_meijerg.ab8f46bb2c1a"></a>
## Context.meijerG

`pub fn meijer_g(&self, upper_numerator_parameters: Vec<Expression>, upper_denominator_parameters: Vec<Expression>, lower_numerator_parameters: Vec<Expression>, lower_denominator_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_memberassumption.1ba404fedc2d"></a>
## Context.memberAssumption

`pub fn member_assumption(&self, element: &Expression, set_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_min.4481c194c547"></a>
## Context.min

`pub fn min(&self, arguments: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_minimalpolynomialof.c8632b82c23c"></a>
## Context.minimalPolynomialOf

`pub fn minimal_polynomial_of(&self, input_expression: &Expression, variable: &str) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_minimizelogical.e8634cea64ca"></a>
## Context.minimizeLogical

`pub fn minimize_logical(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_mobius.d9f853017575"></a>
## Context.mobius

`pub fn mobius(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_modularinverse.58167e0fe801"></a>
## Context.modularInverse

`pub fn modular_inverse(&self, value: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_modularpower.f0c98dd7bb85"></a>
## Context.modularPower

`pub fn modular_power(&self, base: &Expression, exponent: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_moment.39df9a0ae11b"></a>
## Context.moment

`pub fn moment(&self, random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_momentgeneratingfunction.5c1a2bc41ac9"></a>
## Context.momentGeneratingFunction

`pub fn moment_generating_function(&self, random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_multinomial.2a15ecdfee92"></a>
## Context.multinomial

`pub fn multinomial(&self, parts: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_naturalassumption.38e1c8e1981a"></a>
## Context.naturalAssumption

`pub fn natural_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_negativeassumption.2f61c8b3c7a1"></a>
## Context.negativeAssumption

`pub fn negative_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_nonnegativeassumption.64680640bb6a"></a>
## Context.nonnegativeAssumption

`pub fn nonnegative_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_nonpositiveassumption.a68756b4e98f"></a>
## Context.nonpositiveAssumption

`pub fn nonpositive_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_nonzeroassumption.3c73be02c09e"></a>
## Context.nonzeroAssumption

`pub fn nonzero_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_normalmatrix.22c1df434daa"></a>
## Context.normalMatrix

`pub fn normal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_notequal.e274c6ff26f1"></a>
## Context.notEqual

`pub fn not_equal(&self, left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_notequalassumption.9cf43d15c370"></a>
## Context.notEqualAssumption

`pub fn not_equal_assumption(&self, left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_numerator.9937af07591e"></a>
## Context.numerator

`pub fn numerator(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_numeratordenominator.1958e57cd14a"></a>
## Context.numeratorDenominator

`pub fn numerator_denominator(&self, input_expression: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_oddassumption.5565fb3aa853"></a>
## Context.oddAssumption

`pub fn odd_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_orthogonalmatrix.ff1dc519eda5"></a>
## Context.orthogonalMatrix

`pub fn orthogonal_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parallelismcapability.3ffc3c2aeaf5"></a>
## Context.parallelismCapability

`pub fn parallelism_capability(&self) -> ParallelismCapability`

Returns `ParallelismCapability`.

<a id="placement-placement.wasm.wasm_class.context_parse.6a687da40992"></a>
## Context.parse

`pub fn parse(&self, text: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parselatex.691f111b5629"></a>
## Context.parseLatex

`pub fn parse_latex(&self, latex: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parselatexwithenvironment.3e3cebf3e09b"></a>
## Context.parseLatexWithEnvironment

`pub fn parse_latex_with_environment(&self, latex: &str, serialized_definitions: Box<[JsValue]>) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_parseserializedobject.c34fdf0f8316"></a>
## Context.parseSerializedObject

`pub fn parse_serialized_object(&self, text: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequation.a755ce3b66b1"></a>
## Context.partialDifferentialEquation

`pub fn partial_differential_equation(&self, equation: &Expression, dependent_function: &UndefinedFunction, independent_variables: Vec<String>, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationarbitraryfunction.95275c8112f7"></a>
## Context.partialDifferentialEquationArbitraryFunction

`pub fn partial_differential_equation_arbitrary_function(&self, preferred_name: String, arity: usize) -> PartialDifferentialEquationArbitraryFunction`

Returns `partial_differential_equation_arbitrary_function`.

<a id="placement-placement.wasm.wasm_class.context_partialdifferentialequationpointsymmetrygenerator.507e6f5d1b4d"></a>
## Context.partialDifferentialEquationPointSymmetryGenerator

`pub fn partial_differential_equation_point_symmetry_generator(&self, problem: &PartialDifferentialEquationProblem, coordinate_infinitesimals: Vec<Expression>, dependent_infinitesimal: &Expression) -> Result<PartialDifferentialEquationPointSymmetryGenerator, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_generator, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_partialfractions.c9e0f734b93a"></a>
## Context.partialFractions

`pub fn partial_fractions(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_partitioncount.adf34104cda8"></a>
## Context.partitionCount

`pub fn partition_count(&self, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_pellsolutions.91be0218332c"></a>
## Context.pellSolutions

`pub fn pell_solutions(&self, radicand: &Expression, count: usize) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_pi.a8999ab0df5a"></a>
## Context.pi

`pub fn pi(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_piecewise.9a8f7205a7fd"></a>
## Context.piecewise

`pub fn piecewise(&self, branches: Vec<Expression>, otherwise: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_piecewisefold.d8dc6b0c9df5"></a>
## Context.piecewiseFold

`pub fn piecewise_fold(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_point2d.7290572ebc0b"></a>
## Context.point2d

`pub fn point_2d(&self, x: &Expression, y: &Expression) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_poleorder.588f17fd3f20"></a>
## Context.poleOrder

`pub fn pole_order(&self, input_expression: &Expression, variable: &str, center: &Expression) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polygamma.21297ea61e06"></a>
## Context.polygamma

`pub fn polygamma(&self, order: &Expression, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polygon2d.7769a1368f42"></a>
## Context.polygon2d

`pub fn polygon_2d(&self, vertices: Vec<Point2d>) -> Result<Polygon2d, JsError>`

Returns `Result<polygon_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polylogarithm.dc47bff1e1fe"></a>
## Context.polylogarithm

`pub fn polylogarithm(&self, order: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polynomialgcd.32c4a46fd180"></a>
## Context.polynomialGcd

`pub fn polynomial_gcd(&self, a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_polynomialroot.3cf9a61c8318"></a>
## Context.polynomialRoot

`pub fn polynomial_root(&self, input_expression: &Expression, variable: &str, index: usize) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positiveassumption.f031f0dc6351"></a>
## Context.positiveAssumption

`pub fn positive_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positivedefinitematrix.b2c5736061fa"></a>
## Context.positiveDefiniteMatrix

`pub fn positive_definite_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positiveintegerassumption.213d99d5dc51"></a>
## Context.positiveIntegerAssumption

`pub fn positive_integer_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_positivesemidefinitematrix.29521df6b267"></a>
## Context.positiveSemidefiniteMatrix

`pub fn positive_semidefinite_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_presentationnormalform.265113e13a9d"></a>
## Context.presentationNormalForm

`pub fn presentation_normal_form(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_primeassumption.dea59522d9b3"></a>
## Context.primeAssumption

`pub fn prime_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_probability.7ba12c2caf78"></a>
## Context.probability

`pub fn probability(&self, predicate: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_product.37cc779e76ed"></a>
## Context.product

`pub fn product(&self, multiplicand: &Expression, index: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_productindefinite.dac6a64f8b80"></a>
## Context.productIndefinite

`pub fn product_indefinite(&self, multiplicand: &Expression, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_randomvariable.2116c1217247"></a>
## Context.randomVariable

`pub fn random_variable(&self, name: &str, distribution: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rational.b6817b148a9c"></a>
## Context.rational

`pub fn rational(&self, numerator: &str, denominator: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rationalassumption.66ad2d17a4bd"></a>
## Context.rationalAssumption

`pub fn rational_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rationalfromfloat.1fdc38cc830e"></a>
## Context.rationalFromFloat

`pub fn rational_from_float(&self, value: f64, max_denominator: u64) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rationalizedenominator.651ecc69ab9f"></a>
## Context.rationalizeDenominator

`pub fn rationalize_denominator(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realassumption.973d612c8247"></a>
## Context.realAssumption

`pub fn real_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realentries.1307176acf67"></a>
## Context.realEntries

`pub fn real_entries(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realline.f9ddcef2c243"></a>
## Context.realLine

`pub fn real_line(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.context_realpart.ef73b6cb1c14"></a>
## Context.realPart

`pub fn real_part(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realrootcount.0c2cc95c5fce"></a>
## Context.realRootCount

`pub fn real_root_count(&self, input_expression: &Expression, variable: &str, lower: i64, upper: i64) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_realrootsign.ce30c7914074"></a>
## Context.realRootSign

`pub fn real_root_sign(&self, input_expression: &Expression, variable: &str, index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_refine.823a6652f5ca"></a>
## Context.refine

`pub fn refine(&self, input_expression: &Expression, assumptions: Option<AssumptionProposition>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_resetcontext.31f34760faed"></a>
## Context.resetContext

`pub fn reset_context(&self) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_residue.d125c14f4192"></a>
## Context.residue

`pub fn residue(&self, input_expression: &Expression, variable: &str, center: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_resultant.a85ac4158e89"></a>
## Context.resultant

`pub fn resultant(&self, a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewriteasexponential.ead7eee76381"></a>
## Context.rewriteAsExponential

`pub fn rewrite_as_exponential(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewriteastrigonometric.90428578b902"></a>
## Context.rewriteAsTrigonometric

`pub fn rewrite_as_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewriteintermsof.0eada73db806"></a>
## Context.rewriteInTermsOf

`pub fn rewrite_in_terms_of(&self, target: &Expression, source: &Expression, replacement: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewritespecialfunctions.9a756b368915"></a>
## Context.rewriteSpecialFunctions

`pub fn rewrite_special_functions(&self, input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rewritetrigonometricbasis.9ea791c98c65"></a>
## Context.rewriteTrigonometricBasis

`pub fn rewrite_trigonometric_basis(&self, input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_risingfactorial.4d89d9f355ee"></a>
## Context.risingFactorial

`pub fn rising_factorial(&self, base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_root.0a936cd66ba7"></a>
## Context.root

`pub fn root(&self, x: &Expression, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_rootswithmultiplicities.1685afb5181e"></a>
## Context.rootsWithMultiplicities

`pub fn roots_with_multiplicities(&self, input_expression: &Expression, variable: &str) -> Result<Vec<RootMultiplicity>, JsError>`

Returns `Result<Vec<root_multiplicity>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_sec.84f267f90796"></a>
## Context.sec

`pub fn sec(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_sech.b5b9ba43e0b5"></a>
## Context.sech

`pub fn sech(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_segment2d.bdd743314ff7"></a>
## Context.segment2d

`pub fn segment_2d(&self, start: &Point2d, end: &Point2d) -> Result<Segment2d, JsError>`

Returns `Result<segment_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_separatepartialdifferentialequation.bc377ea512aa"></a>
## Context.separatePartialDifferentialEquation

`pub fn separate_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSeparationResult, JsError>`

Returns `Result<partial_differential_equation_separation_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_serializebulk.6da9c7d96404"></a>
## Context.serializeBulk

`pub fn serialize_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkTextOutcome>, JsError>`

Returns `Result<Vec<BulkTextOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setcomplement.0e0d00ff962c"></a>
## Context.setComplement

`pub fn set_complement(&self, set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setexecutionmode.8558c817b7d7"></a>
## Context.setExecutionMode

`pub fn set_execution_mode(&self, name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setintersection.007766d08e05"></a>
## Context.setIntersection

`pub fn set_intersection(&self, set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_setunion.107649293a43"></a>
## Context.setUnion

`pub fn set_union(&self, set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplify.2c562eb70380"></a>
## Context.simplify

`pub fn simplify(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifybulk.f58e98df3b0c"></a>
## Context.simplifyBulk

`pub fn simplify_bulk(&self, targets: Vec<Expression>) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifylogical.0449b898501d"></a>
## Context.simplifyLogical

`pub fn simplify_logical(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifytrigonometric.7691da56d683"></a>
## Context.simplifyTrigonometric

`pub fn simplify_trigonometric(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_simplifyunderconstraint.d6de0069cdb2"></a>
## Context.simplifyUnderConstraint

`pub fn simplify_under_constraint(&self, input_expression: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_sin.5b5f3d82ecc5"></a>
## Context.sin

`pub fn sin(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_singularmatrix.95862437c4bc"></a>
## Context.singularMatrix

`pub fn singular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_singularities.6066a1b62d30"></a>
## Context.singularities

`pub fn singularities(&self, input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_sinh.5db01c5a733c"></a>
## Context.sinh

`pub fn sinh(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solve.eb0bbb7e6086"></a>
## Context.solve

`pub fn solve(&self, input_expression: &Expression, variable: &str) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantine.a71e6e2e49cd"></a>
## Context.solveLinearDiophantine

`pub fn solve_linear_diophantine(&self, coefficients: Vec<Expression>, constant: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvelineardiophantinesystem.8fa55d464929"></a>
## Context.solveLinearDiophantineSystem

`pub fn solve_linear_diophantine_system(&self, coefficient_matrix: &Matrix, constants: Vec<Expression>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvelinearrecurrence.8809c44f6227"></a>
## Context.solveLinearRecurrence

`pub fn solve_linear_recurrence(&self, equation: &Expression, sequence_call: &Expression, index_variable: &str, initial_conditions: Option<Vec<Expression>>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvenegativepell.eaf011c3b227"></a>
## Context.solveNegativePell

`pub fn solve_negative_pell(&self, radicand: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequation.efb98185cf3b"></a>
## Context.solveOrdinaryDifferentialEquation

`pub fn solve_ordinary_differential_equation(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, initial_conditions: Option<Vec<Expression>>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationrequest.0d10418c0664"></a>
## Context.solveOrdinaryDifferentialEquationRequest

`pub fn solve_ordinary_differential_equation_request(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, scope: String, condition_residuals: Option<Vec<Expression>>, method: Option<String>, regularity: Option<String>) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationsystemrequest.b14fb515da40"></a>
## Context.solveOrdinaryDifferentialEquationSystemRequest

`pub fn solve_ordinary_differential_equation_system_request(&self, equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, condition_residuals: Option<Vec<Expression>>, method: Option<String>) -> Result<OrdinaryDifferentialEquationSystemSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_system_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithhistory.213a3190a46e"></a>
## Context.solveOrdinaryDifferentialEquationWithHistory

`pub fn solve_ordinary_differential_equation_with_history(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, history_value: &Expression, history_start: &Expression, history_end: &Expression) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveordinarydifferentialequationwithparticularsolution.a068b73acc6d"></a>
## Context.solveOrdinaryDifferentialEquationWithParticularSolution

`pub fn solve_ordinary_differential_equation_with_particular_solution(&self, equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, particular_solution: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequation.e4cfd20f1895"></a>
## Context.solvePartialDifferentialEquation

`pub fn solve_partial_differential_equation(&self, problem: &PartialDifferentialEquationProblem, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationbysimilarityreduction.cbb1d2d4f631"></a>
## Context.solvePartialDifferentialEquationBySimilarityReduction

`pub fn solve_partial_differential_equation_by_similarity_reduction(&self, problem: &PartialDifferentialEquationProblem, generator: &PartialDifferentialEquationPointSymmetryGenerator) -> Result<PartialDifferentialEquationSimilaritySolution, JsError>`

Returns `Result<partial_differential_equation_similarity_solution, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationrequest.9454cbc9afee"></a>
## Context.solvePartialDifferentialEquationRequest

`pub fn solve_partial_differential_equation_request(&self, problem: &PartialDifferentialEquationProblem, scope: String, geometric_domain: Option<String>, regularity: Option<String>, solution_class: Option<String>, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepartialdifferentialequationwithtransformaxisspecifications.662e82df8c14"></a>
## Context.solvePartialDifferentialEquationWithTransformAxisSpecifications

`pub fn solve_partial_differential_equation_with_transform_axis_specifications(&self, problem: &PartialDifferentialEquationProblem, method: String, transform_axis_specifications: Vec<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepell.259181184189"></a>
## Context.solvePell

`pub fn solve_pell(&self, radicand: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvepolynomialsystem.1a9a483b3105"></a>
## Context.solvePolynomialSystem

`pub fn solve_polynomial_system(&self, equations: Vec<Expression>, variables: Vec<String>) -> Result<PolynomialSystemSolution, JsError>`

Returns `Result<polynomial_system_solution, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvesemialgebraic.d516cccae289"></a>
## Context.solveSemialgebraic

`pub fn solve_semialgebraic(&self, matrix: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solveset.a0c5b9375be1"></a>
## Context.solveset

`pub fn solveset(&self, input_expression: &Expression, variable: &str, domain: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_solvesetindomain.1a3d09ece50e"></a>
## Context.solvesetInDomain

`pub fn solveset_in_domain(&self, equation: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_sqrt.e93f423ac79b"></a>
## Context.sqrt

`pub fn sqrt(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_squarematrix.10a5804efa2d"></a>
## Context.squareMatrix

`pub fn square_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_stirlingfirstsigned.08afbe99e971"></a>
## Context.stirlingFirstSigned

`pub fn stirling_first_signed(&self, n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_stirlingsecond.3c96654ef70b"></a>
## Context.stirlingSecond

`pub fn stirling_second(&self, n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_substitutebulk.23b4102b48c2"></a>
## Context.substituteBulk

`pub fn substitute_bulk(&self, targets: Vec<Expression>, variable: &Expression, value: &Expression) -> Result<Vec<BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_summation.008385ac03bb"></a>
## Context.summation

`pub fn summation(&self, summand: &Expression, index: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_summationindefinite.1d9f974c7467"></a>
## Context.summationIndefinite

`pub fn summation_indefinite(&self, summand: &Expression, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_symbol.018ba3ea3259"></a>
## Context.symbol

`pub fn symbol(&self, name: &str, real: Option<bool>, positive: Option<bool>, negative: Option<bool>, integer: Option<bool>, finite: Option<bool>, rational: Option<bool>, natural: Option<bool>, nonzero: Option<bool>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_symmetricmatrix.fef52053eed2"></a>
## Context.symmetricMatrix

`pub fn symmetric_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_tan.96c4a114dc95"></a>
## Context.tan

`pub fn tan(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_tanh.fcfd055b99f5"></a>
## Context.tanh

`pub fn tanh(&self, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_taylorseries.2224e0e71344"></a>
## Context.taylorSeries

`pub fn taylor_series(&self, input_expression: &Expression, variable: &str, expansion_point: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_tolatex.be83ad30b575"></a>
## Context.toLatex

`pub fn to_latex(&self, input_expression: &Expression) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_tolatexwithoptions.1022577595e7"></a>
## Context.toLatexWithOptions

`pub fn to_latex_with_options(&self, input_expression: &Expression, exponential_style: &str, natural_logarithm_style: &str, multiletter_symbol_style: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_together.5c7d3ca8458a"></a>
## Context.together

`pub fn together(&self, input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_transcendentalassumption.6d339804210b"></a>
## Context.transcendentalAssumption

`pub fn transcendental_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_triangle2d.c3cf16ee529a"></a>
## Context.triangle2d

`pub fn triangle_2d(&self, point_a: &Point2d, point_b: &Point2d, point_c: &Point2d) -> Result<Triangle2d, JsError>`

Returns `Result<triangle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_ultrasphericalpolynomial.0086e7e17f60"></a>
## Context.ultrasphericalPolynomial

`pub fn ultraspherical_polynomial(&self, degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_unconstrainedcriticalpoints.40bf18e8ff10"></a>
## Context.unconstrainedCriticalPoints

`pub fn unconstrained_critical_points(&self, objective: &Expression, variables: Vec<String>) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_undefinedfunction.57b03936c6a5"></a>
## Context.undefinedFunction

`pub fn undefined_function(&self, name: &str) -> UndefinedFunction`

Returns `undefined_function`.

<a id="placement-placement.wasm.wasm_class.context_unitarymatrix.4eef4d42ba96"></a>
## Context.unitaryMatrix

`pub fn unitary_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_uppertriangularmatrix.5ff14f5d2604"></a>
## Context.upperTriangularMatrix

`pub fn upper_triangular_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_variance.f8ef1aa2b2f3"></a>
## Context.variance

`pub fn variance(&self, target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_verifyordinarydifferentialequationsystemsolution.6259425d8a18"></a>
## Context.verifyOrdinaryDifferentialEquationSystemSolution

`pub fn verify_ordinary_differential_equation_system_solution(&self, equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, components: Vec<Expression>, generated_constants: Vec<Expression>, condition_residuals: Option<Vec<Expression>>) -> Result<OrdinaryDifferentialEquationSystemVerificationReport, JsError>`

Returns `Result<ordinary_differential_equation_system_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationcoordinatetransformation.8d606f34fd5e"></a>
## Context.verifyPartialDifferentialEquationCoordinateTransformation

`pub fn verify_partial_differential_equation_coordinate_transformation(&self, problem: &PartialDifferentialEquationProblem, transformation: &PartialDifferentialEquationTransformationResult) -> Result<PartialDifferentialEquationTransformationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_transformation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_verifypartialdifferentialequationsolution.9d784d900bb6"></a>
## Context.verifyPartialDifferentialEquationSolution

`pub fn verify_partial_differential_equation_solution(&self, problem: &PartialDifferentialEquationProblem, solution: &PartialDifferentialEquationSolutionFamily) -> Result<PartialDifferentialEquationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_zeroassumption.e80b6e21b307"></a>
## Context.zeroAssumption

`pub fn zero_assumption(&self, subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_zeroequivalent.9d78dbb91e75"></a>
## Context.zeroEquivalent

`pub fn zero_equivalent(&self, input_expression: &Expression, constraint: Option<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_zeromatrix.2e74a285fae1"></a>
## Context.zeroMatrix

`pub fn zero_matrix(&self, subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.context_zeta.e838a7754a4e"></a>
## Context.zeta

`pub fn zeta(&self, s: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.criticalpoint_classification.978862e13473"></a>
## CriticalPoint.classification

`pub fn classification(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervalues.7e963e9a8ba9"></a>
## CriticalPoint.multiplierValues

`pub fn multiplier_values(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.criticalpoint_multipliervariables.ec621ff22453"></a>
## CriticalPoint.multiplierVariables

`pub fn multiplier_variables(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.criticalpoint_values.6894bda84e82"></a>
## CriticalPoint.values

`pub fn values(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.criticalpoint_variables.daa72a0ef83f"></a>
## CriticalPoint.variables

`pub fn variables(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition.8d211ca9a1c3"></a>
## CylindricalAlgebraicDecomposition

`pub fn new(expressions: Vec<Expression>, variables: Vec<String>, equational_constraints: Option<Vec<usize>>) -> Result<CylindricalAlgebraicDecomposition, JsError>`

Returns `Result<cylindrical_algebraic_decomposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellcount.2a3856c631ae"></a>
## CylindricalAlgebraicDecomposition.cellCount

`pub fn cell_count(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_celldimension.58941abd698b"></a>
## CylindricalAlgebraicDecomposition.cellDimension

`pub fn cell_dimension(&self, index: usize) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellkind.b0d16f9fc18f"></a>
## CylindricalAlgebraicDecomposition.cellKind

`pub fn cell_kind(&self, index: usize) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsamplepoint.fb99fcd53a5b"></a>
## CylindricalAlgebraicDecomposition.cellSamplePoint

`pub fn cell_sample_point(&self, index: usize) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_cellsignvector.1dd5b1c2f6cd"></a>
## CylindricalAlgebraicDecomposition.cellSignVector

`pub fn cell_sign_vector(&self, index: usize) -> Result<Vec<i32>, JsError>`

Returns `Result<Vec<i32>, JsError>`.

<a id="placement-placement.wasm.wasm_class.cylindricalalgebraicdecomposition_projectionoperatorused.34f87e17828d"></a>
## CylindricalAlgebraicDecomposition.projectionOperatorUsed

`pub fn projection_operator_used(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_declinereason.2ab13fa31859"></a>
## DefiniteIntegrationResult.declineReason

`pub fn decline_reason(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_divergencedirection.23c571e1dfe7"></a>
## DefiniteIntegrationResult.divergenceDirection

`pub fn divergence_direction(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_interpretation.e916f910c54f"></a>
## DefiniteIntegrationResult.interpretation

`pub fn interpretation(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_value.a1ac38a1d17c"></a>
## DefiniteIntegrationResult.value

`pub fn value(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.definiteintegrationresult_verdict.ef5d425f12c2"></a>
## DefiniteIntegrationResult.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.eigenpair_eigenvalue.843c70c4d195"></a>
## Eigenpair.eigenvalue

`pub fn eigenvalue(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.eigenpair_vectors.cddaa6ad5fe1"></a>
## Eigenpair.vectors

`pub fn vectors(&self) -> Vec<Matrix>`

Returns `Vec<matrix>`.

<a id="placement-placement.wasm.wasm_class.expression_add.96a43fe08167"></a>
## Expression.add

`pub fn add(&self, other: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_cancel.1ccb3725a645"></a>
## Expression.cancel

`pub fn cancel(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_collect.077961f6224f"></a>
## Expression.collect

`pub fn collect(&self, generator: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_collectradicals.c887746fcdff"></a>
## Expression.collectRadicals

`pub fn collect_radicals(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_combinelogarithm.a13ee73e1e1d"></a>
## Expression.combineLogarithm

`pub fn combine_logarithm(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_combinepowers.fbbb9d6d14ef"></a>
## Expression.combinePowers

`pub fn combine_powers(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_combinetrigonometric.379f033759d1"></a>
## Expression.combineTrigonometric

`pub fn combine_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_completethesquare.3d862f31a1ce"></a>
## Expression.completeTheSquare

`pub fn complete_the_square(&self, variable: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_conjunctivenormalform.eef84cedcdfd"></a>
## Expression.conjunctiveNormalForm

`pub fn conjunctive_normal_form(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_continuousdomain.29a27663a8c8"></a>
## Expression.continuousDomain

`pub fn continuous_domain(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_denestpowers.9316950a8123"></a>
## Expression.denestPowers

`pub fn denest_powers(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_denestradicals.d11a0ba4842a"></a>
## Expression.denestRadicals

`pub fn denest_radicals(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_denominator.4666a5313067"></a>
## Expression.denominator

`pub fn denominator(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_derivative.5e5f3f1fdacd"></a>
## Expression.derivative

`pub fn derivative(&self, variable: &str, order: Option<usize>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_differentiate.aadc0cf2928a"></a>
## Expression.differentiate

`pub fn differentiate(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_disjunctivenormalform.9a756d79b061"></a>
## Expression.disjunctiveNormalForm

`pub fn disjunctive_normal_form(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_divide.5255284e4cf1"></a>
## Expression.divide

`pub fn divide(&self, other: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_duplicate.97b5cc29d8db"></a>
## Expression.duplicate

`pub fn duplicate(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_eliminatederivedlogicalconnectives.1f7a9ae4427f"></a>
## Expression.eliminateDerivedLogicalConnectives

`pub fn eliminate_derived_logical_connectives(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_equals.48b56c74b7ad"></a>
## Expression.equals

`pub fn equals(&self, other: &Expression) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatelimit.ad4f2188ca80"></a>
## Expression.evaluateLimit

`pub fn evaluate_limit(&self, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatenumeric.b483cb974774"></a>
## Expression.evaluateNumeric

`pub fn evaluate_numeric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexact.315e742a4077"></a>
## Expression.evaluateToComplexInexact

`pub fn evaluate_to_complex_inexact(&self) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetocomplexinexactatprecision.84d0eabab4f4"></a>
## Expression.evaluateToComplexInexactAtPrecision

`pub fn evaluate_to_complex_inexact_at_precision(&self, precision_bits: u32) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetofloat.397b7c48c0f3"></a>
## Expression.evaluateToFloat

`pub fn evaluate_to_float(&self) -> Result<f64, JsError>`

Returns `Result<f64, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_evaluatetruth.1071ae13c246"></a>
## Expression.evaluateTruth

`pub fn evaluate_truth(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_execute.863a3e670c60"></a>
## Expression.execute

`pub fn execute(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expand.3ba03dbd7b00"></a>
## Expression.expand

`pub fn expand(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expandcomplex.7c66ec5fb625"></a>
## Expression.expandComplex

`pub fn expand_complex(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expandlogarithm.abcb3401c393"></a>
## Expression.expandLogarithm

`pub fn expand_logarithm(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expandpowerbase.6ea9637348b8"></a>
## Expression.expandPowerBase

`pub fn expand_power_base(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expandtrigonometric.1154bf16d311"></a>
## Expression.expandTrigonometric

`pub fn expand_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_expressiontype.9ef64c5b0bbb"></a>
## Expression.expressionType

`pub fn expression_type(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_factor.86dbcc9c348d"></a>
## Expression.factor

`pub fn factor(&self, gaussian: Option<bool>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_factorcommonterms.b46aa49b5edb"></a>
## Expression.factorCommonTerms

`pub fn factor_common_terms(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_freevariables.2b831cd5640c"></a>
## Expression.freeVariables

`pub fn free_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imagesetdomain.894cf5996d73"></a>
## Expression.imageSetDomain

`pub fn image_set_domain(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imagesetlambdaexpression.9537a3075b6e"></a>
## Expression.imageSetLambdaExpression

`pub fn image_set_lambda_expression(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imagesetvariable.c23ad4dbf4cb"></a>
## Expression.imageSetVariable

`pub fn image_set_variable(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_imaginarypart.8aff7315b620"></a>
## Expression.imaginaryPart

`pub fn imaginary_part(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integralintegrand.e27ba8e9a388"></a>
## Expression.integralIntegrand

`pub fn integral_integrand(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integrallowerbound.9922f04b09ad"></a>
## Expression.integralLowerBound

`pub fn integral_lower_bound(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integralupperbound.e819ab900c26"></a>
## Expression.integralUpperBound

`pub fn integral_upper_bound(&self) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integralvariable.5d2186957c4e"></a>
## Expression.integralVariable

`pub fn integral_variable(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integrate.d04377e90f5e"></a>
## Expression.integrate

`pub fn integrate(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integratedefinite.4e404c54ad75"></a>
## Expression.integrateDefinite

`pub fn integrate_definite(&self, variable: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integratedefiniteunderconstraint.ae1d271eaed2"></a>
## Expression.integrateDefiniteUnderConstraint

`pub fn integrate_definite_under_constraint(&self, variable: &str, lower: &Expression, upper: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_integrateiterated.f095d7ba5219"></a>
## Expression.integrateIterated

`pub fn integrate_iterated(&self, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_intervallower.36837bbd1eec"></a>
## Expression.intervalLower

`pub fn interval_lower(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_intervalupper.dfbef6dc04bc"></a>
## Expression.intervalUpper

`pub fn interval_upper(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_introducederivedlogicalconnectives.174398edf818"></a>
## Expression.introduceDerivedLogicalConnectives

`pub fn introduce_derived_logical_connectives(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isalgebraic.7f69c43994c4"></a>
## Expression.isAlgebraic

`pub fn is_algebraic(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iscomplex.cb55f33afdac"></a>
## Expression.isComplex

`pub fn is_complex(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iscomposite.9305add4812c"></a>
## Expression.isComposite

`pub fn is_composite(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isdefined.767be28c2b33"></a>
## Expression.isDefined

`pub fn is_defined(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isequality.86f4b29381a0"></a>
## Expression.isEquality

`pub fn is_equality(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iseven.79ec01947e1b"></a>
## Expression.isEven

`pub fn is_even(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isextendedreal.172c09a6da36"></a>
## Expression.isExtendedReal

`pub fn is_extended_real(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isfinite.424570d72876"></a>
## Expression.isFinite

`pub fn is_finite(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isfiniteset.90bfc2fdaf03"></a>
## Expression.isFiniteSet

`pub fn is_finite_set(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isimageset.5466d3ce260e"></a>
## Expression.isImageSet

`pub fn is_image_set(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isinfinite.859baf12b120"></a>
## Expression.isInfinite

`pub fn is_infinite(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isinteger.97d2a50d8429"></a>
## Expression.isInteger

`pub fn is_integer(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isintegral.aaf3a7607ea0"></a>
## Expression.isIntegral

`pub fn is_integral(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isinterval.c4ea28ca3bf2"></a>
## Expression.isInterval

`pub fn is_interval(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isirrational.6d6714833660"></a>
## Expression.isIrrational

`pub fn is_irrational(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_ismatrix.c4b71b990067"></a>
## Expression.isMatrix

`pub fn is_matrix(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnatural.08b113b0d6b1"></a>
## Expression.isNatural

`pub fn is_natural(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnegative.575a1576c858"></a>
## Expression.isNegative

`pub fn is_negative(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnonnegative.05a865e90f81"></a>
## Expression.isNonnegative

`pub fn is_nonnegative(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnonpositive.43f76142cb65"></a>
## Expression.isNonpositive

`pub fn is_nonpositive(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isnonzero.a92613e21491"></a>
## Expression.isNonzero

`pub fn is_nonzero(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isodd.1296c406043e"></a>
## Expression.isOdd

`pub fn is_odd(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_ispositive.f0a589e1849f"></a>
## Expression.isPositive

`pub fn is_positive(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_ispositiveinteger.de9efbe8d022"></a>
## Expression.isPositiveInteger

`pub fn is_positive_integer(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isprime.bea4c3dd89fc"></a>
## Expression.isPrime

`pub fn is_prime(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isrational.86f2ab150cd1"></a>
## Expression.isRational

`pub fn is_rational(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isreal.f26c33fb44d3"></a>
## Expression.isReal

`pub fn is_real(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isstale.71f8cf8528d5"></a>
## Expression.isStale

`pub fn is_stale(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.expression_istranscendental.7bafdf46504b"></a>
## Expression.isTranscendental

`pub fn is_transcendental(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_isunion.b55d87d040a7"></a>
## Expression.isUnion

`pub fn is_union(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_iszero.39d9a4da2056"></a>
## Expression.isZero

`pub fn is_zero(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_laurentseries.d0f2974aa39d"></a>
## Expression.laurentSeries

`pub fn laurent_series(&self, variable: &str, center: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_length.45f409e47bab"></a>
## Expression.length

`pub fn length(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_limit.ef276e5bcd5f"></a>
## Expression.limit

`pub fn limit(&self, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_maclaurinseries.61e0610232f5"></a>
## Expression.maclaurinSeries

`pub fn maclaurin_series(&self, variable: &str, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_minimizelogical.1eeedfe07389"></a>
## Expression.minimizeLogical

`pub fn minimize_logical(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_multiply.f2a3f2cee0c1"></a>
## Expression.multiply

`pub fn multiply(&self, other: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_negate.2e41e0b07df3"></a>
## Expression.negate

`pub fn negate(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_nodecount.81983e8a3143"></a>
## Expression.nodeCount

`pub fn node_count(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_numerator.093c06d610d6"></a>
## Expression.numerator

`pub fn numerator(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_numeratordenominator.016a31025e26"></a>
## Expression.numeratorDenominator

`pub fn numerator_denominator(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_partialfractions.cd98977fa321"></a>
## Expression.partialFractions

`pub fn partial_fractions(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_piecewisefold.3d9ec0c834c8"></a>
## Expression.piecewiseFold

`pub fn piecewise_fold(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_poleorder.b10295b45362"></a>
## Expression.poleOrder

`pub fn pole_order(&self, variable: &str, center: &Expression) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_power.61c34f700b84"></a>
## Expression.power

`pub fn power(&self, exponent: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_presentationnormalform.af5e499aeb25"></a>
## Expression.presentationNormalForm

`pub fn presentation_normal_form(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rationalizedenominator.9a1f6b3cc535"></a>
## Expression.rationalizeDenominator

`pub fn rationalize_denominator(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_realpart.0ae125d73af1"></a>
## Expression.realPart

`pub fn real_part(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_refine.851cb332f433"></a>
## Expression.refine

`pub fn refine(&self, assumptions: Option<crate::context::AssumptionProposition>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_residue.8d5e9c55a6de"></a>
## Expression.residue

`pub fn residue(&self, variable: &str, center: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewriteasexponential.4b402839fe68"></a>
## Expression.rewriteAsExponential

`pub fn rewrite_as_exponential(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewriteastrigonometric.825595943505"></a>
## Expression.rewriteAsTrigonometric

`pub fn rewrite_as_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewriteintermsof.d205de912a41"></a>
## Expression.rewriteInTermsOf

`pub fn rewrite_in_terms_of(&self, source: &Expression, replacement: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewritespecialfunctions.590d4aee2a54"></a>
## Expression.rewriteSpecialFunctions

`pub fn rewrite_special_functions(&self, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rewritetrigonometricbasis.874f98eb58f4"></a>
## Expression.rewriteTrigonometricBasis

`pub fn rewrite_trigonometric_basis(&self, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_rootswithmultiplicities.e1d29f981fe3"></a>
## Expression.rootsWithMultiplicities

`pub fn roots_with_multiplicities(&self, variable: &str) -> Result<Vec<crate::context::RootMultiplicity>, JsError>`

Returns `Result<Vec<crate::context::root_multiplicity>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_serializeobject.0e7634ac3af8"></a>
## Expression.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_simplify.c10646d9d93b"></a>
## Expression.simplify

`pub fn simplify(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_simplifylogical.b150d8671266"></a>
## Expression.simplifyLogical

`pub fn simplify_logical(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_simplifytrigonometric.f20902a32327"></a>
## Expression.simplifyTrigonometric

`pub fn simplify_trigonometric(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_simplifyunderconstraint.1623bd3f02f7"></a>
## Expression.simplifyUnderConstraint

`pub fn simplify_under_constraint(&self, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_singularities.3f1ebf570aaf"></a>
## Expression.singularities

`pub fn singularities(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_solve.e98546cf948d"></a>
## Expression.solve

`pub fn solve(&self, variable: &str) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_solveset.24afaaf366dc"></a>
## Expression.solveset

`pub fn solveset(&self, variable: &str, domain: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_substitute.617d58709370"></a>
## Expression.substitute

`pub fn substitute(&self, variable: &str, value: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_subtract.792ca56d060e"></a>
## Expression.subtract

`pub fn subtract(&self, other: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_summationindefinite.98722b7aa268"></a>
## Expression.summationIndefinite

`pub fn summation_indefinite(&self, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_symbolname.4c98a64aafac"></a>
## Expression.symbolName

`pub fn symbol_name(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_taylorseries.34401ae1c495"></a>
## Expression.taylorSeries

`pub fn taylor_series(&self, variable: &str, expansion_point: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tolatex.1ec6388c2f23"></a>
## Expression.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tolatexwithoptions.e10c150aa233"></a>
## Expression.toLatexWithOptions

`pub fn to_latex_with_options(&self, exponential_style: &str, natural_logarithm_style: &str, multiletter_symbol_style: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tolist.448f0522ff8b"></a>
## Expression.toList

`pub fn to_list(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_tostring.f64870e2f750"></a>
## Expression.toString

`pub fn to_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_together.25148d8a4726"></a>
## Expression.together

`pub fn together(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_unioncomponents.ba40c4145e3b"></a>
## Expression.unionComponents

`pub fn union_components(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.expression_zeroequivalent.d55b1b33dd0a"></a>
## Expression.zeroEquivalent

`pub fn zero_equivalent(&self, constraint: Option<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_hermite.f2a2b5ea8b10"></a>
## HermiteNormalFormDecomposition.hermite

`pub fn hermite(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_pivotcolumns.310dd3184c24"></a>
## HermiteNormalFormDecomposition.pivotColumns

`pub fn pivot_columns(&self) -> Vec<usize>`

Returns `Vec<usize>`.

<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_rank.93db89cc480a"></a>
## HermiteNormalFormDecomposition.rank

`pub fn rank(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.hermitenormalformdecomposition_transformation.d7078a78935f"></a>
## HermiteNormalFormDecomposition.transformation

`pub fn transformation(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.integercokerneldata_freerank.58e60eaffcc6"></a>
## IntegerCokernelData.freeRank

`pub fn free_rank(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.integercokerneldata_torsioninvariantfactors.0963695946a9"></a>
## IntegerCokernelData.torsionInvariantFactors

`pub fn torsion_invariant_factors(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.isolatinginterval_lower.fbc0bf3f0386"></a>
## IsolatingInterval.lower

`pub fn lower(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.isolatinginterval_upper.c137d742d426"></a>
## IsolatingInterval.upper

`pub fn upper(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.jordanblock_eigenvalue.709dd40eb76c"></a>
## JordanBlock.eigenvalue

`pub fn eigenvalue(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.jordanblock_size.cd7512c4a332"></a>
## JordanBlock.size

`pub fn size(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.jordandecomposition_blocks.ac7057508f51"></a>
## JordanDecomposition.blocks

`pub fn blocks(&self) -> Vec<JordanBlock>`

Returns `Vec<jordan_block>`.

<a id="placement-placement.wasm.wasm_class.jordandecomposition_jordanform.1ae72807329f"></a>
## JordanDecomposition.jordanForm

`pub fn jordan_form(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.jordandecomposition_similarity.2c685ecdfb79"></a>
## JordanDecomposition.similarity

`pub fn similarity(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.matrix.9d9ffff314ec"></a>
## Matrix

`pub fn new(rows: usize, columns: usize, entries: Vec<Expression>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_add.99e6a9230b2d"></a>
## Matrix.add

`pub fn add(&self, other: &Matrix) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_adjugate.3b29f0eaf4e7"></a>
## Matrix.adjugate

`pub fn adjugate(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_characteristicpolynomial.b52d432283bf"></a>
## Matrix.characteristicPolynomial

`pub fn characteristic_polynomial(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_cofactormatrix.f7cc2238f180"></a>
## Matrix.cofactorMatrix

`pub fn cofactor_matrix(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_columnhermitenormalform.d56e378a6a37"></a>
## Matrix.columnHermiteNormalForm

`pub fn column_hermite_normal_form(&self) -> Result<HermiteNormalFormDecomposition, JsError>`

Returns `Result<hermite_normal_form_decomposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_columns.4b3f7bc5d61b"></a>
## Matrix.columns

`pub fn columns(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.matrix_cosine.0f588e01221c"></a>
## Matrix.cosine

`pub fn cosine(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_determinant.9cca0ed72b2e"></a>
## Matrix.determinant

`pub fn determinant(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_eigenvalues.6b4706f57bbf"></a>
## Matrix.eigenvalues

`pub fn eigenvalues(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_eigenvectors.c6bb314d0780"></a>
## Matrix.eigenvectors

`pub fn eigenvectors(&self) -> Result<Vec<Eigenpair>, JsError>`

Returns `Result<Vec<eigenpair>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_entry.53b08ca2f069"></a>
## Matrix.entry

`pub fn entry(&self, row: usize, column: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_execute.cd3080e5f4bd"></a>
## Matrix.execute

`pub fn execute(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_exponential.b7bab335ac58"></a>
## Matrix.exponential

`pub fn exponential(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hascomplexentries.fc89a0fa64ba"></a>
## Matrix.hasComplexEntries

`pub fn has_complex_entries(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hasintegerentries.c6f9d9a6c203"></a>
## Matrix.hasIntegerEntries

`pub fn has_integer_entries(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hasrealentries.bfd277113306"></a>
## Matrix.hasRealEntries

`pub fn has_real_entries(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hermitenormalform.5ca2e19e0780"></a>
## Matrix.hermiteNormalForm

`pub fn hermite_normal_form(&self) -> Result<HermiteNormalFormDecomposition, JsError>`

Returns `Result<hermite_normal_form_decomposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hyperboliccosine.9883f6ac95ea"></a>
## Matrix.hyperbolicCosine

`pub fn hyperbolic_cosine(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_hyperbolicsine.8c14f73a4915"></a>
## Matrix.hyperbolicSine

`pub fn hyperbolic_sine(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integercokernelstructure.6531796e2d45"></a>
## Matrix.integerCokernelStructure

`pub fn integer_cokernel_structure(&self) -> Result<IntegerCokernelData, JsError>`

Returns `Result<integer_cokernel_data, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integerimagelatticebasis.5e205115c515"></a>
## Matrix.integerImageLatticeBasis

`pub fn integer_image_lattice_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integerkernelbasis.01cee525f219"></a>
## Matrix.integerKernelBasis

`pub fn integer_kernel_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_integerrowlatticebasis.81f8585c2e8d"></a>
## Matrix.integerRowLatticeBasis

`pub fn integer_row_lattice_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_inverse.b9c203ead0bb"></a>
## Matrix.inverse

`pub fn inverse(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isdiagonalmatrix.71327370540b"></a>
## Matrix.isDiagonalMatrix

`pub fn is_diagonal_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isequality.df1325fbf5f8"></a>
## Matrix.isEquality

`pub fn is_equality(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isfiniteset.bb89df6933ea"></a>
## Matrix.isFiniteSet

`pub fn is_finite_set(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isfullrankmatrix.5bbfcbc6c1e0"></a>
## Matrix.isFullRankMatrix

`pub fn is_full_rank_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_ishermitianmatrix.1cb5739b20b5"></a>
## Matrix.isHermitianMatrix

`pub fn is_hermitian_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isidentitymatrix.9ff399f20293"></a>
## Matrix.isIdentityMatrix

`pub fn is_identity_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isimageset.3fe74cafdfc3"></a>
## Matrix.isImageSet

`pub fn is_image_set(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isintegral.9e71f8fe0c10"></a>
## Matrix.isIntegral

`pub fn is_integral(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isinvertiblematrix.6352f593e5f7"></a>
## Matrix.isInvertibleMatrix

`pub fn is_invertible_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_ismatrix.49764165c804"></a>
## Matrix.isMatrix

`pub fn is_matrix(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isnormalmatrix.3db937ca961a"></a>
## Matrix.isNormalMatrix

`pub fn is_normal_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isorthogonalmatrix.d6a1f86db429"></a>
## Matrix.isOrthogonalMatrix

`pub fn is_orthogonal_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_ispositive.27aac02052db"></a>
## Matrix.isPositive

`pub fn is_positive(&self) -> Option<bool>`

Returns `Option<bool>`.

<a id="placement-placement.wasm.wasm_class.matrix_ispositivedefinitematrix.6bcc9f90fd7c"></a>
## Matrix.isPositiveDefiniteMatrix

`pub fn is_positive_definite_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_ispositivesemidefinitematrix.3397ae9b1bcd"></a>
## Matrix.isPositiveSemidefiniteMatrix

`pub fn is_positive_semidefinite_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isreal.6f1011db22cc"></a>
## Matrix.isReal

`pub fn is_real(&self) -> Option<bool>`

Returns `Option<bool>`.

<a id="placement-placement.wasm.wasm_class.matrix_issingularmatrix.06b2135448ac"></a>
## Matrix.isSingularMatrix

`pub fn is_singular_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_issquare.24b993354b1d"></a>
## Matrix.isSquare

`pub fn is_square(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_issymmetricmatrix.90f4b9ccfa27"></a>
## Matrix.isSymmetricMatrix

`pub fn is_symmetric_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_isunion.7e398215393b"></a>
## Matrix.isUnion

`pub fn is_union(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.matrix_isunitarymatrix.c6089d647a19"></a>
## Matrix.isUnitaryMatrix

`pub fn is_unitary_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_iszeromatrix.5f52a26d7e19"></a>
## Matrix.isZeroMatrix

`pub fn is_zero_matrix(&self) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_jordandecomposition.5ed7e5466201"></a>
## Matrix.jordanDecomposition

`pub fn jordan_decomposition(&self) -> Result<JordanDecomposition, JsError>`

Returns `Result<jordan_decomposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_logarithm.2fe62d179d7e"></a>
## Matrix.logarithm

`pub fn logarithm(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_lowerupperdecomposition.49bcf14289a6"></a>
## Matrix.lowerUpperDecomposition

`pub fn lower_upper_decomposition(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_minimalpolynomial.404814deeca3"></a>
## Matrix.minimalPolynomial

`pub fn minimal_polynomial(&self, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_multiply.ba14f611498e"></a>
## Matrix.multiply

`pub fn multiply(&self, other: &Matrix) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_nullspacebasis.3c29893c97be"></a>
## Matrix.nullspaceBasis

`pub fn nullspace_basis(&self) -> Result<Vec<Matrix>, JsError>`

Returns `Result<Vec<matrix>, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_rank.488612d9f940"></a>
## Matrix.rank

`pub fn rank(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_rationalcanonicalform.4965226d4f23"></a>
## Matrix.rationalCanonicalForm

`pub fn rational_canonical_form(&self, variable: &str) -> Result<RationalCanonicalForm, JsError>`

Returns `Result<rational_canonical_form, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_rowreduce.f6176e0e6403"></a>
## Matrix.rowReduce

`pub fn row_reduce(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_rows.e17a7bb5b346"></a>
## Matrix.rows

`pub fn rows(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.matrix_scalarmultiply.ec2353182aff"></a>
## Matrix.scalarMultiply

`pub fn scalar_multiply(&self, scalar: &Expression) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_serializeobject.da3d7d802113"></a>
## Matrix.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_sine.07e03f4d756a"></a>
## Matrix.sine

`pub fn sine(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_smithnormalform.6d537d6b9035"></a>
## Matrix.smithNormalForm

`pub fn smith_normal_form(&self) -> Result<SmithNormalFormDecomposition, JsError>`

Returns `Result<smith_normal_form_decomposition, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_squareroot.1c60c29e8e88"></a>
## Matrix.squareRoot

`pub fn square_root(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_subtract.ac3ea3a61aeb"></a>
## Matrix.subtract

`pub fn subtract(&self, other: &Matrix) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_tolatex.c244544a6fc7"></a>
## Matrix.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_tostring.78e216ff9504"></a>
## Matrix.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_trace.061991085cfa"></a>
## Matrix.trace

`pub fn trace(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.matrix_transpose.d8c363407dfa"></a>
## Matrix.transpose

`pub fn transpose(&self) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_estimatedabsoluteerror.3ab4c6a54ed4"></a>
## NumericDefiniteIntegrationResult.estimatedAbsoluteError

`pub fn estimated_absolute_error(&self) -> Option<f64>`

Returns `Option<f64>`.

<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_nodecount.d6365edd307f"></a>
## NumericDefiniteIntegrationResult.nodeCount

`pub fn node_count(&self) -> Option<u32>`

Returns `Option<u32>`.

<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_precisionbits.38eaaf674f8b"></a>
## NumericDefiniteIntegrationResult.precisionBits

`pub fn precision_bits(&self) -> Option<u32>`

Returns `Option<u32>`.

<a id="placement-placement.wasm.wasm_class.numericdefiniteintegrationresult_value.5d248a24cc0f"></a>
## NumericDefiniteIntegrationResult.value

`pub fn value(&self) -> Option<Vec<f64>>`

Returns `Option<Vec<f64>>`.

<a id="placement-placement.wasm.wasm_class.optimizationoutcome_complete.21af5824d96d"></a>
## OptimizationOutcome.complete

`pub fn complete(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.optimizationoutcome_points.3545def4598f"></a>
## OptimizationOutcome.points

`pub fn points(&self) -> Vec<CriticalPoint>`

Returns `Vec<critical_point>`.

<a id="placement-placement.wasm.wasm_class.optimizationoutcome_verdict.a8e3195ed418"></a>
## OptimizationOutcome.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_decline.24f117c6e555"></a>
## OrdinaryDifferentialEquationSolveResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_form.ed5c138e707a"></a>
## OrdinaryDifferentialEquationSolveResult.form

`pub fn form(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_frequencydomainequation.4b988fcde71e"></a>
## OrdinaryDifferentialEquationSolveResult.frequencyDomainEquation

`pub fn frequency_domain_equation(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generality.0acc7843fcff"></a>
## OrdinaryDifferentialEquationSolveResult.generality

`pub fn generality(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_generatedconstants.b24b49acc560"></a>
## OrdinaryDifferentialEquationSolveResult.generatedConstants

`pub fn generated_constants(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_image.2505758202af"></a>
## OrdinaryDifferentialEquationSolveResult.image

`pub fn image(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_method.2a36ab088dab"></a>
## OrdinaryDifferentialEquationSolveResult.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_solution.095194c1e3e8"></a>
## OrdinaryDifferentialEquationSolveResult.solution

`pub fn solution(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verdict.be6fec5ffae5"></a>
## OrdinaryDifferentialEquationSolveResult.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsolveresult_verification.98a3c08527f6"></a>
## OrdinaryDifferentialEquationSolveResult.verification

`pub fn verification(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_components.b446bfacdaad"></a>
## OrdinaryDifferentialEquationSystemSolveResult.components

`pub fn components(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_decline.a04d9d49a2dc"></a>
## OrdinaryDifferentialEquationSystemSolveResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generality.b6dedec50021"></a>
## OrdinaryDifferentialEquationSystemSolveResult.generality

`pub fn generality(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_generatedconstants.918ffd7b6ed6"></a>
## OrdinaryDifferentialEquationSystemSolveResult.generatedConstants

`pub fn generated_constants(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_method.85f1db18a22f"></a>
## OrdinaryDifferentialEquationSystemSolveResult.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_route.ad4fa4980543"></a>
## OrdinaryDifferentialEquationSystemSolveResult.route

`pub fn route(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verdict.cc0fd5062ade"></a>
## OrdinaryDifferentialEquationSystemSolveResult.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemsolveresult_verification.21b83effc580"></a>
## OrdinaryDifferentialEquationSystemSolveResult.verification

`pub fn verification(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_generality.06f7e5f0bc1b"></a>
## OrdinaryDifferentialEquationSystemVerificationReport.generality

`pub fn generality(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_requiredrank.28c5e9d61fa5"></a>
## OrdinaryDifferentialEquationSystemVerificationReport.requiredRank

`pub fn required_rank(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.ordinarydifferentialequationsystemverificationreport_verdict.ee29fc9bbe84"></a>
## OrdinaryDifferentialEquationSystemVerificationReport.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_active.7a56c9003ea3"></a>
## ParallelismCapability.active

`pub fn active(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_backend.6ace752fbfa8"></a>
## ParallelismCapability.backend

`pub fn backend(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_compiled.cdc011ae2a95"></a>
## ParallelismCapability.compiled

`pub fn compiled(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_initialized.4f99d93e07ed"></a>
## ParallelismCapability.initialized

`pub fn initialized(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_maximumoperationconcurrency.0130e4f9bd13"></a>
## ParallelismCapability.maximumOperationConcurrency

`pub fn maximum_operation_concurrency(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_selectedmode.42c75b8ac175"></a>
## ParallelismCapability.selectedMode

`pub fn selected_mode(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_unavailablereason.07bb1c3498ad"></a>
## ParallelismCapability.unavailableReason

`pub fn unavailable_reason(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.parallelismcapability_workercount.2182d20e0f67"></a>
## ParallelismCapability.workerCount

`pub fn worker_count(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_arity.d1caa458c863"></a>
## PartialDifferentialEquationArbitraryFunction.arity

`pub fn arity(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationarbitraryfunction_name.42b1c3bd0a16"></a>
## PartialDifferentialEquationArbitraryFunction.name

`pub fn name(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_canonicalized.a1fcbcf36d91"></a>
## PartialDifferentialEquationCanonicalizationResult.canonicalized

`pub fn canonicalized(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_decline.864bf76b4827"></a>
## PartialDifferentialEquationCanonicalizationResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_principalform.56b9d4fecb56"></a>
## PartialDifferentialEquationCanonicalizationResult.principalForm

`pub fn principal_form(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformation.4b578977217f"></a>
## PartialDifferentialEquationCanonicalizationResult.transformation

`pub fn transformation(&self) -> Option<PartialDifferentialEquationTransformationResult>`

Returns `Option<partial_differential_equation_transformation_result>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcanonicalizationresult_transformationdecline.bbfd366c8896"></a>
## PartialDifferentialEquationCanonicalizationResult.transformationDecline

`pub fn transformation_decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_coefficientdata.8e7c41f8826b"></a>
## PartialDifferentialEquationClassification.coefficientData

`pub fn coefficient_data(&self) -> Result<PartialDifferentialEquationCoefficientData, JsError>`

Returns `Result<partial_differential_equation_coefficient_data, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_linearity.a6e667e25ec5"></a>
## PartialDifferentialEquationClassification.linearity

`pub fn linearity(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_methodcandidates.f9f5eeb37c13"></a>
## PartialDifferentialEquationClassification.methodCandidates

`pub fn method_candidates(&self) -> Result<Vec<PartialDifferentialEquationMethodCandidate>, JsError>`

Returns `Result<Vec<partial_differential_equation_method_candidate>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_order.bd643506262a"></a>
## PartialDifferentialEquationClassification.order

`pub fn order(&self) -> Result<usize, JsError>`

Returns `Result<usize, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationclassification_secondorderprincipalpart.b59823cebdcb"></a>
## PartialDifferentialEquationClassification.secondOrderPrincipalPart

`pub fn second_order_principal_part(&self) -> Result<Option<PartialDifferentialEquationPrincipalPart>, JsError>`

Returns `Result<Option<partial_differential_equation_principal_part>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_fullcoefficients.2156a699a3a9"></a>
## PartialDifferentialEquationCoefficientData.fullCoefficients

`pub fn full_coefficients(&self) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>`

Returns `Option<Vec<partial_differential_equation_jet_coefficient>>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_highestordercoefficients.5bfc08a1eccb"></a>
## PartialDifferentialEquationCoefficientData.highestOrderCoefficients

`pub fn highest_order_coefficients(&self) -> Option<Vec<PartialDifferentialEquationJetCoefficient>>`

Returns `Option<Vec<partial_differential_equation_jet_coefficient>>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_homogeneous.a3fec03b183d"></a>
## PartialDifferentialEquationCoefficientData.homogeneous

`pub fn homogeneous(&self) -> Option<bool>`

Returns `Option<bool>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoefficientdata_remainder.a984a804d378"></a>
## PartialDifferentialEquationCoefficientData.remainder

`pub fn remainder(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_forwardcoordinates.0aa8930b1189"></a>
## PartialDifferentialEquationCoordinateChange.forwardCoordinates

`pub fn forward_coordinates(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_inversecoordinates.97aaa96afdd2"></a>
## PartialDifferentialEquationCoordinateChange.inverseCoordinates

`pub fn inverse_coordinates(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_jacobian.598b8fca5781"></a>
## PartialDifferentialEquationCoordinateChange.jacobian

`pub fn jacobian(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_serializeobject.15bd50391c28"></a>
## PartialDifferentialEquationCoordinateChange.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_sourcevariables.5479a3ea67d3"></a>
## PartialDifferentialEquationCoordinateChange.sourceVariables

`pub fn source_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetdependentfunction.8f8a6f1e66f4"></a>
## PartialDifferentialEquationCoordinateChange.targetDependentFunction

`pub fn target_dependent_function(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_targetvariables.f70dbe969aba"></a>
## PartialDifferentialEquationCoordinateChange.targetVariables

`pub fn target_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationcoordinatechange_tostring.1cfabe94bc27"></a>
## PartialDifferentialEquationCoordinateChange.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_coefficient.517fdfbfa0c1"></a>
## PartialDifferentialEquationJetCoefficient.coefficient

`pub fn coefficient(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationjetcoefficient_derivativeorders.e19d6b4d3f6d"></a>
## PartialDifferentialEquationJetCoefficient.derivativeOrders

`pub fn derivative_orders(&self) -> Vec<usize>`

Returns `Vec<usize>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_method.e9c325f17c27"></a>
## PartialDifferentialEquationMethodCandidate.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationmethodcandidate_proofobligations.11ee48d0dcf5"></a>
## PartialDifferentialEquationMethodCandidate.proofObligations

`pub fn proof_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_admitsadditivesolutionsymmetry.330e9c43133f"></a>
## PartialDifferentialEquationPointSymmetryAction.admitsAdditiveSolutionSymmetry

`pub fn admits_additive_solution_symmetry(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_amplitude.2730e8b0bc62"></a>
## PartialDifferentialEquationPointSymmetryAction.amplitude

`pub fn amplitude(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseed.219eb332d48f"></a>
## PartialDifferentialEquationPointSymmetryAction.appliedToSeed

`pub fn applied_to_seed(&self, seed: &UndefinedFunction) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_appliedtoseedwithadditivesolution.8948049973bd"></a>
## PartialDifferentialEquationPointSymmetryAction.appliedToSeedWithAdditiveSolution

`pub fn applied_to_seed_with_additive_solution(&self, seed: &UndefinedFunction, additive_solution: &UndefinedFunction) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_decline.f20fea2d2f62"></a>
## PartialDifferentialEquationPointSymmetryAction.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_intertwining.0394334328b6"></a>
## PartialDifferentialEquationPointSymmetryAction.intertwining

`pub fn intertwining(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_invertibility.47467c701e0d"></a>
## PartialDifferentialEquationPointSymmetryAction.invertibility

`pub fn invertibility(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_multiplier.fdf69e36ea5d"></a>
## PartialDifferentialEquationPointSymmetryAction.multiplier

`pub fn multiplier(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_outstandingobligations.38f9613fa70d"></a>
## PartialDifferentialEquationPointSymmetryAction.outstandingObligations

`pub fn outstanding_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_parameters.05581d4b2818"></a>
## PartialDifferentialEquationPointSymmetryAction.parameters

`pub fn parameters(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_pointsymmetrydecline.6d0421f48d8e"></a>
## PartialDifferentialEquationPointSymmetryAction.pointSymmetryDecline

`pub fn point_symmetry_decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryaction_transformedcoordinates.52e1713096aa"></a>
## PartialDifferentialEquationPointSymmetryAction.transformedCoordinates

`pub fn transformed_coordinates(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_admitsadditivesolutionsymmetry.f5647b5468e6"></a>
## PartialDifferentialEquationPointSymmetryAlgebra.admitsAdditiveSolutionSymmetry

`pub fn admits_additive_solution_symmetry(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_basis.eddc9c0c01b2"></a>
## PartialDifferentialEquationPointSymmetryAlgebra.basis

`pub fn basis(&self) -> Vec<PartialDifferentialEquationPointSymmetryGenerator>`

Returns `Vec<partial_differential_equation_point_symmetry_generator>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_decline.5d9e716a25c4"></a>
## PartialDifferentialEquationPointSymmetryAlgebra.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_determiningequations.f099cf8497a9"></a>
## PartialDifferentialEquationPointSymmetryAlgebra.determiningEquations

`pub fn determining_equations(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_generalgenerator.2a0fc0383ec8"></a>
## PartialDifferentialEquationPointSymmetryAlgebra.generalGenerator

`pub fn general_generator(&self) -> Option<PartialDifferentialEquationPointSymmetryGenerator>`

Returns `Option<partial_differential_equation_point_symmetry_generator>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_outstandingobligations.824f1b8956b3"></a>
## PartialDifferentialEquationPointSymmetryAlgebra.outstandingObligations

`pub fn outstanding_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetryalgebra_parameters.0390dacb6c08"></a>
## PartialDifferentialEquationPointSymmetryAlgebra.parameters

`pub fn parameters(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_coordinateinfinitesimals.abdbda70555b"></a>
## PartialDifferentialEquationPointSymmetryGenerator.coordinateInfinitesimals

`pub fn coordinate_infinitesimals(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationpointsymmetrygenerator_dependentinfinitesimal.f8f04bc3c924"></a>
## PartialDifferentialEquationPointSymmetryGenerator.dependentInfinitesimal

`pub fn dependent_infinitesimal(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_coefficient.c6dd1d226399"></a>
## PartialDifferentialEquationPrincipalCoefficient.coefficient

`pub fn coefficient(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalcoefficient_derivativeorders.e1f27e9ced4d"></a>
## PartialDifferentialEquationPrincipalCoefficient.derivativeOrders

`pub fn derivative_orders(&self) -> Vec<usize>`

Returns `Vec<usize>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_derivativecoefficients.6a4bbb5c5d56"></a>
## PartialDifferentialEquationPrincipalPart.derivativeCoefficients

`pub fn derivative_coefficients(&self) -> Vec<PartialDifferentialEquationPrincipalCoefficient>`

Returns `Vec<partial_differential_equation_principal_coefficient>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationprincipalpart_matrix.f4debc79ad6d"></a>
## PartialDifferentialEquationPrincipalPart.matrix

`pub fn matrix(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_boundaryconditions.b75ca8d49cd1"></a>
## PartialDifferentialEquationProblem.boundaryConditions

`pub fn boundary_conditions(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_dependentfunction.9db624a214dc"></a>
## PartialDifferentialEquationProblem.dependentFunction

`pub fn dependent_function(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_equation.f2fc4e648569"></a>
## PartialDifferentialEquationProblem.equation

`pub fn equation(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_independentvariables.99881275f85e"></a>
## PartialDifferentialEquationProblem.independentVariables

`pub fn independent_variables(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_initialconditions.de63373e4edb"></a>
## PartialDifferentialEquationProblem.initialConditions

`pub fn initial_conditions(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_serializeobject.cf6d279e96f9"></a>
## PartialDifferentialEquationProblem.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tolatex.101fc04fe4e5"></a>
## PartialDifferentialEquationProblem.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationproblem_tostring.fe62b42acbb0"></a>
## PartialDifferentialEquationProblem.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_cases.f4b384b5a07a"></a>
## PartialDifferentialEquationSecondOrderClassification.cases

`pub fn cases(&self) -> Vec<PartialDifferentialEquationSecondOrderTypeCase>`

Returns `Vec<partial_differential_equation_second_order_type_case>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_decline.db4e6719bf15"></a>
## PartialDifferentialEquationSecondOrderClassification.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_discriminant.153d7de9dec8"></a>
## PartialDifferentialEquationSecondOrderClassification.discriminant

`pub fn discriminant(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_equationtype.5766d4f3f662"></a>
## PartialDifferentialEquationSecondOrderClassification.equationType

`pub fn equation_type(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_principalmatrix.b9bafb7174f6"></a>
## PartialDifferentialEquationSecondOrderClassification.principalMatrix

`pub fn principal_matrix(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_proofobligations.76f844e0e913"></a>
## PartialDifferentialEquationSecondOrderClassification.proofObligations

`pub fn proof_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondorderclassification_verdict.46c046f2c01d"></a>
## PartialDifferentialEquationSecondOrderClassification.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_condition.742ceaffa3e1"></a>
## PartialDifferentialEquationSecondOrderTypeCase.condition

`pub fn condition(&self) -> crate::context::AssumptionProposition`

Returns `crate::context::assumption_proposition`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsecondordertypecase_equationtype.46e990429976"></a>
## PartialDifferentialEquationSecondOrderTypeCase.equationType

`pub fn equation_type(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_independentvariablename.a79c661191a7"></a>
## PartialDifferentialEquationSeparatedEquation.independentVariableName

`pub fn independent_variable_name(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparatedequation_residual.72f18ca86550"></a>
## PartialDifferentialEquationSeparatedEquation.residual

`pub fn residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_firstequation.14ab74e83d20"></a>
## PartialDifferentialEquationSeparationResult.firstEquation

`pub fn first_equation(&self) -> PartialDifferentialEquationSeparatedEquation`

Returns `partial_differential_equation_separated_equation`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_reconstruction.b551c6f2c2ad"></a>
## PartialDifferentialEquationSeparationResult.reconstruction

`pub fn reconstruction(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_secondequation.f18381889044"></a>
## PartialDifferentialEquationSeparationResult.secondEquation

`pub fn second_equation(&self) -> PartialDifferentialEquationSeparatedEquation`

Returns `partial_differential_equation_separated_equation`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_separationconstant.338e7b674f0f"></a>
## PartialDifferentialEquationSeparationResult.separationConstant

`pub fn separation_constant(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_strategy.4d4c9656d5f2"></a>
## PartialDifferentialEquationSeparationResult.strategy

`pub fn strategy(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationseparationresult_verification.af2ce21b75f8"></a>
## PartialDifferentialEquationSeparationResult.verification

`pub fn verification(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_decline.852cf946c2d7"></a>
## PartialDifferentialEquationSimilaritySolution.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_invariant.4e6ff8b4195d"></a>
## PartialDifferentialEquationSimilaritySolution.invariant

`pub fn invariant(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedconstants.d399bdf3e958"></a>
## PartialDifferentialEquationSimilaritySolution.liftedConstants

`pub fn lifted_constants(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamily.16b78a7aae96"></a>
## PartialDifferentialEquationSimilaritySolution.liftedFamily

`pub fn lifted_family(&self) -> Option<PartialDifferentialEquationSolutionFamily>`

Returns `Option<partial_differential_equation_solution_family>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_liftedfamilyverification.1f24d4d5c876"></a>
## PartialDifferentialEquationSimilaritySolution.liftedFamilyVerification

`pub fn lifted_family_verification(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_multiplier.700502405026"></a>
## PartialDifferentialEquationSimilaritySolution.multiplier

`pub fn multiplier(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_outstandingobligations.e0f2330fa97f"></a>
## PartialDifferentialEquationSimilaritySolution.outstandingObligations

`pub fn outstanding_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_reducedequation.cbe6c8378679"></a>
## PartialDifferentialEquationSimilaritySolution.reducedEquation

`pub fn reduced_equation(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_similarityvariable.434aacc2d08e"></a>
## PartialDifferentialEquationSimilaritySolution.similarityVariable

`pub fn similarity_variable(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsimilaritysolution_weight.1ec0dcff27a1"></a>
## PartialDifferentialEquationSimilaritySolution.weight

`pub fn weight(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_arbitraryfunctions.65e4b98a96a7"></a>
## PartialDifferentialEquationSolutionFamily.arbitraryFunctions

`pub fn arbitrary_functions(&self) -> Result<Vec<PartialDifferentialEquationArbitraryFunction>, JsError>`

Returns `Result<Vec<partial_differential_equation_arbitrary_function>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_establishescompleteness.57026acb665d"></a>
## PartialDifferentialEquationSolutionFamily.establishesCompleteness

`pub fn establishes_completeness(&self) -> Result<bool, JsError>`

Returns `Result<bool, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_expression.466f56fd3a0c"></a>
## PartialDifferentialEquationSolutionFamily.expression

`pub fn expression(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_form.8966e9fa5d06"></a>
## PartialDifferentialEquationSolutionFamily.form

`pub fn form(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionfamily_proofobligations.e5dda376598b"></a>
## PartialDifferentialEquationSolutionFamily.proofObligations

`pub fn proof_obligations(&self) -> Result<Vec<String>, JsError>`

Returns `Result<Vec<String>, JsError>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_dischargedobligations.346e920762b6"></a>
## PartialDifferentialEquationSolutionProvenance.dischargedObligations

`pub fn discharged_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_linearity.1ab08a772397"></a>
## PartialDifferentialEquationSolutionProvenance.linearity

`pub fn linearity(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_method.4df0ae777fd3"></a>
## PartialDifferentialEquationSolutionProvenance.method

`pub fn method(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolutionprovenance_order.988d5c9e0775"></a>
## PartialDifferentialEquationSolutionProvenance.order

`pub fn order(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_classification.2086e21405ea"></a>
## PartialDifferentialEquationSolveResult.classification

`pub fn classification(&self) -> Option<PartialDifferentialEquationClassification>`

Returns `Option<partial_differential_equation_classification>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_decline.661f84740037"></a>
## PartialDifferentialEquationSolveResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_method.f888cfb04f38"></a>
## PartialDifferentialEquationSolveResult.method

`pub fn method(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_provenance.df5113fd5021"></a>
## PartialDifferentialEquationSolveResult.provenance

`pub fn provenance(&self) -> Option<PartialDifferentialEquationSolutionProvenance>`

Returns `Option<partial_differential_equation_solution_provenance>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_solution.9dcf8cda0dd0"></a>
## PartialDifferentialEquationSolveResult.solution

`pub fn solution(&self) -> Option<PartialDifferentialEquationSolutionFamily>`

Returns `Option<partial_differential_equation_solution_family>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verdict.ddbb1f7390b2"></a>
## PartialDifferentialEquationSolveResult.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationsolveresult_verification.625c06465450"></a>
## PartialDifferentialEquationSolveResult.verification

`pub fn verification(&self) -> Option<PartialDifferentialEquationVerificationReport>`

Returns `Option<partial_differential_equation_verification_report>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_coordinatechange.8d17b2f53859"></a>
## PartialDifferentialEquationTransformationResult.coordinateChange

`pub fn coordinate_change(&self) -> Option<PartialDifferentialEquationCoordinateChange>`

Returns `Option<partial_differential_equation_coordinate_change>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_decline.421dc5aa6263"></a>
## PartialDifferentialEquationTransformationResult.decline

`pub fn decline(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_normalizationmultiplier.1196debbcaa4"></a>
## PartialDifferentialEquationTransformationResult.normalizationMultiplier

`pub fn normalization_multiplier(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_targetproblem.b42721033cee"></a>
## PartialDifferentialEquationTransformationResult.targetProblem

`pub fn target_problem(&self) -> Option<PartialDifferentialEquationProblem>`

Returns `Option<partial_differential_equation_problem>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationresult_transformed.7b1b402944f8"></a>
## PartialDifferentialEquationTransformationResult.transformed

`pub fn transformed(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_claimedgoverningresidual.0461d4db2c4c"></a>
## PartialDifferentialEquationTransformationVerificationReport.claimedGoverningResidual

`pub fn claimed_governing_residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_compositionresiduals.d94d4f97f722"></a>
## PartialDifferentialEquationTransformationVerificationReport.compositionResiduals

`pub fn composition_residuals(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_jacobian.59d33834bad1"></a>
## PartialDifferentialEquationTransformationVerificationReport.jacobian

`pub fn jacobian(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_principalcongruenceresiduals.83be7441a1af"></a>
## PartialDifferentialEquationTransformationVerificationReport.principalCongruenceResiduals

`pub fn principal_congruence_residuals(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_transformedgoverningresidual.d3784149f15e"></a>
## PartialDifferentialEquationTransformationVerificationReport.transformedGoverningResidual

`pub fn transformed_governing_residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationtransformationverificationreport_verdict.b1e430c993fe"></a>
## PartialDifferentialEquationTransformationVerificationReport.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_boundaryconditionresiduals.1c35c85c2d81"></a>
## PartialDifferentialEquationVerificationReport.boundaryConditionResiduals

`pub fn boundary_condition_residuals(&self) -> Vec<PartialDifferentialEquationVerificationResidual>`

Returns `Vec<partial_differential_equation_verification_residual>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_explicitbranch.4065ca30e756"></a>
## PartialDifferentialEquationVerificationReport.explicitBranch

`pub fn explicit_branch(&self) -> Option<Expression>`

Returns `Option<expression>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_governingresidual.816de73fe328"></a>
## PartialDifferentialEquationVerificationReport.governingResidual

`pub fn governing_residual(&self) -> PartialDifferentialEquationVerificationResidual`

Returns `partial_differential_equation_verification_residual`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_inconclusivereason.31d73a309d82"></a>
## PartialDifferentialEquationVerificationReport.inconclusiveReason

`pub fn inconclusive_reason(&self) -> Option<String>`

Returns `Option<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_initialconditionresiduals.84ad90fe1dfe"></a>
## PartialDifferentialEquationVerificationReport.initialConditionResiduals

`pub fn initial_condition_residuals(&self) -> Vec<PartialDifferentialEquationVerificationResidual>`

Returns `Vec<partial_differential_equation_verification_residual>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_proofobligations.b11b03c7f975"></a>
## PartialDifferentialEquationVerificationReport.proofObligations

`pub fn proof_obligations(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationreport_verdict.2c5adb81b6f5"></a>
## PartialDifferentialEquationVerificationReport.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_residual.7de4cbc4eaa6"></a>
## PartialDifferentialEquationVerificationResidual.residual

`pub fn residual(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.partialdifferentialequationverificationresidual_verdict.f1c9965647a6"></a>
## PartialDifferentialEquationVerificationResidual.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.point2d.dca54a617fe2"></a>
## Point2d

`pub fn new(x: &Expression, y: &Expression) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_coordinates.16f05ca0798a"></a>
## Point2d.coordinates

`pub fn coordinates(&self) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_distanceto.7fec84f47201"></a>
## Point2d.distanceTo

`pub fn distance_to(&self, other: &Point2d) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_intersection.031a02927b5c"></a>
## Point2d.intersection

`pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

Returns `Result<Box<[JsValue]>, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_serializeobject.aa39b3c501d6"></a>
## Point2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_tolatex.f41c507935a0"></a>
## Point2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_tostring.dcea6d65a5d8"></a>
## Point2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_x.c0a31a0b13c6"></a>
## Point2d.x

`pub fn x(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.point2d_y.09cc1987c90a"></a>
## Point2d.y

`pub fn y(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d.4810488732bd"></a>
## Polygon2d

`pub fn new(vertices: Vec<Point2d>) -> Result<Polygon2d, JsError>`

Returns `Result<polygon_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_area.7c6f2cf22633"></a>
## Polygon2d.area

`pub fn area(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_centroid.5adb349efb75"></a>
## Polygon2d.centroid

`pub fn centroid(&self) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_interiorangles.d871d0f39590"></a>
## Polygon2d.interiorAngles

`pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, JsError>`

Returns `Result<Vec<vertex_angle>, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_intersection.5d3e8cf15ec1"></a>
## Polygon2d.intersection

`pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

Returns `Result<Box<[JsValue]>, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_perimeter.a5ef1f895818"></a>
## Polygon2d.perimeter

`pub fn perimeter(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_serializeobject.db8e31e4b335"></a>
## Polygon2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_tolatex.b367ecb5ca3c"></a>
## Polygon2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.polygon2d_tostring.1f9c721c2fbb"></a>
## Polygon2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_complete.106326740c8a"></a>
## PolynomialSystemSolution.complete

`pub fn complete(&self) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_solutions.5cd1b9755b44"></a>
## PolynomialSystemSolution.solutions

`pub fn solutions(&self) -> Vec<SystemAssignment>`

Returns `Vec<system_assignment>`.

<a id="placement-placement.wasm.wasm_class.polynomialsystemsolution_verdict.b9cd1af2a7ce"></a>
## PolynomialSystemSolution.verdict

`pub fn verdict(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.primefactor_multiplicity.97bc281ba687"></a>
## PrimeFactor.multiplicity

`pub fn multiplicity(&self) -> u32`

Returns `u32`.

<a id="placement-placement.wasm.wasm_class.primefactor_prime.9007ad578131"></a>
## PrimeFactor.prime

`pub fn prime(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_initialterms.c0053bbd2c9d"></a>
## QuadraticContinuedFractionExpansion.initialTerms

`pub fn initial_terms(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.quadraticcontinuedfractionexpansion_periodicterms.c7ae5216de14"></a>
## QuadraticContinuedFractionExpansion.periodicTerms

`pub fn periodic_terms(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_canonicalform.fa5f7876399d"></a>
## RationalCanonicalForm.canonicalForm

`pub fn canonical_form(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_characteristicpolynomial.62eae1d83074"></a>
## RationalCanonicalForm.characteristicPolynomial

`pub fn characteristic_polynomial(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_invariantfactors.ab13f6a73bd5"></a>
## RationalCanonicalForm.invariantFactors

`pub fn invariant_factors(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_minimalpolynomial.78ee02aaf497"></a>
## RationalCanonicalForm.minimalPolynomial

`pub fn minimal_polynomial(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.rationalcanonicalform_similarity.d2577308ef20"></a>
## RationalCanonicalForm.similarity

`pub fn similarity(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.rootmultiplicity_multiplicity.38126e35ea48"></a>
## RootMultiplicity.multiplicity

`pub fn multiplicity(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.rootmultiplicity_root.27ae91435854"></a>
## RootMultiplicity.root

`pub fn root(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.segment2d.119b443ccd78"></a>
## Segment2d

`pub fn new(start: &Point2d, end: &Point2d) -> Result<Segment2d, JsError>`

Returns `Result<segment_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_intersection.f98c7d6bf866"></a>
## Segment2d.intersection

`pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

Returns `Result<Box<[JsValue]>, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_length.b45e4ea3f5e4"></a>
## Segment2d.length

`pub fn length(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_midpoint.62abdcfc22e3"></a>
## Segment2d.midpoint

`pub fn midpoint(&self) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_perpendicularbisectorequation.d8f930147b9c"></a>
## Segment2d.perpendicularBisectorEquation

`pub fn perpendicular_bisector_equation(&self, variable_x: &str, variable_y: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_serializeobject.47c37e175e6d"></a>
## Segment2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_tolatex.e2e4c68ded95"></a>
## Segment2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.segment2d_tostring.e994a8c59a1e"></a>
## Segment2d.toString

`pub fn to_js_string(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.setenumeration_elements.521d21fa5162"></a>
## SetEnumeration.elements

`pub fn elements(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.setenumeration_outcome.7db4df413ad1"></a>
## SetEnumeration.outcome

`pub fn outcome(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_columntransformation.9b91a0b807db"></a>
## SmithNormalFormDecomposition.columnTransformation

`pub fn column_transformation(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_invariantfactors.429da175d3de"></a>
## SmithNormalFormDecomposition.invariantFactors

`pub fn invariant_factors(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rank.25c1ef898b6b"></a>
## SmithNormalFormDecomposition.rank

`pub fn rank(&self) -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_rowtransformation.29118694c1ef"></a>
## SmithNormalFormDecomposition.rowTransformation

`pub fn row_transformation(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.smithnormalformdecomposition_smith.a82ae363b1ec"></a>
## SmithNormalFormDecomposition.smith

`pub fn smith(&self) -> Matrix`

Returns `matrix`.

<a id="placement-placement.wasm.wasm_class.systemassignment_values.6def767a335c"></a>
## SystemAssignment.values

`pub fn values(&self) -> Vec<Expression>`

Returns `Vec<expression>`.

<a id="placement-placement.wasm.wasm_class.systemassignment_variables.b13c40d79d8c"></a>
## SystemAssignment.variables

`pub fn variables(&self) -> Vec<String>`

Returns `Vec<String>`.

<a id="placement-placement.wasm.wasm_class.triangle2d.73179d4e894b"></a>
## Triangle2d

`pub fn new(point_a: &Point2d, point_b: &Point2d, point_c: &Point2d) -> Result<Triangle2d, JsError>`

Returns `Result<triangle_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_area.33cc19cca2b3"></a>
## Triangle2d.area

`pub fn area(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_centroid.7503e63742f6"></a>
## Triangle2d.centroid

`pub fn centroid(&self) -> Result<Point2d, JsError>`

Returns `Result<point_2d, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_interiorangles.4cd4d0d93fa8"></a>
## Triangle2d.interiorAngles

`pub fn interior_angles(&self) -> Result<Vec<VertexAngle>, JsError>`

Returns `Result<Vec<vertex_angle>, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_intersection.bbb401de2277"></a>
## Triangle2d.intersection

`pub fn intersection(&self, other: &JsValue) -> Result<Box<[JsValue]>, JsError>`

Returns `Result<Box<[JsValue]>, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_perimeter.227221b7c2c3"></a>
## Triangle2d.perimeter

`pub fn perimeter(&self) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_serializeobject.75e809239ee9"></a>
## Triangle2d.serializeObject

`pub fn serialize_object(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_tolatex.2dd59c291c87"></a>
## Triangle2d.toLatex

`pub fn to_latex(&self) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_class.triangle2d_tostring.63289bc04e2d"></a>
## Triangle2d.toString

`pub fn to_js_string(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.undefinedfunction_call.b0d6218d5723"></a>
## UndefinedFunction.call

`pub fn call(&self, args: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.undefinedfunction_derivative.19e919814456"></a>
## UndefinedFunction.derivative

`pub fn derivative(&self, orders: Vec<usize>, arguments: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_class.undefinedfunction_tostring.e24a69e52de8"></a>
## UndefinedFunction.toString

`pub fn to_js_string(&self) -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_class.vertexangle_angle.987977655236"></a>
## VertexAngle.angle

`pub fn angle(&self) -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_class.vertexangle_vertex.bbfbe7953588"></a>
## VertexAngle.vertex

`pub fn vertex(&self) -> Point2d`

Returns `point_2d`.

<a id="placement-placement.wasm.wasm_module.module_abs.3346979e2e3e"></a>
## module.abs

`fn abs(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_addassumptions.4a919b81fb21"></a>
## module.addAssumptions

`fn add_assumptions(proposition: &AssumptionProposition) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_algebraicassumption.cadab791299a"></a>
## module.algebraicAssumption

`fn algebraic_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arccos.64eb38298d92"></a>
## module.arccos

`fn arccos(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arccosh.c9cc3fd80813"></a>
## module.arccosh

`fn arccosh(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arccot.d67736f7d772"></a>
## module.arccot

`fn arccot(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arccoth.53ec83d35724"></a>
## module.arccoth

`fn arccoth(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arccsc.963a346a021c"></a>
## module.arccsc

`fn arccsc(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arccsch.24e8a1e67daf"></a>
## module.arccsch

`fn arccsch(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arcsec.c8a0041cc409"></a>
## module.arcsec

`fn arcsec(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arcsech.47496bc1390d"></a>
## module.arcsech

`fn arcsech(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arcsin.e6003a8e88b5"></a>
## module.arcsin

`fn arcsin(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arcsinh.93841ccf5c75"></a>
## module.arcsinh

`fn arcsinh(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arctan.94640543b210"></a>
## module.arctan

`fn arctan(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_arctanh.9edfb410a017"></a>
## module.arctanh

`fn arctanh(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ask.610563575f46"></a>
## module.ask

`fn ask(proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_assuming.57d83b3bc98a"></a>
## module.assuming

`fn assuming(proposition: &AssumptionProposition) -> Result<crate::context::AssumptionScope, JsError>`

Returns `Result<crate::context::assumption_scope, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_assumptionpropositionfromlogicalexpression.135c42fd1172"></a>
## module.assumptionPropositionFromLogicalExpression

`fn assumption_proposition_from_logical_expression(logical_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_assumptionsof.55389b6d8956"></a>
## module.assumptionsOf

`fn assumptions_of(name: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_bellnumber.e556ba988a19"></a>
## module.bellNumber

`fn bell_number(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_beta.f91b83241a08"></a>
## module.beta

`fn beta(x: &Expression, y: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_binomial.730ef71fff39"></a>
## module.binomial

`fn binomial(n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_cancel.a2f399282cbb"></a>
## module.cancel

`fn cancel(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_canonicalizepartialdifferentialequation.be642e9771be"></a>
## module.canonicalizePartialDifferentialEquation

`fn canonicalize_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationCanonicalizationResult, JsError>`

Returns `Result<partial_differential_equation_canonicalization_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrc.dd3341aeb043"></a>
## module.carlsonRc

`fn carlson_rc(first_argument: &Expression, second_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrd.26b89bd7eade"></a>
## module.carlsonRd

`fn carlson_rd(first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrf.8415cba14475"></a>
## module.carlsonRf

`fn carlson_rf(first_argument: &Expression, second_argument: &Expression, third_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_carlsonrj.6686de7356a8"></a>
## module.carlsonRj

`fn carlson_rj(first_argument: &Expression, second_argument: &Expression, third_argument: &Expression, fourth_argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_catalannumber.9e04d6cc190d"></a>
## module.catalanNumber

`fn catalan_number(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ceiling.ea4214d28a60"></a>
## module.ceiling

`fn ceiling(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_changemonomialorder.fd8d2e8526b4"></a>
## module.changeMonomialOrder

`fn change_monomial_order(basis: Vec<Expression>, variables: Vec<String>, source_order: String, target_order: String) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_changepartialdifferentialequationvariables.9fe6a5fa1ccc"></a>
## module.changePartialDifferentialEquationVariables

`fn change_partial_differential_equation_variables(problem: &PartialDifferentialEquationProblem, target_variables: Vec<String>, forward_coordinates: Option<Vec<Expression>>, inverse_coordinates: Option<Vec<Expression>>, target_dependent_function: Option<UndefinedFunction>) -> Result<PartialDifferentialEquationTransformationResult, JsError>`

Returns `Result<partial_differential_equation_transformation_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_characteristicfunction.6bcf8578c6fc"></a>
## module.characteristicFunction

`fn characteristic_function(random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialfirstkind.ebde5c207b56"></a>
## module.chebyshevPolynomialFirstKind

`fn chebyshev_polynomial_first_kind(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_chebyshevpolynomialsecondkind.c943050fbb05"></a>
## module.chebyshevPolynomialSecondKind

`fn chebyshev_polynomial_second_kind(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_chineseremainder.f3bf8937649c"></a>
## module.chineseRemainder

`fn chinese_remainder(residues_and_moduli: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_classifypartialdifferentialequation.a666c997e176"></a>
## module.classifyPartialDifferentialEquation

`fn classify_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationClassification, JsError>`

Returns `Result<partial_differential_equation_classification, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_classifysecondorderpartialdifferentialequation.37e1c5283f6c"></a>
## module.classifySecondOrderPartialDifferentialEquation

`fn classify_second_order_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSecondOrderClassification, JsError>`

Returns `Result<partial_differential_equation_second_order_classification, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_classifyunconstrained.016594913f0d"></a>
## module.classifyUnconstrained

`fn classify_unconstrained(objective: &Expression, variables: Vec<String>, point_variables: Vec<String>, point_values: Vec<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_clearallassumptions.0db5db87e18d"></a>
## module.clearAllAssumptions

`fn clear_all_assumptions() -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_clearassumptions.b12f408b3470"></a>
## module.clearAssumptions

`fn clear_assumptions(name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_coefficient.b04c0fe2497b"></a>
## module.coefficient

`fn coefficient(input_expression: &Expression, variable: &str, power: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_collect.891acef02c13"></a>
## module.collect

`fn collect(input_expression: &Expression, generator: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_collectradicals.618f2f1f120b"></a>
## module.collectRadicals

`fn collect_radicals(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_combinelogarithm.660beda16ea9"></a>
## module.combineLogarithm

`fn combine_logarithm(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_combinepowers.0e25bed4eaab"></a>
## module.combinePowers

`fn combine_powers(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_combinetrigonometric.82565a45a596"></a>
## module.combineTrigonometric

`fn combine_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_comparerealroots.f56fb469e237"></a>
## module.compareRealRoots

`fn compare_real_roots(first_expression: &Expression, first_variable: &str, first_index: usize, second_expression: &Expression, second_variable: &str, second_index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_completethesquare.bf40d9a8b764"></a>
## module.completeTheSquare

`fn complete_the_square(input_expression: &Expression, variable: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_complexassumption.1304cbe2e12a"></a>
## module.complexAssumption

`fn complex_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_complexentries.e48f22cc70fa"></a>
## module.complexEntries

`fn complex_entries(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_complexplane.a46c1c83bcc0"></a>
## module.complexPlane

`fn complex_plane() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_compositeassumption.3b1dc4123512"></a>
## module.compositeAssumption

`fn composite_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_conditionset.ea293f0d117b"></a>
## module.conditionSet

`fn condition_set(variable: &str, condition: &Expression, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_congruencemodulus.17e549d7616a"></a>
## module.congruenceModulus

`fn congruence_modulus(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_congruentassumption.906a88486d5e"></a>
## module.congruentAssumption

`fn congruent_assumption(left: &Expression, right: &Expression, modulus: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_conjugate.6c7c642fd60f"></a>
## module.conjugate

`fn conjugate(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_conjunctivenormalform.18125e7d91b4"></a>
## module.conjunctiveNormalForm

`fn conjunctive_normal_form(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_constructpartialdifferentialequationpointsymmetryaction.6b50472b60fd"></a>
## module.constructPartialDifferentialEquationPointSymmetryAction

`fn construct_partial_differential_equation_point_symmetry_action(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAction, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_action, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_continuedfractionquadraticirrational.dcf0d429e737"></a>
## module.continuedFractionQuadraticIrrational

`fn continued_fraction_quadratic_irrational(value: &Expression) -> Result<QuadraticContinuedFractionExpansion, JsError>`

Returns `Result<quadratic_continued_fraction_expansion, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_continuedfractionrational.c51caff08918"></a>
## module.continuedFractionRational

`fn continued_fraction_rational(value: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_continuousdomain.d9adfbfd1afb"></a>
## module.continuousDomain

`fn continuous_domain(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_cos.e22dd1cddf4b"></a>
## module.cos

`fn cos(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_cosh.7a957d886cb2"></a>
## module.cosh

`fn cosh(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_cot.5f368ffa03f9"></a>
## module.cot

`fn cot(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_coth.1dcf0ef2fba2"></a>
## module.coth

`fn coth(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_couldhold.4201d9b1b3bb"></a>
## module.couldHold

`fn could_hold(proposition: &AssumptionProposition) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_countdistinctrealroots.ea05a875dba1"></a>
## module.countDistinctRealRoots

`fn count_distinct_real_roots(input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_covariance.7f07c38ba9fc"></a>
## module.covariance

`fn covariance(left: &Expression, right: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_csc.7065ea694039"></a>
## module.csc

`fn csc(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_csch.4d44335294b8"></a>
## module.csch

`fn csch(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_cumulant.81f780dfe410"></a>
## module.cumulant

`fn cumulant(random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_cumulativedistribution.6fed2a150b33"></a>
## module.cumulativeDistribution

`fn cumulative_distribution(random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_curl.04cc2d24b092"></a>
## module.curl

`fn curl(vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_defaultcontext.6f6779c9ec73"></a>
## module.defaultContext

`fn default_context() -> Context`

Returns `context`.

<a id="placement-placement.wasm.wasm_module.module_definedassumption.5219edfb0174"></a>
## module.definedAssumption

`fn defined_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_degree.b2d823ac32d1"></a>
## module.degree

`fn degree(input_expression: &Expression, variable: &str) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_denestpowers.73ac4ed785a7"></a>
## module.denestPowers

`fn denest_powers(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_denestradicals.56dce14cb552"></a>
## module.denestRadicals

`fn denest_radicals(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_denominator.b4393447d319"></a>
## module.denominator

`fn denominator(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_density.cd2642291cfe"></a>
## module.density

`fn density(random_variable: &Expression, point: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_derivative.6c2f52be0c02"></a>
## module.derivative

`fn derivative(input_expression: &Expression, variable: &str, order: Option<usize>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_derivepartialdifferentialequationpointsymmetries.772574d4d35d"></a>
## module.derivePartialDifferentialEquationPointSymmetries

`fn derive_partial_differential_equation_point_symmetries(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationPointSymmetryAlgebra, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_algebra, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_deserializeassumptionproposition.4165a4b54429"></a>
## module.deserializeAssumptionProposition

`fn deserialize_assumption_proposition(text: &str) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_diagonalmatrix.0b4ff30c00c6"></a>
## module.diagonalMatrix

`fn diagonal_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_differentiate.4f7ff0e7c9f8"></a>
## module.differentiate

`fn differentiate(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_differentiatebulk.88e9636eaec7"></a>
## module.differentiateBulk

`fn differentiate_bulk(targets: Vec<Expression>, variable: &Expression) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_digamma.0d3732417250"></a>
## module.digamma

`fn digamma(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_discoverpartialdifferentialequation.8b0d6696025b"></a>
## module.discoverPartialDifferentialEquation

`fn discover_partial_differential_equation(equation: &Expression, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_disjunctivenormalform.5d44449a582f"></a>
## module.disjunctiveNormalForm

`fn disjunctive_normal_form(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_distribution.a8ab95ab5293"></a>
## module.distribution

`fn distribution(name: &str, parameters: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_divergence.22455ef9ce79"></a>
## module.divergence

`fn divergence(vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_divisorcount.3d6aaad82ca7"></a>
## module.divisorCount

`fn divisor_count(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_divisorsigma.2a53ddc533d7"></a>
## module.divisorSigma

`fn divisor_sigma(n: &Expression, power: u32) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_e.52105aa78b4d"></a>
## module.e

`fn e() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_eliminatederivedlogicalconnectives.86334ce1fe59"></a>
## module.eliminateDerivedLogicalConnectives

`fn eliminate_derived_logical_connectives(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_eliminatequantifiers.7b682b252104"></a>
## module.eliminateQuantifiers

`fn eliminate_quantifiers(matrix: &Expression, quantifiers: Vec<String>, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_eliminationideal.99af73451cd1"></a>
## module.eliminationIdeal

`fn elimination_ideal(generators: Vec<Expression>, variables: Vec<String>, eliminate: Vec<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_elliptice.77784ec06567"></a>
## module.ellipticE

`fn elliptic_e(parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticeincomplete.07191f89a2c0"></a>
## module.ellipticEIncomplete

`fn elliptic_e_incomplete(amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticf.7cc3c6a31f32"></a>
## module.ellipticF

`fn elliptic_f(amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_elliptick.89c8ca5ccda5"></a>
## module.ellipticK

`fn elliptic_k(parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticpi.eb8d10ebaaa5"></a>
## module.ellipticPi

`fn elliptic_pi(characteristic: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ellipticpiincomplete.9b0df8832d4d"></a>
## module.ellipticPiIncomplete

`fn elliptic_pi_incomplete(characteristic: &Expression, amplitude: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_emptyset.bc3dac94e421"></a>
## module.emptySet

`fn empty_set() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_enumeratesetininterval.389b8414264e"></a>
## module.enumerateSetInInterval

`fn enumerate_set_in_interval(set: &Expression, lower: &Expression, upper: &Expression, lower_inclusive: Option<bool>, upper_inclusive: Option<bool>, limit: Option<usize>) -> Result<SetEnumeration, JsError>`

Returns `Result<set_enumeration, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_equal.8d132f8ca4bd"></a>
## module.equal

`fn equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_equalassumption.24d5230bded4"></a>
## module.equalAssumption

`fn equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_eulergamma.d492a76c1776"></a>
## module.eulerGamma

`fn euler_gamma() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_eulertotient.4cd7de9cfaf0"></a>
## module.eulerTotient

`fn euler_totient(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatelimit.0f1c024103e7"></a>
## module.evaluateLimit

`fn evaluate_limit(input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatenumeric.b3592a20461b"></a>
## module.evaluateNumeric

`fn evaluate_numeric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatenumericbulk.408fe965e833"></a>
## module.evaluateNumericBulk

`fn evaluate_numeric_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluateongrid.68b32c74ae82"></a>
## module.evaluateOnGrid

`fn evaluate_on_grid(input_expression: &Expression, variable: &str, x_values: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluateongridpoints.dee0c2c92540"></a>
## module.evaluateOnGridPoints

`fn evaluate_on_grid_points(input_expression: &Expression, variables: Vec<String>, points: Vec<f64>) -> Result<Vec<f64>, JsError>`

Returns `Result<Vec<f64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evaluatetruth.fb0e4e2d9223"></a>
## module.evaluateTruth

`fn evaluate_truth(input_expression: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_evenassumption.edd68ccb590f"></a>
## module.evenAssumption

`fn even_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_execute.046976fb1643"></a>
## module.execute

`fn execute(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_executionmode.d4cea0f8949e"></a>
## module.executionMode

`fn execution_mode() -> String`

Returns `String`.

<a id="placement-placement.wasm.wasm_module.module_exp.8b7300d911be"></a>
## module.exp

`fn exp(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expand.debe9b25c914"></a>
## module.expand

`fn expand(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandbulk.9bd6e6330993"></a>
## module.expandBulk

`fn expand_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandcomplex.882987d16cbf"></a>
## module.expandComplex

`fn expand_complex(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandlogarithm.c138343492e9"></a>
## module.expandLogarithm

`fn expand_logarithm(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandpowerbase.b3c245130f9d"></a>
## module.expandPowerBase

`fn expand_power_base(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expandtrigonometric.af837d1e113e"></a>
## module.expandTrigonometric

`fn expand_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_expectation.4574bc9e8615"></a>
## module.expectation

`fn expectation(target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_explicitpartialdifferentialequationsolution.71efe41cb42c"></a>
## module.explicitPartialDifferentialEquationSolution

`fn explicit_partial_differential_equation_solution(solution: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_extendedeuclidean.83f8fd6d7934"></a>
## module.extendedEuclidean

`fn extended_euclidean(a: &Expression, b: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_extendedrealassumption.b6b7622d86b1"></a>
## module.extendedRealAssumption

`fn extended_real_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_factor.1a856a4538bd"></a>
## module.factor

`fn factor(input_expression: &Expression, gaussian: Option<bool>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_factorcommonterms.83f0674fae02"></a>
## module.factorCommonTerms

`fn factor_common_terms(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_factorinteger.7be59b319dec"></a>
## module.factorInteger

`fn factor_integer(n: &Expression) -> Result<Vec<PrimeFactor>, JsError>`

Returns `Result<Vec<prime_factor>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_factorial.5a0581f6a74d"></a>
## module.factorial

`fn factorial(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fallingfactorial.cf3717768829"></a>
## module.fallingFactorial

`fn falling_factorial(base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fibonaccinumber.b645e018b9c3"></a>
## module.fibonacciNumber

`fn fibonacci_number(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_finiteassumption.6ae53821afcc"></a>
## module.finiteAssumption

`fn finite_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_finiteset.149f36c22cd9"></a>
## module.finiteSet

`fn finite_set(elements: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_floor.44548369db27"></a>
## module.floor

`fn floor(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fouriertransform.7a1b272e817d"></a>
## module.fourierTransform

`fn fourier_transform(input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_fullrankmatrix.545a4d2aa24c"></a>
## module.fullRankMatrix

`fn full_rank_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_gamma.c6aee0f501e6"></a>
## module.gamma

`fn gamma(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_gegenbauerpolynomial.2785173f26a1"></a>
## module.gegenbauerPolynomial

`fn gegenbauer_polynomial(degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_generalizedlaguerrepolynomial.4f16cbeb161f"></a>
## module.generalizedLaguerrePolynomial

`fn generalized_laguerre_polynomial(degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_globaloptimumonsemialgebraic.22ed79a5f317"></a>
## module.globalOptimumOnSemialgebraic

`fn global_optimum_on_semialgebraic(objective: &Expression, constraints: &Expression, variables: Vec<String>, direction: &str) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_gradient.5e6c59111568"></a>
## module.gradient

`fn gradient(scalar_field: &Expression, variables: Vec<String>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterassumption.a5eb42bf8f9c"></a>
## module.greaterAssumption

`fn greater_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterorequalassumption.775238806940"></a>
## module.greaterOrEqualAssumption

`fn greater_or_equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterthan.3093032cb367"></a>
## module.greaterThan

`fn greater_than(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_greaterthanorequal.50b0a6698716"></a>
## module.greaterThanOrEqual

`fn greater_than_or_equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_groebnerbasis.5de4c9b11109"></a>
## module.groebnerBasis

`fn groebner_basis(generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hermitepolynomial.748805216715"></a>
## module.hermitePolynomial

`fn hermite_polynomial(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hermitianmatrix.561dfa80b073"></a>
## module.hermitianMatrix

`fn hermitian_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hessian.c1073609193d"></a>
## module.hessian

`fn hessian(scalar_field: &Expression, variables: Vec<String>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontroladdress.a36df668e7b8"></a>
## module.hostCancellationControlAddress

`fn host_cancellation_control_address() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationcontrolbytelength.eedb6cf20393"></a>
## module.hostCancellationControlByteLength

`fn host_cancellation_control_byte_length() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationrequested.254657584a52"></a>
## module.hostCancellationRequested

`fn host_cancellation_requested(slot_index: usize, ticket: u32) -> bool`

Returns `bool`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotcount.4101f6d428a3"></a>
## module.hostCancellationSlotCount

`fn host_cancellation_slot_count() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_hostcancellationslotticket.31ee528c4115"></a>
## module.hostCancellationSlotTicket

`fn host_cancellation_slot_ticket(slot_index: usize) -> u32`

Returns `u32`.

<a id="placement-placement.wasm.wasm_module.module_hurwitzzeta.729040f89142"></a>
## module.hurwitzZeta

`fn hurwitz_zeta(s: &Expression, a: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometric0f1.cef7a55e5327"></a>
## module.hypergeometric0f1

`fn hypergeometric_0f1(lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometric1f1.f872b9c5d868"></a>
## module.hypergeometric1f1

`fn hypergeometric_1f1(upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometric2f1.b66e8a62c1b1"></a>
## module.hypergeometric2f1

`fn hypergeometric_2f1(first_upper_parameter: &Expression, second_upper_parameter: &Expression, lower_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_hypergeometricpfq.10c7ad6981f0"></a>
## module.hypergeometricPfq

`fn hypergeometric_pfq(upper_parameters: Vec<Expression>, lower_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealintersection.6e49de3034aa"></a>
## module.idealIntersection

`fn ideal_intersection(generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealmembership.c719b9f17e53"></a>
## module.idealMembership

`fn ideal_membership(element: &Expression, generators: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealproduct.fe3132e266f0"></a>
## module.idealProduct

`fn ideal_product(generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_idealsum.0fe68881ed36"></a>
## module.idealSum

`fn ideal_sum(generators_left: Vec<Expression>, generators_right: Vec<Expression>, variables: Vec<String>, order: Option<String>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_identitymatrix.06589077f324"></a>
## module.identityMatrix

`fn identity_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_imageset.d648714b36fe"></a>
## module.imageSet

`fn image_set(lambda_expression: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_imaginarypart.8a82c066b15a"></a>
## module.imaginaryPart

`fn imaginary_part(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_imaginaryunit.ca0641437159"></a>
## module.imaginaryUnit

`fn imaginary_unit() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_implicitpartialdifferentialequationsolution.c7079e45bc6e"></a>
## module.implicitPartialDifferentialEquationSolution

`fn implicit_partial_differential_equation_solution(residual: &Expression, arbitrary_functions: Option<Vec<PartialDifferentialEquationArbitraryFunction>>, proof_obligations: Option<Vec<String>>) -> Result<PartialDifferentialEquationSolutionFamily, JsError>`

Returns `Result<partial_differential_equation_solution_family, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_implicitize.a997715b9750"></a>
## module.implicitize

`fn implicitize(coordinates: Vec<String>, parameters: Vec<String>, parametric_expressions: Vec<Expression>) -> Result<Option<Vec<Expression>>, JsError>`

Returns `Result<Option<Vec<expression>>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_infiniteassumption.30902fe0a9f6"></a>
## module.infiniteAssumption

`fn infinite_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_infinity.d225021217a9"></a>
## module.infinity

`fn infinity() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_initthreadpoolwithcapability.356307fe3c6a"></a>
## module.initThreadPoolWithCapability

`fn init_thread_pool_with_capability(worker_count: usize) -> Promise`

Returns `js_sys::Promise`.

<a id="placement-placement.wasm.wasm_module.module_initializeparallelism.cf57f2d301bc"></a>
## module.initializeParallelism

`fn initialize_parallelism(worker_count: usize) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integer.f6358fe8b988"></a>
## module.integer

`fn integer(value: i64) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerassumption.bf2080c26dc3"></a>
## module.integerAssumption

`fn integer_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerentries.98584eadce94"></a>
## module.integerEntries

`fn integer_entries(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerfromstring.f1a005df6d84"></a>
## module.integerFromString

`fn integer_from_string(text: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integergcd.880435e4defa"></a>
## module.integerGcd

`fn integer_gcd(a: &Expression, b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerlcm.da4013a527d4"></a>
## module.integerLcm

`fn integer_lcm(a: &Expression, b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integernthroot.93c0396df8ee"></a>
## module.integerNthRoot

`fn integer_nth_root(n: &Expression, root_index: u64) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integerset.5179601c652e"></a>
## module.integerSet

`fn integer_set() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_integersquareroot.061948d4b3be"></a>
## module.integerSquareRoot

`fn integer_square_root(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integral.eee25ebf5a0e"></a>
## module.integral

`fn integral(integrand: &Expression, variable: &str, lower: Option<Expression>, upper: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integrate.ba7c5019b6c5"></a>
## module.integrate

`fn integrate(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefinite.580dccd9f9e3"></a>
## module.integrateDefinite

`fn integrate_definite(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefinitedetailed.249aed840c82"></a>
## module.integrateDefiniteDetailed

`fn integrate_definite_detailed(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, interpretation: Option<String>, constraint: Option<Expression>) -> Result<DefiniteIntegrationResult, JsError>`

Returns `Result<definite_integration_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefinitenumeric.57c38757b75e"></a>
## module.integrateDefiniteNumeric

`fn integrate_definite_numeric(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, precision_bits: u32) -> Result<NumericDefiniteIntegrationResult, JsError>`

Returns `Result<NumericDefiniteIntegrationResult, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integratedefiniteunderconstraint.b38208ce9b58"></a>
## module.integrateDefiniteUnderConstraint

`fn integrate_definite_under_constraint(input_expression: &Expression, variable: &str, lower: &Expression, upper: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_integrateiterated.a2a1f9fb1ef7"></a>
## module.integrateIterated

`fn integrate_iterated(input_expression: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_internerlength.16f9ad37f8f3"></a>
## module.internerLength

`fn interner_length() -> usize`

Returns `usize`.

<a id="placement-placement.wasm.wasm_module.module_interval.9788b55cf0be"></a>
## module.interval

`fn interval(lower: &Expression, upper: &Expression, lower_open: Option<bool>, upper_open: Option<bool>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_introducederivedlogicalconnectives.83816a1b06a4"></a>
## module.introduceDerivedLogicalConnectives

`fn introduce_derived_logical_connectives(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_inversefouriertransform.c756e25c95bb"></a>
## module.inverseFourierTransform

`fn inverse_fourier_transform(input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_inverselaplacetransform.b9494a36f07b"></a>
## module.inverseLaplaceTransform

`fn inverse_laplace_transform(input_expression: &Expression, frequency_variable: &str, time_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_invertiblematrix.f6ca9c5a4fd1"></a>
## module.invertibleMatrix

`fn invertible_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_irrationalassumption.a422ee432156"></a>
## module.irrationalAssumption

`fn irrational_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ismember.1e1e670a4cc3"></a>
## module.isMember

`fn is_member(element: &Expression, set: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_isprime.2c60d7745885"></a>
## module.isPrime

`fn is_prime(n: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_issubset.895b73859022"></a>
## module.isSubset

`fn is_subset(set_a: &Expression, set_b: &Expression) -> Result<Option<bool>, JsError>`

Returns `Result<Option<bool>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_isolaterealroots.fdc9ee498713"></a>
## module.isolateRealRoots

`fn isolate_real_roots(input_expression: &Expression, variable: &str) -> Result<Vec<IsolatingInterval>, JsError>`

Returns `Result<Vec<isolating_interval>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobiamplitude.d177051aba22"></a>
## module.jacobiAmplitude

`fn jacobi_amplitude(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobicn.17eb37a567b9"></a>
## module.jacobiCn

`fn jacobi_cn(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobidn.e6c3ec6d7a4e"></a>
## module.jacobiDn

`fn jacobi_dn(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobipolynomial.74ad8252890c"></a>
## module.jacobiPolynomial

`fn jacobi_polynomial(degree: &Expression, first_parameter: &Expression, second_parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobisn.a5c00c764a10"></a>
## module.jacobiSn

`fn jacobi_sn(argument: &Expression, parameter: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobisymbol.c3f360d8c1d2"></a>
## module.jacobiSymbol

`fn jacobi_symbol(numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta1.7a2497134f65"></a>
## module.jacobiTheta1

`fn jacobi_theta_1(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta2.be1168718010"></a>
## module.jacobiTheta2

`fn jacobi_theta_2(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta3.00271ffa7a15"></a>
## module.jacobiTheta3

`fn jacobi_theta_3(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobitheta4.1dd493afad49"></a>
## module.jacobiTheta4

`fn jacobi_theta_4(argument: &Expression, tau: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_jacobian.9371d4f76961"></a>
## module.jacobian

`fn jacobian(vector_components: Vec<Expression>, variables: Vec<String>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_karushkuhntuckerpoints.a8ef1c2fbad2"></a>
## module.karushKuhnTuckerPoints

`fn karush_kuhn_tucker_points(objective: &Expression, inequality_constraints: Vec<Expression>, equality_constraints: Vec<Expression>, variables: Vec<String>) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_kroneckersymbol.fe2e8066bdaf"></a>
## module.kroneckerSymbol

`fn kronecker_symbol(numerator: &Expression, denominator: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lagrangecriticalpoints.bc240aa51629"></a>
## module.lagrangeCriticalPoints

`fn lagrange_critical_points(objective: &Expression, constraints: Vec<Expression>, variables: Vec<String>) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_laguerrepolynomial.52100b9b20ee"></a>
## module.laguerrePolynomial

`fn laguerre_polynomial(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_laplacetransform.e8b317b65c63"></a>
## module.laplaceTransform

`fn laplace_transform(input_expression: &Expression, time_variable: &str, frequency_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_laplacian.441c89e28847"></a>
## module.laplacian

`fn laplacian(scalar_field: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_laurentseries.0b961aee8cd4"></a>
## module.laurentSeries

`fn laurent_series(input_expression: &Expression, variable: &str, center: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_leadingcoefficient.612cd4c6aaf2"></a>
## module.leadingCoefficient

`fn leading_coefficient(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_leftoperand.76fb7332aadf"></a>
## module.leftOperand

`fn left_operand(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_legendrepolynomial.50ac16a05e94"></a>
## module.legendrePolynomial

`fn legendre_polynomial(degree: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_legendresymbol.d3d4b7dcbf1d"></a>
## module.legendreSymbol

`fn legendre_symbol(numerator: &Expression, prime: &Expression) -> Result<i32, JsError>`

Returns `Result<i32, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lerchphi.81f4f0c65935"></a>
## module.lerchPhi

`fn lerch_phi(argument: &Expression, order: &Expression, shift: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessassumption.8fc95f457c3b"></a>
## module.lessAssumption

`fn less_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessorequalassumption.9485a709d841"></a>
## module.lessOrEqualAssumption

`fn less_or_equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessthan.bc55302e0173"></a>
## module.lessThan

`fn less_than(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_lessthanorequal.c97b335533ab"></a>
## module.lessThanOrEqual

`fn less_than_or_equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_limit.09bfaf02cffb"></a>
## module.limit

`fn limit(input_expression: &Expression, variable: &str, point: &Expression, direction: Option<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_log.38cd13720085"></a>
## module.log

`fn log(x: &Expression, base: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_loggamma.9e2c3da58bd0"></a>
## module.logGamma

`fn log_gamma(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_logicalfalse.6aee9d3550be"></a>
## module.logicalFalse

`fn logical_false() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_logicaltrue.8c894af8e323"></a>
## module.logicalTrue

`fn logical_true() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_lowertriangularmatrix.3932d732657f"></a>
## module.lowerTriangularMatrix

`fn lower_triangular_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_maclaurinseries.607a15898ae4"></a>
## module.maclaurinSeries

`fn maclaurin_series(input_expression: &Expression, variable: &str, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixdiagonal.05ae03868956"></a>
## module.matrixDiagonal

`fn matrix_diagonal(entries: Vec<Expression>) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixidentity.80b062f41bf7"></a>
## module.matrixIdentity

`fn matrix_identity(size: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixshape.3371cecbb4ef"></a>
## module.matrixShape

`fn matrix_shape(subject: &Matrix, rows: usize, columns: usize) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_matrixzero.47364d1ef8a0"></a>
## module.matrixZero

`fn matrix_zero(rows: usize, columns: usize) -> Result<Matrix, JsError>`

Returns `Result<matrix, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_max.9ad2a66d39c5"></a>
## module.max

`fn max(arguments: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_meijerg.c09fa2551e5f"></a>
## module.meijerG

`fn meijer_g(upper_numerator_parameters: Vec<Expression>, upper_denominator_parameters: Vec<Expression>, lower_numerator_parameters: Vec<Expression>, lower_denominator_parameters: Vec<Expression>, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_memberassumption.d3aa17ab5d8c"></a>
## module.memberAssumption

`fn member_assumption(element: &Expression, set_expression: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_membershipelement.8ef3bf1bc659"></a>
## module.membershipElement

`fn membership_element(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_membershipset.b2235c74f247"></a>
## module.membershipSet

`fn membership_set(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_min.079bca1de077"></a>
## module.min

`fn min(arguments: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_minimalpolynomialof.79c2bb8f41d9"></a>
## module.minimalPolynomialOf

`fn minimal_polynomial_of(input_expression: &Expression, variable: &str) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_minimizelogical.b1927e04de80"></a>
## module.minimizeLogical

`fn minimize_logical(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_mobius.eb52d1e05d93"></a>
## module.mobius

`fn mobius(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_modularinverse.89b1fb456696"></a>
## module.modularInverse

`fn modular_inverse(value: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_modularpower.c5fc06c4c577"></a>
## module.modularPower

`fn modular_power(base: &Expression, exponent: &Expression, modulus: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_moment.2520aabf6538"></a>
## module.moment

`fn moment(random_variable: &Expression, order: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_momentgeneratingfunction.7320c47b4aec"></a>
## module.momentGeneratingFunction

`fn moment_generating_function(random_variable: &Expression, auxiliary_variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_multinomial.9170c8108eb5"></a>
## module.multinomial

`fn multinomial(parts: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_naturalassumption.3ab80dcb8d03"></a>
## module.naturalAssumption

`fn natural_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_negativeassumption.a7d23b923406"></a>
## module.negativeAssumption

`fn negative_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_nonnegativeassumption.cd1162dab735"></a>
## module.nonnegativeAssumption

`fn nonnegative_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_nonpositiveassumption.d8eddd870b43"></a>
## module.nonpositiveAssumption

`fn nonpositive_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_nonzeroassumption.76b8b5800ccd"></a>
## module.nonzeroAssumption

`fn nonzero_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_normalmatrix.73c5d372a8ef"></a>
## module.normalMatrix

`fn normal_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_notequal.e71bd58fd421"></a>
## module.notEqual

`fn not_equal(left: &Expression, right: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_notequalassumption.c25dc8a01655"></a>
## module.notEqualAssumption

`fn not_equal_assumption(left: &Expression, right: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_numerator.86af5abc3af7"></a>
## module.numerator

`fn numerator(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_numeratordenominator.ed37930aa207"></a>
## module.numeratorDenominator

`fn numerator_denominator(input_expression: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_oddassumption.6299ce7886a7"></a>
## module.oddAssumption

`fn odd_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_orthogonalmatrix.5841526b40e6"></a>
## module.orthogonalMatrix

`fn orthogonal_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parallelismcapability.1e9632969c40"></a>
## module.parallelismCapability

`fn parallelism_capability() -> crate::context::ParallelismCapability`

Returns `ParallelismCapability`.

<a id="placement-placement.wasm.wasm_module.module_parse.d3722c05cfb1"></a>
## module.parse

`fn parse(text: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parselatex.f6216d8e0b47"></a>
## module.parseLatex

`fn parse_latex(latex: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parselatexwithenvironment.0d0f63f757f1"></a>
## module.parseLatexWithEnvironment

`fn parse_latex_with_environment(latex: &str, serialized_definitions: Box<[JsValue]>) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_parseserializedobject.d18b5b415e87"></a>
## module.parseSerializedObject

`fn parse_serialized_object(text: &str) -> Result<JsValue, JsError>`

Returns `Result<JsValue, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequation.cbe5f4689b94"></a>
## module.partialDifferentialEquation

`fn partial_differential_equation(equation: &Expression, dependent_function: &UndefinedFunction, independent_variables: Vec<String>, initial_conditions: Option<Vec<Expression>>, boundary_conditions: Option<Vec<Expression>>) -> Result<PartialDifferentialEquationProblem, JsError>`

Returns `Result<partial_differential_equation_problem, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_partialdifferentialequationpointsymmetrygenerator.90c8b91663b5"></a>
## module.partialDifferentialEquationPointSymmetryGenerator

`fn partial_differential_equation_point_symmetry_generator(problem: &PartialDifferentialEquationProblem, coordinate_infinitesimals: Vec<Expression>, dependent_infinitesimal: &Expression) -> Result<PartialDifferentialEquationPointSymmetryGenerator, JsError>`

Returns `Result<partial_differential_equation_point_symmetry_generator, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_partialfractions.35aaeff54bae"></a>
## module.partialFractions

`fn partial_fractions(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_partitioncount.626fcc1e58d6"></a>
## module.partitionCount

`fn partition_count(n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_pellsolutions.746cfa175fdd"></a>
## module.pellSolutions

`fn pell_solutions(radicand: &Expression, count: usize) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_pi.0a6bfb246d23"></a>
## module.pi

`fn pi() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_piecewise.c246b4400df8"></a>
## module.piecewise

`fn piecewise(branches: Vec<Expression>, otherwise: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_piecewisefold.e933070f4d72"></a>
## module.piecewiseFold

`fn piecewise_fold(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_poleorder.13e4b7d7d589"></a>
## module.poleOrder

`fn pole_order(input_expression: &Expression, variable: &str, center: &Expression) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_polygamma.79d3cb4f4460"></a>
## module.polygamma

`fn polygamma(order: &Expression, x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_polylogarithm.8ff9e7750a6e"></a>
## module.polylogarithm

`fn polylogarithm(order: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_polynomialgcd.5dff4635a3c4"></a>
## module.polynomialGcd

`fn polynomial_gcd(a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_polynomialroot.72fc790efc20"></a>
## module.polynomialRoot

`fn polynomial_root(input_expression: &Expression, variable: &str, index: usize) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positiveassumption.c2f3eab58e85"></a>
## module.positiveAssumption

`fn positive_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positivedefinitematrix.3e3360ff18c5"></a>
## module.positiveDefiniteMatrix

`fn positive_definite_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positiveintegerassumption.25753e25c658"></a>
## module.positiveIntegerAssumption

`fn positive_integer_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_positivesemidefinitematrix.6e762c686132"></a>
## module.positiveSemidefiniteMatrix

`fn positive_semidefinite_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_presentationnormalform.53908ce4871d"></a>
## module.presentationNormalForm

`fn presentation_normal_form(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_primeassumption.048f5e3f9f7a"></a>
## module.primeAssumption

`fn prime_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_probability.048a1136670a"></a>
## module.probability

`fn probability(predicate: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_product.4b346b85255f"></a>
## module.product

`fn product(multiplicand: &Expression, index: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_productindefinite.fd08393adc04"></a>
## module.productIndefinite

`fn product_indefinite(multiplicand: &Expression, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_randomvariable.88bac8365ef0"></a>
## module.randomVariable

`fn random_variable(name: &str, distribution: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rational.b3d3524e7701"></a>
## module.rational

`fn rational(numerator: &str, denominator: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rationalassumption.12ebaab24804"></a>
## module.rationalAssumption

`fn rational_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rationalfromfloat.2868d823dc35"></a>
## module.rationalFromFloat

`fn rational_from_float(value: f64, max_denominator: u64) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rationalizedenominator.ba11f83ec318"></a>
## module.rationalizeDenominator

`fn rationalize_denominator(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realassumption.926ab7bf4766"></a>
## module.realAssumption

`fn real_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realentries.7d6debcfcb29"></a>
## module.realEntries

`fn real_entries(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realline.d150784a3d9d"></a>
## module.realLine

`fn real_line() -> Expression`

Returns `expression`.

<a id="placement-placement.wasm.wasm_module.module_realpart.030dff7e14eb"></a>
## module.realPart

`fn real_part(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realrootcount.73ae1dfc30f1"></a>
## module.realRootCount

`fn real_root_count(input_expression: &Expression, variable: &str, lower: i64, upper: i64) -> Result<Option<usize>, JsError>`

Returns `Result<Option<usize>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_realrootsign.0daf97e8a58c"></a>
## module.realRootSign

`fn real_root_sign(input_expression: &Expression, variable: &str, index: usize) -> Result<Option<i64>, JsError>`

Returns `Result<Option<i64>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_refine.5ab1dc89ad54"></a>
## module.refine

`fn refine(input_expression: &Expression, assumptions: Option<crate::context::AssumptionProposition>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_relationkind.7ff1b1cd4c30"></a>
## module.relationKind

`fn relation_kind(proposition: &AssumptionProposition) -> Result<Option<String>, JsError>`

Returns `Result<Option<String>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_releasehostcancellationslot.0cdb4a4c9d2b"></a>
## module.releaseHostCancellationSlot

`fn release_host_cancellation_slot(slot_index: usize, ticket: u32)`

Returns `()`.

<a id="placement-placement.wasm.wasm_module.module_reservehostcancellationslot.081bf1bf35ab"></a>
## module.reserveHostCancellationSlot

`fn reserve_host_cancellation_slot() -> i32`

Returns `i32`.

<a id="placement-placement.wasm.wasm_module.module_residue.7086b98f8e0d"></a>
## module.residue

`fn residue(input_expression: &Expression, variable: &str, center: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_resultant.fd887f886ff7"></a>
## module.resultant

`fn resultant(a: &Expression, b: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewriteasexponential.2432173e98c8"></a>
## module.rewriteAsExponential

`fn rewrite_as_exponential(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewriteastrigonometric.144585f41e3f"></a>
## module.rewriteAsTrigonometric

`fn rewrite_as_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewriteintermsof.6b03bacbc907"></a>
## module.rewriteInTermsOf

`fn rewrite_in_terms_of(target: &Expression, source: &Expression, replacement: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewritespecialfunctions.dc570b354656"></a>
## module.rewriteSpecialFunctions

`fn rewrite_special_functions(input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rewritetrigonometricbasis.5eb3b463d234"></a>
## module.rewriteTrigonometricBasis

`fn rewrite_trigonometric_basis(input_expression: &Expression, basis: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rightoperand.e696bf40887d"></a>
## module.rightOperand

`fn right_operand(proposition: &AssumptionProposition) -> Result<Option<Expression>, JsError>`

Returns `Result<Option<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_risingfactorial.5558264a15ca"></a>
## module.risingFactorial

`fn rising_factorial(base: &Expression, length: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_root.305a53c2acc8"></a>
## module.root

`fn root(x: &Expression, n: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_rootswithmultiplicities.64f20afdbaa6"></a>
## module.rootsWithMultiplicities

`fn roots_with_multiplicities(input_expression: &Expression, variable: &str) -> Result<Vec<RootMultiplicity>, JsError>`

Returns `Result<Vec<root_multiplicity>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_sec.4d68af5f0033"></a>
## module.sec

`fn sec(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_sech.6fb6206e0865"></a>
## module.sech

`fn sech(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_separatepartialdifferentialequation.39acc8c74690"></a>
## module.separatePartialDifferentialEquation

`fn separate_partial_differential_equation(problem: &PartialDifferentialEquationProblem) -> Result<PartialDifferentialEquationSeparationResult, JsError>`

Returns `Result<partial_differential_equation_separation_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_serialize.7eefdbffab95"></a>
## module.serialize

`fn serialize(proposition: &AssumptionProposition) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_serializebulk.d66dc15ad809"></a>
## module.serializeBulk

`fn serialize_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkTextOutcome>, JsError>`

Returns `Result<Vec<BulkTextOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setcomplement.2a16985668e3"></a>
## module.setComplement

`fn set_complement(set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setexecutionmode.eb3bb85ec56d"></a>
## module.setExecutionMode

`fn set_execution_mode(name: &str) -> Result<(), JsError>`

Returns `Result<(), JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setintersection.2a72a9ce82c8"></a>
## module.setIntersection

`fn set_intersection(set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_setunion.5d97c0bd64f6"></a>
## module.setUnion

`fn set_union(set_a: &Expression, set_b: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplify.fc6200454a69"></a>
## module.simplify

`fn simplify(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifybulk.410bd7966c46"></a>
## module.simplifyBulk

`fn simplify_bulk(targets: Vec<Expression>) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifylogical.c91f7d3e4b36"></a>
## module.simplifyLogical

`fn simplify_logical(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifytrigonometric.ad2187f785f4"></a>
## module.simplifyTrigonometric

`fn simplify_trigonometric(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_simplifyunderconstraint.cd9e5a6a75e2"></a>
## module.simplifyUnderConstraint

`fn simplify_under_constraint(input_expression: &Expression, constraint: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_sin.6bd3d48fdeac"></a>
## module.sin

`fn sin(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_singularmatrix.3fe01d91e635"></a>
## module.singularMatrix

`fn singular_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_singularities.5894dcc61a6b"></a>
## module.singularities

`fn singularities(input_expression: &Expression, variable: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_sinh.1ff5a391d068"></a>
## module.sinh

`fn sinh(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solve.3fdf003ed9a5"></a>
## module.solve

`fn solve(input_expression: &Expression, variable: &str) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantine.c44d14859433"></a>
## module.solveLinearDiophantine

`fn solve_linear_diophantine(coefficients: Vec<Expression>, constant: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvelineardiophantinesystem.f6937abefeef"></a>
## module.solveLinearDiophantineSystem

`fn solve_linear_diophantine_system(coefficient_matrix: &Matrix, constants: Vec<Expression>) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvelinearrecurrence.84dcdba77acf"></a>
## module.solveLinearRecurrence

`fn solve_linear_recurrence(equation: &Expression, sequence_call: &Expression, index_variable: &str, initial_conditions: Option<Vec<Expression>>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvenegativepell.de4fc4dc84c0"></a>
## module.solveNegativePell

`fn solve_negative_pell(radicand: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequation.79ae565de443"></a>
## module.solveOrdinaryDifferentialEquation

`fn solve_ordinary_differential_equation(equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, initial_conditions: Option<Vec<Expression>>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationrequest.ccf38368c860"></a>
## module.solveOrdinaryDifferentialEquationRequest

`fn solve_ordinary_differential_equation_request(equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, scope: String, condition_residuals: Option<Vec<Expression>>, method: Option<String>, regularity: Option<String>) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationsystemrequest.8607f77ab0ac"></a>
## module.solveOrdinaryDifferentialEquationSystemRequest

`fn solve_ordinary_differential_equation_system_request(equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, condition_residuals: Option<Vec<Expression>>, method: Option<String>) -> Result<OrdinaryDifferentialEquationSystemSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_system_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithhistory.5f497de66d83"></a>
## module.solveOrdinaryDifferentialEquationWithHistory

`fn solve_ordinary_differential_equation_with_history(equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, history_value: &Expression, history_start: &Expression, history_end: &Expression) -> Result<OrdinaryDifferentialEquationSolveResult, JsError>`

Returns `Result<ordinary_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveordinarydifferentialequationwithparticularsolution.9f86687333f8"></a>
## module.solveOrdinaryDifferentialEquationWithParticularSolution

`fn solve_ordinary_differential_equation_with_particular_solution(equation: &Expression, dependent_function_call: &Expression, independent_variable: &str, particular_solution: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequation.4ef3f7b147c7"></a>
## module.solvePartialDifferentialEquation

`fn solve_partial_differential_equation(problem: &PartialDifferentialEquationProblem, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationbysimilarityreduction.f25716664764"></a>
## module.solvePartialDifferentialEquationBySimilarityReduction

`fn solve_partial_differential_equation_by_similarity_reduction(problem: &PartialDifferentialEquationProblem, generator: &PartialDifferentialEquationPointSymmetryGenerator) -> Result<PartialDifferentialEquationSimilaritySolution, JsError>`

Returns `Result<partial_differential_equation_similarity_solution, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationrequest.cd6c143bbccf"></a>
## module.solvePartialDifferentialEquationRequest

`fn solve_partial_differential_equation_request(problem: &PartialDifferentialEquationProblem, scope: String, geometric_domain: Option<String>, regularity: Option<String>, solution_class: Option<String>, method: Option<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepartialdifferentialequationwithtransformaxisspecifications.ec65b3a1b0a4"></a>
## module.solvePartialDifferentialEquationWithTransformAxisSpecifications

`fn solve_partial_differential_equation_with_transform_axis_specifications(problem: &PartialDifferentialEquationProblem, method: String, transform_axis_specifications: Vec<String>) -> Result<PartialDifferentialEquationSolveResult, JsError>`

Returns `Result<partial_differential_equation_solve_result, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepell.e3e4a8d13447"></a>
## module.solvePell

`fn solve_pell(radicand: &Expression) -> Result<Vec<Expression>, JsError>`

Returns `Result<Vec<expression>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvepolynomialsystem.e6845dfe5212"></a>
## module.solvePolynomialSystem

`fn solve_polynomial_system(equations: Vec<Expression>, variables: Vec<String>) -> Result<PolynomialSystemSolution, JsError>`

Returns `Result<polynomial_system_solution, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvesemialgebraic.bc85f1234db9"></a>
## module.solveSemialgebraic

`fn solve_semialgebraic(matrix: &Expression, variables: Vec<String>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solveset.c4d048ff1df8"></a>
## module.solveset

`fn solveset(input_expression: &Expression, variable: &str, domain: Option<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_solvesetindomain.d47c4f18f7ba"></a>
## module.solvesetInDomain

`fn solveset_in_domain(equation: &Expression, variable: &str, domain: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_sqrt.31de3cfa5500"></a>
## module.sqrt

`fn sqrt(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_squarematrix.dd03175ad835"></a>
## module.squareMatrix

`fn square_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_stirlingfirstsigned.5f73261d260b"></a>
## module.stirlingFirstSigned

`fn stirling_first_signed(n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_stirlingsecond.854182aab42c"></a>
## module.stirlingSecond

`fn stirling_second(n: &Expression, k: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_substitutebulk.80cd62071bc5"></a>
## module.substituteBulk

`fn substitute_bulk(targets: Vec<Expression>, variable: &Expression, value: &Expression) -> Result<Vec<crate::context::BulkExpressionOutcome>, JsError>`

Returns `Result<Vec<BulkExpressionOutcome>, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_summation.49ecda1cfd0a"></a>
## module.summation

`fn summation(summand: &Expression, index: &str, lower: &Expression, upper: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_summationindefinite.45acee68c513"></a>
## module.summationIndefinite

`fn summation_indefinite(summand: &Expression, index: &str) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_symbol.acdb4c2a07a3"></a>
## module.symbol

`fn symbol(name: &str, real: Option<bool>, positive: Option<bool>, negative: Option<bool>, integer: Option<bool>, finite: Option<bool>, rational: Option<bool>, natural: Option<bool>, nonzero: Option<bool>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_symmetricmatrix.503a37665d86"></a>
## module.symmetricMatrix

`fn symmetric_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_tan.8842ce8669b1"></a>
## module.tan

`fn tan(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_tanh.efb975b6dbc0"></a>
## module.tanh

`fn tanh(x: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_taylorseries.e1b8fff7e6aa"></a>
## module.taylorSeries

`fn taylor_series(input_expression: &Expression, variable: &str, expansion_point: &Expression, order: usize) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_tolatex.9d339325aaff"></a>
## module.toLatex

`fn to_latex(input_expression: &Expression) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_tolatexwithoptions.91e728aa5fb0"></a>
## module.toLatexWithOptions

`fn to_latex_with_options(input_expression: &Expression, exponential_style: &str, natural_logarithm_style: &str, multiletter_symbol_style: &str) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_together.6ebbfd66d49a"></a>
## module.together

`fn together(input_expression: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_transcendentalassumption.685160fbab59"></a>
## module.transcendentalAssumption

`fn transcendental_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_ultrasphericalpolynomial.bb8eb9784e52"></a>
## module.ultrasphericalPolynomial

`fn ultraspherical_polynomial(degree: &Expression, parameter: &Expression, argument: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_unconstrainedcriticalpoints.73c270b9471a"></a>
## module.unconstrainedCriticalPoints

`fn unconstrained_critical_points(objective: &Expression, variables: Vec<String>) -> Result<OptimizationOutcome, JsError>`

Returns `Result<optimization_outcome, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_unitarymatrix.5678eb6d4ccd"></a>
## module.unitaryMatrix

`fn unitary_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_uppertriangularmatrix.14d1fd7d94d6"></a>
## module.upperTriangularMatrix

`fn upper_triangular_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_variance.1e88b3e35c6d"></a>
## module.variance

`fn variance(target: &Expression, random_variables: Vec<Expression>) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_verifyordinarydifferentialequationsystemsolution.d73b5971c92e"></a>
## module.verifyOrdinaryDifferentialEquationSystemSolution

`fn verify_ordinary_differential_equation_system_solution(equations: Vec<Expression>, dependent_function_calls: Vec<Expression>, independent_variable: &str, components: Vec<Expression>, generated_constants: Vec<Expression>, condition_residuals: Option<Vec<Expression>>) -> Result<OrdinaryDifferentialEquationSystemVerificationReport, JsError>`

Returns `Result<ordinary_differential_equation_system_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationcoordinatetransformation.723f0853a676"></a>
## module.verifyPartialDifferentialEquationCoordinateTransformation

`fn verify_partial_differential_equation_coordinate_transformation(problem: &PartialDifferentialEquationProblem, transformation: &PartialDifferentialEquationTransformationResult) -> Result<PartialDifferentialEquationTransformationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_transformation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_verifypartialdifferentialequationsolution.b86bfbc069d4"></a>
## module.verifyPartialDifferentialEquationSolution

`fn verify_partial_differential_equation_solution(problem: &PartialDifferentialEquationProblem, solution: &PartialDifferentialEquationSolutionFamily) -> Result<PartialDifferentialEquationVerificationReport, JsError>`

Returns `Result<partial_differential_equation_verification_report, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_zeroassumption.999da512137e"></a>
## module.zeroAssumption

`fn zero_assumption(subject: &Expression) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_zeroequivalent.cab9fc362970"></a>
## module.zeroEquivalent

`fn zero_equivalent(input_expression: &Expression, constraint: Option<Expression>) -> Result<String, JsError>`

Returns `Result<String, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_zeromatrix.3561defba5d5"></a>
## module.zeroMatrix

`fn zero_matrix(subject: &Matrix) -> Result<AssumptionProposition, JsError>`

Returns `Result<assumption_proposition, JsError>`.

<a id="placement-placement.wasm.wasm_module.module_zeta.25f1de1c8802"></a>
## module.zeta

`fn zeta(s: &Expression) -> Result<Expression, JsError>`

Returns `Result<expression, JsError>`.
