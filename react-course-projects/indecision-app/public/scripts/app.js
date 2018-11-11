'use strict';

var nameVar = 'Bill';
nameVar = 'BillyVas';
console.log('nameVar', nameVar);
var nameLet = 'John';
nameLet = 'Joey';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping
// parsing words from array
var fullName = 'Bill Theo Vasilopoulos';
if (fullName) {
    var firstName = fullName.split(' ')[0]; // grabbing first name from new array
    var middleName = fullName.split(' ')[1];
    var lastName = fullName.split(' ')[2];
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
