const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintName(text) {
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUSer = localStorage.getItem(USER_LS);
    if (currentUSer === null) {

    } else {
        paintName(currentUSer);
    }
}

function init() {
    
}

init();