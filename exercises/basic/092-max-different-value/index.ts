//Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers
//Belirli bir tam sayı dizisinin herhangi iki bitişik elemanı arasındaki maksimum farkı bulan bir JavaScript programı yazın

// const array = [1, 2, 44, 34, 3, 56, 768, 12];
// const max = 0;
// let first, last;
// for (let i = 0; i < array.length; i++) {
//     first = array[i];
//     last = array[i + 1];
//     if (first > last) {
        
//     }
    
// }

function difference(array: number[]) {
    let max = -1;
    let temp;
    for (let i = 0; i < array.length - 1; i++){
        temp = Math.abs(array[i] - array[i + 1]);
        max = Math.max(max, temp);
    }
    return max
}
console.log(difference([1, 2, 3, 8, 9]));

function max_difference(arr:number[]) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
		max = Math.max(max, temp);
	  }
	return max;
}
console.log(max_difference([13, 2, 3, 8, 9]))