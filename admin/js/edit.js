const products = JSON.parse(localStorage.getItem("products"))
let product = products.find(e => e.id == location.hash.slice(1))

productName.value = product.productName;
price.value = product.price
function editProduct() {


    product.productName = productName.value;
    product.price = price.value;
    product.image = image.files.length != 0 ? image.files[0]['name'] : product.image


    localStorage.setItem("products", JSON.stringify(products))
    location.href = "admin.html"
}