import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json'
import './index.css'

const App = () => {
    return (
        <div className="goods">
            <h1>Список товаров</h1>
            <ul>
                { data.slice(0,3).map( (item) => <li> {item.name} </li>) }
            </ul>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));



