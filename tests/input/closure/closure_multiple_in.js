function f(a) {

    var x = a;

    function g() {
        return x;
    }

    return g;
}

var r = f(1)();
console.log(r);

r = f(2)();
console.log(r);
