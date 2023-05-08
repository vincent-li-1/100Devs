//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', run)

function run() {
	const day = document.querySelector('#day').value.toLowerCase();
	const output = document.querySelector('#placeToSee');
	if (day === 'tuesday' || day === 'thursday') {
		output.innerText = 'class day!';
	}
	else if (day === 'wednesday') {
		output.innerText = 'hump day!';
	}
	else if (day === 'saturday' || day === 'sunday') {
		output.innerText = 'weekend!';
	}
	else if (day === 'monday' || day === 'friday') {
		output.innerText = 'boring';
	}
	else {
		output.innerText = 'not a day!';
	}
}