/* NUMBER VERI TURU TANIMLAMAK */

let price = 100;
let tax = 0.18;
let taxPrice = price * tax;
let totalPrice = price + taxPrice

console.log("Vergi tutari :", taxPrice);
console.log("Fiyat :", totalPrice);


console.log("------------------------");

/* artırma ve azaltma islemleri */

let counter = 320;

counter = counter + 1 //   -> uzun yol
counter += 1 //diger yol
counter++   //diger yol
console.log("Counter 1: ", counter);

counter--;
counter -= 1;
console.log("Counter 2: ", counter);

counter *= 10
console.log("Counter 3: ", counter);

counter /= 2;
console.log("Counter 4: ", counter);


console.log("------------------------");


/* islem onceligi */
console.log("Islem sonucu : ", (3 + 6) * 7);


console.log("------------------------");

/* mod alma - kalan bulma */
console.log("3 mod 2 = ", 3 % 2, 'sayi tektir.');


console.log("------------------------");
/* 8 urun alan koliye tum urunler sigiyor mu? */
console.log("Kalan ürün sayisi : ", 18 % 8);


console.log("------------------------");
/* us alma */
console.log("(3**3) 3 üssü 3 = ", 3 ** 3);


console.log("------------------------");
/* asagi yuvarlama */
console.log("1.6 nin asagi yuvarlanmis hali : ", Math.floor(1.6));
console.log("1.2 nin yukari yuvarlanmis hali : ", Math.ceil(1.2));
console.log("1.4 nin yakina yuvarlanmis hali : ", Math.round(1.4));
console.log("1.5 nin yakina yuvarlanmis hali : ", Math.round(1.5));
console.log("1.6 nin yakina yuvarlanmis hali : ", Math.round(1.6));


/* string veri den number'a donusum */
let stringNumber = "12";
console.log("string number : ", stringNumber);
console.log("Stringin number'a donusturulmus hali : ", Number(stringNumber));
