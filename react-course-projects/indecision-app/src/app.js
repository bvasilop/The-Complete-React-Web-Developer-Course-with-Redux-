//  react components are just ES6 classes that extend something React gives us.
// Classes must have capitalized first letter
// Has to define a render method

class Header extends React.Component {
	render() { // must define in React
		return (
			<div>
				<h1>Indecision</h1>
				<h2>Put your life in the hands of a computer</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What Should I do?</button>
			</div>
		);
	}
}
class Options extends React.Component {
	render() {
		return (
			<div>
				<p>Options component here</p>
			</div>
		);
	}
}
class AddOption extends React.Component {

	render() {
		return (
			<p>Add Options component here</p>
		);
	}
}

const jsx = (
	<div>
		<Header />
		<Action />
		<Options />
		<AddOption />

	</div>
);
ReactDOM.render(jsx, document.getElementById('app'));