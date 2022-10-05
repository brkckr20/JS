let user = {
    firstname: "Burak",
    lastname: "Çakır",
    score: [1, 2, 3, 4],
    isActive: false,
    shortname: function () { // metot tanımlama
        return `${this.firstname[0].toUpperCase()}.${this.lastname}`
    }
}


console.log(user);

console.log(user.shortname());