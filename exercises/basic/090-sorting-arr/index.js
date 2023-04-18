"use strict";
function sortinggen(arr, k) {
    arr.sort(function (a, b) { return b - a; });
    return arr[k - 1];
}
let arr = [1, 2, 6, 4, 5];
let k = 3;
console.log(sortinggen(arr, k));
