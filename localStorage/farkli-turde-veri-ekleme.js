const user = {
    name: "burak cakir",
    isActive: true
}

// localStorage.setItem("userInfo", user);
localStorage.setItem("userInfo", JSON.stringify(user));

// let userInfo = localStorage.getItem("userInfo");
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(userInfo);