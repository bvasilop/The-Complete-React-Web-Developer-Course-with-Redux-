// console.log(path.join(__dirname, 'public')); // how to get absolute path
// /Users/billvasilopoulos/The-Complete-React-Web-Developer-Course-with-Redux-/react-course-projects/indecision-app/public

const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	}
};