import React from 'react';
import ReactDOM from 'react-dom';

import products from './products.json';
import './index.css';

ReactDOM.render(
  <>
    <h1 className="page-title">Список товаров</h1>
    <ul className="product-list">
      {products.map((item) =>
        <li className="product-list__item" key={item.id}>
          {item.name}
        </li>
      )}
    </ul>
  </>,
  document.getElementById('root')
);
