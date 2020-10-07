import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';

class GoodItem extends React.Component {
	render() {
		console.log(this.props.good);
		return (<li key={this.props.good.id}> {this.props.good.name} </li>);
	}
}

class GoodsList extends React.Component {
	render() {
		return (
				<div>
					<h2>Goods list</h2>
					{data.slice(0, 3).map(good => (<GoodItem good={good}/>))}
				</div>
			)
		}
}

function App() {
	return (
		<GoodsList />
	)
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);