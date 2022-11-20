console.log(f, g);

switch (0) {
    case 0:
        f();
        g();
        function f() {
            console.log("f");
        }
        break;
    case 1:
        function g() {
            console.log("g");
        }
        break;
}

// console.log(f, g);
