if (!localStorage.getItem("admin")) {
    location.href = "login.html"
}
let products = JSON.parse(localStorage.getItem("products"));

function show(products) {
    tbody.innerHTML = ""

    return products.map((product) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `  
     <td>${product.id}</td>
     <td>${product.productName}</td>
     <td>${product.price}</td>
     <td><img src=./images/${product.image}></td> 
    
     <td class="editTd"><img class="editImg" src="./edit.png" onclick=edit(${product.id})>
    
     <img class="trash" src="./trash.png" onClick=deleteProduct(this,${product.id})>
     
     </td>
    
   `
        tbody.append(tr)
    })
}

function edit(id) {

    location.href = `edit.html#${id}`

}

function deleteProduct(that, id) {
    // products = products.filter(e => e.id != id)
    // show(products)

    let fin = products.find(e => e.id == id)
    products.splice(products.indexOf(fin), 1)
    that.parentElement.parentElement.remove()

    localStorage.setItem("products", JSON.stringify(products))
}
show(products)