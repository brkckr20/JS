// prompt ile kullanıcıdan veri almak


let fullName = prompt("Lutfen adinizi giriniz...");
// console.log(fullName);
let prompts = document.querySelector("#prompt");
prompts.innerHTML = `<h1 style="color:red">${fullName} sitemize hoş geldiniz...</h1>`