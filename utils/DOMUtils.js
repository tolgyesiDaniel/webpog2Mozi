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

    let front = document.createElement("img");
    front.setAttribute("class", "front");
    front.setAttribute("src", "resources/front.jpg");

    content.appendChild(front);
}

/**
 * musor gomb
 */
export function musorDOM(){

    document.getElementById("musor" ).addEventListener("click",function (){
        deleteDOM(content);

        //kep1
        let kep1 = document.createElement("a");
        kep1.setAttribute("class", "gallery");
        kep1.setAttribute("style", "background-image: url('resources/vihar.jpg');");
        kep1.setAttribute("href", "#vihar");
        kep1.textContent = "Tovább";

        //kep2
        let kep2 = document.createElement("a");
        kep2.setAttribute("class", "gallery");
        kep2.setAttribute("style", "background-image: url('resources/ido.jpg');");
        kep2.setAttribute("href", "#ido");
        kep2.textContent = "Tovább";

        //kep3
        let kep3 = document.createElement("a");
        kep3.setAttribute("class", "gallery");
        kep3.setAttribute("style", "background-image: url('resources/sort.jpg');");
        kep3.setAttribute("href", "#sort");
        kep3.textContent = "Tovább";

        //kep4
        let kep4 = document.createElement("a");
        kep4.setAttribute("class", "gallery");
        kep4.setAttribute("style", "background-image: url('resources/harcos.jpg');");
        kep4.setAttribute("href", "#harcos");
        kep4.textContent = "Tovább";

        //kep5
        let kep5 = document.createElement("a");
        kep5.setAttribute("class", "gallery");
        kep5.setAttribute("style", "background-image: url('resources/szarvas.jpg');");
        kep5.setAttribute("href", "#szarvas");
        kep5.textContent = "Tovább";

        //kep6
        let kep6 = document.createElement("a");
        kep6.setAttribute("class", "gallery");
        kep6.setAttribute("style", "background-image: url('resources/matrix.jpg');");
        kep6.setAttribute("href", "#matrix");
        kep6.textContent = "Tovább";

        //info szöveg
        let containerinf1 = document.createElement("inf");
        containerinf1.setAttribute("id", "vihar");
        containerinf1.setAttribute("class", "szöveg1");
        containerinf1.className = "info1";

        let szoveg1 = document.createElement("p");
        szoveg1.textContent = "A Viharsziget 2010-ben bemutatott amerikai thriller Martin Scorsese rendezésében. Dennis Lehane azonos című regényének adaptációja. A történet 1954-ben játszódik ahhol Teddy Daniels (Leonardo DiCaprio) rendőrbíró és partnere, Chuck Aule (Mark Ruffalo) a Viharszigetre mennek, az igazságügyi elmekórtani Ashecliff Kórházba. Itt a pszihózis legmélyebb bugyraiba kísérhetjük főszereplőnket.";

        let containerinf2 = document.createElement("inf");
        containerinf2.setAttribute("id", "ido");
        containerinf2.setAttribute("class", "szöveg2");
        containerinf2.className = "info2";

        let szoveg2 = document.createElement("p");
        szoveg2.textContent = "A legendás Robert A. Heinlein (többek között a Csillagközi invázió írója) novellájából készült filmben egy időügynök (Ethan Hawke) barangol múltban és jövőben: minden bevetés más korba vezeti. Egy olyan bűnözőre vadászik, aki valahogy folyton kicsúszik a kezéből, bármilyen időben is készül lecsapni rá.";

        let containerinf3 = document.createElement("inf");
        containerinf3.setAttribute("id", "sort");
        containerinf3.setAttribute("class", "szöveg3");
        containerinf3.className = "info3";

        let szoveg3 = document.createElement("p");
        szoveg3.textContent = "A nagy dobás (eredeti cím: The Big Short) 2015-ben bemutatott amerikai életrajzi vígjáték-dráma, amely Michael Lewis azonos című, 2010-es könyve alapján készült. A történet a 2007–2008-as pénzügyi válság előzményeit olyan szereplők szempontjából dolgozza fel, akik megértették a folyamatokat, előre megsejtették az összeomlást és anyagilag profitáltak belőle.";

        let containerinf4 = document.createElement("inf");
        containerinf4.setAttribute("id", "harcos");
        containerinf4.setAttribute("class", "szöveg4");
        containerinf4.className = "info4";

        let szoveg4 = document.createElement("p");
        szoveg4.textContent = "A Harcosok klubja 1999-ben bemutatott amerikai filmdráma David Fincher rendezésében. Chuck Palahniuk azonos című regényének adaptációja. A névtelen elbeszélő (Edward Norton) egy autógyár álmatlanságtól szenvedő, örökké úton lévő alkalmazottja. Rajta keresztül ismerhetünk meg egy zavarodott elmét akinek a második személyisége egy anarhiát szervez.";

        let containerinf5 = document.createElement("inf");
        containerinf5.setAttribute("id", "szarvas");
        containerinf5.setAttribute("class", "szöveg5");
        containerinf5.className = "info5";

        let szoveg5 = document.createElement("p");
        szoveg5.textContent = "A szarvasvadász 1978-ban bemutatott színes, amerikai-brit háborús filmdráma. A filmben pár katona kalandjait ismerhetünk meg egy kellemes 3 órás könnyed történeten keresztül miként üdültek a háború alatt a vietkondok társaságában.";

        let containerinf6 = document.createElement("inf");
        containerinf6.setAttribute("id", "matrix");
        containerinf6.setAttribute("class", "szöveg6");
        containerinf6.className = "info6";

        let szoveg6 = document.createElement("p");
        szoveg6.textContent = "A Matrix egy amerikai média franchise, amelyet Wachowskis író-rendező és Joel Silver producer hozott létre. Egy futurisztikus történetet ismerhetünk meg amiben főszereplőnk egy hatalmas választás elé állítják: él tovább mint báb, vagy a kezébe veszi az irányítást.";

        content.appendChild(kep1);
        content.appendChild(kep2);
        content.appendChild(kep3);
        content.appendChild(kep4);
        content.appendChild(kep5);
        content.appendChild(kep6);
        content.appendChild(containerinf1);
        content.appendChild(containerinf2);
        content.appendChild(containerinf3);
        content.appendChild(containerinf4);
        content.appendChild(containerinf5);
        content.appendChild(containerinf6);
        containerinf1.appendChild(szoveg1);
        containerinf2.appendChild(szoveg2);
        containerinf3.appendChild(szoveg3);
        containerinf4.appendChild(szoveg4);
        containerinf5.appendChild(szoveg5);
        containerinf6.appendChild(szoveg6);

    });
}



/**
 * info gomb
 */
  //  document.getElementById("info" ).addEventListener("click",function (){
       // deleteDOM(content);
  //  });
/**
 * kijelentkezteti a felhasznalot
 */
function logout(){
    new User().logout();
    window.location = "index.html";
}
