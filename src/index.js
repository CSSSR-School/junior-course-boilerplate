import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json'
import './index.css'
const App = () => {
    return (
        <div className="goods">
            <h1>Список товаров</h1>
            <ul>
                <li>{data[0].name}</li>
                <li>{data[1].name}</li>
                <li>{data[2].name}</li>
            </ul>
        </div>
    );

}



ReactDOM.render(<App />, document.getElementById('root'));



