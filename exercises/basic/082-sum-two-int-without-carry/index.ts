//Write a JavaScript to add two positive integers without carry
//Taşıma olmadan iki pozitif tam sayı eklemek için bir JavaScript yazın

const sum = (num1: number, num2: number) => {
    let result = 0, x = 1;
    while (num1>0 && num2 >0) {
        result += x * ((num1 + num2) % 10);
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        x *= 10;
    }
    return result;
}

console.log(sum(123,456));
