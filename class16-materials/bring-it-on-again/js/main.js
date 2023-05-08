// *Variables*
// Declare a variable, assign it a value, and alert the value
let number = 17;
alert(number);

// Create a variable, divide it by 10, and console log the value
let numberToDivide = 50;
numberToDivide /= 10;
console.log(numberToDivide);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNumbers(num1, num2, num3) {
	alert(num1 * num2 * num3);
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoAndSubtractTwo(num1, num2, num3, num4) {
	console.log(num1 + num2 - num3 - num4);
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function conditionalOne(num1, num2, num3) {
	let value = 100;
	value += num1;
	value -= num2;
	value /= num3;
	if (value > 25) {
		console.log('WE HAVE A WINNA')
	}
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day) {
	if (day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
		alert('weekend')
	}
	else if (day.toLowerCase() === 'monday' || day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'wednesday' || day.toLowerCase() === 'thursday' || day.toLowerCase() === 'friday') {
		alert('week day')
	}
	else {
		alert('Try again!')
	}
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loop(num) {
	for (let i = 1; i <= num; i += 3) {
		console.log(i);
	}
}