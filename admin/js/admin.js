if (!localStorage.getItem("admin")) {
    location.href = "login.html"
}
let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
let categories = JSON.parse(localStorage.getItem("categories"))

function show(products) {
    tbody.innerHTML = ""

    return products.map((product, index) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `  
     <td>${product.id}</td>
     <td>${product.productType}</td>
     <td>${product.productName}</td>
     <td>${product.price}</td>
     <td><img class="productImg" src=./images/${product.image}></td> 
    
     <td class="editTd"><img class="editImg" src="./edit (1).png" onclick=edit(${product.id})>
    
     <img class="trash" src="./trash.png" onClick=deleteProduct(this,${product.id},${index})>
     
     </td>
    
   `
        tbody.append(tr)
    })
}

function edit(id) {

    location.href = `edit.html#${id}`

}

function deleteProduct(that, id, index) {
    // products = products.filter(e => e.id != id)
    // show(products)

    let findElement = products.find(e => e.id == id)
    products.splice(products.indexOf(findElement), 1)
    that.parentElement.parentElement.remove()

    localStorage.setItem("products", JSON.stringify(products))
}
show(products)
///////////////////// categories /////////////////////////////

let id
function showCategories() {

    tbodyCategories.innerHTML = ""
    return categories.map((elem, index) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${index + 1}</td>
            <td>${elem}</td>

            <td class="editTd"><img class="editImg" src="./edit (1).png" onclick=editCategories(${index})>
    
            <img class="trash" src="./trash.png" onclick=removeCategories(this,${index})>
            
            </td>
         `
        tbodyCategories.append(tr)
    })


}
function editCategories($id) {
    // editCategoriesDiv.style.visibility = "visible"

    editCategoriesDiv.classList.toggle("editDiv")
    editCategoriesInput.value = categories[$id]
    id = $id

}
function removeCategories(that, id) {
    categories.splice(id, 1)
    that.parentElement.parentElement.remove()
    localStorage.setItem("categories", JSON.stringify(categories))
    // showCategories()
}
editCategoriesBtn.onclick = function () {
    categories[id] = editCategoriesInput.value
    showCategories()

    editCategoriesDiv.classList.add("editDiv")
    localStorage.setItem("categories", JSON.stringify(categories))
}

showCategories()


////////// LogOut/////
function logOutFunc() {
    localStorage.removeItem("admin")
    location.href = "login.html"
}