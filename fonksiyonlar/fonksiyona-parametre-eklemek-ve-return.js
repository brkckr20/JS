/* 
    TEMEL KURALLAR
    - bir fonksiyon bir veya daha fazla parametre alabilir veya hiç almayabilir
    - bir fonksiyon dışarı bilgi gönderebilir (return) veya göndermeyebilir.
    - mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir.
*/


// let firstName = "burak";

function greetings(firstName = "", lastname = "") { /* default parametre alıyor */
    console.log(`Merhaba ${firstName} - ${lastname}`);
}




let info = greetings("Armut", "Piş ağzıma düş");
console.log("info", info);
greetings(); // parametre gondermedik


function greeting2(firstName, lastname) {
    let info = `Merhaba ${firstName} - ${lastname}`;
    return info;
}

let info2 = greeting2("Buraakk", "Çakır");

console.log(info2);

greeting2("Ahmet", "Kemal");


console.log("----------------------------------------------------------------------------------------");


function writeInDomWithId(id, info) {
    let domObject = document.querySelector(`#${id}`);
    domObject.innerHTML = info
}

writeInDomWithId("info", greeting2("Buraakk", "Çakır"))

writeInDomWithId("greeting", "Burak çakır JavaScript öğreniyorum!");