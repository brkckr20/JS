//Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1
//Belirli bir tamsayı dizisinden ilk ve son öğeleri alan ve uzunluğu 1'den büyük veya eşit olmalıdır yeni bir dizi oluşturmak için bir JavaScript programı yazın
function newArrCrate(arr1) {
    if (arr1.length >= 1) {
        return [arr1[0], arr1[arr1.length - 1]];
    }
    else {
        return "lütfen en az bir karakterli dizi giriniz...";
    }
}
console.log(newArrCrate([11, 2, 3]));
