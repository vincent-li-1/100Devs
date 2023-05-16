const { string, forEach } = require("mathjs");

// Translate border-left-width to borderLeftWidth
function camelize(str) {
	let strArray = str.split('-');
	for (let i = 1; i < strArray.length; i++) {
		strArray[i] = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1);
	}
	return strArray.join('');
}

console.log(camelize('hello-vincent-li'));

// Filter range
function filterRange(array, min, max) {
	return array.filter(item => (item >= min && item <= max))
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

// Filter range "in place"
function filterRangeInPlace(array, min, max) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min || array[i] > max) {
			array.splice(i, 1);
			i--;
		}
	}
}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

alert( arr2 ); 

// Sort in decreasing order
let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a,b) => b - a);

alert( arr3 ); // 8, 5, 2, 1, -10

// Copy and sort array
function copySorted(array) {
	return array.slice().sort((a,b) => a.localeCompare(b));
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr4 ); // HTML, JavaScript, CSS (no changes)

// Create an extendable calculator
function Calculator() {
	this.methods = {
		'-': (a,b) => a - b,
		'+': (a,b) => a + b,
	}
	this.calculate = function (string) {
		let arr = string.split(' ');
		const num1 = Number(arr[0]);
		const operator = arr[1];
		const num2 = Number(arr[2]);
		if (!this.methods[operator] || isNaN(num1) || isNaN(num2)) {
			return NaN;
		}
		return this.methods[operator](num1, num2);
	}

	this.addMethod = function(string, func) {
		this.methods[string] = func;
	}
}

// Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id
}))

/* let usersMapped = [];
for (let user of users) {
	let fullNameUser = {}
	fullNameUser.fullName = `${user.name} ${user.surname}`;
	fullNameUser.id = user.id;
	usersMapped.push(fullNameUser);
} */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

// Sort users by age

let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let arr1 = [ pete1, john1, mary1 ];

function sortByAge(arr) {
	arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr1);

// now: [john, mary, pete]
alert(arr1[0].name); // John
alert(arr1[1].name); // Mary
alert(arr1[2].name); // Pete

// Shuffle an array
function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

// Get average age
function getAverageAge(arr) {
	let sum = 0;
	for (let user of arr) {
		sum += Number(user.age);
	}
	return sum/arr.length;
};

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Filter unique array members
function unique(arr) {
	return arr.filter((x, i, arr) => i === arr.indexOf(x));
}
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

// Create keyed object from array
function groupById(users) {
	return users.reduce((object, value) => {
		object[value.id] = value;
		return object;
	}, {})
}

let users = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
	john: {id: 'john', name: "John Smith", age: 20},
	ann: {id: 'ann', name: "Ann Smith", age: 24},
	pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */