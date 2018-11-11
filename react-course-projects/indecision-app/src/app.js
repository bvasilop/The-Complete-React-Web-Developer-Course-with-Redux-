// contains our jsx content for the app
console.log('app.js is running!');





const template = (
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

let count = 0;

const addOne = () => {
console.log('addOne');
};

const minusOne = () => {
	console.log('minusOne');
};

const reset = () => {
	console.log('reset');
};

const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>reset</button>
	</div>
);
console.log(templateTwo);

// Challenge
// button with text "-1" --setup minusOne function and register - log "minusOne"
// make reset button "reset" - setup reset function -log "reset"
const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);




