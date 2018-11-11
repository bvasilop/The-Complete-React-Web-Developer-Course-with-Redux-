'use strict';

// arguments object - no longer bound
// this keyword - no longer bound

var add = function add(a, b) {
	console.log(arguments); // access to arguments object
	return a + b;
};
console.log(add(55, 1001, 99)); // third argument is still accessible when console.log above
// we have access to argument objects in es5 but not in es6 arrow functions

var add2 = function add2(a, b) {

	return a + b;
};
console.log(add2(5, 1, 9));

var user = {
	name: 'Bill',
	cities: ['Seattle', 'Chicago', 'Bloomington'],
	// printPlacesLived: function () { // don't use arrow function in methods because you lose access to this.cities unless using es6 methods syntax
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		// es 6 method syntax
		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city + '!';
		});
	}
};
console.log(user.printPlacesLived());
// make an object
// use a method

var multiplier = {
	// numbers - array of numbers
	// multiply by - single number
	// multiply method that returns new array where numbers have been multiply
	numbers: [2, 4, 6],
	multiplyBy: 3,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (number) {
			return number * _this2.multiplyBy;
		});
	}
};

console.log(multiplier.multiply());
