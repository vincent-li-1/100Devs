//Create a constructor with 4 properties and 3 methods
function PizzaFactory(size, toppings, slices, price) {
	this.size = size;
	this.toppings = toppings;
	this.slices = slices;
	this.price = price;
	this.addTopping = function(topping) {
		if (!this.toppings.includes(topping)) {
			this.toppings.push(topping);
		}
	}
	this.eatSlice = function() {
		if (this.slices > 0) {
			this.slices--;
		}
		else {
			alert('No more slices!');
		}
	}
	this.buyPizza() = function() {
		const toppingsString = this.toppings.join(', ');
		console.log(`Bought a ${this.size} pizza with ${toppingsString} for $${this.price}`);
	}
}