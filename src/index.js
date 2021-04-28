import React, { useState } from 'react';
import ReactDom from 'react-dom';

import products from './products.json';
import './index.css';

const ItemsList = () => {
  const [items] = useState(products);

  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const App = <ItemsList />;

ReactDom.render(App, document.getElementById('root'));
