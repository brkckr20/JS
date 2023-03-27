//Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
//Doğru bir ifade elde etmek için belirli bir x $ y = z ifadesindeki $'ı +, -, * veya / işaretlerinden biriyle değiştirmenin mümkün olup olmadığını kontrol eden bir JavaScript programı yazın.

function check(x: number, y: number, z: number) {
    return x + y == z || x * y == z || x / y == z || x - y == z;
}

console.log(check(1,2,3));
console.log(check(1,2,4));
