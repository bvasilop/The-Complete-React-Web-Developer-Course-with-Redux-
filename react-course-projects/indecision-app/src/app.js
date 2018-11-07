// contains our jsx content for the app
console.log('app.js is running!');

/*** auto generated file that will contain our babel transformations */

// JSX = JavaScript XML (JavaScript syntax extension)

var template = (
    <div>
		<h1 id='someId'>Indecision App!</h1>
		<p>This is some text</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
			<li>Item three</li>
		</ol>
    </div>
);



var appRoot1 = document.getElementById('app1');


ReactDOM.render(template, appRoot1); // we use react render  to render this template in this element in the browser.

// Create a templateTwo var JSX expression
    // root div
        // h1 -> your name
        // p -> Age: 43
        // p -> Location: Seattle
        // Render templateTwo instead of template

var templateTwo = (
    <div>
        <h1>Bill Vasilopoulos</h1>
        <p>Age : 43</p>
        <p>Location : Seattle</p>
    </div>
);
var appRoot2 = document.getElementById('app2');
ReactDOM.render(templateTwo, appRoot2);
