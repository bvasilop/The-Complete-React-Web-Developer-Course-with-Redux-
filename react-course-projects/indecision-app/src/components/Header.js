import React from 'react';

const Header = (props) => { // stateless functional component
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = { // using default props
	title: 'Indecision'
};

export default Header;