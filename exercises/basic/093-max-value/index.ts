//Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers
//Belirli bir tamsayı dizisinin olası tüm çiftleri arasındaki maksimum farkı bulan bir JavaScript programı yazın

function difference(dizi:number[]) : number{
    let max_val = 0;

    for (let i = 0; i < dizi.length; i++) {
        for (let k = 0; k != i && k < dizi.length; k++){
            const diff = Math.abs(dizi[i] - dizi[k]);
            max_val = Math.max(max_val, diff);
        }        
    }
    return max_val;
}

const arr = [1, 2, 4, 556, 46, 7];
const arr1 = [1, 2, 4, 22, 46, 7];

const result = difference(arr);
const result1 = difference(arr1);

console.log(result);
console.log(result1);