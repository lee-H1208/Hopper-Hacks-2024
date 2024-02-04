const angy = document.getElementById("angyButton");
const mid = document.getElementById("midButton");
const happy = document.getElementById("happyButton");

function angyColor(){
    if(angy.style.backgroundColor != "transparent") {
        angy.style.backgroundColor = "transparent";
    } else {
        angy.style.backgroundColor = "#F5DE96";
    }
}
function angyHover() {
    angy.style.cursor = "pointer";
}

function midColor(){
    if(mid.style.backgroundColor != "transparent") {
        mid.style.backgroundColor = "transparent";
    } else {
        mid.style.backgroundColor = "#F5DE96";
    }
}
function midHover() {
    mid.style.cursor = "pointer";
}

function happyColor(){
    if(happy.style.backgroundColor != "transparent") {
        happy.style.backgroundColor = "transparent";
    } else {
        happy.style.backgroundColor = "#F5DE96";
    }
}
function happyHover() {
    happy.style.cursor = "pointer";
}