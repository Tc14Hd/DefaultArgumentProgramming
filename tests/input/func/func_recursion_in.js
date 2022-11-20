function f(n) {
    if (n > 0) {
        console.log(n);
        f(n - 1);
    }
}

f(5);
