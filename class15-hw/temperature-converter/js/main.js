document.querySelector('#convert').addEventListener('click', convert);

function convert() {
	let temperature = document.querySelector('#celsius').value;
	if (!/^\d+$/.test(temperature)) {
		document.querySelector('#output').innerText = 'Not a number!';
	}
	else {
		temperature = temperature * 9/5 + 32;
		document.querySelector('#output').innerText = temperature;
	}
}