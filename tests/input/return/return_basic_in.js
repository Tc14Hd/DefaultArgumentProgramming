function f() {
    return 1;
    console.log("Unreachable");
}

var x = f();
console.log(x);
