//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [0, 12, 22, 45, 2, 1];
alert(nums.reduce((sum, num) => sum + num, 0));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let squareNumbersInArray = (arr) => arr.map(num => Math.pow(num,2));
alert(squareNumbersInArray(nums));
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(string) {
	let arr = string.split('');
	arr.reverse();
	return arr.join('').toString();
}

alert(reverseString('hello'));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function stringIsPalindrome(string) {
	let arr = string.split('');
	for (let i = 0; i < arr.length/2; i++) {
		if (arr[i] != arr[arr.length - i - 1]){
			return false;
		}
	}
	return true;
}

let palindrome = '1234321';
let notPalindrome = '121323';
let evenPalindrome = 'abccba';
alert(stringIsPalindrome(palindrome));
alert(stringIsPalindrome(notPalindrome));
alert(stringIsPalindrome(evenPalindrome));

