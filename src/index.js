import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App() {
  return (
    <React.Fragment>
      <h1>Список товаров</h1>
      <ul>
        <li>Имя товара 1</li>
        <li>Имя товара 2</li>
        <li>Имя товара 3</li>
      </ul>
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
