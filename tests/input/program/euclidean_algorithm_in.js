a = 111;
b = 87;
console.log("a = " + a + ", b = " + b);
while (b > 0) {
    t = b;
    b = a % b;
    a = t;
    console.log("a = " + a + ", b = " + b);
}
console.log("GCD: " + a);
