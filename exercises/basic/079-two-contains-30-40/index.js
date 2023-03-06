function Check(arr) {
    if ((arr[0] === 30 && arr[1] === 30) || (arr[0] === 40 && arr[1] === 40)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(Check([30, 30]));
console.log(Check([30, 10]));
