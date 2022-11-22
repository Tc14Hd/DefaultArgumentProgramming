function hanoi(i, src, dest, other) {

    if (i > 1) hanoi(i - 1, src, other, dest);
    console.log(src + " -> " + dest);
    if (i > 1) hanoi(i - 1, other, dest, src);
}

hanoi(3, "1", "3", "2");
