/* ternary operatorler */

let userName = prompt("Kullanıcı adını giriniz!");
let info = document.querySelector("#info");

info.innerHTML = userName.length > 0 ? `Kullanıcı adınız ${userName}` : 'Kullanıcı adı boş'