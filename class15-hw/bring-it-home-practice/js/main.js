// *Variables*
// Create a variable and console log the value
let myVariable = 10;
console.log(myVariable);

// Create a variable, add 10 to it, and alert the value
let myVariable2 = 20;
myVariable2 += 10;
alert(myVariable2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractsFour(num1, num2, num3, num4) {
	const val = num1 - num2 - num3 - num4;
	alert(val);
}
// Create a function that divides one number by another and returns the remainder
function divideRemainder(num1, num2) {
	return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function conditionalSum(num1, num2) {
	if (num1 + num2 > 50) {
		alert('Jumanji!');
	}
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function conditionalMultiply(num1, num2, num3) {
	if (num1 * num2 * num3 % 3 == 0) {
		alert('ZEBRA!');
	}
}