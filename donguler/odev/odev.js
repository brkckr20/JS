let ulDOM = document.querySelector("#todo");
let form = document.querySelector("#form");
let input = document.querySelector("#userTodo");
let liCollection = document.getElementsByTagName("li");
let taskListLS = [];

function updateLocalStorage() {
    for (let t = 0; t < liCollection.length; t++) {
        taskListLS.push(liCollection[t].innerText);
    }
    localStorage.setItem("tList", JSON.stringify(taskListLS));
}

updateLocalStorage();


form.addEventListener("submit", saveNewTodo);

function saveNewTodo(e) {
    e.preventDefault();
    if (input.value.trim()) {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = `
                            <div class="text-2xl font-semibold" id="todo-list-items" >${input.value}</div>
                            <button class="bg-indigo-100 hover:bg-indigo-300 transition-colors" id="sil">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        `;
        liDOM.classList.add("flex", "w-full", "justify-between", "p-4", "bg-amber-100", "items-center");
        liDOM.setAttribute("onclick", "check(this)")
        ulDOM.append(liDOM);
        showAlert("İşlem başarıyla gerçekleştirildi", "green");
        localStorage.clear();
        /* taskListLS = [];
        updateLocalStorage(); */
    } else {
        showAlert("İşlem başarısız. Lütfen belirtilen alana bir değer giriniz!", "red")
    }
}

function removeTodo(item) {
    console.log("item removed");
}

function check(item) {
    item.classList.toggle("line-through")
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


/*let ulDOM = document.querySelector("#todo");
let btnKaydet = document.querySelector("#btnKaydet");
let form = document.querySelector("#form");
let userTodo = document.querySelector("#userTodo");
let silBtn = document.querySelector("#sil");
let liCollection = document.getElementsByTagName("li");


form.addEventListener("submit", setForm);


function setForm(e) {
    e.preventDefault();
    if (userTodo.value.trim().length > 0) {
        kaydet(userTodo.value);
        userTodo.value = "";
        showAlert("İşlem başarıyla kaydedildi!", "rgb(0,153,0)")
    } else {
        showAlert("Tüm alanları doldurun!", "rgb(255, 99, 71)");
    }
    console.log(liCollection);
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
}*/