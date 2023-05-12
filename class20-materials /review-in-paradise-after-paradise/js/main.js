const { e } = require("mathjs");

// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function compareArray(array) {
	let n = array.length - 1;
	if (array[0] < array[n]) {
		alert('Hi');
	}
	else if (array[0] > array[n]) {
		alert('Bye');
	}
	else {
		alert('We close in an hour');
	}
}
