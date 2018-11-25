//  react components are just ES6 classes that extend something React gives us.
// Classes must have capitalized first letter
// Has to define a render method


class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['Thing One', 'Thing Two', 'Thing Four'];
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}
class Header extends React.Component {
	render() { // must define in React
		// console.log(this.props); // {title: "Test value"} // coverts into an object key value pair
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
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
				{
					// this.props.options.map((option) => <p key={option}>{option}</p>) // iterate through and create p for each option
					this.props.options.map((option) => <Option key={option} optionText={option}/>) // key is a reserved word that can't be use as an expression later. That's why we use optionText
				}

				<Option />
			</div>
		);
	}
}


class Option extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.optionText}</p>
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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));