import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';

class App extends Component {
	render() {
	let items = data.slice(0, 3).map(item => {
		return (
			<li key={item.id}>{item.name}</li>
		)
	});

	return (
			<div class='container'>
				<h1>Список товаров</h1>
				<ul>{items}</ul>
			</div>
			)
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

