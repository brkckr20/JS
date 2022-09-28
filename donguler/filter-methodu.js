// 5 harften fazla olanlar?
const PRODUCTS = ["laptops", "PHONE", "SPEAKER", "BLA BLA BLA", "MİC"];

const newProducts = PRODUCTS.filter(item => item.length > 5);
console.log(newProducts);

// aktif kullanıcılar
const users = [
    { fullname: "burak çakır", isActive: false },
    { fullname: "aynur çakır", isActive: true },
]

// const activeUser = users.filter(user => user.isActive === true)   alttaki de kısa yazımı
const activeUser = users.filter(user => user.isActive)
console.log(activeUser);