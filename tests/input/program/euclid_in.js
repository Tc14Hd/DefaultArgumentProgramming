a = 27;
b = 18;
while (b > 0) {
    t = b;
    b = a % b;
    a = t;
}
console.log(a);
