import React from 'react';
import { minBy, maxBy } from 'csssr-school-utils';

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

  handleFilterChange = (filter, value) => {
    switch (filter) {
      case 'minPrice':
      case 'maxPrice':
      case 'discount':
        this.setState({ [ filter ]: value });
        break;

      case 'category':
        this.setState(
          ({ category }) => ({
            category: category !== value ? value : null
          })
        );
        break;

      case 'reset':
        this.setState(this.defaultState);
        break;

      default:
        throw new Error('Unknown filter name provided to handleFilterChange()');
    }
  }

  componentDidUpdate() {
    const { category } = this.state;
    if (category) {
      window.history.pushState(null, category, `/?category=${category}`);
    }
  }

  render() {
    const { handleFilterChange } = this;
    return (
      <AppContext.Provider value={{ ...this.state, categories } }>
        <div className="app">

          <PageHeader />

          <div className="sidebar sidebar--left">
            <FilterForm onFilterChange={ handleFilterChange } />
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
