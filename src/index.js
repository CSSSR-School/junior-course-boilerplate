import React from "react";
import ReactDOM from "react-dom";

import ProductList from "./components/ProductsList/ProductsList"
import Title from "./components/Title/Title"
import Form from  "./components/Form/Form";
import products from "./products.json";

import "./index.css"

const App = () => {
  return (
    <div className='appWrapper'>
      <Title text='Список товаров'/>
      <div className='wrapper'>
        <Form />
        <ProductList products={products}/>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render (<App />, rootElement);
