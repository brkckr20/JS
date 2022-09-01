let username = prompt("Kullanici Adiniz : ");
let age = prompt("Yaşınız : ");
let info = document.querySelector("#info");

if (username && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz!";
} else if (!username) {
    info.innerHTML = "Kullanici adi bilgisi boş geçilemez!";
} else if (age < 18) {
    info.innerHTML = "yaş bilgisi boş geçilemez yada yaşınız 18den küçük";
}