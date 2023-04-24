function sum(arr: number[],k:number) {
    let sum = 0, result = 0;
    for (let i = 0; i < k; i++){
        result += arr[i];
    }
    for (let i = k - 1; i < arr.length; i++){
        result += arr[i];
        if (result > sum) {
            result = sum;
        }
        result -= arr[i - k + 1];
    }
    return result;   
}

console.log(sum([1, 2, 3, 14, 5], 2))