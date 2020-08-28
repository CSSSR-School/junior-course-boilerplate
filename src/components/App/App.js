import React from 'react';
import Goods from '../Goods';
import Header from '../Header';
import GoodsList from '../GoodsList';
import Filters from '../Filters';
import BaseComponent from '../BaseComponent/BaseComponent';
import styles from './App.module.sass';

const getMinPrice = products => Math.min(...products.map(({ price }) => price));
const getMaxPrice = products => Math.max(...products.map(({ price }) => price));

class App extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      showingProducts: props.products,
      minProductPrice: getMinPrice(props.products),
      maxProductPrice: getMaxPrice(props.products)
    };
  }

  filterProducts = (minPrice, maxPrice) => {
    const { products } = this.state;
    const showingProducts = products.filter(
      ({ price }) => price >= minPrice && price <= maxPrice
    );

    this.setState({ showingProducts });
  };

  render() {
    const { minProductPrice, maxProductPrice, showingProducts } = this.state;

    return (
      <div className={styles.App}>
        <Filters
          minProductPrice={minProductPrice}
          maxProductPrice={maxProductPrice}
          filterProducts={this.filterProducts}
        />
        <Goods>
          <Header>Список товаров</Header>
          <GoodsList goods={showingProducts} />
        </Goods>
      </div>
    );
  }
}

export default App;
