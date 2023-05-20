// *Variables*

const { forEach } = require("mathjs");

// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let mySentence = 'this is a sentence';
alert(mySentence.endsWith('?') ? 'This is a question' : 'Not a question');
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let myString = 'hello hello jr. dev hello hello jr. dev';
console.log(myString.replaceAll('jr. dev', 'software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
	const random = Math.random();
	if (random < 0.33) {
		return 'rock';
	}
	if (random < 0.66) {
		return 'paper';
	}
	if (random < 0.99) {
		return 'scissors';
	}
	return rockPaperScissors();
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playGame(choice) {
	const botChoice = rockPaperScissors();
	if (choice === botChoice) {
		return 'tie';
	}
	if ((choice === 'rock' && botChoice === 'paper') || (choice === 'scissors' && botChoice === 'rock') || (choice === 'paper' && botChoice === 'scissors')) {
		return 'bot wins';
	}
	if ((choice === 'rock' && botChoice === 'scissors') || (choice === 'scissors' && botChoice === 'paper') || (choice === 'paper' && botChoice === 'rock')) {
		return 'you win';
	}
	return 'invalid input!'
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameMultiples(choices) {
	forEach(choice => console.log(playGame(choice)));
}