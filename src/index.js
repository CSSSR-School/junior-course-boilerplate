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
      const checkedCategories = getUrlVars()['categories'];
      const categoriesURl = `?categories=${checkedCategories}`;

      window.history.replaceState(checkedCategories, PAGE_TITLE, categoriesURl);
      this.setState({
        checkedCategories: checkedCategories.split(',')
      })
    } else {
      window.history.replaceState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
    }

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  getProducts = () => {
    const currentPrice = this.state.price;
    const saleSize = currentPrice.sale / 100 ;
    const checkedCategories = this.state.checkedCategories;
    const getProductByMinPrice = (product) => product.price >= currentPrice.min;
    const getProductByMaxPrice = (product) => product.price <= currentPrice.max;
    const getProductBySale = (product) =>
      product.price === (product.subPriceContent - product.subPriceContent * saleSize);

    const getProductByCategory = (product) =>
      checkedCategories.length === 0 ? true : checkedCategories.includes(product.category);

    const setFilter = (product) =>
      getProductByMinPrice(product)
      && getProductByMaxPrice(product)
      && getProductBySale(product)
      && getProductByCategory(product)

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
    const categoriesURl = `?categories=${checkedCategories.join()}`;
    window.history.pushState(checkedCategories, PAGE_TITLE, categoriesURl)
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

    if (checkedCategories.length !== 0) {
      this.addCheckedCategoriesUrl(checkedCategories)
    } else {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
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
    if (evt.state === DEFAULT_URL) {
      this.handleReset(evt);
      return;
    }

    let checkedCategories = evt.state;

    if (!checkedCategories) {
      checkedCategories = [];
    }

    this.setState({
      checkedCategories: checkedCategories
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
