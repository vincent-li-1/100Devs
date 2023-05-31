//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
	constructor(size, brand, color, price) {
		this.size = size;
		this.brand = brand;
		this.color = color;
		this.price = price;
	}
	makeEspresso() {
		console.log('Making espresso');
	}
	buyMachine() {
		console.log(`Buying ${this.size} ${this.color} machine made by ${brand} for ${price} dollars`)
	}
	paintMachine(newColor) {
		this.color = newColor;
	}
}