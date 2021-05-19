import React from 'react';

import PageHeader from '../PageHeader/PageHeader';

import DiscountFieldset from '../../containers/DiscountFieldsetContainer/DiscountFieldsetContainer';
import CategoryFieldset from '../../containers/CategoryFieldsetContainer/CategoryFieldsetContainer';
import PriceFieldset from '../../containers/PriceFieldsetContainer/PriceFieldContainer';
import ProductList from '../../containers/ProductListContainer/ProductListContainer';
import FilterForm from '../../containers/FilterFormContainer/FilterFormContainer';

import './App.css';

class App extends React.Component {
  componentDidUpdate() {
    const { category } = this.state;
    if (category) {
      window.history.pushState(null, category, `/?category=${category}`);
    } else {
      window.history.pushState(null, null, '/');
    }
  }

  render() {
    return (
      <div className="app">

        <PageHeader />

        <div className="sidebar sidebar--left">
          <FilterForm >
            <PriceFieldset />
            <DiscountFieldset />
            <CategoryFieldset />
          </FilterForm>
        </div>

        <main className="page-main">
          <ProductList />
        </main>

        <div className="sidebar" />

      </div>
    );
  }
};

export default App;
