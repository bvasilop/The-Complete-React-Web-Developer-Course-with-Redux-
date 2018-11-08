'use strict';

// contains our jsx content for the app
console.log('app.js is running!');

/*** auto generated file that will contain our babel transformations */

// JSX = JavaScript XML (JavaScript syntax extension)

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length is > 0 then "Here are your options" else  "No options"
var app = {
    title: 'Star Wars',
    subtitle: 'Return of the Jedi',
    options: ['One, Two']
};

var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Title : ',
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
    )
);

var appRoot1 = document.getElementById('app1');
ReactDOM.render(templateOne, appRoot1);

var templateTwo = React.createElement(
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

var appRoot2 = document.getElementById('app2');
ReactDOM.render(templateTwo, appRoot2); // we use react render  to render this template in this element in the browser.

// Create a templateTwo var JSX expression
// root div
// h1 -> your name
// p -> Age: 43
// p -> Location: Seattle
// Render templateTwo instead of template
var user = {
    name: 'Bill Vasilopoulos',
    age: 43,
    location: 'Seattle'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location,
            ' '
        );
    }
}

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot3 = document.getElementById('app3');
ReactDOM.render(templateThree, appRoot3);

// if statements
// ternary operator
// logical && operator
