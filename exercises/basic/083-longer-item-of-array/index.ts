function longer(arr: string[]) {
    let max = arr[0].length;
    arr.map(item => max = Math.max(max, item.length));
    let result = arr.filter(x => x.length === max);
    return result;
    
}

console.log(longer(["lorem","ipsum","dolor","sit","ametist"]));
