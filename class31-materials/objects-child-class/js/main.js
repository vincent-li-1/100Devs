//Create an a class and extend it - Can be anything you would like it to be! 
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	speak() {
		console.log(`${this.name} makes a sound`);
	}
}

class Horse extends Animal {
	constructor(name, age, breed) {
		super(name, age);
		this.breed = breed;
	}
	ride() {
		console.log(`Riding ${this.name} the ${this.breed} horse`);
	}
}
