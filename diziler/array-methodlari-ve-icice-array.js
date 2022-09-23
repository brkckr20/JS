let items = [1, 2, 3, 4, 5];

let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers); //dizinin başına eleman eklemek
items.push(maleUsers); //dizinin sonuna eleman eklemek

console.log(items);
console.log(items[0][1]); //dizinin ilk ögesinin ikinci ögesi


// array içerisindeki ögeleri ayırmak
let newItems = items.splice(2, 3);
console.log("Newitems : ", newItems);
console.log("items : ", items);


// array içerisindeki ögenin index bilgisini bulmak
items.unshift("lorem");
items.push("ipsum");
console.log(items.indexOf("ipsum")); // örneğimizde 5. index'te oluyor.


// array kopyalamak
let copyItems = items;
console.log(items);

copyItems.pop();
console.log("copyIttems", copyItems);
console.log("items", items);

console.log("kopyalandıktan sonra");
copyItems = items.slice(); // slice kopyalama yaptı
copyItems.pop();
console.log("copyIttems 2", copyItems);
console.log("items 2", items);

let newES6Item = [...items]; //es6 ve sonrasındaki kopyalama işlemi
console.log("ES6 : ", newES6Item);


// array birleştirme
let allUsers = [...femaleUsers, ...maleUsers];
console.log("All users ", allUsers);


// array içerisindeki bilgiyi stringe çevirmek
console.log("string all users", allUsers.toString());


// istediğimiz index bilgisine göre öge eklemek
allUsers.splice(allUsers.length - 1, 0, "Melisa");
console.log(allUsers);