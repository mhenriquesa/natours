function Person(fullName) {
	this.name = fullName;
	this.greet = function() {
		console.log("Hello there, " + this.name);
	}
}

module.exports = Person;