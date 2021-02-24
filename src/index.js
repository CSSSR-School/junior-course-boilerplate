import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.json';
import './index.css';

const PRODUCTS_LIMIT = 3;

const App = () => {
  const productsList = products.slice(0, PRODUCTS_LIMIT);

  return (
    <div className="container">
      <h1>Список товаров</h1>
      <ul>
        {productsList.map(({id, name}) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
