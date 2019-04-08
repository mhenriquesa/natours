// var Person = require('./modules/Person'),
var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " pagou tudinho");
	}

}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Henriquinho", "green")
jane.greet();
jane.payTaxes();