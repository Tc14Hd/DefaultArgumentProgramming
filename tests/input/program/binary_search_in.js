function binarySearch(A, x) {

    if (A.length == 0) return -1;

    var lo = 0;
    var hi = A.length - 1;

    while (lo != hi) {
        var m = Math.floor((lo + hi) / 2);
        if (A[m] >= x) hi = m;
        else lo = m + 1;
    }

    if (A[lo] == x) return lo;
    else return -1;
}

/*   0  1  2  3  4  5  6  */
A = [1, 2, 4, 4, 7, 9, 11];
console.log(binarySearch(A, 2));
console.log(binarySearch(A, 7));
console.log(binarySearch(A, 4));
console.log(binarySearch([], 0));
