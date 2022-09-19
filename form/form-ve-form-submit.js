let formDom = document.querySelector("#user-form");
formDom.addEventListener("submit", formSubmit);


function formSubmit(event) {
    event.preventDefault(); // form un default sayfa yenileme işlemi iptal edildi.

    let scoreInputDom = document.querySelector("#score");
    // console.log(scoreInputDom.value); //form verisini almak
    localStorage.setItem("score", scoreInputDom.value);
    console.log("form submit");
}