import React from 'react';
import { minBy, maxBy } from 'csssr-school-utils';

import DiscountFieldset from '../FilterForm/DiscountFieldset/DiscountFieldset';
import CategoryFieldset from '../FilterForm/CategoryFieldset/CategoryFieldset';
import PriceFieldset from '../FilterForm/PriceFieldset/PriceFieldset';
import ProductList from '../ProductList/ProductList';
import FilterForm from '../FilterForm/FilterForm';
import PageHeader from '../PageHeader/PageHeader';

import products from '../../products.json';

import './App.css';

export const AppContext = React.createContext({});

const categories = products.reduce(
  (acc, product) => acc.includes(product.category) ? acc : [...acc, product.category],
  [],
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      minPrice: minBy(product => product.price, products).price,
      maxPrice: maxBy(product => product.price, products).price,
      category: null,
      discount: 0,
    }
    this.state = this.defaultState;
  }

  handleResetFilterButtonClick = () => { this.setState(this.defaultState); }
  handleMinPriceChange = (minPrice) => { this.setState({ minPrice }); }
  handleMaxPriceChange = (maxPrice) => { this.setState({ maxPrice }); }
  handleDiscountChange = (discount) => { this.setState({ discount }); }
  handleCategoryChange = (newCategory) => {
    this.setState(
      ({ category }) => ({
        category: category !== newCategory ? newCategory : null
      })
    );
  }

  componentDidUpdate() {
    const { category } = this.state;
    if (category) {
      window.history.pushState(null, category, `/?category=${category}`);
    }
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, categories } }>
        <div className="app">

          <PageHeader />

          <div className="sidebar sidebar--left">
            <FilterForm>
              <PriceFieldset
                defaultMinPrice={ this.state.minPrice }
                defaultMaxPrice={ this.state.maxPrice }
                onMinPriceChange={ this.handleMinPriceChange }
                onMaxPriceChange={ this.handleMaxPriceChange }
              />
              <DiscountFieldset
                defaultValue={ this.state.discount }
                onChange={ this.handleDiscountChange }
              />
              <CategoryFieldset
                onChange={ this.handleCategoryChange }
              />
              <button
                type="button"
                className="filter-form__reset"
                onClick={ this.handleResetFilterButtonClick }
              >
                Сбросить фильтры
              </button>
            </FilterForm>
          </div>

          <main className="page-main">
            <ProductList
              products={ products }
              minPrice={ this.state.minPrice }
              maxPrice={ this.state.maxPrice }
              discount={ this.state.discount }
              category={ this.state.category }
            />
          </main>

          <div className="sidebar" />

        </div>
      </AppContext.Provider>
    );
  }
};

export default App;
