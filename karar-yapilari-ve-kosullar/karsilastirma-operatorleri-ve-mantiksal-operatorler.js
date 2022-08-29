let price = "100";
let admin = true;

/* == eşitse */
console.log(price == 1);    //false
console.log(price == 100);  //true

/* hem türü hem de değeri eşitse */
console.log(price === 100)  //false
console.log(price === "100") //true


/* eşit değilse */
console.log(price != 1) // true


/* küçükse */
console.log(price < 10);

/* küçük eşitse */
console.log(price <= 100);


/* büyükse */
console.log(price > 10);

/* büyük eşitse */
console.log(price >= 100);



/* ve ( && ) */
console.log(price && !admin); //false


/* veya ( || ) */
console.log(price > 10 || !admin);


/* değil ( ! ) */
console.log(!admin)