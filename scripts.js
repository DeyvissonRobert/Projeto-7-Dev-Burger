const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-all")

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}

function showAll(productArray) {
    let myLi = ''

    productArray.forEach(product => {
        myLi += `
        <li class="item-price">
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
        `
    });

    list.innerHTML = myLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,//Spread Operator
        price: product.price * 0.9, //dar 10% de desconto
    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>A soma de todos os itens do menu é ${formatCurrency(totalValue)}</p>
    </li>
    `
}

function filterVegan() {
    const productsVegan = menuOptions.filter((product) => product.vegan)

    showAll(productsVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterVegan)













// function mostrarTudo() {
//     list.innerHTML = `<li class="item-price">
// <img src="./img/xsalada.jpeg" alt="bacon-egg">
// <p>X-Salada</p>
// <p class="item-price">R$ 30,00</p>
// </li>
// <li class="item-price">
// <img src="./img/xbacon.png" alt="bacon-egg">
// <p>X-Bacon</p>
// <p class="item-price">R$ 34,00</p>
// </li>
// <li class="item-price">
// <img src="./img/bacon-egg.png" alt="bacon-egg">
// <p>X-Bacon Egg</p>
// <p class="item-price">R$ 39,00</p>
// </li>
// <li class="item-price">
// <img src="./img/monstruoso.png" alt="bacon-egg">
// <p>Monstruoso</p>
// <p class="item-price">R$ 50,00</p>
// </li>
// <li class="item-price">
// <img src="./img/xvegan.png" alt="bacon-egg">
// <p>Big Vegano</p>
// <p class="item-price">R$ 55,00</p>
// </li>
// <li class="item-price">
// <img src="./img/monstruoso-vegan.png" alt="bacon-egg">
// <p>X-Vegan</p>
// <p class="item-price">R$ 45,00</p>`
// }
