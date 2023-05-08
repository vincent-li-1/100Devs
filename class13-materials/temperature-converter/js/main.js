//Write your pseduo code first! 
/* Form with a submit button
A tag in html to display
an event listener for when submit is clicked
a variable to store the submitted value
math to convert that number to fahrenheit
Can also be two diff const
an output of that variable into the DOM
*/

document.querySelector('#convert').addEventListener('click', run);

function run() {
	const INPUT = document.querySelector('#cInput').value;
	const output = convert(INPUT);
	document.querySelector('#outputPlace').innerText = `${output}`;
}

function convert(celsius) {
	return celsius * 9 / 5 + 32;
}