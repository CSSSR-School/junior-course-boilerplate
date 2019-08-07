import React from "react";
import ReactDOM from "react-dom";
import data from './products.json';

import "./index.css";

function App() {
  return (
    <div className='main'>
      <h1>Список товаров</h1>
      <ul>
        {data.map((product, i) => {
          if (i < 3) {
            return <li key={product.id}>{`${product.name} ${product.id}`}</li>;
          }
          return null;
        })
      }
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
