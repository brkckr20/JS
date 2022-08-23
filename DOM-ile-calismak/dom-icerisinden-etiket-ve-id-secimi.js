// dom ile öğe seçimi ve duzenleme islemleri

let title = document.getElementById("title");
title.innerHTML = "Değişen eleman";
console.log(title.innerHTML);


let title2 = document.querySelector("#title2"); // id seçimi
title2.innerHTML = "DEĞİŞEN ELEMAN 2";
console.log(title2.innerHTML);


let link = document.querySelector("ul#list>li>a");
link.style.color = "red";
link.classList.add("btn")
link.innerHTML += " Link Bilgisi Değiştirildi!!!";