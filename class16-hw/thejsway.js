// Write a program that displays your name and age.
console.log('Vincent');
console.log(24);

// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
console.log(6+3);
console.log(6-3);
console.log(6*3);
console.log(6/3);

// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
const first = prompt('Enter your first name: ');
const last = prompt('Enter your last name: ');
alert(`Hello ${first} ${last}`);

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
const rawPrice = prompt('Raw price: ');
alert(`VAT price is ${rawPrice * 1.206}`);

// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
const celsius = prompt('Temperature in celsius: ');
alert(`Temperature in F is ${celsius * 9 / 5 + 32}`)

// Observe the following program. Add the necessary code to swap the values of variables number1 and number2.

let number1 = 5;
let number2 = 3;
let temp = number1;
number1 = number2;
number2 = temp;

console.log(number1);
console.log(number2);

// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

const day = prompt('Enter a day name: ').toLowerCase();
switch(day) {
	case 'monday':
		console.log('Next day is Tuesday');
		break;
	case 'tuesday':
		console.log('Next day is Wednesday');
		break;
	case 'wednesday':
		console.log('Next day is Thursday');
		break;
	case 'thursday':
		console.log('Next day is Friday');
		break;
	case 'friday':
		console.log('Next day is Saturday');
		break;
	case 'saturday':
		console.log('Next day is Sunday');
		break;
	case 'sunday':
		console.log('Next day is Monday');
		break;
	default:
		console.log('Not a day!');
		break;
}

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

const num1 = Number(prompt('Enter number 1: '));
const num2 = Number(prompt('Enter number 2: '));
if (num1 > num2) {
	console.log('Number 1 is greater');
}
else if (num2 > num1) {
	console.log('Number 2 is greater');
}
else if (num2 === num1) {
	console.log('They are equal');
}
else {
	console.log('Something went wrong :(')
}

// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
const monthNumber = Number(prompt('Enter month number: '));
switch (monthNumber) {
	case 1:
		console.log('31 days');
		break;
	case 2:
		console.log('28 days');
		break;
	case 3:
		console.log('31 days');
		break;
	case 4:
		console.log('30 days');
		break;
	case 5:
		console.log('31 days');
		break;
	case 6:
		console.log('30 days');
		break;
	case 7:
		console.log('31 days');
		break;
	case 8:
		console.log('31 days');
		break;
	case 9:
		console.log('30 days');
		break;
	case 10:
		console.log('31 days');
		break;
	case 11:
		console.log('30 days');
		break;
	case 12:
		console.log('31 days');
		break;
	default:
		console.log('Error with input!');
		break;
}

// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
const hour = Number(prompt('Hour: '));
const minute = Number(prompt('Minute: '));
const second = Number(prompt('Second: '));

if (second != 59) {
	console.log(`${hour}h${minute}m${second + 1}s`);
}
else {
	if (minute != 59) {
		console.log(`${hour}h${minute + 1}m0s`);
	}
	else {
		if (hour != 23) {
			console.log(`${hour + 1}h0m0s`);
		}
		else {
			console.log(`0h0m0s`);
		}
	}
}

/* Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user. */

const numberOfTurns = Number(prompt('How many turns: '));
for (let i = 1; i <= numberOfTurns; i++) {
	console.log(i);
}

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.
const start = prompt('Starting number: ');
const end = prompt('Ending number: ');
for (let i = start; i <= end; i++) {
	if (i % 2 === 0) {
	  console.log(`${i} is even`);
	}
	else {
		console.log(`${i} is odd`);
	}
}

/* Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

When you are done with the above, improve the program so that the terminating number is between 50 and 100. */
let input = prompt('Enter a number: ');
while (input < 50 || input > 100) {
	input = prompt('Enter another number: ');
}

/* Write a program that asks the user for a number, then shows the multiplication table for this number.

When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint). */
let multiplicationInput = prompt('Enter a number: ');
while (multiplicationInput < 2 || multiplicationInput > 9) {
	multiplicationInput = prompt('Enter a number between 2 and 9:');
}
console.log(`${multiplicationInput * 0} ${multiplicationInput * 1} ${multiplicationInput * 2} ${multiplicationInput * 3} ${multiplicationInput * 4} ${multiplicationInput * 5} ${multiplicationInput * 6} ${multiplicationInput * 7} ${multiplicationInput * 8} ${multiplicationInput * 9} ${multiplicationInput * 10}`);

// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let wordInput;
while (wordInput !== 'yes' && wordInput !== 'no') {
	wordInput = prompt('Enter a word');
}

/* Write a program that shows all numbers between 1 and 100 with the following exceptions:
It shows "Fizz" instead if the number is divisible by 3.

It shows "Buzz" instead if the number is divisible by 5 and not by 3.

When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.
*/

for (let i = 1; i <= 100; i++) {
	if (i % 15 == 0) {
		console.log('FizzBuzz');
	}
	else if (i % 5 == 0) {
		console.log('Buzz');
	}
	else if (i % 3 == 0) {
		console.log('Fizz');
	}
	else {
		console.log(i);
	}
}

// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

const firstName = prompt('Enter first name');
const lastName = prompt('Enter last name');
sayHello(firstName, lastName);

// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
  return x * x;
}

// Square the given number x
const square2 = x => x * x;

for (let i = 1; i <= 10; i++) {
	console.log(square1(i));
}

// Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.
function min(num1, num2) {
	return num1 < num2 ? num1 : num2;
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

const calculate = function(num1, operator, num2) {
	switch (operator) {
		case '+': 	
			return num1 + num2;
		case '-': 	
			return num1 - num2;
		case '*': 	
			return num1 * num2;
		case '/': 	
			return num1 / num2;
		default:	
			return 'Invalid expression';
	}
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
function areaOfCircle(radius) {
	return Math.PI * radius ** 2;
}

function circumferenceOfCircle(radius) {
	return 2 * Math.PI * radius;
}

console.log(areaOfCircle(3));
console.log(circumferenceOfCircle(6));