import React from 'react';

const Option = (props) => { // stateless component // faster because it doesn't have the baggage of extends React.Component
	return (
		<div>
			{props.optionText}
			<button
			onClick={(e) => {			{/*define inline arrow function -- called with (e) arg when button is clicked*/}
			props.handleDeleteOption(props.optionText);
			}}
			>
			remove
			</button>
		</div>
	);
};
export default Option; // down below because of const declaration and naming variables in React dev tools