function f() {
    {
        return 0;
    }
    console.log("Unreachable");
}

var x = f();
console.log(x);
