"use strict";
//Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not
//İki tam sayı ve bir bölen alan bir JavaScript programı yazın. Verilen bölen her iki tam sayıyı da bölüyorsa ve ikisini de bölmüyorsa, verilen iki tam sayı benzerdir. Verilen iki tamsayının benzer olup olmadığını kontrol edin
function divisor(num1, num2, divise) {
    if ((num1 % divise === 0 && num2 % divise === 0) || (num1 % divise !== 0 && num2 % divise !== 0)) {
        console.log("eşittir");
    }
    else {
        console.log("değildir");
    }
}
divisor(10, 25, 5);
divisor(10, 20, 4);
