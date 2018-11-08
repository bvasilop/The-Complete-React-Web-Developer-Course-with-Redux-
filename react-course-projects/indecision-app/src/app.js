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
    }
var templateOne = (
    <div>
      <h2>Title : {strings.title}</h2>
      <h3>Subtitle : {strings.subtitle}</h3>
    </div>
);

var appRoot1 = document.getElementById('app1');
ReactDOM.render(templateOne, appRoot1);


var templateTwo = (
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
}

var templateThree = (
    <div>
      <h1>Name: {user.name.toUpperCase()}</h1>
      <p>Age : {user.age}</p>
      <p>Location : {user.location}</p>
    </div>
);
var appRoot3 = document.getElementById('app3');
ReactDOM.render(templateThree, appRoot3);
