import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import goods from "./products.json";

function App() {
  return (
    <div className="goods">
      <h1 class="goods-title">Список товаров</h1>
      <ul class="goods-list">
        {goods.map(item => (
          <li className="goods-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
