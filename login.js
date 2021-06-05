import User from "./entity/User.js";

let login = document.getElementById("login");
login.onclick = onLogin;

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
