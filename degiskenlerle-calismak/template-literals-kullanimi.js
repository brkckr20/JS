let userName = "burak";
const domain = "burak-cakir.com"

let email = userName + "@" + domain;
console.log("Merhaba:", email, "sitemize hoş geldin!");

/* template literals kullanmak */

let info = `Merhaba ${userName} sisteme hosgeldin! 
Mail adresin ${email}
mail adresinin uzunlugu :${email.length}
borcunuz ${4 * 5 * 2} TL
gunun saat bilgisi ${new Date().getHours()}
`

console.log(info);