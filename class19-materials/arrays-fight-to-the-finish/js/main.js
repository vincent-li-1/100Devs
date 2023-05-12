//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Godfather', 'Godfather II', 'Godfather III'];
movies.forEach((x) => document.querySelector('h2').innerText += x);

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [1,2,3,4,5,6,7];
numbers.forEach((x, i) => numbers[i] = x + 3);

//Find the average of all the numbers from question three
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
sum = sum/numbers.length;