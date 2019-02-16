import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action.js';
import Options from './Options.js';


export default class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
			// options: props.options // since we're reading from local storage, we don't need user to pass in a prop anymore because we're going to read the saved data
		};
	}

	componentDidMount() { // only accessed through class based components
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) { // if there are options then call below
				// this.setState(() => ({ options: options }))
				this.setState(() => ({ options })); // only use if it is valid
			}
			} catch (e) {
				// Do nothing at all if invalid
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) { // !== has a different length than the current one .// to check if options array length has changed
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log('saving data');
		}

	}

	componentWillUnmount () {
		console.log('component will unmount');
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] })); // one liner version
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
			// if they're not equal, than it is not an item we want to remove // return true -- stays in array

		}));
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
		this.setState((prevState) => ({ options: prevState.options.concat(option)}));
	}

// create new method handlePick - pass down to Action and Setup onClick- bind here
	render() {
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions = {this.handleDeleteOptions}
					handleDeleteOption = {this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}