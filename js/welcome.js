// Getting the date for h1:

var date = new Date();
var year = date.getFullYear();
var month = date.toLocaleString('default', { month: 'long' });
var day = date.getDate();

document.getElementById('currentDate').textContent = month + " " + day + ", " + year;