// *Variables*

const { forEach } = require("mathjs");

// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let myFavoriteDrink = 'icedTea';
myFavoriteDrink = myFavoriteDrink.trim();
console.log(myFavoriteDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = 'hello this is a string of multiple words';
let wordsArray = multipleWords.split(' ');
console.log(wordsArray.includes('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
	let randomNumber = Math.random();
	if (randomNumber <= 0.333) {
		return 'rock';
	}
	if (randomNumber <= 0.666) {
		return 'scissors';
	}
	if (randomNumber <= 0.999) {
		return 'paper';
	}
	return rockPaperScissors();
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRockPaperScissors(input) {
	let bot = rockPaperScissors();
	if (input === bot) {
		return 'tied';
	}
	if ((input === 'rock' && bot == 'paper') || (input === 'paper' && bot === 'scissors') || (input === 'scissors' && bot === 'rock')) {
		return 'bot won :(';
	}
	if ((input === 'paper' && bot == 'rock') || (input === 'rock' && bot === 'scissors') || (input === 'scissors' && bot === 'paper')) {
		return 'you won!';
	}
	return 'invalid input!';
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(choices) {
	for (let choice of choices) {
		console.log(playRockPaperScissors(choice));
	}
}

let choices = ['rock', 'scissors', 'rock', 'paper', 'gun']
playGameXTimes(choices);