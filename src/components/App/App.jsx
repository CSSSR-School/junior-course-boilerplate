import React, { useState } from 'react';
import { minBy, maxBy} from 'csssr-school-utils';

import PriceFilter from '../PriceFilter/PriceFilter';
import ProductList from '../ProductList/ProductList';
import PageHeader from '../PageHeader/PageHeader';

import products from '../../products.json';

import './App.css';

const DefaultPrice = {
  MIN: 0,
  MAX: Infinity,
}

const App = () => {
  const [minPrice, setMinPrice] = useState(
    () => minBy(product => product.price, products).price
  );
  const [maxPrice, setMaxPrice] = useState(
    () => maxBy(product => product.price, products).price
  );

  const handleFilterSubmit = ({ maxPrice: newMaxPrice, minPrice: newMinPrice }) => {
    if (minPrice === newMinPrice && maxPrice === newMaxPrice) {
      return;
    } else if (newMaxPrice < 0 || newMinPrice < 0) {
      newMinPrice = DefaultPrice.MIN
      newMaxPrice = DefaultPrice.MAX
    }
    setMinPrice(newMinPrice);
    setMaxPrice(newMaxPrice);
  }

  return (
    <div className="app">
    <PageHeader />
    <main className="page-main">
      <div className="sidebar">
          <PriceFilter
            onSubmit={handleFilterSubmit}
            defaultMinPrice={minPrice}
            defaultMaxPrice={maxPrice}
          />
      </div>
        <ProductList
          products={products}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
    </main>
    </div>
  );
};

export default App;
