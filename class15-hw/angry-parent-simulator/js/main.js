document.querySelector('#yell').addEventListener('click', run);

function run() {
	const first = document.querySelector('#firstName').value;
	const firstMiddle = document.querySelector('#firstMiddle').value;
	const lastMiddle = document.querySelector('#lastMiddle').value;
	const last = document.querySelector('#lastName').value;
	const yell = `${first} ${firstMiddle} ${lastMiddle} ${last}`;
	if (/[0-9]/.test(yell)) {
		alert('No numbers in names!')
	}
	else {
		document.querySelector('#placeToYell').innerText = yell;
	}
}