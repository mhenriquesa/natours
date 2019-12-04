class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}
	
	greet() {
		console.log("Hi there, " + this.name);
	}
}

export default Person;
// function Person(fullName) {
// 	this.name = fullName;
// 	this.greet = function() {
// 		console.log("Hello there, " + this.name);
// 	}
// }

// module.exports = Person;
