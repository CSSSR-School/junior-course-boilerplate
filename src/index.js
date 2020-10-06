import React from 'react';
import ReactDOM from 'react-dom';
//import data from './products.json';


class Shop extends React.Component {
	render() {
		return <h1>React</h1>
	}
}

function App() {
	return (
		<Shop />
	)
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);