import React from 'react';

import Products from '../products';

import './app.css';
import data from './assets/products.json';

const App = () => {
  return (
    <main className="app">
      <Products data={data} />
    </main>
  );
};

export default App;
