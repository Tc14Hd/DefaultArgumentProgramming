function f(n) {
    if (n > 0) {
        console.log(n);
        f(n - 1);
    }
}

function g() {}

var h = f;
f = g;
h(7);
