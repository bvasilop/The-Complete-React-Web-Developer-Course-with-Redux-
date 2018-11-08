'use strict';

// contains our jsx content for the app
console.log('app.js is running!');

/*** auto generated file that will contain our babel transformations */

// JSX = JavaScript XML (JavaScript syntax extension)

// create app object
// title/ subtitle strings
// use title and subtitle and subtitle

var strings = {
    title: 'Star Wars',
    subtitle: 'Return of the Jedi'
};
var templateOne = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Title : ',
        strings.title
    ),
    React.createElement(
        'h3',
        null,
        'Subtitle : ',
        strings.subtitle
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
    location: 'Chicago'
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);
var appRoot3 = document.getElementById('app3');
ReactDOM.render(templateThree, appRoot3);
