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
	console.log('addOne');
};

var minusOne = function minusOne() {
	console.log('minusOne');
};

var reset = function reset() {
	console.log('reset');
};

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
console.log(templateTwo);

// Challenge
// button with text "-1" --setup minusOne function and register - log "minusOne"
// make reset button "reset" - setup reset function -log "reset"
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
