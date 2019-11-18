import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from './products.json'


function App() {
  return (
    <div className="App">
      <h1>Список товаров</h1>
      <ul>
          {data.slice(0, 3).map((prod) => 
          <li>{prod.name}</li> 
          )}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);