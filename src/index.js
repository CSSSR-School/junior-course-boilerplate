import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/ProductList'
import Title from './components/Title'
import Form from './components/Form';
import products from './products.json';
import { FieldsContext, defaultPrice, allCategories, DEFAULT_CHECKED_CATEGORIES } from './context';
import { getUrlVars } from './utils';

import './index.css'

const PAGE_TITLE = 'Интернет магазин'
const DEFAULT_URL = window.location.pathname;

const isCategoryFiltersEqual = (prevFilters, curFilters) => {
  if (prevFilters.length !== curFilters.length) {
    return false;
  }

  let result = true;

  prevFilters.forEach(item => {
    if (!curFilters.includes(item)) {
      result = false;
    }
  })

  return result;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
      price: defaultPrice,
      categories: allCategories,
      checkedCategories: DEFAULT_CHECKED_CATEGORIES,
    };
  }

  componentDidMount = () => {
    const searchParams = window.location.search;

    if (searchParams && searchParams.includes('?categories=')) {
      const url = getUrlVars();
      const checkedCategories = url['categories'].split(',');

      this.setState({
        checkedCategories: checkedCategories
      })
    } else {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
    }

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  componentDidUpdate = () => {
    let historyCategories = [];

    if (window.history.state) {
      historyCategories = window.history.state.split(',');
    }

    const currentCheckedCategories = this.state.checkedCategories;
    const isStatesEqual = isCategoryFiltersEqual(historyCategories, currentCheckedCategories);

    if (!isStatesEqual) {
      this.addCheckedCategoriesUrl(currentCheckedCategories);
    }
  }

  getProducts = () => {
    const currentPrice = this.state.price;
    const discountSize = currentPrice.discount / 100 ;
    const checkedCategories = this.state.checkedCategories;
    const isMoreThanMinPrice = (product) => product.price >= currentPrice.min;
    const isLessThanMaxPrice = (product) => product.price <= currentPrice.max;
    const isRelevantDiscount = (product) =>
      product.price === (product.subPriceContent - product.subPriceContent * discountSize);

    const isRelevantCategory = (product) =>
      checkedCategories.length === 0 ? true : checkedCategories.includes(product.category);

    const setFilter = (product) =>
      isMoreThanMinPrice(product)
      && isLessThanMaxPrice(product)
      && isRelevantDiscount(product)
      && isRelevantCategory(product)

    return this.state.products.filter((product) => setFilter(product))
  }

  handlePriceChange = (evt, value) => {
    const name = evt.target.name;
    const isNewValue = value !== this.state.price[name];

    if (!isNewValue) {
      return;
    }

    const newValue = {};
    newValue.price = {
      ...this.state.price,
      [name]: value
    };

    this.setState(newValue);
  }

  addCheckedCategoriesUrl = (checkedCategories) => {
    if (checkedCategories.length === 0) {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
      return;
    }

    const categoriesURl = `?categories=${checkedCategories.join()}`;
    window.history.pushState(checkedCategories.join(), PAGE_TITLE, categoriesURl)
  }

  handleCategoryChange = evt => {
    const changedCategory = evt.target.value;
    const checkedCategories = this.state.checkedCategories.slice();

    if (checkedCategories.includes(changedCategory)) {
      const deleteIndex = checkedCategories.indexOf(changedCategory);
      checkedCategories.splice(deleteIndex, 1);
    } else {
      checkedCategories.push(changedCategory);
    }

    this.setState({
      checkedCategories: checkedCategories
    });
  }

  handleReset = (evt) => {
    evt.preventDefault();

    this.setState({
      checkedCategories: []
    });

    window.history.pushState(DEFAULT_URL, `${PAGE_TITLE}`, DEFAULT_URL);
  }

  setFromHistory = evt => {
    const checkedCategories = evt.state;

    if (checkedCategories === DEFAULT_URL) {
      this.handleReset(evt);
      return;
    }

    this.setState({
      checkedCategories: checkedCategories.split(',')
    })
  }

  render() {
    return (
      <FieldsContext.Provider value={{
        price: this.state.price,
        categories: this.state.categories,
        checkedCategories: this.state.checkedCategories,
      }}>
        <div className='appWrapper'>
          <Title text='Список товаров'/>
          <div className='wrapper'>
            <Form
              handlePriceChange={this.handlePriceChange}
              handleCategoryChange={this.handleCategoryChange}
              handleReset={this.handleReset}
            />
            <ProductList products={this.getProducts()} />
          </div>
        </div>
      </FieldsContext.Provider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render (<App />, rootElement);
