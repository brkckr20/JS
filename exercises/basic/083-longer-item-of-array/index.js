function longer(arr) {
    var max = arr[0].length;
    arr.map(function (item) { return max = Math.max(max, item.length); });
    var result = arr.filter(function (x) { return x.length === max; });
    return result;
}
console.log(longer(["lorem", "ipsum", "dolor", "sit", "ametist"]));
