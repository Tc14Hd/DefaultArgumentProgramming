function f() {

    var x = 0;

    function g() {
        return x;
    }

    function h(a) {
        x = a;
    }

    return [g, h];
}

var r = f();
console.log(r[0]());
r[1](2);
console.log(r[0]());
