function f() {
    g();
    function g() {
        console.log("X");
    }
}

f();
