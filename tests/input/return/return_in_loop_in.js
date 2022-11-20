function f() {
    for (var i = 0; i < 5; i++) {
        return i;
    }
    console.log("Unreachable");
}

var x = f();
console.log(x);
