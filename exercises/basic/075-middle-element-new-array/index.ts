//Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
//İki tamsayı dizisinin ortadaki öğelerini alan ve her biri 3 uzunluğunda yeni bir dizi oluşturan bir JavaScript programı yazın.

const newArray = (value1: number[], value2: Array<number>) => {
    if (value1.length !== 3 || value2.length !== 3) {
        return "lütfen 3 karakterli diziler giriniz";
    } else {
        let arr: number[] = [];
        arr = [value1[1], value2[1]];
        return arr;
    }
}

console.log(newArray([10, 2, 5], [3, 5, 121]));