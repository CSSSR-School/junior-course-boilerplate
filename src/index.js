import React from "react";
import ReactDOM from "react-dom";
import productsList from './products.json';

import "./index.css";

function App() {

  const productsItems = productsList.slice(0, 3)
    .map(({ id, name }) => <li key={id}>{name}</li>);

  return (
    <div className='goods'>
      <h1>Список товаров</h1>
      <ul>
        {productsItems}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
