/* arttir azalt */

let counter = 0;
let counterDOM = document.querySelector("#counter");

let arttir = document.querySelector("#arttir");
let azalt = document.querySelector("#azalt");

counterDOM.innerHTML = counter;

arttir.addEventListener("click", clickEvent);
azalt.addEventListener("click", clickEvent);


function clickEvent() {
    if (this.id == "arttir") {
        counterDOM.innerHTML = counter += 1;
    } else {
        counterDOM.innerHTML = counter -= 1;
    }
}