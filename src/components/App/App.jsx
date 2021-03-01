import React from 'react';
import Title from '../Title/Title.jsx';
import ProductsList from '../ProductsList/ProductsList.jsx';
import products from '../../products.json';

const App = () => {
  return (
    <main>
      <div className="container">
        <Title>Список товаров</Title>
        <ProductsList products={products}/>
      </div>
    </main>
  )
}

export default App;
