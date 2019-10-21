import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <h1 className="caption">Список товаров</h1>
    </header>
  );
}

function ProductsList() {
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
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ProductsList></ProductsList>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
