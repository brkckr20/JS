/* liste elemanların erismek ve yeni eklemek */

let item = document.querySelector("ul#liste-elemani>li:last-child");
item.innerHTML = "son oge JS ile degistirildi!!"
console.log(item.innerHTML);

let ulDOM = document.querySelector("ul#liste-elemani"); /* ul yi seçmek */
let liDOM = document.createElement("li"); /* li etiketi olusturmak */
let liDOM2 = document.createElement("li"); /* li etiketi olusturmak */

liDOM.innerHTML = "kendi oluşturduğumuz öğe";
liDOM2.innerHTML = "Başa js ile eklemek";

ulDOM.append(liDOM); /* sona ekler */
ulDOM.prepend(liDOM2); /* başa ekleme yapar */