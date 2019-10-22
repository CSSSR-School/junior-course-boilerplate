import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles.css';

// Импорт глупых компонентов
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';

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
