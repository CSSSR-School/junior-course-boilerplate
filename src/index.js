import React from 'react';
import ReactDOM from 'react-dom';

import data from './products.json';

import MainTitle from './components/MainTitle/MainTitle';
import CardsList from './components/CardsList/CardsList';

import './index.css';

function App() {

  return (
    <div className="App">
      <MainTitle title="Список товаров" />
      <CardsList listProducts={data} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
