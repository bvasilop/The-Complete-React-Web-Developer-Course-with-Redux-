// console.log(path.join(__dirname, 'public')); // how to get absolute path
	// then run node webpack.config.js to from terminal in directory
		// we join absolute path to local path to public folder
			// use node path join https://nodejs.org/api/path.html
// /Users/billvasilopoulos/The-Complete-React-Web-Developer-Course-with-Redux-/react-course-projects/indecision-app/public

const path = require('path'); // load in module for path

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}]
	}
};