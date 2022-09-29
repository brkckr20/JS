const users = ["Ayşe", "hulki", "Murat", "Cemal"];


const newUsers = users.map(user => user.toLocaleUpperCase()); //hepsini küçük harfe çevir
console.log(newUsers);


const usersObj = users.map(item => {
    return {
        userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    }
})

console.log(usersObj);