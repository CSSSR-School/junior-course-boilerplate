import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './components/ProductList'
import Title from './components/Title'
import Form from './components/Form';
import products from './products.json';
import { FieldsContext, defaultPrice, defaultCategories } from './context';
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
      categories: defaultCategories,
    };
  }

  componentDidMount = () => {
    const searchParams = window.location.search;

    if (searchParams && searchParams.includes('?categories=')) {
      const checkedCategories = getUrlVars()['categories'];
      this.addCheckedCategoriesUrl(checkedCategories);
      this.setState(this.setCategories(checkedCategories));
    } else {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
    }

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentDidUpdate = () => {

  }

  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.setFromHistory);
  }

  getCheckedCategories = (categories) => {
    const currentCategories = Object.values(categories);
    return currentCategories.filter(category => category.checked).map(category  => category.name)
  }

  getProducts = () => {
    const currentPrice = this.state.price;
    const saleSize = currentPrice.sale / 100 ;
    const checkedCategories = this.getCheckedCategories(this.state.categories);
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

  updateCategoriesState = categoryName => {
    const newValue = {};
    newValue.categories = this.getNewCategoriesState(categoryName);

    this.setState(newValue);
  }

  getNewCategoriesState = updateCategoryName => {
    const currentCategoriesState = this.state.categories[updateCategoryName].checked;

    return {
      ...this.state.categories,
      [updateCategoryName]: {
        ...this.state.categories[updateCategoryName],
        checked: !currentCategoriesState
      }
    }
  }

  addCheckedCategoriesUrl = (checkedCategories) => {
    const categoriesURl = `?categories=${checkedCategories}`;
    window.history.pushState(checkedCategories, PAGE_TITLE, categoriesURl)
  }

  handleCategoryChange = evt => {
    const categoryName = evt.target.value;
    const currentCategories = this.getNewCategoriesState(categoryName);
    const checkedCategories = Object.values(currentCategories)
      .filter(category => category.checked)
      .map(category => category.name);

    if (checkedCategories.length !== 0) {
      this.addCheckedCategoriesUrl(checkedCategories)
    } else {
      window.history.pushState(DEFAULT_URL, PAGE_TITLE, DEFAULT_URL);
    }

    this.updateCategoriesState(categoryName);
  }

  handleReset = (evt) => {
    evt.preventDefault();
    const categories = Object.assign({}, this.state.categories);

    const categoriesNames = Object.keys(categories);
    categoriesNames.forEach(name => categories[name].checked = false);

    const newValue = {};
    newValue.categories = categories;

    this.setState(categories);
    window.history.pushState(DEFAULT_URL, `${PAGE_TITLE}`, DEFAULT_URL);
  }

  setCategories = (checkedCategories) => {
    const currentCategories = Object.values(this.state.categories);
    return currentCategories.map(category => {
      if (checkedCategories.includes(category.name)) {
        return category.checked = true;
      }

      return category.checked = false;
    })
  }

  setFromHistory = evt => {
    if (evt.state === DEFAULT_URL) {
      this.handleReset(evt);
      return;
    }

    const checkedCategories = evt.state;
    this.setState(this.setCategories(checkedCategories));
  }

  render() {
    return (
      <FieldsContext.Provider value={{
        price: this.state.price,
        categories: this.state.categories,
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
