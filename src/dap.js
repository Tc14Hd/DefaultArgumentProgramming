"use strict";

// https://github.com/buxlabs/abstract-syntax-tree
// https://github.com/meriyah/meriyah
// https://github.com/davidbonnet/astring

var ast = require("abstract-syntax-tree");
var meriyah = require("meriyah");
var astring = require("astring");
var fs = require("fs");
var yargs = require("yargs");

/*
Reserved variables:
    - Function:
        - vars[number]
        - body
        - loop
        - it
        - itval
        - args
        - callee
        - object
        - property
    - Global:
        - ctrl
        - retval
    - Other:
        - customfunc
*/

var nodeTypes = new Set([
    "ArrayExpression",
    "AssignmentExpression",
    "BinaryExpression",
    "ConditionalExpression",
    "LogicalExpression",
    "NewExpression",
    "ObjectExpression",
    "SequenceExpression",
    "SpreadElement",
    "UnaryExpression",
    "UpdateExpression"
]);

var ctrlCodes = {
    default : 0,
    continue : 1,
    break : 2,
    return : 3,
};

function printNode(node) {
    console.log(JSON.stringify(node, undefined, 2));
}

function merge(s1, s2) {
    for (var x of s2) s1.add(x);
}

function getLit(value) {
    return new ast.Literal({value});
}

function getId(name) {
    return new ast.Identifier({name});
}

function getLogicExpr(left, operator, right) {
    return new ast.LogicalExpression({left, right, operator});
}

function getBinExpr(left, operator, right) {
    return new ast.BinaryExpression({left, right, operator});
}

function getAssignExpr(left, operator, right) {
    return new ast.AssignmentExpression({left, right, operator});
}

function getSeq(expressions) {
    return (expressions.length > 0) ? new ast.SequenceExpression({expressions}) : getLit(0);
}

function getCondExpr(test, consequent, alternate) {
    return new ast.ConditionalExpression({test, consequent, alternate});
}

function getMemberExpr(object, property, computed) {
    return new ast.MemberExpression({object, property, computed});
}

function getCallExpr(callee, args) {
    return new ast.CallExpression({callee, arguments : args});
}

function getVarsSet(node) {

    var varsSet = new Set();
    switch (node.type) {

        case "BlockStatement":
            for (var entry of node.body) {
                merge(varsSet, getVarsSet(entry));
            }
            break;

        case "IfStatement":
            merge(varsSet, getVarsSet(node.consequent));
            if (node.alternate !== null) {
                merge(varsSet, getVarsSet(node.alternate));
            }
            break;

        case "WhileStatement":
        case "DoWhileStatement":
            merge(varsSet, getVarsSet(node.body));
            break;

        case "ForStatement":
            if (node.init !== null) {
                merge(varsSet, getVarsSet(node.init));
            }
            merge(varsSet, getVarsSet(node.body));
            break;

        case "ForOfStatement":
            merge(varsSet, getVarsSet(node.left));
            merge(varsSet, getVarsSet(node.body));
            break;

        case "SwitchStatement":
            for (var caseEntry of node.cases) {
                for (var entry of caseEntry.consequent) {
                    merge(varsSet, getVarsSet(entry));
                }
            }
            break;

        case "VariableDeclaration":
            for (var declaration of node.declarations) {
                if (declaration.id.type === "Identifier") {
                    varsSet.add(declaration.id.name);
                }
            }
            break;

        case "FunctionDeclaration":
            varsSet.add(node.id.name);
            break;
    }

    return varsSet;
}

function getVarsSetAndExpr(body) {

    var varsSet = new Set();
    for (var entry of body) {
        merge(varsSet, getVarsSet(entry));
    }

    var properties = [];
    for (var varName of varsSet) {
        properties.push(new ast.Property({
            key : getId(varName),
            value : getLit(undefined),
            kind : "init"
        }));
    }
    var varsExpr = new ast.ObjectExpression({properties});

    return {varsSet, varsExpr};
}

function getBodySeq(body, vars) {

    var expressions = [];
    var funcs = [];
    var ctrl = false;

    for (var entry of body) {

        var entryTransformed = transformNode(entry, vars);

        if (entryTransformed.func) {
            funcs.push(entryTransformed.expr);
            continue;
        }

        var entryExpr = entryTransformed.expr;

        if (ctrl) {
            entryExpr = getLogicExpr(getBinExpr(getId("ctrl"), "==", getLit(ctrlCodes.default)), "&&", entryExpr);
        }

        expressions.push(entryExpr);
        ctrl ||= entryTransformed.ctrl;
    }

    var bodySeq = funcs.concat(expressions);

    return {bodySeq, ctrl, funcs, expressions};
}

function getDefaultParam(name, val) {
    return new ast.AssignmentPattern({left : getId(name), right : val});
}

function getEmptyFunc(id, params) {

    var func = new ast.FunctionExpression({
        id, body : new ast.BlockStatement(), params
    });

    return func;
}

function getFuncDecl(node, varsOld) {

    var body = node.body.body;

    var res = getVarsSetAndExpr(body);
    var varsSet = res.varsSet;
    var varsExpr = res.varsExpr;
    var varsIndex = varsOld.index + 1;

    var bodySeq = [];
    for (var i = 0; i < node.params.length; i++) {
        var param = node.params[i];

        if (param.type !== "Identifier") {
            throw new Error(node.type + " is not supported");
        }

        varsSet.add(param.name);

        var idExpr = getMemberExpr(getId("vars" + varsIndex), getId(param.name), false);
        var val = getMemberExpr(getId("args"), getLit(i), true);
        bodySeq.push(getAssignExpr(idExpr, "=", val));
    }

    var vars = {scopes : [...varsOld.scopes, varsSet], index : varsIndex};
    bodySeq = bodySeq.concat(getBodySeq(body, vars).bodySeq);

    var setCond = getLogicExpr(getId("ctrl"), "!=", getLit(ctrlCodes.return));
    var setRetval = getAssignExpr(getId("retval"), "=", getLit(undefined));
    var andExpr = getLogicExpr(setCond, "&&", setRetval);
    bodySeq.push(andExpr);

    var resetCtrl = getAssignExpr(getId("ctrl"), "=", getLit(ctrlCodes.default));
    bodySeq.push(resetCtrl);

    var bodyExpr = getSeq(bodySeq);

    var params = [
        getId("args"),
        getDefaultParam("vars" + vars.index, varsExpr),
        getDefaultParam("body", bodyExpr)
    ];

    return getEmptyFunc(null, params);
}

function getFuncLoop(bodyExpr, iterable) {

    var params = [];

    if (iterable !== undefined) {

        var symbol = getMemberExpr(getId("Symbol"), getId("iterator"), false);
        var iterator = getCallExpr(getMemberExpr(iterable, symbol, true), []);
        params.push(getDefaultParam("it", iterator));

        var next = getMemberExpr(getId("it"), getId("next"), false);
        params.push(getDefaultParam("itval", getCallExpr(next, [])));
    }

    params.push(getDefaultParam("body", bodyExpr));

    return getEmptyFunc(getId("loop"), params);
}

function addLoopCtrl(expr) {

    var nextIterationTest = getBinExpr(getId("ctrl"), "<", getLit(ctrlCodes.break));
    var resetCtrl = getAssignExpr(getId("ctrl"), "=", getLit(ctrlCodes.default));
    var resetCtrlTest = getBinExpr(getId("ctrl"), "!=", getLit(ctrlCodes.return));

    var nextIteration = getSeq([resetCtrl, expr]);
    var breakout = getLogicExpr(resetCtrlTest, "&&", resetCtrl);

    return getCondExpr(nextIterationTest, nextIteration, breakout);
}

function returnVal(ret) {

    var defaultRet = {expr : getLit(0), ctrl : false, func : false};
    return Object.assign(defaultRet, ret);
}

function generatePretty(node) {

    function formatSequence(state, nodes) {

        var generator = state.generator;
        state.write("(\n");

        var indent = state.indent.repeat(state.indentLevel++);
        var indextElement = indent + state.indent;

        if (nodes != null && nodes.length > 0) {

            state.write(indextElement);
            generator[nodes[0].type](nodes[0], state);
    
            for (var i = 1; i < nodes.length; i++) {
                var param = nodes[i];

                state.write(",\n");
                state.write(indextElement);
                generator[param.type](param, state);
            }
            state.write("\n");
        }

        state.write(indent + ")");
        state.indentLevel--;
    }

    function FunctionExpression(node, state) {

        state.write(
            (node.async ? "async " : "") +
                (node.generator ? "function* " : "function ") +
                (node.id ? node.id.name : ""),
            node
        );

        formatSequence(state, node.params);
        state.write(" ");
        state.generator[node.body.type](node.body, state);
    }

    function SequenceExpression(node, state) {
        formatSequence(state, node.expressions)
    }

    var generator = Object.assign({}, astring.GENERATOR, {FunctionExpression, SequenceExpression});

    return astring.generate(node, {generator});
}

function transformSource(source, pretty, debug) {

    var node = meriyah.parse(source, {webcompat : true});

    var programTransformed = transformProgram(node);
    if (debug) printNode(programTransformed);

    var sourceTransformed;
    if (pretty) sourceTransformed = generatePretty(programTransformed);
    else sourceTransformed = astring.generate(programTransformed, {lineEnd : " ", indent : ""});

    return sourceTransformed;
}

function transformProgram(node) {

    var res = getVarsSetAndExpr(node.body);
    var varsSet = res.varsSet;
    var varsExpr = res.varsExpr;

    var vars = {scopes : [varsSet], index : 0};
    var bodySeq = getBodySeq(node.body, vars).bodySeq;

    bodySeq.unshift(getAssignExpr(getId("ctrl"), "=", getLit(ctrlCodes.default)));
    var bodyExpr = getSeq(bodySeq);

    var params = [
        getDefaultParam("vars0", varsExpr),
        getDefaultParam("body", bodyExpr)
    ];

    var func = getEmptyFunc(null, params);
    var funcCall = new ast.ExpressionStatement({expression : getCallExpr(func, [])});

    return funcCall;
}

function transformNode(node, vars) {

    switch (node.type) {

        case "Literal":
            return returnVal({expr : node});

        case "Identifier":
            return transformIdentifier(node, vars);

        case "MemberExpression":
            return transformMemberExpression(node, vars);

        case "Property":
            return transformProperty(node, vars);

        case "CallExpression":
            return transformCallExpression(node, vars);

        case "ExpressionStatement":
            return transformNode(node.expression, vars);

        case "VariableDeclaration":
            return transformVariableDeclaration(node, vars);

        case "BlockStatement":
            return transformBlockStatement(node, vars);

        case "IfStatement":
            return transformIfStatement(node, vars);

        case "WhileStatement":
            return transformWhileStatement(node, vars);

        case "DoWhileStatement":
            return transformDoWhileStatement(node, vars);

        case "ForStatement":
            return transformForStatement(node, vars);

        case "ForOfStatement":
            return transformForOfStatement(node, vars);

        case "BreakStatement":
            return transformBreakStatement(node);

        case "ContinueStatement":
            return transformContinueStatement(node);

        case "SwitchStatement":
            return transformSwitchStatement(node, vars);

        case "FunctionDeclaration":
            return transformFunctionDeclaration(node, vars);

        case "ReturnStatement":
            return transformReturnStatement(node, vars);

        case "ThrowStatement":
            return transformThrowStatement(node, vars);

        case "EmptyStatement":
            return returnVal();

        default:
            if (!nodeTypes.has(node.type)) {
                throw new Error(node.type + " is not supported");
            }
            return transformExpression(node, vars);
    }
}

function transformIdentifier(node, vars) {

    var varName = node.name;
    var scopeIdx = -1;

    for (var i = vars.scopes.length - 1; i >= 0; i--) {
        if (vars.scopes[i].has(varName)) {
            scopeIdx = i;
            break;
        }
    }

    var expr;
    if (scopeIdx == -1) {
        expr = getId(varName);
    }
    else {
        expr = getMemberExpr(getId("vars" + scopeIdx), getId(varName), false);
    }

    return returnVal({expr});
}

function transformMemberExpression(node, vars) {

    if (!node.computed) {
        var objectExpr = transformNode(node.object, vars).expr;
        var property = getId(node.property.name);
        var expr = getMemberExpr(objectExpr, property, false);
        return returnVal({expr});
    }
    return transformExpression(node, vars);
}

function transformProperty(node, vars) {

    var expr = new ast.Property();

    expr.kind = node.kind;
    expr.computed = node.computed;
    node.method = node.method;
    node.shorthand = false;

    if (node.computed) {
        expr.key = transformNode(node.key, vars).expr;
    }
    else {
        expr.key = getId(node.key.name);
    }

    expr.value = transformNode(node.value, vars).expr;

    return returnVal({expr});
}

function transformCallExpression(node, vars) {

    var calleeExpr = transformNode(node.callee, vars).expr;

    var calleeRefExpr, params;
    if (calleeExpr.type == "MemberExpression") {

        if (calleeExpr.computed) {
            calleeRefExpr = getMemberExpr(getId("object"), getId("property"), true);
            params = [
                getDefaultParam("object", calleeExpr.object),
                getDefaultParam("property", calleeExpr.property)
            ];
        }
        else {
            calleeRefExpr = getMemberExpr(getId("object"), calleeExpr.property, false);
            params = [getDefaultParam("object", calleeExpr.object)];
        }
    }
    else {
        calleeRefExpr = getId("callee");
        params = [getDefaultParam("callee", calleeExpr)];
    }

    var args = [];
    for (var arg of node.arguments) {
        args.push(transformNode(arg, vars).expr);
    }
    params.push(getDefaultParam("args", new ast.ArrayExpression({elements : args})));

    var customFuncAttr = getMemberExpr(calleeRefExpr, getId("customfunc"));
    var customfuncCall = getCallExpr(calleeRefExpr, [getId("args")]);

    var defaultFuncCall = getCallExpr(calleeRefExpr, [new ast.SpreadElement({argument : getId("args")})]);
    var assignRetval = getAssignExpr(getId("retval"), "=", defaultFuncCall);

    var bodyExpr = getCondExpr(customFuncAttr, customfuncCall, assignRetval);
    params.push(getDefaultParam("body", bodyExpr));

    var expr = getSeq([getCallExpr(getEmptyFunc(null, params), []), getId("retval")]);

    return returnVal({expr});
}

function transformExpression(node, vars) {

    var expr = {};
    for (var key of Object.keys(node)) {
        var value = node[key];

        if (value instanceof Array) {
            expr[key] = [];
            for (var i = 0; i < value.length; i++) {
                expr[key][i] = transformNode(value[i], vars).expr;
            }
        }
        else if (value instanceof Object) {
            expr[key] = transformNode(value, vars).expr;
        }
        else {
            expr[key] = value;
        }
    }

    return returnVal({expr});
}

function transformVariableDeclaration(node, vars) {

    if (node.kind !== "var") {
        throw new Error("Variable declaration with " + node.kind + " is not supported");
    }

    var expressions = [];
    for (var declaration of node.declarations) {

        if (declaration.id.type !== "Identifier") {
            throw new Error(declaration.id.type + " is not supported");
        }

        if (declaration.init !== null) {
            var idExpr = transformNode(declaration.id, vars).expr;
            var initExpr = transformNode(declaration.init, vars).expr;
            expressions.push(getAssignExpr(idExpr, "=", initExpr));
        }
    }

    var expr = getSeq(expressions);

    return returnVal({expr});
}

function transformBlockStatement(node, vars) {

    var res = getBodySeq(node.body, vars);
    var expr = getSeq(res.bodySeq);
    var ctrl = res.ctrl;

    return returnVal({expr, ctrl});
}

function transformIfStatement(node, vars) {

    var testTransformed = transformNode(node.test, vars);
    var consequentTransformed = transformNode(node.consequent, vars);

    var alternateTransformed = (node.alternate === null) ? returnVal() : transformNode(node.alternate, vars);

    var expr = getCondExpr(testTransformed.expr, consequentTransformed.expr, alternateTransformed.expr);
    var ctrl = consequentTransformed.ctrl || alternateTransformed.ctrl;

    return returnVal({expr, ctrl});
}

function transformWhileStatement(node, vars) {

    var testTransformed = transformNode(node.test, vars);
    var bodyTransformed = transformNode(node.body, vars);
    var ctrl = bodyTransformed.ctrl;

    var recursion = getCallExpr(getId("loop"), []);
    if (ctrl) recursion = addLoopCtrl(recursion);

    var bodyExpr = getLogicExpr(testTransformed.expr, "&&", getSeq([bodyTransformed.expr, recursion]));
    var expr = getCallExpr(getFuncLoop(bodyExpr), []);

    return returnVal({expr, ctrl});
}

function transformDoWhileStatement(node, vars) {

    var testTransformed = transformNode(node.test, vars);
    var bodyTransformed = transformNode(node.body, vars);
    var ctrl = bodyTransformed.ctrl;

    var recursion = getLogicExpr(testTransformed.expr, "&&", getCallExpr(getId("loop"), []));
    if (ctrl) recursion = addLoopCtrl(recursion);

    var bodyExpr = getSeq([bodyTransformed.expr, recursion]);
    var expr = getCallExpr(getFuncLoop(bodyExpr), []);

    return returnVal({expr, ctrl});
}

function transformForStatement(node, vars) {

    var initExpr   = (node.init   === null) ? getLit(0)    : transformNode(node.init,   vars).expr;
    var testExpr   = (node.test   === null) ? getLit(true) : transformNode(node.test,   vars).expr;
    var updateExpr = (node.update === null) ? getLit(0)    : transformNode(node.update, vars).expr;
    var bodyTransformed = transformNode(node.body, vars);
    var ctrl = bodyTransformed.ctrl;

    var recursion = getSeq([updateExpr, getCallExpr(getId("loop"), [])]);
    if (ctrl) recursion = addLoopCtrl(recursion);

    var bodyExpr = getLogicExpr(testExpr, "&&", getSeq([bodyTransformed.expr, recursion]));
    var funcCall = getCallExpr(getFuncLoop(bodyExpr), []);
    var expr = getSeq([initExpr, funcCall]);

    return returnVal({expr, ctrl});
}

function transformForOfStatement(node, vars) {

    var leftTransformed;
    if (node.left.type === "VariableDeclaration") {

        var decl = node.left.declarations[0];
        if (decl.id.type !== "Identifier") {
            throw new Error(decl.id.type + " is not supported");
        }
        leftTransformed = transformIdentifier(decl.id, vars);
    }
    else {
        leftTransformed = transformNode(node.left, vars);
    }

    var rightTransformed = transformNode(node.right, vars);
    var bodyTransformed = transformNode(node.body, vars);
    var ctrl = bodyTransformed.ctrl;

    var recursion = getCallExpr(getId("loop"), [getId("it")]);
    if (ctrl) recursion = addLoopCtrl(recursion);

    var bodyExpr = getSeq([
        getAssignExpr(leftTransformed.expr, "=", getMemberExpr(getId("itval"), getId("value"), false)),
        bodyTransformed.expr,
        recursion
    ]);
    bodyExpr = getLogicExpr(getMemberExpr(getId("itval"), getId("done"), false), "||", bodyExpr);

    var expr = getCallExpr(getFuncLoop(bodyExpr, rightTransformed.expr), []);

    return returnVal({expr, ctrl});
}

function transformBreakStatement(node) {

    if (node.label !== null) {
        throw new Error("Break statement with label is not supported");
    }

    var expr = getAssignExpr(getId("ctrl"), "=", getLit(ctrlCodes.break));

    return returnVal({expr, ctrl : true});
}

function transformContinueStatement(node) {

    if (node.label !== null) {
        throw new Error("Continue statement with label is not supported");
    }

    var expr = getAssignExpr(getId("ctrl"), "=", getLit(ctrlCodes.continue));

    return returnVal({expr, ctrl : true});
}

function transformSwitchStatement(node, vars) {

    var discriminantTransformed = transformNode(node.discriminant, vars);

    var expressions = [];
    var funcs = [];
    var ctrl = false;

    for (var caseEntry of node.cases) {

        var consequentTransformed = getBodySeq(caseEntry.consequent, vars);
        funcs = funcs.concat(consequentTransformed.funcs);

        var testExpr;
        if (caseEntry.test === null) {
            testExpr = getLit(true);
        } else {
            var testTransformed = transformNode(caseEntry.test, vars);
            testExpr = getLogicExpr(getId("fallthru"), "||", getLogicExpr(getId("disc"), "===", testTransformed.expr));
        }

        var setFallthru = getAssignExpr(getId("fallthru"), "=", getLit(true));
        var caseExpr = getLogicExpr(testExpr, "&&", getSeq([setFallthru, ...consequentTransformed.expressions]));

        if (ctrl) {
            caseExpr = getLogicExpr(getBinExpr(getId("ctrl"), "==", getLit(ctrlCodes.default)), "&&", caseExpr);
        }

        expressions.push(caseExpr);
        ctrl ||= consequentTransformed.ctrl;
    }

    var testForBreak = getLogicExpr(getId("ctrl"), "==", getLit(ctrlCodes.break));
    var resetCtrl = getLogicExpr(testForBreak, "&&", getAssignExpr(getId("ctrl"), "=", getLit(ctrlCodes.default)));
    var bodySeq = [...funcs, ...expressions, resetCtrl];

    var params = [
        getDefaultParam("disc", discriminantTransformed.expr),
        getDefaultParam("fallthru", getLit(false)),
        getDefaultParam("body", getSeq(bodySeq))
    ];
    var expr = getCallExpr(getEmptyFunc(null, params), []);

    return returnVal({expr, ctrl});
}

function transformFunctionDeclaration(node, vars) {

    if (node.async) {
        throw new Error("Async functions are not supported");
    }
    if (node.generator) {
        throw new Error("Generators are not supported");
    }

    var idExpr = getMemberExpr(getId("vars" + vars.index), getId(node.id.name), false);
    var funcAssign = getAssignExpr(idExpr, "=", getFuncDecl(node, vars));
    var funcAttr = getAssignExpr(getMemberExpr(idExpr, getId("customfunc")), "=", getLit(true));
    var expr = getSeq([funcAssign, funcAttr]);

    return returnVal({expr, func : true});
}

function transformReturnStatement(node, vars) {

    var argumentExpr = transformNode(node.argument, vars).expr;

    var expr = getSeq([
        getAssignExpr(getId("retval"), "=", argumentExpr),
        getAssignExpr(getId("ctrl"), "=", getLit(ctrlCodes.return))
    ]);

    return returnVal({expr, ctrl : true});
}

function transformThrowStatement(node, vars) {

    var transformedArgument = transformNode(node.argument, vars);

    var consoleLogExpr = getCallExpr(getMemberExpr(getId("console"), getId("error"), false), [transformedArgument.expr]);
    var processExitExpr = getCallExpr(getMemberExpr(getId("process"), getId("exit"), false), [getLit(1)]);
    var expr = getSeq([consoleLogExpr, processExitExpr]);

    return returnVal({expr});
}

var argv = yargs
    .option("pretty", {
        alias: "p",
        description: "pretty format the output",
        type: "boolean"
    })
    .option("debug", {
        alias: "d",
        description: "debug mode",
        type: "boolean"
    })
    .help().alias("help", "h")
    .argv;

var fileName = argv._[0];
var source = fs.readFileSync(fileName, "utf-8");
var result = transformSource(source, argv.pretty, argv.debug);
console.log(result);
