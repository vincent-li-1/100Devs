//Create a pizza object that has four properties and three methods

let pizza = {
	size: 'large',
	toppings: ['pepperoni'],
	slices: 8,
	price: 15.99,
	addTopping(topping) {
		if (!this.toppings.includes(topping)) {
			this.toppings.push(topping);
		}
	},
	eatSlice() {
		if (this.slices > 0) {
			this.slices--;
		}
		else {
			alert('No more slices!');
		}
	},
	buyPizza() {
		const toppingsString = this.toppings.join(', ');
		console.log(`Bought a ${this.size} pizza with ${toppingsString} for $${this.price}`);
	}
}

pizza.addTopping('mushrooms');
pizza.buyPizza();
