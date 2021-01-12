import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.json';

import './index.css';

const App = () => {
  const pieceOfProducts = products.slice(0, 3);

  return (
    <>
      <h1>Список товаров</h1>
      <ul>
        {pieceOfProducts.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
