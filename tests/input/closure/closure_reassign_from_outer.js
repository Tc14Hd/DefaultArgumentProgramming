function f() {

    var x = 0;

    function g() {
        return x;
    }

    x = 1;

    return g;
}

var r = f()();
console.log(r);
