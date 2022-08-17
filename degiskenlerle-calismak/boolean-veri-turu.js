/* 0 ve 1' anlamak */

let isActive = false; // -> 0 anlamına gelir
isActive = true; // -> 1 anlamına gelir
console.log(isActive);

let userName;
let isUserName = Boolean(userName); // dolu mu boş mu kontrolü yapar (bilgi var mı yok mu) varsa true yoksa false
console.log(isUserName);

//Boolean() içerisine bir değer gönderirsek true değeri dondurur.
Boolean("112") //true
Boolean(124)   //true
Boolean("")     //false
Boolean(0)     //false
Boolean(-0.1)     //true
Boolean(0 === 0)     //true