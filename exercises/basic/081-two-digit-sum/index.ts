//Write a JavaScript program to add two digits of a given positive integer of length two.
//İki uzunluğundaki belirli bir pozitif tamsayının iki basamağını toplayan bir JavaScript programı yazın.

function sum(num:number) {
    let first = num.toLocaleString()[0];
    let last = num.toLocaleString()[1];
    return parseInt(first) + parseInt(last);
}

console.log(sum(12));
console.log(sum(35));
