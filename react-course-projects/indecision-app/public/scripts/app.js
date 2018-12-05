'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// count - setup prop value to 0
//const num = '12';
// parseInt(num, 10) + 1 takes a string of numbers and converts to numbers -- base 10 // 13
// parseInt('abc', 10) // NAN for alpha numeric chars
// isNAN("a" * 33) // true
// isNAN(2 * 33) // false
var Counter = function (_React$Component) {
	_inherits(Counter, _React$Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this.handleAddOne = _this.handleAddOne.bind(_this);
		_this.handleMinusOne = _this.handleMinusOne.bind(_this);
		_this.handleReset = _this.handleReset.bind(_this);
		_this.state = {
			count: 0
			// count: props.count // set props // don't need anymore because of local storage
		};
		return _this;
	}

	_createClass(Counter, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// only accessed through class based components
			var stringCount = localStorage.getItem('count');
			var count = parseInt(stringCount, 10);

			if (!isNaN(count)) {
				// will only return true if it is a number
				this.setState(function () {
					return { count: count };
				});
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.count !== this.state.count) {
				// !== has a different length than the current one .// to check if options array length has changed

				localStorage.setItem('count', this.state.count);
				console.log('saving data');
			}
		}

		// componentWillUnmount () {
		// 	console.log('component will unmount');
		// }


	}, {
		key: 'handleAddOne',
		value: function handleAddOne() {
			this.setState(function (prevState) {
				// access previous state as arg
				return {
					count: prevState.count + 1 // access prev state count
				};
			});
		}
	}, {
		key: 'handleMinusOne',
		value: function handleMinusOne() {
			this.setState(function (prevState) {
				return {
					count: prevState.count - 1
				};
			});
		}
	}, {
		key: 'handleReset',
		value: function handleReset() {
			this.setState(function () {
				return {
					count: 0
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Count: ',
					this.state.count
				),
				React.createElement(
					'button',
					{ onClick: this.handleAddOne },
					'+1'
				),
				React.createElement(
					'button',
					{ onClick: this.handleMinusOne },
					'-1'
				),
				React.createElement(
					'button',
					{ onClick: this.handleReset },
					'reset'
				)
			);
		}
	}]);

	return Counter;
}(React.Component);

// Counter.defaultProps = { // set default props // Don't need anymore because we're reading from local storage
// 	count: 0 // can setup default here as well
// };

// create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// wire up onClick & bind in the constructor

ReactDOM.render(React.createElement(Counter, { count: 0 }), document.getElementById('app')); // has default setup


/*
let count = 0;

const addOne = () => {
	count++;
renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};



const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/
