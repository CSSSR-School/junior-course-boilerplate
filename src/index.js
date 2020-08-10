import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import produtcs from './products.json';


function ProductList() {
  const productItems = produtcs.slice(0, 3).map((item) =>
    <li class="list-item">{item.name}</li>
  );

  return (
    <div>
      <h1>Список товаров</h1>
      <ul class="list">
        {productItems}
      </ul>
    </div>
  );
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('root')
);
