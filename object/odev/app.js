let menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    }
];

let buttonContainer = document.querySelector(".btn-container");
/* butonların olusturulacagi element */

let productList = document.querySelector('.section-center');
/* yemeklerin listeleneceği element */

let category = Array.from(new Set(menu.map(item => item.category)));
/* liste içindeki ülkelerin çekilerek yeni bir array oluşturuldu ve yeni bir ülke eklenmesi durumunda dinamik olarak gelmesi sağlandı */

function createButton() { /* buttonların olusturulması */
    let category = Array.from(new Set(menu.map(item => item.category)))
    let ulDom = document.createElement("ul");
    category.unshift("All");
    for (let i = 0; i < category.length; i++) {
        let liDom = document.createElement("li");
        liDom.innerHTML = category[i];
        liDom.classList.add('btn-item');
        liDom.addEventListener('click', () => {
            if (category[i] === 'All') {
                listAllFoods()
            }else{
                selectFoods(category[i])
            }
        })
        ulDom.appendChild(liDom);
    }
    ulDom.classList.add('btn-list');
    buttonContainer.appendChild(ulDom);

}

const eatMake = (food) => { /* yemek listesi bölümünün oluşturulması */
    let output = `
    <div class="menu-items col-lg-6 col-sm-12">
        <img class="photo" src="${food.img}" alt="${food.title}">
        <div class="menu-info">
            <div class="menu-title">
            <h4>${food.title}</h4>
            <h4 class="price">${food.price}</h4>
        </div>
        <div class="menu-text">${food.desc}</div>
        </div>
    </div>  
    `
    return output;
}

const listAllFoods = () => { /* seçili menu olmaması yada All seçilmesi durumunda listelenecek olarak element */
    let allFoods = "";

    menu.map(item => {
        allFoods += eatMake(item)
    })
    productList.innerHTML = allFoods;
}
document.addEventListener("DOMContentLoaded", listAllFoods);

const selectFoods = (cat) => { /* seçilen kategoriye göre listelenmesi işlemi */
    let selectFood = "";
    menu.map(item => {
        if (item.category === cat) {
            selectFood += eatMake(item);
        }
    });
    productList.innerHTML = selectFood;
}

createButton();