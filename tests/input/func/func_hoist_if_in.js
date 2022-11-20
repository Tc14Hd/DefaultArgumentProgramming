console.log(f, g);

if (true) {
    function f() {
        console.log("f");
    }
}
else {
    function g() {
        console.log("g");
    }
}

f();
console.log(g);
