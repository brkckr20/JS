//Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
//Belirli bir pozitif tam sayı dizisini iki parçaya bölmek için bir JavaScript kodu yazın. Birinci eleman birinci kısma gider, ikinci eleman ikinci kısma gider ve üçüncü eleman birinci kısma gider ve böyle devam eder. Şimdi iki parçanın toplamını hesaplayın ve iki boyutlu bir dizide saklayın.
function newArr(arr) {
    var result = [0, 0];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2) {
            result[1] += arr[i];
        }
        else {
            result[0] += arr[i];
        }
    }
    console.log(result);
}
newArr([1, 2, 3, 4, 5, 4, 3, 2, 4, 56, 7, 343]);
