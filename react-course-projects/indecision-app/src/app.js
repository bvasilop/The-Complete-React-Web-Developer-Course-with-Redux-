// import './utils.js'; // current files directory which is source (lives inside).
import subtract, { square, add } from './utils.js'; // named exports with default export
// import anything, { square, add } from './utils.js'; // can call default anything as long as you reference it later with the same name
// import subtract from './utils.js'; is also valid if importing a single default statement
console.log('app.js is running');
console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 81));

// person.js
// named export isAdult(18) - true if adult , otherwise false
// named export canDrink(21)- true if 21 and over, otherwise false

// import isAdult and canDrink
//use both printing results to the console

// import { isAdult, canDrink } from './person.js';

// console.log(isAdult(21));
// console.log(canDrink(21));

