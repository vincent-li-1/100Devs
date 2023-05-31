// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor {
	constructor(name, role) {
		this._name = name;
		this._role = role;
	}
	get name() {
		return this._name;
	}
	get role() {
		return this._role;
	}
	greet() {
		console.log(`Hello my name is ${this._name} and I am on the ${this._role} team`)
	}
}

class Frontend extends Contractor {
	constructor(name, role, mediaType) {
		super(name, role);
		this._mediaType = mediaType;
	}
	get mediaType() {
		return this._mediaType;
	}
	greet() {
		super.greet();
		console.log(`My specialty is developing frontend for ${this._mediaType}`)
	}
}

class Backend extends Contractor {
	constructor(name, role, language) {
		super(name, role);
		this._langauge = language;
	}
	get language() {
		return this._langauge;
	}
	greet() {
		super.greet();
		console.log(`My favorite backend language to code in is ${this._language}`)
	}
}














// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
