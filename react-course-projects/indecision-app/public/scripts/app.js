'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// use classes to reuse code (multiple instances)
// setup constructor to take name and age (default to 0)
// setup brand new method getDescription = Bill Vasilopoulos is 43 years old
var Person = function () {
	function Person() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
		var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Person);

		// es6 default function
		this.name = name;
		this.age = age;
	} // no comma


	_createClass(Person, [{
		key: 'getGreeting',
		value: function getGreeting() {
			return 'Hi. I am ' + this.name + '!';
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			return this.name + ' is ' + this.age + ' year(s) old.';
		}
	}]);

	return Person;
}();

var Student = function (_Person) {
	_inherits(Student, _Person);

	function Student(name, age, major) {
		_classCallCheck(this, Student);

		// refers to parent class (same as calling Person constructor function)
		var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

		_this.major = major;
		return _this;
	}

	_createClass(Student, [{
		key: 'hasMajor',
		value: function hasMajor() {
			return !!this.major; // used to flip it twice from true to false or false to true
		}
	}, {
		key: 'getDescription',
		value: function getDescription() {
			// overrides parent getDescription method
			var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this); // accesses parent getDescription method

			if (this.hasMajor()) {
				description += ' Their major is ' + this.major + '.';
			}

			return description;
		}
	}]);

	return Student;
}(Person);

var Traveler = function (_Person2) {
	_inherits(Traveler, _Person2);

	function Traveler(name, age, homeLocation) {
		_classCallCheck(this, Traveler);

		var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

		_this2.homeLocation = homeLocation;
		return _this2;
	}

	_createClass(Traveler, [{
		key: 'getGreeting',
		value: function getGreeting() {
			//override getGreeting
			var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
			if (this.homeLocation) {
				greeting += ' I am visiting from ' + this.homeLocation + '.';
			}

			return greeting;
		}
	}]);

	return Traveler;
}(Person);

// const me = new Student('Bill', 43, 'Computer Science');


var me = new Traveler('Bill', 43, 'Seattle');
console.log(me.getGreeting()); // Traveler {name: "Bill", age: 43, homeLocation: "Seattle"}
//console.log(me.hasMajor()); // true
//console.log(me.getDescription());
//console.log(me);

var other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting()); // Traveler {name: "Anonymous", age: 0, homeLocation: undefined}
//const other = new Student();
//console.log(other.hasMajor());
//console.log(other.getDescription());
//console.log(other);

// create new subclass of Person (Traveller). Traveller is going to extend the Person class. Add support for homeLocation
// override getGreeting
