//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector('h1').addEventListener('click', check)

function check() {
	const AGE = document.querySelector('#danceDanceRevolution').value
	const text = document.querySelector('p')
	if (!/^\d+$/.test(AGE)) {
		text.innerText = 'Boo!'
	}
	else if (AGE < 16) {
		text.innerText = 'You cannot drive!'
	}
	else if (AGE < 18) {
		text.innerText = 'you can\'t hate from outside the club, you can\'t even get in'
	}
	else if (AGE < 21) {
		text.innerText = 'you cannot drink'
	}
	else if (AGE < 25) {
		text.innerText = 'you cannot rent a car affordably'
	}
	else if (AGE < 30) {
		text.innerText = 'you cannot rent a fancy car affordably'
	}
	else {
		text.innerText = 'there is nothing left to look forward to'
	}

}
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
