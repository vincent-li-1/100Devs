//Create a mouse object that has four properties and three methods
let mouse = {
	size: 'small',
	color: 'brown',
	age: 3,
	describe() {
		console.log(`This mouse is ${this.size}, and ${this.color}`);
	},
	dye(newColor) {
		this.color = newColor;
	},
	getAge() {
		consolelog(`This mouse is ${this.age} years old`);
	}
}
