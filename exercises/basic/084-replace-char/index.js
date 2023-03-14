var replace = function (str) {
    var arr = str.split("");
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i].charCodeAt(0) - 'a'.charCodeAt(0);
        n = (n + 1) % 26;
        arr[i] = String.fromCharCode(n + 'a'.charCodeAt(0));
    }
    console.log(arr.join(""));
};
replace("deneme");
