//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['sopranos', 'wire', 'succession'];
for (let show of shows) {
	console.log(show);
}
//Create and array of numbers
let numbers = [0, 1, 6, 3, 9, 10];
//Return a new array of numbers that includes every even number from the previous Arrays
let evenNumber = numbers.filter(x => x % 2 === 0);

console.log(evenNumber);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfSeconds(arr) {
	let sorted = arr.sort((a,b) => a-b);
	return (sorted[1] + sorted[sorted.length - 2]);
}

console.log(sumOfSeconds(numbers));
