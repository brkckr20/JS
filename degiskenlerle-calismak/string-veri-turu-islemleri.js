let email = "burakcakir@mail.com"
let firstName = "Burak"
let lastName = "Cakir"


// string karakter sayısı
console.log(email.length)

// ilk karakteri bulmak
console.log(firstName[0])
console.log(firstName.charAt(1))

// büyük küçük harf yapmak
console.log(firstName.toUpperCase()); //büyük harf
console.log(firstName.toLowerCase()); // küçük harf


// string içinde veri aramak ve yerini bulmak -> search
console.log(email.search("@"));
console.log(email.search("q")); //olmayan bir değer aratırsak -1 döndürür.


// belli bir yere kadar almak -> slice
console.log(email.slice(5)); // uygulamamızda >mail.com olarak geldi
let DOMAIN = email.slice(email.search("@") + 1); // domain adresini almak
console.log(DOMAIN);
console.log("Domain Name : ", DOMAIN.slice(0, DOMAIN.indexOf("."))); // sadece mail kismini aldik

// bilgiyi degistirmek - replace
email = email.replace('mail.com', 'denememaili.com')
console.log(email)


// istediğim bilgi var mı?
console.log(email.includes("@")); //true
console.log(email.includes("asdsa")); //false


// istediğim bilgiyle başladı / bitti mi?
console.log(email.endsWith("denememaili.com")) //true
console.log(email.startsWith("denememaili.com")) //false


// ilk harfi büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}`
console.log(fullName)