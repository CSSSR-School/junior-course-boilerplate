import React from 'react';
import Title from '../Title/Title.jsx';
import ProductsList from '../ProductsList/ProductsList.jsx';
import products from '../../products.json';

const App = () => {
  return (
    <div className="container">
      <Title text="Список товаров"/>
      <ProductsList products={products}/>
    </div>
  )
}

export default App;
