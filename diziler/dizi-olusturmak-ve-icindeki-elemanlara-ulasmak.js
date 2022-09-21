// array olusturmak

let domain = "burak-cakir.com"
let isActive = false
let items = [1, 2, 3, isActive, domain];

console.log(items);

let emptyArray = []; // boş liste

console.log(items.length); // dizi içindeki eleman sayısı
// document.querySelector("#info").innerHTML = items.length

console.log(items[0]); // dizinin ilk elemanı

console.log("ortadaki eleman : ", items[Math.floor(items.length / 2)]); // ortadaki elemanın bulunması

console.log(items[items.length - 1]); // dizinin son elemanı


console.log(typeof (items)); // object olarak çıktı verir

console.log(Array.isArray(items)); // değişkenin array olup olmadığının kontrolü