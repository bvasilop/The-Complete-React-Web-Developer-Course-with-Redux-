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
	handlePick() {
		alert('handlePick');
	}
	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What Should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	handleRemoveAll() {
		alert('some message');
	}
	render() {
		return (
			<div>
			<button onClick={this.handleRemoveAll}>Remove All</button>
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

// set up form with text input and submit button
// wire up onSubmit
// handleAddOption -> fetch value typed, if value, then alert
class AddOption extends React.Component {
	handleAddOption(e) { // e is event object
			e.preventDefault();

			const option = e.target.elements.option.value.trim(); // trim() removes all leading and trailing spaces

			if(option) {
				alert(option);
			}
		}
		render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
				</div>
		);
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));