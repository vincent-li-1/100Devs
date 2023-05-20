const { permutations } = require("mathjs");

//Create a dog object that has four properties and three methods
let dog = {
	color: 'black',
	name: 'Ralphie',
	hair: 'Short',
	age: 2,
	bark() {
		console.log('Woof');
	},
	ageUp() {
		age++;
	},
	dye(newColor) {
		this.color = newColor;
	}
}
