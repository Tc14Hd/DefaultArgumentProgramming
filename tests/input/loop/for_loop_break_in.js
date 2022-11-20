for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
        console.log("Unreachable");
    }
    console.log(i);
}
console.log("End", i);
