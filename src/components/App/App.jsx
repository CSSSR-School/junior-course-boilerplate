import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: minBy(product => product.price, products).price,
      maxPrice: maxBy(product => product.price, products).price,
    }
  }

  handleFilterSubmit = ({ maxPrice: newMaxPrice, minPrice: newMinPrice }) => {
    const { minPrice, maxPrice } = this.state;
    if (minPrice === newMinPrice && maxPrice === newMaxPrice) {
      return;
    } else if (newMaxPrice < 0 || newMinPrice < 0) {
      newMinPrice = DefaultPrice.MIN
      newMaxPrice = DefaultPrice.MAX
    }
    this.setState({ minPrice: newMinPrice, maxPrice: newMaxPrice })
  }

  render() {
    const { minPrice, maxPrice } = this.state;
    return (
      <div className="app">
      <PageHeader />
      <main className="page-main">
        <div className="sidebar">
            <PriceFilter
              onSubmit={ this.handleFilterSubmit }
              defaultMinPrice={ minPrice }
              defaultMaxPrice={ maxPrice }
            />
        </div>
          <ProductList
            products={ products }
            minPrice={ minPrice }
            maxPrice={ maxPrice }
          />
      </main>
      </div>
    );
  }
};

export default App;
