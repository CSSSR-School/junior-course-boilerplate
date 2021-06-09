import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products.json';


ReactDOM.render(
    <div id="root">
    <h3 className="align-center"> Список товаров </h3>
      <div className="container">
        { products.slice(0,3).map(product => ( 
        <div key={product.id} className="card">
          <p> Код товара: {product.id}</p>
          <p> Название: {product.name} </p>
        </div>
        ))}
      </div>
    </div>,
  document.getElementById('root')
);