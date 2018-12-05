'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// React components are just ES6 classes that extend something React gives us.
// Classes must have capitalized first letter (Class based Components)
// Has to define a render method
// component state allows our components to manage data.
// just think about an object with various key value pairs and when that data changes the component will automatically render to reflect those changes.
// taking a method, passing it down into a child component and having it called down there.
// That allows us to reverse the data flow. (allows child to communicate wit parent)

// stateless - functional - component (presentational components)(function based components)

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
		_this.state = {
			options: props.options
		};
		return _this;
	}
	// handleDeleteOptions() { // wipes the state // long version
	// 	this.setState(() => {
	// 		return {
	// 			options: []
	// 		};
	// 	});
	// }

	_createClass(IndecisionApp, [{
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return { options: [] };
			}); // one liner version
		}
	}, {
		key: 'handleDeleteOption',
		value: function handleDeleteOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToRemove !== option;
					})
					// if they're not equal, than it is not an item we want to remove // return true -- stays in array

				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.options.length); // multiplying by index and rounding down
			var option = this.state.options[randomNum];
			alert(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				// will only run if there is an empty string
				return 'Enter valid value to add item';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'This option already exists';
			}
			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
		}

		// create new method handlePick - pass down to Action and Setup onClick- bind here

	}, {
		key: 'render',
		value: function render() {
			var subtitle = 'Put your life in the hands of a computer';
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 0,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions,
					handleDeleteOption: this.handleDeleteOption
				}),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption
				})
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = { // using default props
	options: []
};

var Header = function Header(props) {
	// stateless functional component
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

Header.defaultProps = { // using default props
	title: 'Indecision!'
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

var Action = function Action(props) {
	// since we pass props as arg we don't need this. anymore // stateless functional component
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{
				onClick: props.handlePick,
				disabled: !props.hasOptions // flip ! to disable
			},
			'What Should I do?'
		)
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

var Options = function Options(props) {
	// stateless functional component
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		props.options.map(function (option) {
			return React.createElement(Option, {
				key: option,
				optionText: option,
				handleDeleteOption: props.handleDeleteOption
			});
		})
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


var Option = function Option(props) {
	// stateless component // faster because it doesn't have the baggage of extends React.Component
	return React.createElement(
		'div',
		null,
		props.optionText,
		React.createElement(
			'button',
			{
				onClick: function onClick(e) {
					{/*define inline arrow function -- called with (e) arg when button is clicked*/}
					props.handleDeleteOption(props.optionText);
				}
			},
			'remove'
		)
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

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			// e is event object
			e.preventDefault();

			var option = e.target.elements.option.value.trim(); // trim() removes all leading and trailing spaces
			var error = this.props.handleAddOption(option);

			this.setState(function () {
				return { error: error };
			}); // shorthand for error: error
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

// const User = (props) => { //stateless - functional - component (presentation al  components) // props get passed as this.props as first arg
// 	return (
// 		<div>
// 			<p>Name: {props.name} </p>
// 			<p>Age: {props.age} </p>
// 		</div>
// 	);
// };

// ReactDOM.render(<IndecisionApp options={['Option1', 'Option2']}/>, document.getElementById('app')); // using default props

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
