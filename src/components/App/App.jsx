import React from 'react';

import PageHeader from '../PageHeader/PageHeader';

import DiscountFieldset from '../../containers/DiscountFieldsetContainer/DiscountFieldsetContainer';
import CategoryFieldset from '../../containers/CategoryFieldsetContainer/CategoryFieldsetContainer';
import PriceFieldset from '../../containers/PriceFieldsetContainer/PriceFieldContainer';
import ProductList from '../../containers/ProductListContainer/ProductListContainer';
import FilterForm from '../../containers/FilterFormContainer/FilterFormContainer';
import Pages from '../../containers/Pages/Pages';

import './App.css';

class App extends React.Component {
  componentDidUpdate() {
    const params = new URLSearchParams({
      category: this.props.category,
      page: this.props.currentPage
    });
    if (window.location.search !== params) {
      window.history.pushState(null, null, '?' + params);
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
          <Pages />
        </main>

        <div className="sidebar" />

      </div>
    );
  }
};



export default App;
