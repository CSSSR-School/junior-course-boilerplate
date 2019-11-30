import React from "react";
import ReactDOM from "react-dom";
import data from "./products.json";
import "./index.scss";

function App() {
  const products = data
    .slice(0, 3)
    .map(({ name, id }) => <li key={id}>{name}</li>);

  return (
    <div className="app">
      <div className="products">
        <h1 className="title products__title">Список товаров</h1>
        <ul className="products__list">{products}</ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
