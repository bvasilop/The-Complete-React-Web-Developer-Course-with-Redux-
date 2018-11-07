'use strict';

// contains our jsx content for the app
console.log('app.js is running!');

/*** auto generated file that will contain our babel transformations */

// JSX = JavaScript XML (JavaScript syntax extension)

var template = React.createElement(
  'h1',
  { id: 'someId' },
  'Indecision App!'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // we use react render  to render this template in this element in the browser.