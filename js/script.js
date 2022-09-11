const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
const categories = localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : []
let cartProducts = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
cartProdLength.innerText = cartProducts.length
function render(products, categories) {
    categories.map((element) => {
        let section = document.createElement("section")
        let header = document.createElement("h2")
        header.innerText = element
        section.append(header)
        let categoryFilter = products.filter(e => element === e.productType)
        if (categoryFilter[0]) {
            let productsDiv = document.createElement("div")
            categoryFilter.map((elem) => {

                let productDiv = document.createElement("div")
                productsDiv.classList.add("productsDiv")
                productDiv.classList.add("productDiv")
                productDiv.innerHTML = `
                  <img class="productImg" src=./admin/images/${elem.image} >
                  <h5>${elem.productName}</h5>
                  <p>${elem.price}$</p>
                  <button onclick=addCartFunc(${elem.id})>Add Cart</button>
                `

                productsDiv.append(productDiv)

            })
            section.append(productsDiv)



            mainDiv.append(section)
        }




    })

}
render(products, categories)

cartRender(cartProducts)
/////////////////////////////////////////////cart ////////////////////////////
function addCartFunc(id) {




    if (cartProducts.find(e => e.id === id)) {
        let finded = cartProducts.find(e => e.id === id)
        finded.count += 1

    }
    else {
        let finded = products.find(e => e.id === id)
        finded.count = 1

        cartProducts.push(finded)
    }
    cartProdLength.innerText = cartProducts.length
    cartRender(cartProducts)


    localStorage.setItem("cart", JSON.stringify(cartProducts))


}










cartDiv.onclick = function () {
    cartProductDiv.classList.toggle("cartToggle")

}

function cartRender(productsArr) {
    tbodyCart.innerHTML = ""
    productsArr.map(elem => {
        let tr = document.createElement("tr")

        tr.innerHTML = `
       <td><img src=./admin/images/${elem.image}></td>
       <td><h4>${elem.productName}</h4></td>
       <td class="count">
           <div>
                <button onclick="countFunc(${elem.id},'-')" >-</button>
                <h3>${elem.count}</h3> 
                <button onclick="countFunc(${elem.id},'+')" >+</button>
            </div>
        </td>
        <td>
         <h2>${elem.count * elem.price}$</h2>
         <h6 onclick=removeThisElem(${elem.id})>Remove</h6>
        </td>
    `
        tbodyCart.append(tr)
    })
    totalPriceFunc(productsArr)
}

function totalPriceFunc(products) {
    let totalPrice = 0

    products.forEach(element => {

        totalPrice += +element.count * element.price
    });

    totalPriceDiv.innerHTML = `<h4>Sub-Total  ${totalPrice}$</h4>`
}





function countFunc(id, operator) {
    let finded = cartProducts.find(e => e.id === id)

    // if (operator === "-") {

    //     if (finded.count != 1) {
    //         finded.count -= 1
    //     }
    // }
    // else {

    //     finded.count += 1
    // }

    switch (operator) {
        case "-":
            finded.count != 1 ? finded.count -= 1 : null
            break;

        default:
            finded.count += 1
            break;
    }
    cartRender(cartProducts)

    localStorage.setItem("cart", JSON.stringify(cartProducts))
}

removeCartElem.onclick = function () {
    cartProducts = []
    cartProdLength.innerText = cartProducts.length
    cartRender(cartProducts)
    localStorage.setItem("cart", JSON.stringify([]))
}

function removeThisElem(id) {
    cartProdLength.innerText = cartProducts.length
    let finded = cartProducts.find(e => e.id == id)
    cartProducts.splice(cartProducts.indexOf(finded), 1)
    cartProdLength.innerText = cartProducts.length
    cartRender(cartProducts)
    localStorage.setItem("cart", JSON.stringify(cartProducts))
}

