// https://github.com/meriyah/meriyah
const meriyah = require("meriyah");

BigInt.prototype["toJSON"] = function() {
    return this.toString() + "n";
};

RegExp.prototype["toJSON"] = function() {
    return this.toString();
}

let source = process.argv[2];
let tree = meriyah.parseScript(source, {webcompat : true});
let str = JSON.stringify(tree, undefined, 2);
console.log(str);
