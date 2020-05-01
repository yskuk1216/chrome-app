const COORDS = "coords";

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {

}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askForCoords();
    } else {
        // get weather
    }
}



function init() {
    loadCoords();
}

init();
