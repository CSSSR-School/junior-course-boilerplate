import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ProductsCard() {
  return (
    <div className="products-card">
      <h2 className="products-card__title">Список товаров</h2>
      <ul className="products-card__list">
        <li className="products-card__item">Имя товара 1</li>
        <li className="products-card__item">Имя товара 2</li>
        <li className="products-card__item">Имя товара 3</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <ProductsCard />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
