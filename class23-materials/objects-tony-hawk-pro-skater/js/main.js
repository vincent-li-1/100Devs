//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkaterCharacter(brand, color, height, age) {
	this.boardBrand = board;
	this.boardColor = color;
	this.skaterHeight = height;
	this.skaterAge = age;
	this.ageUp = function() {
		this.skaterAge++;
	}
	this.whatColor = function() {
		console.log(this.color);
	}
	this.fall = function() {
		console.log('ouch!');
	}
}