//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkaterCharacter(name, color, height, age) {
	this.name = name;
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

let tony = new MakeSkaterCharacter('Tony Hawk', 'blue', 72, 50);
console.log(tony);
tony.ageUp();
console.log(tony.skaterAge);