//Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3
//Uzunluğu 2 olan bir tam sayı dizisinin 1 veya 3 içerip içermediğini test eden bir JavaScript programı yazın.
function notContain(dizi) {
    if (dizi.length === 2) {
        if (dizi[0] === 1 || dizi[0] === 3 || dizi[1] === 1 || dizi[1] === 3) {
            return "dizide 1 veya 3 var";
        }
        return "dizi de 1 veya 3 yok";
    }
    return "dizi 2 karakter uzunluğunda olmalıdır.";
}
;
console.log(notContain([2, 2]));
console.log(notContain([2, 3]));
