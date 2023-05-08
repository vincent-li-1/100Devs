//--- Easy
//create a variable and assign it a number
let myVar = 17;
//minus 10 from that number
myVar -= 10;
//print that number to the console
console.log(myVar);
//--- Medium
//create a variable that holds a value from the input
let myVarTwo = document.querySelector('#danceDanceRevolution').value;
//add 25 to that number
myVarTwo += 25;
//alert that number
alert(myVarTwo)
//--- Hard
//create a variable that holds the h1
let h1Var = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
h1Var.addEventListener('click', run)

function run() {
	const sum = myVar + Number(myVarTwo);
	console.log(sum)
}