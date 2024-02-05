/* const div = document.querySelector(".menu-items");
let offsetX, offsetY;

const move = (e) => {
    div.style.left = '$(e.clientX - offsetX)px';
    div.style.top = '$(e.clientY - offsetY)px';
}
div.addEventListener("mousedown",(e) =>{
    offsetX = e.clientX - div.offsetLeft;
    offsetY = e.clientY - div.offsetTop;
    document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup",()=>{
    document.removeEventListener("mousemove", move);
});*/

var drag;
let offsetX, offsetY;
function dragMove(id){
    var element = document.getElementsByClassName("menu-item");
    element.style="absolute";
    element.onmousedown=function(){
        drag=element;
    }
}

document.onmouseup=function(e){
    drag=null;
}

document.onmousemove=function(e){
    var x = e.pageX;
    var y = e.pageY;

    drag.style.left = x + "px";
    drag.style.top = y + "px";
}
