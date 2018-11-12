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
	count++;
renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();



