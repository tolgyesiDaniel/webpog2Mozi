import User from "./entity/User.js";

let register = document.getElementById("registration");
register.onclick = registration;

function registration(){
    let userEmail = document.getElementById("reg_user_email");
    let userPassword = document.getElementById("reg_user_password");
    let user = new User(userEmail.value, userPassword.value);
    let reg = user.registration(userEmail.value, userPassword.value);

    if (reg){
        window.location = "./index.html";
        alert("Sikeres regisztráció");
    }
}
