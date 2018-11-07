console.log('app.js is running!');

// JSX = JavaScript XML (JavaScript syntax extension)
//var template = <h1 id="someId">Something new!</h1>; // must compile from jsx to js using babel

var template = React.createElement( // pre compiled pre babel code
    'h1',
    { id: 'someid' },
    'Something new'
    );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // we use react render  to render this template in this element in the browser.
