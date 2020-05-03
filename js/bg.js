const body = document.querySelector("body");

const img_number = 8;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `../images/${imgNumber + 1}.jpg`;
    image.classList.add("bigImage");
    body.prepend(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * img_number);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();