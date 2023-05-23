//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class Netflix {
	constructor(name, star, releaseDate, genre) {
		this.name = name;
		this.star = star;
		this.releaseDate = releaseDate;
		this.genre = genre
	}
	getName() {
		return this.name;
	}
	replaceStar(newStar) {
		this.star = newStar;
	}
	favorite() {
		console.log('I love this show!');
	}
}

