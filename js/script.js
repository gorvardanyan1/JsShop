const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
const categories = localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : []
const cartProduct = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
cartProdLength.innerText = cartProduct.length
function render(products, categories) {
    categories.map((element) => {
        let section = document.createElement("section")
        let header = document.createElement("h2")
        header.innerText = element
        section.append(header)
        let categoryFilter = products.filter(e => element === e.productType)

        let productsDiv = document.createElement("div")
        categoryFilter.map((elem) => {

            let productDiv = document.createElement("div")
            productsDiv.classList.add("productsDiv")
            productDiv.classList.add("productDiv")
            productDiv.innerHTML = `
            <img class="productImg" src=./admin/images/${elem.image} >
            <h5>${elem.productName}</h5>
             <p>${elem.price}$0</p>
             <button onclick=addCartFunc(${elem.id})>Add Cart</button>
            `


            productsDiv.append(productDiv)

        })
        section.append(productsDiv)


        mainDiv.append(section)
    })

}
render(products, categories)

function addCartFunc(id) {

    cartProduct.push(products.find(e => e.id === id))
    cartProdLength.innerText = cartProduct.length
    localStorage.setItem("cart", JSON.stringify(cartProduct))
}