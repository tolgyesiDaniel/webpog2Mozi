import User from "./entity/User.js";

let register = document.getElementById("registration");
let login = document.getElementById("login");

register.onclick = registration;
login.onclick = onLogin;

function registration(){
    let userEmail = document.getElementById("reg_user_email");
    let userPassword = document.getElementById("reg_user_password");
    let user = new User(userEmail.value, userPassword.value);
    let reg = user.registration(userEmail.value, userPassword.value);

    if (reg){
        alert("Sikeres regisztráció");
    }
}

function onLogin(){
    let userEmail = document.getElementById("user_email");
    let userPassword = document.getElementById("user_password");
    let user = new User(userEmail.value, userPassword.value);
    let log = user.login(userEmail.value, userPassword.value);

    if(log){
        alert("Sikeres bejelentkezés");
    }
    else{
        alert("Sikertelen bejelentkezés");
    }
}
