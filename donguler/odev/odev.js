let ulDOM = document.querySelector("#todo");
let btnKaydet = document.querySelector("#btnKaydet");
let form = document.querySelector("#form");
let userTodo = document.querySelector("#userTodo");
let silBtn = document.querySelector("#sil");



form.addEventListener("submit", setForm);

if (silBtn) {
    silBtn.addEventListener("click", alert())
}


function setForm(e) {
    e.preventDefault();
    if (userTodo.value.trim().length > 0) {
        kaydet(userTodo.value);
        userTodo.value = "";
        showAlert("İşlem başarıyla kaydedildi!", "rgb(0,153,0)")
    } else {
        showAlert("Tüm alanları doldurun!", "rgb(255, 99, 71)");
    }
}


function kaydet(todo) {
    let liDOM = document.createElement("li");

    liDOM.innerHTML = `
    <div class="text-2xl font-semibold">${todo}</div>
                    <button class="bg-indigo-100" id="sil">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
    `;
    liDOM.classList.add("flex", "w-full", "justify-between", "p-4", "bg-amber-100", "items-center");
    liDOM.setAttribute("id", "eleman");
    ulDOM.appendChild(liDOM)
    liDOM.addEventListener("click", tamamla)
}

function sil() {
    console.log(sil);
}


function tamamla() {
    let eleman = document.querySelector("#eleman");
    if (eleman) {
        eleman.addEventListener("click", function () {
            console.log("adda");
        })
    }

}


function showAlert(message, bg) {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bg,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}