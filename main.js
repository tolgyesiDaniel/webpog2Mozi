/**
 * a menu linkjeire kattintva az adot dom-ot tolti be a fokepernyore
 */

import {addLoginDOM, addRegistrationDOM, homeDOM} from "./utils/DOMUtils.js";

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
 * fooldal + műsor gomb
 * @type {HTMLElement}
 */
let homeButton = document.getElementById("home");
homeButton.onclick = loadHomeDOM;

let musorButton = document.getElementById("musor");
musorButton.onclick = loadMusorDOM;

export function loadHomeDOM(){
    homeDOM();
}
