// Musketeers
let musketeers = ['Athos', 'Porthos', 'Aramis'];
for (let i = 0; i < musketeers.length; i++) {
	console.log(musketeers[i]);
}
musketeers.push('D\'Artagnan')
musketeers.forEach(musketeer => console.log(musketeer));
musketeers.splice(2,1);
for (const musketeer of musketeers) {
	console.log(musketeer);
}

// Sum of values
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for (const value of values) {
	sum += value;
}
console.log(sum);

// Array maximum
const valuesMaximum = [3, 11, 7, 2, 9, 10];
let max = -Infinity;
valuesMaximum.forEach(value => {
	if (value > max) {
		max = value;
	}
})
console.log(max);

// List of words
let input = prompt('Input a word');
let words = [];
while (input !== 'stop') {
	words.push(input);
	input = prompt('Input a word');
}
words.forEach(word => console.log(word));

// Adding character experience

const aurora = {
	name: 'Aurora',
	health: 150,
	strength: 25,
	xp: 0,
	describe() {
		return `${this.name} has ${this.health} health points, ${this
			.strength} as strength, and ${this.xp} experience points`;
	}
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// Modeling a dog
const dog = {
	name: 'Ralphie',
	species: 'German Shepherd',
	size: '50 lbs',
	
	bark() {
		return 'Awooooo';
	}
};


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
const r = Number(prompt("Enter the circle radius:"));

const circle = {
	radius: r,
	circumference() {
		return Math.PI * 2 * this.radius;
	},
	area() {
		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

/* Modeling a bank account
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/

const account = {
	name: 'Alex',
	balance: 0,
	credit(value) {
		this.balance += value;
	},
	describe() {
		return `Account belonging to ${this.name} has ${this.balance} dollars`;
	}
};

account.describe();
account.credit(250);
account.credit(-80);
account.describe();