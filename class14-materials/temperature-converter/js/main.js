//Write your pseduo code first! 
// collect input
document.querySelector('#convert').addEventListener('click', run);

// Convert input
function run() {
	let temperature = document.querySelector('#celsius').value;
	temperature = temperature * 9/5 + 32;
	document.querySelector('#output').innerText = temperature;
}