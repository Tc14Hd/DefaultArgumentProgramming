function f() {
    var x = 0;

    function g() {
        y = 1;

        function h() {
            return [x, y];
        }

        return h;
    }

    return g;
}

console.log(f()()());
