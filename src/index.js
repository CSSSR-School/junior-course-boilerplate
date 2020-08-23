import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.json';

const App = ({ products }) => {
  return (
    <div className="app">
      <article className="goods">
        <h2 className="goods__header">Список товаров</h2>
        <ul className="goods__list">
          {products.slice(0, 3).map(({ id, name }) => (
            <li className="goods__item" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

ReactDOM.render(<App products={products} />, document.getElementById('root'));
