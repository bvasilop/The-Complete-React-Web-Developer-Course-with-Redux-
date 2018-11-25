// use classes to reuse code (multiple instances)
// setup constructor to take name and age (default to 0)
// setup brand new method getDescription = Bill Vasilopoulos is 43 years old
class Person {
constructor(name = 'Anonymous', age = 0) { // es6 default function
		this.name = name;
		this.age = age;

	} // no comma
	getGreeting() {
		return `Hi. I am ${this.name}!`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}

}

const me = new Person('Bill', 43);


console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

