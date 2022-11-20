function f() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
        break;
    }
    return 1;
}

var x = f();
console.log(x);
