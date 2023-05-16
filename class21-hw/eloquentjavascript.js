// The sum of a range

// Your code here.
function range(start, end, step = 1) {
	let resultArray = [];
	if (step < 0) {
		for (let i = start; i >= end; i += step) {
			resultArray.push(i);
		}
	}
	else {
		for (let i = start; i <= end; i += step) {
			resultArray.push(i);
		}
	}
	return resultArray;
}

function sum(arr) {
	let sum = 0;
	for (const i of arr) {
		sum += i;
	}
	return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// Reversing an array

// Your code here.

function reverseArray(arr) {
	let reversed = [];
	for (let i of arr) {
		reversed.unshift(i);
	}
	return reversed;
}

function reverseArrayInPlace(arr) {
	for (let i = 0; i < arr.length/2; i++) {
		const temp = arr[i];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = temp;
	}
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// A list

// Your code here.
function arrayToList(arr) {
	let list = null;
	for (let i = arr.length - 1; i >= 0; i--) {
		let newList = {
			value: arr[i],
			rest: list
		}
		list = newList;
	}
	return list;
}

function listToArray(list) {
	let arr = [];
	let node = list;
	while (node != null) {
		arr.push(node.value);
		node = node.rest;
	}
	return arr;
}

function prepend(element, list) {
	let newList = {
		value: element,
		rest: list
	}
	return newList;
}

// Iterative nth
/* function nth(list, number) {
	let node = list;
	for (let i = 0; i < number; i++) {
		if (node == undefined) {
			return undefined;
		}
		else {
			node = node.rest;
		}
	}
	return node.value;
} */

// Recursive nth
function nth(list, number) {
	if (list == null) {
		return undefined;
	}
	if (number === 0) {
		return list.value;
	}
	return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 3));
// → 40
console.log(nth(arrayToList([10, 20, 30]), 6));
// → undefined

// Deep comparison
function deepEqual(a, b) {
	if (typeof a != typeof b) {
		return false;
	}
	if (typeof a != 'object') {
		if (a === b) {
			return true;
		}
		return false;
	}
	if ((a === null && b !== null) || (a !== null && b === null)) {
		return false;
	}
	let aKeys = Object.keys(a);
	let bKeys = Object.keys(b);
	if (aKeys.length !== bKeys.length) {
		return false;
	}
	for (let i = 0; i < aKeys.length; i++) {
		if (aKeys[i] !== bKeys[i]) {
			return false;
		}
		if (!deepEqual(a[aKeys[i]], b[bKeys[i]])) {
			return false;
		}
	}
	return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true