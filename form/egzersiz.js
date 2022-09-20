let userForm = document.querySelector("#user-form");
userForm.addEventListener("submit", formHandler);
let alertDOM = document.querySelector("#alert");


let alertFunction = (type = "warning", title, message) => `
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
`



function formHandler(e) {
    e.preventDefault();
    const username = document.querySelector("#username");
    const score = document.querySelector("#score");
    if (username.value && score.value) {
        addItem(username.value, score.value);
        username.value = ""; //gönderdikten sonra sıfırlama
        score.value = "";

    } else {
        alertDOM.innerHTML = alertFunction("danger", "Önemli Uyarı! ", "Eksik bilgi girildi");
    }
}


let userListDom = document.querySelector("#user-list");
function addItem(userName, score) {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `
    ${userName} 
    <span class="badge badge-primary badge-pill">${score}</span>
    `;
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDom.append(liDOM);
}
