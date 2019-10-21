import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="caption">Список товаров</h1>
    </header>
  );
};

const ProductsList = () => {
  return (
    <ul className="products">
      {data.splice(0, 3).map(item => {
        return (
          <li className="products__item" key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <ProductsList></ProductsList>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
