const Layout = (props) => {
	return (
		<div>
			<p>header</p>
			{props.content}
			<p>footer</p>
		</div>
	)
}

const template = (
	<div>
		<h1>Page Title</h1>
		<p>This is my page</p>
	</div>
)

ReactDOM.render(<Layout></Layout>/>, document.getElementById('app'));
