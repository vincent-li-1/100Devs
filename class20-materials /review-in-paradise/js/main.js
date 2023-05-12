// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let myFavoriteFood = 'steak';
alert(myFavoriteFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let myString = 'hello';
alert(myString.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideTwoNumbersAndMultiply(num1, num2, num3) {
	let ans = num1 / num2 * num3;
	alert(ans);
}

divideTwoNumbersAndMultiply(1, 2, 3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function logCubeRoot(num) {
	console.log(num ** (1/3));
}

logCubeRoot(8);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function alertMonth(month) {
	if (month.toLowerCase() === 'june' || month.toLowerCase() === 'july' || month.toLowerCase() === 'august') {
		alert('YAY');
	}
	else {
		alert('Boo');
	}
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function logEveryButFive(number) {
	for (let i = 1; i <= number; i++) {
		if (i % 5 !== 0) {
			console.log(i);
		}
	}
}