/* veri turunu ogrenmek typeof */

let price = 1111;
let strPrice = "1111";
let isActive = false;

console.log("price : ", typeof (price));
console.log("str price : ", typeof (strPrice));
console.log("isActive : ", typeof (isActive));


/* stringi int ve floata dondurmek */
let number1 = "11";
number1 = parseInt(number1)
console.log("number1 :", number1, typeof number1);



let number2 = "112px"; /* integer ile baslarsa parse edebiliriz. string ile başlarsa NaN erroru verir. */
number2 = parseInt(number2)
console.log("number2 :", number2, typeof number2);


let number3 = "px112"; /* integer ile baslarsa parse edebiliriz. string ile başlarsa NaN erroru verir. */
number3 = parseInt(number3)
console.log("number3 :", number3, typeof number3);

let number4 = "px112";
number4 = Number(number4) /* string ifade olmamalı */
console.log("number4 :", number4, typeof number4);


/* floata döndürmek */
let percent = "11.2";
percent = parseFloat(percent);
console.log("Percent degeri ; ", percent);

let percent2 = "11.2px";
percent2 = Number(percent2);
console.log("Percent2 degeri ; ", percent2);



/* numberden stringe donusturmek */
let number5 = 121;
number5 = number5.toString();
console.log("String number : ", number5, typeof number5);