'use strict';

// contains our jsx content for the app
console.log('app.js is running!');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		{ id: 'someId' },
		'Indecision App!'
	),
	React.createElement(
		'p',
		null,
		'This is some text'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		),
		React.createElement(
			'li',
			null,
			'Item three'
		)
	)
);

var count = 0;

var addOne = function addOne() {
	count++;
	renderCounterApp();
};

var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};

var reset = function reset() {
	count = 0;
	renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Count: ',
			count
		),
		React.createElement(
			'button',
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'reset'
		)
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
