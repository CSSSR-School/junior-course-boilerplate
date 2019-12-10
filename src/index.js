import React from 'react';
import ReactDOM from 'react-dom';

import products from './products.json';

import Title from './components/Title/Title';
import List from './components/List/List';

function App(props) {
  const products = props.products;
  return (
    <React.Fragment>
      <Title>Список товаров</Title>
      <ul><List props={products} /></ul>
    </React.Fragment>

  );
}

ReactDOM.render(<App products={products}/>, document.getElementById('root'));
