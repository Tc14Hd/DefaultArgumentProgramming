function mergeSort(A) {

    if (A.length <= 1) return [...A];
    var m = A.length / 2;

    var left = mergeSort(A.slice(0, m));
    var right = mergeSort(A.slice(m));

    var i = 0, j = 0, res = [];
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i++]);
        }
        else {
            res.push(right[j++]);
        }
    }

    while (i < left.length) {
        res.push(left[i++]);
    }

    while (j < right.length) {
        res.push(right[j++]);
    }

    return res;
}

A = [4, 6, 8, 1, 3, 6, 9, 2, 5];
console.log(mergeSort(A));
