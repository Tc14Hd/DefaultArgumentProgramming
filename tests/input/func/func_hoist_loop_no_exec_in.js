console.log(f);

for (var i = 0; i < 0; i++) {
    f();
    function f() {
        console.log("X");
    }
}

console.log(f);
