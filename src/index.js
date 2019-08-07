import React from "react";
import ReactDOM from "react-dom";
import data from './products.json';

import "./index.css";

function App() {

  const ProductsList = data
    .filter(item => item.id < 4) 
    .map(item => <li key={item.id}>{item.name}</li>);

  return (
    <div className='goods'>
      <h1>Список товаров</h1>
      <ul>
        {ProductsList}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
