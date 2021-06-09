import User from "../entity/User.js";
import {onLogin} from "../login.js";
import {registration} from "../register.js";

let content = document.getElementById("container");

/**
 * megvaltoztatja a navigacios sav tartalmat ha sikeres a bejelentkezes
 */
export function loginDOM(){
    let right = document.getElementById("content-right");
    deleteDOM(right);
    if (localStorage.getItem("user_id") != null) {
        let userEmail = new User().getUserEmail();
        let userEmailSpan = document.createElement("span");
        userEmailSpan.textContent = userEmail;
        userEmailSpan.className = "user_name_nav";

        let logoutLink = document.createElement("a");
        logoutLink.setAttribute("href", "javascript:0;");
        logoutLink.textContent = "Kijelentkezés";
        logoutLink.onclick = logout;

        right.appendChild(userEmailSpan);
        right.appendChild(logoutLink);
    }

}

/**
 * A login oldalt adja hozza a fooldalhoz, elotte torli ami benne volt
 */
export function addLoginDOM(){
    deleteDOM(content);
    let containerDiv = document.createElement("div");
    containerDiv.className = "form";

    let header = document.createElement("div");
    header.className = "title";

    let h3 = document.createElement("h3");
    h3.textContent = "Bejelentkezés";

    let cont = document.createElement("div");
    cont.className = "content";

    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("id", "user_email");

    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "user_email");
    emailLabel.textContent = "E-mail cím";

    let password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("id", "user_password");

    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "user_password");
    passwordLabel.textContent = "Jelszó";

    let button = document.createElement("button");
    button.setAttribute("id", "login");
    button.textContent = "Bejelentkezés";

    button.addEventListener("click", function (){
        onLogin();
    });

    cont.appendChild(emailLabel);
    cont.appendChild(email);
    cont.appendChild(passwordLabel);
    cont.appendChild(password);
    cont.appendChild(button);

    header.appendChild(h3);

    containerDiv.appendChild(header);
    containerDiv.appendChild(cont);

    content.appendChild(containerDiv);

}

/**
 * a regisztrcaio oldalt adja hozza a fooldalhoz, elotte torli ami benne volt
 */
export function addRegistrationDOM(){
    deleteDOM(content);
    let containerDiv = document.createElement("div");
    containerDiv.className = "form";

    let header = document.createElement("div");
    header.className = "title";

    let h3 = document.createElement("h3");
    h3.textContent = "Regisztráció";

    let cont = document.createElement("div");
    cont.className = "content";

    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("id", "reg_user_email");

    let emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "reg_user_email");
    emailLabel.textContent = "E-mail cím";

    let password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("id", "reg_user_password");

    let passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "reg_user_password");
    passwordLabel.textContent = "Jelszó";

    let button = document.createElement("button");
    button.setAttribute("id", "registration");
    button.textContent = "Regisztráció";

    button.addEventListener("click", function (){
        registration();
    });

    cont.appendChild(emailLabel);
    cont.appendChild(email);
    cont.appendChild(passwordLabel);
    cont.appendChild(password);
    cont.appendChild(button);

    header.appendChild(h3);

    containerDiv.appendChild(header);
    containerDiv.appendChild(cont);

    content.appendChild(containerDiv);

}

/**
 * torli a fooldal osszes elemet, a navigacios savot kihagyja ebbol
 * @param dom
 */
export function deleteDOM(dom){
    while (dom.lastChild){
        dom.lastChild.remove();
    }
}

/**
 * fooldal megjelenítese itt majd a fooldal tartalmat kell hozzaadni mint az elozo peldakban pl.: addRegistrationDOM
 */
export function homeDOM(){
    deleteDOM(content);
}

/**
 * musor gomb
 */
export function musorDOM(){
    deleteDOM(content);
}
/**
 * kijelentkezteti a felhasznalot
 */
function logout(){
    new User().logout();
    window.location = "index.html";
}
