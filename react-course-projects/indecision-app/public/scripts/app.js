'use strict';

var square = function square(x) {
    // es5
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
}; // es6 // arrow function expression syntax
console.log(squareArrow(8));

// getFirstName function
// create regular arrow function
// create second arrow function using expression syntax

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Bill Vasilopoulos'));

var getFirstName2 = function getFirstName2(fullName) {
    return fullName.split(' ')[0];
}; // regular arrow function
console.log(getFirstName2('Bill Vasilopoulos')); // expression syntax
