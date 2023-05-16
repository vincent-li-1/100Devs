// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let myFavHoliday;
myFavHoliday = 'christmas';
myFavHoliday = myFavHoliday.toUpperCase();
console.log(myFavHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = 'Hello';
alert(string.substring(string.length-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractAllFrom100(num1, num2, num3, num4, num5) {
	alert(Math.abs(100 - num1 - num2 - num3 - num4 - num5));
}

subtractAllFrom100(10,1,500,23,3);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestAndHighest(num1, num2, num3) {
	console.log(Math.min(num1, num2, num3));
	console.log(Math.max(num1, num2, num3));
}

lowestAndHighest(0,50,22);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
	return Math.random() < 0.5 ? 'heads' : 'tails';
}

headsOrTails();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function headsOrTailsXTimes(x) {
	for (let i = 1; i <= x; i++) {
		console.log(headsOrTails());
	}
}

headsOrTailsXTimes(3);