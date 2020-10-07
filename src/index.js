import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';

import './index.css';

class GoodItem extends React.Component {
	render() {
		return (<li> {this.props.good.name} </li>);
	}
}

class GoodsList extends React.Component {
	render() {
		return (
				<div className="goodslist">
					<h2>Goods list</h2>
					<ul>
						{data.slice(0, 3).map(good => (<GoodItem className="gooditem" key={good.id} good={good}/>))}
					</ul>
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