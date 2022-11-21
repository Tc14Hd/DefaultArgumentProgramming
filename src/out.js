(function f(
  vars0 = {
    ast: undefined,
    meriyah: undefined,
    astring: undefined,
    fs: undefined,
    nodeTypes: undefined,
    ctrlCodes: undefined,
    printNode: undefined,
    merge: undefined,
    getLit: undefined,
    getId: undefined,
    getLogicExpr: undefined,
    getBinExpr: undefined,
    getAssignExpr: undefined,
    getSeq: undefined,
    getCondExpr: undefined,
    getMemberExpr: undefined,
    getCallExpr: undefined,
    getVarsSet: undefined,
    getVarsSetAndExpr: undefined,
    getBodySeq: undefined,
    getDefaultParam: undefined,
    getEmptyFunc: undefined,
    getFuncDecl: undefined,
    getFuncLoop: undefined,
    addLoopCtrl: undefined,
    returnVal: undefined,
    generatePretty: undefined,
    transformSource: undefined,
    transformProgram: undefined,
    transformNode: undefined,
    transformIdentifier: undefined,
    transformMemberExpression: undefined,
    transformProperty: undefined,
    transformCallExpression: undefined,
    transformExpression: undefined,
    transformVariableDeclaration: undefined,
    transformBlockStatement: undefined,
    transformIfStatement: undefined,
    transformWhileStatement: undefined,
    transformDoWhileStatement: undefined,
    transformForStatement: undefined,
    transformForOfStatement: undefined,
    transformBreakStatement: undefined,
    transformContinueStatement: undefined,
    transformSwitchStatement: undefined,
    transformFunctionDeclaration: undefined,
    transformReturnStatement: undefined,
    transformThrowStatement: undefined,
    fileName: undefined,
    debugFlag: undefined,
    source: undefined,
    result: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.printNode = function f(
        args,
        vars1 = {},
        body = (
          vars1.node = args[0],
          (
            (function f(
              object = console,
              args = [(
                (function f(
                  object = JSON,
                  args = [vars1.node, undefined, 2],
                  body = object.stringify.customfunc ? object.stringify(args) : retval = object.stringify(...args)
                ) {})(),
                retval
              )],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.printNode.customfunc = true
    ),
    (
      vars0.merge = function f(
        args,
        vars1 = {
          x: undefined
        },
        body = (
          vars1.s1 = args[0],
          vars1.s2 = args[1],
          (function f(
            it = vars1.s2[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.x = itval.value,
              (
                (function f(
                  object = vars1.s1,
                  args = [vars1.x],
                  body = object.add.customfunc ? object.add(args) : retval = object.add(...args)
                ) {})(),
                retval
              ),
              f(it)
            )
          ) {})(),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.merge.customfunc = true
    ),
    (
      vars0.getLit = function f(
        args,
        vars1 = {},
        body = (
          vars1.value = args[0],
          (
            retval = new vars0.ast.Literal({
              value: vars1.value
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getLit.customfunc = true
    ),
    (
      vars0.getId = function f(
        args,
        vars1 = {},
        body = (
          vars1.name = args[0],
          (
            retval = new vars0.ast.Identifier({
              name: vars1.name
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getId.customfunc = true
    ),
    (
      vars0.getLogicExpr = function f(
        args,
        vars1 = {},
        body = (
          vars1.left = args[0],
          vars1.operator = args[1],
          vars1.right = args[2],
          (
            retval = new vars0.ast.LogicalExpression({
              left: vars1.left,
              right: vars1.right,
              operator: vars1.operator
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getLogicExpr.customfunc = true
    ),
    (
      vars0.getBinExpr = function f(
        args,
        vars1 = {},
        body = (
          vars1.left = args[0],
          vars1.operator = args[1],
          vars1.right = args[2],
          (
            retval = new vars0.ast.BinaryExpression({
              left: vars1.left,
              right: vars1.right,
              operator: vars1.operator
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getBinExpr.customfunc = true
    ),
    (
      vars0.getAssignExpr = function f(
        args,
        vars1 = {},
        body = (
          vars1.left = args[0],
          vars1.operator = args[1],
          vars1.right = args[2],
          (
            retval = new vars0.ast.AssignmentExpression({
              left: vars1.left,
              right: vars1.right,
              operator: vars1.operator
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getAssignExpr.customfunc = true
    ),
    (
      vars0.getSeq = function f(
        args,
        vars1 = {},
        body = (
          vars1.expressions = args[0],
          (
            retval = vars1.expressions.length > 0 ? new vars0.ast.SequenceExpression({
              expressions: vars1.expressions
            }) : (
              (function f(
                object = vars0,
                args = [0],
                body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getSeq.customfunc = true
    ),
    (
      vars0.getCondExpr = function f(
        args,
        vars1 = {},
        body = (
          vars1.test = args[0],
          vars1.consequent = args[1],
          vars1.alternate = args[2],
          (
            retval = new vars0.ast.ConditionalExpression({
              test: vars1.test,
              consequent: vars1.consequent,
              alternate: vars1.alternate
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getCondExpr.customfunc = true
    ),
    (
      vars0.getMemberExpr = function f(
        args,
        vars1 = {},
        body = (
          vars1.object = args[0],
          vars1.property = args[1],
          vars1.computed = args[2],
          (
            retval = new vars0.ast.MemberExpression({
              object: vars1.object,
              property: vars1.property,
              computed: vars1.computed
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getMemberExpr.customfunc = true
    ),
    (
      vars0.getCallExpr = function f(
        args,
        vars1 = {},
        body = (
          vars1.callee = args[0],
          vars1.args = args[1],
          (
            retval = new vars0.ast.CallExpression({
              callee: vars1.callee,
              arguments: vars1.args
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getCallExpr.customfunc = true
    ),
    (
      vars0.getVarsSet = function f(
        args,
        vars1 = {
          varsSet: undefined,
          entry: undefined,
          caseEntry: undefined,
          declaration: undefined
        },
        body = (
          vars1.node = args[0],
          (
            vars1.varsSet = new Set()
          ),
          (function f(
            disc = vars1.node.type,
            fallthru = false,
            body = (
              (fallthru || disc === "BlockStatement") && (
                fallthru = true,
                (function f(
                  it = vars1.node.body[Symbol.iterator](),
                  itval = it.next(),
                  body = itval.done || (
                    vars1.entry = itval.value,
                    (
                      (
                        (function f(
                          object = vars0,
                          args = [vars1.varsSet, (
                            (function f(
                              object = vars0,
                              args = [vars1.entry],
                              body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                            ) {})(),
                            retval
                          )],
                          body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                        ) {})(),
                        retval
                      )
                    ),
                    f(it)
                  )
                ) {})(),
                ctrl = 2
              ),
              ctrl == 0 && ((fallthru || disc === "IfStatement") && (
                fallthru = true,
                (
                  (function f(
                    object = vars0,
                    args = [vars1.varsSet, (
                      (function f(
                        object = vars0,
                        args = [vars1.node.consequent],
                        body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                  ) {})(),
                  retval
                ),
                vars1.node.alternate !== null ? (
                  (
                    (function f(
                      object = vars0,
                      args = [vars1.varsSet, (
                        (function f(
                          object = vars0,
                          args = [vars1.node.alternate],
                          body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                        ) {})(),
                        retval
                      )],
                      body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                    ) {})(),
                    retval
                  )
                ) : 0,
                ctrl = 2
              )),
              ctrl == 0 && ((fallthru || disc === "WhileStatement") && (
                fallthru = true
              )),
              ctrl == 0 && ((fallthru || disc === "DoWhileStatement") && (
                fallthru = true,
                (
                  (function f(
                    object = vars0,
                    args = [vars1.varsSet, (
                      (function f(
                        object = vars0,
                        args = [vars1.node.body],
                        body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                  ) {})(),
                  retval
                ),
                ctrl = 2
              )),
              ctrl == 0 && ((fallthru || disc === "ForStatement") && (
                fallthru = true,
                vars1.node.init !== null ? (
                  (
                    (function f(
                      object = vars0,
                      args = [vars1.varsSet, (
                        (function f(
                          object = vars0,
                          args = [vars1.node.init],
                          body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                        ) {})(),
                        retval
                      )],
                      body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                    ) {})(),
                    retval
                  )
                ) : 0,
                (
                  (function f(
                    object = vars0,
                    args = [vars1.varsSet, (
                      (function f(
                        object = vars0,
                        args = [vars1.node.body],
                        body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                  ) {})(),
                  retval
                ),
                ctrl = 2
              )),
              ctrl == 0 && ((fallthru || disc === "ForOfStatement") && (
                fallthru = true,
                (
                  (function f(
                    object = vars0,
                    args = [vars1.varsSet, (
                      (function f(
                        object = vars0,
                        args = [vars1.node.left],
                        body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                  ) {})(),
                  retval
                ),
                (
                  (function f(
                    object = vars0,
                    args = [vars1.varsSet, (
                      (function f(
                        object = vars0,
                        args = [vars1.node.body],
                        body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                  ) {})(),
                  retval
                ),
                ctrl = 2
              )),
              ctrl == 0 && ((fallthru || disc === "SwitchStatement") && (
                fallthru = true,
                (function f(
                  it = vars1.node.cases[Symbol.iterator](),
                  itval = it.next(),
                  body = itval.done || (
                    vars1.caseEntry = itval.value,
                    (
                      (function f(
                        it = vars1.caseEntry.consequent[Symbol.iterator](),
                        itval = it.next(),
                        body = itval.done || (
                          vars1.entry = itval.value,
                          (
                            (
                              (function f(
                                object = vars0,
                                args = [vars1.varsSet, (
                                  (function f(
                                    object = vars0,
                                    args = [vars1.entry],
                                    body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                                  ) {})(),
                                  retval
                                )],
                                body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                              ) {})(),
                              retval
                            )
                          ),
                          f(it)
                        )
                      ) {})()
                    ),
                    f(it)
                  )
                ) {})(),
                ctrl = 2
              )),
              ctrl == 0 && ((fallthru || disc === "VariableDeclaration") && (
                fallthru = true,
                (function f(
                  it = vars1.node.declarations[Symbol.iterator](),
                  itval = it.next(),
                  body = itval.done || (
                    vars1.declaration = itval.value,
                    (
                      vars1.declaration.id.type === "Identifier" ? (
                        (
                          (function f(
                            object = vars1.varsSet,
                            args = [vars1.declaration.id.name],
                            body = object.add.customfunc ? object.add(args) : retval = object.add(...args)
                          ) {})(),
                          retval
                        )
                      ) : 0
                    ),
                    f(it)
                  )
                ) {})(),
                ctrl = 2
              )),
              ctrl == 0 && ((fallthru || disc === "FunctionDeclaration") && (
                fallthru = true,
                (
                  (function f(
                    object = vars1.varsSet,
                    args = [vars1.node.id.name],
                    body = object.add.customfunc ? object.add(args) : retval = object.add(...args)
                  ) {})(),
                  retval
                ),
                ctrl = 2
              )),
              ctrl == 2 && (ctrl = 0)
            )
          ) {})(),
          ctrl == 0 && (
            retval = vars1.varsSet,
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getVarsSet.customfunc = true
    ),
    (
      vars0.getVarsSetAndExpr = function f(
        args,
        vars1 = {
          varsSet: undefined,
          entry: undefined,
          properties: undefined,
          varName: undefined,
          varsExpr: undefined
        },
        body = (
          vars1.body = args[0],
          (
            vars1.varsSet = new Set()
          ),
          (function f(
            it = vars1.body[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.entry = itval.value,
              (
                (
                  (function f(
                    object = vars0,
                    args = [vars1.varsSet, (
                      (function f(
                        object = vars0,
                        args = [vars1.entry],
                        body = object.getVarsSet.customfunc ? object.getVarsSet(args) : retval = object.getVarsSet(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.merge.customfunc ? object.merge(args) : retval = object.merge(...args)
                  ) {})(),
                  retval
                )
              ),
              f(it)
            )
          ) {})(),
          (
            vars1.properties = []
          ),
          (function f(
            it = vars1.varsSet[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.varName = itval.value,
              (
                (
                  (function f(
                    object = vars1.properties,
                    args = [new vars0.ast.Property({
                      key: (
                        (function f(
                          object = vars0,
                          args = [vars1.varName],
                          body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                        ) {})(),
                        retval
                      ),
                      value: (
                        (function f(
                          object = vars0,
                          args = [undefined],
                          body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                        ) {})(),
                        retval
                      ),
                      kind: "init"
                    })],
                    body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
                  ) {})(),
                  retval
                )
              ),
              f(it)
            )
          ) {})(),
          (
            vars1.varsExpr = new vars0.ast.ObjectExpression({
              properties: vars1.properties
            })
          ),
          (
            retval = {
              varsSet: vars1.varsSet,
              varsExpr: vars1.varsExpr
            },
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getVarsSetAndExpr.customfunc = true
    ),
    (
      vars0.getBodySeq = function f(
        args,
        vars1 = {
          expressions: undefined,
          funcs: undefined,
          ctrl: undefined,
          entry: undefined,
          entryTransformed: undefined,
          entryExpr: undefined,
          bodySeq: undefined
        },
        body = (
          vars1.body = args[0],
          vars1.vars = args[1],
          (
            vars1.expressions = []
          ),
          (
            vars1.funcs = []
          ),
          (
            vars1.ctrl = false
          ),
          (function f(
            it = vars1.body[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.entry = itval.value,
              (
                (
                  vars1.entryTransformed = (
                    (function f(
                      object = vars0,
                      args = [vars1.entry, vars1.vars],
                      body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                    ) {})(),
                    retval
                  )
                ),
                vars1.entryTransformed.func ? (
                  (
                    (function f(
                      object = vars1.funcs,
                      args = [vars1.entryTransformed.expr],
                      body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 1
                ) : 0,
                ctrl == 0 && (
                  vars1.entryExpr = vars1.entryTransformed.expr
                ),
                ctrl == 0 && (vars1.ctrl ? (
                  vars1.entryExpr = (
                    (function f(
                      object = vars0,
                      args = [(
                        (function f(
                          object = vars0,
                          args = [(
                            (function f(
                              object = vars0,
                              args = ["ctrl"],
                              body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                            ) {})(),
                            retval
                          ), "==", (
                            (function f(
                              object = vars0,
                              args = [vars0.ctrlCodes.default],
                              body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                            ) {})(),
                            retval
                          )],
                          body = object.getBinExpr.customfunc ? object.getBinExpr(args) : retval = object.getBinExpr(...args)
                        ) {})(),
                        retval
                      ), "&&", vars1.entryExpr],
                      body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
                    ) {})(),
                    retval
                  )
                ) : 0),
                ctrl == 0 && (
                  (function f(
                    object = vars1.expressions,
                    args = [vars1.entryExpr],
                    body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
                  ) {})(),
                  retval
                ),
                ctrl == 0 && (vars1.ctrl ||= vars1.entryTransformed.ctrl)
              ),
              ctrl < 2 ? (
                ctrl = 0,
                f(it)
              ) : ctrl != 3 && (ctrl = 0)
            )
          ) {})(),
          ctrl == 0 && (
            vars1.bodySeq = (
              (function f(
                object = vars1.funcs,
                args = [vars1.expressions],
                body = object.concat.customfunc ? object.concat(args) : retval = object.concat(...args)
              ) {})(),
              retval
            )
          ),
          ctrl == 0 && (
            retval = {
              bodySeq: vars1.bodySeq,
              ctrl: vars1.ctrl,
              funcs: vars1.funcs,
              expressions: vars1.expressions
            },
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getBodySeq.customfunc = true
    ),
    (
      vars0.getDefaultParam = function f(
        args,
        vars1 = {},
        body = (
          vars1.name = args[0],
          vars1.val = args[1],
          (
            retval = new vars0.ast.AssignmentPattern({
              left: (
                (function f(
                  object = vars0,
                  args = [vars1.name],
                  body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                ) {})(),
                retval
              ),
              right: vars1.val
            }),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getDefaultParam.customfunc = true
    ),
    (
      vars0.getEmptyFunc = function f(
        args,
        vars1 = {
          func: undefined
        },
        body = (
          vars1.params = args[0],
          (
            vars1.func = new vars0.ast.FunctionExpression({
              id: (
                (function f(
                  object = vars0,
                  args = ["f"],
                  body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                ) {})(),
                retval
              ),
              body: new vars0.ast.BlockStatement(),
              params: vars1.params
            })
          ),
          (
            retval = vars1.func,
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getEmptyFunc.customfunc = true
    ),
    (
      vars0.getFuncDecl = function f(
        args,
        vars1 = {
          body: undefined,
          res: undefined,
          varsSet: undefined,
          varsExpr: undefined,
          varsIndex: undefined,
          bodySeq: undefined,
          i: undefined,
          param: undefined,
          idExpr: undefined,
          val: undefined,
          vars: undefined,
          setCond: undefined,
          setRetval: undefined,
          andExpr: undefined,
          resetCtrl: undefined,
          bodyExpr: undefined,
          params: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.varsOld = args[1],
          (
            vars1.body = vars1.node.body.body
          ),
          (
            vars1.res = (
              (function f(
                object = vars0,
                args = [vars1.body],
                body = object.getVarsSetAndExpr.customfunc ? object.getVarsSetAndExpr(args) : retval = object.getVarsSetAndExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.varsSet = vars1.res.varsSet
          ),
          (
            vars1.varsExpr = vars1.res.varsExpr
          ),
          (
            vars1.varsIndex = vars1.varsOld.index + 1
          ),
          (
            vars1.bodySeq = []
          ),
          (
            (
              vars1.i = 0
            ),
            (function f(
              body = vars1.i < vars1.node.params.length && (
                (
                  (
                    vars1.param = vars1.node.params[vars1.i]
                  ),
                  vars1.param.type !== "Identifier" ? (
                    (
                      console.log(new Error(vars1.node.type + " is not supported")),
                      process.exit()
                    )
                  ) : 0,
                  (
                    (function f(
                      object = vars1.varsSet,
                      args = [vars1.param.name],
                      body = object.add.customfunc ? object.add(args) : retval = object.add(...args)
                    ) {})(),
                    retval
                  ),
                  (
                    vars1.idExpr = (
                      (function f(
                        object = vars0,
                        args = [(
                          (function f(
                            object = vars0,
                            args = ["vars" + vars1.varsIndex],
                            body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                          ) {})(),
                          retval
                        ), (
                          (function f(
                            object = vars0,
                            args = [vars1.param.name],
                            body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                          ) {})(),
                          retval
                        ), false],
                        body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                      ) {})(),
                      retval
                    )
                  ),
                  (
                    vars1.val = (
                      (function f(
                        object = vars0,
                        args = [(
                          (function f(
                            object = vars0,
                            args = ["args"],
                            body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                          ) {})(),
                          retval
                        ), (
                          (function f(
                            object = vars0,
                            args = [vars1.i],
                            body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                          ) {})(),
                          retval
                        ), true],
                        body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                      ) {})(),
                      retval
                    )
                  ),
                  (
                    (function f(
                      object = vars1.bodySeq,
                      args = [(
                        (function f(
                          object = vars0,
                          args = [vars1.idExpr, "=", vars1.val],
                          body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                        ) {})(),
                        retval
                      )],
                      body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
                    ) {})(),
                    retval
                  )
                ),
                (
                  vars1.i++,
                  f()
                )
              )
            ) {})()
          ),
          (
            vars1.vars = {
              scopes: [...vars1.varsOld.scopes, vars1.varsSet],
              index: vars1.varsIndex
            }
          ),
          vars1.bodySeq = (
            (function f(
              object = vars1.bodySeq,
              args = [(
                (function f(
                  object = vars0,
                  args = [vars1.body, vars1.vars],
                  body = object.getBodySeq.customfunc ? object.getBodySeq(args) : retval = object.getBodySeq(...args)
                ) {})(),
                retval
              ).bodySeq],
              body = object.concat.customfunc ? object.concat(args) : retval = object.concat(...args)
            ) {})(),
            retval
          ),
          (
            vars1.setCond = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "!=", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.return],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.setRetval = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["retval"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "=", (
                  (function f(
                    object = vars0,
                    args = [undefined],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.andExpr = (
              (function f(
                object = vars0,
                args = [vars1.setCond, "&&", vars1.setRetval],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            (function f(
              object = vars1.bodySeq,
              args = [vars1.andExpr],
              body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
            ) {})(),
            retval
          ),
          (
            vars1.resetCtrl = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "=", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.default],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            (function f(
              object = vars1.bodySeq,
              args = [vars1.resetCtrl],
              body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
            ) {})(),
            retval
          ),
          (
            vars1.bodyExpr = (
              (function f(
                object = vars0,
                args = [vars1.bodySeq],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.params = [(
              (function f(
                object = vars0,
                args = ["args"],
                body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
              ) {})(),
              retval
            ), (
              (function f(
                object = vars0,
                args = ["vars" + vars1.vars.index, vars1.varsExpr],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            ), (
              (function f(
                object = vars0,
                args = ["body", vars1.bodyExpr],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            )]
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [vars1.params],
                body = object.getEmptyFunc.customfunc ? object.getEmptyFunc(args) : retval = object.getEmptyFunc(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getFuncDecl.customfunc = true
    ),
    (
      vars0.getFuncLoop = function f(
        args,
        vars1 = {
          params: undefined,
          symbol: undefined,
          iterator: undefined,
          next: undefined
        },
        body = (
          vars1.bodyExpr = args[0],
          vars1.iterable = args[1],
          (
            vars1.params = []
          ),
          vars1.iterable !== undefined ? (
            (
              vars1.symbol = (
                (function f(
                  object = vars0,
                  args = [(
                    (function f(
                      object = vars0,
                      args = ["Symbol"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), (
                    (function f(
                      object = vars0,
                      args = ["iterator"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), false],
                  body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                ) {})(),
                retval
              )
            ),
            (
              vars1.iterator = (
                (function f(
                  object = vars0,
                  args = [(
                    (function f(
                      object = vars0,
                      args = [vars1.iterable, vars1.symbol, true],
                      body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                    ) {})(),
                    retval
                  ), []],
                  body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
                ) {})(),
                retval
              )
            ),
            (
              (function f(
                object = vars1.params,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["it", vars1.iterator],
                    body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                  ) {})(),
                  retval
                )],
                body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
              ) {})(),
              retval
            ),
            (
              vars1.next = (
                (function f(
                  object = vars0,
                  args = [(
                    (function f(
                      object = vars0,
                      args = ["it"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), (
                    (function f(
                      object = vars0,
                      args = ["next"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), false],
                  body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                ) {})(),
                retval
              )
            ),
            (
              (function f(
                object = vars1.params,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["itval", (
                      (function f(
                        object = vars0,
                        args = [vars1.next, []],
                        body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                  ) {})(),
                  retval
                )],
                body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
              ) {})(),
              retval
            )
          ) : 0,
          (
            (function f(
              object = vars1.params,
              args = [(
                (function f(
                  object = vars0,
                  args = ["body", vars1.bodyExpr],
                  body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                ) {})(),
                retval
              )],
              body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
            ) {})(),
            retval
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [vars1.params],
                body = object.getEmptyFunc.customfunc ? object.getEmptyFunc(args) : retval = object.getEmptyFunc(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.getFuncLoop.customfunc = true
    ),
    (
      vars0.addLoopCtrl = function f(
        args,
        vars1 = {
          nextIterationTest: undefined,
          resetCtrl: undefined,
          resetCtrlTest: undefined,
          nextIteration: undefined,
          breakout: undefined
        },
        body = (
          vars1.expr = args[0],
          (
            vars1.nextIterationTest = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "<", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.break],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getBinExpr.customfunc ? object.getBinExpr(args) : retval = object.getBinExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.resetCtrl = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "=", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.default],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.resetCtrlTest = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "!=", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.return],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getBinExpr.customfunc ? object.getBinExpr(args) : retval = object.getBinExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.nextIteration = (
              (function f(
                object = vars0,
                args = [[vars1.resetCtrl, vars1.expr]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.breakout = (
              (function f(
                object = vars0,
                args = [vars1.resetCtrlTest, "&&", vars1.resetCtrl],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [vars1.nextIterationTest, vars1.nextIteration, vars1.breakout],
                body = object.getCondExpr.customfunc ? object.getCondExpr(args) : retval = object.getCondExpr(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.addLoopCtrl.customfunc = true
    ),
    (
      vars0.returnVal = function f(
        args,
        vars1 = {
          defaultRet: undefined
        },
        body = (
          vars1.ret = args[0],
          (
            vars1.defaultRet = {
              expr: (
                (function f(
                  object = vars0,
                  args = [0],
                  body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                ) {})(),
                retval
              ),
              ctrl: false,
              func: false
            }
          ),
          (
            retval = (
              (function f(
                object = Object,
                args = [vars1.defaultRet, vars1.ret],
                body = object.assign.customfunc ? object.assign(args) : retval = object.assign(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.returnVal.customfunc = true
    ),
    (
      vars0.generatePretty = function f(
        args,
        vars1 = {
          formatSequence: undefined,
          FunctionExpression: undefined,
          SequenceExpression: undefined,
          generator: undefined
        },
        body = (
          vars1.node = args[0],
          (
            vars1.formatSequence = function f(
              args,
              vars2 = {
                generator: undefined,
                indent: undefined,
                indextElement: undefined,
                i: undefined,
                param: undefined
              },
              body = (
                vars2.state = args[0],
                vars2.nodes = args[1],
                (
                  vars2.generator = vars2.state.generator
                ),
                (
                  (function f(
                    object = vars2.state,
                    args = ["(\n"],
                    body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                  ) {})(),
                  retval
                ),
                (
                  vars2.indent = (
                    (function f(
                      object = vars2.state.indent,
                      args = [vars2.state.indentLevel++],
                      body = object.repeat.customfunc ? object.repeat(args) : retval = object.repeat(...args)
                    ) {})(),
                    retval
                  )
                ),
                (
                  vars2.indextElement = vars2.indent + vars2.state.indent
                ),
                vars2.nodes != null && vars2.nodes.length > 0 ? (
                  (
                    (function f(
                      object = vars2.state,
                      args = [vars2.indextElement],
                      body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                    ) {})(),
                    retval
                  ),
                  (
                    (function f(
                      object = vars2.generator,
                      property = vars2.nodes[0].type,
                      args = [vars2.nodes[0], vars2.state],
                      body = object[property].customfunc ? object[property](args) : retval = object[property](...args)
                    ) {})(),
                    retval
                  ),
                  (
                    (
                      vars2.i = 1
                    ),
                    (function f(
                      body = vars2.i < vars2.nodes.length && (
                        (
                          (
                            vars2.param = vars2.nodes[vars2.i]
                          ),
                          (
                            (function f(
                              object = vars2.state,
                              args = [",\n"],
                              body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                            ) {})(),
                            retval
                          ),
                          (
                            (function f(
                              object = vars2.state,
                              args = [vars2.indextElement],
                              body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                            ) {})(),
                            retval
                          ),
                          (
                            (function f(
                              object = vars2.generator,
                              property = vars2.param.type,
                              args = [vars2.param, vars2.state],
                              body = object[property].customfunc ? object[property](args) : retval = object[property](...args)
                            ) {})(),
                            retval
                          )
                        ),
                        (
                          vars2.i++,
                          f()
                        )
                      )
                    ) {})()
                  ),
                  (
                    (function f(
                      object = vars2.state,
                      args = ["\n"],
                      body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                    ) {})(),
                    retval
                  )
                ) : 0,
                (
                  (function f(
                    object = vars2.state,
                    args = [vars2.indent + ")"],
                    body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                  ) {})(),
                  retval
                ),
                vars2.state.indentLevel--,
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.formatSequence.customfunc = true
          ),
          (
            vars1.FunctionExpression = function f(
              args,
              vars2 = {},
              body = (
                vars2.node = args[0],
                vars2.state = args[1],
                (
                  (function f(
                    object = vars2.state,
                    args = [(vars2.node.async ? "async " : "") + (vars2.node.generator ? "function* " : "function ") + (vars2.node.id ? vars2.node.id.name : ""), vars2.node],
                    body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                  ) {})(),
                  retval
                ),
                (
                  (function f(
                    object = vars1,
                    args = [vars2.state, vars2.node.params],
                    body = object.formatSequence.customfunc ? object.formatSequence(args) : retval = object.formatSequence(...args)
                  ) {})(),
                  retval
                ),
                (
                  (function f(
                    object = vars2.state,
                    args = [" "],
                    body = object.write.customfunc ? object.write(args) : retval = object.write(...args)
                  ) {})(),
                  retval
                ),
                (
                  (function f(
                    object = vars2.state.generator,
                    property = vars2.node.body.type,
                    args = [vars2.node.body, vars2.state],
                    body = object[property].customfunc ? object[property](args) : retval = object[property](...args)
                  ) {})(),
                  retval
                ),
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.FunctionExpression.customfunc = true
          ),
          (
            vars1.SequenceExpression = function f(
              args,
              vars2 = {},
              body = (
                vars2.node = args[0],
                vars2.state = args[1],
                (
                  (function f(
                    object = vars1,
                    args = [vars2.state, vars2.node.expressions],
                    body = object.formatSequence.customfunc ? object.formatSequence(args) : retval = object.formatSequence(...args)
                  ) {})(),
                  retval
                ),
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.SequenceExpression.customfunc = true
          ),
          (
            vars1.generator = (
              (function f(
                object = Object,
                args = [{}, vars0.astring.GENERATOR, {
                  FunctionExpression: vars1.FunctionExpression,
                  SequenceExpression: vars1.SequenceExpression
                }],
                body = object.assign.customfunc ? object.assign(args) : retval = object.assign(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0.astring,
                args = [vars1.node, {
                  generator: vars1.generator
                }],
                body = object.generate.customfunc ? object.generate(args) : retval = object.generate(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.generatePretty.customfunc = true
    ),
    (
      vars0.transformSource = function f(
        args,
        vars1 = {
          node: undefined,
          programTransformed: undefined,
          sourceTransformed: undefined
        },
        body = (
          vars1.source = args[0],
          vars1.printTree = args[1],
          vars1.oneLine = args[2],
          (
            vars1.node = (
              (function f(
                object = vars0.meriyah,
                args = [vars1.source, {
                  webcompat: true
                }],
                body = object.parse.customfunc ? object.parse(args) : retval = object.parse(...args)
              ) {})(),
              retval
            )
          ),
          vars1.printTree ? (
            (function f(
              object = vars0,
              args = [vars1.node],
              body = object.printNode.customfunc ? object.printNode(args) : retval = object.printNode(...args)
            ) {})(),
            retval
          ) : 0,
          (
            vars1.programTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node],
                body = object.transformProgram.customfunc ? object.transformProgram(args) : retval = object.transformProgram(...args)
              ) {})(),
              retval
            )
          ),
          vars1.printTree ? (
            (function f(
              object = vars0,
              args = [vars1.programTransformed],
              body = object.printNode.customfunc ? object.printNode(args) : retval = object.printNode(...args)
            ) {})(),
            retval
          ) : 0,
          0,
          vars1.oneLine ? vars1.sourceTransformed = (
            (function f(
              object = vars0.astring,
              args = [vars1.programTransformed, {
                lineEnd: " ",
                indent: ""
              }],
              body = object.generate.customfunc ? object.generate(args) : retval = object.generate(...args)
            ) {})(),
            retval
          ) : vars1.sourceTransformed = (
            (function f(
              object = vars0,
              args = [vars1.programTransformed],
              body = object.generatePretty.customfunc ? object.generatePretty(args) : retval = object.generatePretty(...args)
            ) {})(),
            retval
          ),
          (
            retval = vars1.sourceTransformed,
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformSource.customfunc = true
    ),
    (
      vars0.transformProgram = function f(
        args,
        vars1 = {
          res: undefined,
          varsSet: undefined,
          varsExpr: undefined,
          vars: undefined,
          bodySeq: undefined,
          bodyExpr: undefined,
          params: undefined,
          func: undefined,
          funcCall: undefined
        },
        body = (
          vars1.node = args[0],
          (
            vars1.res = (
              (function f(
                object = vars0,
                args = [vars1.node.body],
                body = object.getVarsSetAndExpr.customfunc ? object.getVarsSetAndExpr(args) : retval = object.getVarsSetAndExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.varsSet = vars1.res.varsSet
          ),
          (
            vars1.varsExpr = vars1.res.varsExpr
          ),
          (
            vars1.vars = {
              scopes: [vars1.varsSet],
              index: 0
            }
          ),
          (
            vars1.bodySeq = (
              (function f(
                object = vars0,
                args = [vars1.node.body, vars1.vars],
                body = object.getBodySeq.customfunc ? object.getBodySeq(args) : retval = object.getBodySeq(...args)
              ) {})(),
              retval
            ).bodySeq
          ),
          (
            (function f(
              object = vars1.bodySeq,
              args = [(
                (function f(
                  object = vars0,
                  args = [(
                    (function f(
                      object = vars0,
                      args = ["ctrl"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), "=", (
                    (function f(
                      object = vars0,
                      args = [vars0.ctrlCodes.default],
                      body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                    ) {})(),
                    retval
                  )],
                  body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                ) {})(),
                retval
              )],
              body = object.unshift.customfunc ? object.unshift(args) : retval = object.unshift(...args)
            ) {})(),
            retval
          ),
          (
            vars1.bodyExpr = (
              (function f(
                object = vars0,
                args = [vars1.bodySeq],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.params = [(
              (function f(
                object = vars0,
                args = ["vars0", vars1.varsExpr],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            ), (
              (function f(
                object = vars0,
                args = ["body", vars1.bodyExpr],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            )]
          ),
          (
            vars1.func = (
              (function f(
                object = vars0,
                args = [vars1.params],
                body = object.getEmptyFunc.customfunc ? object.getEmptyFunc(args) : retval = object.getEmptyFunc(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.funcCall = new vars0.ast.ExpressionStatement({
              expression: (
                (function f(
                  object = vars0,
                  args = [vars1.func, []],
                  body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
                ) {})(),
                retval
              )
            })
          ),
          (
            retval = vars1.funcCall,
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformProgram.customfunc = true
    ),
    (
      vars0.transformNode = function f(
        args,
        vars1 = {},
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (function f(
            disc = vars1.node.type,
            fallthru = false,
            body = (
              (fallthru || disc === "Identifier") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformIdentifier.customfunc ? object.transformIdentifier(args) : retval = object.transformIdentifier(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              ),
              ctrl == 0 && ((fallthru || disc === "MemberExpression") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformMemberExpression.customfunc ? object.transformMemberExpression(args) : retval = object.transformMemberExpression(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "Property") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformProperty.customfunc ? object.transformProperty(args) : retval = object.transformProperty(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "CallExpression") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformCallExpression.customfunc ? object.transformCallExpression(args) : retval = object.transformCallExpression(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "ExpressionStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node.expression, vars1.vars],
                      body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "VariableDeclaration") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformVariableDeclaration.customfunc ? object.transformVariableDeclaration(args) : retval = object.transformVariableDeclaration(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "BlockStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformBlockStatement.customfunc ? object.transformBlockStatement(args) : retval = object.transformBlockStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "IfStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformIfStatement.customfunc ? object.transformIfStatement(args) : retval = object.transformIfStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "WhileStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformWhileStatement.customfunc ? object.transformWhileStatement(args) : retval = object.transformWhileStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "DoWhileStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformDoWhileStatement.customfunc ? object.transformDoWhileStatement(args) : retval = object.transformDoWhileStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "ForStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformForStatement.customfunc ? object.transformForStatement(args) : retval = object.transformForStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "ForOfStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformForOfStatement.customfunc ? object.transformForOfStatement(args) : retval = object.transformForOfStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "BreakStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node],
                      body = object.transformBreakStatement.customfunc ? object.transformBreakStatement(args) : retval = object.transformBreakStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "ContinueStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node],
                      body = object.transformContinueStatement.customfunc ? object.transformContinueStatement(args) : retval = object.transformContinueStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "SwitchStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformSwitchStatement.customfunc ? object.transformSwitchStatement(args) : retval = object.transformSwitchStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "FunctionDeclaration") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformFunctionDeclaration.customfunc ? object.transformFunctionDeclaration(args) : retval = object.transformFunctionDeclaration(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "ReturnStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformReturnStatement.customfunc ? object.transformReturnStatement(args) : retval = object.transformReturnStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "ThrowStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformThrowStatement.customfunc ? object.transformThrowStatement(args) : retval = object.transformThrowStatement(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && ((fallthru || disc === "EmptyStatement") && (
                fallthru = true,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [],
                      body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 0 && (true && (
                fallthru = true,
                !(
                  (function f(
                    object = vars0.nodeTypes,
                    args = [vars1.node.type],
                    body = object.has.customfunc ? object.has(args) : retval = object.has(...args)
                  ) {})(),
                  retval
                ) ? (
                  (
                    console.log(new Error(vars1.node.type + " is not supported")),
                    process.exit()
                  )
                ) : 0,
                (
                  retval = (
                    (function f(
                      object = vars0,
                      args = [vars1.node, vars1.vars],
                      body = object.transformExpression.customfunc ? object.transformExpression(args) : retval = object.transformExpression(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 3
                )
              )),
              ctrl == 2 && (ctrl = 0)
            )
          ) {})(),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformNode.customfunc = true
    ),
    (
      vars0.transformIdentifier = function f(
        args,
        vars1 = {
          varName: undefined,
          scopeIdx: undefined,
          i: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.varName = vars1.node.name
          ),
          (
            vars1.scopeIdx = -1
          ),
          (
            (
              vars1.i = vars1.vars.scopes.length - 1
            ),
            (function f(
              body = vars1.i >= 0 && (
                (
                  (
                    (function f(
                      object = vars1.vars.scopes[vars1.i],
                      args = [vars1.varName],
                      body = object.has.customfunc ? object.has(args) : retval = object.has(...args)
                    ) {})(),
                    retval
                  ) ? (
                    vars1.scopeIdx = vars1.i,
                    ctrl = 2
                  ) : 0
                ),
                ctrl < 2 ? (
                  ctrl = 0,
                  (
                    vars1.i--,
                    f()
                  )
                ) : ctrl != 3 && (ctrl = 0)
              )
            ) {})()
          ),
          ctrl == 0 && 0,
          ctrl == 0 && (vars1.scopeIdx == -1 ? (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [vars1.varName],
                body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
              ) {})(),
              retval
            )
          ) : (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["vars" + vars1.scopeIdx],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), (
                  (function f(
                    object = vars0,
                    args = [vars1.varName],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), false],
                body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
              ) {})(),
              retval
            )
          )),
          ctrl == 0 && (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformIdentifier.customfunc = true
    ),
    (
      vars0.transformMemberExpression = function f(
        args,
        vars1 = {
          objectExpr: undefined,
          property: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          !vars1.node.computed ? (
            (
              vars1.objectExpr = (
                (function f(
                  object = vars0,
                  args = [vars1.node.object, vars1.vars],
                  body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                ) {})(),
                retval
              ).expr
            ),
            (
              vars1.property = (
                (function f(
                  object = vars0,
                  args = [vars1.node.property.name],
                  body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                ) {})(),
                retval
              )
            ),
            (
              vars1.expr = (
                (function f(
                  object = vars0,
                  args = [vars1.objectExpr, vars1.property, false],
                  body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                ) {})(),
                retval
              )
            ),
            (
              retval = (
                (function f(
                  object = vars0,
                  args = [{
                    expr: vars1.expr
                  }],
                  body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
                ) {})(),
                retval
              ),
              ctrl = 3
            )
          ) : 0,
          ctrl == 0 && (
            retval = (
              (function f(
                object = vars0,
                args = [vars1.node, vars1.vars],
                body = object.transformExpression.customfunc ? object.transformExpression(args) : retval = object.transformExpression(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformMemberExpression.customfunc = true
    ),
    (
      vars0.transformProperty = function f(
        args,
        vars1 = {
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.expr = new vars0.ast.Property()
          ),
          vars1.expr.kind = vars1.node.kind,
          vars1.expr.computed = vars1.node.computed,
          vars1.node.method = vars1.node.method,
          vars1.node.shorthand = false,
          vars1.node.computed ? (
            vars1.expr.key = (
              (function f(
                object = vars0,
                args = [vars1.node.key, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            ).expr
          ) : (
            vars1.expr.key = (
              (function f(
                object = vars0,
                args = [vars1.node.key.name],
                body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
              ) {})(),
              retval
            )
          ),
          vars1.expr.value = (
            (function f(
              object = vars0,
              args = [vars1.node.value, vars1.vars],
              body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
            ) {})(),
            retval
          ).expr,
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformProperty.customfunc = true
    ),
    (
      vars0.transformCallExpression = function f(
        args,
        vars1 = {
          calleeExpr: undefined,
          calleeRefExpr: undefined,
          params: undefined,
          args: undefined,
          arg: undefined,
          customFuncAttr: undefined,
          customfuncCall: undefined,
          defaultFuncCall: undefined,
          assignRetval: undefined,
          bodyExpr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.calleeExpr = (
              (function f(
                object = vars0,
                args = [vars1.node.callee, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            ).expr
          ),
          0,
          vars1.calleeExpr.type == "MemberExpression" ? (
            vars1.calleeExpr.computed ? (
              vars1.calleeRefExpr = (
                (function f(
                  object = vars0,
                  args = [(
                    (function f(
                      object = vars0,
                      args = ["object"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), (
                    (function f(
                      object = vars0,
                      args = ["property"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), true],
                  body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                ) {})(),
                retval
              ),
              vars1.params = [(
                (function f(
                  object = vars0,
                  args = ["object", vars1.calleeExpr.object],
                  body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                ) {})(),
                retval
              ), (
                (function f(
                  object = vars0,
                  args = ["property", vars1.calleeExpr.property],
                  body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                ) {})(),
                retval
              )]
            ) : (
              vars1.calleeRefExpr = (
                (function f(
                  object = vars0,
                  args = [(
                    (function f(
                      object = vars0,
                      args = ["object"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), vars1.calleeExpr.property, false],
                  body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                ) {})(),
                retval
              ),
              vars1.params = [(
                (function f(
                  object = vars0,
                  args = ["object", vars1.calleeExpr.object],
                  body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                ) {})(),
                retval
              )]
            )
          ) : (
            vars1.calleeRefExpr = (
              (function f(
                object = vars0,
                args = ["callee"],
                body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
              ) {})(),
              retval
            ),
            vars1.params = [(
              (function f(
                object = vars0,
                args = ["callee", vars1.calleeExpr],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            )]
          ),
          (
            vars1.args = []
          ),
          (function f(
            it = vars1.node.arguments[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.arg = itval.value,
              (
                (
                  (function f(
                    object = vars1.args,
                    args = [(
                      (function f(
                        object = vars0,
                        args = [vars1.arg, vars1.vars],
                        body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                      ) {})(),
                      retval
                    ).expr],
                    body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
                  ) {})(),
                  retval
                )
              ),
              f(it)
            )
          ) {})(),
          (
            (function f(
              object = vars1.params,
              args = [(
                (function f(
                  object = vars0,
                  args = ["args", new vars0.ast.ArrayExpression({
                    elements: vars1.args
                  })],
                  body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                ) {})(),
                retval
              )],
              body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
            ) {})(),
            retval
          ),
          (
            vars1.customFuncAttr = (
              (function f(
                object = vars0,
                args = [vars1.calleeRefExpr, (
                  (function f(
                    object = vars0,
                    args = ["customfunc"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                )],
                body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.customfuncCall = (
              (function f(
                object = vars0,
                args = [vars1.calleeRefExpr, [(
                  (function f(
                    object = vars0,
                    args = ["args"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                )]],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.defaultFuncCall = (
              (function f(
                object = vars0,
                args = [vars1.calleeRefExpr, [new vars0.ast.SpreadElement({
                  argument: (
                    (function f(
                      object = vars0,
                      args = ["args"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  )
                })]],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.assignRetval = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["retval"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "=", vars1.defaultFuncCall],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.bodyExpr = (
              (function f(
                object = vars0,
                args = [vars1.customFuncAttr, vars1.customfuncCall, vars1.assignRetval],
                body = object.getCondExpr.customfunc ? object.getCondExpr(args) : retval = object.getCondExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            (function f(
              object = vars1.params,
              args = [(
                (function f(
                  object = vars0,
                  args = ["body", vars1.bodyExpr],
                  body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
                ) {})(),
                retval
              )],
              body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
            ) {})(),
            retval
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [[(
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = [vars1.params],
                        body = object.getEmptyFunc.customfunc ? object.getEmptyFunc(args) : retval = object.getEmptyFunc(...args)
                      ) {})(),
                      retval
                    ), []],
                    body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
                  ) {})(),
                  retval
                ), (
                  (function f(
                    object = vars0,
                    args = ["retval"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                )]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformCallExpression.customfunc = true
    ),
    (
      vars0.transformExpression = function f(
        args,
        vars1 = {
          expr: undefined,
          key: undefined,
          value: undefined,
          i: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.expr = {}
          ),
          (function f(
            it = (
              (function f(
                object = Object,
                args = [vars1.node],
                body = object.keys.customfunc ? object.keys(args) : retval = object.keys(...args)
              ) {})(),
              retval
            )[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.key = itval.value,
              (
                (
                  vars1.value = vars1.node[vars1.key]
                ),
                vars1.value instanceof Array ? (
                  vars1.expr[vars1.key] = [],
                  (
                    (
                      vars1.i = 0
                    ),
                    (function f(
                      body = vars1.i < vars1.value.length && (
                        (
                          vars1.expr[vars1.key][vars1.i] = (
                            (function f(
                              object = vars0,
                              args = [vars1.value[vars1.i], vars1.vars],
                              body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                            ) {})(),
                            retval
                          ).expr
                        ),
                        (
                          vars1.i++,
                          f()
                        )
                      )
                    ) {})()
                  )
                ) : vars1.value instanceof Object ? (
                  vars1.expr[vars1.key] = (
                    (function f(
                      object = vars0,
                      args = [vars1.value, vars1.vars],
                      body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                    ) {})(),
                    retval
                  ).expr
                ) : (
                  vars1.expr[vars1.key] = vars1.value
                )
              ),
              f(it)
            )
          ) {})(),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformExpression.customfunc = true
    ),
    (
      vars0.transformVariableDeclaration = function f(
        args,
        vars1 = {
          expressions: undefined,
          declaration: undefined,
          idExpr: undefined,
          initExpr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          vars1.node.kind !== "var" ? (
            (
              console.log(new Error("Variable declaration with " + vars1.node.kind + " is not supported")),
              process.exit()
            )
          ) : 0,
          (
            vars1.expressions = []
          ),
          (function f(
            it = vars1.node.declarations[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.declaration = itval.value,
              (
                vars1.declaration.id.type !== "Identifier" ? (
                  (
                    console.log(new Error(vars1.declaration.id.type + " is not supported")),
                    process.exit()
                  )
                ) : 0,
                vars1.declaration.init !== null ? (
                  (
                    vars1.idExpr = (
                      (function f(
                        object = vars0,
                        args = [vars1.declaration.id, vars1.vars],
                        body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                      ) {})(),
                      retval
                    ).expr
                  ),
                  (
                    vars1.initExpr = (
                      (function f(
                        object = vars0,
                        args = [vars1.declaration.init, vars1.vars],
                        body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                      ) {})(),
                      retval
                    ).expr
                  ),
                  (
                    (function f(
                      object = vars1.expressions,
                      args = [(
                        (function f(
                          object = vars0,
                          args = [vars1.idExpr, "=", vars1.initExpr],
                          body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                        ) {})(),
                        retval
                      )],
                      body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
                    ) {})(),
                    retval
                  )
                ) : 0
              ),
              f(it)
            )
          ) {})(),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [vars1.expressions],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformVariableDeclaration.customfunc = true
    ),
    (
      vars0.transformBlockStatement = function f(
        args,
        vars1 = {
          res: undefined,
          expr: undefined,
          ctrl: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.res = (
              (function f(
                object = vars0,
                args = [vars1.node.body, vars1.vars],
                body = object.getBodySeq.customfunc ? object.getBodySeq(args) : retval = object.getBodySeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [vars1.res.bodySeq],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.ctrl = vars1.res.ctrl
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: vars1.ctrl
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformBlockStatement.customfunc = true
    ),
    (
      vars0.transformIfStatement = function f(
        args,
        vars1 = {
          testTransformed: undefined,
          consequentTransformed: undefined,
          alternateTransformed: undefined,
          expr: undefined,
          ctrl: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.testTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.test, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.consequentTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.consequent, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.alternateTransformed = vars1.node.alternate === null ? (
              (function f(
                object = vars0,
                args = [],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ) : (
              (function f(
                object = vars0,
                args = [vars1.node.alternate, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [vars1.testTransformed.expr, vars1.consequentTransformed.expr, vars1.alternateTransformed.expr],
                body = object.getCondExpr.customfunc ? object.getCondExpr(args) : retval = object.getCondExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.ctrl = vars1.consequentTransformed.ctrl || vars1.alternateTransformed.ctrl
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: vars1.ctrl
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformIfStatement.customfunc = true
    ),
    (
      vars0.transformWhileStatement = function f(
        args,
        vars1 = {
          testTransformed: undefined,
          bodyTransformed: undefined,
          ctrl: undefined,
          recursion: undefined,
          bodyExpr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.testTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.test, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.bodyTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.body, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.ctrl = vars1.bodyTransformed.ctrl
          ),
          (
            vars1.recursion = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["f"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), []],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          vars1.ctrl ? vars1.recursion = (
            (function f(
              object = vars0,
              args = [vars1.recursion],
              body = object.addLoopCtrl.customfunc ? object.addLoopCtrl(args) : retval = object.addLoopCtrl(...args)
            ) {})(),
            retval
          ) : 0,
          (
            vars1.bodyExpr = (
              (function f(
                object = vars0,
                args = [vars1.testTransformed.expr, "&&", (
                  (function f(
                    object = vars0,
                    args = [[vars1.bodyTransformed.expr, vars1.recursion]],
                    body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
                  ) {})(),
                  retval
                )],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [vars1.bodyExpr],
                    body = object.getFuncLoop.customfunc ? object.getFuncLoop(args) : retval = object.getFuncLoop(...args)
                  ) {})(),
                  retval
                ), []],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: vars1.ctrl
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformWhileStatement.customfunc = true
    ),
    (
      vars0.transformDoWhileStatement = function f(
        args,
        vars1 = {
          testTransformed: undefined,
          bodyTransformed: undefined,
          ctrl: undefined,
          recursion: undefined,
          bodyExpr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.testTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.test, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.bodyTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.body, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.ctrl = vars1.bodyTransformed.ctrl
          ),
          (
            vars1.recursion = (
              (function f(
                object = vars0,
                args = [vars1.testTransformed.expr, "&&", (
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = ["f"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), []],
                    body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
                  ) {})(),
                  retval
                )],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          vars1.ctrl ? vars1.recursion = (
            (function f(
              object = vars0,
              args = [vars1.recursion],
              body = object.addLoopCtrl.customfunc ? object.addLoopCtrl(args) : retval = object.addLoopCtrl(...args)
            ) {})(),
            retval
          ) : 0,
          (
            vars1.bodyExpr = (
              (function f(
                object = vars0,
                args = [[vars1.bodyTransformed.expr, vars1.recursion]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [vars1.bodyExpr],
                    body = object.getFuncLoop.customfunc ? object.getFuncLoop(args) : retval = object.getFuncLoop(...args)
                  ) {})(),
                  retval
                ), []],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: vars1.ctrl
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformDoWhileStatement.customfunc = true
    ),
    (
      vars0.transformForStatement = function f(
        args,
        vars1 = {
          initExpr: undefined,
          testExpr: undefined,
          updateExpr: undefined,
          bodyTransformed: undefined,
          ctrl: undefined,
          recursion: undefined,
          bodyExpr: undefined,
          funcCall: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.initExpr = vars1.node.init === null ? (
              (function f(
                object = vars0,
                args = [0],
                body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
              ) {})(),
              retval
            ) : (
              (function f(
                object = vars0,
                args = [vars1.node.init, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            ).expr
          ),
          (
            vars1.testExpr = vars1.node.test === null ? (
              (function f(
                object = vars0,
                args = [true],
                body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
              ) {})(),
              retval
            ) : (
              (function f(
                object = vars0,
                args = [vars1.node.test, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            ).expr
          ),
          (
            vars1.updateExpr = vars1.node.update === null ? (
              (function f(
                object = vars0,
                args = [0],
                body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
              ) {})(),
              retval
            ) : (
              (function f(
                object = vars0,
                args = [vars1.node.update, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            ).expr
          ),
          (
            vars1.bodyTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.body, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.ctrl = vars1.bodyTransformed.ctrl
          ),
          (
            vars1.recursion = (
              (function f(
                object = vars0,
                args = [[vars1.updateExpr, (
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = ["f"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), []],
                    body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
                  ) {})(),
                  retval
                )]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          vars1.ctrl ? vars1.recursion = (
            (function f(
              object = vars0,
              args = [vars1.recursion],
              body = object.addLoopCtrl.customfunc ? object.addLoopCtrl(args) : retval = object.addLoopCtrl(...args)
            ) {})(),
            retval
          ) : 0,
          (
            vars1.bodyExpr = (
              (function f(
                object = vars0,
                args = [vars1.testExpr, "&&", (
                  (function f(
                    object = vars0,
                    args = [[vars1.bodyTransformed.expr, vars1.recursion]],
                    body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
                  ) {})(),
                  retval
                )],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.funcCall = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [vars1.bodyExpr],
                    body = object.getFuncLoop.customfunc ? object.getFuncLoop(args) : retval = object.getFuncLoop(...args)
                  ) {})(),
                  retval
                ), []],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [[vars1.initExpr, vars1.funcCall]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: vars1.ctrl
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformForStatement.customfunc = true
    ),
    (
      vars0.transformForOfStatement = function f(
        args,
        vars1 = {
          leftTransformed: undefined,
          decl: undefined,
          rightTransformed: undefined,
          bodyTransformed: undefined,
          ctrl: undefined,
          recursion: undefined,
          bodyExpr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          0,
          vars1.node.left.type === "VariableDeclaration" ? (
            (
              vars1.decl = vars1.node.left.declarations[0]
            ),
            vars1.decl.id.type !== "Identifier" ? (
              (
                console.log(new Error(vars1.decl.id.type + " is not supported")),
                process.exit()
              )
            ) : 0,
            vars1.leftTransformed = (
              (function f(
                object = vars0,
                args = [vars1.decl.id, vars1.vars],
                body = object.transformIdentifier.customfunc ? object.transformIdentifier(args) : retval = object.transformIdentifier(...args)
              ) {})(),
              retval
            )
          ) : (
            vars1.leftTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.left, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.rightTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.right, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.bodyTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.body, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.ctrl = vars1.bodyTransformed.ctrl
          ),
          (
            vars1.recursion = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["f"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), [(
                  (function f(
                    object = vars0,
                    args = ["it"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                )]],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          vars1.ctrl ? vars1.recursion = (
            (function f(
              object = vars0,
              args = [vars1.recursion],
              body = object.addLoopCtrl.customfunc ? object.addLoopCtrl(args) : retval = object.addLoopCtrl(...args)
            ) {})(),
            retval
          ) : 0,
          (
            vars1.bodyExpr = (
              (function f(
                object = vars0,
                args = [[(
                  (function f(
                    object = vars0,
                    args = [vars1.leftTransformed.expr, "=", (
                      (function f(
                        object = vars0,
                        args = [(
                          (function f(
                            object = vars0,
                            args = ["itval"],
                            body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                          ) {})(),
                          retval
                        ), (
                          (function f(
                            object = vars0,
                            args = ["value"],
                            body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                          ) {})(),
                          retval
                        ), false],
                        body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                  ) {})(),
                  retval
                ), vars1.bodyTransformed.expr, vars1.recursion]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          vars1.bodyExpr = (
            (function f(
              object = vars0,
              args = [(
                (function f(
                  object = vars0,
                  args = [(
                    (function f(
                      object = vars0,
                      args = ["itval"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), (
                    (function f(
                      object = vars0,
                      args = ["done"],
                      body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                    ) {})(),
                    retval
                  ), false],
                  body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                ) {})(),
                retval
              ), "||", vars1.bodyExpr],
              body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
            ) {})(),
            retval
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [vars1.bodyExpr, vars1.rightTransformed.expr],
                    body = object.getFuncLoop.customfunc ? object.getFuncLoop(args) : retval = object.getFuncLoop(...args)
                  ) {})(),
                  retval
                ), []],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: vars1.ctrl
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformForOfStatement.customfunc = true
    ),
    (
      vars0.transformBreakStatement = function f(
        args,
        vars1 = {
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.node.label !== null ? (
            (
              console.log(new Error("Break statement with label is not supported")),
              process.exit()
            )
          ) : 0,
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "=", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.break],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: true
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformBreakStatement.customfunc = true
    ),
    (
      vars0.transformContinueStatement = function f(
        args,
        vars1 = {
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.node.label !== null ? (
            (
              console.log(new Error("Continue statement with label is not supported")),
              process.exit()
            )
          ) : 0,
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "=", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.continue],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: true
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformContinueStatement.customfunc = true
    ),
    (
      vars0.transformSwitchStatement = function f(
        args,
        vars1 = {
          discriminantTransformed: undefined,
          expressions: undefined,
          funcs: undefined,
          ctrl: undefined,
          caseEntry: undefined,
          consequentTransformed: undefined,
          testExpr: undefined,
          testTransformed: undefined,
          setFallthru: undefined,
          caseExpr: undefined,
          testForBreak: undefined,
          resetCtrl: undefined,
          bodySeq: undefined,
          params: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.discriminantTransformed = (
              (function f(
                object = vars0,
                args = [vars1.node.discriminant, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expressions = []
          ),
          (
            vars1.funcs = []
          ),
          (
            vars1.ctrl = false
          ),
          (function f(
            it = vars1.node.cases[Symbol.iterator](),
            itval = it.next(),
            body = itval.done || (
              vars1.caseEntry = itval.value,
              (
                (
                  vars1.consequentTransformed = (
                    (function f(
                      object = vars0,
                      args = [vars1.caseEntry.consequent, vars1.vars],
                      body = object.getBodySeq.customfunc ? object.getBodySeq(args) : retval = object.getBodySeq(...args)
                    ) {})(),
                    retval
                  )
                ),
                vars1.funcs = (
                  (function f(
                    object = vars1.funcs,
                    args = [vars1.consequentTransformed.funcs],
                    body = object.concat.customfunc ? object.concat(args) : retval = object.concat(...args)
                  ) {})(),
                  retval
                ),
                0,
                vars1.caseEntry.test === null ? (
                  vars1.testExpr = (
                    (function f(
                      object = vars0,
                      args = [true],
                      body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                    ) {})(),
                    retval
                  )
                ) : (
                  (
                    vars1.testTransformed = (
                      (function f(
                        object = vars0,
                        args = [vars1.caseEntry.test, vars1.vars],
                        body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
                      ) {})(),
                      retval
                    )
                  ),
                  vars1.testExpr = (
                    (function f(
                      object = vars0,
                      args = [(
                        (function f(
                          object = vars0,
                          args = ["fallthru"],
                          body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                        ) {})(),
                        retval
                      ), "||", (
                        (function f(
                          object = vars0,
                          args = [(
                            (function f(
                              object = vars0,
                              args = ["disc"],
                              body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                            ) {})(),
                            retval
                          ), "===", vars1.testTransformed.expr],
                          body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
                        ) {})(),
                        retval
                      )],
                      body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
                    ) {})(),
                    retval
                  )
                ),
                (
                  vars1.setFallthru = (
                    (function f(
                      object = vars0,
                      args = [(
                        (function f(
                          object = vars0,
                          args = ["fallthru"],
                          body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                        ) {})(),
                        retval
                      ), "=", (
                        (function f(
                          object = vars0,
                          args = [true],
                          body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                        ) {})(),
                        retval
                      )],
                      body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                    ) {})(),
                    retval
                  )
                ),
                (
                  vars1.caseExpr = (
                    (function f(
                      object = vars0,
                      args = [vars1.testExpr, "&&", (
                        (function f(
                          object = vars0,
                          args = [[vars1.setFallthru, ...vars1.consequentTransformed.expressions]],
                          body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
                        ) {})(),
                        retval
                      )],
                      body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
                    ) {})(),
                    retval
                  )
                ),
                vars1.ctrl ? (
                  vars1.caseExpr = (
                    (function f(
                      object = vars0,
                      args = [(
                        (function f(
                          object = vars0,
                          args = [(
                            (function f(
                              object = vars0,
                              args = ["ctrl"],
                              body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                            ) {})(),
                            retval
                          ), "==", (
                            (function f(
                              object = vars0,
                              args = [vars0.ctrlCodes.default],
                              body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                            ) {})(),
                            retval
                          )],
                          body = object.getBinExpr.customfunc ? object.getBinExpr(args) : retval = object.getBinExpr(...args)
                        ) {})(),
                        retval
                      ), "&&", vars1.caseExpr],
                      body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
                    ) {})(),
                    retval
                  )
                ) : 0,
                (
                  (function f(
                    object = vars1.expressions,
                    args = [vars1.caseExpr],
                    body = object.push.customfunc ? object.push(args) : retval = object.push(...args)
                  ) {})(),
                  retval
                ),
                vars1.ctrl ||= vars1.consequentTransformed.ctrl
              ),
              f(it)
            )
          ) {})(),
          (
            vars1.testForBreak = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["ctrl"],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), "==", (
                  (function f(
                    object = vars0,
                    args = [vars0.ctrlCodes.break],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.resetCtrl = (
              (function f(
                object = vars0,
                args = [vars1.testForBreak, "&&", (
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = ["ctrl"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), "=", (
                      (function f(
                        object = vars0,
                        args = [vars0.ctrlCodes.default],
                        body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                  ) {})(),
                  retval
                )],
                body = object.getLogicExpr.customfunc ? object.getLogicExpr(args) : retval = object.getLogicExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.bodySeq = [...vars1.funcs, ...vars1.expressions, vars1.resetCtrl]
          ),
          (
            vars1.params = [(
              (function f(
                object = vars0,
                args = ["disc", vars1.discriminantTransformed.expr],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            ), (
              (function f(
                object = vars0,
                args = ["fallthru", (
                  (function f(
                    object = vars0,
                    args = [false],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            ), (
              (function f(
                object = vars0,
                args = ["body", (
                  (function f(
                    object = vars0,
                    args = [vars1.bodySeq],
                    body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
                  ) {})(),
                  retval
                )],
                body = object.getDefaultParam.customfunc ? object.getDefaultParam(args) : retval = object.getDefaultParam(...args)
              ) {})(),
              retval
            )]
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [vars1.params],
                    body = object.getEmptyFunc.customfunc ? object.getEmptyFunc(args) : retval = object.getEmptyFunc(...args)
                  ) {})(),
                  retval
                ), []],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: vars1.ctrl
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformSwitchStatement.customfunc = true
    ),
    (
      vars0.transformFunctionDeclaration = function f(
        args,
        vars1 = {
          idExpr: undefined,
          funcAssign: undefined,
          funcAttr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          vars1.node.async ? (
            (
              console.log(new Error("Async functions are not supported")),
              process.exit()
            )
          ) : 0,
          vars1.node.generator ? (
            (
              console.log(new Error("Generators are not supported")),
              process.exit()
            )
          ) : 0,
          (
            vars1.idExpr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = ["vars" + vars1.vars.index],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), (
                  (function f(
                    object = vars0,
                    args = [vars1.node.id.name],
                    body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                  ) {})(),
                  retval
                ), false],
                body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.funcAssign = (
              (function f(
                object = vars0,
                args = [vars1.idExpr, "=", (
                  (function f(
                    object = vars0,
                    args = [vars1.node, vars1.vars],
                    body = object.getFuncDecl.customfunc ? object.getFuncDecl(args) : retval = object.getFuncDecl(...args)
                  ) {})(),
                  retval
                )],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.funcAttr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [vars1.idExpr, (
                      (function f(
                        object = vars0,
                        args = ["customfunc"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                  ) {})(),
                  retval
                ), "=", (
                  (function f(
                    object = vars0,
                    args = [true],
                    body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                  ) {})(),
                  retval
                )],
                body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [[vars1.funcAssign, vars1.funcAttr]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  func: true
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformFunctionDeclaration.customfunc = true
    ),
    (
      vars0.transformReturnStatement = function f(
        args,
        vars1 = {
          argumentExpr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.argumentExpr = (
              (function f(
                object = vars0,
                args = [vars1.node.argument, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            ).expr
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [[(
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = ["retval"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), "=", vars1.argumentExpr],
                    body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                  ) {})(),
                  retval
                ), (
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = ["ctrl"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), "=", (
                      (function f(
                        object = vars0,
                        args = [vars0.ctrlCodes.return],
                        body = object.getLit.customfunc ? object.getLit(args) : retval = object.getLit(...args)
                      ) {})(),
                      retval
                    )],
                    body = object.getAssignExpr.customfunc ? object.getAssignExpr(args) : retval = object.getAssignExpr(...args)
                  ) {})(),
                  retval
                )]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr,
                  ctrl: true
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformReturnStatement.customfunc = true
    ),
    (
      vars0.transformThrowStatement = function f(
        args,
        vars1 = {
          transformedArgument: undefined,
          consoleLogExpr: undefined,
          processExitExpr: undefined,
          expr: undefined
        },
        body = (
          vars1.node = args[0],
          vars1.vars = args[1],
          (
            vars1.transformedArgument = (
              (function f(
                object = vars0,
                args = [vars1.node.argument, vars1.vars],
                body = object.transformNode.customfunc ? object.transformNode(args) : retval = object.transformNode(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.consoleLogExpr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = ["console"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), (
                      (function f(
                        object = vars0,
                        args = ["log"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), false],
                    body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                  ) {})(),
                  retval
                ), [vars1.transformedArgument.expr]],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.processExitExpr = (
              (function f(
                object = vars0,
                args = [(
                  (function f(
                    object = vars0,
                    args = [(
                      (function f(
                        object = vars0,
                        args = ["process"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), (
                      (function f(
                        object = vars0,
                        args = ["exit"],
                        body = object.getId.customfunc ? object.getId(args) : retval = object.getId(...args)
                      ) {})(),
                      retval
                    ), false],
                    body = object.getMemberExpr.customfunc ? object.getMemberExpr(args) : retval = object.getMemberExpr(...args)
                  ) {})(),
                  retval
                ), []],
                body = object.getCallExpr.customfunc ? object.getCallExpr(args) : retval = object.getCallExpr(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars1.expr = (
              (function f(
                object = vars0,
                args = [[vars1.consoleLogExpr, vars1.processExitExpr]],
                body = object.getSeq.customfunc ? object.getSeq(args) : retval = object.getSeq(...args)
              ) {})(),
              retval
            )
          ),
          (
            retval = (
              (function f(
                object = vars0,
                args = [{
                  expr: vars1.expr
                }],
                body = object.returnVal.customfunc ? object.returnVal(args) : retval = object.returnVal(...args)
              ) {})(),
              retval
            ),
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.transformThrowStatement.customfunc = true
    ),
    "use strict",
    (
      vars0.ast = (
        (function f(
          callee = require,
          args = ["abstract-syntax-tree"],
          body = callee.customfunc ? callee(args) : retval = callee(...args)
        ) {})(),
        retval
      )
    ),
    (
      vars0.meriyah = (
        (function f(
          callee = require,
          args = ["meriyah"],
          body = callee.customfunc ? callee(args) : retval = callee(...args)
        ) {})(),
        retval
      )
    ),
    (
      vars0.astring = (
        (function f(
          callee = require,
          args = ["astring"],
          body = callee.customfunc ? callee(args) : retval = callee(...args)
        ) {})(),
        retval
      )
    ),
    (
      vars0.fs = (
        (function f(
          callee = require,
          args = ["fs"],
          body = callee.customfunc ? callee(args) : retval = callee(...args)
        ) {})(),
        retval
      )
    ),
    (
      vars0.nodeTypes = new Set(["ArrayExpression", "AssignmentExpression", "BinaryExpression", "ConditionalExpression", "Literal", "LogicalExpression", "NewExpression", "ObjectExpression", "SequenceExpression", "SpreadElement", "UnaryExpression", "UpdateExpression"])
    ),
    (
      vars0.ctrlCodes = {
        default: 0,
        continue: 1,
        break: 2,
        return: 3
      }
    ),
    (
      vars0.fileName = process.argv[2]
    ),
    (
      vars0.debugFlag = process.argv[3] == "d" || process.argv[3] == "debug"
    ),
    (
      vars0.source = (
        (function f(
          object = vars0.fs,
          args = [vars0.fileName, "utf-8"],
          body = object.readFileSync.customfunc ? object.readFileSync(args) : retval = object.readFileSync(...args)
        ) {})(),
        retval
      )
    ),
    (
      vars0.result = (
        (function f(
          object = vars0,
          args = [vars0.source, vars0.debugFlag],
          body = object.transformSource.customfunc ? object.transformSource(args) : retval = object.transformSource(...args)
        ) {})(),
        retval
      )
    ),
    (
      (function f(
        object = console,
        args = [vars0.result],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
