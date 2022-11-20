console.log(f);

for (var i = 0; i < 10; i++) {
    f();
    function f() {
        console.log("X");
    }
}

f();
