var a = [1, 2, 3];
var b = {}
for (b.c of a) {
    console.log(b.c);
}
console.log("End", b.c);
