function f() {

    var x = 0;

    function g() {
        return x;
    }

    return g;
}

var x = 1;
var r = f()();
console.log(r);
