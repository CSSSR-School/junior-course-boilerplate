import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import products from './products.json';

import ProductList from './productList/index';
import PageTitle from './pageTitle/index';

function ProductPage() {
  return (
    <div>
      <PageTitle name="Список товаров" />
      <ProductList products={ products.slice(0, 3) }>
      </ProductList>
    </div>
  );
}

ReactDOM.render(
  <ProductPage />,
  document.getElementById('root')
);
