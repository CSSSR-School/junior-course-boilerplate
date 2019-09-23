import React from "react";
import ReactDOM from "react-dom";
import products from "./products.json";

import "./index.css"

const ITEMS_NUMBER = 3;
const rootElement = document.getElementById('root');

function ProductsList(props) {
  const itemsNumber = props.itemsNumber;
  const listItems = products.slice(0, itemsNumber).map((item, number) =>
    <li key={number}>{item.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

ReactDOM.render(
  <div className = 'productsList'>
    <h1>Список товаров</h1>
    <ProductsList itemsNumber={ITEMS_NUMBER} />
  </div>,
  rootElement);
