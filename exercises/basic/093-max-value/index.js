//Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers
//Belirli bir tamsayı dizisinin olası tüm çiftleri arasındaki maksimum farkı bulan bir JavaScript programı yazın
function difference(dizi) {
    var max_val = 0;
    for (var i = 0; i < dizi.length; i++) {
        for (var k = 0; k != i && k < dizi.length; k++) {
            var diff = Math.abs(dizi[i] - dizi[k]);
            max_val = Math.max(max_val, diff);
        }
    }
    return max_val;
}
var arr = [1, 2, 4, 556, 46, 7];
var arr1 = [1, 2, 4, 22, 46, 7];
var result = difference(arr);
var result1 = difference(arr1);
console.log(result);
console.log(result1);
