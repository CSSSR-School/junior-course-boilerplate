import React from "react";
import ReactDOM from "react-dom";

import ProductList from "./components/ProductsList/ProductsList.js"
import Title from "./components/Title/Title.js"
import products from "./products.json";

import "./index.css"

const App = () => {
  return (
    <div className = 'appWrapper'>
      <Title text = 'Список товаров'/>
      <ProductList products={products}/>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App />, rootElement);
