let users = ["lorem", "ipsum", "dolor", "sit", "amet"];
let usersDOM = document.querySelector("#user-list");
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// let index;
// for (index = 0; index < 10; index++) {
//     console.log(index);
// }



let index = 0
for (; index < users.length; index++) {
    const liDom = document.createElement("li");
    liDom.innerHTML = users[index];
    usersDOM.appendChild(liDom);
}