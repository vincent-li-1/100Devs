//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeStreetFighter(name, difficulty, strength, health) {
	this.name = name,
	this.difficulty = difficulty,
	this.strength = strength,
	this.health = health,
	this.rename = function(newName) {
		name = newName;
	}
	this.changeStrength = function(change) {
		this.strength += change;
	}
	this.takeDamage = function(damage) {
		this.health -= damage;
	}
}