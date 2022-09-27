const lorem = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
]

/* continue => devam et */
/* break => işlemi durdur */


let counter = 0;

// for (; counter < 10; counter++) {
//     if (counter === 5) { break }
//     console.log(counter);

// }




// for (; counter < 10; counter++) {
//     if (counter === 5) { continue }
//     console.log(counter); //ekrana 5 gördüğünde atlar ve yazmaz

// }


const ulDOM = document.querySelector("#user-list");
let index = 0;
for (; index < lorem.length; index++) {
    // if (lorem[index] == "dolor") { break }; // dolor'a kadar yazar
    if (lorem[index] == "dolor") { continue }; // dolor'u ekrana yazmaz 
    let liDOM = document.createElement("li");
    liDOM.innerHTML = lorem[index];
    ulDOM.appendChild(liDOM);
}