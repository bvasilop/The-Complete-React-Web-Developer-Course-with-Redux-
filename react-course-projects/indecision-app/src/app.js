// React components are just ES6 classes that extend something React gives us.
// Classes must have capitalized first letter
// Has to define a render method
// component state allows our components to manage data.
// just think about an object with various key value pairs and when that data changes the component will automatically render to reflect those changes.
// taking a method, passing it down into a child component and having it called down there.
// That allows us to reverse the data flow. (allows child to communicate wit parent)

// stateless - functional - component (presentational components)

class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: []
		};
	}

	handleDeleteOptions() { // wipes the state
		this.setState(() => {
			return {
				options: []
			};
		});
	}
	handlePick() {
		const	randomNum = Math.floor(Math.random() * this.state.options.length); // multiplying by index and rounding down
		const option = this.state.options[randomNum];
		alert(option);
			}
	handleAddOption(option) {
		if (!option) { // will only run if there is an empty string
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists'
		}
		this.setState((prevState) => { // equivalent to an else clause
			return {
				options: prevState.options.concat(option)// use array concat method
			};
		});
	}
// create new method handlePick - pass down to Action and Setup onClick- bind here
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions = {this.handleDeleteOptions}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

const Header = (props) => { // stateless functional component
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
};


// class Header extends React.Component { // state component
// 	render() { // must define in React
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subtitle}</h2>
// 			</div>
// 		);
// 	}
// }

const Action = (props) => { // since we pass props as arg we don't need this. anymore // stateless functional component
		return (
			<div>
				<button
				onClick={props.handlePick}
				disabled={!props.hasOptions} // flip ! to disable
				>
				What Should I do?
				</button>
			</div>
		);
	};

// class Action extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button
// 				onClick={this.props.handlePick}
// 				disabled={!this.props.hasOptions} // flip ! to disable
// 				>
// 				What Should I do?
// 				</button>
// 			</div>
// 		);
// 	}
// }

const Options = (props) => { // stateless functional component
	return (
		<div>
		<button onClick={props.handleDeleteOptions}>Remove All</button>
			{
				props.options.map((option) => <Option key={option} optionText={option}/>)
			}
			<Option />
		</div>
	);
};


// class Options extends React.Component { // state component
// 	render() {
// 		return (
// 			<div>
// 			<button onClick={this.props.handleDeleteOptions}>Remove All</button> {/* handleRemoveAll has the exact same this binding as render */}
// 				{
// 					this.props.options.map((option) => <Option key={option} optionText={option}/>) // key is a reserved word that can't be use as an expression later. That's why we use optionText
// 				}
// 				<Option />
// 			</div>
// 		);
// 	}
// }


const Option = (props) => { // stateless component // faster because it doesn't have the baggage of extends React.Component
	return (
		<div>
			<p>{props.optionText}</p>
		</div>
	);
};


// class Option extends React.Component { // state component
// 	render() {
// 		return (
// 			<div>
// 				<p>{this.props.optionText}</p>
// 			</div>
// 		);
// 	}
// }

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) { // e is event object
			e.preventDefault();

			const option = e.target.elements.option.value.trim(); // trim() removes all leading and trailing spaces
			const error = this.props.handleAddOption(option);

			this.setState(() => {
				return { error }; // shorthand for error: error
			});
		}
		render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
				</div>
		);
	}
}

// const User = (props) => { //stateless - functional - component (presentation al  components) // props get passed as this.props as first arg
// 	return (
// 		<div>
// 			<p>Name: {props.name} </p>
// 			<p>Age: {props.age} </p>
// 		</div>
// 	);
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));