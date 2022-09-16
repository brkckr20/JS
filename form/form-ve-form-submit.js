let formDom = document.querySelector("#user-form");
formDom.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault(); // form un default sayfa yenileme işlemi iptal edildi.
    console.log("form submit");
}