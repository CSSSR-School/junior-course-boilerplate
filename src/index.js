import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products.json';

const MAX_COUNT_PRODUCTS_TO_SHOW = 3;

function ProductsCard(props) {
  const productsToShow = props.products.slice(0, MAX_COUNT_PRODUCTS_TO_SHOW);

  return (
    <div className="products-card">
      <h2 className="products-card__title">Список товаров</h2>
      <ul className="products-card__list">
        {
          productsToShow.map(({ id, name }) => (
            <li className="products-card__item" key={id}>{name}</li>
          ))
        }
      </ul>
    </div>
  );
}

function App(props) {
  return (
    <div className="app">
      <ProductsCard products={props.products}/>
    </div>
  );
}

ReactDOM.render(
  <App products={products}/>,
  document.getElementById('root')
);
