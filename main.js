/**
 * a menu linkjeire kattintva az adot dom-ot tolti be a fokepernyore
 */

import {addLoginDOM, addRegistrationDOM, homeDOM, musorDOM} from "./utils/DOMUtils.js";

/**
 * login gomb
 * @type {HTMLElement}
 */
let loginButton = document.getElementById("loginButton");
loginButton.onclick = loadLoginDOM;

export function loadLoginDOM(){
    addLoginDOM();
}

/**
 * registration gomb
 * @type {HTMLElement}
 */
let registerButton = document.getElementById("registerButton");
registerButton.onclick = loadRegisterDOM;

export function loadRegisterDOM(){
    addRegistrationDOM();
}

/**
 * fooldal + műsor gomb + info gomb
 * @type {HTMLElement}
 */
let homeButton = document.getElementById("home");
homeButton.onclick = loadHomeDOM;

let MusorButton = document.getElementById("musor");
MusorButton.onclick = loadMusorDOM;

export function loadHomeDOM(){
    homeDOM();
}
export function loadMusorDOM(){
    musorDOM();
}
