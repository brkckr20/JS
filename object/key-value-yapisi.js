
// key değeri arasında boşluk bırakılamaz
// ister camelCase olarak ya da altı_cizgili olarak kullanılabilir. ( yaygın olan camelCase )

let laptop = {
    brand: "Apple",
    model: "Mac Book Air",
    "1kg": 100,
    // model name : "aaa"
};

console.log(laptop);
// key değerleri sayı ile başlayamaz (string olarak hariç örn : "1model")


console.log(laptop["1kg"]); // key ismiyle (string) ilgili değere ulaşmak
console.log(laptop.brand); // key ismiyle ilgili değere ulaşmak
console.log(laptop["model"]);



// key değerine yeni değer eklemek
laptop.brand = "macos"
console.log(laptop);


// yeni bilgi eklemek
laptop.version = "10.02"; //yeni key eklemek
console.log(laptop);


//key değerlerine ulaşmak
let keys = Object.keys(laptop);
console.log(keys);
keys.forEach(item => {
    console.log(item);
    console.log(laptop[item]);
})



//values (değer) bilgilerine ulaşmak
console.log(Object.values(laptop));
let values = Object.values(laptop);
values.forEach(value => {
    console.log("value : ", value);
})