'use strict';

// contains our jsx content for the app
console.log('app.js is running!');

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	// e is event object
	e.preventDefault(); // stops full page refresh and runs code for event
	// console.log('Form submitted');
	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option); // push on new array
		e.target.elements.option.value = ''; // set value to an empty string
		// add function for rendering data
		renderFormApp(); // called after options array has been changed
	}
};
var onRemoveAll = function onRemoveAll() {
	app.options = []; // set to new empty array (clears out all items)
	renderFormApp();
};

var onMakeDecision = function onMakeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length); // multiplying by index and rounding down
	var option = app.options[randomNum];
	alert(option);
};

var appRoot = document.getElementById('app');
// create remove all button
// onCLick handler which will wipe app.options setting it equal to an empty array(re-render the app)
// count goes back to zero


// const numbers = [55, 101, 1000];
var renderFormApp = function renderFormApp() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			'Subtitle : ',
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What should I do?'
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove all'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

// initialize function
renderFormApp();
