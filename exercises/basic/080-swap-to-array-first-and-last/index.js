//Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1
//Belirli bir tamsayı dizisinin ilk ve son öğelerini değiştirmek için bir JavaScript programı yazın. Dizi uzunluğu en az 1 olmalıdır.
var ReverseArray = function (arr) {
    var _a;
    if (arr.length >= 1) {
        _a = [arr[arr.length - 1], arr[0]], arr[0] = _a[0], arr[arr.length - 1] = _a[1];
        return arr;
    }
    else {
        return [0];
    }
};
console.log(ReverseArray([4, 2, 3]));
