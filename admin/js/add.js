function addProduct() {
    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    const id = products.at(-1) ? products.at(-1).id + 1 : 1
    if (productName.value !== "" && price.value !== "" && image.value !== "" && image.files[0]['name']) {
        const product = {
            id,
            productName: productName.value,
            price: price.value,
            image: image.files[0]['name']
        }
        products.push(product)
        localStorage.setItem("products", JSON.stringify(products))
        location.href = "admin.html"
    }
}