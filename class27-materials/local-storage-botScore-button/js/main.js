//Create a button that adds 1 to a botScore stored in localStorage 
if (!localStorage.getItem('value')) {
	localStorage.setItem('value', 0);
}
document.querySelector('h2').innerText = localStorage.getItem('value');
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#clear').addEventListener('click', clear);

function add() {
	localStorage.setItem('value', Number(localStorage.getItem('value')) + 1);
	document.querySelector('h2').innerText = localStorage.getItem('value');
}

function subtract() {
	localStorage.setItem('value', Number(localStorage.getItem('value')) - 1);
	document.querySelector('h2').innerText = localStorage.getItem('value');
}

function clear() {
	localStorage.setItem('value', 0);
	document.querySelector('h2').innerText = localStorage.getItem('value');
}
