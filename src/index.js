import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header'
import Items from './components/AppItems/Items'
import data from './products.json'
import './index.css'

const App = () => {
    return (
        <div className="goods">
            <Header>
                Список товаров
            </Header> 
            <Items data={data}/>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));



