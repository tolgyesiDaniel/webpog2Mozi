import User from "./entity/User.js";
import {deleteDOM, loginDOM} from "./utils/DOMUtils.js";

let content = document.getElementById("container");
/**
 * bejelentkezes kezeles
 */
export function onLogin(){
    let userEmail = document.getElementById("user_email");
    let userPassword = document.getElementById("user_password");
    let user = new User(userEmail.value, userPassword.value);
    let log = user.login(userEmail.value, userPassword.value);

    if(log){
        loginDOM();
        deleteDOM(content);
    }
    else{
        alert("Sikertelen bejelentkezés");
    }
}
