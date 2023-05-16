//Create a stopwatch object that has four properties and three methods
let stopwatch = {
	color: 'black',
	hours: 1,
	minutes: 24,
	seconds: 33,
	tellHours() {
		return this.hours;
	},
	tellMinutes() {
		return this.minutes;
	},
	tellSeconds() {
		return this.seconds;
	}
};