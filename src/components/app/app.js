import React from 'react';

import Products from '../products';

import './app.css';
import data from './assets/products.json';

const App = () => {
  return (
    <div className="app">
      <Products data={data} />
    </div>
  );
};

export default App;
