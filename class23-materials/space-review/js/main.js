//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [1, 3, 66, 34, 2];
alert(numbers.reduce((sum, current) => sum + current, 0));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareNumbersInArray = (arr) => arr.map(num => Math.pow(num, 2));
console.log(squareNumbersInArray([1,3,4,6]))
//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = str => {
	const strArray = str.split('');
	console.log( strArray.reverse().join(''));
};

reverseString('hello');
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str) {
	for (let i = 0; i < str.length/2; i++) {
		if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
			return false;
		}
	}
	return true;
}