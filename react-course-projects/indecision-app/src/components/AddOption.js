import React from 'react';
export default class AddOption extends React.Component {

  state = {
    error: undefined
  };

	handleAddOption = (e) => { // e is event object
			e.preventDefault();

			const option = e.target.elements.option.value.trim(); // trim() removes all leading and trailing spaces
			const error = this.props.handleAddOption(option);

			this.setState(() => ({ error })); // shorthand for error: error

			if (!error) { // clear input if there wasn't an error
				e.target.elements.option.value = '';
			}
		};
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
