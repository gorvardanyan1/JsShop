const products = JSON.parse(localStorage.getItem("products"))
let product = products.find(e => e.id == location.hash.slice(1))
const categories = JSON.parse(localStorage.getItem('categories'));
selectTypes(categories)

productName.value = product.productName;
price.value = product.price
function editProduct() {

    product.productType = typeSelect.value
    product.productName = productName.value;
    product.price = price.value;
    product.image = image.files.length != 0 ? image.files[0]['name'] : product.image


    localStorage.setItem("products", JSON.stringify(products))
    location.href = "admin.html"
}

function selectTypes(types) {
    types.map((e => {
        let option = document.createElement("option")
        option.value = e
        option.innerText = e
        typeSelect.append(option)
    }))

}