'use strict';

// contains our jsx content for the app
console.log('app.js is running!');

/*** auto generated file that will contain our babel transformations */

// JSX = JavaScript XML (JavaScript syntax extension)

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

var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot1); // we use react render  to render this template in this element in the browser.

// Create a templateTwo var JSX expression
// root div
// h1 -> your name
// p -> Age: 43
// p -> Location: Seattle
// Render templateTwo instead of template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Bill Vasilopoulos'
    ),
    React.createElement(
        'p',
        null,
        'Age : 43'
    ),
    React.createElement(
        'p',
        null,
        'Location : Seattle'
    )
);
var appRoot2 = document.getElementById('app2');
ReactDOM.render(templateTwo, appRoot2);
