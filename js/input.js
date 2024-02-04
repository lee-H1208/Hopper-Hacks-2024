const inputTDBox = document.getElementById("inputTD");
const listTD = document.getElementById("listTD-container");

function tdAdd() {
    if(inputTDBox.value === '') {
        alert("You must write something.");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputTDBox.value;
        listTD.appendChild(li);
    }
}