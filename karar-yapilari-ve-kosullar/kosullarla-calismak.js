/* harf notu yazdirmak */

/* promtla veri al ve aşağıdaki not durumlarına göre harf notu belirle */
/* 
    AA 90-100
    BA 85-89
    BB 80-84
    CB 75-79
    CC 70-74
    DC 65-69
    DD 60-64
    FD 50-59
    FF 0-40
*/


/* ŞART 1 : KULLANICININ GİRDİĞİ DEĞERİ İLGİLİ ARALIKTA MI KONTROL ET */
/* ŞART 2 : FF BİLGİSİ İSE ÜZGÜN İCONU ÇIKART DİĞERLERİNDE İSE GÜLÜCÜK OLSUN */
/* ŞART 3 : FF CLASS BİLGİSİ text-danger, DİĞERLERİNİN İSE text-primary OLSUN */

let result = document.querySelector("#result");
let point = Number(prompt("Lütfen puanızı giriniz!"));

if (point < 0 || point > 100) {
    result.innerHTML = "Lütfen 0 ile 100 arasında bir değer giriniz!"
}
if (point >= 90) {
    result.innerHTML = "AA   :)";
    result.classList.add("text-primary");
} else if (point >= 85) {
    result.innerHTML = "BA   :)";
    result.classList.add("text-primary");
} else if (point >= 80) {
    result.innerHTML = "BB   :)";
    result.classList.add("text-primary");
}
else if (point >= 75) {
    result.innerHTML = "CB   :)";
    result.classList.add("text-primary");
}
else if (point >= 70) {
    result.innerHTML = "CC   :)";
    result.classList.add("text-primary");
}
else if (point >= 65) {
    result.innerHTML = "DC   :)";
    result.classList.add("text-primary");
}
else if (point >= 60) {
    result.innerHTML = "DD   :)";
    result.classList.add("text-primary");
}
else if (point >= 55) {
    result.innerHTML = "DD   :)";
    result.classList.add("text-primary");
}
else if (point >= 50) {
    result.innerHTML = "FD   :)";
    result.classList.add("text-primary");
}
else if (point < 50) {
    result.innerHTML = "FF :(";
    result.classList.add("text-danger");
}
