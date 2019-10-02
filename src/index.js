import React from "react";
import ReactDOM from "react-dom";
import products from "./products.json";

import "./index.css"

const ITEMS_NUMBER = 3;
const listItems = products.slice(0, ITEMS_NUMBER).map((item, number) =>
  <li key={number}>{item.name}</li>);
const rootElement = document.getElementById('root');

function App() {
  return (
    <div className = 'productsList'>
      <h1>Список товаров</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

ReactDOM.render (<App />, rootElement);
