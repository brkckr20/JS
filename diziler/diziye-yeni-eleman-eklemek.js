
let items = [10, 20, 30, 40];
console.log("listenin ilk hali : ", items);

// sona eleman eklemek
items.push(50);
console.log("sona eklenmiş hali : ", items);


// başa eleman eklemek
items.unshift(5);
console.log("başa eklenmiş hali : ", items);


// sondan eleman silmek
let lastItem = items.pop(); // değişkene atarsak silinen elemanı verir
console.log("Silinen eleman : ", lastItem);
console.log("sondan silinmiş hali : ", items);

// ilk eleman silmek
let firstItem = items.shift(); // değişkene atarsak silinen elemanı verir
console.log("Silinen eleman : ", firstItem);
console.log("sondan silinmiş hali : ", items);



// array içindeki öğenin değerini değiştirmek
items[2] = 100;
console.log("değiştirilme durumu", items);