 function signIn() {
     if (login.value === "admin" && password.value == 1111) {
         location.href = "admin.html"
         localStorage.setItem("admin", "ok")
     }
 }