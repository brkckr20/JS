/* fetch çağrısı */

fetch("./settings.json")
    .then(res => res.json())
    .then(data => console.log(data));

    let userListDom = document.querySelector("#user");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = item.title;
            userListDom.appendChild(li);
        });
    })