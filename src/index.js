import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json'
import './index.css'

const App = () => {
    return (
        <div className="goods">
            <h1>Список товаров</h1>
            <ul>
                {data.map((item) => 
                    <li>{item.name}</li>).slice(0,3)
                }
            </ul>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));



