const categores = localStorage.getItem("categories")?JSON.parse( localStorage.getItem("categories")):[]

categoryBtn.onclick = function(){
    categores.push(categoryName.value)
    localStorage.setItem('categories',JSON.stringify(categores))
}  