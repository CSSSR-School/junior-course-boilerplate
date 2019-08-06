import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import products from "./products.json";

function App() {
  return (
    <div className="product">
      <h1 className="product__title">Список товаров</h1>
      <ul className="product__list">
        { 
          products.map(item => (
            <li className="product__item" key={item.id}>
              {item.name}
            </li>
            )
          )
        }
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);